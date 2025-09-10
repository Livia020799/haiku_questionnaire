/* ========= i18n ========= */
const i18n = {
  en: {
    /* language switch labels */
    langEnglish: "English",
    langJapanese: "Japanese",

    appTitle: "Haiku Evaluation Questionnaire — Human vs AI",
    export: "Export JSON",
    backLabel: "◀ Back",
    nextLabel: "Next ▶",
    finishLabel: "Finish",
    step1: "1. Purpose",
    step2: "2. Consent",
    step3: "3. Background",
    step4: "4. Instructions",
    step5: "5. Haiku",
    step6: "6. Feedback",
    step7: "7. Done",

    headingPurpose: "Purpose",
    purposeText:
      "The purpose of this study is to evaluate the creative writing of existing AI systems when tasked to generate haiku. For this questionnaire, you are tasked with rating randomly selected haiku which are either real or AI-generated.",
    purposeAckText: "I have read the purpose and wish to continue.",

    headingConsent: "Participation & Consent",
    estimatedTime: "Estimated time:",
    anonUse: "Responses are anonymous and used only for research.",
    stopAnytime: "You may stop at any time.",
    consentText: "I have read the information and consent to participate.",
    date: "Date",
    university: "University name",

    headingBackground: "Background",
    yearProgram: "Grade & department/course",
    jpProficiency: "Japanese proficiency (JLPT or equivalent)",
    jlptNative: "Mother tongue",
    jlptNone: "None/Unknown",

    haikuExperience: "Haiku experience",
    readingFreq: "Reading frequency (haiku)",
    almostDaily: "Almost daily",
    oneTwoPerWeek: "1–2/week",
    fewPerMonth: "A few/month",
    rarely: "Rarely",
    composition: "Haiku composition",
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
    kigoLabel: "Kigo (season word)",
    kirejiLabel: "Kireji (cutting word)",

    headingInstructions: "Instructions",
    instr1a: "You will see",
    instr1b: "haiku in random order (a mix of human and AI).",
    instr2: "Do not use the internet or dictionaries while answering. Proceed in order.",
    instr3: "If a theme is specified, also rate whether each haiku fits the theme.",
    instr4: "There are no right answers; please answer honestly and consistently.",
    themeIfAny: "Theme (if any)",

    perHaiku: "Per-Haiku Evaluation",

    headingOverall: "Overall feedback (optional)",
    cuesHelped: "What cues helped you distinguish AI vs human?",
    hardItems: "Which items were hard to rate, and why?",
    thanks: "Thank you for your time and participation.",
    doneHint: "You may now close this page after exporting your answer in JSON format by cliking on the \"Export JSON\" button on your top right.",

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
    connected: "Connected",
    notConnected: "Not connected",

    impressions: "Impression ratings (5-point Likert)",
    likertHint: "from 1 (very low / disagree) to 5 (very high / agree)",
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

    /* alerts */
    purposeAlert: "Please acknowledge the purpose to continue.",
    consentAlert: "Consent is required to continue.",
    exportDone: "Responses exported as JSON.",
  },

  ja: {
    /* language switch labels */
    langEnglish: "英語",
    langJapanese: "日本語",

    appTitle: "俳句評価アンケート — 人間 vs AI",
    export: "JSONを書き出す",
    backLabel: "◀ 戻る",
    nextLabel: "次へ ▶",
    finishLabel: "完了",
    step1: "1. 目的",
    step2: "2. 参加と同意",
    step3: "3. 背景",
    step4: "4. 指示",
    step5: "5. 俳句",
    step6: "6. フィードバック（任意）",
    step7: "7. 完了",

    headingPurpose: "目的",
    purposeText:
      "この研究の目的は、既存のAIシステムに俳句を生成させる場合の創造的な文章作成能力を評価することです。 このアンケートでは、実在の俳句とAIが生成した俳句をランダムに選んだものを評価してもらいます。",
    purposeAckText: "目的を読み、続行します。",

    headingConsent: "参加と同意",
    estimatedTime: "所要時間：",
    anonUse: "回答は匿名で、研究のためにのみ利用されます。",
    stopAnytime: "いつでも止めることができます。",
    consentText: "説明を読み、参加に同意します。",
    date: "日付（年/月/日）",
    university: "大学名",

    headingBackground: "背景",
    yearProgram: "学年（1–4）・学科（またはコース）",
    jpProficiency: "日本語能力試験（JLPT）または同等の資格",
    jlptNative: "母語",
    jlptNone: "ない／不明",

    haikuExperience: "俳句の経験",
    readingFreq: "俳句を見聞きする頻度",
    almostDaily: "ほぼ毎日",
    oneTwoPerWeek: "週に1, 2回",
    fewPerMonth: "月に数回",
    rarely: "たまに",
    composition: "俳句の作成",
    often: "頻繁に",
    sometimes: "ときどき",
    never: "作ったことがない",
    kukaiClub: "句会／部活動への参加",
    yes: "はい",
    no: "いいえ",

    familiarity: "主要要素の理解度（自己評価）",
    high: "高",
    medium: "中",
    low: "低",

    kigoLabel: "季語",
    kirejiLabel: "切字",

    headingInstructions: "指示",
    instr1a: "人間とAIが混在する俳句がランダムな順序で",
    instr1b: "1つ表示されます。",
    instr2: "回答中にインターネットや辞書は使用しないでください。順番に回答してください。",
    instr3: "テーマが指定されている場合は、各俳句がそのテーマに合致しているかどうかも評価してください。",
    instr4: "正解はありません。正直に一貫して回答してください。",
    themeIfAny: "俳句のテーマ（ある場合）",

    perHaiku: "俳句ごとの評価",
    haikuId: "俳句ID",
    haikuText: "俳句",
    sourceJudgment: "ソース判定（チューリング形式）",
    whoWrote: "この俳句を書いたのは？",
    human: "人間",
    ai: "AI",
    confidence: "判断の自信",
    notConf: "自信がない",
    veryConf: "非常に自信がある",
    themeRel: "テーマとの関連性（テーマがある場合）",
    stronglyAgree: "強く同意",
    somewhatAgree: "やや同意",
    somewhatDisagree: "やや不同意",
    stronglyDisagree: "強く不同意",

    kukaiSelection: "句会での選集のつもり",
    tokusen: "特選（tokusen）",
    namisen: "並選（namisen）",
    considered: "選考対象だが未選出",
    notSelected: "未選出",

    formGrammar: "形式と文法の確認",
    grammar: "文法",
    correct: "正しい",
    incorrect: "正しくない",
    unsure: "不明",
    phraseConn: "フレーズのつながり（line-to-line coherence）",
    connected: "繋がっている",
    notConnected: "繋がっていない",

    impressions: "印象評価（5段階リッカート）",
    likertHint: "1（非常に低い／不同意）〜5（非常に高い／同意）",
    fluency: "流暢さ（文法・構文）",
    haikuLike: "俳句的な語法",
    poeticness: "詩情（イメージ・感情）",
    coherence: "行間の一貫性",
    understandability: "分かりやすさ（意味の明瞭さ）",
    favorability: "好ましさ（総合的な評価）",
    unexpectedness: "意外性（驚き・新規性）",

    structural: "任意的な構造の確認",
    mora575: "5-7-5 のモーラ（拍）構成ですか？",
    kirejiPresent: "切字はありますか？",
    ya: "や",
    kana: "かな",
    keri: "けり",
    ka: "か",
    other: "その他",
    shortComment: "短いコメント（任意）",
    imageryEtc: "イメージ・言葉の響き・選択理由 など",

    headingOverall: "全体的なフィードバック（任意）",
    cuesHelped: "AIと人間を区別するのに役立った手がかりは何ですか？",
    hardItems: "評価しづらかった項目とその理由を教えてください。",
    thanks: "お忙しい中、ご参加いただきありがとうございました。",
    doneHint: "右上隅の「JSONを書き出す」ボタンをクリックして、あなたの回答をエクスポートした後、このページを閉じてください。",

    /* alerts */
    purposeAlert: "目的を確認してから続行してください。",
    consentAlert: "参加に同意してください。",
    exportDone: "回答をJSON形式で保存しました。",
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
  const est = document.getElementById("estimatedTime");
  if (est) est.textContent = (currentLang === "ja") ? "10～15分ほど" : "~10–15 minutes";
  if (nextBtn) nextBtn.textContent = (currentStep === TOTAL_STEPS-1) ? t("finishLabel") : t("nextLabel");
  if (backBtn) backBtn.textContent = t("backLabel");
}

/* ===== language switching (preserves step 5 answers) ===== */
function snapshotHaiku(){
  const cards = Array.from(document.querySelectorAll("#haikuBlocks [data-haiku]"));
  return cards.map(collectHaiku);
}
function applyHaikuSnapshot(snapshot){
  const cards = Array.from(document.querySelectorAll("#haikuBlocks [data-haiku]"));
  cards.forEach((card, i)=>{
    const snap = snapshot[i]; if (!snap) return;
    const ns = (suffix)=> `h${i+1}-${suffix}`;

    const setRadio = (name, val)=>{
      if (val==null) return;
      const el = card.querySelector(`input[type="radio"][name="${name}"][value="${val}"]`);
      if (el) el.checked = true;
    };
    const setChecks = (baseName, vals)=>{
      const all = Array.from(card.querySelectorAll(`input[type="checkbox"][name="${baseName}"]`));
      all.forEach(c => { c.checked = false; });
      (vals||[]).forEach(v=>{
        const el = card.querySelector(`input[type="checkbox"][name="${baseName}"][value="${v}"]`);
        if (el) el.checked = true;
      });
      card.querySelectorAll(`input[type="checkbox"][name="${baseName}"]`).forEach(el=>{
        el.dispatchEvent(new Event('change', {bubbles:true}));
      });
    };

    setRadio(ns('who'), snap.who);
    setRadio(ns('conf'), snap.confidence);
    setRadio(ns('themeRel'), snap.theme_relevance);
    setRadio(ns('kukai'), snap.kukai);
    setRadio(ns('grammar'), snap.grammar);
    setRadio(ns('phrase'), snap.phrase_connection);

    Object.entries(snap.ratings||{}).forEach(([k,v])=>{
      setRadio(ns(k), v);
    });

    setRadio(ns('mora'), snap.structure?.mora_575);
    setChecks(`h${i+1}-kireji`, snap.structure?.kireji || []);
    const other = card.querySelector(`input[name="h${i+1}-kirejiOther"]`);
    if (other) other.value = snap.structure?.kireji_other || "";

    const comment = card.querySelector(`textarea[name="h${i+1}-comment"]`);
    if (comment) comment.value = snap.comment || "";
  });
}

document.getElementById("lang-en").addEventListener("click", ()=>{
  const snap = snapshotHaiku();
  currentLang = "en";
  document.getElementById("lang-en").classList.add("chip--active");
  document.getElementById("lang-ja").classList.remove("chip--active");
  renderFixedHaiku();
  applyHaikuSnapshot(snap);
  applyI18n();
});
document.getElementById("lang-ja").addEventListener("click", ()=>{
  const snap = snapshotHaiku();
  currentLang = "ja";
  document.getElementById("lang-ja").classList.add("chip--active");
  document.getElementById("lang-en").classList.remove("chip--active");
  renderFixedHaiku();
  applyHaikuSnapshot(snap);
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
  nextBtn.textContent = (nextIdx === TOTAL_STEPS - 1) ? t("finishLabel") : t("nextLabel");

  currentStep = nextIdx;
  document.querySelector(".wizard-viewport")?.scrollTo({ top: 0, behavior: "instant" });
}

function validateStep(idx){
  if (idx === 0 && !document.getElementById("purposeAck").checked) {
    alert(t("purposeAlert"));
    return false;
  }
  if (idx === 1 && !document.getElementById("consent").checked) {
    alert(t("consentAlert"));
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
const LIKERT_POINTS = 5;

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
function buildLikertHeader(){
  let cells = "<th></th>";
  for(let i=1;i<=LIKERT_POINTS;i++){ cells += `<th>${i}</th>`; }
  return `<tr>${cells}</tr>`;
}
function buildLikertRow(name, i18nKey){
  let cells = "";
  for(let i=1;i<=LIKERT_POINTS;i++){
    const id = `${name}-${i}-${Math.random().toString(36).slice(2,7)}`;
    cells += `<td><label><input type="radio" name="${name}" id="${id}" value="${i}"></label></td>`;
  }
  return `<tr><td data-i18n="${i18nKey}">${t(i18nKey)}</td>${cells}</tr>`;
}

/* ===================== Haiku Card ===================== */
let haikuCounter = 0;

function haikuBlockFromData({id, text}){
  const idx = ++haikuCounter;
  const ns = (suffix) => `h${idx}-${suffix}`;
  const confHelp = `from ${t('notConf')} (1) to ${t('veryConf')} (5)`;

  const confidenceChips = Array.from({length: 5}, (_,k)=> String(k+1))
    .map(v => makeRadio(ns('conf'), v, v))
    .join("");

  return `
  <section class="card" data-haiku="${idx}">
    <div class="haiku-header" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
      <div class="haiku-title" style="font-weight:700;color:var(--sapienza-primary)">Haiku #${idx}</div>
    </div>

    <div class="grid">
      <label class="stack">
        <span data-i18n="haikuId">${t('haikuId')}</span>
        <input type="text" name="${ns('id')}" value="${id || ''}" readonly>
      </label>
      <label class="stack">
        <span data-i18n="haikuText">${t('haikuText')}</span>
        <textarea rows="3" name="${ns('text')}" readonly>${text || ''}</textarea>
      </label>
    </div>

    <div class="field-group">
      <div class="field-label" data-i18n="sourceJudgment">${t('sourceJudgment')}</div>
      <div class="subgrid">
        <div>
          <div class="sub-label" data-i18n="whoWrote">${t('whoWrote')}</div>
          <div class="chips chips--inline">
            ${makeRadio(ns('who'), 'human', t('human'))}
            ${makeRadio(ns('who'), 'ai', t('ai'))}
          </div>
        </div>
        <div>
          <div class="sub-label" data-i18n="confidence">${t('confidence')}</div>
          <div class="hint">${confHelp}</div>
          <div class="chips chips--inline" style="margin-top:6px">
            ${confidenceChips}
          </div>
        </div>
      </div>
    </div>

    <div class="field-group">
      <div class="field-label" data-i18n="themeRel">${t('themeRel')}</div>
      <div class="chips chips--inline">
        ${makeRadio(ns('themeRel'), 'sa', t('stronglyAgree'))}
        ${makeRadio(ns('themeRel'), 'a', t('somewhatAgree'))}
        ${makeRadio(ns('themeRel'), 'd', t('somewhatDisagree'))}
        ${makeRadio(ns('themeRel'), 'sd', t('stronglyDisagree'))}
      </div>
    </div>

    <div class="field-group">
      <div class="field-label" data-i18n="kukaiSelection">${t('kukaiSelection')}</div>
      <div class="chips chips--inline">
        ${makeRadio(ns('kukai'), 'tokusen', t('tokusen'))}
        ${makeRadio(ns('kukai'), 'namisen', t('namisen'))}
        ${makeRadio(ns('kukai'), 'considered', t('considered'))}
        ${makeRadio(ns('kukai'), 'not', t('notSelected'))}
      </div>
    </div>

    <div class="field-group">
      <div class="field-label" data-i18n="formGrammar">${t('formGrammar')}</div>
      <div class="subgrid">
        <div>
          <div class="sub-label" data-i18n="grammar">${t('grammar')}</div>
          <div class="chips chips--inline">
            ${makeRadio(ns('grammar'), 'correct', t('correct'))}
            ${makeRadio(ns('grammar'), 'incorrect', t('incorrect'))}
            ${makeRadio(ns('grammar'), 'unsure', t('unsure'))}
          </div>
        </div>
        <div>
          <div class="sub-label" data-i18n="phraseConn">${t('phraseConn')}</div>
          <div class="chips chips--inline">
            ${makeRadio(ns('phrase'), 'connected', t('connected'))}
            ${makeRadio(ns('phrase'), 'not', t('notConnected'))}
            ${makeRadio(ns('phrase'), 'unsure', t('unsure'))}
          </div>
        </div>
      </div>
    </div>

    <div class="field-group">
      <div class="field-label" data-i18n="impressions">${t('impressions')}</div>
      <div class="hint" data-i18n="likertHint">${t('likertHint')}</div>
      <table class="table">
        <thead>${buildLikertHeader()}</thead>
        <tbody>
          ${buildLikertRow(ns('fluency'), 'fluency')}
          ${buildLikertRow(ns('haikuLike'), 'haikuLike')}
          ${buildLikertRow(ns('poeticness'), 'poeticness')}
          ${buildLikertRow(ns('coherence'), 'coherence')}
          ${buildLikertRow(ns('understandability'), 'understandability')}
          ${buildLikertRow(ns('favorability'), 'favorability')}
          ${buildLikertRow(ns('unexpectedness'), 'unexpectedness')}
        </tbody>
      </table>
    </div>

    <div class="field-group">
      <div class="field-label" data-i18n="structural">${t('structural')}</div>
      <div class="subgrid">
        <div>
          <div class="sub-label" data-i18n="mora575">${t('mora575')}</div>
          <div class="chips chips--inline">
            ${makeRadio(ns('mora'), 'yes', currentLang === "ja" ? "はい" : "Yes")}
            ${makeRadio(ns('mora'), 'no', currentLang === "ja" ? "いいえ" : "No")}
            ${makeRadio(ns('mora'), 'unsure', t('unsure'))}
          </div>
        </div>
        <div>
          <div class="sub-label" data-i18n="kirejiPresent">${t('kirejiPresent')}</div>
          <div class="chips chips--nowrap">
            ${makeCheck(ns('kireji'), 'ya', t('ya'))}
            ${makeCheck(ns('kireji'), 'kana', t('kana'))}
            ${makeCheck(ns('kireji'), 'keri', t('keri'))}
            ${makeCheck(ns('kireji'), 'ka', t('ka'))}
          </div>
          <div class="chips chips--inline" style="margin-top:8px">
            ${makeCheck(ns('kireji'), 'other', `${t('other')}:`)}
            <input type="text" name="${ns('kirejiOther')}" class="inline-input inline-input--chip" placeholder="">
          </div>
          <div class="chips chips--inline" style="margin-top:8px">
            ${makeCheck(ns('kireji'), 'unsure', t('unsure'))}
          </div>
        </div>
      </div>
    </div>

    <label class="stack">
      <span data-i18n="shortComment">${t('shortComment')}</span>
      <textarea rows="3" name="${ns('comment')}" placeholder="${t('imageryEtc')}"></textarea>
    </label>
  </section>`;
}

function attachKirejiLogic(card){
  const checks = Array.from(card.querySelectorAll('input[type="checkbox"][name*="-kireji"]'));
  const unsure = checks.find(c => c.value === "unsure");
  const others = checks.filter(c => c.value !== "unsure");
  function sync(){
    if (unsure && unsure.checked){ others.forEach(c => { c.checked = false; c.disabled = true; }); }
    else { others.forEach(c => { c.disabled = false; }); }
  }
  checks.forEach(c => c.addEventListener('change', ()=>{
    if (c !== unsure && c.checked && unsure) unsure.checked = false;
    sync();
  }));
  sync();
}

function renderFixedHaiku(){
  const wrap = document.getElementById("haikuBlocks");
  if (!wrap) return;
  wrap.innerHTML = "";
  haikuCounter = 0;
  HAIKU_LIST.forEach(h => {
    const holder = document.createElement("div");
    holder.innerHTML = haikuBlockFromData(h);
    const card = holder.firstElementChild;
    wrap.appendChild(card);
    attachKirejiLogic(card);
  });
  const totalEl = document.getElementById("haikuTotal");
  if (totalEl) totalEl.textContent = String(HAIKU_LIST.length);
}

/* ============ Export / Finish ============ */
function getCheckedValues(scope, selector){
  return Array.from(scope.querySelectorAll(selector)).filter(x => x.checked).map(x => x.value);
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

  return {
    metadata: {
      lang_ui: currentLang,
      estimated_time: document.getElementById("estimatedTime")?.textContent || null,
      consent: document.getElementById("consent")?.checked || false,
      date: document.getElementById("dateField")?.value || null,
      university: document.getElementById("university")?.value || null,
      year_program: document.getElementById("yearProgram")?.value || null,
      jlpt: getRadioValue(document, "jlpt"),
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
function onFinish(){ showStep(6); }

document.getElementById("exportBtn").addEventListener("click", ()=>{
  downloadJSON(collectPayload());
  alert(t("exportDone")); // localized export notice
});

/* ===== init ===== */
applyI18n();
renderFixedHaiku();
showStep(0);

// date min = today + default today
(function setDateMinToday(){
  const df = document.getElementById("dateField");
  if (!df) return;
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth()+1).padStart(2,"0");
  const dd = String(today.getDate()).padStart(2,"0");
  const iso = `${yyyy}-${mm}-${dd}`;
  df.min = iso;
  if (!df.value) df.value = iso;
})();

// keyboard nav
document.addEventListener("keydown", (e)=>{
  if (e.key === "ArrowRight") nextBtn.click();
  if (e.key === "ArrowLeft") backBtn.click();
});