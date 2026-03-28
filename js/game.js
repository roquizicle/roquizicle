/* ═══════════════════════════════════════════
   GAME.JS — Core game data & logic
   Categories, tiers, badges, rewards, levels
   ═══════════════════════════════════════════ */

const CATEGORIES = [
  // Tier 0 - Starter (unlocked)
  { key:"Animals", icon:"🐾", bg:"#FFE0B2", bdr:"#FF9800", tier:0, opentdb:27, trivia:"science", prompt:"animals, wildlife, pets" },
  { key:"General Knowledge", icon:"💡", bg:"#FFF9C4", bdr:"#FDD835", tier:0, opentdb:9, trivia:"general_knowledge", prompt:"general knowledge, everyday facts" },
  { key:"Science & Space", icon:"🚀", bg:"#BBDEFB", bdr:"#42A5F5", tier:0, opentdb:17, trivia:"science", prompt:"science, space, planets" },
  { key:"Geography", icon:"🌍", bg:"#B2DFDB", bdr:"#26A69A", tier:0, opentdb:22, trivia:"geography", prompt:"geography, countries, capitals" },
  { key:"Math Puzzles", icon:"🧮", bg:"#E1BEE7", bdr:"#8E24AA", tier:0, opentdb:19, trivia:null, prompt:"fun math puzzles, arithmetic, shapes" },
  { key:"History", icon:"🏰", bg:"#D7CCC8", bdr:"#8D6E63", tier:0, opentdb:23, trivia:"history", prompt:"world history, famous events" },
  { key:"Music", icon:"🎵", bg:"#F3E5F5", bdr:"#AB47BC", tier:0, opentdb:12, trivia:"music", prompt:"music, instruments, songs" },
  { key:"Sports", icon:"⚽", bg:"#FFCCBC", bdr:"#FF7043", tier:0, opentdb:21, trivia:"sport_and_leisure", prompt:"sports, Olympics, athletes" },
  { key:"Food & Cooking", icon:"🍕", bg:"#FFE0B2", bdr:"#FFA726", tier:0, opentdb:null, trivia:"food_and_drink", prompt:"food, cooking, cuisines" },
  // Tier 1
  { key:"Flowers & Plants", icon:"🌻", bg:"#C8E6C9", bdr:"#66BB6A", tier:1, opentdb:null, trivia:"science", prompt:"flowers, plants, trees" },
  { key:"Oceans & Sea Life", icon:"🐙", bg:"#B3E5FC", bdr:"#29B6F6", tier:1, opentdb:null, trivia:"science", prompt:"oceans, sea creatures, marine life" },
  { key:"Dinosaurs", icon:"🦕", bg:"#DCEDC8", bdr:"#9CCC65", tier:1, opentdb:null, trivia:"science", prompt:"dinosaurs, fossils, prehistoric life" },
  // Tier 2
  { key:"Inventions", icon:"⚙️", bg:"#CFD8DC", bdr:"#78909C", tier:2, opentdb:null, trivia:"science", prompt:"inventions, inventors, discoveries" },
  { key:"Human Body", icon:"🫀", bg:"#FFCDD2", bdr:"#EF5350", tier:2, opentdb:null, trivia:"science", prompt:"human body, organs, health" },
  { key:"Books & Stories", icon:"📚", bg:"#D1C4E9", bdr:"#7E57C2", tier:2, opentdb:10, trivia:"arts_and_literature", prompt:"books, fairy tales, literature" },
  // Tier 3
  { key:"Flags & Countries", icon:"🏳️", bg:"#F0F4C3", bdr:"#D4E157", tier:3, opentdb:null, trivia:"geography", prompt:"flags, countries, cultures" },
  { key:"Pokémon", icon:"⚡", bg:"#FFF9C4", bdr:"#FFEB3B", tier:3, opentdb:null, trivia:null, prompt:"Pokémon games, anime, characters, types, evolutions" },
  { key:"Logos", icon:"🏷️", bg:"#B3E5FC", bdr:"#03A9F4", tier:3, opentdb:null, trivia:null, prompt:"famous brand logos, company symbols" },
];

const TIER_THRESHOLDS = [
  { tier: 0, qs: 0, acc: 0 },
  { tier: 1, qs: 500, acc: 80 },
  { tier: 2, qs: 1000, acc: 80 },
  { tier: 3, qs: 1500, acc: 80 },
];

const LEVELS = [
  { name: "Curious Kid", xp: 0 },
  { name: "Explorer", xp: 100 },
  { name: "Smarty Pants", xp: 300 },
  { name: "Brain Builder", xp: 600 },
  { name: "Quiz Whiz", xp: 1000 },
  { name: "Knowledge King", xp: 1500 },
  { name: "Super Scholar", xp: 2200 },
  { name: "Roquiz Champion", xp: 3000 },
];

const BADGES = [
  { id: "first", name: "First Steps", icon: "⭐", desc: "Complete your first quiz" },
  { id: "perfect", name: "Perfect!", icon: "💎", desc: "Get every question right in a round" },
  { id: "streak5", name: "On Fire!", icon: "🔥", desc: "Get 5 correct answers in a row" },
  { id: "explorer", name: "Explorer", icon: "🧭", desc: "Try 10 different categories" },
  { id: "century", name: "100 Club", icon: "🛡️", desc: "Answer 100 total questions" },
  { id: "speedy", name: "Speedy!", icon: "⚡", desc: "Answer a question in under 3 seconds" },
  { id: "xp500", name: "Rising Star", icon: "🏆", desc: "Reach 500 XP" },
  { id: "xp1000", name: "Legend", icon: "👑", desc: "Reach 1000 XP" },
];

const REWARDS = [
  // Digital stickers
  { id: "s1", name: "Gold Star", icon: "🌟", cost: 50, type: "digital", desc: "A shiny gold star for your collection!" },
  { id: "s2", name: "Rainbow Badge", icon: "🌈", cost: 75, type: "digital", desc: "Show off your rainbow colors!" },
  { id: "s3", name: "Trophy Sticker", icon: "🏆", cost: 100, type: "digital", desc: "You're a champion!" },
  { id: "s4", name: "Rocket Badge", icon: "🚀", cost: 150, type: "digital", desc: "Blast off to knowledge!" },
  { id: "s5", name: "Crown Badge", icon: "👑", cost: 200, type: "digital", desc: "Rule the quiz kingdom!" },
  // Gift cards
  { id: "g5", name: "$5 Gift Card", icon: "🎁", cost: 500, type: "giftcard", desc: "Redeem for a $5 gift card" },
  { id: "g10", name: "$10 Gift Card", icon: "💳", cost: 1000, type: "giftcard", desc: "Redeem for a $10 gift card" },
  { id: "g25", name: "$25 Gift Card", icon: "💰", cost: 2500, type: "giftcard", desc: "Redeem for a $25 gift card" },
  // Physical items
  { id: "t1", name: "Mini Figure", icon: "🧸", cost: 750, type: "physical", desc: "A cool collectible mini figure" },
  { id: "t2", name: "Puzzle Set", icon: "🧩", cost: 1200, type: "physical", desc: "Brain-teasing puzzle set" },
  { id: "t3", name: "Science Kit", icon: "🔬", cost: 2000, type: "physical", desc: "DIY science experiment kit" },
  // Donations
  { id: "d1", name: "Plant a Tree", icon: "🌳", cost: 100, type: "donate", desc: "Donate to plant a real tree!" },
  { id: "d2", name: "Feed a Child", icon: "🍎", cost: 250, type: "donate", desc: "Provide a meal for a child in need" },
  { id: "d3", name: "School Supplies", icon: "📝", cost: 500, type: "donate", desc: "Donate school supplies to kids" },
];

const GRADES = ["1st Grade", "2nd Grade", "3rd Grade", "4th Grade", "5th Grade"];
const ROUND_SIZES = [5, 10, 25, 50, 100, 250, 500, 1000];
const COUNTRIES = ["Afghanistan","Albania","Algeria","Argentina","Australia","Austria","Bangladesh","Belgium","Brazil","Canada","Chile","China","Colombia","Czech Republic","Denmark","Egypt","Ethiopia","Finland","France","Germany","Ghana","Greece","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Japan","Kenya","Malaysia","Mexico","Morocco","Netherlands","New Zealand","Nigeria","Norway","Pakistan","Peru","Philippines","Poland","Portugal","Russia","Saudi Arabia","Singapore","South Africa","South Korea","Spain","Sri Lanka","Sweden","Switzerland","Taiwan","Tanzania","Thailand","Turkey","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Venezuela","Vietnam","Zimbabwe"];

// ── Game Logic Helpers ──
const GameLogic = {
  getLevel(xp) {
    return LEVELS.slice().reverse().find(l => xp >= l.xp) || LEVELS[0];
  },

  getNextLevel(xp) {
    const current = this.getLevel(xp);
    const idx = LEVELS.indexOf(current);
    return idx < LEVELS.length - 1 ? LEVELS[idx + 1] : null;
  },

  getLevelProgress(xp) {
    const current = this.getLevel(xp);
    const next = this.getNextLevel(xp);
    if (!next) return 100;
    return Math.min(((xp - current.xp) / (next.xp - current.xp)) * 100, 100);
  },

  getUnlockedTier(gs) {
    const acc = gs.answered > 0 ? Math.round((gs.correct / gs.answered) * 100) : 0;
    const tier = TIER_THRESHOLDS.slice().reverse().find(t => gs.answered >= t.qs && acc >= t.acc);
    return tier ? tier.tier : 0;
  },

  isCatUnlocked(cat, gs) {
    return cat.tier <= this.getUnlockedTier(gs);
  },

  getAccuracy(gs) {
    return gs.answered > 0 ? Math.round((gs.correct / gs.answered) * 100) : 0;
  },

  // Process an answer and return updated gameState + earned badges
  processAnswer(gs, isCorrect, elapsed, rStreak, category) {
    const ns = { ...gs };
    ns.answered += 1;
    const newBadges = [];
    const prevLevel = this.getLevel(gs.xp);

    if (isCorrect) {
      ns.correct += 1;
      ns.streak += 1;
      if (ns.streak > ns.bestStreak) ns.bestStreak = ns.streak;
      ns.xp += elapsed < 5 ? 15 : 10;
      if (rStreak >= 2) ns.xp += 3;
    } else {
      ns.streak = 0;
      ns.xp += 2;
    }

    if (category && !ns.catsPlayed.includes(category)) {
      ns.catsPlayed = [...ns.catsPlayed, category];
    }

    // Badge checks
    if (!ns.badges.includes("first")) { ns.badges.push("first"); newBadges.push("first"); }
    if (!ns.badges.includes("streak5") && ns.streak >= 5) { ns.badges.push("streak5"); newBadges.push("streak5"); }
    if (!ns.badges.includes("century") && ns.answered >= 100) { ns.badges.push("century"); newBadges.push("century"); }
    if (!ns.badges.includes("speedy") && isCorrect && elapsed < 3) { ns.badges.push("speedy"); newBadges.push("speedy"); }
    if (!ns.badges.includes("explorer") && ns.catsPlayed.length >= 10) { ns.badges.push("explorer"); newBadges.push("explorer"); }
    if (!ns.badges.includes("xp500") && ns.xp >= 500) { ns.badges.push("xp500"); newBadges.push("xp500"); }
    if (!ns.badges.includes("xp1000") && ns.xp >= 1000) { ns.badges.push("xp1000"); newBadges.push("xp1000"); }

    const newLevel = this.getLevel(ns.xp);
    const leveledUp = newLevel.xp > prevLevel.xp;

    return { gameState: ns, newBadges, leveledUp };
  },

  redeemReward(gs, reward) {
    if (gs.xp < reward.cost) return { success: false, gameState: gs };
    const ns = {
      ...gs,
      xp: gs.xp - reward.cost,
      redeemed: [...gs.redeemed, { ...reward, date: new Date().toISOString() }]
    };
    if (reward.type === "digital") {
      ns.stickers = [...(ns.stickers || []), reward.id];
    }
    return { success: true, gameState: ns };
  }
};
