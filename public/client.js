(function () {
  'use strict';

  /* ---------- Header: scroll bg + mobile drawer ---------- */
  var header = document.getElementById('siteHeader');
  var burger = document.getElementById('burger');
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 8);
    var st = document.getElementById('scrollTop');
    if (st) {
      var y = window.scrollY;
      var docH = document.documentElement.scrollHeight;
      var viewH = window.innerHeight;
      var distFromBottom = docH - (y + viewH);
      var show = y > Math.min(500, viewH * 0.6) && distFromBottom > 240;
      st.classList.toggle('visible', show);
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  if (burger && header) {
    burger.addEventListener('click', function () {
      var open = header.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (o) { o.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ---------- Servizi: pill + tile switching ---------- */
  function activateService(id) {
    document.querySelectorAll('[data-serv-pill]').forEach(function (p) {
      p.classList.toggle('active', p.getAttribute('data-serv-pill') === id);
    });
    document.querySelectorAll('[data-serv-tile]').forEach(function (p) {
      p.classList.toggle('active', p.getAttribute('data-serv-tile') === id);
    });
    document.querySelectorAll('[data-serv-panel]').forEach(function (p) {
      p.classList.toggle('active', p.getAttribute('data-serv-panel') === id);
    });
  }
  document.querySelectorAll('[data-serv-pill],[data-serv-tile]').forEach(function (el) {
    el.addEventListener('click', function () {
      var id = el.getAttribute('data-serv-pill') || el.getAttribute('data-serv-tile');
      activateService(id);
      var panels = document.querySelector('.serv-detail');
      if (el.hasAttribute('data-serv-tile') && panels) {
        panels.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  // Deep link: /servizi/#tributario
  if (document.querySelector('[data-serv-pill]')) {
    var hash = (location.hash || '').replace('#', '');
    if (hash) activateService(hash);
  }

  /* ---------- Event poster modal ---------- */
  var overlay = document.getElementById('posterOverlay');
  if (overlay) {
    function openPoster(id) {
      var tpl = document.getElementById('poster-' + id);
      var slot = overlay.querySelector('[data-poster-slot]');
      if (!tpl || !slot) return;
      slot.innerHTML = tpl.innerHTML;
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closePoster() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
    document.querySelectorAll('[data-poster-open]').forEach(function (btn) {
      btn.addEventListener('click', function () { openPoster(btn.getAttribute('data-poster-open')); });
    });
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay || e.target.closest('[data-poster-close]')) closePoster();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closePoster();
    });
  }

  /* ---------- Cookie consent ---------- */
  var STORAGE_KEY = 'micieli-cookie-consent-v1';
  var banner = document.getElementById('cookieBanner');
  var modal = document.getElementById('cookieModal');
  function loadConsent() {
    try { var raw = localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) : null; }
    catch (e) { return null; }
  }
  function saveConsent(c) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ necessary: true, analytics: !!c.analytics, ts: Date.now() })); }
    catch (e) {}
  }
  var root = document.documentElement;
  function syncBannerOffset() {
    if (banner && banner.classList.contains('show')) {
      root.style.setProperty('--cookie-h', banner.offsetHeight + 'px');
      root.classList.add('cookie-active');
    } else {
      root.classList.remove('cookie-active');
    }
  }
  function hideBanner() { if (banner) banner.classList.remove('show'); syncBannerOffset(); }
  function openModal() {
    var current = loadConsent();
    var t = modal && modal.querySelector('[data-analytics-toggle]');
    if (t) t.setAttribute('aria-checked', current && current.analytics ? 'true' : 'false');
    if (modal) modal.classList.add('show');
  }
  function closeModal() { if (modal) modal.classList.remove('show'); }

  if (!loadConsent() && banner) banner.classList.add('show');
  syncBannerOffset();
  window.addEventListener('resize', syncBannerOffset);

  document.querySelectorAll('[data-cookie-settings]').forEach(function (b) {
    b.addEventListener('click', openModal);
  });
  document.querySelectorAll('[data-cookie-accept]').forEach(function (b) {
    b.addEventListener('click', function () { saveConsent({ analytics: true }); hideBanner(); closeModal(); });
  });
  document.querySelectorAll('[data-cookie-reject]').forEach(function (b) {
    b.addEventListener('click', function () { saveConsent({ analytics: false }); hideBanner(); closeModal(); });
  });
  document.querySelectorAll('[data-cookie-cancel]').forEach(function (b) {
    b.addEventListener('click', closeModal);
  });
  document.querySelectorAll('[data-cookie-save]').forEach(function (b) {
    b.addEventListener('click', function () {
      var t = modal && modal.querySelector('[data-analytics-toggle]');
      var on = t && t.getAttribute('aria-checked') === 'true';
      saveConsent({ analytics: on }); hideBanner(); closeModal();
    });
  });
  var analyticsToggle = modal && modal.querySelector('[data-analytics-toggle]');
  if (analyticsToggle) {
    analyticsToggle.addEventListener('click', function () {
      var on = analyticsToggle.getAttribute('aria-checked') === 'true';
      analyticsToggle.setAttribute('aria-checked', on ? 'false' : 'true');
    });
  }
  if (modal) {
    modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
  }
})();
