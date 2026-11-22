/**
 * PORTFOLIO WEB - INDUSTRIAL DESIGNER (LORENZO MACAIONE)
 * Main JavaScript Controller
 * - Native Trackpad & Wheel Infinite Loop Scroll
 * - Modals for About, Contacts, and Project Details
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactsMotion();
  initInfiniteScroll();
  initModals();
  initCopyEmail();
  initContactForm();
  initMilanTime();
  initLucioGallery();
  initDeaGallery();
  initUtopiaGallery();
  initClimbexGallery();
  initNyoGallery();
  initClimbexVideo();
  initProximityDescriptions();
  initProjectEndNav();
  initArchiveScreen();
  initCustomEdgeScrollbar();

  if (window.location.hash === '#archive') {
    document.body.classList.remove('intro-opening');
    document.body.classList.add('portfolio-active');
    document.documentElement.style.setProperty('--p-intro', '1');
    document.documentElement.style.setProperty('--p-intro-alpha', '0');
    document.documentElement.style.setProperty('--p-nav-alpha', '1');
    if (window.openArchiveScreen) window.openArchiveScreen();
  } else if (window.location.hash.startsWith('#lucio')) {
    document.body.classList.remove('intro-opening');
    document.body.classList.add('portfolio-active', 'lucio-active');
    document.documentElement.style.setProperty('--p-intro', '1');
    document.documentElement.style.setProperty('--p-intro-alpha', '0');
    document.documentElement.style.setProperty('--p-nav-alpha', '1');
    if (window.location.hash === '#lucio-contacts') {
      if (window.openLucioScreen) window.openLucioScreen('contacts');
    } else {
      const lucioMatch = window.location.hash.match(/#lucio-(\d+)/);
      const scrollVal = lucioMatch ? parseInt(lucioMatch[1], 10) : 0;
      if (window.openLucioScreen) window.openLucioScreen(scrollVal);
    }
  } else if (window.location.hash.startsWith('#dea')) {
    document.body.classList.remove('intro-opening');
    document.body.classList.add('portfolio-active', 'dea-active');
    document.documentElement.style.setProperty('--p-intro', '1');
    document.documentElement.style.setProperty('--p-intro-alpha', '0');
    document.documentElement.style.setProperty('--p-nav-alpha', '1');
    if (window.location.hash === '#dea-contacts') {
      if (window.openDeaScreen) window.openDeaScreen('contacts');
    } else {
      const deaMatch = window.location.hash.match(/#dea-(\d+)/);
      const scrollVal = deaMatch ? parseInt(deaMatch[1], 10) : 0;
      if (window.openDeaScreen) window.openDeaScreen(scrollVal);
    }
  } else if (window.location.hash.startsWith('#utopia')) {
    document.body.classList.remove('intro-opening');
    document.body.classList.add('portfolio-active', 'utopia-active');
    document.documentElement.style.setProperty('--p-intro', '1');
    document.documentElement.style.setProperty('--p-intro-alpha', '0');
    document.documentElement.style.setProperty('--p-nav-alpha', '1');
    if (window.location.hash === '#utopia-contacts') {
      if (window.openUtopiaScreen) window.openUtopiaScreen('contacts');
    } else {
      const utopiaMatch = window.location.hash.match(/#utopia-(\d+)/);
      const scrollVal = utopiaMatch ? parseInt(utopiaMatch[1], 10) : 0;
      if (window.openUtopiaScreen) window.openUtopiaScreen(scrollVal);
    }
  } else if (window.location.hash.startsWith('#climbex')) {
    document.body.classList.remove('intro-opening');
    document.body.classList.add('portfolio-active', 'climbex-active');
    document.documentElement.style.setProperty('--p-intro', '1');
    document.documentElement.style.setProperty('--p-intro-alpha', '0');
    document.documentElement.style.setProperty('--p-nav-alpha', '1');
    if (window.location.hash === '#climbex-contacts') {
      if (window.openClimbexScreen) window.openClimbexScreen('contacts');
    } else {
      const climbexMatch = window.location.hash.match(/#climbex-(\d+)/);
      const scrollVal = climbexMatch ? parseInt(climbexMatch[1], 10) : 0;
      if (window.openClimbexScreen) window.openClimbexScreen(scrollVal);
    }
  } else if (window.location.hash.startsWith('#nyo')) {
    document.body.classList.remove('intro-opening');
    document.body.classList.add('portfolio-active', 'nyo-active');
    document.documentElement.style.setProperty('--p-intro', '1');
    document.documentElement.style.setProperty('--p-intro-alpha', '0');
    document.documentElement.style.setProperty('--p-nav-alpha', '1');
    if (window.location.hash === '#nyo-contacts') {
      if (window.openNyoScreen) window.openNyoScreen('contacts');
    } else {
      const nyoMatch = window.location.hash.match(/#nyo-(\d+)/);
      const scrollVal = nyoMatch ? parseInt(nyoMatch[1], 10) : 0;
      if (window.openNyoScreen) window.openNyoScreen(scrollVal);
    }
  } else if (window.location.hash.startsWith('#contacts')) {
    document.body.classList.remove('intro-opening');
    document.body.classList.add('portfolio-active', 'about-active', 'contacts-in-view');
    document.documentElement.style.setProperty('--p-intro', '1');
    document.documentElement.style.setProperty('--p-intro-alpha', '0');
    document.documentElement.style.setProperty('--p-nav-alpha', '1');
    if (window.goToContactsSection) window.goToContactsSection(false);
  } else if (window.location.hash.startsWith('#about')) {
    document.body.classList.remove('intro-opening');
    document.body.classList.add('portfolio-active', 'about-active');
    document.documentElement.style.setProperty('--p-intro', '1');
    document.documentElement.style.setProperty('--p-intro-alpha', '0');
    document.documentElement.style.setProperty('--p-nav-alpha', '1');
    if (window.openAboutScreen) window.openAboutScreen();
    const scrollMatch = window.location.hash.match(/#about-(\d+)/);
    if (scrollMatch) {
      setTimeout(() => {
        const aboutScreen = document.getElementById('about-screen');
        if (aboutScreen) aboutScreen.scrollTop = parseInt(scrollMatch[1], 10);
      }, 50);
    }
  } else if (window.location.hash === '#works') {
    document.body.classList.remove('intro-opening');
    document.body.classList.add('portfolio-active');
    document.documentElement.style.setProperty('--p-intro', '1');
    document.documentElement.style.setProperty('--p-intro-alpha', '0');
    document.documentElement.style.setProperty('--p-nav-alpha', '1');
    setTimeout(() => {
      const btn = document.getElementById('nav-works-btn');
      if (btn) btn.click();
    }, 40);
  } else {
    playIntroOpening(); // Sequenza d'apertura a 3 fasi: fade-in foto (1s) -> titoli -> resto (1s)
  }
});

// ============================================================================
// SEQUENZA D'APERTURA A 3 FASI (FADE-IN FOTO -> TITOLI -> IL RESTO)
// ============================================================================
let introOpeningTimeout = null;

function clearIntroOpening() {
  if (introOpeningTimeout) {
    clearTimeout(introOpeningTimeout);
    introOpeningTimeout = null;
  }
}

function playIntroOpening(forceRestart = false) {
  clearIntroOpening();
  if (forceRestart || !document.body.classList.contains('intro-opening')) {
    document.body.classList.remove('intro-opening');
    // Forziamo il reflow del browser solo su riavvio esplicito (es. click su LORENZO MACAIONE)
    void document.body.offsetWidth;
    document.body.classList.add('intro-opening');
  }
}

// 1. Projects Data for Case Study Modals
const projectsData = {
  1: {
    id: "01",
    title: "LUCIO",
    subtitle: "MINIMALIST BREAKFAST APPLIANCE",
    category: "CONSUMER HARDWARE / TABLEWARE",
    year: "2024",
    image: "assets/images/Project1_Lucio_compr2.jpg",
    description: "LUCIO REIMAGINES THE ARCHETYPE OF THE MORNING TOASTER THROUGH A SCULPTURAL, MONOLITHIC CASING. ELIMINATING GRATUITOUS CHROME GARNISHES AND CLUTTERED DIGITAL DISPLAYS, IT CELEBRATES PURE TACTILE INTERACTIONS WITH WEIGHTED STEPPED DIALS AND A SOLID EXTRUDED LEVER MECHANISM.",
    specs: [
      { label: "MATERIALITY", value: "DIE-CAST ALUMINUM, MATTE POWDER COATING" },
      { label: "INTERFACE", value: "STEPPED LINEAR RHEOSTAT, TACTILE ACTUATORS" },
      { label: "DIMENSIONS", value: "310 × 165 × 195 MM" },
      { label: "SOFTWARE", value: "RHINO 3D, SOLIDWORKS, KEYSHOT PRO" }
    ],
    features: [
      "MONOLITHIC GEOMETRIC SILHOUETTE WITH ARCHITECTURAL PROPORTIONS",
      "HAPTIC HEAT MODULATION SLIDER WITH MECHANICAL RESISTANCE FEEDBACK",
      "CONCEALED SLIDE-OUT CRUMB TRAY WITH MAGNETIC LATCHING SYSTEM",
      "DESIGNED FOR DISASSEMBLY AND CIRCULAR COMPONENT REPAIRABILITY"
    ]
  },
  2: {
    id: "02",
    title: "DEA",
    subtitle: "SCULPTURAL PRODUCT STUDY",
    category: "PRODUCT DESIGN / TABLEWARE",
    year: "2024",
    image: "assets/images/Project2_Dea_compr.jpg",
    description: "DEA IS AN EXPLORATION IN SCULPTURAL VOLUME, ERGONOMIC BALANCE, AND TACTILE MATERIALITY. STRIPPED OF ALL SUPERFLUOUS ORNAMENTATION, IT INVESTIGATES THE TENSION BETWEEN FLUID ORGANIC CURVES AND PRECISE STRUCTURAL PLANES.",
    specs: [
      { label: "MATERIALITY", value: "CAST CERAMIC, MATTE SOFT FINISH" },
      { label: "DIMENSIONS", value: "240 × 180 × 210 MM" },
      { label: "SOFTWARE", value: "FUSION 360, CLAY PROTOTYPING, KEYSHOT" }
    ],
    features: [
      "ERGONOMIC HANDLE GEOMETRY COUNTERBALANCED FOR NATURAL WRIST POSTURE",
      "CONTINUOUS CURVATURE DESIGNED TO ELIMINATE VISUAL SEAM LINES",
      "SLIP-CAST CERAMIC MOLDING WITH PRECISION CNC TOLERANCE VALIDATION"
    ]
  },
  3: {
    id: "03",
    title: "UTOPIA",
    subtitle: "ARCHITECTURAL SYSTEM & SEATING",
    category: "FURNITURE / SPATIAL DESIGN",
    year: "2023",
    image: "assets/images/Project3_Utopia_compr.jpg",
    description: "UTOPIA INVESTIGATES MODULAR SPATIAL ARCHITECTURE THROUGH MINIMAL STRUCTURAL ELEMENTS. DESIGNED WITH INDUSTRIAL PURITY, IT COMBINES TUBULAR METAL FRAMEWORK WITH GEOMETRIC UPHOLSTERY, CREATING AN HONEST BALANCE OF TENSION AND COMFORT.",
    specs: [
      { label: "MATERIALITY", value: "COLD-BENT STEEL TUBE, NATURAL WOOL TEXTILE" },
      { label: "MODULARITY", value: "INTERLOCKING BRACKET SYSTEM" },
      { label: "DIMENSIONS", value: "850 × 820 × 740 MM" },
      { label: "SOFTWARE", value: "SOLIDWORKS, KEYSHOT, CNC TUBE BENDING" }
    ],
    features: [
      "MONOLITHIC TUBULAR STEEL FRAME WITH INVISIBLE WELD JOINTS",
      "REMOVABLE TEXTILE COVERS FOR CIRCULAR LONGEVITY",
      "DESIGNED WITH ZERO GLUED COMPOSITES TO ENSURE FULL RECYCLABILITY"
    ]
  },
  4: {
    id: "04",
    title: "CLIMBEX",
    subtitle: "ERGONOMIC TECHNICAL HARDWARE",
    category: "TECHNICAL EQUIPMENT / ERGONOMICS",
    year: "2023",
    image: "assets/images/climbex_newcov_sfoca_carosello.jpg",
    description: "CLIMBEX IS A NEXT-GENERATION HIGH-ALTITUDE ERGONOMIC SAFETY TOOL ENGINEERED FOR EXTREME VERTICAL CONDITIONS. DEVELOPED THROUGH BIOMECHANICAL PRESSURE MAPPING, IT OPTIMIZES HAND FATIGUE RESISTANCE AND INSTINCTIVE MECHANICAL LOCKING.",
    specs: [
      { label: "MATERIALITY", value: "FORGED 7075-T6 AEROSPACE ALUMINUM, ELASTOMER" },
      { label: "PROOF LOAD", value: "25 KN MAJOR AXIS / 9 KN OPEN GATE" },
      { label: "DIMENSIONS", value: "195 × 110 × 24 MM" },
      { label: "SOFTWARE", value: "FEA SIMULATION, SOLIDWORKS, SLA ERGONOMICS" }
    ],
    features: [
      "BIOMETRIC FINGER GROOVES TAILORED FOR WINTER GLOVE OPERATION",
      "ANTI-SNAG KEYLOCK NOSE GEOMETRY FOR UNINTERRUPTED CLIPPING",
      "WEIGHT-OPTIMIZED I-BEAM CROSS-SECTION"
    ]
  },
  5: {
    id: "05",
    title: "NYO",
    subtitle: "CONFIDENTIAL PRODUCT SYSTEM",
    category: "RESEARCH & DEVELOPMENT / ADVANCED HARDWARE",
    year: "2024",
    image: "assets/images/NYO_cover.jpg",
    isBlurred: true,
    description: "CONFIDENTIAL INDUSTRIAL DESIGN ARCHITECTURE CURRENTLY IN DEVELOPMENT. FULL SYSTEM SPECIFICATIONS, PROTOTYPES, AND TECHNICAL ARCHITECTURE ARE RESTRICTED UNDER NON-DISCLOSURE AGREEMENT UNTIL OFFICIAL LAUNCH.",
    specs: [
      { label: "STATUS", value: "CONFIDENTIAL / UNDER NDA" },
      { label: "DEVELOPMENT", value: "ADVANCED PROTOTYPING" },
      { label: "LOCATION", value: "MILAN, ITALY" },
      { label: "ACCESS", value: "RESTRICTED / NDA PROTECTED" }
    ],
    features: [
      "PROPRIETARY STRUCTURAL ARCHITECTURE UNDER ACTIVE PATENT FILING",
      "ADVANCED MATERIAL TESTING AND ERGONOMIC PERFORMANCE VALIDATION",
      "FULL DOCUMENTATION RESTRICTED"
    ]
  }
};

// 2. Controlled Damped Scrolling & Interactive Scrub Transition (Intro Cover <-> Portfolio Home)
function initInfiniteScroll() {
  const scrollContainer = document.getElementById('projects-container');
  if (!scrollContainer) return;

  let isPortfolioActive = false;
  let isTicking = false;

  // Transition scrub state (microrotazione della rotella controlla proporzionalmente la transizione)
  const TRANSITION_TRAVEL = 480; // Velocizzato del 50% (da 800px a 480px) per una transizione agile e scattante
  const SCROLL_SENSITIVITY = 0.55; // Sensibilità controllata e uniforme
  let currentTransitionY = 0;
  let targetTransitionY = 0;

  // Portfolio projects scroll state
  let projectScrollY = 0;
  let targetProjectY = 0;

  function getCycleHeight() {
    // 5 progetti per ciclo: ciascuna card ha altezza hero (87.5vh) + spaziatura dimezzata (12.5px)
    const firstCard = document.querySelector('.project-card');
    const cardH = firstCard ? firstCard.offsetHeight : (0.875 * window.innerHeight);
    const gap = parseFloat(getComputedStyle(scrollContainer).rowGap) || 12.5;
    return 5 * (cardH + gap);
  }

  // Helper to check if any modal overlay is currently open
  function isAnyModalOpen() {
    const modals = [
      document.getElementById('project-modal'),
      document.getElementById('about-modal'),
      document.getElementById('contacts-modal')
    ];
    return modals.some(m => m && window.getComputedStyle(m).display === 'flex');
  }

  // Subtle vertical parallax inside project media wrappers
  function updateParallax() {
    const cards = document.querySelectorAll('.project-card');
    const viewH = window.innerHeight;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.bottom < -100 || rect.top > viewH + 100) return;

      const cardCenter = rect.top + rect.height / 2;
      const viewCenter = viewH / 2;
      // Normalized factor (-1 to +1) based on distance from screen center
      const factor = (cardCenter - viewCenter) / viewH;

      // Micro-traslazione calibrata per Lucio (ID 1):
      // Il buffer CSS e a -2.5% in basso. Quando la card sale (factor < 0),
      // translateY trasla verso l'alto fino a un massimo di -2.5%,
      // portando la base esattamente a filo senza MAI scoprire il fondo nero.
      if (card.dataset.projectId === '1') {
        const translateY = Math.max(-2.5, Math.min(2.5, factor * 2.5));
        const wrap = card.querySelector('.project-media-wrap');
        if (wrap) {
          wrap.style.transform = `translate3d(0, ${translateY.toFixed(2)}%, 0)`;
        }
        return;
      }

      // Subtle vertical translation (-4.5% to +4.5%)
      const translateY = factor * 4.5;

      const wrap = card.querySelector('.project-media-wrap');
      if (wrap) {
        wrap.style.transform = `translate3d(0, ${translateY.toFixed(2)}%, 0)`;
      }
    });
  }

  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);

  // Works overlay & dropdown state
  let isWorksScreenActive = false;

  // About fullscreen screen state & 2s photo carousel loop
  let isAboutScreenActive = false;
  let aboutPhotoInterval = null;
  let currentAboutPhotoIdx = 0;

  function startAboutPhotoLoop() {
    stopAboutPhotoLoop();
    const imgs = document.querySelectorAll('.about-photo-img');
    if (!imgs || imgs.length <= 1) return;
    aboutPhotoInterval = setInterval(() => {
      imgs[currentAboutPhotoIdx].classList.remove('active');
      currentAboutPhotoIdx = (currentAboutPhotoIdx + 1) % imgs.length;
      imgs[currentAboutPhotoIdx].classList.add('active');
    }, 2000);
  }

  function stopAboutPhotoLoop() {
    if (aboutPhotoInterval) {
      clearInterval(aboutPhotoInterval);
      aboutPhotoInterval = null;
    }
  }

  function openAboutScreen() {
    if (document.body.classList.contains('lucio-active')) {
      if (window.closeLucioScreen) window.closeLucioScreen();
    }
    if (document.body.classList.contains('dea-active')) {
      if (window.closeDeaScreen) window.closeDeaScreen();
    }
    if (document.body.classList.contains('utopia-active')) {
      if (window.closeUtopiaScreen) window.closeUtopiaScreen();
    }
    if (document.body.classList.contains('climbex-active')) {
      if (window.closeClimbexScreen) window.closeClimbexScreen();
    }
    if (document.body.classList.contains('nyo-active')) {
      if (window.closeNyoScreen) window.closeNyoScreen();
    }
    if (document.body.classList.contains('archive-active')) {
      if (window.closeArchiveScreen) window.closeArchiveScreen();
    }
    if (isWorksScreenActive) {
      closeWorksScreen();
    }
    isAboutScreenActive = true;
    document.body.classList.add('about-active');
    const aboutScreen = document.getElementById('about-screen');
    if (aboutScreen) {
      aboutScreen.scrollTop = 0;
      targetAboutScrollY = 0;
      currentAboutScrollY = 0;
    }
    startAboutPhotoLoop();
  }

  function closeAboutScreen() {
    if (!isAboutScreenActive) return;
    isAboutScreenActive = false;
    isAboutScrollTicking = false;
    if (window.contactsMotion) window.contactsMotion.resetAll();
    document.body.classList.remove('about-active', 'contacts-in-view');
    if (window.closeAboutPhotoModal) window.closeAboutPhotoModal();
    stopAboutPhotoLoop();
  }

  // Lightbox / Ingrandimento al centro per il carosello foto di About
  function initAboutPhotoModal() {
    const pinnedPhoto = document.querySelector('.about-pinned-photo');
    const photoWrapper = document.querySelector('.about-photo-wrapper');
    const backdrop = document.getElementById('about-photo-backdrop');
    if (!pinnedPhoto || !photoWrapper || !backdrop) return;

    function closePhotoModal() {
      pinnedPhoto.classList.remove('is-expanded');
      backdrop.classList.remove('is-active');
    }

    photoWrapper.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!pinnedPhoto.classList.contains('is-expanded')) {
        pinnedPhoto.classList.add('is-expanded');
        backdrop.classList.add('is-active');
      } else {
        closePhotoModal();
      }
    });

    backdrop.addEventListener('click', (e) => {
      e.stopPropagation();
      closePhotoModal();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && pinnedPhoto.classList.contains('is-expanded')) {
        closePhotoModal();
      }
    });

    document.addEventListener('click', (e) => {
      if (pinnedPhoto.classList.contains('is-expanded') && !pinnedPhoto.contains(e.target)) {
        closePhotoModal();
      }
    });

    window.closeAboutPhotoModal = closePhotoModal;
  }
  initAboutPhotoModal();

  function toggleAboutScreen() {
    if (isAboutScreenActive) {
      closeAboutScreen();
    } else {
      openAboutScreen();
    }
  }

  function getActiveProjectContactsContext() {
    if (document.body.classList.contains('lucio-active')) {
      return { screen: document.getElementById('lucio-screen'), drawer: document.getElementById('lucio-contacts-section') };
    }
    if (document.body.classList.contains('dea-active')) {
      return { screen: document.getElementById('dea-screen'), drawer: document.getElementById('dea-contacts-section') };
    }
    if (document.body.classList.contains('utopia-active')) {
      return { screen: document.getElementById('utopia-screen'), drawer: document.getElementById('utopia-contacts-section') };
    }
    if (document.body.classList.contains('climbex-active')) {
      return { screen: document.getElementById('climbex-screen'), drawer: document.getElementById('climbex-contacts-section') };
    }
    if (document.body.classList.contains('nyo-active')) {
      return { screen: document.getElementById('nyo-screen'), drawer: document.getElementById('nyo-contacts-section') };
    }
    return null;
  }

  function alignContactsToBottom(smooth = false) {
    const aboutScreen = document.getElementById('about-screen');
    const contactsSection = document.getElementById('contacts-section');
    if (!aboutScreen || !contactsSection) return;
    const maxScroll = Math.max(0, aboutScreen.scrollHeight - aboutScreen.clientHeight);
    if (smooth) {
      isAboutScrollTicking = false;
      if (window.contactsMotion) {
        window.contactsMotion.slingToContacts(aboutScreen, contactsSection, (scrollY) => {
          targetAboutScrollY = scrollY;
          currentAboutScrollY = scrollY;
          if (window.checkContactsInView) window.checkContactsInView();
        });
      } else {
        targetAboutScrollY = maxScroll;
        isAboutScrollTicking = true;
        requestAnimationFrame(aboutScrollAnimationLoop);
      }
    } else {
      aboutScreen.scrollTop = maxScroll;
      targetAboutScrollY = maxScroll;
      currentAboutScrollY = maxScroll;
      if (window.checkContactsInView) window.checkContactsInView();
    }
  }
  window.alignContactsToBottom = alignContactsToBottom;

  function goToContactsSection(smooth = true) {
    if (document.body.classList.contains('lucio-active')) {
      if (window.closeLucioScreen) window.closeLucioScreen();
    }
    if (document.body.classList.contains('dea-active')) {
      if (window.closeDeaScreen) window.closeDeaScreen();
    }
    if (document.body.classList.contains('utopia-active')) {
      if (window.closeUtopiaScreen) window.closeUtopiaScreen();
    }
    if (document.body.classList.contains('climbex-active')) {
      if (window.closeClimbexScreen) window.closeClimbexScreen();
    }
    if (document.body.classList.contains('nyo-active')) {
      if (window.closeNyoScreen) window.closeNyoScreen();
    }
    if (document.body.classList.contains('archive-active')) {
      if (window.closeArchiveScreen) window.closeArchiveScreen();
    }
    if (isWorksScreenActive) {
      closeWorksScreen();
    }
    if (!isPortfolioActive) {
      isPortfolioActive = true;
      document.body.classList.add('portfolio-active');
      document.documentElement.style.setProperty('--p-intro', '1');
      document.documentElement.style.setProperty('--p-intro-alpha', '0');
      document.documentElement.style.setProperty('--p-nav-alpha', '1');
    }

    const aboutScreen = document.getElementById('about-screen');
    const contactsSection = document.getElementById('contacts-section');

    if (!isAboutScreenActive) {
      isAboutScreenActive = true;
      document.body.classList.add('about-active');
      startAboutPhotoLoop();
      if (smooth) {
        if (aboutScreen) {
          aboutScreen.scrollTop = 0;
          currentAboutScrollY = 0;
        }
        alignContactsToBottom(true);
      } else {
        alignContactsToBottom(false);
      }
    } else {
      alignContactsToBottom(smooth);
    }
  }
  window.goToContactsSection = goToContactsSection;
  window.closeAboutScreen = closeAboutScreen;
  window.openAboutScreen = openAboutScreen;

  function openWorksScreen() {
    if (document.body.classList.contains('lucio-active')) {
      if (window.closeLucioScreen) window.closeLucioScreen();
    }
    if (document.body.classList.contains('dea-active')) {
      if (window.closeDeaScreen) window.closeDeaScreen();
    }
    if (document.body.classList.contains('utopia-active')) {
      if (window.closeUtopiaScreen) window.closeUtopiaScreen();
    }
    if (document.body.classList.contains('climbex-active')) {
      if (window.closeClimbexScreen) window.closeClimbexScreen();
    }
    if (document.body.classList.contains('nyo-active')) {
      if (window.closeNyoScreen) window.closeNyoScreen();
    }
    if (document.body.classList.contains('archive-active')) {
      if (window.closeArchiveScreen) window.closeArchiveScreen();
    }
    if (isAboutScreenActive) {
      closeAboutScreen();
    }
    if (!isPortfolioActive) {
      isPortfolioActive = true;
      document.body.classList.add('portfolio-active');
      document.documentElement.style.setProperty('--p-intro', '1');
      document.documentElement.style.setProperty('--p-intro-alpha', '0');
      document.documentElement.style.setProperty('--p-nav-alpha', '1');
      targetTransitionY = TRANSITION_TRAVEL;
      currentTransitionY = TRANSITION_TRAVEL;
    }
    isWorksScreenActive = true;
    document.body.classList.remove('works-closing');
    document.body.classList.add('works-active');
  }

  function closeWorksScreen() {
    if (!isWorksScreenActive) return;
    isWorksScreenActive = false;
    document.body.classList.remove('works-active');
    document.body.classList.add('works-closing');
    setTimeout(() => {
      document.body.classList.remove('works-closing');
    }, 450);
  }

  function toggleWorksScreen() {
    if (isWorksScreenActive) {
      closeWorksScreen();
    } else {
      openWorksScreen();
    }
  }

  // Transizione manuale verso Portfolio (click "SCROLL, GENTLY" o tastiera)
  function goToPortfolio() {
    if (isWorksScreenActive) {
      closeWorksScreen();
    }
    if (isAboutScreenActive) {
      closeAboutScreen();
    }
    if (document.body.classList.contains('archive-active')) {
      if (window.closeArchiveScreen) window.closeArchiveScreen();
    }
    if (isPortfolioActive && targetTransitionY >= TRANSITION_TRAVEL) return;
    clearIntroOpening();
    document.body.classList.remove('intro-opening');

    projectScrollY = 0;
    targetProjectY = 0;
    window.scrollTo({ top: 0, behavior: 'instant' });

    targetTransitionY = TRANSITION_TRAVEL;
    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(mainAnimationLoop);
    }
  }

  // Ritorno verso Intro (attivabile SOLO ed ESCLUSIVAMENTE premendo su "LORENZO MACAIONE")
  function goToIntro() {
    if (document.body.classList.contains('lucio-active')) {
      if (window.closeLucioScreen) window.closeLucioScreen();
    }
    if (document.body.classList.contains('dea-active')) {
      if (window.closeDeaScreen) window.closeDeaScreen();
    }
    if (document.body.classList.contains('utopia-active')) {
      if (window.closeUtopiaScreen) window.closeUtopiaScreen();
    }
    if (document.body.classList.contains('climbex-active')) {
      if (window.closeClimbexScreen) window.closeClimbexScreen();
    }
    if (document.body.classList.contains('nyo-active')) {
      if (window.closeNyoScreen) window.closeNyoScreen();
    }
    if (document.body.classList.contains('archive-active')) {
      if (window.closeArchiveScreen) window.closeArchiveScreen();
    }
    if (isWorksScreenActive) {
      closeWorksScreen();
    }
    if (isAboutScreenActive) {
      closeAboutScreen();
    }
    if (currentTransitionY < 10) {
      currentTransitionY = TRANSITION_TRAVEL;
    }
    isPortfolioActive = false;
    document.body.classList.remove('portfolio-active');

    // Resetta lo scroll dei progetti all'inizio
    projectScrollY = 0;
    targetProjectY = 0;
    window.scrollTo({ top: 0, behavior: 'instant' });
    updateParallax();

    // Ritorna con lerp morbido a 0
    targetTransitionY = 0;
    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(mainAnimationLoop);
    }

    // Riesegui la sequenza d'apertura (Fade-in foto -> Titoli -> Il resto)
    playIntroOpening(true);
  }

  function mainAnimationLoop() {
    let needsNextFrame = false;

    // 1. GESTIONE TRANSIZIONE PROGRESSIVA CONTINUA (ZERO SNAP, LERP SEMPRE MORBIDO)
    if (!isPortfolioActive || targetTransitionY < TRANSITION_TRAVEL || currentTransitionY < TRANSITION_TRAVEL - 0.2) {
      const diffTransition = targetTransitionY - currentTransitionY;

      if (Math.abs(diffTransition) > 0.05) {
        currentTransitionY += diffTransition * 0.12; // Decelerazione fisica sempre fluida e continua
        needsNextFrame = true;
      } else {
        currentTransitionY = targetTransitionY;
      }

      const p = Math.max(0, Math.min(1, currentTransitionY / TRANSITION_TRAVEL));
      // Dissolvenza calibrata: intro svanisce entro p=0.35, navbar compare dopo p=0.45 (zero sovrapposizioni)
      const introAlpha = Math.max(0, Math.min(1, 1 - p * 2.8));
      const navAlpha = Math.max(0, Math.min(1, (p - 0.45) / 0.55));

      document.documentElement.style.setProperty('--p-intro', p.toFixed(4));
      document.documentElement.style.setProperty('--p-intro-alpha', introAlpha.toFixed(4));
      document.documentElement.style.setProperty('--p-nav-alpha', navAlpha.toFixed(4));

      // Lock definitivo in Portfolio SOLO quando currentTransitionY ha completato con dolcezza l'intera corsa al 100%
      if (currentTransitionY >= TRANSITION_TRAVEL - 0.5 && !isPortfolioActive) {
        isPortfolioActive = true;
        currentTransitionY = TRANSITION_TRAVEL;
        document.body.classList.add('portfolio-active');
        document.documentElement.style.setProperty('--p-intro', '1');
        document.documentElement.style.setProperty('--p-intro-alpha', '0');
        document.documentElement.style.setProperty('--p-nav-alpha', '1');
      }

      // Ritorno completato in Intro quando p torna a 0
      if (currentTransitionY <= 0.5 && targetTransitionY === 0 && isPortfolioActive) {
        isPortfolioActive = false;
        currentTransitionY = 0;
        document.body.classList.remove('portfolio-active');
        document.documentElement.style.setProperty('--p-intro', '0');
        document.documentElement.style.setProperty('--p-intro-alpha', '1');
        document.documentElement.style.setProperty('--p-nav-alpha', '0');
      }
    }

    // 2. SCORRIMENTO INFINITO BIDIREZIONALE DEI PROGETTI (ATTIVO IN PORTFOLIO)
    if (isPortfolioActive) {
      const cycleHeight = getCycleHeight();
      const diffY = targetProjectY - projectScrollY;

      if (Math.abs(diffY) > 0.2) {
        projectScrollY += diffY * 0.12;
        needsNextFrame = true;
      } else {
        projectScrollY = targetProjectY;
      }

      // Loop infinito bidirezionale senza limiti e senza mai uscire dal portfolio verso l'intro
      if (projectScrollY >= cycleHeight) {
        projectScrollY -= cycleHeight;
        targetProjectY -= cycleHeight;
      }
      if (projectScrollY < 0) {
        projectScrollY += cycleHeight;
        targetProjectY += cycleHeight;
      }

      window.scrollTo({ top: projectScrollY, behavior: 'instant' });
      updateParallax();
      if (window.updateCustomEdgeScrollbar) window.updateCustomEdgeScrollbar();
    }

    if (needsNextFrame) {
      requestAnimationFrame(mainAnimationLoop);
    } else {
      isTicking = false;
    }
  }

  // Scroll controllato, rallentato e morbido per la schermata ABOUT
  let targetAboutScrollY = 0;
  let currentAboutScrollY = 0;
  let isAboutScrollTicking = false;

  function checkContactsInView() {
    const aboutScreen = document.getElementById('about-screen');
    const contactsSection = document.getElementById('contacts-section');
    if (!aboutScreen || !contactsSection) return;
    const rect = contactsSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.45) {
      document.body.classList.add('contacts-in-view');
    } else {
      document.body.classList.remove('contacts-in-view');
    }
  }
  window.checkContactsInView = checkContactsInView;

  function aboutScrollAnimationLoop() {
    const aboutScreen = document.getElementById('about-screen');
    if (!aboutScreen || !isAboutScreenActive) {
      isAboutScrollTicking = false;
      return;
    }
    const diff = targetAboutScrollY - currentAboutScrollY;
    if (Math.abs(diff) > 0.4) {
      currentAboutScrollY += diff * 0.085; // Decelerazione morbida, controllata e lenta
      aboutScreen.scrollTop = currentAboutScrollY;
      checkContactsInView();
      if (window.updateCustomEdgeScrollbar) window.updateCustomEdgeScrollbar();
      requestAnimationFrame(aboutScrollAnimationLoop);
    } else {
      currentAboutScrollY = targetAboutScrollY;
      aboutScreen.scrollTop = currentAboutScrollY;
      checkContactsInView();
      if (window.updateCustomEdgeScrollbar) window.updateCustomEdgeScrollbar();
      isAboutScrollTicking = false;
    }
  }

  const aboutScreenEl = document.getElementById('about-screen');
  if (aboutScreenEl) {
    aboutScreenEl.addEventListener('scroll', () => {
      checkContactsInView();
      if (!isAboutScrollTicking && !(window.contactsMotion && window.contactsMotion.isSlinging())) {
        targetAboutScrollY = aboutScreenEl.scrollTop;
        currentAboutScrollY = aboutScreenEl.scrollTop;
      }
      if (window.updateCustomEdgeScrollbar) window.updateCustomEdgeScrollbar();
    }, { passive: true });
  }

  window.__portfolioScrollBridge = {
    getHomeProgress() {
      const ch = getCycleHeight();
      if (ch <= 0) return 0;
      const mod = ((projectScrollY % ch) + ch) % ch;
      return Math.max(0, Math.min(1, mod / ch));
    },
    setHomeProgress(p) {
      const ch = getCycleHeight();
      if (ch <= 0) return;
      const clamped = Math.max(0, Math.min(1, p));
      projectScrollY = clamped * ch;
      targetProjectY = projectScrollY;
      window.scrollTo({ top: projectScrollY, behavior: 'instant' });
      updateParallax();
    },
    setAboutScrollTop(val) {
      if (!aboutScreenEl) return;
      const maxScroll = Math.max(0, aboutScreenEl.scrollHeight - aboutScreenEl.clientHeight);
      const clamped = Math.max(0, Math.min(maxScroll, val));
      isAboutScrollTicking = false;
      targetAboutScrollY = clamped;
      currentAboutScrollY = clamped;
      aboutScreenEl.scrollTop = clamped;
      checkContactsInView();
    }
  };

  // Monitora reflow e font loading per mantenere l'allineamento a filo
  const aboutScrollContentEl = document.querySelector('.about-scroll-content');
  if (aboutScrollContentEl && window.ResizeObserver) {
    const ro = new ResizeObserver(() => {
      if (document.body.classList.contains('contacts-in-view') && !isAboutScrollTicking && !(window.contactsMotion && window.contactsMotion.isSlinging())) {
        alignContactsToBottom(false);
      }
    });
    ro.observe(aboutScrollContentEl);
  }

  window.addEventListener('load', () => {
    if (window.location.hash.startsWith('#contacts') || (document.body.classList.contains('about-active') && document.body.classList.contains('contacts-in-view'))) {
      alignContactsToBottom(false);
    } else if (window.location.hash === '#lucio-contacts' || (document.body.classList.contains('lucio-active') && document.body.classList.contains('contacts-in-view'))) {
      const screen = document.getElementById('lucio-screen');
      const cSec = document.getElementById('lucio-contacts-section');
      if (screen && cSec) {
        screen.scrollTop = cSec.offsetTop;
        screen.dispatchEvent(new Event('scroll'));
      }
    } else if (window.location.hash === '#dea-contacts' || (document.body.classList.contains('dea-active') && document.body.classList.contains('contacts-in-view'))) {
      const screen = document.getElementById('dea-screen');
      const cSec = document.getElementById('dea-contacts-section');
      if (screen && cSec) {
        screen.scrollTop = cSec.offsetTop;
        screen.dispatchEvent(new Event('scroll'));
      }
    } else if (window.location.hash === '#utopia-contacts' || (document.body.classList.contains('utopia-active') && document.body.classList.contains('contacts-in-view'))) {
      const screen = document.getElementById('utopia-screen');
      const cSec = document.getElementById('utopia-contacts-section');
      if (screen && cSec) {
        screen.scrollTop = cSec.offsetTop;
        screen.dispatchEvent(new Event('scroll'));
      }
    } else if (window.location.hash === '#climbex-contacts' || (document.body.classList.contains('climbex-active') && document.body.classList.contains('contacts-in-view'))) {
      const screen = document.getElementById('climbex-screen');
      const cSec = document.getElementById('climbex-contacts-section');
      if (screen && cSec) {
        screen.scrollTop = cSec.offsetTop;
        screen.dispatchEvent(new Event('scroll'));
      }
    } else if (window.location.hash === '#nyo-contacts' || (document.body.classList.contains('nyo-active') && document.body.classList.contains('contacts-in-view'))) {
      const screen = document.getElementById('nyo-screen');
      const cSec = document.getElementById('nyo-contacts-section');
      if (screen && cSec) {
        screen.scrollTop = cSec.offsetTop;
        screen.dispatchEvent(new Event('scroll'));
      }
    }
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      if (window.location.hash.startsWith('#contacts') || (document.body.classList.contains('about-active') && document.body.classList.contains('contacts-in-view'))) {
        alignContactsToBottom(false);
      } else if (window.location.hash === '#lucio-contacts' || (document.body.classList.contains('lucio-active') && document.body.classList.contains('contacts-in-view'))) {
        const screen = document.getElementById('lucio-screen');
        const cSec = document.getElementById('lucio-contacts-section');
        if (screen && cSec) {
          screen.scrollTop = cSec.offsetTop;
          screen.dispatchEvent(new Event('scroll'));
        }
      } else if (window.location.hash === '#dea-contacts' || (document.body.classList.contains('dea-active') && document.body.classList.contains('contacts-in-view'))) {
        const screen = document.getElementById('dea-screen');
        const cSec = document.getElementById('dea-contacts-section');
        if (screen && cSec) {
          screen.scrollTop = cSec.offsetTop;
          screen.dispatchEvent(new Event('scroll'));
        }
      } else if (window.location.hash === '#utopia-contacts' || (document.body.classList.contains('utopia-active') && document.body.classList.contains('contacts-in-view'))) {
        const screen = document.getElementById('utopia-screen');
        const cSec = document.getElementById('utopia-contacts-section');
        if (screen && cSec) {
          screen.scrollTop = cSec.offsetTop;
          screen.dispatchEvent(new Event('scroll'));
        }
      } else if (window.location.hash === '#climbex-contacts' || (document.body.classList.contains('climbex-active') && document.body.classList.contains('contacts-in-view'))) {
        const screen = document.getElementById('climbex-screen');
        const cSec = document.getElementById('climbex-contacts-section');
        if (screen && cSec) {
          screen.scrollTop = cSec.offsetTop;
          screen.dispatchEvent(new Event('scroll'));
        }
      } else if (window.location.hash === '#nyo-contacts' || (document.body.classList.contains('nyo-active') && document.body.classList.contains('contacts-in-view'))) {
        const screen = document.getElementById('nyo-screen');
        const cSec = document.getElementById('nyo-contacts-section');
        if (screen && cSec) {
          screen.scrollTop = cSec.offsetTop;
          screen.dispatchEvent(new Event('scroll'));
        }
      }
    });
  }

  // Gestione Wheel & Trackpad: 100% fluida, senza snap e senza giri a vuoto
  window.addEventListener('wheel', (e) => {
    if (isAnyModalOpen()) return;
    if (isWorksScreenActive) return; // Non scrollare mentre la schermata WORKS è aperta
    if (document.body.classList.contains('archive-active')) {
      if (window.innerWidth > 900) e.preventDefault();
      return;
    }

    // Scorrimento rallentato e vellutato per la schermata ABOUT
    if (isAboutScreenActive) {
      const aboutScreen = document.getElementById('about-screen');
      const contactsSection = document.getElementById('contacts-section');
      if (!aboutScreen) return;
      e.preventDefault();
      if (window.contactsMotion && window.contactsMotion.isSlinging()) return;

      const maxScroll = Math.max(0, aboutScreen.scrollHeight - aboutScreen.clientHeight);
      const atBottom = maxScroll > 0 && aboutScreen.scrollTop >= maxScroll - 4;
      if (contactsSection && window.contactsMotion && (
        (atBottom && e.deltaY > 0) ||
        (window.contactsMotion.isOverscrolling(contactsSection) && e.deltaY < 0)
      )) {
        targetAboutScrollY = maxScroll;
        currentAboutScrollY = aboutScreen.scrollTop;
        window.contactsMotion.feedOverscroll(contactsSection, e.deltaY);
        return;
      }

      const delta = e.deltaY * 0.45; // Ridotta la velocità del 55% per massimo controllo
      targetAboutScrollY = Math.max(0, Math.min(maxScroll, targetAboutScrollY + delta));
      if (!isAboutScrollTicking) {
        isAboutScrollTicking = true;
        requestAnimationFrame(aboutScrollAnimationLoop);
      }
      return;
    }

    // Scorrimento naturale per la schermata LUCIO, DEA, UTOPIA e CLIMBEX (+ effetto elastico overscroll a fine pagina)
    const projCtx = getActiveProjectContactsContext();
    if (projCtx && projCtx.screen) {
      if (window.contactsMotion && window.contactsMotion.isSlinging()) {
        e.preventDefault();
        return;
      }
      const maxScroll = Math.max(0, projCtx.screen.scrollHeight - projCtx.screen.clientHeight);
      const atBottom = maxScroll > 0 && projCtx.screen.scrollTop >= maxScroll - 3;
      if (projCtx.drawer && window.contactsMotion && (
        (atBottom && e.deltaY > 0) ||
        (window.contactsMotion.isOverscrolling(projCtx.drawer) && e.deltaY < 0)
      )) {
        e.preventDefault();
        if (projCtx.screen.scrollTop < maxScroll) {
          projCtx.screen.scrollTop = maxScroll;
        }
        window.contactsMotion.feedOverscroll(projCtx.drawer, e.deltaY);
        return;
      }
      return; // Permette lo scorrimento nativo e fluido di #lucio-screen, #dea-screen, #utopia-screen e #climbex-screen
    }

    e.preventDefault();

    if (!isPortfolioActive) {
      if (document.body.classList.contains('intro-opening')) {
        clearIntroOpening();
        document.body.classList.remove('intro-opening');
      }

      const delta = e.deltaY * SCROLL_SENSITIVITY;
      const nextTarget = targetTransitionY + delta;

      if (nextTarget >= TRANSITION_TRAVEL) {
        // Raggiunto il limite: porta il target di transizione a fine corsa (480)
        // e ancora i progetti a 0 senza anticipare lo scorrimento, così che Lucio
        // atterri perfettamente allineato con il margine basso dell'immagine hero
        targetTransitionY = TRANSITION_TRAVEL;
        targetProjectY = 0;
      } else if (nextTarget < 0) {
        targetTransitionY = 0;
      } else {
        targetTransitionY = nextTarget;
      }

      if (!isTicking) {
        isTicking = true;
        requestAnimationFrame(mainAnimationLoop);
      }
      return;
    }

    // Modalità Portfolio attiva: scorrimento progetti bidirezionale (inverso con scroll up)
    targetProjectY += e.deltaY * SCROLL_SENSITIVITY;
    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(mainAnimationLoop);
    }
  }, { passive: false });

  // Click su "SCROLL, GENTLY" per transizione fluida
  const scrollGentlyBtn = document.getElementById('intro-scroll-gently');
  if (scrollGentlyBtn) {
    scrollGentlyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      goToPortfolio();
    });
  }

  // Click su "LORENZO MACAIONE" in NavBar per tornare alla schermata Intro
  const navLorenzo = document.querySelector('.nav-lorenzo');
  if (navLorenzo) {
    navLorenzo.addEventListener('click', (e) => {
      e.preventDefault();
      if (document.body.classList.contains('lucio-active')) {
        if (window.closeLucioScreen) window.closeLucioScreen();
      }
      if (document.body.classList.contains('dea-active')) {
        if (window.closeDeaScreen) window.closeDeaScreen();
      }
      if (document.body.classList.contains('utopia-active')) {
        if (window.closeUtopiaScreen) window.closeUtopiaScreen();
      }
      if (document.body.classList.contains('climbex-active')) {
        if (window.closeClimbexScreen) window.closeClimbexScreen();
      }
      if (document.body.classList.contains('nyo-active')) {
        if (window.closeNyoScreen) window.closeNyoScreen();
      }
      if (document.body.classList.contains('archive-active')) {
        if (window.closeArchiveScreen) window.closeArchiveScreen();
      }
      if (isAboutScreenActive) {
        closeAboutScreen();
      }
      if (isWorksScreenActive) {
        closeWorksScreen();
      }
      goToIntro();
    });
  }

  // Click su "WORKS" / "CLOSE" / "ARCHIVE" in NavBar per aprire/chiudere la schermata Works
  const navWorksBtn = document.getElementById('nav-works-btn');
  if (navWorksBtn) {
    navWorksBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (document.body.classList.contains('lucio-active') ||
          document.body.classList.contains('dea-active') ||
          document.body.classList.contains('utopia-active') ||
          document.body.classList.contains('climbex-active') ||
          document.body.classList.contains('nyo-active') ||
          document.body.classList.contains('archive-active')) {
        openWorksScreen();
        return;
      }
      if (isAboutScreenActive) {
        closeAboutScreen();
      }
      if (!isPortfolioActive) return;
      toggleWorksScreen();
    });
  }

  // Click su "(1) LUCIO", "(2) DEA", "(3) UTOPIA", "(4) CLIMBEX" o "(5) NYO" nella navbar: chiude la schermata progetto e riapre la schermata Works classica
  const navProjectSub = document.getElementById('nav-project-sub');
  if (navProjectSub) {
    navProjectSub.addEventListener('click', (e) => {
      e.preventDefault();
      if (document.body.classList.contains('lucio-active') ||
          document.body.classList.contains('dea-active') ||
          document.body.classList.contains('utopia-active') ||
          document.body.classList.contains('climbex-active') ||
          document.body.classList.contains('nyo-active')) {
        openWorksScreen();
      }
    });
  }

  // Click su "ABOUT" in NavBar: se siamo dentro ABOUT e scrollati verso il basso, torna in cima con scroll inverso; se a cima, chiude; altrimenti apre
  const navAboutBtn = document.getElementById('nav-about-btn') || document.querySelector('.nav-about');
  if (navAboutBtn) {
    navAboutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (document.body.classList.contains('lucio-active')) {
        window.closeLucioScreen();
      }
      if (document.body.classList.contains('dea-active')) {
        window.closeDeaScreen();
      }
      if (document.body.classList.contains('utopia-active')) {
        window.closeUtopiaScreen();
      }
      if (document.body.classList.contains('climbex-active')) {
        window.closeClimbexScreen();
      }
      if (document.body.classList.contains('nyo-active')) {
        window.closeNyoScreen();
      }
      if (document.body.classList.contains('archive-active')) {
        if (window.closeArchiveScreen) window.closeArchiveScreen();
      }
      if (isAboutScreenActive) {
        const aboutScreen = document.getElementById('about-screen');
        if (aboutScreen && aboutScreen.scrollTop > 15) {
          targetAboutScrollY = 0;
          if (!isAboutScrollTicking) {
            isAboutScrollTicking = true;
            requestAnimationFrame(aboutScrollAnimationLoop);
          }
          return;
        }
      }
      if (!isPortfolioActive) {
        goToPortfolio();
      }
      toggleAboutScreen();
    });
  }

  // Click su "CONTACTS" in NavBar: fionda velocemente alla sezione Contacts con bounce elastico all'arrivo
  const navContactsBtn = document.getElementById('nav-contacts-btn') || document.querySelector('.nav-contacts');
  if (navContactsBtn) {
    navContactsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const projCtx = getActiveProjectContactsContext();
      if (projCtx && projCtx.screen && projCtx.drawer) {
        if (window.contactsMotion) {
          window.contactsMotion.slingToContacts(projCtx.screen, projCtx.drawer);
        } else {
          projCtx.screen.scrollTo({ top: projCtx.drawer.offsetTop, behavior: 'smooth' });
        }
        return;
      }
      goToContactsSection(true);
    });
  }

  // Click sulle voci della tendina WORKS
  const dropdownItems = document.querySelectorAll('.works-dropdown-item');
  dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const action = item.getAttribute('data-action');
      if (action === 'archive') {
        closeWorksScreen();
        if (window.openArchiveScreen) {
          window.openArchiveScreen();
        }
      } else if (action === 'project') {
        const pId = parseInt(item.getAttribute('data-project-id'), 10);
        if (pId === 1) {
          closeWorksScreen();
          if (window.openLucioScreen) {
            window.openLucioScreen();
          }
        } else if (pId === 2) {
          closeWorksScreen();
          if (window.openDeaScreen) {
            window.openDeaScreen();
          }
        } else if (pId === 3) {
          closeWorksScreen();
          if (window.openUtopiaScreen) {
            window.openUtopiaScreen();
          }
        } else if (pId === 4) {
          closeWorksScreen();
          if (window.openClimbexScreen) {
            window.openClimbexScreen();
          }
        } else if (pId === 5) {
          closeWorksScreen();
          if (window.openNyoScreen) {
            window.openNyoScreen();
          }
        } else {
          closeWorksScreen();
          const firstCard = document.querySelector('.project-card');
          const cardH = firstCard ? firstCard.offsetHeight : (0.875 * window.innerHeight);
          const gap = parseFloat(getComputedStyle(scrollContainer).rowGap) || 12.5;
          targetProjectY = (pId - 1) * (cardH + gap);
          if (!isTicking) {
            isTicking = true;
            requestAnimationFrame(mainAnimationLoop);
          }
        }
      }
    });
  });

  // Supporto Tastiera
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (document.body.classList.contains('lucio-active')) {
        window.closeLucioScreen();
        return;
      }
      if (document.body.classList.contains('dea-active')) {
        window.closeDeaScreen();
        return;
      }
      if (document.body.classList.contains('utopia-active')) {
        window.closeUtopiaScreen();
        return;
      }
      if (document.body.classList.contains('climbex-active')) {
        window.closeClimbexScreen();
        return;
      }
      if (document.body.classList.contains('nyo-active')) {
        window.closeNyoScreen();
        return;
      }
      if (isAboutScreenActive) {
        closeAboutScreen();
        return;
      }
      if (document.body.classList.contains('archive-active')) {
        if (window.closeArchiveScreen) window.closeArchiveScreen();
        return;
      }
      if (isWorksScreenActive) {
        closeWorksScreen();
        return;
      }
    }
    if (isAnyModalOpen()) return;
    if (isAboutScreenActive) return;
    if (document.body.classList.contains('archive-active')) return;
    if (document.body.classList.contains('lucio-active') || document.body.classList.contains('dea-active') || document.body.classList.contains('utopia-active') || document.body.classList.contains('climbex-active') || document.body.classList.contains('nyo-active')) return;
    if (!isPortfolioActive) {
      if (['ArrowDown'].includes(e.code)) {
        e.preventDefault();
        clearIntroOpening();
        document.body.classList.remove('intro-opening');

        const nextY = targetTransitionY + 120;
        if (nextY >= TRANSITION_TRAVEL) {
          targetTransitionY = TRANSITION_TRAVEL;
          targetProjectY += (nextY - TRANSITION_TRAVEL);
        } else {
          targetTransitionY = nextY;
        }
        if (!isTicking) {
          isTicking = true;
          requestAnimationFrame(mainAnimationLoop);
        }
      } else if (['ArrowUp'].includes(e.code)) {
        e.preventDefault();
        targetTransitionY = Math.max(0, targetTransitionY - 120);
        if (!isTicking) {
          isTicking = true;
          requestAnimationFrame(mainAnimationLoop);
        }
      } else if (['PageDown', 'Space'].includes(e.code)) {
        e.preventDefault();
        goToPortfolio();
      }
    }
  });

  // Supporto Touch / Trackpad Drag Gestures con passaggio fluido e senza snap
  let touchStartY = 0;
  window.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) {
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (isAnyModalOpen()) return;
    if (isAboutScreenActive) return;
    if (document.body.classList.contains('lucio-active') || document.body.classList.contains('dea-active') || document.body.classList.contains('utopia-active') || document.body.classList.contains('climbex-active') || document.body.classList.contains('nyo-active')) return;
    if (!e.touches || !e.touches[0]) return;

    const touchY = e.touches[0].clientY;
    const deltaY = touchStartY - touchY;
    touchStartY = touchY;

    if (!isPortfolioActive) {
      const delta = deltaY * SCROLL_SENSITIVITY * 1.2;
      const nextTarget = targetTransitionY + delta;

      if (nextTarget >= TRANSITION_TRAVEL) {
        targetTransitionY = TRANSITION_TRAVEL;
        targetProjectY += (nextTarget - TRANSITION_TRAVEL) * 0.8;
      } else if (nextTarget < 0) {
        targetTransitionY = 0;
      } else {
        targetTransitionY = nextTarget;
      }

      if (!isTicking) {
        isTicking = true;
        requestAnimationFrame(mainAnimationLoop);
      }
      return;
    }

    targetProjectY += deltaY * (SCROLL_SENSITIVITY * 0.8);
    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(mainAnimationLoop);
    }
  }, { passive: true });

  // Sincronizzazione al resize
  window.addEventListener('resize', () => {
    updateParallax();
  });

  // Render iniziale parallasse
  updateParallax();
}

// 3. Modals Management (About, Contacts, and Project Details)
function initModals() {
  const projectModal = document.getElementById('project-modal');
  const projectModalContent = document.getElementById('modal-dynamic-content');
  const contactsModal = document.getElementById('contacts-modal');

  function showProjectDetails(data) {
    if (!projectModal || !projectModalContent) return;
    const blurStyle = data.isBlurred ? 'filter: blur(25px); transform: scale(1.05);' : '';
    projectModalContent.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
        <div style="background: #141414; display: flex; align-items: center; justify-content: center; overflow: hidden;">
          <img src="${data.image}" alt="${data.title}" style="width: 100%; height: auto; max-height: 70vh; object-fit: cover; ${blurStyle}" />
        </div>
        <div style="display: flex; flex-direction: column; justify-content: space-between; gap: 24px; color: #FFF;">
          <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 16px;">
              <span class="text-17pt" style="color: #888;">${data.category}</span>
              <span class="text-17pt" style="color: #888;">${data.year}</span>
            </div>
            <h3 class="text-35pt" style="margin-bottom: 6px; color: #FFF;">
              ${data.title}
            </h3>
            <p class="text-17pt" style="color: #888; margin-bottom: 20px;">
              ${data.subtitle}
            </p>
            <div style="font-size: 13pt; line-height: 1.6; color: #CCC; margin-bottom: 24px;">
              <p>${data.description}</p>
            </div>
            <div style="margin-top: 20px; border-top: 1px solid #222; padding-top: 18px;">
              <h4 class="text-17pt" style="margin-bottom: 12px; color: #FFF;">KEY DETAILS</h4>
              <ul style="list-style: none; font-size: 11pt; color: #AAA; display: flex; flex-direction: column; gap: 6px;">
                ${data.features.map(f => `<li>— ${f}</li>`).join('')}
              </ul>
            </div>
            <div style="margin-top: 20px; border-top: 1px solid #222; padding-top: 18px;">
              <h4 class="text-17pt" style="margin-bottom: 12px; color: #FFF;">SPECIFICATIONS</h4>
              <div style="display: flex; flex-direction: column; gap: 8px; font-size: 11pt;">
                ${data.specs.map(s => `
                  <div style="display: flex; justify-content: space-between;">
                    <span style="color: #888;">${s.label}</span>
                    <span style="color: #FFF;">${s.value}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          <div style="margin-top: 24px; display: flex; justify-content: space-between; align-items: center;">
            <span class="text-17pt" style="color: #555;">PROJECT ${data.id} / 05</span>
            <button onclick="closeActiveModal()" class="text-17pt" style="background: #FFF; color: #000; padding: 12px 24px; cursor: pointer;">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;
    projectModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  window.openProjectById = function(id) {
    if (String(id) === '1') {
      window.openLucioScreen();
      return;
    }
    if (String(id) === '2') {
      window.openDeaScreen();
      return;
    }
    if (String(id) === '3') {
      window.openUtopiaScreen();
      return;
    }
    if (String(id) === '4') {
      window.openClimbexScreen();
      return;
    }
    if (String(id) === '5') {
      window.openNyoScreen();
      return;
    }
    const data = projectsData[id];
    if (data) {
      showProjectDetails(data);
    }
  };

  // Open Project Modal or Project Screen
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    if (card) {
      const id = card.getAttribute('data-project-id');
      if (String(id) === '1') {
        e.preventDefault();
        window.openLucioScreen();
        return;
      }
      if (String(id) === '2') {
        e.preventDefault();
        window.openDeaScreen();
        return;
      }
      if (String(id) === '3') {
        e.preventDefault();
        window.openUtopiaScreen();
        return;
      }
      if (String(id) === '4') {
        e.preventDefault();
        window.openClimbexScreen();
        return;
      }
      if (String(id) === '5') {
        e.preventDefault();
        window.openNyoScreen();
        return;
      }
      if (projectModal && projectModalContent) {
        const data = projectsData[id];
        if (data) {
          showProjectDetails(data);
        }
      }
    }
  });

  window.openLucioScreen = function(initialScroll) {
    if (window.closeAboutScreen) {
      window.closeAboutScreen();
    }
    if (window.closeDeaScreen) {
      window.closeDeaScreen();
    }
    if (window.closeUtopiaScreen) {
      window.closeUtopiaScreen();
    }
    if (window.closeClimbexScreen) {
      window.closeClimbexScreen();
    }
    if (window.closeNyoScreen) {
      window.closeNyoScreen();
    }
    if (window.closeArchiveScreen) {
      window.closeArchiveScreen();
    }
    if (typeof closeWorksScreen === 'function') {
      closeWorksScreen();
    }
    document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');

    // Aggiorna sottotitolo Navbar a (1) LUCIO
    const navProjectSub = document.getElementById('nav-project-sub');
    if (navProjectSub) {
      const numEl = navProjectSub.querySelector('.nav-sub-num');
      const nameEl = navProjectSub.querySelector('.nav-sub-name');
      if (numEl) numEl.textContent = '(1)';
      if (nameEl) nameEl.textContent = 'LUCIO';
    }

    document.body.classList.remove('intro-opening', 'project-nav-hidden');
    document.body.classList.add('portfolio-active', 'lucio-active');

    const screen = document.getElementById('lucio-screen');
    if (screen) {
      if (initialScroll === 'contacts') {
        const cSection = document.getElementById('lucio-contacts-section');
        screen.scrollTop = cSection ? cSection.offsetTop : 999999;
        setTimeout(() => {
          const cSec = document.getElementById('lucio-contacts-section');
          screen.scrollTop = cSec ? cSec.offsetTop : 999999;
          screen.dispatchEvent(new Event('scroll'));
        }, 100);
      } else {
        screen.scrollTop = (typeof initialScroll === 'number') ? initialScroll : 0;
      }
      setTimeout(() => {
        screen.dispatchEvent(new Event('scroll'));
      }, 50);
    }
    const titleEl = document.getElementById('lucio-active-title');
    const stickyWrap = document.querySelector('.lucio-sticky-title-wrap');
    if (titleEl) {
      titleEl.textContent = '/ INTERACTION';
      titleEl.classList.remove('is-changing');
    }
    if (stickyWrap && (!initialScroll || initialScroll === 0)) {
      stickyWrap.classList.remove('is-visible');
    }
    const briefSection = document.querySelector('.lucio-brief-section');
    if (briefSection && (!initialScroll || initialScroll === 0)) {
      briefSection.classList.remove('is-revealed');
    }
    const furnitureSection = document.querySelector('.lucio-furniture-section');
    if (furnitureSection && (!initialScroll || initialScroll === 0)) {
      furnitureSection.classList.remove('is-revealed');
    }
    if (!initialScroll || initialScroll === 0) {
      document.body.classList.remove('lucio-header-scrolled', 'project-nav-hidden');
    }
    if (typeof initMilanTime === 'function') {
      initMilanTime();
    }
  };

  window.closeLucioScreen = function() {
    document.body.classList.remove('lucio-active', 'contacts-in-view', 'lucio-header-scrolled', 'project-nav-hidden');
    const screen = document.getElementById('lucio-screen');
    if (screen) {
      screen.scrollTop = 0;
    }
    if (window.location.hash.startsWith('#lucio')) {
      history.replaceState(null, null, ' ');
    }
  };

  window.openDeaScreen = function(initialScroll) {
    if (window.closeAboutScreen) {
      window.closeAboutScreen();
    }
    if (window.closeLucioScreen) {
      window.closeLucioScreen();
    }
    if (window.closeUtopiaScreen) {
      window.closeUtopiaScreen();
    }
    if (window.closeClimbexScreen) {
      window.closeClimbexScreen();
    }
    if (window.closeNyoScreen) {
      window.closeNyoScreen();
    }
    if (window.closeArchiveScreen) {
      window.closeArchiveScreen();
    }
    if (typeof closeWorksScreen === 'function') {
      closeWorksScreen();
    }
    document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');

    // Aggiorna sottotitolo Navbar a (2) DEA
    const navProjectSub = document.getElementById('nav-project-sub');
    if (navProjectSub) {
      const numEl = navProjectSub.querySelector('.nav-sub-num');
      const nameEl = navProjectSub.querySelector('.nav-sub-name');
      if (numEl) numEl.textContent = '(2)';
      if (nameEl) nameEl.textContent = 'DEA';
    }

    document.body.classList.remove('intro-opening', 'project-nav-hidden');
    document.body.classList.add('portfolio-active', 'dea-active');

    const screen = document.getElementById('dea-screen');
    if (screen) {
      if (initialScroll === 'contacts') {
        const cSection = document.getElementById('dea-contacts-section');
        screen.scrollTop = cSection ? cSection.offsetTop : 999999;
        setTimeout(() => {
          const cSec = document.getElementById('dea-contacts-section');
          screen.scrollTop = cSec ? cSec.offsetTop : 999999;
          screen.dispatchEvent(new Event('scroll'));
        }, 100);
      } else {
        screen.scrollTop = (typeof initialScroll === 'number') ? initialScroll : 0;
      }
      setTimeout(() => {
        screen.dispatchEvent(new Event('scroll'));
      }, 50);
    }
    const titleEl = document.getElementById('dea-active-title');
    const stickyWrap = document.querySelector('.dea-sticky-title-wrap');
    if (titleEl) {
      titleEl.textContent = '/ AFFORDANCE';
      titleEl.classList.remove('is-changing');
    }
    if (stickyWrap && (!initialScroll || initialScroll === 0)) {
      stickyWrap.classList.remove('is-visible');
    }
    const briefSection = document.querySelector('.dea-brief-section');
    if (briefSection && (!initialScroll || initialScroll === 0)) {
      briefSection.classList.remove('is-revealed');
    }
    const furnitureSection = document.querySelector('.dea-furniture-section');
    if (furnitureSection && (!initialScroll || initialScroll === 0)) {
      furnitureSection.classList.remove('is-revealed');
    }
    if (!initialScroll || initialScroll === 0) {
      document.body.classList.remove('dea-header-scrolled', 'project-nav-hidden');
    }
    const mechVideo = screen ? screen.querySelector('.dea-mechanism-video') : null;
    if (mechVideo && mechVideo.paused) {
      mechVideo.play().catch(() => {});
    }
    const assemblyVideo = screen ? screen.querySelector('.dea-assembly-video') : null;
    if (assemblyVideo && assemblyVideo.paused) {
      assemblyVideo.play().catch(() => {});
    }
    if (typeof initMilanTime === 'function') {
      initMilanTime();
    }
  };

  window.closeDeaScreen = function() {
    document.body.classList.remove('dea-active', 'contacts-in-view', 'dea-header-scrolled', 'project-nav-hidden');
    const screen = document.getElementById('dea-screen');
    if (screen) {
      screen.scrollTop = 0;
    }
    const furnitureSection = document.querySelector('.dea-furniture-section');
    if (furnitureSection) {
      furnitureSection.classList.remove('is-revealed');
    }
    const assemblyVideo = document.querySelector('.dea-assembly-video');
    if (assemblyVideo) {
      if (!assemblyVideo.paused) assemblyVideo.pause();
      assemblyVideo.currentTime = 3.7;
      assemblyVideo.dataset.userPaused = '';
      assemblyVideo.muted = true;
      const toggleBtn = document.querySelector('.dea-assembly-audio-toggle');
      if (toggleBtn) toggleBtn.classList.remove('is-unmuted');
      const wrap = document.querySelector('.dea-assembly-video-wrap');
      if (wrap) wrap.classList.remove('is-ui-visible');
    }
    if (window.location.hash.startsWith('#dea')) {
      history.replaceState(null, null, ' ');
    }
  };

  window.openUtopiaScreen = function(initialScroll) {
    if (window.closeAboutScreen) {
      window.closeAboutScreen();
    }
    if (window.closeLucioScreen) {
      window.closeLucioScreen();
    }
    if (window.closeDeaScreen) {
      window.closeDeaScreen();
    }
    if (window.closeClimbexScreen) {
      window.closeClimbexScreen();
    }
    if (window.closeNyoScreen) {
      window.closeNyoScreen();
    }
    if (window.closeArchiveScreen) {
      window.closeArchiveScreen();
    }
    if (typeof closeWorksScreen === 'function') {
      closeWorksScreen();
    }
    document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');

    // Aggiorna sottotitolo Navbar a (3) UTOPIA
    const navProjectSub = document.getElementById('nav-project-sub');
    if (navProjectSub) {
      const numEl = navProjectSub.querySelector('.nav-sub-num');
      const nameEl = navProjectSub.querySelector('.nav-sub-name');
      if (numEl) numEl.textContent = '(3)';
      if (nameEl) nameEl.textContent = 'UTOPIA';
    }

    document.body.classList.remove('intro-opening', 'project-nav-hidden');
    document.body.classList.add('portfolio-active', 'utopia-active');

    const screen = document.getElementById('utopia-screen');
    if (screen) {
      if (initialScroll === 'contacts') {
        const cSection = document.getElementById('utopia-contacts-section');
        screen.scrollTop = cSection ? cSection.offsetTop : 999999;
        setTimeout(() => {
          const cSec = document.getElementById('utopia-contacts-section');
          screen.scrollTop = cSec ? cSec.offsetTop : 999999;
          screen.dispatchEvent(new Event('scroll'));
        }, 100);
      } else {
        screen.scrollTop = (typeof initialScroll === 'number') ? initialScroll : 0;
      }
      setTimeout(() => {
        screen.dispatchEvent(new Event('scroll'));
      }, 50);
    }
    const titleEl = document.getElementById('utopia-active-title');
    const stickyWrap = document.querySelector('.utopia-sticky-title-wrap');
    if (titleEl) {
      titleEl.textContent = '/ SKETCHES';
      titleEl.classList.remove('is-changing');
    }
    if (stickyWrap && (!initialScroll || initialScroll === 0)) {
      stickyWrap.classList.remove('is-visible');
    }
    const briefSection = document.querySelector('.utopia-brief-section');
    if (briefSection && (!initialScroll || initialScroll === 0)) {
      briefSection.classList.remove('is-revealed');
    }
    const furnitureSection = document.querySelector('.utopia-furniture-section');
    if (furnitureSection && (!initialScroll || initialScroll === 0)) {
      furnitureSection.classList.remove('is-revealed');
    }
    if (!initialScroll || initialScroll === 0) {
      document.body.classList.remove('utopia-header-scrolled', 'project-nav-hidden');
    }
    if (typeof initMilanTime === 'function') {
      initMilanTime();
    }
  };

  window.closeUtopiaScreen = function() {
    document.body.classList.remove('utopia-active', 'contacts-in-view', 'utopia-header-scrolled', 'project-nav-hidden');
    const screen = document.getElementById('utopia-screen');
    if (screen) {
      screen.scrollTop = 0;
    }
    const furnitureSection = document.querySelector('.utopia-furniture-section');
    if (furnitureSection) {
      furnitureSection.classList.remove('is-revealed');
    }
    if (window.location.hash.startsWith('#utopia')) {
      history.replaceState(null, null, ' ');
    }
  };

  window.openClimbexScreen = function(initialScroll) {
    if (window.closeAboutScreen) {
      window.closeAboutScreen();
    }
    if (window.closeLucioScreen) {
      window.closeLucioScreen();
    }
    if (window.closeDeaScreen) {
      window.closeDeaScreen();
    }
    if (window.closeUtopiaScreen) {
      window.closeUtopiaScreen();
    }
    if (window.closeNyoScreen) {
      window.closeNyoScreen();
    }
    if (window.closeArchiveScreen) {
      window.closeArchiveScreen();
    }
    if (typeof closeWorksScreen === 'function') {
      closeWorksScreen();
    }
    document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');

    // Aggiorna sottotitolo Navbar a (4) CLIMBEX
    const navProjectSub = document.getElementById('nav-project-sub');
    if (navProjectSub) {
      const numEl = navProjectSub.querySelector('.nav-sub-num');
      const nameEl = navProjectSub.querySelector('.nav-sub-name');
      if (numEl) numEl.textContent = '(4)';
      if (nameEl) nameEl.textContent = 'CLIMBEX';
    }

    document.body.classList.remove('intro-opening', 'project-nav-hidden');
    document.body.classList.add('portfolio-active', 'climbex-active');

    const screen = document.getElementById('climbex-screen');
    if (screen) {
      if (initialScroll === 'contacts') {
        const cSection = document.getElementById('climbex-contacts-section');
        screen.scrollTop = cSection ? cSection.offsetTop : 999999;
        setTimeout(() => {
          const cSec = document.getElementById('climbex-contacts-section');
          screen.scrollTop = cSec ? cSec.offsetTop : 999999;
          screen.dispatchEvent(new Event('scroll'));
        }, 100);
      } else {
        screen.scrollTop = (typeof initialScroll === 'number') ? initialScroll : 0;
      }
      setTimeout(() => {
        screen.dispatchEvent(new Event('scroll'));
      }, 50);
    }
    const titleEl = document.getElementById('climbex-active-title');
    const stickyWrap = document.querySelector('.climbex-sticky-title-wrap');
    if (titleEl) {
      titleEl.textContent = '/ BIO-INSPIRATION';
      titleEl.classList.remove('is-changing');
    }
    if (stickyWrap && (!initialScroll || initialScroll === 0)) {
      stickyWrap.classList.remove('is-visible');
    }
    const briefSection = document.querySelector('.climbex-brief-section');
    if (briefSection && (!initialScroll || initialScroll === 0)) {
      briefSection.classList.remove('is-revealed');
    }
    const conceptEditorial = document.querySelector('.climbex-card-side-editorial');
    if (conceptEditorial && (!initialScroll || initialScroll === 0)) {
      conceptEditorial.classList.remove('is-revealed');
    }
    if (!initialScroll || initialScroll === 0) {
      document.body.classList.remove('climbex-header-scrolled', 'project-nav-hidden');
    }
    const climbexVideo = document.querySelector('.climbex-concept-video');
    if (climbexVideo && climbexVideo.paused) {
      climbexVideo.play().catch(() => {});
    }
    if (typeof initMilanTime === 'function') {
      initMilanTime();
    }
  };

  window.closeClimbexScreen = function() {
    document.body.classList.remove('climbex-active', 'contacts-in-view', 'climbex-header-scrolled', 'project-nav-hidden');
    const screen = document.getElementById('climbex-screen');
    if (screen) {
      screen.scrollTop = 0;
    }
    const conceptEditorial = document.querySelector('.climbex-card-side-editorial');
    if (conceptEditorial) {
      conceptEditorial.classList.remove('is-revealed');
    }
    const climbexVideo = document.querySelector('.climbex-concept-video');
    if (climbexVideo) {
      if (!climbexVideo.paused) climbexVideo.pause();
      climbexVideo.muted = true;
      const toggleBtn = document.querySelector('.climbex-audio-toggle');
      if (toggleBtn) toggleBtn.classList.remove('is-unmuted');
    }
    if (window.location.hash.startsWith('#climbex')) {
      history.replaceState(null, null, ' ');
    }
  };

  window.openNyoScreen = function(initialScroll) {
    if (window.closeAboutScreen) {
      window.closeAboutScreen();
    }
    if (window.closeLucioScreen) {
      window.closeLucioScreen();
    }
    if (window.closeDeaScreen) {
      window.closeDeaScreen();
    }
    if (window.closeUtopiaScreen) {
      window.closeUtopiaScreen();
    }
    if (window.closeClimbexScreen) {
      window.closeClimbexScreen();
    }
    if (window.closeArchiveScreen) {
      window.closeArchiveScreen();
    }
    if (typeof closeWorksScreen === 'function') {
      closeWorksScreen();
    }
    document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');

    // Aggiorna sottotitolo Navbar a (5) NYO
    const navProjectSub = document.getElementById('nav-project-sub');
    if (navProjectSub) {
      const numEl = navProjectSub.querySelector('.nav-sub-num');
      const nameEl = navProjectSub.querySelector('.nav-sub-name');
      if (numEl) numEl.textContent = '(5)';
      if (nameEl) nameEl.textContent = 'NYO';
    }

    document.body.classList.remove('intro-opening', 'project-nav-hidden');
    document.body.classList.add('portfolio-active', 'nyo-active');

    const screen = document.getElementById('nyo-screen');
    if (screen) {
      if (initialScroll === 'contacts') {
        const cSection = document.getElementById('nyo-contacts-section');
        screen.scrollTop = cSection ? cSection.offsetTop : 999999;
        setTimeout(() => {
          const cSec = document.getElementById('nyo-contacts-section');
          screen.scrollTop = cSec ? cSec.offsetTop : 999999;
          screen.dispatchEvent(new Event('scroll'));
        }, 100);
      } else {
        screen.scrollTop = (typeof initialScroll === 'number') ? initialScroll : 0;
      }
      setTimeout(() => {
        screen.dispatchEvent(new Event('scroll'));
      }, 50);
    }
    const briefSection = document.querySelector('.nyo-brief-section');
    if (briefSection && (!initialScroll || initialScroll === 0)) {
      briefSection.classList.remove('is-revealed');
    }
    if (!initialScroll || initialScroll === 0) {
      document.body.classList.remove('nyo-header-scrolled', 'project-nav-hidden');
    }
    if (typeof initMilanTime === 'function') {
      initMilanTime();
    }
  };

  window.closeNyoScreen = function() {
    document.body.classList.remove('nyo-active', 'contacts-in-view', 'nyo-header-scrolled', 'project-nav-hidden');
    const screen = document.getElementById('nyo-screen');
    if (screen) {
      screen.scrollTop = 0;
    }
    const briefSection = document.querySelector('.nyo-brief-section');
    if (briefSection) {
      briefSection.classList.remove('is-revealed');
    }
    if (window.location.hash.startsWith('#nyo')) {
      history.replaceState(null, null, ' ');
    }
  };

  // Open Contacts Modal
  document.querySelectorAll('.open-contacts-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.closeAboutScreen) {
        window.closeAboutScreen();
      }
      if (contactsModal) {
        contactsModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close Modals
  function closeActiveModal() {
    document.querySelectorAll('.modal-overlay').forEach(m => {
      m.style.display = 'none';
    });
    document.body.style.overflow = '';
  }
  window.closeActiveModal = closeActiveModal;

  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', closeActiveModal);
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeActiveModal();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeActiveModal();
  });
}

// 4. Copy Email Handler
function initCopyEmail() {
  const copyBtns = document.querySelectorAll('.copy-email-btn');
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'lorenzomacaio@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(`COPIED: ${email}`);
      }).catch(() => {
        showToast(`EMAIL: ${email}`);
      });
    });
  });

  function showToast(msg) {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = msg;
    toast.style.display = 'flex';
    setTimeout(() => {
      toast.style.display = 'none';
    }, 2800);
  }
}

// 5. Contact Form Handler
function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('contact-submit-btn');
  if (!form || !submitBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = 'SENDING...';

    setTimeout(() => {
      submitBtn.textContent = 'MESSAGE SENT ✓';
      form.reset();
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'SEND MESSAGE';
      }, 3000);
    }, 1000);
  });
}

// 6. Milan Live Time Clock Handler & Availability Status
function initMilanTime() {
  const timeEls = document.querySelectorAll('#contacts-live-time, .contacts-live-time-span');
  const statusEls = document.querySelectorAll('.contacts-availability-status');
  if (!timeEls.length && !statusEls.length) return;

  function update() {
    let milanHour = 12;
    try {
      const now = new Date();
      const options = {
        timeZone: 'Europe/Rome',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      };
      const formatter = new Intl.DateTimeFormat([], options);
      const str = formatter.format(now);
      timeEls.forEach(el => el.textContent = str);

      const hourFormatter = new Intl.DateTimeFormat([], {
        timeZone: 'Europe/Rome',
        hour: 'numeric',
        hour12: false
      });
      milanHour = parseInt(hourFormatter.format(now), 10);
    } catch (e) {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const str = `${h}:${m}`;
      timeEls.forEach(el => el.textContent = str);
      milanHour = now.getHours();
    }

    // Dalle 8:00 alle 21:00 sarò "(CURRENTLY AVAILABLE)" e dalle 21:00 alle 8:00 sarò "(CURRENTLY OFFLINE - BACK AT 8:00 AM)"
    const isAvailable = (milanHour >= 8 && milanHour < 21);
    const statusText = isAvailable ? '(CURRENTLY AVAILABLE)' : '(CURRENTLY OFFLINE - BACK AT 8:00 AM)';
    statusEls.forEach(el => {
      el.textContent = statusText;
    });
  }

  update();
  setInterval(update, 1000);
}

// Helper condiviso per la Navbar nelle schermate progetto (2 Fasi:
// Fase 1 a metà della prima immagine -> il nome progetto sostituisce WORKS;
// Fase 2 alla fine della prima immagine -> tutta la navbar sale e scompare scorrendo giù,
// e ridiscende mostrando il nome progetto non appena si scrolla verso l'alto)
function updateProjectNavbarScroll(screen, heroSelector, headerScrolledClass, navState) {
  if (!screen) return;
  const winH = window.innerHeight || 900;
  const currentScrollTop = screen.scrollTop;
  const deltaY = currentScrollTop - (navState.lastScrollTop || 0);
  navState.lastScrollTop = currentScrollTop;

  const heroCover = screen.querySelector(heroSelector);
  if (!heroCover) return;
  const hRect = heroCover.getBoundingClientRect();

  // Fase 1: a metà della prima immagine di copertina il nome del progetto sale al posto di WORKS
  if (hRect.bottom <= winH * 0.50) {
    document.body.classList.add(headerScrolledClass);
  } else {
    document.body.classList.remove(headerScrolledClass);
  }

  // Fase 2: in corrispondenza della fine della prima immagine (dove prima saliva il titolo),
  // tutta la navbar sale e scompare scorrendo in giù; riappare scorrendo in su mostrando il nome progetto
  if (hRect.bottom <= 60) {
    if (deltaY > 1.5) {
      document.body.classList.add('project-nav-hidden');
    } else if (deltaY < -1.5) {
      document.body.classList.remove('project-nav-hidden');
    }
  } else {
    document.body.classList.remove('project-nav-hidden');
  }
}

// 6.5 Proximity Opacity Reveal per i testi descrittivi di Lucio (MECHANISM / CRUMB TRAY) e Dea (MECHANISM)
function initProximityDescriptions() {
  const cards = Array.from(document.querySelectorAll('.has-proximity-fade'));
  if (!cards.length) return;

  const PROXIMITY_RADIUS_PX = 85;

  window.addEventListener('mousemove', (e) => {
    const mx = e.clientX;
    const my = e.clientY;
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      if (!card.offsetParent) continue;
      const rect = card.getBoundingClientRect();
      if (rect.bottom < -120 || rect.top > window.innerHeight + 120) {
        if (card.classList.contains('is-near')) card.classList.remove('is-near');
        continue;
      }
      const dx = Math.max(rect.left - mx, 0, mx - rect.right);
      const dy = Math.max(rect.top - my, 0, my - rect.bottom);
      const dist = Math.hypot(dx, dy);
      if (dist <= PROXIMITY_RADIUS_PX) {
        if (!card.classList.contains('is-near')) card.classList.add('is-near');
      } else {
        if (card.classList.contains('is-near')) card.classList.remove('is-near');
      }
    }
  }, { passive: true });
}

// 7. Lucio Project Gallery Scroll, Brief Animation & Sticky Title Handler
function initLucioGallery() {
  const screen = document.getElementById('lucio-screen');
  const titleDisplay = document.getElementById('lucio-active-title');
  const stickyWrap = document.querySelector('.lucio-sticky-title-wrap');
  const briefSection = screen ? screen.querySelector('.lucio-brief-section') : null;
  const cards = screen ? screen.querySelectorAll('.lucio-gallery-section .lucio-image-card') : [];
  const contactsSection = document.getElementById('lucio-contacts-section');
  if (!screen || !titleDisplay || !cards.length) return;

  let currentTitle = '/ INTERACTION';
  let isChanging = false;
  const navState = { lastScrollTop: 0 };

  function onScroll() {
    if (!document.body.classList.contains('lucio-active')) return;

    const winH = window.innerHeight;

    // 0. Controllo transizione Navbar a 2 fasi (metà hero -> (1) LUCIO; fine hero -> scomparsa/ricomparsa)
    updateProjectNavbarScroll(screen, '.lucio-hero-fullscreen', 'lucio-header-scrolled', navState);

    // 1. Controllo visibilità sezione Contacts per invertire colori navbar
    if (contactsSection) {
      const cRect = contactsSection.getBoundingClientRect();
      if (cRect.top <= 80) {
        document.body.classList.add('contacts-in-view');
      } else {
        document.body.classList.remove('contacts-in-view');
      }
    }

    // 2. Reveal progressivo e scaglionato del testo Brief su scroll
    if (briefSection) {
      const bRect = briefSection.getBoundingClientRect();
      if (bRect.top <= winH * 0.85) {
        briefSection.classList.add('is-revealed');
      } else if (bRect.top >= winH * 0.98) {
        briefSection.classList.remove('is-revealed');
      }
    }

    // 2.1 Reveal progressivo parola per parola di "DESIGNED AS A MONOLITHIC SCULPTURE"
    const furnitureSec = screen ? screen.querySelector('.lucio-furniture-section') : null;
    if (furnitureSec) {
      const fRect = furnitureSec.getBoundingClientRect();
      if (fRect.top <= winH * 0.55) {
        furnitureSec.classList.add('is-revealed');
      } else if (fRect.top >= winH * 0.95) {
        furnitureSec.classList.remove('is-revealed');
      }
    }

    // 3. Gestione visibilità e cambio dinamico del Titolo Sticky
    // Linea orizzontale di riferimento in basso dove risiede il titolo sticky
    const firstCardRect = cards[0].getBoundingClientRect();
    const lastCardRect = cards[cards.length - 1].getBoundingClientRect();

    // Il primo titolo (/ INTERACTION) compare non appena spunta la parte iniziale superiore della prima foto
    const isFirstCardInView = (firstCardRect.top <= winH - 40);
    const isGalleryStillActive = (lastCardRect.bottom >= 100);

    if (isFirstCardInView && isGalleryStillActive) {
      if (stickyWrap) stickyWrap.classList.add('is-visible');
    } else {
      if (stickyWrap) stickyWrap.classList.remove('is-visible');
    }

    // Cambio dei titoli: scatta quando la nuova sezione raggiunge il 78% dell'altezza schermo (entrata immediata)
    const peekTriggerLine = winH * 0.78;
    let activeTitle = cards[0].getAttribute('data-title'); // default / INTERACTION

    for (let i = cards.length - 1; i >= 1; i--) {
      const cRect = cards[i].getBoundingClientRect();
      if (cRect.top <= peekTriggerLine) {
        activeTitle = cards[i].getAttribute('data-title');
        break;
      }
    }

    // Gestione Title Change scattante e fluida
    if (activeTitle && activeTitle !== currentTitle && !isChanging) {
      currentTitle = activeTitle;
      isChanging = true;
      titleDisplay.classList.add('is-changing');
      setTimeout(() => {
        titleDisplay.textContent = currentTitle;
        titleDisplay.classList.remove('is-changing');
        setTimeout(() => {
          isChanging = false;
        }, 80);
      }, 60);
    }
  }

  screen.addEventListener('scroll', onScroll, { passive: true });
}

// 8. Dea Project Gallery Scroll & Sticky Title Handler
function initDeaGallery() {
  const screen = document.getElementById('dea-screen');
  const titleDisplay = document.getElementById('dea-active-title');
  const stickyWrap = document.querySelector('.dea-sticky-title-wrap');
  const briefSection = screen ? screen.querySelector('.dea-brief-section') : null;
  const cards = screen ? screen.querySelectorAll('.dea-gallery-section .dea-image-card') : [];
  const contactsSection = document.getElementById('dea-contacts-section');
  if (!screen || !titleDisplay || !cards.length) return;

  let currentTitle = '/ AFFORDANCE';
  let isChanging = false;
  const navState = { lastScrollTop: 0 };

  function onScroll() {
    if (!document.body.classList.contains('dea-active')) return;

    const winH = window.innerHeight;

    // 0. Controllo transizione Navbar a 2 fasi (metà hero -> (2) DEA; fine hero -> scomparsa/ricomparsa)
    updateProjectNavbarScroll(screen, '.dea-hero-fullscreen', 'dea-header-scrolled', navState);

    // 1. Controllo visibilità sezione Contacts per invertire colori navbar
    if (contactsSection) {
      const cRect = contactsSection.getBoundingClientRect();
      if (cRect.top <= 80) {
        document.body.classList.add('contacts-in-view');
      } else {
        document.body.classList.remove('contacts-in-view');
      }
    }

    // 1.5 Reveal progressivo e scaglionato del testo Brief su scroll
    if (briefSection) {
      const bRect = briefSection.getBoundingClientRect();
      if (bRect.top <= winH * 0.85) {
        briefSection.classList.add('is-revealed');
      } else if (bRect.top >= winH * 0.98) {
        briefSection.classList.remove('is-revealed');
      }
    }

    // 2.1 Reveal progressivo parola per parola di "COMPLEXITY HIDDEN BEHIND A SCULPTURAL VOLUME"
    const furnitureSec = screen ? screen.querySelector('.dea-furniture-section') : null;
    if (furnitureSec) {
      const fRect = furnitureSec.getBoundingClientRect();
      if (fRect.top <= winH * 0.55) {
        furnitureSec.classList.add('is-revealed');
      } else if (fRect.top >= winH * 0.95) {
        furnitureSec.classList.remove('is-revealed');
      }
    }

    // 2.15 Gestione riproduzione, reset e silenziamento automatico del Video Assembly Dea su scroll
    const deaAssemblyWrap = screen ? screen.querySelector('.dea-assembly-video-wrap') : null;
    const deaAssemblyVideo = screen ? screen.querySelector('.dea-assembly-video') : null;
    const deaAssemblyAudioBtn = screen ? screen.querySelector('.dea-assembly-audio-toggle') : null;
    const DEA_START_OFFSET = 3.7;

    if (deaAssemblyWrap && deaAssemblyVideo) {
      const vRect = deaAssemblyWrap.getBoundingClientRect();
      const isVisible = (vRect.bottom > 0 && vRect.top < winH);
      if (isVisible) {
        if (deaAssemblyVideo.currentTime < DEA_START_OFFSET) {
          deaAssemblyVideo.currentTime = DEA_START_OFFSET;
        }
        if (deaAssemblyVideo.paused && deaAssemblyVideo.dataset.userPaused !== 'true') {
          deaAssemblyVideo.play().catch(() => {});
        }
      } else {
        if (!deaAssemblyVideo.paused) {
          deaAssemblyVideo.pause();
        }
        // Se l'utente ha scrollato oltre il video (verso il basso), resettiamo all'inizio utile (3.7s)
        if (vRect.bottom <= 0 && deaAssemblyVideo.currentTime > DEA_START_OFFSET) {
          deaAssemblyVideo.currentTime = DEA_START_OFFSET;
          deaAssemblyVideo.dataset.userPaused = '';
        }
        deaAssemblyWrap.classList.remove('is-ui-visible');
        if (!deaAssemblyVideo.muted) {
          deaAssemblyVideo.muted = true;
          if (deaAssemblyAudioBtn) {
            deaAssemblyAudioBtn.classList.remove('is-unmuted');
            deaAssemblyAudioBtn.setAttribute('aria-label', 'Attiva volume');
          }
        }
      }
    }

    // 2. Gestione visibilità e cambio dinamico del Titolo Sticky
    const firstCardRect = cards[0].getBoundingClientRect();
    const lastCardRect = cards[cards.length - 1].getBoundingClientRect();

    const isFirstCardInView = (firstCardRect.top <= winH - 40);
    const isGalleryStillActive = (lastCardRect.bottom >= 100);

    if (isFirstCardInView && isGalleryStillActive) {
      if (stickyWrap) stickyWrap.classList.add('is-visible');
    } else {
      if (stickyWrap) stickyWrap.classList.remove('is-visible');
    }

    // Cambio dei titoli: scatta quando la nuova sezione raggiunge il 78% dell'altezza schermo (entrata immediata)
    const peekTriggerLine = winH * 0.78;
    let activeTitle = cards[0].getAttribute('data-title'); // default / AFFORDANCE

    for (let i = cards.length - 1; i >= 1; i--) {
      const cRect = cards[i].getBoundingClientRect();
      if (cRect.top <= peekTriggerLine) {
        activeTitle = cards[i].getAttribute('data-title');
        break;
      }
    }

    // Gestione Title Change scattante e fluida
    if (activeTitle && activeTitle !== currentTitle && !isChanging) {
      currentTitle = activeTitle;
      isChanging = true;
      titleDisplay.classList.add('is-changing');
      setTimeout(() => {
        titleDisplay.textContent = currentTitle;
        titleDisplay.classList.remove('is-changing');
        setTimeout(() => {
          isChanging = false;
        }, 80);
      }, 60);
    }
  }

  screen.addEventListener('scroll', onScroll, { passive: true });
}

// 8.5 Utopia Project Gallery Scroll & Sticky Title Handler
function initUtopiaGallery() {
  const screen = document.getElementById('utopia-screen');
  const titleDisplay = document.getElementById('utopia-active-title');
  const stickyWrap = document.querySelector('.utopia-sticky-title-wrap');
  const briefSection = screen ? screen.querySelector('.utopia-brief-section') : null;
  const cards = screen ? screen.querySelectorAll('.utopia-gallery-section .utopia-image-card') : [];
  const contactsSection = document.getElementById('utopia-contacts-section');
  const techStage = screen ? screen.querySelector('.utopia-tech-stage') : null;
  const flyingOrtho = screen ? screen.querySelector('.utopia-tech-flying-ortho') : null;
  const techComposite = screen ? screen.querySelector('.utopia-tech-composite') : null;
  const dockedOrtho = screen ? screen.querySelector('.utopia-tech-ortho-dock') : null;

  if (!screen || !titleDisplay || !cards.length) return;

  let currentTitle = '/ SKETCHES';
  let isChanging = false;
  const navState = { lastScrollTop: 0 };

  function updateTechDocking(winH) {
    if (!flyingOrtho || !techComposite || !dockedOrtho) return;

    const flyingImg = flyingOrtho.querySelector('.utopia-tech-flying-img');
    const bgWord = flyingOrtho.querySelector('.utopia-tech-bgword');
    if (!flyingImg) return;

    // Il wrapper (sticky) non è trasformato: il suo rect è la posizione "a riposo" dell'immagine.
    const baseRect = flyingOrtho.getBoundingClientRect();
    const compRect = techComposite.getBoundingClientRect();
    const dockRect = dockedOrtho.getBoundingClientRect(); // destinazione reale (si muove con lo scroll)

    // A. FADE-IN basato sul TEMPO (visibile a qualsiasi velocità di scroll):
    // l'immagine sale ancora invisibile, e quando arriva a metà schermo si dissolve (CSS transition 1.1s).
    // Isteresi per evitare sfarfallii: rientra solo scrollando indietro oltre l'80% dello schermo.
    if (baseRect.top <= winH * 0.62) {
      flyingOrtho.classList.add('is-revealed');
    } else if (baseRect.top > winH * 0.80) {
      flyingOrtho.classList.remove('is-revealed');
    }

    // B. Progresso t dell'aggancio: parte appena l'ortogonale si stabilizza al centro
    // e si completa già al 44% dello schermo, così si gode tutta la transizione e l'aggancio.
    const dockStart = winH * 1.12;
    const dockEnd = winH * 0.44;
    const t = Math.max(0, Math.min(1, (dockStart - compRect.top) / (dockStart - dockEnd)));

    // Scritta di sfondo "UTOPIA": resta ferma al centro dietro la bici e sfuma prima che salga la tavola
    if (bgWord) {
      const k = Math.max(0, Math.min(1, (t - 0.25) / 0.50));
      bgWord.style.opacity = String(0.22 * (1 - k));
    }

    if (t >= 1) {
      // Arrivata: l'immagine volante coincide ESATTAMENTE col rettangolo del dock -> scambio istantaneo senza salti
      flyingImg.style.visibility = 'hidden';
      dockedOrtho.style.opacity = '1';
      return;
    }

    flyingImg.style.visibility = 'visible';
    dockedOrtho.style.opacity = '0';

    const startWidth = flyingImg.offsetWidth;
    if (!startWidth || !dockRect.width) return;

    // Interpolazione lineare: ogni scatto di rotella produce un avanzamento proporzionale
    // di posizione (X e Y) e dimensione verso il rettangolo di destinazione.
    const targetScale = dockRect.width / startWidth;
    const tx = (dockRect.left - baseRect.left) * t;
    const ty = (dockRect.top - baseRect.top) * t;
    const scale = 1 + (targetScale - 1) * t;

    flyingImg.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`;
  }

  function onScroll() {
    if (!document.body.classList.contains('utopia-active')) return;

    const winH = window.innerHeight;

    // 0. Controllo transizione Navbar a 2 fasi (metà hero -> (3) UTOPIA; fine hero -> scomparsa/ricomparsa)
    updateProjectNavbarScroll(screen, '.utopia-hero-fullscreen', 'utopia-header-scrolled', navState);

    // 1. Controllo visibilità sezione Contacts per invertire colori navbar
    if (contactsSection) {
      const cRect = contactsSection.getBoundingClientRect();
      if (cRect.top <= 80) {
        document.body.classList.add('contacts-in-view');
      } else {
        document.body.classList.remove('contacts-in-view');
      }
    }

    // 1.5 Reveal progressivo e scaglionato del testo Brief su scroll
    if (briefSection) {
      const bRect = briefSection.getBoundingClientRect();
      if (bRect.top <= winH * 0.85) {
        briefSection.classList.add('is-revealed');
      } else if (bRect.top >= winH * 0.98) {
        briefSection.classList.remove('is-revealed');
      }
    }

    // 2.1 Reveal progressivo parola per parola di "COMPACT MOBILITY ENGINEERED FOR THE URBAN COMMUTE"
    const furnitureSec = screen ? screen.querySelector('.utopia-furniture-section') : null;
    if (furnitureSec) {
      const fRect = furnitureSec.getBoundingClientRect();
      if (fRect.top <= winH * 0.55) {
        furnitureSec.classList.add('is-revealed');
      } else if (fRect.top >= winH * 0.95) {
        furnitureSec.classList.remove('is-revealed');
      }
    }

    // 2.2 Controllo interattivo di docking della sezione / TECHNOLOGY
    updateTechDocking(winH);

    // 2. Gestione visibilità e cambio dinamico del Titolo Sticky
    const firstCardRect = cards[0].getBoundingClientRect();
    const lastCardRect = cards[cards.length - 1].getBoundingClientRect();

    const isFirstCardInView = (firstCardRect.top <= winH - 40);
    const isGalleryStillActive = (lastCardRect.bottom >= 100);

    if (isFirstCardInView && isGalleryStillActive) {
      if (stickyWrap) stickyWrap.classList.add('is-visible');
    } else {
      if (stickyWrap) stickyWrap.classList.remove('is-visible');
    }

    // Cambio dei titoli: scatta quando la nuova sezione raggiunge il 78% dell'altezza schermo (entrata immediata)
    const peekTriggerLine = winH * 0.78;
    let activeTitle = cards[0].getAttribute('data-title'); // default / SKETCHES

    for (let i = cards.length - 1; i >= 1; i--) {
      const cRect = cards[i].getBoundingClientRect();
      if (cRect.top <= peekTriggerLine) {
        activeTitle = cards[i].getAttribute('data-title');
        break;
      }
    }

    // Gestione Title Change scattante e fluida
    if (activeTitle && activeTitle !== currentTitle && !isChanging) {
      currentTitle = activeTitle;
      isChanging = true;
      titleDisplay.classList.add('is-changing');
      setTimeout(() => {
        titleDisplay.textContent = currentTitle;
        titleDisplay.classList.remove('is-changing');
        setTimeout(() => {
          isChanging = false;
        }, 80);
      }, 60);
    }
  }

  screen.addEventListener('scroll', onScroll, { passive: true });
}

// 9. Climbex Project Gallery Scroll & Sticky Title Handler
function initClimbexGallery() {
  const screen = document.getElementById('climbex-screen');
  const titleDisplay = document.getElementById('climbex-active-title');
  const stickyWrap = document.querySelector('.climbex-sticky-title-wrap');
  const briefSection = screen ? screen.querySelector('.climbex-brief-section') : null;
  const cards = screen ? screen.querySelectorAll('.climbex-gallery-section .climbex-image-card') : [];
  const contactsSection = document.getElementById('climbex-contacts-section');
  if (!screen || !titleDisplay || !cards.length) return;

  let currentTitle = '/ BIO-INSPIRATION';
  let isChanging = false;
  const navState = { lastScrollTop: 0 };

  function onScroll() {
    if (!document.body.classList.contains('climbex-active')) return;

    const winH = window.innerHeight;

    // 0. Controllo transizione Navbar a 2 fasi (metà hero -> (4) CLIMBEX; fine hero -> scomparsa/ricomparsa)
    updateProjectNavbarScroll(screen, '.climbex-hero-fullscreen', 'climbex-header-scrolled', navState);

    // 1. Controllo visibilità sezione Contacts per invertire colori navbar
    if (contactsSection) {
      const cRect = contactsSection.getBoundingClientRect();
      if (cRect.top <= 80) {
        document.body.classList.add('contacts-in-view');
      } else {
        document.body.classList.remove('contacts-in-view');
      }
    }

    // 1.5 Reveal progressivo e scaglionato del testo Brief su scroll
    if (briefSection) {
      const bRect = briefSection.getBoundingClientRect();
      if (bRect.top <= winH * 0.85) {
        briefSection.classList.add('is-revealed');
      } else if (bRect.top >= winH * 0.98) {
        briefSection.classList.remove('is-revealed');
      }
    }

    // 1.8 Reveal progressivo parola per parola di "SHAPED BY NATURE, ENGINEERED FOR PERFORMANCE"
    const conceptEditorial = screen ? screen.querySelector('.climbex-card-side-editorial') : null;
    if (conceptEditorial) {
      const cRect = conceptEditorial.getBoundingClientRect();
      if (cRect.top <= winH * 0.75) {
        conceptEditorial.classList.add('is-revealed');
      } else if (cRect.top >= winH * 0.98) {
        conceptEditorial.classList.remove('is-revealed');
      }
    }

    // 1.9 Gestione riproduzione e silenziamento automatico del Video Climbex su scroll
    const climbexVideoWrap = screen ? screen.querySelector('.climbex-card-video-wrap') : null;
    const climbexVideo = screen ? screen.querySelector('.climbex-concept-video') : null;
    const climbexAudioBtn = screen ? screen.querySelector('.climbex-audio-toggle') : null;

    if (climbexVideoWrap && climbexVideo) {
      const vRect = climbexVideoWrap.getBoundingClientRect();
      const isVisible = (vRect.bottom > 0 && vRect.top < winH);
      if (isVisible) {
        if (climbexVideo.paused) {
          climbexVideo.play().catch(() => {});
        }
      } else {
        if (!climbexVideo.paused) {
          climbexVideo.pause();
        }
        if (!climbexVideo.muted) {
          climbexVideo.muted = true;
          if (climbexAudioBtn) {
            climbexAudioBtn.classList.remove('is-unmuted');
            climbexAudioBtn.setAttribute('aria-label', 'Attiva volume');
          }
        }
      }
    }

    // 2. Gestione visibilità e cambio dinamico del Titolo Sticky
    const firstCardRect = cards[0].getBoundingClientRect();
    const lastCardRect = cards[cards.length - 1].getBoundingClientRect();

    const isFirstCardInView = (firstCardRect.top <= winH - 40);
    const isGalleryStillActive = (lastCardRect.bottom >= 100);

    if (isFirstCardInView && isGalleryStillActive) {
      if (stickyWrap) stickyWrap.classList.add('is-visible');
    } else {
      if (stickyWrap) stickyWrap.classList.remove('is-visible');
    }

    // Cambio dei titoli: scatta quando la nuova sezione raggiunge il 78% dell'altezza schermo (entrata immediata)
    const peekTriggerLine = winH * 0.78;
    let activeTitle = cards[0].getAttribute('data-title'); // default / BIO-INSPIRATION

    for (let i = cards.length - 1; i >= 1; i--) {
      const cRect = cards[i].getBoundingClientRect();
      if (cRect.top <= peekTriggerLine) {
        activeTitle = cards[i].getAttribute('data-title');
        break;
      }
    }

    // Gestione Title Change scattante e fluida
    if (activeTitle && activeTitle !== currentTitle && !isChanging) {
      currentTitle = activeTitle;
      isChanging = true;
      titleDisplay.classList.add('is-changing');
      setTimeout(() => {
        titleDisplay.textContent = currentTitle;
        titleDisplay.classList.remove('is-changing');
        setTimeout(() => {
          isChanging = false;
        }, 80);
      }, 60);
    }
  }

  screen.addEventListener('scroll', onScroll, { passive: true });
}

// 9.5 Nyo Project Screen Scroll & Brief Animation Handler
function initNyoGallery() {
  const screen = document.getElementById('nyo-screen');
  const briefSection = screen ? screen.querySelector('.nyo-brief-section') : null;
  const contactsSection = document.getElementById('nyo-contacts-section');
  if (!screen) return;

  const navState = { lastScrollTop: 0 };

  function onScroll() {
    if (!document.body.classList.contains('nyo-active')) return;

    const winH = window.innerHeight;

    // 0. Controllo transizione Navbar a 2 fasi (metà hero -> (5) NYO; fine hero -> scomparsa/ricomparsa)
    updateProjectNavbarScroll(screen, '.nyo-hero-fullscreen', 'nyo-header-scrolled', navState);

    // 1. Controllo visibilità sezione Contacts per invertire colori navbar
    if (contactsSection) {
      const cRect = contactsSection.getBoundingClientRect();
      if (cRect.top <= 80) {
        document.body.classList.add('contacts-in-view');
      } else {
        document.body.classList.remove('contacts-in-view');
      }
    }

    // 2. Reveal progressivo e scaglionato del testo Brief su scroll
    if (briefSection) {
      const bRect = briefSection.getBoundingClientRect();
      if (bRect.top <= winH * 0.85) {
        briefSection.classList.add('is-revealed');
      } else if (bRect.top >= winH * 0.98) {
        briefSection.classList.remove('is-revealed');
      }
    }
  }

  screen.addEventListener('scroll', onScroll, { passive: true });
}

// 10. Climbex & Dea Assembly Video Audio Toggle & Timeline Scrubber Controller
function initClimbexVideo() {
  const pairs = [
    {
      video: document.querySelector('.climbex-concept-video'),
      toggleBtn: document.querySelector('#climbex-screen .climbex-audio-toggle')
    },
    {
      video: document.querySelector('.dea-assembly-video'),
      toggleBtn: document.querySelector('.dea-assembly-audio-toggle')
    }
  ];

  pairs.forEach(({ video, toggleBtn }) => {
    if (!video || !toggleBtn) return;
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (video.muted) {
        video.muted = false;
        video.volume = 1;
        video.play().catch(() => {});
        toggleBtn.classList.add('is-unmuted');
        toggleBtn.setAttribute('aria-label', 'Disattiva volume');
      } else {
        video.muted = true;
        toggleBtn.classList.remove('is-unmuted');
        toggleBtn.setAttribute('aria-label', 'Attiva volume');
      }
    });
  });

  // Timeline interattiva, Play/Pausa e Auto-Hide UI per il video Assembly di DEA
  const deaWrap = document.querySelector('.dea-assembly-video-wrap');
  const deaVideo = document.querySelector('.dea-assembly-video');
  const timeline = document.querySelector('.dea-assembly-timeline');
  const playBtn = timeline ? timeline.querySelector('.dea-timeline-play-btn') : null;
  const track = timeline ? timeline.querySelector('.dea-timeline-track') : null;
  const fill = timeline ? timeline.querySelector('.dea-timeline-fill') : null;
  const thumb = timeline ? timeline.querySelector('.dea-timeline-thumb') : null;
  const timeLabel = timeline ? timeline.querySelector('.dea-timeline-time') : null;

  if (deaWrap && deaVideo && timeline && track && fill && thumb) {
    let isScrubbing = false;
    let uiHideTimer = null;
    const UI_IDLE_HIDE_MS = 1800;

    function clearUiHideTimer() {
      if (uiHideTimer) {
        clearTimeout(uiHideTimer);
        uiHideTimer = null;
      }
    }

    function showVideoUI() {
      deaWrap.classList.add('is-ui-visible');
      clearUiHideTimer();
      if (!isScrubbing) {
        uiHideTimer = setTimeout(() => {
          if (!isScrubbing) {
            deaWrap.classList.remove('is-ui-visible');
          }
        }, UI_IDLE_HIDE_MS);
      }
    }

    function hideVideoUIImmediate() {
      clearUiHideTimer();
      if (!isScrubbing) {
        deaWrap.classList.remove('is-ui-visible');
      }
    }

    deaWrap.addEventListener('mouseenter', showVideoUI);
    deaWrap.addEventListener('mousemove', showVideoUI, { passive: true });
    deaWrap.addEventListener('pointerdown', showVideoUI);
    deaWrap.addEventListener('mouseleave', hideVideoUIImmediate);

    function syncPlayBtnState() {
      if (!playBtn) return;
      if (deaVideo.paused) {
        playBtn.classList.add('is-paused');
        playBtn.setAttribute('aria-label', 'Riproduci video');
      } else {
        playBtn.classList.remove('is-paused');
        playBtn.setAttribute('aria-label', 'Pausa video');
      }
    }

    function togglePlayPause(e) {
      if (e) {
        e.stopPropagation();
      }
      showVideoUI();
      if (deaVideo.paused) {
        deaVideo.dataset.userPaused = '';
        deaVideo.play().catch(() => {});
      } else {
        deaVideo.dataset.userPaused = 'true';
        deaVideo.pause();
      }
      syncPlayBtnState();
    }

    if (playBtn) {
      playBtn.addEventListener('click', togglePlayPause);
    }

    deaVideo.addEventListener('click', togglePlayPause);
    deaVideo.addEventListener('play', syncPlayBtnState);
    deaVideo.addEventListener('pause', syncPlayBtnState);
    syncPlayBtnState();

    const DEA_START_OFFSET = 3.7;
    const DEA_END_CUT = 59.6; // Taglia l'oscuramento nero finale

    function formatTime(sec) {
      if (!Number.isFinite(sec) || sec < 0) return '0:00';
      const total = Math.floor(sec);
      const m = Math.floor(total / 60);
      const s = String(total % 60).padStart(2, '0');
      return `${m}:${s}`;
    }

    function getEffectiveDuration() {
      const rawDur = (Number.isFinite(deaVideo.duration) && deaVideo.duration > DEA_START_OFFSET)
        ? Math.min(deaVideo.duration, DEA_END_CUT)
        : DEA_END_CUT;
      return Math.max(1, rawDur - DEA_START_OFFSET);
    }

    function getEffectiveCurrentTime() {
      const rawCur = Number.isFinite(deaVideo.currentTime) ? deaVideo.currentTime : DEA_START_OFFSET;
      return Math.max(0, Math.min(getEffectiveDuration(), rawCur - DEA_START_OFFSET));
    }

    function updateTimelineUI() {
      const dur = getEffectiveDuration();
      const cur = getEffectiveCurrentTime();
      const pct = dur > 0 ? (cur / dur) * 100 : 0;
      fill.style.width = `${pct.toFixed(2)}%`;
      thumb.style.left = `${pct.toFixed(2)}%`;
      timeline.setAttribute('aria-valuenow', String(Math.round(pct)));
      if (timeLabel) {
        timeLabel.textContent = `${formatTime(cur)} / ${formatTime(dur)}`;
      }
    }

    function seekFromClientX(clientX) {
      const rect = track.getBoundingClientRect();
      if (!rect.width) return;
      const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const effDur = getEffectiveDuration();
      const targetTime = DEA_START_OFFSET + (ratio * effDur);
      deaVideo.currentTime = targetTime;
      updateTimelineUI();
    }

    deaVideo.addEventListener('loadedmetadata', () => {
      if (deaVideo.currentTime < DEA_START_OFFSET) {
        deaVideo.currentTime = DEA_START_OFFSET;
      }
      updateTimelineUI();
    });

    deaVideo.addEventListener('timeupdate', () => {
      // Loop morbido prima della schermata nera finale (59.6s)
      if (deaVideo.currentTime >= DEA_END_CUT) {
        deaVideo.currentTime = DEA_START_OFFSET;
      }
      if (!isScrubbing) {
        updateTimelineUI();
      }
    });

    track.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      isScrubbing = true;
      timeline.classList.add('is-scrubbing');
      showVideoUI();
      if (track.setPointerCapture) {
        try { track.setPointerCapture(e.pointerId); } catch (_) {}
      }
      seekFromClientX(e.clientX);
    });

    track.addEventListener('pointermove', (e) => {
      if (!isScrubbing) return;
      e.preventDefault();
      seekFromClientX(e.clientX);
    });

    function endScrub(e) {
      if (!isScrubbing) return;
      isScrubbing = false;
      timeline.classList.remove('is-scrubbing');
      if (e && track.releasePointerCapture) {
        try { track.releasePointerCapture(e.pointerId); } catch (_) {}
      }
      updateTimelineUI();
      showVideoUI();
    }

    track.addEventListener('pointerup', endScrub);
    track.addEventListener('pointercancel', endScrub);
  }
}

// 11. Navigazione Diretta Progetto Precedente / Successivo (Fine Schermata Progetto)
function initProjectEndNav() {
  const navButtons = document.querySelectorAll('.project-nav-btn[data-target-project]');
  if (!navButtons.length) return;

  let navResetTimer = null;

  function syncProjectEndNavArrows() {
    navButtons.forEach((btn) => {
      const titleRow = btn.querySelector('.pnav-title-row');
      const arrow = btn.querySelector('.pnav-arrow-svg');
      if (!titleRow || !arrow) return;

      const w = titleRow.getBoundingClientRect().width;
      if (w <= 0) return;

      const h = arrow.getBoundingClientRect().height || 22;
      const cy = h / 2;
      const triH = Math.max(12, h - 2);
      const triHalf = triH / 2;
      const headL = +(triH * 0.85).toFixed(2);
      const stemHalf = +((triH * 0.255) / 2).toFixed(2);

      const yTop = +(cy - triHalf).toFixed(2);
      const yBot = +(cy + triHalf).toFixed(2);
      const sTop = +(cy - stemHalf).toFixed(2);
      const sBot = +(cy + stemHalf).toFixed(2);
      const wFixed = +w.toFixed(2);
      const cyFixed = +cy.toFixed(2);

      arrow.style.width = `${wFixed}px`;
      arrow.setAttribute('viewBox', `0 0 ${wFixed} ${+h.toFixed(2)}`);

      if (btn.classList.contains('project-nav-prev')) {
        arrow.innerHTML = `<path d="M 0 ${cyFixed} L ${headL} ${yTop} L ${headL} ${sTop} L ${wFixed} ${sTop} L ${wFixed} ${sBot} L ${headL} ${sBot} L ${headL} ${yBot} Z" fill="#000000" />`;
      } else {
        const baseX = +(wFixed - headL).toFixed(2);
        arrow.innerHTML = `<path d="M ${wFixed} ${cyFixed} L ${baseX} ${yTop} L ${baseX} ${sTop} L 0 ${sTop} L 0 ${sBot} L ${baseX} ${sBot} L ${baseX} ${yBot} Z" fill="#000000" />`;
      }
    });
  }

  syncProjectEndNavArrows();
  window.addEventListener('resize', syncProjectEndNavArrows);
  if (window.ResizeObserver) {
    const titleRo = new ResizeObserver(() => {
      syncProjectEndNavArrows();
    });
    navButtons.forEach((btn) => {
      const titleRow = btn.querySelector('.pnav-title-row');
      if (titleRow) titleRo.observe(titleRow);
    });
  }
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      syncProjectEndNavArrows();
      setTimeout(syncProjectEndNavArrows, 120);
    });
  }
  window.syncProjectEndNavArrows = syncProjectEndNavArrows;

  function getActiveProjectScreen() {
    if (document.body.classList.contains('lucio-active')) return document.getElementById('lucio-screen');
    if (document.body.classList.contains('dea-active')) return document.getElementById('dea-screen');
    if (document.body.classList.contains('utopia-active')) return document.getElementById('utopia-screen');
    if (document.body.classList.contains('climbex-active')) return document.getElementById('climbex-screen');
    if (document.body.classList.contains('nyo-active')) return document.getElementById('nyo-screen');
    return null;
  }

  function getTargetProjectConfig(id) {
    switch (String(id)) {
      case '1': return { screen: document.getElementById('lucio-screen'), open: window.openLucioScreen };
      case '2': return { screen: document.getElementById('dea-screen'), open: window.openDeaScreen };
      case '3': return { screen: document.getElementById('utopia-screen'), open: window.openUtopiaScreen };
      case '4': return { screen: document.getElementById('climbex-screen'), open: window.openClimbexScreen };
      case '5': return { screen: document.getElementById('nyo-screen'), open: window.openNyoScreen };
      default: return null;
    }
  }

  navButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-target-project');
      const targetCfg = getTargetProjectConfig(targetId);
      if (!targetCfg || typeof targetCfg.open !== 'function') return;

      const outgoingScreen = getActiveProjectScreen();
      const incomingScreen = targetCfg.screen;
      const savedScrollTop = outgoingScreen ? outgoingScreen.scrollTop : 0;

      if (navResetTimer) {
        clearTimeout(navResetTimer);
        navResetTimer = null;
      }
      if (window.contactsMotion) {
        window.contactsMotion.resetAll();
      }

      if (outgoingScreen) outgoingScreen.style.zIndex = '25';
      if (incomingScreen) incomingScreen.style.zIndex = '26';

      targetCfg.open(0);

      // Mantiene ferma la schermata uscente durante la dissolvenza incrociata (evita salti in alto)
      if (outgoingScreen && outgoingScreen !== incomingScreen) {
        outgoingScreen.scrollTop = savedScrollTop;
      }

      btn.blur();

      navResetTimer = setTimeout(() => {
        if (outgoingScreen && outgoingScreen !== incomingScreen) {
          outgoingScreen.scrollTop = 0;
          outgoingScreen.style.zIndex = '';
        }
        if (incomingScreen) {
          incomingScreen.style.zIndex = '';
        }
        navResetTimer = null;
      }, 430);
    });
  });
}

// 12. Fisica & Movimento Sezione CONTACTS:
//     - Click su CONTACTS in Navbar -> fiondata super veloce + bounce elastico automatico accentuato
//     - Arrivo naturale via scroll -> nessun bounce automatico; overscroll a fine pagina -> elastico stile smartphone
function initContactsMotion() {
  const stateMap = new Map();
  let slingRafId = null;
  let slinging = false;

  const MAX_OVERSCROLL_PX = 46;
  const WHEEL_RELEASE_DELAY_MS = 130;

  const pairs = [
    { screenId: 'about-screen', drawerId: 'contacts-section' },
    { screenId: 'lucio-screen', drawerId: 'lucio-contacts-section' },
    { screenId: 'dea-screen', drawerId: 'dea-contacts-section' },
    { screenId: 'utopia-screen', drawerId: 'utopia-contacts-section' },
    { screenId: 'climbex-screen', drawerId: 'climbex-contacts-section' },
    { screenId: 'nyo-screen', drawerId: 'nyo-contacts-section' }
  ];

  function getState(drawer) {
    let st = stateMap.get(drawer);
    if (!st) {
      st = {
        offset: 0,
        velocity: 0,
        targetOffset: 0,
        rawPull: 0,
        mode: 'idle',
        rafId: null,
        lastTs: 0,
        releaseTimer: null
      };
      stateMap.set(drawer, st);
    }
    return st;
  }

  function applyOffset(drawer, val) {
    if (!drawer) return;
    drawer.style.setProperty('--contacts-offset', `${val.toFixed(2)}px`);
  }

  function resetDrawer(drawer) {
    if (!drawer) return;
    const st = getState(drawer);
    if (st.rafId) {
      cancelAnimationFrame(st.rafId);
      st.rafId = null;
    }
    if (st.releaseTimer) {
      clearTimeout(st.releaseTimer);
      st.releaseTimer = null;
    }
    st.offset = 0;
    st.velocity = 0;
    st.targetOffset = 0;
    st.rawPull = 0;
    st.mode = 'idle';
    st.lastTs = 0;
    applyOffset(drawer, 0);
  }

  function cancelSling() {
    if (slingRafId) {
      cancelAnimationFrame(slingRafId);
      slingRafId = null;
    }
    slinging = false;
  }

  function resetAll() {
    cancelSling();
    pairs.forEach(({ drawerId }) => {
      const el = document.getElementById(drawerId);
      if (el) resetDrawer(el);
    });
  }

  function ensurePhysicsLoop(drawer) {
    const st = getState(drawer);
    if (st.rafId) return;
    st.lastTs = performance.now();

    function tick(now) {
      const rawDt = (now - st.lastTs) / 1000;
      st.lastTs = now;
      const dt = Math.min(0.032, Math.max(0.001, rawDt));

      if (st.mode === 'arrival-bounce') {
        // Molla sottosmorzata accentuata: spinta verso l'alto all'impatto e rimbalzi elastici a smorzamento naturale
        const k = 210;
        const c = 11.2;
        const subDt = dt * 0.5;
        for (let i = 0; i < 2; i++) {
          const acc = -k * st.offset - c * st.velocity;
          st.velocity += acc * subDt;
          st.offset += st.velocity * subDt;
        }
        applyOffset(drawer, st.offset);

        if (Math.abs(st.offset) < 0.18 && Math.abs(st.velocity) < 2.0) {
          st.rafId = null;
          resetDrawer(drawer);
          return;
        }
        st.rafId = requestAnimationFrame(tick);
        return;
      }

      if (st.mode === 'overscroll-pull') {
        // Resistenza progressiva fluida mentre si continua a scrollare oltre il limite inferiore
        const alpha = 1 - Math.exp(-22 * dt);
        st.offset += (st.targetOffset - st.offset) * alpha;
        applyOffset(drawer, st.offset);
        st.rafId = requestAnimationFrame(tick);
        return;
      }

      if (st.mode === 'overscroll-return') {
        // Ritorno elastico morbido stile smartphone appena cessa lo scroll
        const k = 190;
        const c = 15.2;
        const subDt = dt * 0.5;
        for (let i = 0; i < 2; i++) {
          const acc = -k * st.offset - c * st.velocity;
          st.velocity += acc * subDt;
          st.offset += st.velocity * subDt;
        }
        applyOffset(drawer, st.offset);

        if (Math.abs(st.offset) < 0.15 && Math.abs(st.velocity) < 1.8) {
          st.rafId = null;
          resetDrawer(drawer);
          return;
        }
        st.rafId = requestAnimationFrame(tick);
        return;
      }

      st.rafId = null;
    }

    st.rafId = requestAnimationFrame(tick);
  }

  function triggerArrivalBounce(drawer, boost = 1) {
    if (!drawer) return;
    resetDrawer(drawer);
    const st = getState(drawer);
    st.mode = 'arrival-bounce';
    st.offset = 0;
    st.velocity = -1560 * boost;
    ensurePhysicsLoop(drawer);
  }

  function releaseOverscroll(drawer) {
    if (!drawer) return;
    const st = getState(drawer);
    if (st.releaseTimer) {
      clearTimeout(st.releaseTimer);
      st.releaseTimer = null;
    }
    if (st.mode === 'overscroll-pull') {
      st.rawPull = 0;
      st.targetOffset = 0;
      st.mode = 'overscroll-return';
      ensurePhysicsLoop(drawer);
    }
  }

  function feedOverscroll(drawer, deltaY, isTouch = false) {
    if (!drawer || slinging) return false;
    const st = getState(drawer);
    if (st.mode === 'arrival-bounce') return false;

    if (deltaY < 0) {
      if (st.rawPull > 0) {
        st.rawPull = Math.max(0, st.rawPull + deltaY * 0.65);
        st.targetOffset = -MAX_OVERSCROLL_PX * (1 - Math.exp(-st.rawPull / 105));
        if (!isTouch) {
          if (st.releaseTimer) clearTimeout(st.releaseTimer);
          if (st.rawPull === 0) {
            releaseOverscroll(drawer);
          } else {
            st.releaseTimer = setTimeout(() => {
              st.releaseTimer = null;
              releaseOverscroll(drawer);
            }, WHEEL_RELEASE_DELAY_MS);
          }
        }
        ensurePhysicsLoop(drawer);
        return true;
      }
      return false;
    }

    if (deltaY > 0) {
      st.mode = 'overscroll-pull';
      st.velocity = 0;
      st.rawPull = Math.min(520, st.rawPull + deltaY * 0.44);
      st.targetOffset = -MAX_OVERSCROLL_PX * (1 - Math.exp(-st.rawPull / 105));

      if (st.releaseTimer) {
        clearTimeout(st.releaseTimer);
        st.releaseTimer = null;
      }
      if (!isTouch) {
        st.releaseTimer = setTimeout(() => {
          st.releaseTimer = null;
          releaseOverscroll(drawer);
        }, WHEEL_RELEASE_DELAY_MS);
      }
      ensurePhysicsLoop(drawer);
      return true;
    }

    return false;
  }

  function isOverscrolling(drawer) {
    if (!drawer) return false;
    const st = stateMap.get(drawer);
    return Boolean(st && (st.rawPull > 0.5 || (st.mode === 'overscroll-pull' && st.offset < -0.5)));
  }

  function slingToContacts(scrollEl, drawerEl, onStep) {
    if (!scrollEl || !drawerEl) return;
    cancelSling();
    resetDrawer(drawerEl);

    const startScroll = scrollEl.scrollTop;
    const getMaxScroll = () => Math.max(0, scrollEl.scrollHeight - scrollEl.clientHeight);
    const initialMax = getMaxScroll();
    const distance = initialMax - startScroll;

    if (distance <= 32) {
      scrollEl.scrollTop = initialMax;
      if (typeof onStep === 'function') onStep(initialMax);
      scrollEl.dispatchEvent(new Event('scroll'));
      triggerArrivalBounce(drawerEl, 1);
      return;
    }

    slinging = true;
    const duration = Math.min(410, Math.max(250, 215 + distance * 0.020));
    const startTs = performance.now();

    function step(now) {
      const t = Math.min(1, Math.max(0, (now - startTs) / duration));
      // Curva ad alta spinta che atterra sul fondo mantenendo velocità cinetica reale (p'(1) = 0.85)
      const p = t * t * (2.15 - 1.15 * t);
      const liveMax = getMaxScroll();
      const nextScroll = t >= 1 ? liveMax : (startScroll + (liveMax - startScroll) * p);

      scrollEl.scrollTop = nextScroll;
      if (typeof onStep === 'function') onStep(nextScroll);
      scrollEl.dispatchEvent(new Event('scroll'));

      if (t < 1) {
        slingRafId = requestAnimationFrame(step);
      } else {
        slingRafId = null;
        slinging = false;
        const boost = Math.min(1.16, Math.max(0.95, 0.92 + distance / 18000));
        triggerArrivalBounce(drawerEl, boost);
      }
    }

    slingRafId = requestAnimationFrame(step);
  }

  // Supporto touch overscroll sui contenitori scorrevoli (smartphone / tablet)
  pairs.forEach(({ screenId, drawerId }) => {
    const screenEl = document.getElementById(screenId);
    const drawerEl = document.getElementById(drawerId);
    if (!screenEl || !drawerEl) return;

    let lastTouchY = null;

    screenEl.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches.length === 1) {
        lastTouchY = e.touches[0].clientY;
      }
    }, { passive: true });

    screenEl.addEventListener('touchmove', (e) => {
      if (lastTouchY === null || !e.touches || e.touches.length !== 1) return;
      if (slinging) {
        if (e.cancelable) e.preventDefault();
        return;
      }
      const currentY = e.touches[0].clientY;
      const dy = lastTouchY - currentY; // dy > 0 = trascinamento verso l'alto (scroll giù oltre il fondo)
      lastTouchY = currentY;

      const maxScroll = Math.max(0, screenEl.scrollHeight - screenEl.clientHeight);
      const atBottom = maxScroll > 0 && screenEl.scrollTop >= maxScroll - 3;

      if ((atBottom && dy > 0) || (isOverscrolling(drawerEl) && dy < 0)) {
        if (e.cancelable) e.preventDefault();
        if (screenEl.scrollTop < maxScroll) {
          screenEl.scrollTop = maxScroll;
        }
        feedOverscroll(drawerEl, dy * 1.35, true);
      }
    }, { passive: false });

    const endTouch = () => {
      lastTouchY = null;
      releaseOverscroll(drawerEl);
    };
    screenEl.addEventListener('touchend', endTouch, { passive: true });
    screenEl.addEventListener('touchcancel', endTouch, { passive: true });
  });

  window.contactsMotion = {
    slingToContacts,
    triggerArrivalBounce,
    feedOverscroll,
    releaseOverscroll,
    isOverscrolling,
    isSlinging: () => slinging,
    resetDrawer,
    resetAll
  };
}

// 13. Sezione ARCHIVE (6 colonne, rotazione asincrona ~4s una alla volta con altezza variabile, freeze + reveal su hover)
function initArchiveScreen() {
  const archiveScreen = document.getElementById('archive-screen');
  if (!archiveScreen) return;

  const projectCols = Array.from(archiveScreen.querySelectorAll('.archive-col-project[data-archive-project]'));
  const moreCol = archiveScreen.querySelector('.archive-col-more');
  const moreText = archiveScreen.querySelector('.archive-more-text');
  const longestWord = archiveScreen.querySelector('.archive-more-longest');

  const INITIAL_RATIOS = [0.54, 0.67, 0.55, 0.48, 0.61];
  let rotationTimer = null;
  let lastSwitchedIdx = -1;

  const cards = projectCols.map((col, idx) => {
    const mediaBox = col.querySelector('.archive-media-box');
    const imgs = Array.from(col.querySelectorAll('.archive-img'));
    const projectId = parseInt(col.getAttribute('data-archive-project'), 10);
    return {
      idx,
      projectId,
      col,
      mediaBox,
      imgs,
      activeImgIdx: 0,
      currentHeightPx: 0,
      isHovered: false
    };
  });

  function getSafeHeightBounds() {
    const winH = window.innerHeight || 900;
    const maxH = Math.max(230, Math.min(Math.round(winH * 0.68), winH - 185));
    const minH = Math.min(maxH - 64, Math.max(190, Math.round(winH * 0.40)));
    return { minH, maxH };
  }

  function fitMoreProjectsWidth() {
    if (!moreCol || !moreText || !longestWord) return;
    const colW = moreCol.clientWidth;
    if (!colW || colW < 40) return;

    const computedFs = parseFloat(getComputedStyle(longestWord).fontSize) || 32;
    const measuredW = longestWord.getBoundingClientRect().width;
    if (!measuredW || measuredW < 5) return;

    let targetFs = computedFs * ((colW - 0.5) / measuredW);
    moreText.style.setProperty('--archive-more-fs', `${targetFs.toFixed(2)}px`);

    // Micro-raffinitura di precisione al sub-pixel
    const recheckW = longestWord.getBoundingClientRect().width;
    if (recheckW > 5 && Math.abs(recheckW - (colW - 0.5)) > 0.6) {
      targetFs = targetFs * ((colW - 0.5) / recheckW);
      moreText.style.setProperty('--archive-more-fs', `${targetFs.toFixed(2)}px`);
    }
  }

  function applyInitialLayout() {
    const { minH, maxH } = getSafeHeightBounds();
    const winH = window.innerHeight || 900;
    cards.forEach((card, i) => {
      card.isHovered = false;
      card.col.classList.remove('is-hovered');
      card.mediaBox.classList.add('is-frozen');
      const rawH = Math.round(winH * (INITIAL_RATIOS[i] || 0.54));
      const clampedH = Math.max(minH, Math.min(maxH, rawH));
      card.currentHeightPx = clampedH;
      card.mediaBox.style.height = `${clampedH}px`;
      card.activeImgIdx = 0;
      card.imgs.forEach((img, imgIdx) => {
        img.classList.toggle('is-active', imgIdx === 0);
      });
    });

    requestAnimationFrame(() => {
      cards.forEach((card) => {
        if (!card.isHovered) card.mediaBox.classList.remove('is-frozen');
      });
      fitMoreProjectsWidth();
    });
  }

  function pickDistinctHeight(card) {
    const { minH, maxH } = getSafeHeightBounds();
    const span = Math.max(40, maxH - minH);
    const minDelta = Math.min(62, span * 0.36);
    const leftNeighbor = cards[card.idx - 1];
    const rightNeighbor = cards[card.idx + 1];

    for (let attempt = 0; attempt < 28; attempt++) {
      const candidate = Math.round(minH + Math.random() * span);
      if (Math.abs(candidate - card.currentHeightPx) < minDelta) continue;
      if (leftNeighbor && Math.abs(candidate - leftNeighbor.currentHeightPx) < 18) continue;
      if (rightNeighbor && Math.abs(candidate - rightNeighbor.currentHeightPx) < 18) continue;
      return candidate;
    }

    const mid = (minH + maxH) * 0.5;
    if (card.currentHeightPx >= mid) {
      return Math.round(minH + Math.random() * (span * 0.34));
    }
    return Math.round(maxH - Math.random() * (span * 0.34));
  }

  function stopRotation() {
    if (rotationTimer) {
      clearTimeout(rotationTimer);
      rotationTimer = null;
    }
  }

  function scheduleNextSwitch(customDelayMs) {
    stopRotation();
    const delay = typeof customDelayMs === 'number'
      ? customDelayMs
      : Math.round(3800 + Math.random() * 450);

    rotationTimer = setTimeout(() => {
      rotationTimer = null;
      if (!document.body.classList.contains('archive-active')) return;

      if (!document.body.classList.contains('works-active')) {
        let candidates = cards.filter(c => !c.isHovered);
        if (candidates.length > 1 && lastSwitchedIdx !== -1) {
          candidates = candidates.filter(c => c.idx !== lastSwitchedIdx);
        }

        if (candidates.length > 0) {
          const chosen = candidates[Math.floor(Math.random() * candidates.length)];
          lastSwitchedIdx = chosen.idx;

          const nextH = pickDistinctHeight(chosen);
          chosen.currentHeightPx = nextH;
          chosen.mediaBox.classList.remove('is-frozen');
          chosen.mediaBox.style.height = `${nextH}px`;

          if (chosen.imgs.length > 1) {
            chosen.activeImgIdx = (chosen.activeImgIdx + 1) % chosen.imgs.length;
            chosen.imgs.forEach((img, i) => {
              img.classList.toggle('is-active', i === chosen.activeImgIdx);
            });
          }
        }
      }

      scheduleNextSwitch();
    }, delay);
  }

  function openProjectFromArchive(projectId) {
    switch (projectId) {
      case 1:
        if (window.openLucioScreen) window.openLucioScreen(0);
        break;
      case 2:
        if (window.openDeaScreen) window.openDeaScreen(0);
        break;
      case 3:
        if (window.openUtopiaScreen) window.openUtopiaScreen(0);
        break;
      case 4:
        if (window.openClimbexScreen) window.openClimbexScreen(0);
        break;
      case 5:
        if (window.openNyoScreen) window.openNyoScreen(0);
        break;
    }
  }

  cards.forEach((card) => {
    card.col.addEventListener('mouseenter', () => {
      card.isHovered = true;
      const liveH = card.mediaBox.getBoundingClientRect().height;
      if (liveH > 0) {
        card.currentHeightPx = liveH;
        card.mediaBox.classList.add('is-frozen');
        card.mediaBox.style.height = `${liveH.toFixed(1)}px`;
      } else {
        card.mediaBox.classList.add('is-frozen');
      }
      card.col.classList.add('is-hovered');
    });

    card.col.addEventListener('mouseleave', () => {
      card.isHovered = false;
      card.col.classList.remove('is-hovered');
      requestAnimationFrame(() => {
        if (!card.isHovered) {
          card.mediaBox.classList.remove('is-frozen');
        }
      });
    });

    card.col.addEventListener('click', (e) => {
      e.preventDefault();
      openProjectFromArchive(card.projectId);
    });

    card.col.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProjectFromArchive(card.projectId);
      }
    });
  });

  function openArchiveScreen() {
    if (document.body.classList.contains('lucio-active') && window.closeLucioScreen) window.closeLucioScreen();
    if (document.body.classList.contains('dea-active') && window.closeDeaScreen) window.closeDeaScreen();
    if (document.body.classList.contains('utopia-active') && window.closeUtopiaScreen) window.closeUtopiaScreen();
    if (document.body.classList.contains('climbex-active') && window.closeClimbexScreen) window.closeClimbexScreen();
    if (document.body.classList.contains('nyo-active') && window.closeNyoScreen) window.closeNyoScreen();
    if (document.body.classList.contains('about-active') && window.closeAboutScreen) window.closeAboutScreen();

    document.body.classList.remove('intro-opening', 'works-active', 'works-closing');
    document.body.classList.add('portfolio-active', 'archive-active');
    document.documentElement.style.setProperty('--p-intro', '1');
    document.documentElement.style.setProperty('--p-intro-alpha', '0');
    document.documentElement.style.setProperty('--p-nav-alpha', '1');

    lastSwitchedIdx = -1;
    applyInitialLayout();
    scheduleNextSwitch();
  }

  function closeArchiveScreen() {
    stopRotation();
    cards.forEach((card) => {
      card.isHovered = false;
      card.col.classList.remove('is-hovered');
      card.mediaBox.classList.remove('is-frozen');
    });
    document.body.classList.remove('archive-active');
    if (window.location.hash === '#archive') {
      history.replaceState(null, null, ' ');
    }
  }

  if (moreCol && window.ResizeObserver) {
    const ro = new ResizeObserver(() => {
      if (document.body.classList.contains('archive-active')) {
        fitMoreProjectsWidth();
      }
    });
    ro.observe(moreCol);
  }

  window.addEventListener('resize', () => {
    if (!document.body.classList.contains('archive-active')) return;
    const { minH, maxH } = getSafeHeightBounds();
    cards.forEach((card) => {
      if (!card.isHovered) {
        const clamped = Math.max(minH, Math.min(maxH, card.currentHeightPx));
        card.currentHeightPx = clamped;
        card.mediaBox.style.height = `${clamped}px`;
      }
    });
    fitMoreProjectsWidth();
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      if (document.body.classList.contains('archive-active')) {
        fitMoreProjectsWidth();
      }
    });
  }

  window.openArchiveScreen = openArchiveScreen;
  window.closeArchiveScreen = closeArchiveScreen;
}

// 13. Custom Right-Edge Proximity Scrollbar
function initCustomEdgeScrollbar() {
  const scrollbarEl = document.getElementById('custom-edge-scrollbar');
  const thumbEl = document.getElementById('custom-scrollbar-thumb');
  if (!scrollbarEl || !thumbEl) return;

  const EDGE_PROXIMITY_PX = 44;
  const HIDE_DELAY_MS = 3000;
  const TOP_PAD = 12;
  const BOTTOM_PAD = 12;

  let isVisible = false;
  let isHoveringThumb = false;
  let isDragging = false;
  let hideTimer = null;
  let dragStartY = 0;
  let dragStartProgress = 0;

  const scrollableScreens = [
    document.getElementById('lucio-screen'),
    document.getElementById('dea-screen'),
    document.getElementById('utopia-screen'),
    document.getElementById('climbex-screen'),
    document.getElementById('nyo-screen'),
    document.getElementById('about-screen'),
    document.getElementById('archive-screen')
  ].filter(Boolean);

  function getActiveScrollContext() {
    const b = document.body;
    if (b.classList.contains('lucio-active')) {
      return { type: 'element', el: document.getElementById('lucio-screen') };
    }
    if (b.classList.contains('dea-active')) {
      return { type: 'element', el: document.getElementById('dea-screen') };
    }
    if (b.classList.contains('utopia-active')) {
      return { type: 'element', el: document.getElementById('utopia-screen') };
    }
    if (b.classList.contains('climbex-active')) {
      return { type: 'element', el: document.getElementById('climbex-screen') };
    }
    if (b.classList.contains('nyo-active')) {
      return { type: 'element', el: document.getElementById('nyo-screen') };
    }
    if (b.classList.contains('about-active')) {
      return { type: 'about', el: document.getElementById('about-screen') };
    }
    if (b.classList.contains('archive-active')) {
      const arch = document.getElementById('archive-screen');
      if (arch && arch.scrollHeight > arch.clientHeight + 4) {
        return { type: 'element', el: arch };
      }
      return null;
    }
    if (b.classList.contains('portfolio-active')) {
      return { type: 'home' };
    }
    return null;
  }

  function getCurrentProgress() {
    const ctx = getActiveScrollContext();
    if (!ctx) return 0;

    if (ctx.type === 'home') {
      if (window.__portfolioScrollBridge) {
        return window.__portfolioScrollBridge.getHomeProgress();
      }
      return 0;
    }

    const el = ctx.el;
    if (!el) return 0;
    const maxScroll = Math.max(0, el.scrollHeight - el.clientHeight);
    if (maxScroll <= 0) return 0;
    return Math.max(0, Math.min(1, el.scrollTop / maxScroll));
  }

  function setScrollProgress(p) {
    const clamped = Math.max(0, Math.min(1, p));
    const ctx = getActiveScrollContext();
    if (!ctx) return;

    if (ctx.type === 'home') {
      if (window.__portfolioScrollBridge) {
        window.__portfolioScrollBridge.setHomeProgress(clamped);
      }
      return;
    }

    const el = ctx.el;
    if (!el) return;
    const maxScroll = Math.max(0, el.scrollHeight - el.clientHeight);
    const targetTop = clamped * maxScroll;

    if (ctx.type === 'about' && window.__portfolioScrollBridge) {
      window.__portfolioScrollBridge.setAboutScrollTop(targetTop);
    } else {
      el.scrollTop = targetTop;
    }
  }

  function getTravelHeight() {
    const trackH = scrollbarEl.clientHeight || window.innerHeight;
    const thumbH = thumbEl.offsetHeight || 38;
    return Math.max(1, trackH - TOP_PAD - BOTTOM_PAD - thumbH);
  }

  function updateThumbPosition() {
    const progress = getCurrentProgress();
    const travel = getTravelHeight();
    const y = TOP_PAD + progress * travel;
    thumbEl.style.setProperty('--thumb-y', `${y.toFixed(2)}px`);
  }

  function clearHideTimer() {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
  }

  function hideScrollbarNow() {
    clearHideTimer();
    isVisible = false;
    isHoveringThumb = false;
    isDragging = false;
    scrollbarEl.classList.remove('is-visible');
    thumbEl.classList.remove('is-thumb-active', 'is-dragging');
  }

  function scheduleHide(delayMs = HIDE_DELAY_MS) {
    clearHideTimer();
    hideTimer = setTimeout(() => {
      if (!isDragging && !isHoveringThumb) {
        isVisible = false;
        scrollbarEl.classList.remove('is-visible');
        thumbEl.classList.remove('is-thumb-active', 'is-dragging');
      }
    }, delayMs);
  }

  function showScrollbar() {
    const ctx = getActiveScrollContext();
    if (!ctx) {
      if (isVisible) hideScrollbarNow();
      return;
    }
    updateThumbPosition();
    if (!isVisible) {
      isVisible = true;
      scrollbarEl.classList.add('is-visible');
    }
  }

  // Rilevamento prossimita al margine destro con il cursore del mouse
  window.addEventListener('mousemove', (e) => {
    if (isDragging) return;
    const nearRightEdge = e.clientX >= (window.innerWidth - EDGE_PROXIMITY_PX);

    if (nearRightEdge) {
      showScrollbar();
      if (!isHoveringThumb) {
        scheduleHide(HIDE_DELAY_MS);
      }
    } else if (isVisible && !isHoveringThumb && !hideTimer) {
      scheduleHide(HIDE_DELAY_MS);
    }
  }, { passive: true });

  // Interazione Hover sulla pillola
  thumbEl.addEventListener('mouseenter', () => {
    isHoveringThumb = true;
    thumbEl.classList.add('is-thumb-active');
    showScrollbar();
    clearHideTimer();
  });

  thumbEl.addEventListener('mouseleave', () => {
    isHoveringThumb = false;
    if (!isDragging) {
      // Immediatamente la dimensione e il colore della pillolina tornano quelli iniziali
      thumbEl.classList.remove('is-thumb-active');
      // Dopo 3 secondi la scroll bar sparisce
      scheduleHide(HIDE_DELAY_MS);
    }
  });

  // Trascinamento (Drag) della pillola
  thumbEl.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    e.preventDefault();
    e.stopPropagation();

    isDragging = true;
    dragStartY = e.clientY;
    dragStartProgress = getCurrentProgress();

    thumbEl.classList.add('is-thumb-active', 'is-dragging');
    showScrollbar();
    clearHideTimer();

    if (thumbEl.setPointerCapture) {
      try { thumbEl.setPointerCapture(e.pointerId); } catch (_) {}
    }
  });

  // Click diretto sulla linea verticale per saltare e trascinare
  scrollbarEl.addEventListener('pointerdown', (e) => {
    if (e.target === thumbEl || thumbEl.contains(e.target)) return;
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    e.preventDefault();
    e.stopPropagation();

    const thumbH = thumbEl.offsetHeight || 38;
    const travel = getTravelHeight();
    const targetY = e.clientY - TOP_PAD - (thumbH / 2);
    const nextProgress = Math.max(0, Math.min(1, targetY / travel));

    setScrollProgress(nextProgress);
    updateThumbPosition();

    isDragging = true;
    dragStartY = e.clientY;
    dragStartProgress = nextProgress;

    thumbEl.classList.add('is-thumb-active', 'is-dragging');
    showScrollbar();
    clearHideTimer();

    if (thumbEl.setPointerCapture) {
      try { thumbEl.setPointerCapture(e.pointerId); } catch (_) {}
    }
  });

  window.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const dy = e.clientY - dragStartY;
    const travel = getTravelHeight();
    const nextProgress = Math.max(0, Math.min(1, dragStartProgress + (dy / travel)));
    setScrollProgress(nextProgress);
    updateThumbPosition();
  });

  function endDrag(e) {
    if (!isDragging) return;
    isDragging = false;
    thumbEl.classList.remove('is-dragging');

    if (e && thumbEl.releasePointerCapture) {
      try { thumbEl.releasePointerCapture(e.pointerId); } catch (_) {}
    }

    const rect = thumbEl.getBoundingClientRect();
    const pointerStillOnThumb = Boolean(
      e &&
      typeof e.clientX === 'number' &&
      e.clientX >= rect.left - 6 &&
      e.clientX <= rect.right + 6 &&
      e.clientY >= rect.top - 4 &&
      e.clientY <= rect.bottom + 4
    );

    isHoveringThumb = pointerStillOnThumb;

    if (!isHoveringThumb) {
      // Immediatamente la dimensione e il colore della pillolina tornano quelli iniziali
      thumbEl.classList.remove('is-thumb-active');
      // Dopo 3 secondi la scroll bar sparisce
      scheduleHide(HIDE_DELAY_MS);
    }
  }

  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointercancel', endDrag);

  scrollableScreens.forEach((screenEl) => {
    screenEl.addEventListener('scroll', () => {
      updateThumbPosition();
    }, { passive: true });
  });

  window.addEventListener('resize', () => {
    updateThumbPosition();
  });

  window.updateCustomEdgeScrollbar = updateThumbPosition;
}





