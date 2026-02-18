// Список проектов для портфолио
const projects = [
    {
        id: 1,
        title: "Anime List",
        description: 'Веб-приложение для отображения личной библиотеки аниме с Shikimori, манги, фильмов с красивым современным интерфейсом. <p><strong>Стек:</strong></p> <ul><li>JavaScript 72.4%</li><li>CSS 19.3%</li><li>HTML 8.3%</li><li>Shikimori API</li><li>CSV data source (Google Sheets)</li></ul><p class="project-note">P.S.: Могут возникнуть проблемы с загрузкой контента в РФ в связи с блокировкой API Shikimori от РКН.</p>',
        url: "https://bca9huk.github.io/animeList/index.html",
        screenshot: null, // Путь к скриншоту (опционально), например: "media/anime-list/anime-list.jpg"
        themeKey: "theme-animeList" // Уникальный ключ для темы этого проекта
    },
    {
        id: 2,
        title: "AnimeQuiz",
        description: 'AniQuiz - это интерактивная платформа для проверки знаний об аниме.<p><strong>Стек:</strong></p> <ul><li>JavaScript 53.8%</li><li>HTML 30.5%</li><li>CSS 15.7%</ul>',
        url: "https://bca9huk.github.io/nAnimeQuiz/",
        screenshot: null,
        themeKey: "theme-animeQuiz"
    },
    {
        id: 3,
        title: "Puzzle Generator",
        description: 'Создавайте пазлы с классическими и абстрактными формами кусочков.<p><strong>Стек:</strong></p> <ul><li><strong>Frontend:</strong> React 19, TypeScript, Tailwind CSS</li><li><strong>Сборка:</strong> Vite</li><li><strong>Иконки:</strong> Lucide React</li><li><strong>Canvas API</strong> для генерации пазлов</li></ul>',
        url: "https://bca9huk.github.io/puzzle-generator4/",
        screenshot: null,
        themeKey: "theme-project3"
    },
    {
        id: 4,
        title: "ВОИ Абаза",
        description: 'Сайт, разработанный в рамках выпускной квалификационной работы в 2023 году, для ВОИ Абаза.<p><strong>Стек:</strong></p><ul><li><strong>CMS:</strong> WordPress</li><li><strong>Тема:</strong> Astra (конструктор блоков)</li><li><strong>Плагины:</strong> формы обратной связи, часы работы, версия для слабовидящих, просмотр PDF</li><li><strong>Интеграции:</strong> Яндекс карты, Яндекс календарь (шорткоды)</li></ul><p class="project-note">Проект доступен в виде скриншотов и демо-ролика.</p>',
        url: null,
        media: [
            { type: 'image', src: "media/voi-abaza/main.png", alt: "ВКР — экран 1" },
            { type: 'image', src: "media/voi-abaza/about.png", alt: "ВКР — экран 2" },
            { type: 'image', src: "media/voi-abaza/news.png", alt: "ВКР — экран 3" },
            { type: 'image', src: "media/voi-abaza/doc.png", alt: "ВКР — экран 4" },
            { type: 'image', src: "media/voi-abaza/contacts.png", alt: "ВКР — экран 5" },
            { type: 'image', src: "media/voi-abaza/mobile.png", alt: "ВКР — экран 6" },
            { type: 'video', src: "media/voi-abaza/demo.mp4", alt: "Видео-демо ВКР" }
        ],
        themeKey: null
    },
    {
        id: 5,
        title: "GameLib",
        description: 'Сайт, разработанный в рамках курса "Программная инженерия" в 2022 году, для ведения своей библиотеки пройденных игр.<p><strong>Стек:</strong></p><ul><li><strong>CMS:</strong> WordPress</li><li><strong>Тема:</strong> Astra (конструктор блоков)</li><li><strong>Пользователи:</strong> регистрация, авторизация, роли</li><li><strong>Данные:</strong> пользовательские списки игр</li><li><strong>Интерактив:</strong> оценки, кастомизация профиля</li></ul><p class="project-note">Проект доступен в виде скриншотов и демо-ролика.</p>',
        url: null,
        media: [
            { type: 'image', src: "media/gamelib/main.png", alt: "GameLib - экран 1"},
            { type: 'image', src: "media/gamelib/game.png", alt: "GameLib - экран 2"},
            { type: 'video', src: "media/gamelib/demo.mp4", alt: "Видео-демо GameLib" }
        ],
        themeKey: null
    }
];

let currentProjectIndex = 0;
let isMonitorOn = true; // Состояние монитора (включен/выключен)
const frame = document.getElementById('projectFrame');
const loadingOverlay = document.getElementById('loadingOverlay');
const errorOverlay = document.getElementById('errorOverlay');
const screenshotOverlay = document.getElementById('screenshotOverlay');
const screenshotImg = document.getElementById('screenshotImg');
const openExternalBtn = document.getElementById('openExternalBtn');
const projectOpenBtn = document.getElementById('projectOpenBtn');
const projectDetailsBtn = document.getElementById('projectDetailsBtn');
const projectDetailsDrawer = document.getElementById('projectDetailsDrawer');
const projectDetailsTitle = document.getElementById('projectDetailsTitle');
const projectDetailsContent = document.getElementById('projectDetailsContent');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const projectsList = document.getElementById('projectsList');
const projectPickerBtn = document.getElementById('projectPickerBtn');
const projectPickerLabel = document.getElementById('projectPickerLabel');
const projectsDrawer = document.getElementById('projectsDrawer');
const projectsDrawerList = document.getElementById('projectsDrawerList');
const powerBtn = document.getElementById('powerBtn');
const monitorScreen = document.getElementById('monitorScreen');
const themeSelect = document.getElementById('themeSelect');
const themePills = document.querySelectorAll('.theme-pill');
const themeSwitcherEl = document.querySelector('.theme-switcher');
const mobileThemeToggle = document.getElementById('mobileThemeToggle');
const burgerToggle = document.getElementById('burgerToggle');
const mobileMenu = document.getElementById('mobileMenu');
const phoneStatusTimeEl = document.querySelector('.phone-status-time');

// Переключение языка
const langToggleBtn = document.getElementById('langToggle');
const langToggleLabel = document.getElementById('langToggleLabel');

const translations = {
    ru: {
        'nav.about': 'Обо мне',
        'nav.skills': 'Что я использую',
        'nav.projects': 'Проекты',
        'nav.hobby': 'Хобби',
        'nav.contacts': 'Контакты',
        'hero.tag': 'Портфолио',
        'hero.subtitle': 'Начинающий Frontend разработчик, который любит красивые интерфейсы и живые продукты.',
        'about.title': 'Обо мне',
        'about.text': 'Окончил Хакасский государственный университет имени Н.Ф. Катанова по специальности "Информационные системы и технологии" в 2023 году. Интерес к frontend-разработке сформировался во время обучения в университете. В рамках выпускной квалификационной работы разработал корпоративный сайт для ВОИ Абаза. <br> Сейчас развиваюсь через pet-проекты и практические задачи, делая акцент на UI и удобство пользователя.',
        'skills.title': 'Что я использую',
        'skills.frontendTitle': 'Frontend',
        'skills.frontendText': 'HTML, CSS, JavaScript',
        'skills.toolsTitle': 'Инструменты',
        'skills.toolsText': 'Git(базово), GitHub Pages, Figma, WordPress',
        'projects.title': 'Проекты',
        'projects.subtitle': 'Исследуйте мои работы в интерактивном мониторе.',
        'projects.loading': 'Загрузка проекта...',
        'projects.errorTitle': 'Сайт не может быть загружен в iframe',
        'projects.errorText': 'Этот сайт использует защиту от встраивания. Откройте его в новой вкладке.',
        'projects.openExternal': 'Открыть в новой вкладке',
        'projects.details': 'Подробнее',
        'hobby.title': 'Хобби',
        'hobby.text': 'Интересуюсь современными технологиями и развитием ИИ, слежу за трендами в вебе и цифровых продуктах. <br> В свободное время смотрю аниме, веду стримы на Twitch и делаю видео для YouTube — это помогает развивать насмотренность, коммуникацию и понимание аудитории.',
        'contacts.title': 'Контакты',
        'contacts.telegram': 'Telegram',
        'contacts.email': 'Email',
        'contacts.github': 'GitHub',
        'contacts.twitch': 'Twitch',
        'contacts.youtube': 'YouTube',
    },
    en: {
        'nav.about': 'About',
        'nav.skills': 'Tech stack',
        'nav.projects': 'Projects',
        'nav.hobby': 'Hobby',
        'nav.contacts': 'Contacts',
        'hero.tag': 'Portfolio',
        'hero.subtitle': 'Junior Frontend Developer focused on clean interfaces and user-friendly products.',
        'about.title': 'About me',
        'about.text': `I graduated from Khakass State University named after N.F. Katanov in 2023 with a degree in Information Systems and Technologies.
            My interest in frontend development started during my university studies.
            As part of my graduation project, I developed a corporate website for VOI Abaza.
            Currently, I improve my skills through pet projects and practical tasks, with a strong focus on UI and user experience.`,
        'skills.title': 'What I use',
        'skills.frontendTitle': 'Frontend',
        'skills.frontendText': 'HTML, CSS, JavaScript',
        'skills.toolsTitle': 'Tools',
        'skills.toolsText': 'Git (basic), GitHub Pages, Figma, WordPress',
        'projects.title': 'Projects',
        'projects.subtitle': 'Explore my work inside the interactive monitor.',
        'projects.loading': 'Loading project…',
        'projects.errorTitle': 'The site cannot be loaded in an iframe',
        'projects.errorText': 'This site uses clickjacking protection. Open it in a new tab.',
        'projects.openExternal': 'Open in new tab',
        'projects.details': 'Details',
        'hobby.title': 'Hobby',
        'hobby.text': 'I am interested in modern technologies and the development of AI, and I actively follow trends in web and digital products. <br> In my free time, I watch anime, stream on Twitch, and create videos for YouTube — this helps me improve my visual sense, communication skills, and audience awareness.',
        'contacts.title': 'Contacts',
        'contacts.telegram': 'Telegram',
        'contacts.email': 'Email',
        'contacts.github': 'GitHub',
        'contacts.twitch': 'Twitch',
        'contacts.youtube': 'YouTube',
    },
};

let currentLang = (localStorage.getItem('portfolioLang') === 'en') ? 'en' : 'ru';

let loadTimeout = null;
let isFrameBlocked = false;
let expandedProjectIndex = null; // Индекс развернутого проекта
let currentMediaIndex = 0;
let currentMediaProject = null;
let currentMediaElement = null;
let isMediaAnimating = false;
let isProjectChanging = false; // Флаг для блокировки повторных нажатий при переключении проектов
let currentFullscreenWrapper = null; // Ссылка на текущий fullscreen элемент
let fullscreenKeyboardHandler = null; // Обработчик клавиатуры для fullscreen

function clearFrameHandlersAndTimers() {
    if (loadTimeout) {
        clearTimeout(loadTimeout);
        loadTimeout = null;
    }
    frame.onload = null;
    frame.onerror = null;
}

function stopFrameLoading() {
    clearFrameHandlersAndTimers();
    try {
        frame.src = 'about:blank';
    } catch (e) {
        // ignore
    }
    loadingOverlay.classList.add('hidden');
    frame.classList.remove('loading');
}

// Инициализация
function init() {
    initLanguage();
    initTheme();
    initMobileHeader();
    initProjectPicker();
    initProjectDetails();
    initPhoneStatusBarTime();
    renderProjectsList();
    loadProject(currentProjectIndex);
    updateNavigation();
}

function initPhoneStatusBarTime() {
    if (!phoneStatusTimeEl) return;

    const updateTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        phoneStatusTimeEl.textContent = `${hours}:${minutes}`;
    };

    updateTime();

    // Обновляем каждую минуту
    const msToNextMinute = (60 - new Date().getSeconds()) * 1000;
    setTimeout(() => {
        updateTime();
        setInterval(updateTime, 60 * 1000);
    }, msToNextMinute);
}

function initProjectDetails() {
    if (!projectDetailsBtn || !projectDetailsDrawer || !projectDetailsTitle || !projectDetailsContent) return;

    projectDetailsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeThemePopover();
        // закрываем другие возможные оверлеи
        setProjectsDrawerOpen(false);
        setMobileMenuOpen(false);
        setProjectDetailsOpen(!projectDetailsDrawer.classList.contains('is-open'));
    });

    projectDetailsDrawer.querySelectorAll('[data-project-details-close]').forEach((el) => {
        el.addEventListener('click', () => setProjectDetailsOpen(false));
    });

    const panel = projectDetailsDrawer.querySelector('.project-details-panel');
    if (panel) panel.addEventListener('click', (e) => e.stopPropagation());

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setProjectDetailsOpen(false);
    });
}

function setProjectDetailsOpen(open) {
    if (!projectDetailsDrawer || !projectDetailsBtn) return;
    projectDetailsDrawer.classList.toggle('is-open', open);
    document.body.classList.toggle('is-project-details-open', open);
    projectDetailsBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    projectDetailsDrawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (open) updateProjectDetailsUI();
}

function updateProjectDetailsUI() {
    if (!projectDetailsTitle || !projectDetailsContent) return;
    const project = projects[currentProjectIndex];
    projectDetailsTitle.textContent = project?.title || '';
    projectDetailsContent.innerHTML = project?.description || '';
}

function initProjectPicker() {
    if (!projectPickerBtn || !projectsDrawer || !projectsDrawerList) return;

    projectPickerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeThemePopover();
        setProjectsDrawerOpen(!projectsDrawer.classList.contains('is-open'));
    });

    projectsDrawer.querySelectorAll('[data-projects-drawer-close]').forEach((el) => {
        el.addEventListener('click', () => setProjectsDrawerOpen(false));
    });

    const panel = projectsDrawer.querySelector('.projects-drawer-panel');
    if (panel) panel.addEventListener('click', (e) => e.stopPropagation());

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setProjectsDrawerOpen(false);
    });
}

function setProjectsDrawerOpen(open) {
    if (!projectsDrawer || !projectPickerBtn) return;
    projectsDrawer.classList.toggle('is-open', open);
    document.body.classList.toggle('is-projects-drawer-open', open);
    projectPickerBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    projectsDrawer.setAttribute('aria-hidden', open ? 'false' : 'true');
}

function updateProjectPickerUI() {
    if (projectPickerLabel) {
        projectPickerLabel.textContent = projects[currentProjectIndex]?.title || 'Projects';
    }
    if (projectsDrawerList) {
        projectsDrawerList.querySelectorAll('.projects-drawer-item').forEach((btn) => {
            const idx = Number(btn.dataset.index);
            btn.classList.toggle('is-active', idx === currentProjectIndex);
        });
    }
}

function applyTranslations(lang) {
    const dict = translations[lang] || translations.ru;
    document.documentElement.lang = lang;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
        const key = el.dataset.i18n;
        if (!key || !dict[key]) return;
        if (el.dataset.i18nType === 'html') {
            el.innerHTML = dict[key];
        } else {
            el.textContent = dict[key];
        }
    });

    if (langToggleLabel) {
        langToggleLabel.textContent = lang === 'ru' ? 'RU' : 'EN';
    }
}

function initLanguage() {
    applyTranslations(currentLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'ru' ? 'en' : 'ru';
            localStorage.setItem('portfolioLang', currentLang);
            document.body.classList.add('is-switching-lang');

            // даём CSS начать затемнение, затем меняем текст и возвращаем непрозрачность
            setTimeout(() => {
                applyTranslations(currentLang);
                document.body.classList.remove('is-switching-lang');
            }, 160);
        });
    }
}

function initMobileHeader() {
    // Theme popover (🌙)
    if (mobileThemeToggle && themeSwitcherEl) {
        mobileThemeToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = themeSwitcherEl.classList.toggle('is-open');
            mobileThemeToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }

    // Burger menu (☰)
    if (burgerToggle && mobileMenu) {
        burgerToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            closeThemePopover();
            setMobileMenuOpen(!mobileMenu.classList.contains('is-open'));
        });

        mobileMenu.querySelectorAll('[data-mobile-menu-close]').forEach((el) => {
            el.addEventListener('click', () => setMobileMenuOpen(false));
        });

        mobileMenu.querySelectorAll('.mobile-nav-link').forEach((link) => {
            link.addEventListener('click', () => setMobileMenuOpen(false));
        });

        const panel = mobileMenu.querySelector('.mobile-menu-panel');
        if (panel) {
            panel.addEventListener('click', (e) => e.stopPropagation());
        }
    }

    // Click outside closes theme popover
    document.addEventListener('click', () => {
        closeThemePopover();
    });

    // Escape closes popover/menu
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        closeThemePopover();
        setMobileMenuOpen(false);
    });
}

function closeThemePopover() {
    if (!themeSwitcherEl || !mobileThemeToggle) return;
    if (themeSwitcherEl.classList.contains('is-open')) {
        themeSwitcherEl.classList.remove('is-open');
        mobileThemeToggle.setAttribute('aria-expanded', 'false');
    }
}

function setMobileMenuOpen(open) {
    if (!mobileMenu || !burgerToggle) return;
    mobileMenu.classList.toggle('is-open', open);
    document.body.classList.toggle('is-mobile-menu-open', open);
    burgerToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    mobileMenu.setAttribute('aria-hidden', open ? 'false' : 'true');
}

function initTheme() {
    const saved = localStorage.getItem('portfolioTheme');
    const theme = saved || 'noir';
    setTheme(theme);

    if (themeSelect) {
        themeSelect.value = theme;
        themeSelect.addEventListener('change', () => {
            setTheme(themeSelect.value);
        });
    }

    if (themePills && themePills.length) {
        themePills.forEach((btn) => {
            btn.addEventListener('click', () => {
                const t = btn.dataset.theme;
                if (t) setTheme(t);
            });
        });
    }
}

function setTheme(theme) {
    document.body.dataset.theme = theme;
    localStorage.setItem('portfolioTheme', theme);
    if (themeSelect) themeSelect.value = theme;
    if (themePills && themePills.length) {
        themePills.forEach((btn) => {
            btn.setAttribute('aria-pressed', btn.dataset.theme === theme ? 'true' : 'false');
        });
    }

    // Если тема выбрана из мобильного поповера — закрываем его
    closeThemePopover();
}

// Рендеринг списка проектов
function renderProjectsList() {
    projectsList.innerHTML = '';
    projects.forEach((project, index) => {
        // Создаем контейнер для проекта
        const projectContainer = document.createElement('div');
        projectContainer.className = 'project-item';
        
        // Кнопка проекта
        const thumb = document.createElement('button');
        thumb.className = 'project-thumb';
        thumb.type = 'button';
        if (index === currentProjectIndex) {
            thumb.classList.add('active');
        }
        thumb.textContent = project.title;
        thumb.addEventListener('click', () => {
            // Если кликнули на уже выбранный проект - сворачиваем/разворачиваем описание
            if (index === currentProjectIndex) {
                toggleProjectDescription(index);
            } else {
                // Блокируем повторные нажатия при переключении
                if (isProjectChanging) return;
                isProjectChanging = true;
                // Выбираем новый проект
                currentProjectIndex = index;
                loadProject(currentProjectIndex);
                updateNavigation();
                // Показываем описание нового проекта
                showProjectDescription(index);
                // Разблокируем через 400ms (время анимации/загрузки)
                setTimeout(() => {
                    isProjectChanging = false;
                }, 400);
            }
        });
        
        // Блок с описанием (изначально скрыт)
        const projectInfo = document.createElement('div');
        projectInfo.className = 'project-info-collapsible';
        projectInfo.id = `projectInfo-${project.id}`;
        const externalLinkHtml = project.url
            ? `
            <a href="${project.url}" target="_blank" class="external-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Открыть проект в новой вкладке
            </a>
            `
            : '';
        projectInfo.innerHTML = `
            <p class="project-description">${project.description}</p>
            ${externalLinkHtml}
        `;
        thumb.setAttribute('aria-controls', projectInfo.id);
        thumb.setAttribute('aria-expanded', 'false');
        
        projectContainer.appendChild(thumb);
        projectContainer.appendChild(projectInfo);
        projectsList.appendChild(projectContainer);
    });
    
    // Показываем описание текущего проекта
    if (currentProjectIndex !== null) {
        showProjectDescription(currentProjectIndex);
    }

    // Mobile drawer list
    if (projectsDrawerList) {
        projectsDrawerList.innerHTML = '';
        projects.forEach((project, index) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'projects-drawer-item';
            btn.dataset.index = String(index);

            const title = document.createElement('span');
            title.className = 'projects-drawer-item-title';
            title.textContent = project.title;
            btn.appendChild(title);

            btn.addEventListener('click', () => {
                if (index === currentProjectIndex) {
                    setProjectsDrawerOpen(false);
                    return;
                }
                if (isProjectChanging) return;
                isProjectChanging = true;
                currentProjectIndex = index;
                loadProject(currentProjectIndex);
                updateNavigation();
                setProjectsDrawerOpen(false);
                setTimeout(() => {
                    isProjectChanging = false;
                }, 400);
            });

            projectsDrawerList.appendChild(btn);
        });
    }

    updateProjectPickerUI();
}

// Показать описание проекта
function showProjectDescription(index) {
    const projectItems = projectsList.querySelectorAll('.project-item');
    const projectInfo = projectItems[index].querySelector('.project-info-collapsible');
    const thumb = projectItems[index].querySelector('.project-thumb');
    
    // Скрываем предыдущее описание
    if (expandedProjectIndex !== null && expandedProjectIndex !== index) {
        const prevInfo = projectItems[expandedProjectIndex].querySelector('.project-info-collapsible');
        const prevThumb = projectItems[expandedProjectIndex].querySelector('.project-thumb');
        if (prevInfo) {
            prevInfo.classList.remove('expanded');
        }
        if (prevThumb) {
            prevThumb.setAttribute('aria-expanded', 'false');
        }
    }
    
    // Показываем новое описание
    if (projectInfo) {
        projectInfo.classList.add('expanded');
        expandedProjectIndex = index;
    }
    if (thumb) {
        thumb.setAttribute('aria-expanded', 'true');
    }
}

// Свернуть/развернуть описание проекта
function toggleProjectDescription(index) {
    const projectItems = projectsList.querySelectorAll('.project-item');
    const projectInfo = projectItems[index].querySelector('.project-info-collapsible');
    const thumb = projectItems[index].querySelector('.project-thumb');
    
    if (projectInfo) {
        if (projectInfo.classList.contains('expanded')) {
            projectInfo.classList.remove('expanded');
            expandedProjectIndex = null;
            if (thumb) thumb.setAttribute('aria-expanded', 'false');
        } else {
            projectInfo.classList.add('expanded');
            expandedProjectIndex = index;
            if (thumb) thumb.setAttribute('aria-expanded', 'true');
        }
    }
}

function loadProject(index, options = {}) {
    if (index < 0 || index >= projects.length) return;
    const preserveMediaIndex = Boolean(options.preserveMediaIndex);
    
    const project = projects[index];
    isFrameBlocked = false;
    pauseCurrentMedia();

    // Всегда обновляем ссылку "Открыть в новой вкладке" под текущий проект
    if (openExternalBtn) {
        openExternalBtn.href = project.url;
        openExternalBtn.classList.toggle('hidden', !project.url);
    }

    // Mobile/Global: отдельная кнопка открытия текущего проекта
    if (projectOpenBtn) {
        projectOpenBtn.href = project.url || '#';
        projectOpenBtn.classList.toggle('hidden', !project.url);
    }

    // Mobile: обновляем содержимое "Подробнее"
    updateProjectDetailsUI();
    
    // Скрываем все оверлеи
    loadingOverlay.classList.add('hidden');
    errorOverlay.classList.add('hidden');
    screenshotOverlay.classList.add('hidden');
    frame.classList.remove('loading');
    clearFrameHandlersAndTimers();
    
    // Обновляем активный проект в списке
    const projectItems = projectsList.querySelectorAll('.project-item');
    projectItems.forEach((item, i) => {
        const thumb = item.querySelector('.project-thumb');
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
    
    // Показываем описание выбранного проекта
    showProjectDescription(index);
    updateProjectPickerUI();

    // Если есть медиа (скриншоты/видео) — показываем галерею вместо iframe
    if (Array.isArray(project.media) && project.media.length > 0) {
        currentMediaProject = project;
        if (!preserveMediaIndex) {
            currentMediaIndex = 0;
        }
        renderMediaSlide(project, currentMediaIndex);
        screenshotOverlay.classList.remove('hidden');
        loadingOverlay.classList.add('hidden');
        errorOverlay.classList.add('hidden');
        stopFrameLoading();
        return;
    } else {
        currentMediaProject = null;
    }

    // Если монитор выключен — не запускаем загрузку iframe
    if (!isMonitorOn) {
        stopFrameLoading();
        return;
    }
    
    // Если есть скриншот, показываем его
    if (project.screenshot) {
        screenshotImg.src = project.screenshot;
        screenshotOverlay.classList.remove('hidden');
        frame.src = '';
        return;
    }
    
    // Показываем индикатор загрузки
    loadingOverlay.classList.remove('hidden');
    frame.classList.add('loading');
    
    // Загружаем проект в iframe
    // Добавляем параметр для изоляции темы (если проект поддерживает)
    let projectUrl = project.url;
    if (project.themeKey) {
        const separator = projectUrl.includes('?') ? '&' : '?';
        projectUrl = `${projectUrl}${separator}portfolioThemeKey=${encodeURIComponent(project.themeKey)}`;
    }
    frame.src = projectUrl;
    
    // Проверяем, заблокирован ли iframe (таймаут 5 секунд)
    loadTimeout = setTimeout(() => {
        // Проверяем, загрузился ли контент
        try {
            const frameDoc = frame.contentDocument || frame.contentWindow.document;
            // Если мы можем получить доступ к документу, значит загрузилось
            if (frameDoc && frameDoc.body) {
                hideLoading();
            }
        } catch (e) {
            // Ошибка доступа - вероятно, сайт заблокирован
            handleFrameBlocked(project);
        }
    }, 5000);
    
    // Скрываем индикатор загрузки после успешной загрузки
    frame.onload = () => {
        clearFrameHandlersAndTimers();
        setTimeout(() => {
            hideLoading();
        }, 500);
    };
    
    // Обработка ошибок загрузки
    frame.onerror = () => {
        clearFrameHandlersAndTimers();
        handleFrameBlocked(project);
    };
}

// Скрытие индикатора загрузки
function hideLoading() {
    loadingOverlay.classList.add('hidden');
    frame.classList.remove('loading');
    errorOverlay.classList.add('hidden');
}

// Обработка блокировки iframe
function handleFrameBlocked(project) {
    isFrameBlocked = true;
    loadingOverlay.classList.add('hidden');
    frame.classList.remove('loading');
    errorOverlay.classList.remove('hidden');

    // Обновляем ссылку на открытие в новой вкладке
    if (openExternalBtn) {
        openExternalBtn.href = project.url;
        openExternalBtn.classList.toggle('hidden', !project.url);
    }

    if (projectOpenBtn) {
        projectOpenBtn.href = project.url || '#';
        projectOpenBtn.classList.toggle('hidden', !project.url);
    }
    
    // Если есть скриншот, показываем его вместо ошибки
    if (project.screenshot) {
        // legacy: одиночный скриншот
        const fallbackMedia = [{ type: 'image', src: project.screenshot }];
        renderMediaSlide({ media: fallbackMedia }, 0);
        screenshotOverlay.classList.remove('hidden');
        errorOverlay.classList.add('hidden');
    }
}

// Обновление состояния кнопок навигации
function updateNavigation() {
    prevBtn.disabled = currentProjectIndex === 0;
    nextBtn.disabled = currentProjectIndex === projects.length - 1;
}

// Переход к предыдущему проекту
prevBtn.addEventListener('click', () => {
    if (isProjectChanging || currentProjectIndex === 0) return;
    isProjectChanging = true;
    currentProjectIndex--;
    loadProject(currentProjectIndex);
    updateNavigation();
    // Разблокируем через 400ms (время анимации/загрузки)
    setTimeout(() => {
        isProjectChanging = false;
    }, 400);
});

// Переход к следующему проекту
nextBtn.addEventListener('click', () => {
    if (isProjectChanging || currentProjectIndex >= projects.length - 1) return;
    isProjectChanging = true;
    currentProjectIndex++;
    loadProject(currentProjectIndex);
    updateNavigation();
    // Разблокируем через 400ms (время анимации/загрузки)
    setTimeout(() => {
        isProjectChanging = false;
    }, 400);
});

// Переключение состояния монитора (включение/выключение)
function toggleMonitor() {
    isMonitorOn = !isMonitorOn;
    
    if (isMonitorOn) {
        // Включаем монитор
        monitorScreen.classList.remove('off');
        powerBtn.classList.remove('off');
        powerBtn.setAttribute('aria-label', 'Выключить монитор');
        powerBtn.title = 'Выключить монитор';
        // Возобновляем показ текущего проекта
        if (currentMediaProject) {
            screenshotOverlay.classList.remove('hidden');
            loadingOverlay.classList.add('hidden');
            errorOverlay.classList.add('hidden');
            renderMediaSlide(currentMediaProject, currentMediaIndex);
        } else {
            loadProject(currentProjectIndex, { preserveMediaIndex: true });
        }
    } else {
        // Выключаем монитор
        monitorScreen.classList.add('off');
        powerBtn.classList.add('off');
        powerBtn.setAttribute('aria-label', 'Включить монитор');
        powerBtn.title = 'Включить монитор';
        // Останавливаем текущую загрузку и убираем оверлеи, чтобы "выключение" было честным
        stopFrameLoading();
        errorOverlay.classList.add('hidden');
        screenshotOverlay.classList.add('hidden');
        pauseCurrentMedia();
    }
}

// Обработчик кнопки питания
powerBtn.addEventListener('click', toggleMonitor);

// Навигация по медиа (скриншоты/видео)
const mediaContainer = document.getElementById('mediaContainer');
const mediaPrevBtn = document.getElementById('mediaPrevBtn');
const mediaNextBtn = document.getElementById('mediaNextBtn');
const mediaCounter = document.getElementById('mediaCounter');

function renderMediaSlide(project, index, direction = 'none') {
    if (!mediaContainer || !project.media || !project.media.length) return;

    const total = project.media.length;
    const item = project.media[index];
    const prevSlide = mediaContainer.querySelector('.media-slide');

    pauseCurrentMedia();

    const slide = document.createElement('div');
    slide.className = 'media-slide';

    if (direction === 'next') slide.classList.add('enter-from-right');
    if (direction === 'prev') slide.classList.add('enter-from-left');

    if (item.type === 'video') {
        const player = document.createElement('div');
        player.className = 'video-player';

        const video = document.createElement('video');
        video.controls = false;
        video.src = item.src;
        video.setAttribute('playsinline', '');
        video.volume = 0.5;
        video.muted = false;
        player.appendChild(video);

        const controls = document.createElement('div');
        controls.className = 'video-controls';
        controls.innerHTML = `
            <button class="video-btn video-play" aria-label="Воспроизведение/пауза">
                ▶
            </button>
            <div class="video-progress">
                <input class="video-range video-seek" type="range" min="0" max="100" step="0.1" value="0" aria-label="Позиция">
                <div class="video-time">
                    <span class="video-current">0:00</span> / <span class="video-duration">0:00</span>
                </div>
            </div>
            <div class="video-volume">
                <button class="video-btn video-mute" aria-label="Включить/выключить звук">
                    <svg class="volume-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <path d="M11 5L6 9H3v6h3l5 4V5z"></path>
                        <path class="vol-wave vol-1" d="M15.5 8.5a5 5 0 0 1 0 7" stroke-linecap="round"></path>
                        <path class="vol-wave vol-2" d="M17.8 6.2a8 8 0 0 1 0 11.6" stroke-linecap="round"></path>
                        <path class="vol-wave vol-3" d="M20.2 3.8a12 12 0 0 1 0 16.4" stroke-linecap="round"></path>
                        <path class="vol-mute" d="M16 9l5 5M21 9l-5 5" stroke-linecap="round"></path>
                    </svg>
                </button>
                <input class="video-range video-volume-range" type="range" min="0" max="1" step="0.05" value="0.5" aria-label="Громкость">
            </div>
            <button class="video-btn video-fullscreen" aria-label="На весь экран">⤢</button>
        `;

        player.appendChild(controls);
        slide.appendChild(player);
        currentMediaElement = video;

        setupVideoControls({
            video,
            controls,
            slide
        });
    } else {
        // Обёртка для изображения
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'image-wrapper';
        
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt || 'Скриншот проекта';
        imageWrapper.appendChild(img);
        
        slide.appendChild(imageWrapper);
        currentMediaElement = img;
    }

    if (prevSlide) {
        isMediaAnimating = true; //Блокируем клики

        // Старый слайд уходит
        if (direction === 'next') prevSlide.classList.add('exit-to-left');
        if (direction === 'prev') prevSlide.classList.add('exit-to-right');
        prevSlide.classList.remove('visible');

        // Новый слайд добавляется и проявляется
        mediaContainer.appendChild(slide);
        requestAnimationFrame(() => {
            slide.classList.add('visible');
        });

        // Через время анимации (например, 400ms) чистим DOM и разблокируем кнопки
        setTimeout(() => {
            if (prevSlide && prevSlide.parentNode === mediaContainer) {
                prevSlide.remove();
            }
            isMediaAnimating = false;
        }, 400);
    } else {
        // Если это самая первая загрузка слайда
        mediaContainer.appendChild(slide);
        requestAnimationFrame(() => {
            slide.classList.add('visible');
        });
    }

    if (mediaCounter) {
        mediaCounter.textContent = `${index + 1} / ${total}`;
    }

    if (mediaPrevBtn && mediaNextBtn) {
        mediaPrevBtn.disabled = total <= 1;
        mediaNextBtn.disabled = total <= 1;
    }
}

function showNextMedia() {
    if (isMediaAnimating || !currentMediaProject || !currentMediaProject.media) return;
    
    currentMediaIndex = (currentMediaIndex + 1) % currentMediaProject.media.length;
    renderMediaSlide(currentMediaProject, currentMediaIndex, 'next');
}

function showPrevMedia() {
    if (isMediaAnimating || !currentMediaProject || !currentMediaProject.media) return;
    
    currentMediaIndex = (currentMediaIndex - 1 + currentMediaProject.media.length) % currentMediaProject.media.length;
    renderMediaSlide(currentMediaProject, currentMediaIndex, 'prev');
}

if (mediaPrevBtn) mediaPrevBtn.addEventListener('click', showPrevMedia);
if (mediaNextBtn) mediaNextBtn.addEventListener('click', showNextMedia);


// Обработка клавиатуры в fullscreen режиме (только Escape для выхода)
function setupFullscreenKeyboard() {
    // Удаляем старый обработчик, если есть
    if (fullscreenKeyboardHandler) {
        document.removeEventListener('keydown', fullscreenKeyboardHandler);
    }
    
    fullscreenKeyboardHandler = (e) => {
        if (!document.fullscreenElement) {
            // Восстанавливаем навигацию в мониторе
            const mediaNav = document.getElementById('mediaNav');
            if (mediaNav) mediaNav.style.display = '';
            document.removeEventListener('keydown', fullscreenKeyboardHandler);
            fullscreenKeyboardHandler = null;
            currentFullscreenWrapper = null;
            return;
        }
        
        // В fullscreen только Escape для выхода
        if (e.key === 'Escape') {
            document.exitFullscreen?.();
        }
    };
    
    document.addEventListener('keydown', fullscreenKeyboardHandler);
}

// Обработчик изменения fullscreen состояния
document.addEventListener('fullscreenchange', () => {
    const mediaNav = document.getElementById('mediaNav');
    if (document.fullscreenElement) {
        // Скрываем навигацию в мониторе при входе в fullscreen
        if (mediaNav) mediaNav.style.display = 'none';
    } else {
        // Восстанавливаем навигацию в мониторе при выходе из fullscreen
        if (mediaNav) mediaNav.style.display = '';
        if (fullscreenKeyboardHandler) {
            document.removeEventListener('keydown', fullscreenKeyboardHandler);
            fullscreenKeyboardHandler = null;
        }
        currentFullscreenWrapper = null;
    }
});

function pauseCurrentMedia() {
    if (currentMediaElement && currentMediaElement.tagName === 'VIDEO') {
        currentMediaElement.pause();
    }
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

function setupVideoControls({ video, controls, slide }) {
    const playBtn = controls.querySelector('.video-play');
    const seek = controls.querySelector('.video-seek');
    const currentEl = controls.querySelector('.video-current');
    const durationEl = controls.querySelector('.video-duration');
    const muteBtn = controls.querySelector('.video-mute');
    const volumeRange = controls.querySelector('.video-volume-range');
    const fsBtn = controls.querySelector('.video-fullscreen');
    let lastVolume = Math.max(0.05, video.volume || 0.5);
    const volumeIcon = controls.querySelector('.volume-icon');

    const updatePlayIcon = () => {
        playBtn.textContent = video.paused ? '▶' : '❚❚';
    };

    const setVolumeIconLevel = () => {
        if (!volumeIcon) return;
        const waves = volumeIcon.querySelectorAll('.vol-wave');
        const muteX = volumeIcon.querySelector('.vol-mute');

        const muted = video.muted || video.volume === 0;
        if (muteX) muteX.style.opacity = muted ? '1' : '0';

        // 0..3 уровней, как на системных иконках
        const v = muted ? 0 : Math.max(0, Math.min(1, video.volume));
        const level = v === 0 ? 0 : v < 0.34 ? 1 : v < 0.67 ? 2 : 3;

        waves.forEach((w, idx) => {
            const on = idx + 1 <= level;
            w.style.opacity = on ? '1' : '0.18';
        });
    };

    playBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    // Клик по видео: play/pause, но не при клике по контролам
    const togglePlay = () => {
        if (video.paused) video.play();
        else video.pause();
    };

    video.addEventListener('click', togglePlay);
    slide.addEventListener('click', (e) => {
        const clickedInsideControls = e.target && e.target.closest && e.target.closest('.video-controls');
        if (clickedInsideControls) return;
        // Если кликнули по пустому месту слайда/обёртке — тоже togglе
        if (e.target !== slide) return;
        togglePlay();
    });

    video.addEventListener('play', updatePlayIcon);
    video.addEventListener('pause', updatePlayIcon);

    video.addEventListener('loadedmetadata', () => {
        durationEl.textContent = formatTime(video.duration);
    });

    video.addEventListener('timeupdate', () => {
        if (!video.duration) return;
        const value = (video.currentTime / video.duration) * 100;
        seek.value = value;
        currentEl.textContent = formatTime(video.currentTime);
    });

    seek.addEventListener('input', () => {
        if (!video.duration) return;
        const newTime = (seek.value / 100) * video.duration;
        video.currentTime = newTime;
    });

    volumeRange.value = String(video.volume ?? 0.5);
    volumeRange.addEventListener('input', () => {
        const v = parseFloat(volumeRange.value);
        video.volume = v;
        if (v === 0) {
            video.muted = true;
        } else {
            video.muted = false;
            lastVolume = v;
        }
        setVolumeIconLevel();
    });

    muteBtn.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false;
            const restored = Math.max(0.05, lastVolume || 0.5);
            video.volume = restored;
            volumeRange.value = String(restored);
        } else {
            video.muted = true;
        }
        setVolumeIconLevel();
    });

    fsBtn.addEventListener('click', () => {
        const target = slide || video;
        if (!document.fullscreenElement) {
            currentFullscreenWrapper = slide; // Устанавливаем slide как fullscreen wrapper для видео
            target.requestFullscreen?.().then(() => {
                // Скрываем навигацию в мониторе при fullscreen
                const mediaNav = document.getElementById('mediaNav');
                if (mediaNav) mediaNav.style.display = 'none';
                // Настраиваем обработку клавиатуры
                setupFullscreenKeyboard();
            });
        } else {
            document.exitFullscreen?.();
        }
    });

    video.addEventListener('volumechange', setVolumeIconLevel);
    updatePlayIcon();
    setVolumeIconLevel();
}

// Кнопка прокрутки наверх
const scrollTopBtn = document.getElementById('scrollTopBtn');

function updateScrollTopVisibility() {
    if (!scrollTopBtn) return;
    const shouldShow = window.scrollY > 300;
    scrollTopBtn.classList.toggle('scroll-top-btn-visible', shouldShow);
}

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    window.addEventListener('scroll', updateScrollTopVisibility, { passive: true });
    // начальное состояние
    updateScrollTopVisibility();
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', init);

