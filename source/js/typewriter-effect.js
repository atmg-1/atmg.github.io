// 首页打字机效果 — 每次返回首页时播放
(function() {
  'use strict';

  // 判断是否是首页
  function isHomePage() {
    const path = window.location.pathname.replace(/\/$/, '');
    const root = '/atmg.github.io';
    return path === root || path === root + '/index.html' || path === '';
  }

  function showTypewriter() {
    const loading = document.createElement('div');
    loading.id = 'typewriter-loading';
    loading.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:#060E1A;z-index:999999;display:flex;align-items:center;justify-content:center;overflow:hidden;';

    loading.innerHTML = `
      <div style="text-align:center;padding:30px;">
        <div style="display:flex;align-items:center;justify-content:center;">
          <span id="tw-text" style="color:#00E5FF;font-size:3em;font-family:'Segoe UI',sans-serif;font-weight:300;letter-spacing:4px;text-shadow:0 0 20px rgba(0,229,255,0.8),0 0 40px rgba(41,121,255,0.4);"></span>
          <span style="display:inline-block;width:4px;height:1.2em;background:#2979FF;margin-left:8px;box-shadow:0 0 10px #2979FF;animation:tw-blink 1s infinite;vertical-align:middle;"></span>
        </div>
      </div>
    `;

    // 光标动画
    const style = document.createElement('style');
    style.textContent = '@keyframes tw-blink{0%,100%{opacity:1}50%{opacity:0}}';
    document.head.appendChild(style);

    document.body.insertBefore(loading, document.body.firstChild);
    document.body.style.overflow = 'hidden';

    const text = '叶同学的博客';
    const el = document.getElementById('tw-text');
    let i = 0;

    function typeChar() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(typeChar, Math.random() * 60 + 40);
      } else {
        // 打完字停留一会再淡出
        setTimeout(fadeOut, 800);
      }
    }

    function fadeOut() {
      loading.style.pointerEvents = 'none';
      loading.style.transition = 'opacity 0.8s ease-out';
      loading.style.opacity = '0';
      setTimeout(() => {
        loading.style.display = 'none';
        document.body.style.overflow = '';
      }, 800);
    }

    typeChar();
  }

  document.addEventListener('DOMContentLoaded', function() {
    if (isHomePage()) {
      showTypewriter();
    }
  });
})();
