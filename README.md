# 🧩 Roquiz — Learn Something Fun!

A fun, educational quiz app for kids in grades 1–5, built as a Progressive Web App (PWA). Features 18 quiz categories, 4 visual themes, an XP rewards system, and a hybrid question engine powered by multiple trivia APIs + AI.

## ✨ Features

- **18 Quiz Categories** — Animals, Science, History, Pokémon, and more
- **4 Visual Themes** — Jungle Safari (default), Toybox, Pokémon Trainer, Deep Ocean
- **Progression System** — 9 starter categories, unlock more as you play (500 Qs + 80% accuracy per tier)
- **XP & Levels** — Earn XP for correct answers, level up from Curious Kid to Roquiz Champion
- **Rewards Store** — Redeem XP for digital stickers, gift cards, toys, or charitable donations
- **Badge System** — 8 achievements to unlock
- **Grade-Appropriate Questions** — Difficulty adjusts based on grade (1st–5th)
- **Country-Specific Content** — Questions tailored to the student's country
- **Chiptune Sound Effects** — Synthesized sounds for correct/wrong/fanfare/badges
- **Background Music** — Light chiptune loop during quizzes
- **Hybrid Question Engine** — OpenTDB + The Trivia API + Claude AI + 270 fallback questions
- **Round Sizes** — 5, 10, 25, 50, 100, 250, 500, or 1000 questions
- **Offline Support** — Service worker caches assets for offline play
- **Privacy-First** — All data stored locally on device, exportable as JSON
- **PWA Ready** — Installable on iOS and Android home screens

## 🚀 Quick Start

### Deploy to GitHub Pages

1. Fork or clone this repo
2. Go to Settings → Pages
3. Set source to `main` branch, root `/`
4. Your app will be live at `https://yourusername.github.io/roquiz/`

### Run Locally

Just open `index.html` in a browser, or use a local server:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`

## 📁 Project Structure

```
roquiz/
├── index.html              # Main entry point
├── manifest.json            # PWA manifest
├── sw.js                    # Service worker (offline support)
├── css/
│   ├── themes.css           # 4 theme definitions (Jungle, Toybox, Pokémon, Underwater)
│   ├── app.css              # Core layout & component styles
│   └── animations.css       # Keyframe animations
├── js/
│   ├── storage.js           # LocalStorage data layer (privacy-first)
│   ├── themes.js            # Theme engine + animated backgrounds
│   ├── audio.js             # Web Audio API chiptune sounds
│   ├── questions.js         # Hybrid question fetcher
│   ├── fallback-questions.js # 270 built-in questions (15 × 18 categories)
│   ├── game.js              # Game data: categories, levels, badges, rewards
│   ├── ui.js                # DOM-based view renderer
│   └── app.js               # Main app controller + state management
├── icons/
│   ├── icon-192.png         # PWA icon
│   └── icon-512.png         # PWA icon (large)
└── README.md
```

## 🔌 APIs Used

| API | Purpose | Auth Required? |
|-----|---------|---------------|
| [OpenTDB](https://opentdb.com/) | 4000+ trivia questions | No |
| [The Trivia API](https://the-trivia-api.com/) | Categorized trivia questions | No |
| [Claude AI](https://anthropic.com/) | Generate fresh questions on-the-fly | Via artifact only |
| [PokéAPI Sprites](https://github.com/PokeAPI/sprites) | Pokémon images for theme | No |

## 🎨 Themes

| Theme | Vibe | Cursor | Background |
|-------|------|--------|------------|
| 🌴 Jungle Safari | Dark greens, gold accents | 🌿 | Falling leaves & parrots |
| 🧸 Toybox | Warm cream, colorful blocks | 🧸 | Floating toys & shapes |
| ⚡ Pokémon Trainer | Dark blue, red & yellow | ⚡ | Animated Pokémon sprites |
| 🌊 Deep Ocean | Deep blue, cyan glow | 🐠 | Rising bubbles & sea creatures |

## 🔒 Privacy

- **All data is stored locally** using `localStorage`
- **No accounts or sign-ups** required
- **No data sent to servers** (except API calls for questions)
- **Export your data** anytime as a JSON file from Settings
- **Reset all data** option available in Settings

## 📝 Adding Categories

Categories are defined in `js/game.js`. To add a new one:

```javascript
{ 
  key: "Your Category",
  icon: "🎯",
  bg: "#FFE0B2",
  bdr: "#FF9800",
  tier: 1,           // 0=starter, 1-3=locked tiers
  opentdb: null,     // OpenTDB category ID (or null)
  trivia: null,      // Trivia API category (or null)
  prompt: "description for AI question generation"
}
```

Then add 15 fallback questions in `js/fallback-questions.js`.

## 🛠️ Tech Stack

- **Vanilla JavaScript** — No frameworks, no build step
- **CSS Custom Properties** — Theme switching via CSS variables
- **Web Audio API** — Synthesized chiptune sounds
- **Service Worker** — Offline caching
- **localStorage** — Persistent data storage

## 📄 License

MIT License — free to use, modify, and distribute.

## 🤝 Credits

- Questions powered by [Open Trivia Database](https://opentdb.com/) (CC BY-SA 4.0)
- Questions powered by [The Trivia API](https://the-trivia-api.com/) (CC BY-NC 4.0)
- Pokémon sprites from [PokéAPI](https://pokeapi.co/) (open source)
- Built with ❤️ by Roopa Stories
