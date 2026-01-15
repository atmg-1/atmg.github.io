// 流浪地球风格 - JavaScript增强功能

// 侧边栏增强功能
function initSidebarEnhancements() {
  // 获取侧边栏和遮罩元素
  const sidebar = document.querySelector('.sidebar');
  const sidebarDimmer = document.querySelector('.sidebar-dimmer');
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  
  // 添加完全隐藏侧边栏的功能
  if (sidebar && sidebarDimmer) {
    // 点击遮罩隐藏侧边栏
    sidebarDimmer.addEventListener('click', function() {
      hideSidebar();
    });
    
    // ESC键隐藏侧边栏
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        hideSidebar();
      }
    });
  }
  
  // 隐藏侧边栏函数
  function hideSidebar() {
    if (sidebar) {
      sidebar.classList.add('hidden');
    }
    if (sidebarDimmer) {
      sidebarDimmer.classList.add('hidden');
    }
    // 移除激活类
    document.body.classList.remove('sidebar-active');
  }

  // 如果有侧边栏切换按钮，也绑定隐藏功能
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
      // 检查侧边栏当前是否激活
      const isActive = document.body.classList.contains('sidebar-active');
      if (isActive) {
        // 如果激活，则在点击后再次隐藏
        setTimeout(hideSidebar, 300); // 等待动画完成
      }
    });
  }

  // 添加侧边栏菜单项的点击隐藏功能
  const sidebarMenuItems = document.querySelectorAll('.sidebar-nav a');
  sidebarMenuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      // 延迟隐藏侧边栏，让链接跳转先发生
      setTimeout(hideSidebar, 100);
    });
  });

  // 添加键盘快捷键功能
  document.addEventListener('keydown', function(event) {
    // Ctrl/Cmd + Shift + S 隐藏侧边栏
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === 's') {
      event.preventDefault();
      hideSidebar();
    }
  });

  // 为侧边栏添加滚动监听，防止内容滚动时侧边栏干扰
  if (sidebar) {
    sidebar.addEventListener('wheel', function(e) {
      // 防止侧边栏滚动影响页面滚动
      const scrollTop = this.scrollTop;
      const scrollHeight = this.scrollHeight;
      const clientHeight = this.clientHeight;
      const delta = e.deltaY;

      // 只有在滚动到顶部或底部时才允许页面滚动
      if ((delta < 0 && scrollTop === 0) || (delta > 0 && scrollTop + clientHeight >= scrollHeight)) {
        e.stopPropagation();
      }
    }, { passive: false });
  }
}

// 在DOM加载完成后初始化侧边栏增强功能
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSidebarEnhancements);
} else {
  initSidebarEnhancements();
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