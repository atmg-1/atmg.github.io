// 流浪地球风格 - JavaScript增强功能

// 创建黑客风格背景效果
function createHackerBackground() {
  // 创建电路背景层
  const hackerBg = document.createElement('div');
  hackerBg.className = 'hacker-background';
  document.body.appendChild(hackerBg);
  
  // 创建电路连线层
  const circuitLines = document.createElement('div');
  circuitLines.className = 'circuit-lines';
  document.body.appendChild(circuitLines);
  
  // 创建数据流层
  const dataFlow = document.createElement('div');
  dataFlow.className = 'data-flow';
  
  // 添加数据流线条
  for (let i = 0; i < 9; i++) {
    const flowLine = document.createElement('div');
    flowLine.className = 'flow-line';
    dataFlow.appendChild(flowLine);
  }
  document.body.appendChild(dataFlow);
  
  // 创建脉冲节点
  const pulseNodes = document.createElement('div');
  pulseNodes.className = 'pulse-nodes';
  document.body.appendChild(pulseNodes);
}

// 创建简洁的导航弹窗
function initNavModal() {
  // 创建导航弹窗HTML
  const navModal = document.createElement('div');
  navModal.className = 'nav-modal';
  navModal.innerHTML = `
    <div class="nav-modal-content">
      <button class="nav-modal-close">×</button>
      <div class="nav-modal-header">
        <h3>导航菜单</h3>
      </div>
      <ul class="nav-modal-menu">
        <li><a href="/atmg.github.io/"><i class="fa fa-home"></i>首页</a></li>
        <li><a href="/atmg.github.io/about/"><i class="fa fa-user"></i>关于</a></li>
        <li><a href="/atmg.github.io/tags/"><i class="fa fa-tags"></i>标签</a></li>
        <li><a href="/atmg.github.io/categories/"><i class="fa fa-th"></i>分类</a></li>
        <li><a href="/atmg.github.io/archives/"><i class="fa fa-archive"></i>归档</a></li>
        <li><a href="#" class="popup-trigger"><i class="fa fa-search"></i>搜索</a></li>
      </ul>
    </div>
  `;
  document.body.appendChild(navModal);
  
  // 创建导航按钮
  const navButton = document.createElement('div');
  navButton.className = 'nav-toggle-btn';
  navButton.innerHTML = `
    <div class="menu-icon">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;
  document.body.appendChild(navButton);
  
  // 获取菜单元素
  const modalCloseBtn = navModal.querySelector('.nav-modal-close');
  const menuLinks = navModal.querySelectorAll('.nav-modal-menu a');
  
  // 显示弹窗
  function showModal() {
    navModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // 防止背景滚动
  }
  
  // 隐藏弹窗
  function hideModal() {
    navModal.classList.remove('active');
    document.body.style.overflow = ''; // 恢复滚动
  }
  
  // 点击导航按钮显示弹窗
  navButton.addEventListener('click', showModal);
  
  // 点击关闭按钮隐藏弹窗
  modalCloseBtn.addEventListener('click', hideModal);
  
  // 点击弹窗外区域隐藏弹窗
  navModal.addEventListener('click', function(e) {
    if (e.target === navModal) {
      hideModal();
    }
  });
  
  // ESC键关闭弹窗
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navModal.classList.contains('active')) {
      hideModal();
    }
  });
  
  // 为菜单项添加点击事件
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      // 对于搜索链接，触发搜索功能
      if (this.classList.contains('popup-trigger')) {
        // 触发现有的搜索功能
        const searchPopup = document.querySelector('.search-pop-overlay');
        if (searchPopup) {
          searchPopup.click(); // 点击搜索overlay来触发搜索
        }
      }
      hideModal(); // 点击后隐藏弹窗
    });
  });
}

// 初始化所有效果
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    createHackerBackground();
    initNavModal();
  });
} else {
  createHackerBackground();
  initNavModal();
}

// 添加流浪地球主题的动态效果
document.addEventListener('DOMContentLoaded', function() {
  // 添加动态星空背景效果
  const stars = document.createElement('div');
  stars.id = 'wandering-earth-stars';
  stars.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
  `;
  
  // 创建星星
  for (let i = 0; i < 150; i++) {
    const star = document.createElement('div');
    star.style.cssText = `
      position: absolute;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      background: #81d4fa;
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: twinkle ${Math.random() * 5 + 3}s infinite ease-in-out;
    `;
    
    // 添加闪烁动画
    star.style.animationDelay = `${Math.random() * 5}s`;
    
    stars.appendChild(star);
  }
  
  document.body.appendChild(stars);
  
  // 添加CSS动画
  const style = document.createElement('style');
  style.textContent = `
    @keyframes twinkle {
      0%, 100% { opacity: 0.2; }
      50% { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
  
  // 为标题添加流浪地球主题的动画效果
  const titles = document.querySelectorAll('h1, h2, h3, h4, h5, h6, .post-title, .site-title');
  titles.forEach(title => {
    title.classList.add('wandering-earth-title');
    title.style.cssText += `
      transition: all 0.3s ease;
      cursor: default;
    `;
  });
  
  // 为链接添加流浪地球主题的悬停效果
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    if (!link.classList.contains('sidebar-nav')) {
      link.addEventListener('mouseenter', function() {
        this.style.textShadow = '0 0 8px rgba(128, 222, 234, 0.6)';
        this.style.transition = 'all 0.3s ease';
      });
      
      link.addEventListener('mouseleave', function() {
        this.style.textShadow = '';
      });
    }
  });
  
  // 添加科技感动态粒子效果
  createFloatingParticles();
  
  // 添加数据流动画
  createDataStreamBar();
  
  // 添加全息效果
  addHologramEffects();
  
  // 添加霓虹光效
  addNeonGlowEffects();
});

// 创建浮动粒子效果
function createFloatingParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'floating-particles';
  document.body.appendChild(particlesContainer);
  
  // 创建多个粒子
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // 随机属性
    const size = Math.random() * 4 + 1;
    const posX = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${posX}%;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;
    
    particlesContainer.appendChild(particle);
  }
}

// 创建数据流效果
function createDataStreamBar() {
  const dataStream = document.createElement('div');
  dataStream.className = 'data-stream-bar';
  document.body.appendChild(dataStream);
}

// 添加全息效果
function addHologramEffects() {
  const elements = document.querySelectorAll('h1, h2, h3, .post-block, .card, .sidebar, .header, .footer');
  elements.forEach(el => {
    el.classList.add('hologram-effect');
  });
}

// 添加霓虹光效
function addNeonGlowEffects() {
  const elements = document.querySelectorAll('h1, h2, h3, .post-title, .site-title, .button-tech');
  elements.forEach(el => {
    el.classList.add('neon-glow');
  });
}

// 添加科技感动态粒子效果
document.addEventListener('DOMContentLoaded', function() {
  // 创建动态粒子背景
  createDynamicParticleBackground();
});

function createDynamicParticleBackground() {
  // 创建粒子容器
  const particleContainer = document.createElement('div');
  particleContainer.id = 'tech-particles';
  particleContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
  `;
  
  document.body.appendChild(particleContainer);
  
  // 创建多个粒子
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      background: rgba(128, 222, 234, ${Math.random() * 0.5 + 0.2});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: float-${i} ${Math.random() * 15 + 10}s infinite linear;
    `;
    
    // 添加独特的动画
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-${i} {
        0% {
          transform: translate(0, 0);
          opacity: ${Math.random() * 0.5 + 0.2};
        }
        25% {
          transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
        }
        50% {
          transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
          opacity: ${Math.random() * 0.3 + 0.1};
        }
        75% {
          transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
        }
        100% {
          transform: translate(0, 0);
          opacity: ${Math.random() * 0.5 + 0.2};
        }
      }
    `;
    document.head.appendChild(style);
    
    particleContainer.appendChild(particle);
  }
}

// 添加脉冲效果到特定元素
function addPulseEffects() {
  const elements = document.querySelectorAll('.post-block, .card, .button-tech');
  elements.forEach(el => {
    el.classList.add('pulse-element');
  });
}

// 初始化脉冲效果
setTimeout(addPulseEffects, 1000);