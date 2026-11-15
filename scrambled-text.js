(() => {
  const heading = document.querySelector('#hero-title');
  const lines = heading ? [...heading.querySelectorAll('.hero-line')] : [];
  if (!heading || !lines.length) {
    console.error('Scrambled heading could not initialize: required heading text is unavailable.');
    return;
  }

  const scrambleChars = '.:';
  const duration = 1200;
  const glyphs = [];
  const segmenter = typeof Intl.Segmenter === 'function'
    ? new Intl.Segmenter(undefined, { granularity: 'grapheme' })
    : null;

  function splitText(line) {
    const walker = document.createTreeWalker(line, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) nodes.push(node);

    nodes.forEach(textNode => {
      const characters = segmenter
        ? [...segmenter.segment(textNode.textContent)].map(part => part.segment)
        : Array.from(textNode.textContent);
      const fragment = document.createDocumentFragment();

      characters.forEach(character => {
        const cell = document.createElement('span');
        cell.className = 'scramble-cell';
        const sizer = document.createElement('span');
        sizer.className = 'scramble-cell-sizer';
        sizer.textContent = character;
        const glyph = document.createElement('span');
        glyph.className = 'scramble-cell-glyph';
        glyph.textContent = character;
        cell.append(sizer, glyph);
        fragment.append(cell);

        if (!/^\s+$/u.test(character)) glyphs.push({ element: glyph, original: character });
      });

      textNode.replaceWith(fragment);
    });
  }

  function runIntro() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const start = performance.now();
    const revealTimes = glyphs.map((_, index) =>
      150 + duration * (0.75 * (index / glyphs.length) + 0.25 * Math.random())
    );
    const nextScramble = glyphs.map(() => start);

    glyphs.forEach(glyph => {
      glyph.element.textContent = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
    });

    function tick(now) {
      let pending = false;
      glyphs.forEach((glyph, index) => {
        const elapsed = now - start;
        if (elapsed >= revealTimes[index]) {
          glyph.element.textContent = glyph.original;
        } else {
          pending = true;
          if (now >= nextScramble[index]) {
            glyph.element.textContent = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
            nextScramble[index] = now + 85;
          }
        }
      });

      if (pending) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  function prepare() {
    lines.forEach(splitText);
    if (!('IntersectionObserver' in window)) {
      runIntro();
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      runIntro();
    }, { rootMargin: '0px 0px -10% 0px' });
    observer.observe(heading);
  }

  if (document.fonts?.status === 'loaded' || !document.fonts) {
    prepare();
  } else {
    document.fonts.ready.then(prepare, error => {
      console.error('Scrambled heading font wait failed; using the available fallback font.', error);
      prepare();
    });
  }
})();
