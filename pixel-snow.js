(() => {
  const canvas = document.querySelector('.pixel-snow');
  const context = canvas?.getContext('2d');
  if (!canvas || !context) return;

  const sprites = [
    ['@'],
    ['.x.', 'x@x', '.x.'],
    ['..x..', 'x.o.x', '.o@o.', 'x.o.x', '..x..'],
    ['...x...', '.x.o.x.', '..ooo..', 'xoo@oox', '..ooo..', '.x.o.x.', '...x...'],
    ['....x....', '.x..o..x.', '..o.o.o..', '...ooo...', 'xooo@ooox', '...ooo...', '..o.o.o..', '.x..o..x.', '....x....']
  ];
  const weights = [0.46, 0.27, 0.15, 0.08, 0.04];
  const fallSpeeds = [16, 24, 34, 48, 66];
  const pointer = { x: 0, y: 0, vx: 0, vy: 0, time: 0, inside: false };
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const flakes = [];
  let width = 0;
  let height = 0;
  let pixelSize = 3;
  let frameId = 0;
  let lastTime = 0;
  let introTime = 0;

  function chooseLevel() {
    let value = Math.random();
    for (let level = 0; level < weights.length; level += 1) {
      value -= weights[level];
      if (value <= 0) return level;
    }
    return weights.length - 1;
  }

  function resetFlake(flake, startAbove = false) {
    flake.level = chooseLevel();
    flake.x = Math.random() * width;
    flake.y = startAbove ? -Math.random() * height : Math.random() * height;
    flake.vx = 0;
    flake.vy = fallSpeeds[flake.level] * (0.7 + Math.random() * 0.6);
    flake.phase = Math.random() * Math.PI * 2;
    flake.rate = 0.6 + Math.random() * 0.9;
    flake.drift = 0.7 + Math.random() * 0.6;
    flake.twinkle = Math.random() * Math.PI * 2;
  }

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.max(1, Math.round(width * ratio));
    canvas.height = Math.max(1, Math.round(height * ratio));
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.min(420, Math.max(50, Math.round((width * height * 0.25) / 1500)));
    while (flakes.length < count) {
      const flake = {};
      resetFlake(flake);
      flakes.push(flake);
    }
    flakes.length = count;
    draw();
  }

  function drawFlake(flake, time) {
    const sprite = sprites[flake.level];
    const size = sprite.length;
    const originX = Math.round(flake.x / pixelSize) * pixelSize - ((size - 1) * pixelSize) / 2;
    const originY = Math.round(flake.y / pixelSize) * pixelSize - ((size - 1) * pixelSize) / 2;
    const twinkle = 0.72 + Math.max(0, Math.sin(time * 0.9 + flake.twinkle)) ** 24 * 0.28;

    for (let row = 0; row < size; row += 1) {
      for (let column = 0; column < sprite[row].length; column += 1) {
        const mark = sprite[row][column];
        if (mark === '.') continue;
        const opacity = mark === '@' ? 0.85 : mark === 'o' ? 0.48 : 0.24;
        context.fillStyle = `rgba(245, 245, 240, ${opacity * twinkle})`;
        context.fillRect(originX + column * pixelSize, originY + row * pixelSize, pixelSize, pixelSize);
      }
    }
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    flakes.forEach((flake) => drawFlake(flake, introTime));
  }

  function update(delta) {
    const wind = 0.25 * 46;
    const radius = 105;
    for (const flake of flakes) {
      const sway = Math.sin(introTime * flake.rate + flake.phase) * (6 + flake.level * 7);
      const targetX = (wind + sway) * flake.drift;
      const ease = 1 - Math.exp(-delta * 2.2);
      flake.vx += (targetX - flake.vx) * ease;

      if (pointer.inside) {
        const dx = flake.x - pointer.x;
        const dy = flake.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (distance < radius && distance > 0.001) {
          const near = 1 - distance / radius;
          const repel = near * near * 480 * delta;
          const carry = near * near * delta * 2.5;
          flake.vx += (dx / distance) * repel + pointer.vx * carry;
          flake.vy += (dy / distance) * repel + pointer.vy * carry;
        }
      }

      flake.x += flake.vx * delta;
      flake.y += flake.vy * delta;
      if (flake.y > height + 30) resetFlake(flake, true);
      if (flake.x < -30) flake.x += width + 60;
      else if (flake.x > width + 30) flake.x -= width + 60;
    }
    pointer.vx *= Math.exp(-delta * 6);
    pointer.vy *= Math.exp(-delta * 6);
  }

  function animate(now) {
    frameId = 0;
    if (document.hidden) return;
    const delta = lastTime ? Math.min((now - lastTime) / 1000, 0.05) : 1 / 60;
    lastTime = now;
    introTime += delta;
    if (!motionPreference.matches) update(delta);
    draw();
    if (!motionPreference.matches) frameId = requestAnimationFrame(animate);
    else lastTime = 0;
  }

  function wake() {
    if (!frameId && !document.hidden) frameId = requestAnimationFrame(animate);
  }

  function onPointerMove(event) {
    if (event.pointerType === 'touch' || motionPreference.matches) return;
    const now = performance.now();
    if (pointer.inside && pointer.time) {
      const elapsed = Math.max(1, now - pointer.time) / 1000;
      pointer.vx = Math.max(-1800, Math.min(1800, (event.clientX - pointer.x) / elapsed));
      pointer.vy = Math.max(-1800, Math.min(1800, (event.clientY - pointer.y) / elapsed));
    }
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.time = now;
    pointer.inside = true;
  }

  function onPointerLeave() {
    pointer.inside = false;
  }

  function onMotionPreferenceChange() {
    cancelAnimationFrame(frameId);
    frameId = 0;
    lastTime = 0;
    if (motionPreference.matches) {
      pointer.inside = false;
      draw();
    } else {
      wake();
    }
  }

  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  document.documentElement.addEventListener('pointerleave', onPointerLeave);
  document.addEventListener('visibilitychange', wake);
  motionPreference.addEventListener('change', onMotionPreferenceChange);

  resize();
  wake();
})();
