// 增强版UI交互和动画效果
document.addEventListener('DOMContentLoaded', function() {
  // 初始化所有增强功能
  initEnhancedUI();
  initInteractiveElements();
  initVisualEffects();
  initAccessibilityFeatures();
});

// 初始化增强UI功能
function initEnhancedUI() {
  // 创建全局通知系统
  createNotificationSystem();
  
  // 创建浮动操作按钮
  createFloatingActionButton();
  
  // 添加页面加载动画
  addPageLoadAnimation();
  
  // 创建个性化问候
  createPersonalGreeting();
}

// 创建全局通知系统
function createNotificationSystem() {
  // 创建通知容器
  let notificationContainer = document.querySelector('.notification-container');
  if (!notificationContainer) {
    notificationContainer = document.createElement('div');
    notificationContainer.className = 'notification-container';
    notificationContainer.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      z-index: 10000;
      max-width: 350px;
    `;
    document.body.appendChild(notificationContainer);
  }
  
  // 添加通知方法到window对象
  window.showNotification = function(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-message">${message}</span>
        <button class="notification-close">&times;</button>
      </div>
    `;
    
    notificationContainer.appendChild(notification);
    
    // 自动移除通知
    setTimeout(() => {
      notification.remove();
    }, 5000);
    
    // 绑定关闭事件
    notification.querySelector('.notification-close').addEventListener('click', function() {
      notification.remove();
    });
  };
}

// 创建浮动操作按钮
function createFloatingActionButton() {
  const fab = document.createElement('div');
  fab.className = 'fab-container';
  fab.innerHTML = `
    <button class="fab-main">+</button>
    <div class="fab-menu">
      <button class="fab-item" title="夜间模式" data-action="toggle-night">🌙</button>
      <button class="fab-item" title="搜索" data-action="open-search">🔍</button>
      <button class="fab-item" title="回到顶部" data-action="scroll-top">👆</button>
      <button class="fab-item" title="分享" data-action="share">📤</button>
    </div>
  `;
  
  fab.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 9997;
  `;
  
  document.body.appendChild(fab);
  
  // 主按钮点击事件
  const mainBtn = fab.querySelector('.fab-main');
  const menu = fab.querySelector('.fab-menu');
  let isOpen = false;
  
  mainBtn.addEventListener('click', function(e) {
    e.preventDefault();
    isOpen = !isOpen;
    if (isOpen) {
      menu.style.display = 'flex';
      mainBtn.textContent = '×';
      mainBtn.classList.add('fab-open');
    } else {
      menu.style.display = 'none';
      mainBtn.textContent = '+';
      mainBtn.classList.remove('fab-open');
    }
  });
  
  // 子按钮事件
  fab.querySelectorAll('.fab-item').forEach(item => {
    item.addEventListener('click', function() {
      const action = this.getAttribute('data-action');
      switch(action) {
        case 'toggle-night':
          toggleNightMode();
          break;
        case 'open-search':
          openSearchModal();
          break;
        case 'scroll-top':
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'share':
          sharePage();
          break;
      }
      
      // 关闭菜单
      menu.style.display = 'none';
      mainBtn.textContent = '+';
      mainBtn.classList.remove('fab-open');
      isOpen = false;
    });
  });
  
  // 添加FAB样式
  const fabStyle = document.createElement('style');
  fabStyle.textContent = `
    .fab-container {
      position: relative;
    }
    
    .fab-main {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(45deg, #0ff, #f0f);
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(0, 200, 255, 0.4);
      transition: all 0.3s ease;
      z-index: 9998;
    }
    
    .fab-main:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 25px rgba(0, 200, 255, 0.6);
    }
    
    .fab-open {
      background: linear-gradient(45deg, #ff4757, #ff3838);
    }
    
    .fab-menu {
      position: absolute;
      bottom: 60px;
      right: 0;
      display: none;
      flex-direction: column;
      gap: 10px;
      align-items: flex-end;
    }
    
    .fab-item {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: none;
      background: rgba(0, 200, 255, 0.9);
      color: white;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(0, 200, 255, 0.4);
      transition: all 0.2s ease;
      font-size: 18px;
    }
    
    .fab-item:hover {
      transform: scale(1.15);
      box-shadow: 0 6px 20px rgba(0, 200, 255, 0.6);
    }
  `;
  document.head.appendChild(fabStyle);
}

// 添加页面加载动画
function addPageLoadAnimation() {
  // 添加页面进入动画
  const pageElements = document.querySelectorAll('body > *, .post-block, .post-header, .post-body, .post-footer, .sidebar, .header');
  pageElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    // 设置延迟动画
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, index * 100);
  });
}

// 创建个性化问候
function createPersonalGreeting() {
  const hours = new Date().getHours();
  let greeting = '';
  
  if (hours < 12) greeting = '上午好';
  else if (hours < 14) greeting = '中午好';
  else if (hours < 18) greeting = '下午好';
  else if (hours < 22) greeting = '晚上好';
  else greeting = '夜深了';
  
  // 尝试在合适的位置添加问候
  let greetingEl = document.querySelector('.personal-greeting');
  if (!greetingEl) {
    greetingEl = document.createElement('div');
    greetingEl.className = 'personal-greeting';
    greetingEl.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.8);
      color: #0ff;
      padding: 20px 40px;
      border-radius: 15px;
      font-size: 24px;
      z-index: 10001;
      border: 2px solid rgba(0, 200, 255, 0.5);
      backdrop-filter: blur(10px);
      opacity: 0;
      transition: opacity 1s ease;
    `;
    greetingEl.textContent = `${greeting}！欢迎访问我的博客`;
    document.body.appendChild(greetingEl);
    
    // 淡入效果
    setTimeout(() => {
      greetingEl.style.opacity = '1';
    }, 500);
    
    // 3秒后淡出
    setTimeout(() => {
      greetingEl.style.opacity = '0';
      setTimeout(() => {
        greetingEl.remove();
      }, 1000);
    }, 3000);
  }
}

// 初始化交互元素
function initInteractiveElements() {
  // 添加按钮悬停效果
  enhanceButtons();
  
  // 添加卡片悬停效果
  enhanceCards();
  
  // 添加链接增强效果
  enhanceLinks();
  
  // 添加滚动视差效果
  initParallaxEffect();
}

// 增强按钮效果
function enhanceButtons() {
  const buttons = document.querySelectorAll('button, .btn, .nav-item a, .pagination a');
  buttons.forEach(btn => {
    if (!btn.classList.contains('enhanced')) {
      btn.classList.add('enhanced');
      btn.addEventListener('mouseenter', function(e) {
        createRippleEffect(e, this);
      });
    }
  });
}

// 波纹效果
function createRippleEffect(e, element) {
  const ripple = document.createElement('span');
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;
  
  ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    background: radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
    z-index: 1;
  `;
  
  element.style.overflow = 'hidden';
  element.style.position = 'relative';
  
  element.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// 添加波纹动画样式
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  @keyframes ripple-animation {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
`;
document.head.appendChild(rippleStyle);

// 增强卡片效果
function enhanceCards() {
  const cards = document.querySelectorAll('.post-block, .card, .article, .post');
  cards.forEach(card => {
    if (!card.classList.contains('enhanced-card')) {
      card.classList.add('enhanced-card');
      card.addEventListener('mousemove', handleCardMouseMove);
      card.addEventListener('mouseleave', handleCardMouseLeave);
    }
  });
}

// 卡片悬停效果
function handleCardMouseMove(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const angleY = (x - centerX) / 25;
  const angleX = (centerY - y) / 25;
  
  card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.03, 1.03, 1.03)`;
  card.style.boxShadow = `0 20px 40px rgba(0, 200, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)`;
}

// 卡片离开效果
function handleCardMouseLeave(e) {
  const card = e.currentTarget;
  card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
}

// 增强链接效果
function enhanceLinks() {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    if (!link.classList.contains('enhanced-link')) {
      link.classList.add('enhanced-link');
      link.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(to right, currentColor 0%, currentColor 100%)';
        this.style.backgroundRepeat = 'no-repeat';
        this.style.backgroundSize = '0% 2px';
        this.style.backgroundPosition = '0 100%';
        this.style.transition = 'background-size 0.3s ease';
        
        setTimeout(() => {
          this.style.backgroundSize = '100% 2px';
        }, 1);
      });
      
      link.addEventListener('mouseleave', function() {
        this.style.backgroundSize = '0% 2px';
      });
    }
  });
}

// 视觉效果初始化
function initVisualEffects() {
  // 创建粒子系统
  createParticleSystem();
  
  // 添加鼠标轨迹效果
  addMouseTrailEffect();
  
  // 创建浮动气泡效果
  createFloatingBubbles();
}

// 创建粒子系统
function createParticleSystem() {
  const particleSystem = document.createElement('div');
  particleSystem.className = 'particle-system';
  particleSystem.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
  `;
  
  // 创建多个粒子
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle-enhanced';
    particle.style.cssText = `
      position: absolute;
      width: 2px;
      height: 2px;
      background: #0ff;
      border-radius: 50%;
      opacity: 0.7;
    `;
    
    // 随机初始位置
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // 随机动画
    const duration = 10 + Math.random() * 20;
    const delay = Math.random() * 5;
    particle.style.animation = `float-particle ${duration}s linear infinite`;
    
    particleSystem.appendChild(particle);
  }
  
  document.body.appendChild(particleSystem);
  
  // 添加粒子动画样式
  const particleStyle = document.createElement('style');
  particleStyle.textContent = `
    @keyframes float-particle {
      0% {
        transform: translate(0, 0);
        opacity: 0.7;
      }
      25% {
        transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
        opacity: 0.4;
      }
      50% {
        transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
        opacity: 0.2;
      }
      75% {
        transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
        opacity: 0.5;
      }
      100% {
        transform: translate(0, 0);
        opacity: 0.7;
      }
    }
  `;
  document.head.appendChild(particleStyle);
}

// 鼠标轨迹效果
function addMouseTrailEffect() {
  let mouseX = 0;
  let mouseY = 0;
  let trailX = 0;
  let trailY = 0;
  
  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // 创建轨迹点
  setInterval(() => {
    if (mouseX !== trailX || mouseY !== trailY) {
      createTrailPoint(mouseX, mouseY);
      trailX = mouseX;
      trailY = mouseY;
    }
  }, 100);
}

// 创建轨迹点
function createTrailPoint(x, y) {
  const trailPoint = document.createElement('div');
  trailPoint.className = 'trail-point';
  trailPoint.style.cssText = `
    position: fixed;
    left: ${x}px;
    top: ${y}px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(0, 255, 255, 0.6);
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    animation: trail-fade 1s forwards;
  `;
  
  document.body.appendChild(trailPoint);
  
  setTimeout(() => {
    trailPoint.remove();
  }, 1000);
}

// 添加轨迹动画样式
const trailStyle = document.createElement('style');
trailStyle.textContent = `
  @keyframes trail-fade {
    0% {
      width: 8px;
      height: 8px;
      opacity: 1;
    }
    100% {
      width: 20px;
      height: 20px;
      opacity: 0;
    }
  }
`;
document.head.appendChild(trailStyle);

// 创建浮动气泡效果
function createFloatingBubbles() {
  const bubbleContainer = document.createElement('div');
  bubbleContainer.className = 'bubble-container';
  bubbleContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
  `;
  
  // 创建多个气泡
  for (let i = 0; i < 15; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = 10 + Math.random() * 20;
    bubble.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0, 255, 255, 0.2), transparent);
      left: ${Math.random() * 100}%;
      top: 100%;
      animation: float-bubble ${15 + Math.random() * 15}s linear infinite;
      animation-delay: ${Math.random() * 5}s;
    `;
    
    bubbleContainer.appendChild(bubble);
  }
  
  document.body.appendChild(bubbleContainer);
  
  // 添加气泡动画样式
  const bubbleStyle = document.createElement('style');
  bubbleStyle.textContent = `
    @keyframes float-bubble {
      0% {
        transform: translateY(0) translateX(0);
        opacity: 0;
      }
      10% {
        opacity: 0.4;
      }
      90% {
        opacity: 0.3;
      }
      100% {
        transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(bubbleStyle);
}

// 辅助功能初始化
function initAccessibilityFeatures() {
  // 添加键盘导航提示
  addKeyboardNavigationHint();
  
  // 添加焦点指示器
  addFocusIndicator();
}

// 键盘导航提示
function addKeyboardNavigationHint() {
  // 检测键盘使用
  let isUsingKeyboard = false;
  
  document.addEventListener('keydown', function() {
    isUsingKeyboard = true;
  });
  
  document.addEventListener('mousedown', function() {
    isUsingKeyboard = false;
  });
  
  // 为键盘用户提供更好的焦点样式
  if (isUsingKeyboard) {
    const focusStyle = document.createElement('style');
    focusStyle.textContent = `
      a:focus, button:focus, input:focus, textarea:focus, select:focus, div[tabindex]:focus {
        outline: 2px solid #0ff !important;
        outline-offset: 2px !important;
        border-radius: 4px !important;
      }
    `;
    document.head.appendChild(focusStyle);
  }
}

// 焦点指示器
function addFocusIndicator() {
  // 添加全局焦点样式
  const focusStyle = document.createElement('style');
  focusStyle.textContent = `
    .focus-indicator {
      position: relative;
    }
    
    .focus-indicator:focus::after {
      content: '';
      position: absolute;
      top: -3px;
      left: -3px;
      right: -3px;
      bottom: -3px;
      border: 2px solid #0ff;
      border-radius: inherit;
      pointer-events: none;
    }
  `;
  document.head.appendChild(focusStyle);
}

// 全局函数
function toggleNightMode() {
  const body = document.body;
  body.classList.toggle('night-mode');
  
  // 保存用户选择
  localStorage.setItem('nightMode', body.classList.contains('night-mode'));
  
  // 显示通知
  if (typeof showNotification !== 'undefined') {
    showNotification(body.classList.contains('night-mode') ? '已切换到夜间模式' : '已切换到白天模式', 'success');
  }
}

function sharePage() {
  const pageUrl = window.location.href;
  const pageTitle = document.title;
  
  if (navigator.share) {
    navigator.share({
      title: pageTitle,
      url: pageUrl
    }).catch(console.error);
  } else {
    // 复制到剪贴板
    navigator.clipboard.writeText(`${pageTitle}\n${pageUrl}`).then(() => {
      if (typeof showNotification !== 'undefined') {
        showNotification('链接已复制到剪贴板', 'success');
      }
    });
  }
}

// 添加全局样式
const globalStyles = document.createElement('style');
globalStyles.textContent = `
  /* 增强的通知样式 */
  .notification-container {
    position: fixed;
    top: 80px;
    right: 20px;
    z-index: 10000;
    max-width: 350px;
  }
  
  .notification {
    margin-bottom: 10px;
    padding: 15px 20px;
    border-radius: 8px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation: slideInRight 0.3s ease;
    backdrop-filter: blur(10px);
  }
  
  .notification-info {
    background: rgba(0, 100, 200, 0.9);
    border: 1px solid rgba(0, 200, 255, 0.3);
  }
  
  .notification-success {
    background: rgba(0, 180, 0, 0.9);
    border: 1px solid rgba(0, 255, 0, 0.3);
  }
  
  .notification-warning {
    background: rgba(200, 150, 0, 0.9);
    border: 1px solid rgba(255, 200, 0, 0.3);
  }
  
  .notification-error {
    background: rgba(200, 0, 0, 0.9);
    border: 1px solid rgba(255, 0, 0, 0.3);
  }
  
  .notification-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  
  .notification-message {
    flex: 1;
  }
  
  .notification-close {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .notification-close:hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
  }
  
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  /* 增强的卡片样式 */
  .enhanced-card {
    transition: all 0.3s ease;
    border-radius: 12px;
    overflow: hidden;
  }
  
  /* 增强的链接样式 */
  .enhanced-link {
    text-decoration: none;
    position: relative;
    background: linear-gradient(to right, currentColor 0%, currentColor 100%);
    background-repeat: no-repeat;
    background-position: 0 100%;
    background-size: 0% 2px;
  }
  
  /* 个性化问候样式 */
  .personal-greeting {
    font-family: 'Arial', sans-serif;
    text-align: center;
    font-weight: bold;
    animation: pulse-greeting 2s infinite;
  }
  
  @keyframes pulse-greeting {
    0% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.5); }
    50% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.8); }
    100% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.5); }
  }
  
  /* 粒子系统样式 */
  .particle-system {
    z-index: -1;
  }
  
  .particle-enhanced {
    will-change: transform;
  }
  
  /* 气泡容器样式 */
  .bubble-container {
    z-index: -2;
  }
  
  .bubble {
    will-change: transform;
  }
  
  /* 智能悬停效果增强 */
  .smart-hover {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
  }
  
  .smart-hover:hover {
    transform: translateY(-8px) scale(1.02) !important;
    box-shadow: 0 15px 30px rgba(0, 200, 255, 0.4) !important;
  }
  
  /* 增强的霓虹效果 */
  .enhanced-neon {
    color: #fff;
    text-shadow:
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 15px #fff,
      0 0 20px #0ff,
      0 0 35px #0ff,
      0 0 40px #0ff,
      0 0 50px #0ff,
      0 0 75px #0ff;
    animation: enhanced-neon-flicker 3s infinite alternate !important;
  }
  
  @keyframes enhanced-neon-flicker {
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
      text-shadow:
        0 0 5px #fff,
        0 0 10px #fff,
        0 0 15px #fff,
        0 0 20px #0ff,
        0 0 35px #0ff,
        0 0 40px #0ff,
        0 0 50px #0ff,
        0 0 75px #0ff;
      box-shadow: 0 0 10px #0ff, inset 0 0 10px #0ff;
    }
    20%, 24%, 55% {
      text-shadow: none;
      box-shadow: none;
    }
  }
  
  /* 流畅动画 */
  * {
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
  }
  
  /* 智能加载动画 */
  .loading-smart {
    animation: loading-pulse 1.5s ease-in-out infinite !important;
  }
  
  @keyframes loading-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.05); }
  }
  
  /* 增强的脉冲效果 */
  .pulse-enhanced {
    animation: pulse-enhanced-animation 2s infinite !important;
  }
  
  @keyframes pulse-enhanced-animation {
    0% { box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.4); }
    70% { box-shadow: 0 0 0 15px rgba(0, 255, 255, 0); }
    100% { box-shadow: 0 0 0 0 rgba(0, 255, 255, 0); }
  }
`;
document.head.appendChild(globalStyles);