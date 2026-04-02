/* ═══════════════════════════════════════════
QUESTIONS.JS — Grade-appropriate question engine
Priority: GRADED_QUESTIONS (local) → FALLBACK → APIs (absolute last resort)
APIs are NOT grade-appropriate and should only fill in if no local questions exist.
═══════════════════════════════════════════ */

const QuestionEngine = {
// ── Source 1 (PRIMARY): Built-in graded question banks ──
fetchGraded(catKey, grade) {
if (typeof GRADED_QUESTIONS === ‘undefined’) return [];
const catBank = GRADED_QUESTIONS[catKey];
if (!catBank) return [];
const g = String(grade);
const gradeKey = g + (g === ‘1’ ? ‘st’ : g === ‘2’ ? ‘nd’ : g === ‘3’ ? ‘rd’ : ‘th’) + ’ Grade’;
const questions = catBank[gradeKey];
if (!questions || !questions.length) return [];
return this._shuffle([…questions]);
},

// ── Source 2 (LAST RESORT ONLY): OpenTDB — NOT grade-appropriate ──
async fetchOpenTDB(catId, amount) {
const n = Math.min(amount, 50);
try {
const r = await fetch(`https://opentdb.com/api.php?amount=${n}&category=${catId}&type=multiple&difficulty=easy`);
const d = await r.json();
if (d.response_code !== 0) return [];
return d.results.map(q => ({
q: this._decode(q.question),
correct: this._decode(q.correct_answer),
options: this._shuffle([q.correct_answer, …q.incorrect_answers].map(s => this._decode(s)))
}));
} catch { return []; }
},

// ── Source 3 (LAST RESORT ONLY): The Trivia API — NOT grade-appropriate ──
async fetchTriviaAPI(category, amount) {
const n = Math.min(amount, 50);
try {
const r = await fetch(`https://the-trivia-api.com/v2/questions?limit=${n}&categories=${category}&difficulties=easy,medium`);
if (!r.ok) return [];
const d = await r.json();
return d.map(q => ({
q: q.question?.text || q.question,
correct: q.correctAnswer,
options: this._shuffle([q.correctAnswer, …q.incorrectAnswers])
}));
} catch { return []; }
},

// ── Combined fetcher: graded banks → fallback → recycle graded → APIs only if nothing else ──
async fetch(catDef, total, profile, onProgress) {
let all = [];
const needed = () => total - all.length;

```
// STEP 1: Pull from built-in graded question banks (PRIMARY)
if (onProgress) onProgress('Loading questions...');
const graded = this.fetchGraded(catDef.key, profile.grade);
if (graded.length > 0) {
  all.push(...graded.slice(0, total));
}

// STEP 2: If still need more, pad with FALLBACK bank (also local, somewhat grade-neutral but better than APIs)
if (needed() > 0) {
  const fb = (typeof FALLBACK_QUESTIONS !== 'undefined')
    ? (FALLBACK_QUESTIONS[catDef.key] || FALLBACK_QUESTIONS["General Knowledge"])
    : [];
  if (fb.length > 0) {
    const existing = new Set(all.map(q => q.q.toLowerCase().trim()));
    const fresh = this._shuffle([...fb]).filter(q => !existing.has(q.q.toLowerCase().trim()));
    all.push(...fresh.slice(0, needed()));
  }
}

// STEP 3: If STILL short, recycle graded questions (repeat is better than wrong grade level)
if (needed() > 0 && graded.length > 0) {
  let recycled = 0;
  while (needed() > 0 && recycled < 3) {
    all.push(...this._shuffle([...graded]).slice(0, needed()));
    recycled++;
  }
}

// STEP 4: ABSOLUTE LAST RESORT — only if we have ZERO local questions at all
// APIs are NOT grade-appropriate. Only use if the category has no graded or fallback questions.
if (all.length === 0) {
  if (catDef.opentdb) {
    try {
      if (onProgress) onProgress('Loading questions...');
      const got = await this.fetchOpenTDB(catDef.opentdb, Math.min(needed(), 50));
      if (got.length > 0) {
        all.push(...got);
        await this._wait(600);
      }
    } catch { /* API failed */ }
  }

  if (needed() > 0 && catDef.trivia) {
    try {
      const got = await this.fetchTriviaAPI(catDef.trivia, Math.min(needed(), 50));
      if (got.length > 0) all.push(...got);
    } catch { /* API failed */ }
  }
}

// Deduplicate
const seen = new Set();
all = all.filter(q => {
  const k = q.q.toLowerCase().trim();
  if (seen.has(k)) return false;
  seen.add(k);
  return true;
});

if (onProgress) onProgress('');
return this._shuffle(all).slice(0, total);
```

},

// Helpers
_decode(str) {
const el = document.createElement(‘textarea’);
el.innerHTML = str;
return el.value;
},

_shuffle(arr) {
const a = […arr];
for (let i = a.length - 1; i > 0; i–) {
const j = Math.floor(Math.random() * (i + 1));
[a[i], a[j]] = [a[j], a[i]];
}
return a;
},

_wait(ms) {
return new Promise(r => setTimeout(r, ms));
}
};
