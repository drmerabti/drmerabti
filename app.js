/* =====================================================================
   CONTENT STORE
   هذا هو المكان الوحيد الذي تعدّل فيه لإضافة دروس / تطبيقات / أدوات.
   لإضافة أداة جديدة: أنشئ مجلدها في tools/اسم-الأداة/ ثم أضف سطرًا هنا
   داخل CONTENT.tools فقط — لا حاجة لتعديل أي صفحة أخرى.
===================================================================== */

const CONTENT = {
  lessons: [
    {
      id: 'lesson-word-move-image',
      title_ar: 'تحريك الصورة بسهولة في وورد',
      title_en: 'Moving images easily in Word',
      desc_ar: 'شرح خطوة بخطوة لتحريك الصور وتموضعها داخل مستند وورد.',
      desc_en: 'A step-by-step guide to positioning and moving images inside a Word document.',
      category: 'Word',
      videoUrl: 'https://www.youtube.com/watch?v=7kxAqiy4ER0',
      relatedTraining: 'training-word-basics',
    },
    {
      id: 'lesson-word-table-move',
      title_ar: 'تحريك الجدول بسهولة في وورد',
      title_en: 'Moving tables easily in Word',
      desc_ar: 'كيفية تحريك وتنظيم الجداول داخل المستند بدون تعقيد.',
      desc_en: 'How to move and organize tables inside a document without hassle.',
      category: 'Word',
      videoUrl: 'https://www.youtube.com/watch?v=zFBEXsB-ZVo',
      relatedTraining: 'training-word-basics',
    },
  ],
  apps: [
    {
      id: 'app-word-shortcuts',
      title_ar: 'اختصارات وورد',
      title_en: 'Word Shortcuts',
      desc_ar: 'تطبيق ثنائي اللغة لتعلّم أهم اختصارات لوحة المفاتيح في مايكروسوفت وورد.',
      desc_en: 'A bilingual app for learning the most useful Microsoft Word keyboard shortcuts.',
      platform_ar: 'أندرويد',
      platform_en: 'Android',
      playStoreUrl: '',
    },
  ],
  /* ============ الأدوات ============
     كل عنصر هنا = أداة قائمة بذاتها لها مجلدها ورابطها الخاص.
     لإضافة أداة جديدة أضف كائنًا جديدًا هنا بنفس الشكل:
     {
       id: 'tool-xxx',
       title_ar: '...', title_en: '...',
       desc_ar: '...', desc_en: '...',
       url: 'tools/xxx/'
     }
  ============================== */
  tools: [
    { id: 'tool-text-to-numbers', title_ar: 'تحويل الحروف إلى أرقام', title_en: 'Text to Numbers',
      desc_ar: 'حوّل أي نص إلى أرقام حسب موضع كل حرف في الأبجدية.', desc_en: 'Convert any text into numbers based on letter position.',
      url: 'tools/text-to-numbers/' },
    // لإضافة أداة جديدة أضف سطرًا هنا بنفس الشكل:
    // { id:'tool-distance', title_ar:'حساب المسافة بين منطقتين', title_en:'Distance Calculator',
    //   desc_ar:'احسب المسافة بين نقطتين جغرافيتين بسهولة.', desc_en:'Calculate distance between two locations.',
    //   url:'tools/distance-calculator/' },
  ],
  resources: [],
  services: [],
  trainings: [
    {
      id: 'training-word-basics',
      title_ar: 'تمرين: أساسيات وورد',
      title_en: 'Exercise: Word basics',
      desc_ar: 'تمرين عملي لتثبيت ما تعلمته في دروس وورد الأساسية.',
      desc_en: 'A hands-on exercise to reinforce the basic Word lessons.',
      relatedLesson: 'lesson-word-move-image',
    },
  ],
};

const SECTIONS = [
  { key: 'lessons',   icon: '📘', badge: 'badge-lessons',   href: 'lessons.html' },
  { key: 'apps',      icon: '📱', badge: 'badge-apps',      href: 'apps.html' },
  { key: 'tools',     icon: '🛠️', badge: 'badge-tools',     href: 'tools.html' },
  { key: 'resources', icon: '📂', badge: 'badge-resources', href: 'resources.html' },
  { key: 'services',  icon: '✉️', badge: 'badge-services',  href: 'services.html' },
  { key: 'about',     icon: '👤', badge: 'badge-about',     href: 'about.html' },
];

/* =====================================================================
   I18N
===================================================================== */
const I18N = {
  ar: {
    site_title: 'د. سفيان مرابطي — التعلم الرقمي',
    brand: 'د. سفيان مرابطي',
    search_placeholder: 'ابحث عن درس، تطبيق، أداة...',
    home: 'الرئيسية',
    about_title: 'عن د. سفيان مرابطي',
    about_body: 'أشارك دروسًا وتطبيقات عملية لتسهيل استخدام برامج مايكروسوفت للجميع.',
    footer_text: '© 2026 د. سفيان مرابطي',
    section_lessons: 'الدروس', section_apps: 'التطبيقات', section_tools: 'الأدوات',
    section_resources: 'الموارد', section_services: 'الخدمات', section_about: 'حول',
    section_lessons_desc: 'دروس مصورة خطوة بخطوة', section_apps_desc: 'تطبيقات عملية للتنزيل',
    section_tools_desc: 'أدوات مساعدة سريعة', section_resources_desc: 'ملفات وموارد للتحميل',
    section_services_desc: 'خدمات واستشارات', section_about_desc: 'تعرّف علي',
    go_to_training: 'الذهاب إلى التمرين', review_lesson: 'مراجعة الدرس',
    watch_video: 'مشاهدة الفيديو', open_app: 'فتح على Google Play',
    open_tool: 'فتح الأداة',
    no_results: 'لا نتائج مطابقة', empty_section: 'لا يوجد محتوى هنا بعد.',
    type_lessons: 'درس', type_apps: 'تطبيق', type_tools: 'أداة',
    type_resources: 'مورد', type_services: 'خدمة',
    back_to_list: 'رجوع للقائمة',
  },
  en: {
    site_title: 'Dr. Sofiane Merabti — Digital Learning',
    brand: 'Dr. Sofiane Merabti',
    search_placeholder: 'Search lessons, apps, tools...',
    home: 'Home',
    about_title: 'About Dr. Sofiane Merabti',
    about_body: 'I share lessons and practical apps that make Microsoft tools easier for everyone.',
    footer_text: '© 2026 Dr. Sofiane Merabti',
    section_lessons: 'Lessons', section_apps: 'Apps', section_tools: 'Tools',
    section_resources: 'Resources', section_services: 'Services', section_about: 'About',
    section_lessons_desc: 'Step-by-step video lessons', section_apps_desc: 'Practical apps to download',
    section_tools_desc: 'Quick helper tools', section_resources_desc: 'Downloadable files and resources',
    section_services_desc: 'Services and consulting', section_about_desc: 'Get to know me',
    go_to_training: 'Go to training', review_lesson: 'Review lesson',
    watch_video: 'Watch video', open_app: 'Open on Google Play',
    open_tool: 'Open tool',
    no_results: 'No matching results', empty_section: 'No content here yet.',
    type_lessons: 'Lesson', type_apps: 'App', type_tools: 'Tool',
    type_resources: 'Resource', type_services: 'Service',
    back_to_list: 'Back to list',
  },
};

let lang = localStorage.getItem('site_lang') || 'ar';

function t(key){ return I18N[lang][key] || key; }

function applyLanguage(){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) toggleBtn.textContent = lang === 'ar' ? 'EN' : 'AR';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  localStorage.setItem('site_lang', lang);
}

/* =====================================================================
   HOME GRID
===================================================================== */
function renderHomeGrid(){
  const grid = document.getElementById('sectionGrid');
  if (!grid) return;
  grid.innerHTML = '';
  SECTIONS.forEach(s => {
    const card = document.createElement('a');
    card.className = 'section-card';
    card.href = s.href;
    card.style.textDecoration = 'none';
    card.style.color = 'inherit';
    card.style.display = 'block';
    card.innerHTML = `
      <span class="icon-badge ${s.badge}">${s.icon}</span>
      <h3>${t('section_' + s.key)}</h3>
      <p>${t('section_' + s.key + '_desc')}</p>
    `;
    grid.appendChild(card);
  });
}

/* =====================================================================
   SECTION LIST + DETAIL (lessons / apps / tools / resources / services)
===================================================================== */
function renderSectionItems(){
  const wrap = document.getElementById('sectionItems');
  if (!wrap) return;
  const key = document.body.dataset.section;
  const items = CONTENT[key] || [];

  wrap.innerHTML = '';
  if (items.length === 0){
    wrap.innerHTML = `<p>${t('empty_section')}</p>`;
    return;
  }

  items.forEach(item => {
    if (key === 'tools' && item.url){
      const card = document.createElement('a');
      card.className = 'item-card';
      card.href = item.url;
      card.style.textDecoration = 'none';
      card.style.color = 'inherit';
      card.style.display = 'block';
      card.innerHTML = `
        <h3>${lang === 'ar' ? item.title_ar : item.title_en}</h3>
        <p>${lang === 'ar' ? item.desc_ar : item.desc_en}</p>
      `;
      wrap.appendChild(card);
    } else {
      const card = document.createElement('div');
      card.className = 'item-card';
      card.innerHTML = `
        <h3>${lang === 'ar' ? item.title_ar : item.title_en}</h3>
        <p>${lang === 'ar' ? item.desc_ar : item.desc_en}</p>
        <div class="item-meta">${item.category ? `<span class="tag">${item.category}</span>` : ''}</div>
      `;
      card.addEventListener('click', () => { location.hash = item.id; });
      wrap.appendChild(card);
    }
  });
}

function findItem(listKey, id){
  return (CONTENT[listKey] || []).find(i => i.id === id);
}

function renderItemDetail(listKey, id){
  const item = findItem(listKey, id);
  const listWrap = document.getElementById('sectionItems');
  const detailWrap = document.getElementById('itemDetailWrap');
  const el = document.getElementById('itemDetail');
  if (!item || !detailWrap || !el){
    if (listWrap) listWrap.classList.remove('hidden');
    if (detailWrap) detailWrap.classList.add('hidden');
    return;
  }

  let extra = '';
  if (listKey === 'lessons'){
    if (item.videoUrl) extra += `<a class="store-btn" href="${item.videoUrl}" target="_blank" rel="noopener">${t('watch_video')}</a>`;
    if (item.relatedTraining) extra += `<button class="related-btn" id="relatedBtn" data-list="trainings" data-id="${item.relatedTraining}">${t('go_to_training')}</button>`;
  }
  if (listKey === 'trainings' && item.relatedLesson){
    extra += `<button class="related-btn" id="relatedBtn" data-list="lessons" data-id="${item.relatedLesson}">${t('review_lesson')}</button>`;
  }
  if (listKey === 'apps' && item.playStoreUrl){
    extra += `<a class="store-btn" href="${item.playStoreUrl}" target="_blank" rel="noopener">${t('open_app')}</a>`;
  }
  extra += `<button class="related-btn" id="backToListBtn">${t('back_to_list')}</button>`;

  el.innerHTML = `
    <h2>${lang === 'ar' ? item.title_ar : item.title_en}</h2>
    <p>${lang === 'ar' ? item.desc_ar : item.desc_en}</p>
    ${extra}
  `;

  const relBtn = document.getElementById('relatedBtn');
  if (relBtn){
    relBtn.addEventListener('click', () => {
      renderItemDetail(relBtn.dataset.list, relBtn.dataset.id);
    });
  }
  const backBtn = document.getElementById('backToListBtn');
  if (backBtn){
    backBtn.addEventListener('click', () => { location.hash = ''; });
  }

  if (listWrap) listWrap.classList.add('hidden');
  detailWrap.classList.remove('hidden');
}

function handleHash(){
  const key = document.body.dataset.section;
  if (!key) return;
  const id = location.hash.replace('#', '');
  const listWrap = document.getElementById('sectionItems');
  const detailWrap = document.getElementById('itemDetailWrap');
  if (!id){
    if (listWrap) listWrap.classList.remove('hidden');
    if (detailWrap) detailWrap.classList.add('hidden');
    return;
  }
  renderItemDetail(key, id);
}

/* =====================================================================
   SEARCH (على الصفحة الرئيسية فقط)
===================================================================== */
function buildSearchIndex(){
  const index = [];
  Object.keys(CONTENT).forEach(key => {
    if (key === 'trainings') return;
    (CONTENT[key] || []).forEach(item => {
      index.push({ listKey: key, id: item.id, title_ar: item.title_ar, title_en: item.title_en, url: item.url });
    });
  });
  return index;
}

function initSearch(){
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  if (!searchInput || !searchResults) return;

  const searchIndex = buildSearchIndex();
  const pageByKey = {
    lessons: 'lessons.html', apps: 'apps.html', tools: 'tools.html',
    resources: 'resources.html', services: 'services.html',
  };

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q){ searchResults.classList.add('hidden'); return; }

    const matches = searchIndex.filter(i =>
      i.title_ar.toLowerCase().includes(q) || i.title_en.toLowerCase().includes(q)
    );

    searchResults.innerHTML = matches.length
      ? matches.map(m => {
          const href = m.listKey === 'tools' && m.url ? m.url : `${pageByKey[m.listKey]}#${m.id}`;
          return `
            <div class="result-item" data-href="${href}">
              <span>${lang === 'ar' ? m.title_ar : m.title_en}</span>
              <span class="result-type">${t('type_' + m.listKey)}</span>
            </div>`;
        }).join('')
      : `<div class="result-item">${t('no_results')}</div>`;

    searchResults.classList.remove('hidden');
  });

  searchResults.addEventListener('click', (e) => {
    const row = e.target.closest('.result-item');
    if (!row || !row.dataset.href) return;
    window.location.href = row.dataset.href;
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrap')) searchResults.classList.add('hidden');
  });
}

/* =====================================================================
   INIT
===================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage();
  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn){
    toggleBtn.addEventListener('click', () => {
      lang = lang === 'ar' ? 'en' : 'ar';
      applyLanguage();
      renderHomeGrid();
      renderSectionItems();
      handleHash();
    });
  }
  renderHomeGrid();
  renderSectionItems();
  initSearch();
  handleHash();
});
window.addEventListener('hashchange', handleHash);
