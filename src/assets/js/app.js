/* OUDSUDWAN Theme — app.js */
(function () {
  'use strict';

  /* ── Set header height CSS variable (for mobile menu top offset) ── */
  function setHeaderHeight() {
    const h = document.getElementById('site-header');
    if (h) document.documentElement.style.setProperty('--header-height', h.offsetHeight + 'px');
  }
  setHeaderHeight();
  window.addEventListener('resize', setHeaderHeight);

  /* ── Mobile menu ── */
  const menuToggle  = document.getElementById('mobile-menu-toggle');
  const mobileMenu  = document.getElementById('mobile-menu');
  const iconBurger  = document.getElementById('icon-burger');
  const iconClose   = document.getElementById('icon-close');

  function openMenu() {
    mobileMenu.classList.remove('hidden');
    iconBurger && iconBurger.classList.add('hidden');
    iconClose  && iconClose.classList.remove('hidden');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
    setHeaderHeight();
    mobileMenu.style.top = document.documentElement.style.getPropertyValue('--header-height');
  }

  function closeMenu() {
    mobileMenu.classList.add('hidden');
    iconBurger && iconBurger.classList.remove('hidden');
    iconClose  && iconClose.classList.add('hidden');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.contains('hidden') ? openMenu() : closeMenu();
    });
    document.addEventListener('click', e => {
      if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) closeMenu();
    });
  }

  /* ── Mobile collection accordion ── */
  const collectionToggle  = document.getElementById('mobile-collection-toggle');
  const collectionSubmenu = document.getElementById('mobile-collection-submenu');
  const collectionArrow   = document.getElementById('mobile-collection-arrow');

  if (collectionToggle && collectionSubmenu) {
    collectionToggle.addEventListener('click', () => {
      const closed = collectionSubmenu.classList.toggle('hidden');
      if (collectionArrow) collectionArrow.style.transform = closed ? '' : 'rotate(180deg)';
    });
  }

  /* ── Search bar slide-down ── */
  const searchToggle = document.getElementById('search-toggle');
  const searchBar    = document.getElementById('search-bar');

  if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', () => {
      const hidden = searchBar.classList.toggle('hidden');
      if (!hidden) {
        const inp = searchBar.querySelector('input, salla-search');
        if (inp) setTimeout(() => inp.focus(), 80);
      }
    });
    // Close search when clicking outside
    document.addEventListener('click', e => {
      if (!searchToggle.contains(e.target) && !searchBar.contains(e.target)) {
        searchBar.classList.add('hidden');
      }
    });
  }

  /* ── Sticky header shadow on scroll ── */
  const header = document.getElementById('site-header');
  if (header) {
    const topBar = document.getElementById('top-bar');
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY > 60;
      header.classList.toggle('scrolled', scrolled);
      // Hide top bar on scroll to save space
      if (topBar) topBar.style.maxHeight = scrolled ? '0' : '';
    }, { passive: true });
  }

  /* ── Back to top ── */
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ── Scroll reveal ── */
  if ('IntersectionObserver' in window) {
    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }});
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
  }

  /* ── Active nav link highlight ── */
  const path = window.location.pathname;
  document.querySelectorAll('.nav-link, a[href]').forEach(link => {
    try {
      const href = new URL(link.href, window.location.origin).pathname;
      if (href !== '/' && path.startsWith(href)) link.classList.add('text-gold');
    } catch (_) {}
  });

  /* ── Announcement bar: remember dismissal in session ── */
  const bar = document.getElementById('announcement-bar');
  if (bar) {
    if (sessionStorage.getItem('ann_dismissed') === '1') bar.remove();
    const btn = bar && bar.querySelector('button');
    if (btn) btn.addEventListener('click', () => sessionStorage.setItem('ann_dismissed', '1'));
  }

  /* ── Lazy images ── */
  if ('IntersectionObserver' in window) {
    const imgObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const img = e.target;
          if (img.dataset.src) { img.src = img.dataset.src; delete img.dataset.src; }
          imgObs.unobserve(img);
        }
      });
    }, { rootMargin: '300px' });
    document.querySelectorAll('img[data-src]').forEach(img => imgObs.observe(img));
  }

})();
