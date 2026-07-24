// 首页打字机 — 仅首页，圆润顺滑
(function () {
  'use strict';

  function isHomePage() {
    var path = window.location.pathname.replace(/\/+$/, '') || '/';
    return (
      path === '' ||
      path === '/' ||
      path === '/index.html' ||
      path === '/atmg.github.io' ||
      path === '/atmg.github.io/index.html' ||
      /\/atmg\.github\.io\/?$/.test(path)
    );
  }

  function showTypewriter() {
    if (document.getElementById('typewriter-loading')) return;

    var loading = document.createElement('div');
    loading.id = 'typewriter-loading';
    loading.style.cssText =
      'position:fixed;inset:0;z-index:999999;display:flex;align-items:center;justify-content:center;' +
      'overflow:hidden;background:radial-gradient(ellipse at center,#0d1b33 0%,#060E1A 70%);' +
      'opacity:0;transition:opacity 0.45s cubic-bezier(0.22,1,0.36,1);';

    loading.innerHTML =
      '<div style="text-align:center;padding:30px;transform:translateY(8px);opacity:0;' +
      'transition:transform 0.5s cubic-bezier(0.22,1,0.36,1),opacity 0.5s cubic-bezier(0.22,1,0.36,1);">' +
      '<div style="display:inline-flex;align-items:center;justify-content:center;' +
      'padding:18px 28px;border-radius:999px;background:rgba(41,121,255,0.06);' +
      'border:1px solid rgba(41,121,255,0.12);backdrop-filter:blur(8px);">' +
      '<span id="tw-text" style="color:#E8F0FE;font-size:clamp(1.7rem,4.8vw,2.8rem);' +
      "font-family:'Segoe UI',system-ui,sans-serif;font-weight:300;letter-spacing:0.18em;" +
      'text-shadow:0 0 28px rgba(41,121,255,0.3);"></span>' +
      '<span style="display:inline-block;width:3px;height:1.1em;background:#2979FF;' +
      'margin-left:10px;border-radius:2px;box-shadow:0 0 12px #2979FF;' +
      'animation:tw-blink 1s infinite;vertical-align:middle;"></span>' +
      '</div>' +
      '<div style="margin-top:20px;color:rgba(232,240,254,0.4);font-size:0.85rem;' +
      'letter-spacing:0.32em;font-weight:300;">EXPLORE · CREATE · IMAGINE</div>' +
      '</div>';

    var style = document.createElement('style');
    style.textContent =
      '@keyframes tw-blink{0%,100%{opacity:1}50%{opacity:0}}' +
      '@media (prefers-reduced-motion:reduce){#typewriter-loading{transition:none!important}}';
    document.head.appendChild(style);

    document.body.insertBefore(loading, document.body.firstChild);
    document.body.style.overflow = 'hidden';

    // 入场
    requestAnimationFrame(function () {
      loading.style.opacity = '1';
      var inner = loading.firstElementChild;
      if (inner) {
        inner.style.opacity = '1';
        inner.style.transform = 'translateY(0)';
      }
    });

    var text = '叶同学的博客';
    var el = document.getElementById('tw-text');
    var i = 0;

    function typeChar() {
      if (!el) return;
      if (i < text.length) {
        el.textContent += text.charAt(i++);
        setTimeout(typeChar, 42 + Math.random() * 35);
      } else {
        setTimeout(fadeOut, 650);
      }
    }

    function fadeOut() {
      loading.style.pointerEvents = 'none';
      var inner = loading.firstElementChild;
      if (inner) {
        inner.style.opacity = '0';
        inner.style.transform = 'translateY(-6px)';
      }
      loading.style.opacity = '0';
      setTimeout(function () {
        if (loading.parentNode) loading.parentNode.removeChild(loading);
        document.body.style.overflow = '';
      }, 480);
    }

    setTimeout(typeChar, 280);
  }

  function boot() {
    if (isHomePage()) showTypewriter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  document.addEventListener('swup:page:view', boot);
  document.addEventListener('pjax:complete', boot);
})();
