/* ═══════════════════════════════════════════
   MERGE-EXPANSIONS.JS
   Runs after all expansion files load and merges
   their question banks into GRADED_QUESTIONS.
   ═══════════════════════════════════════════ */

(function mergeExpansions() {
  const GRADES = ['1st Grade','2nd Grade','3rd Grade','4th Grade','5th Grade'];

  function merge(catKey, expansionObj) {
    if (typeof expansionObj === 'undefined') return;
    if (!GRADED_QUESTIONS[catKey]) GRADED_QUESTIONS[catKey] = {};
    GRADES.forEach(grade => {
      const extra = expansionObj[grade];
      if (!extra || !extra.length) return;
      if (!GRADED_QUESTIONS[catKey][grade]) {
        GRADED_QUESTIONS[catKey][grade] = [];
      }
      // Only add questions not already present (by question text)
      const existing = new Set(GRADED_QUESTIONS[catKey][grade].map(q => q.q));
      extra.forEach(q => {
        if (!existing.has(q.q)) {
          GRADED_QUESTIONS[catKey][grade].push(q);
          existing.add(q.q);
        }
      });
    });
  }

  // Dinosaurs
  if (typeof DINOSAURS_EXPANSION !== 'undefined') {
    merge('Dinosaurs', DINOSAURS_EXPANSION);
  }

  // Inventions
  if (typeof INVENTIONS_EXPANSION !== 'undefined') {
    merge('Inventions', INVENTIONS_EXPANSION);
  }

  // Remaining categories
  if (typeof HUMAN_BODY_EXPANSION !== 'undefined')       merge('Human Body', HUMAN_BODY_EXPANSION);
  if (typeof BOOKS_STORIES_EXPANSION !== 'undefined')    merge('Books & Stories', BOOKS_STORIES_EXPANSION);
  if (typeof FLAGS_COUNTRIES_EXPANSION !== 'undefined')  merge('Flags & Countries', FLAGS_COUNTRIES_EXPANSION);
  if (typeof POKEMON_EXPANSION !== 'undefined')          merge('Pokémon', POKEMON_EXPANSION);
  if (typeof LOGOS_EXPANSION !== 'undefined')            merge('Logos', LOGOS_EXPANSION);
})();
