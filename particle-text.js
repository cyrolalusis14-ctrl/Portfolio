(() => {
  const heading = document.querySelector('#hero-title');
  const canvas = heading?.querySelector('.hero-particles');
  const context = canvas?.getContext('2d');
  if (!heading || !canvas || !context) {
    console.error('Hero particle text could not initialize: required canvas or heading is unavailable.');
    return;
  }

  const sampleCanvas = document.createElement('canvas');
  const sampleContext = sampleCanvas.getContext('2d', { willReadFrequently: true });
  const accentCanvas = document.createElement('canvas');
  const accentContext = accentCanvas.getContext('2d', { willReadFrequently: true });
  const probeCanvas = document.createElement('canvas');
  const probeContext = probeCanvas.getContext('2d', { willReadFrequently: true });
  if (!sampleContext || !accentContext || !probeContext) {
    console.error('Hero particle text could not initialize: 2D canvas is unavailable.');
    return;
  }

  const accent = getComputedStyle(document.documentElement).getPropertyValue('--lime').trim() || '#d9ff3f';
  const lines = [...heading.querySelectorAll('.hero-line')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = { active: false, x: 0, y: 0 };
  const particles = [];
  const groups = Array.from({ length: 24 }, () => []);
  const palettes = [[], []];
  let width = 0;
  let height = 0;
  let ratio = 1;
  let frame = 0;
  let sampleFrame = 0;
  let startTime = 0;
  let lastTime = 0;
  let introRunning = false;
  let visible = true;
  let initialSample = true;
  let burstActive = false;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const easeOutCubic = value => 1 - (1 - value) ** 3;

  function collectRuns(element) {
    const runs = [];
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!node.textContent) continue;
      const parent = node.parentElement;
      if (!parent) continue;
      runs.push({
        text: node.textContent,
        color: getComputedStyle(parent).color,
        accent: Boolean(parent.closest('.lime'))
      });
    }
    return runs;
  }

  function setPalette() {
    const colorRgb = color => {
      probeContext.fillStyle = '#000000';
      probeContext.fillStyle = color;
      probeContext.fillRect(0, 0, 1, 1);
      const [r, g, b] = probeContext.getImageData(0, 0, 1, 1).data;
      return [r, g, b];
    };

    const baseColor = getComputedStyle(document.documentElement).getPropertyValue('--text').trim() || '#f5f5f0';
    const baseColors = [colorRgb(baseColor), colorRgb(accent)];
    const highlight = colorRgb(accent);
    baseColors.forEach((base, colorIndex) => {
      palettes[colorIndex] = Array.from({ length: 12 }, (_, index) => {
        const amount = index / 11;
        const rgb = base.map((channel, i) => Math.round(channel + (highlight[i] - channel) * amount));
        return `rgb(${rgb.join(',')})`;
      });
    });
  }

  function draw() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    groups.forEach(group => { group.length = 0; });

    const now = performance.now();
    const elapsed = lastTime ? Math.min((now - lastTime) / 1000, 0.05) : 1 / 60;
    lastTime = now;
    const gatherProgress = introRunning
      ? clamp((now - startTime) / 2070, 0, 1)
      : 1;
    let moving = introRunning;
    const time = now / 1000;

    particles.forEach(particle => {
      const progress = introRunning
        ? easeOutCubic(clamp((now - startTime - particle.delay) / 1650, 0, 1))
        : 1;
      let x = particle.startX + (particle.targetX - particle.startX) * progress;
      let y = particle.startY + (particle.targetY - particle.startY) * progress;
      const drift = reducedMotion.matches ? 0 : 0.22;
      x += Math.sin(time + particle.seed * 10) * drift;
      y += Math.cos(time * 0.8 + particle.seed * 8) * drift;

      if (burstActive) {
        particle.vx += (-18 * particle.ox - 7.5 * particle.vx) * elapsed;
        particle.vy += (-18 * particle.oy - 7.5 * particle.vy) * elapsed;
        particle.ox += particle.vx * elapsed;
        particle.oy += particle.vy * elapsed;
        if (Math.abs(particle.ox) + Math.abs(particle.oy) > 0.1) moving = true;
        else {
          particle.ox = 0;
          particle.oy = 0;
          particle.vx = 0;
          particle.vy = 0;
        }
        x += particle.ox;
        y += particle.oy;
      }

      if (pointer.active && !reducedMotion.matches) {
        const dx = x - pointer.x;
        const dy = y - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (distance > 0 && distance < 120) {
          const force = (1 - distance / 120) ** 2 * 22;
          x += (dx / distance) * force;
          y += (dy / distance) * force;
          moving = true;
        }
      }

      const movement = Math.hypot(x - particle.targetX, y - particle.targetY);
      const tone = Math.round(clamp((movement - 3) / 38, 0, 1) * 11);
      groups[particle.colorIndex * 12 + tone].push({ x, y, size: particle.size });
    });

    groups.forEach((group, index) => {
      if (!group.length) return;
      context.beginPath();
      group.forEach(point => {
        context.moveTo(point.x + point.size / 2, point.y);
        context.arc(point.x, point.y, point.size / 2, 0, Math.PI * 2);
      });
      context.fillStyle = palettes[Math.floor(index / 12)][index % 12];
      context.fill();
    });

    if (introRunning && gatherProgress >= 1) introRunning = false;
    if (burstActive && !moving) burstActive = false;
    if (moving || (!reducedMotion.matches && visible)) frame = requestAnimationFrame(draw);
    else {
      frame = 0;
      lastTime = 0;
    }
  }

  function wake() {
    if (!frame && visible) frame = requestAnimationFrame(draw);
  }

  function sampleText() {
    if (sampleFrame) cancelAnimationFrame(sampleFrame);
    sampleFrame = requestAnimationFrame(() => {
      sampleFrame = 0;
      width = heading.clientWidth;
      height = heading.clientHeight;
      if (!width || !height) return;

      ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(width * ratio));
      canvas.height = Math.max(1, Math.round(height * ratio));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      sampleCanvas.width = width;
      sampleCanvas.height = height;
      accentCanvas.width = width;
      accentCanvas.height = height;
      sampleContext.clearRect(0, 0, width, height);
      accentContext.clearRect(0, 0, width, height);

      const headingRect = heading.getBoundingClientRect();
      const tracking = parseFloat(getComputedStyle(heading).letterSpacing) || 0;
      lines.forEach(line => {
        const style = getComputedStyle(line);
        const lineRect = line.getBoundingClientRect();
        const fontSize = parseFloat(style.fontSize);
        sampleContext.font = `${style.fontWeight} ${fontSize}px ${style.fontFamily}`;
        accentContext.font = sampleContext.font;
        sampleContext.textBaseline = 'alphabetic';
        accentContext.textBaseline = 'alphabetic';
        let x = lineRect.left - headingRect.left;
        const baseline = lineRect.top - headingRect.top + fontSize * 0.82;
        collectRuns(line).forEach(run => {
          sampleContext.fillStyle = run.color;
          sampleContext.fillText(run.text, x, baseline);
          if (run.accent) accentContext.fillText(run.text, x, baseline);
          const runWidth = sampleContext.measureText(run.text).width;
          x += runWidth + tracking * Math.max(0, run.text.length - 1);
        });
      });

      const image = sampleContext.getImageData(0, 0, width, height);
      const accentImage = accentContext.getImageData(0, 0, width, height);
      const points = [];
      const step = 4;
      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const offset = (y * width + x) * 4;
          if (image.data[offset + 3] < 80) continue;
          points.push({
            x,
            y,
            colorIndex: accentImage.data[offset + 3] > 80 ? 1 : 0,
            seed: Math.random()
          });
        }
      }

      const stride = Math.max(1, Math.ceil(points.length / 4200));
      const selected = points.filter((_, index) => index % stride === 0);
      particles.length = 0;
      selected.forEach(point => {
        const angle = point.seed * Math.PI * 2;
        const distance = reducedMotion.matches ? 0 : 150 * (0.35 + point.seed * 0.75);
        particles.push({
          targetX: point.x,
          targetY: point.y,
          startX: point.x + Math.cos(angle) * distance,
          startY: point.y + Math.sin(angle) * distance,
          colorIndex: point.colorIndex,
          seed: point.seed,
          size: 1.7 + point.seed * 0.6,
          delay: point.seed * 420,
          ox: 0,
          oy: 0,
          vx: 0,
          vy: 0
        });
      });

      setPalette();
      if (initialSample && !reducedMotion.matches) {
        initialSample = false;
        startTime = performance.now();
        introRunning = true;
      } else {
        initialSample = false;
        introRunning = false;
        particles.forEach(particle => {
          particle.startX = particle.targetX;
          particle.startY = particle.targetY;
        });
      }
      heading.classList.add('particle-ready');
      wake();
    });
  }

  function burst(event) {
    if (reducedMotion.matches) return;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    particles.forEach(particle => {
      const dx = particle.targetX - x;
      const dy = particle.targetY - y;
      const distance = Math.hypot(dx, dy);
      if (distance > 180) return;
      const angle = Math.atan2(dy, dx);
      const strength = (1 - distance / 180) * 520;
      particle.vx += Math.cos(angle) * strength;
      particle.vy += Math.sin(angle) * strength;
    });
    burstActive = true;
    wake();
  }

  canvas.addEventListener('pointermove', event => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = event.clientX - rect.left;
    pointer.y = event.clientY - rect.top;
    pointer.active = true;
    wake();
  }, { passive: true });
  canvas.addEventListener('pointerleave', () => {
    pointer.active = false;
    wake();
  });
  canvas.addEventListener('pointerdown', burst);
  canvas.addEventListener('pointerenter', () => {
    if (reducedMotion.matches || !particles.length) return;
    startTime = performance.now();
    introRunning = true;
    particles.forEach(particle => {
      const angle = particle.seed * Math.PI * 2;
      particle.startX = particle.targetX + Math.cos(angle) * 100;
      particle.startY = particle.targetY + Math.sin(angle) * 100;
    });
    wake();
  });

  function handleMotionChange() {
    if (reducedMotion.matches) {
      cancelAnimationFrame(frame);
      frame = 0;
      introRunning = false;
      burstActive = false;
      particles.forEach(particle => {
        particle.startX = particle.targetX;
        particle.startY = particle.targetY;
        particle.ox = 0;
        particle.oy = 0;
        particle.vx = 0;
        particle.vy = 0;
      });
      wake();
    }
  }

  reducedMotion.addEventListener('change', handleMotionChange);
  const resizeObserver = new ResizeObserver(sampleText);
  resizeObserver.observe(heading);
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) wake();
    else {
      cancelAnimationFrame(frame);
      frame = 0;
    }
  });
  visibilityObserver.observe(heading);

  document.fonts.ready.then(() => {
    window.setTimeout(sampleText, 1900);
  });
})();
