/* OUDSUDWAN Theme — app.js */
(function () {
  'use strict';

  /* ── Header height CSS var ── */
  function setH() {
    var h = document.getElementById('site-header');
    if (h) document.documentElement.style.setProperty('--header-h', h.offsetHeight + 'px');
  }
  setH();
  window.addEventListener('resize', setH);

  /* ── Mobile menu ── */
  var toggle  = document.getElementById('mobile-menu-toggle');
  var menu    = document.getElementById('mobile-menu');
  var iconO   = document.getElementById('icon-open');
  var iconC   = document.getElementById('icon-close');

  function openMenu() {
    menu && menu.classList.remove('hidden');
    iconO && iconO.classList.add('hidden');
    iconC && iconC.classList.remove('hidden');
    toggle && toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
    setH();
    if (menu) menu.style.top = document.documentElement.style.getPropertyValue('--header-h');
  }
  function closeMenu() {
    menu && menu.classList.add('hidden');
    iconO && iconO.classList.remove('hidden');
    iconC && iconC.classList.add('hidden');
    toggle && toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      menu && menu.classList.contains('hidden') ? openMenu() : closeMenu();
    });
    document.addEventListener('click', function (e) {
      if (toggle && menu && !toggle.contains(e.target) && !menu.contains(e.target)) closeMenu();
    });
  }

  /* ── Mobile categories accordion ── */
  var catToggle = document.getElementById('mob-cat-toggle');
  var catSub    = document.getElementById('mob-cat-sub');
  var catArrow  = document.getElementById('mob-cat-arrow');
  if (catToggle && catSub) {
    catToggle.addEventListener('click', function () {
      var closed = catSub.classList.toggle('hidden');
      if (catArrow) catArrow.style.transform = closed ? '' : 'rotate(180deg)';
    });
  }

  /* ── Search toggle ── */
  var searchBtn = document.getElementById('search-toggle');
  var searchBar = document.getElementById('search-bar');
  if (searchBtn && searchBar) {
    searchBtn.addEventListener('click', function () {
      searchBar.classList.toggle('hidden');
      if (!searchBar.classList.contains('hidden')) {
        var inp = searchBar.querySelector('input, salla-search');
        if (inp) setTimeout(function () { inp.focus(); }, 80);
      }
    });
    document.addEventListener('click', function (e) {
      if (!searchBtn.contains(e.target) && !searchBar.contains(e.target)) {
        searchBar.classList.add('hidden');
      }
    });
  }

  /* ── Sticky header shadow ── */
  var header = document.getElementById('site-header');
  if (header) {
    var topBar = document.querySelector('#site-header > div:first-child');
    window.addEventListener('scroll', function () {
      var s = window.scrollY > 50;
      header.classList.toggle('scrolled', s);
      if (topBar && topBar.style !== undefined) topBar.style.maxHeight = s ? '0' : '';
    }, { passive: true });
  }

  /* ── Back to top ── */
  var btt = document.getElementById('back-to-top');
  if (btt) {
    window.addEventListener('scroll', function () {
      btt.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    btt.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Scroll reveal ── */
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
  }

  /* ── Announcement bar ── */
  var ann = document.getElementById('announcement-bar');
  if (ann && sessionStorage.getItem('ann_closed') === '1') ann.remove();

})();
