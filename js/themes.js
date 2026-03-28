/* ═══════════════════════════════════════════
   THEMES.JS — Theme engine with animated backgrounds
   4 themes: Jungle, Toybox, Pokémon, Underwater
   ═══════════════════════════════════════════ */

const THEME_DEFS = {
  jungle: {
    id: 'jungle',
    name: 'Jungle Safari',
    icon: '🌴',
    desc: 'Explore the wild jungle!',
    bgElements: ['🍃', '🌿', '🦜', '🌺', '🍀', '🌳', '🦎', '🐒'],
    elementClass: 'bg-element-jungle',
    elementCount: 10,
  },
  toybox: {
    id: 'toybox',
    name: 'Toybox',
    icon: '🧸',
    desc: 'Warm & playful toy shop vibes',
    bgElements: ['🧸', '🎨', '🎪', '🎲', '🪀', '🎈', '🧩', '🎠'],
    elementClass: 'bg-element-toybox',
    elementCount: 8,
  },
  pokemon: {
    id: 'pokemon',
    name: 'Pokémon Trainer',
    icon: '⚡',
    desc: 'Gotta quiz \'em all!',
    bgElements: [], // Uses actual Pokemon sprites instead
    elementClass: 'bg-element-pokemon',
    elementCount: 8,
    useSprites: true,
  },
  underwater: {
    id: 'underwater',
    name: 'Deep Ocean',
    icon: '🌊',
    desc: 'Dive into the deep blue!',
    bgElements: ['🫧', '🐠', '🐙', '🪸', '🐚', '🦀', '🐋', '🌊', '💎', '🪼'],
    elementClass: 'bg-element-underwater',
    elementCount: 12,
  },
};

const ThemeEngine = {
  _current: 'jungle',
  _bgContainer: null,

  init() {
    this._current = Storage.getTheme();
    this.apply(this._current);
  },

  apply(themeId) {
    const theme = THEME_DEFS[themeId];
    if (!theme) return;
    this._current = themeId;
    document.documentElement.setAttribute('data-theme', themeId);
    Storage.saveTheme(themeId);
    this._renderBackground(theme);
  },

  getCurrent() {
    return this._current;
  },

  getThemeDef(id) {
    return THEME_DEFS[id || this._current];
  },

  getAllThemes() {
    return Object.values(THEME_DEFS);
  },

  _renderBackground(theme) {
    // Remove old bg elements
    let container = document.getElementById('bg-elements');
    if (container) container.remove();

    container = document.createElement('div');
    container.id = 'bg-elements';
    container.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden;';
    document.body.prepend(container);
    this._bgContainer = container;

    if (theme.useSprites) {
      this._renderPokemonSprites(container, theme.elementCount);
    } else {
      this._renderEmojiElements(container, theme);
    }
  },

  _renderEmojiElements(container, theme) {
    for (let i = 0; i < theme.elementCount; i++) {
      const el = document.createElement('div');
      el.className = theme.elementClass;
      el.textContent = theme.bgElements[i % theme.bgElements.length];
      el.style.left = (Math.random() * 90 + 5) + '%';
      el.style.top = (Math.random() * 90 + 5) + '%';
      el.style.animationDuration = (8 + Math.random() * 12) + 's';
      el.style.animationDelay = (Math.random() * 8) + 's';
      el.style.fontSize = (18 + Math.random() * 16) + 'px';
      container.appendChild(el);
    }
  },

  _renderPokemonSprites(container, count) {
    // Use random Gen 1 Pokemon IDs (1-151) for sprites
    const usedIds = new Set();
    for (let i = 0; i < count; i++) {
      let id;
      do { id = Math.floor(Math.random() * 151) + 1; } while (usedIds.has(id));
      usedIds.add(id);

      const img = document.createElement('img');
      img.className = 'poke-sprite';
      img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
      img.alt = '';
      img.loading = 'lazy';
      img.style.left = (Math.random() * 85 + 5) + '%';
      img.style.top = (Math.random() * 85 + 5) + '%';
      img.style.animationDuration = (6 + Math.random() * 8) + 's';
      img.style.animationDelay = (Math.random() * 5) + 's';
      img.style.width = (40 + Math.random() * 30) + 'px';
      img.style.height = img.style.width;
      container.appendChild(img);
    }
  },

  // Render the theme picker modal HTML
  renderPicker(currentTheme, onSelect) {
    const overlay = document.createElement('div');
    overlay.className = 'theme-picker-overlay';
    overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };

    const card = document.createElement('div');
    card.className = 'theme-picker-card';

    const title = document.createElement('div');
    title.style.cssText = 'font-family:var(--font-heading);font-size:22px;font-weight:700;color:var(--text-heading);margin-bottom:16px;text-align:center;';
    title.textContent = '🎨 Choose Your Theme';
    card.appendChild(title);

    Object.values(THEME_DEFS).forEach(theme => {
      const btn = document.createElement('button');
      btn.className = 'theme-option' + (currentTheme === theme.id ? ' active' : '');
      btn.innerHTML = `
        <span class="theme-option-icon">${theme.icon}</span>
        <div>
          <div class="theme-option-name">${theme.name}</div>
          <div class="theme-option-desc">${theme.desc}</div>
        </div>
      `;
      btn.onclick = () => {
        onSelect(theme.id);
        overlay.remove();
      };
      card.appendChild(btn);
    });

    const closeBtn = document.createElement('button');
    closeBtn.className = 'btn-secondary w-full mt-12';
    closeBtn.textContent = 'Close';
    closeBtn.onclick = () => overlay.remove();
    card.appendChild(closeBtn);

    overlay.appendChild(card);
    return overlay;
  }
};
