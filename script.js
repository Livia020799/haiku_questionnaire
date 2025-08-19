/* ========= i18n ========= */
const i18n = {
  en: {
    appTitle: "Haiku Evaluation Questionnaire — Human vs AI",
    print: "Print",
    export: "Export JSON",
    headingPurpose: "Purpose",
    purposeText:
      "The purpose of this study is to examine whether students of Japanese language and literature in Japan can distinguish AI-generated haiku from human-written haiku. For each poem, you will rate several aspects and then judge whether it was written by a human or by AI.",
    headingConsent: "Participation & Consent",
    estimatedTime: "Estimated time:",
    anonUse: "Responses are anonymous and used only for research.",
    stopAnytime: "You may stop at any time.",
    consentText: "I have read the information and consent to participate.",
    date: "Date",
    university: "University name",
    headingBackground: "Background",
    yearProgram: "Year & program",
    jpProficiency: "Japanese proficiency (JLPT or equivalent)",
    jlptNative: "Mother tongue",
    jlptNone: "None/Unknown",
    haikuExperience: "Haiku experience",
    readingFreq: "Reading frequency",
    almostDaily: "Almost daily",
    fewPerMonth: "A few/month",
    rarely: "Rarely",
    composition: "Composition",
    often: "Often",
    sometimes: "Sometimes",
    never: "Never",
    kukaiClub: "Kukai/club participation",
    yes: "Yes",
    no: "No",
    familiarity: "Familiarity with key elements (self-rating)",
    high: "High",
    medium: "Medium",
    low: "Low",
    headingInstructions: "Instructions",
    instr1a: "You will see",
    instr1b: "haiku in random order (a mix of human and AI).",
    instr2: "Do not use the internet or dictionaries while answering. Proceed in order.",
    instr3: "If a theme is specified, also rate whether each haiku fits the theme.",
    instr4: "There are no right answers; please answer honestly and consistently.",
    themeIfAny: "Theme (if any)",
    headingOverall: "Overall feedback (optional)",
    cuesHelped: "What cues helped you distinguish AI vs human?",
    hardItems: "Which items were hard to rate, and why?",
    thanks: "Thank you for your time and participation.",
    // per-haiku labels
    haikuId: "Haiku ID",
    haikuText: "Haiku",
    sourceJudgment: "Source judgment (Turing-style)",
    whoWrote: "Who wrote this haiku?",
    human: "Human",
    ai: "AI/Machine",
    confidence: "Confidence in your judgment",
    notConf: "not confident",
    veryConf: "very confident",
    themeRel: "Theme relevance (if a theme is given)",
    isRelated: "Is this haiku related to the theme?",
    stronglyAgree: "Strongly agree",
    somewhatAgree: "Somewhat agree",
    somewhatDisagree: "Somewhat disagree",
    stronglyDisagree: "Strongly disagree",
    kukaiSelection: "Kukai selection intention",
    tokusen: "Special selection (tokusen)",
    namisen: "Regular selection (namisen)",
    considered: "Considered but not selected",
    notSelected: "Not selected",
    formGrammar: "Form and grammar checks",
    grammar: "Grammar",
    correct: "Correct",
    incorrect: "Incorrect",
    unsure: "Unsure",
    phraseConn: "Phrase connection (line-to-line coherence)",
    impressions: "Impression ratings (7-point Likert)",
    fluency: "Fluency (grammatical & syntactic)",
    haikuLike: "Haiku-like wording",
    poeticness: "Poeticness (imagery & emotion)",
    coherence: "Coherence across lines",
    understandability: "Understandability / Meaningfulness",
    favorability: "Favorability (overall liking)",
    unexpectedness: "Unexpectedness (surprise/novelty)",
    structural: "Optional structural checks",
    mora575: "5-7-5 mora structure?",
    kirejiPresent: "Kireji present?",
    ya: "ya",
    kana: "kana",
    keri: "keri",
    ka: "ka",
    other: "other",
    shortComment: "Short comment (optional)",
    imageryEtc: "Imagery, wordfeel, or reason for your choices",
    remove: "Remove",
  },
  ja: {
    // (optional) provide translations; EN is default fallback
  }
};

let currentLang = "en";
const t = (key) => {
  const jaVal = ((i18n.ja || {})[key] ?? "").trim?.() ?? "";
  if (currentLang === "ja" && jaVal) return jaVal;
  return (i18n.en[key] ?? key);
};

function applyI18n(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
  document.querySelector("#estimatedTime")?.setAttribute("placeholder", currentLang==="ja"?"":"~10–15 minutes");
}
document.getElementById("lang-en").addEventListener("click", ()=>{
  currentLang = "en";
  document.getElementById("lang-en").classList.add("chip--active");
  document.getElementById("lang-ja").classList.remove("chip--active");
  applyI18n();
});
document.getElementById("lang-ja").addEventListener("click", ()=>{
  currentLang = "ja";
  document.getElementById("lang-ja").classList.add("chip--active");
  document.getElementById("lang-en").classList.remove("chip--active");
  applyI18n();
});

/* ===================== Fixed haiku list ===================== */
const HAIKU_LIST = [
  { id: "H001", text: "春待ち草\nそれが歓び\n一月よ" }
];

/* ===================== Wizard ===================== */
const TOTAL_STEPS = 7; // 0..6
let currentStep = 0;

const sections = Array.from(document.querySelectorAll("[data-step]"));
const progressBar = document.getElementById("progressBar");
const stepsLabels = Array.from(document.querySelectorAll(".steps .step"));
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

function showStep(nextIdx){
  const cur = sections.find(s => Number(s.dataset.step) === currentStep);
  const next = sections.find(s => Number(s.dataset.step) === nextIdx);
  if (!next) return;

  if (!cur || currentStep === nextIdx) {
    sections.forEach(s => { s.classList.add("hidden"); s.classList.remove("active","exit-up","exit-down"); });
    next.classList.remove("hidden"); next.classList.add("active");
  } else {
    const direction = Math.sign(nextIdx - currentStep);
    sections.forEach(s => { s.classList.remove("active","exit-up","exit-down"); if (!s.classList.contains("hidden")) s.classList.add("hidden"); });
    next.classList.remove("hidden"); next.classList.add("active");
    cur.classList.remove("hidden");
    cur.classList.add(direction > 0 ? "exit-up" : "exit-down");
    setTimeout(()=>{ cur.classList.add("hidden"); }, 460);
  }

  const pct = ((nextIdx+1) / TOTAL_STEPS) * 100;
  progressBar.style.width = `${pct}%`;
  stepsLabels.forEach((el,i)=> el.classList.toggle("active", i === nextIdx));

  backBtn.disabled = nextIdx === 0;
  nextBtn.textContent = (nextIdx === TOTAL_STEPS - 1) ? "Finish" : "Next ▶";

  currentStep = nextIdx;
  document.querySelector(".wizard-viewport")?.scrollTo({ top: 0, behavior: "instant" });
}

function validateStep(idx){
  if (idx === 0 && !document.getElementById("purposeAck").checked) {
    alert("Please acknowledge the purpose to continue.");
    return false;
  }
  if (idx === 1 && !document.getElementById("consent").checked) {
    alert("Consent is required to continue.");
    return false;
  }
  return true;
}

backBtn.addEventListener("click", ()=>{
  if (currentStep > 0) showStep(currentStep - 1);
});
nextBtn.addEventListener("click", ()=>{
  if (!validateStep(currentStep)) return;
  if (currentStep < TOTAL_STEPS - 1) showStep(currentStep + 1);
  else onFinish();
});

/* ===================== Helpers ===================== */
function makeRadio(name, value, label){
  const id = `${name}-${value}-${Math.random().toString(36).slice(2,7)}`;
  return `
    <label class="chip">
      <input type="radio" name="${name}" id="${id}" value="${value}">
      <span>${label}</span>
    </label>`;
}
function makeCheck(name, value, label){
  const id = `${name}-${value}-${Math.random().toString(36).slice(2,7)}`;
  return `
    <label class="chip">
      <input type="checkbox" name="${name}" id="${id}" value="${value}">
      <span>${label}</span>
    </label>`;
}
function buildLikertRow(name, label){
  let cells = "";
  for(let i=1;i<=7;i++){
    const id = `${name}-${i}-${Math.random().toString(36).slice(2,7)}`;
    cells += `<td><label><input type="radio" name="${name}" id="${id}" value="${i}"></label></td>`;
  }
  return `<tr><td>${label}</td>${cells}</tr>`;
}

/* ===================== Haiku Card ===================== */
let haikuCounter = 0;

function haikuBlockFromData({id, text}){
  const idx = ++haikuCounter;
  const ns = (suffix) => `h${idx}-${suffix}`;
  const confHelp = `from ${t('notConf')} (1) to ${t('veryConf')} (4)`;

  return `
  <section class="card" data-haiku="${idx}">
    <div class="haiku-header" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
      <div class="haiku-title" style="font-weight:700;color:var(--sapienza-primary)">Haiku #${idx}</div>
    </div>

    <div class="grid">
      <label class="stack">
        <span>${t('haikuId')}</span>
        <input type="text" name="${ns('id')}" value="${id || ''}" readonly>
      </label>
      <label class="stack">
        <span>${t('haikuText')}</span>
        <textarea rows="3" name="${ns('text')}" readonly>${text || ''}</textarea>
      </label>
    </div>

    <div class="field-group">
      <div class="field-label">${t('sourceJudgment')}</div>
      <div class="subgrid">
        <div>
          <div class="sub-label">${t('whoWrote')}</div>
          <div class="chips chips--inline">
            ${makeRadio(ns('who'), 'human', t('human'))}
            ${makeRadio(ns('who'), 'ai', t('ai'))}
          </div>
        </div>
        <div>
          <div class="sub-label">${t('confidence')} <small>(${confHelp})</small></div>
          <div class="chips chips--inline">
            ${makeRadio(ns('conf'), '1', '1')}
            ${makeRadio(ns('conf'), '2', '2')}
            ${makeRadio(ns('conf'), '3', '3')}
            ${makeRadio(ns('conf'), '4', '4')}
          </div>
        </div>
      </div>
    </div>

    <div class="field-group">
      <div class="field-label">${t('themeRel')}</div>
      <div class="chips chips--inline">
        ${makeRadio(ns('themeRel'), 'sa', t('stronglyAgree'))}
        ${makeRadio(ns('themeRel'), 'a', t('somewhatAgree'))}
        ${makeRadio(ns('themeRel'), 'd', t('somewhatDisagree'))}
        ${makeRadio(ns('themeRel'), 'sd', t('stronglyDisagree'))}
      </div>
    </div>

    <div class="field-group">
      <div class="field-label">${t('kukaiSelection')}</div>
      <div class="chips chips--inline">
        ${makeRadio(ns('kukai'), 'tokusen', t('tokusen'))}
        ${makeRadio(ns('kukai'), 'namisen', t('namisen'))}
        ${makeRadio(ns('kukai'), 'considered', t('considered'))}
        ${makeRadio(ns('kukai'), 'not', t('notSelected'))}
      </div>
    </div>

    <div class="field-group">
      <div class="field-label">${t('formGrammar')}</div>
      <div class="subgrid">
        <div>
          <div class="sub-label">${t('grammar')}</div>
          <div class="chips chips--inline">
            ${makeRadio(ns('grammar'), 'correct', t('correct'))}
            ${makeRadio(ns('grammar'), 'incorrect', t('incorrect'))}
            ${makeRadio(ns('grammar'), 'unsure', t('unsure'))}
          </div>
        </div>
        <div>
          <div class="sub-label">${t('phraseConn')}</div>
          <div class="chips chips--inline">
            ${makeRadio(ns('phrase'), 'connected', "Connected")}
            ${makeRadio(ns('phrase'), 'not', "Not connected")}
            ${makeRadio(ns('phrase'), 'unsure', t('unsure'))}
          </div>
        </div>
      </div>
    </div>

    <div class="field-group">
      <div class="field-label">${t('impressions')}</div>
      <table class="table">
        <thead>
          <tr>
            <th></th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th>
          </tr>
        </thead>
        <tbody>
          ${buildLikertRow(ns('fluency'), t('fluency'))}
          ${buildLikertRow(ns('haikuLike'), t('haikuLike'))}
          ${buildLikertRow(ns('poeticness'), t('poeticness'))}
          ${buildLikertRow(ns('coherence'), t('coherence'))}
          ${buildLikertRow(ns('understandability'), t('understandability'))}
          ${buildLikertRow(ns('favorability'), t('favorability'))}
          ${buildLikertRow(ns('unexpectedness'), t('unexpectedness'))}
        </tbody>
      </table>
    </div>

    <div class="field-group">
      <div class="field-label">${t('structural')}</div>
      <div class="subgrid">
        <div>
          <div class="sub-label">${t('mora575')}</div>
          <div class="chips chips--inline">
            ${makeRadio(ns('mora'), 'yes', "Yes")}
            ${makeRadio(ns('mora'), 'no', "No")}
            ${makeRadio(ns('mora'), 'unsure', t('unsure'))}
          </div>
        </div>

        <!-- Kireji group -->
        <div>
          <div class="sub-label">${t('kirejiPresent')}</div>

          <!-- line 1: fixed four items, no wrap -->
          <div class="chips chips--nowrap">
            ${makeCheck(ns('kireji'), 'ya', t('ya'))}
            ${makeCheck(ns('kireji'), 'kana', t('kana'))}
            ${makeCheck(ns('kireji'), 'keri', t('keri'))}
            ${makeCheck(ns('kireji'), 'ka', t('ka'))}
          </div>

          <!-- line 2: Other + input -->
          <div class="chips chips--inline" style="margin-top:8px">
            ${makeCheck(ns('kireji'), 'other', `${t('other')}:`)}
            <input type="text" name="${ns('kirejiOther')}" class="inline-input inline-input--chip" placeholder="">
          </div>

          <!-- line 3: Unsure -->
          <div class="chips chips--inline" style="margin-top:8px">
            ${makeCheck(ns('kireji'), 'unsure', t('unsure'))}
          </div>
        </div>
      </div>
    </div>

    <label class="stack">
      <span>${t('shortComment')}</span>
      <textarea rows="3" name="${ns('comment')}" placeholder="${t('imageryEtc')}"></textarea>
    </label>
  </section>`;
}

function renderFixedHaiku(){
  const wrap = document.getElementById("haikuBlocks");
  wrap.innerHTML = "";
  haikuCounter = 0;
  HAIKU_LIST.forEach(h => {
    const holder = document.createElement("div");
    holder.innerHTML = haikuBlockFromData(h);
    wrap.appendChild(holder.firstElementChild);
  });
  const totalEl = document.getElementById("haikuTotal");
  if (totalEl) totalEl.textContent = String(HAIKU_LIST.length);
}

/* ============ Export / Finish ============ */
function getCheckedValues(scope, selector){
  return Array.from(scope.querySelectorAll(selector))
    .filter(x => x.checked)
    .map(x => x.value);
}
function getRadioValue(scope, name){
  const el = scope.querySelector(`input[type="radio"][name="${name}"]:checked`);
  return el ? el.value : null;
}
function getLikert(scope, name){
  const el = getRadioValue(scope, name);
  return el ? parseInt(el,10) : null;
}
function findName(card, suffix){
  const el = card.querySelector(`[name*="-${suffix}"]`);
  return el?.name || null;
}
function collectHaiku(card){
  const get = (sel) => card.querySelector(sel);
  return {
    id: get('input[name^="h"][name$="-id"]')?.value || "",
    text: get('textarea[name^="h"][name$="-text"]')?.value || "",
    who: getRadioValue(card, findName(card,'who')),
    confidence: getRadioValue(card, findName(card,'conf')),
    theme_relevance: getRadioValue(card, findName(card,'themeRel')),
    kukai: getRadioValue(card, findName(card,'kukai')),
    grammar: getRadioValue(card, findName(card,'grammar')),
    phrase_connection: getRadioValue(card, findName(card,'phrase')),
    ratings: {
      fluency: getLikert(card, findName(card,'fluency')),
      haiku_like: getLikert(card, findName(card,'haikuLike')),
      poeticness: getLikert(card, findName(card,'poeticness')),
      coherence: getLikert(card, findName(card,'coherence')),
      understandability: getLikert(card, findName(card,'understandability')),
      favorability: getLikert(card, findName(card,'favorability')),
      unexpectedness: getLikert(card, findName(card,'unexpectedness')),
    },
    structure: {
      mora_575: getRadioValue(card, findName(card,'mora')),
      kireji: getCheckedValues(card, 'input[type="checkbox"][name*="kireji"]').filter(v=>v!=="other" && v!=="unsure"),
      kireji_other: get('input[name^="h"][name$="-kirejiOther"]')?.value || "",
      kireji_unsure: getCheckedValues(card, 'input[type="checkbox"][name*="kireji"]').includes("unsure")
    },
    comment: get('textarea[name^="h"][name$="-comment"]')?.value || ""
  };
}
function collectPayload(){
  const haikuCards = Array.from(document.querySelectorAll("#haikuBlocks [data-haiku]"));
  const jlpt = getCheckedValues(document, '.card input[type="checkbox"][value="Mother tongue"], .card input[type="checkbox"][value="N1"], .card input[type="checkbox"][value="N2"], .card input[type="checkbox"][value="N3"], .card input[type="checkbox"][value="N4"], .card input[type="checkbox"][value="N5"], .card input[type="checkbox"][value="None/Unknown"]');

  return {
    metadata: {
      lang_ui: currentLang,
      estimated_time: document.getElementById("estimatedTime")?.value || null,
      consent: document.getElementById("consent")?.checked || false,
      date: document.getElementById("dateField")?.value || null,
      university: document.getElementById("university")?.value || null,
      year_program: document.getElementById("yearProgram")?.value || null,
      jlpt: jlpt,
      reading_frequency: getRadioValue(document, "reading"),
      composition: getRadioValue(document, "composition"),
      kukai_club: getRadioValue(document, "kukai"),
      familiarity: {
        kigo: getRadioValue(document, "kigoFam"),
        kireji: getRadioValue(document, "kirejiFam")
      },
      theme: document.getElementById("theme")?.value || null
    },
    haiku: haikuCards.map(collectHaiku),
    overall_feedback: {
      cues: document.getElementById("cues")?.value || "",
      hard_items: document.getElementById("hard")?.value || ""
    }
  };
}
function downloadJSON(data){
  const blob = new Blob([JSON.stringify(data, null, 2)], {type: "application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `haiku_responses_${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
}
function onFinish(){
  const payload = collectPayload();
  downloadJSON(payload);
  showStep(6); // jump to "Done" page
}

document.getElementById("exportBtn").addEventListener("click", ()=>{
  downloadJSON(collectPayload());
});
document.getElementById("printBtn").addEventListener("click", ()=> window.print());

/* ===== init ===== */
applyI18n();
renderFixedHaiku();
showStep(0);

// keyboard nav (optional)
document.addEventListener("keydown", (e)=>{
  if (e.key === "ArrowRight") nextBtn.click();
  if (e.key === "ArrowLeft") backBtn.click();
});