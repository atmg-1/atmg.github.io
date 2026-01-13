// CTF风格科技效果 - 科幻/科技风个人博客系统
document.addEventListener('DOMContentLoaded', function() {
  // 初始化所有科技效果
  initCTFTechEffects();
  initSidebarMenu();
});

// 初始化CTF科技效果
function initCTFTechEffects() {
  // 添加数据流动画
  addDataStreamEffect();
}

// 移除可能导致闪烁的重复初始化
window.addEventListener('load', function() {
  // 确保只初始化一次
});

// 创建浮动粒子
function createFloatingParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.id = 'tech-particles';
  particlesContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
  `;

  document.body.appendChild(particlesContainer);

  // 创建少量粒子，减少性能负担和闪烁
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      createParticle(particlesContainer);
    }, i * 500);
  }
}

// 创建单个粒子
function createParticle(container) {
  const particle = document.createElement('div');

  // 随机大小
  const size = 1 + Math.random() * 2;
  
  // 随机位置
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;

  particle.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    background: rgba(59, 130, 246, ${0.3 + Math.random() * 0.4});
    border-radius: 50%;
    top: ${posY}vh;
    left: ${posX}vw;
    box-shadow: 0 0 ${5 + Math.random() * 10}px rgba(59, 130, 246, 0.8);
    animation: floatParticle ${15 + Math.random() * 15}s linear infinite;
    filter: blur(1px);
  `;

  container.appendChild(particle);

  // 20秒后移除粒子
  setTimeout(() => {
    if (particle.parentNode) {
      particle.remove();
    }
  }, 20000);
}

// 添加数据流动画
function addDataStreamEffect() {
  // 创建关键帧
  const style = document.createElement('style');
  style.textContent = `
    @keyframes floatParticle {
      0% { 
        transform: translate(0, 0); 
        opacity: 0.3; 
      }
      25% { 
        transform: translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px); 
        opacity: 0.6; 
      }
      50% { 
        transform: translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px); 
        opacity: 0.3; 
      }
      75% { 
        transform: translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px); 
        opacity: 0.6; 
      }
      100% { 
        transform: translate(0, 0); 
        opacity: 0.3; 
      }
    }
    
    /* 数据流线条动画 */
    .data-stream-line {
      position: fixed;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent);
      filter: drop-shadow(0 0 2px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 4px rgba(59, 130, 246, 0.6));
      animation: streamMove 3s linear infinite;
      z-index: -2;
    }
    
    @keyframes streamMove {
      0% { transform: translateX(-100px); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateX(calc(100vw + 100px)); opacity: 0; }
    }
  `;

  document.head.appendChild(style);
}

// 初始化左侧侧边栏菜单
function initSidebarMenu() {
  // 创建侧边栏遮罩
  const sidebarOverlay = document.createElement('div');
  sidebarOverlay.id = 'sidebar-overlay';
  sidebarOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 23, 42, 0.8);
    z-index: 9998;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
  `;

  // 创建侧边栏
  const sidebar = document.createElement('div');
  sidebar.id = 'sidebar-menu';
  sidebar.style.cssText = `
    position: fixed;
    top: 0;
    left: -300px;
    width: 280px;
    height: 100vh;
    background: rgba(30, 41, 59, 0.95);
    backdrop-filter: blur(10px);
    border-right: 1px solid rgba(59, 130, 246, 0.3);
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.1);
    z-index: 9999;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `;

  // 创建侧边栏头部
  const sidebarHeader = document.createElement('div');
  sidebarHeader.className = 'sidebar-header';
  sidebarHeader.style.cssText = `
    padding: 20px;
    border-bottom: 1px solid rgba(59, 130, 246, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const logo = document.createElement('h2');
  logo.textContent = '叶同学的博客';
  logo.style.cssText = `
    margin: 0;
    color: #e2e8f0;
    font-size: 1.2em;
    font-family: 'Courier New', 'Microsoft YaHei', monospace;
    text-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `;

  const closeBtn = document.createElement('div');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.cssText = `
    font-size: 1.5em;
    color: #e2e8f0;
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  `;
  
  closeBtn.addEventListener('click', closeSidebar);

  closeBtn.addEventListener('mouseenter', () => {
    closeBtn.style.background = 'rgba(59, 130, 246, 0.2)';
    closeBtn.style.boxShadow = '0 0 15px rgba(59, 130, 246, 0.5)';
  });
  
  closeBtn.addEventListener('mouseleave', () => {
    closeBtn.style.background = 'transparent';
    closeBtn.style.boxShadow = 'none';
  });

  sidebarHeader.appendChild(logo);
  sidebarHeader.appendChild(closeBtn);

  // 创建菜单内容
  const menuContent = document.createElement('div');
  menuContent.className = 'menu-content';
  menuContent.style.cssText = `
    flex: 1;
    overflow-y: auto;
    padding: 20px 0;
  `;

  // 创建菜单项
  const menuItems = [
    { text: '首页', href: '/', icon: '🏠' },
    { text: '博客', href: '/archives/', icon: '📝' },
    { text: '分类', href: '/categories/', icon: '📂' },
    { text: '标签', href: '/tags/', icon: '🏷️' },
    { text: '关于', href: '/about/', icon: '👤' }
  ];

  const menuList = document.createElement('ul');
  menuList.style.cssText = `
    list-style: none;
    padding: 0;
    margin: 0;
  `;

  menuItems.forEach(item => {
    const li = document.createElement('li');
    li.style.cssText = `
      padding: 12px 20px;
      margin: 0;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border-left: 3px solid transparent;
      color: #cbd5e1;
    `;

    const link = document.createElement('a');
    link.href = item.href;
    link.innerHTML = `${item.icon} ${item.text}`;
    link.style.cssText = `
      color: #cbd5e1;
      text-decoration: none;
      display: flex;
      align-items: center;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    `;

    li.addEventListener('mouseenter', () => {
      li.style.background = 'rgba(59, 130, 246, 0.1)';
      li.style.borderLeft = '3px solid #3b82f6';
      li.style.boxShadow = '0 0 15px rgba(59, 130, 246, 0.2)';
      link.style.color = '#3b82f6';
      link.style.textShadow = '0 0 10px rgba(59, 130, 246, 0.5)';
    });

    li.addEventListener('mouseleave', () => {
      li.style.background = 'transparent';
      li.style.borderLeft = '3px solid transparent';
      li.style.boxShadow = 'none';
      link.style.color = '#cbd5e1';
      link.style.textShadow = 'none';
    });

    // 点击事件
    li.addEventListener('click', (e) => {
      e.preventDefault();
      closeSidebar();
      setTimeout(() => {
        window.location.href = item.href;
      }, 300);
    });

    li.appendChild(link);
    menuList.appendChild(li);
  });

  menuContent.appendChild(menuList);

  // 创建侧边栏底部
  const sidebarFooter = document.createElement('div');
  sidebarFooter.className = 'sidebar-footer';
  sidebarFooter.style.cssText = `
    padding: 15px 20px;
    border-top: 1px solid rgba(59, 130, 246, 0.2);
    display: flex;
    justify-content: center;
  `;

  const themeToggle = document.createElement('button');
  themeToggle.textContent = '🌙';
  themeToggle.style.cssText = `
    background: rgba(59, 130, 246, 0.2);
    color: #e2e8f0;
    border: 1px solid rgba(59, 130, 246, 0.3);
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  `;

  themeToggle.addEventListener('mouseenter', () => {
    themeToggle.style.boxShadow = '0 0 15px rgba(59, 130, 246, 0.5)';
  });

  themeToggle.addEventListener('mouseleave', () => {
    themeToggle.style.boxShadow = 'none';
  });

  sidebarFooter.appendChild(themeToggle);

  // 组装侧边栏
  sidebar.appendChild(sidebarHeader);
  sidebar.appendChild(menuContent);
  sidebar.appendChild(sidebarFooter);

  // 创建汉堡菜单按钮
  const hamburgerBtn = document.createElement('div');
  hamburgerBtn.id = 'hamburger-menu';
  hamburgerBtn.innerHTML = '☰';
  hamburgerBtn.style.cssText = `
    position: fixed;
    left: 20px;
    top: 20px;
    width: 50px;
    height: 50px;
    background: rgba(30, 41, 59, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    z-index: 9999;
    color: #e2e8f0;
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  `;

  hamburgerBtn.addEventListener('click', openSidebar);

  hamburgerBtn.addEventListener('mouseenter', () => {
    hamburgerBtn.style.boxShadow = '0 0 15px rgba(59, 130, 246, 0.5)';
    hamburgerBtn.style.background = 'rgba(59, 130, 246, 0.2)';
    hamburgerBtn.style.color = '#3b82f6';
  });

  hamburgerBtn.addEventListener('mouseleave', () => {
    hamburgerBtn.style.boxShadow = '0 0 15px rgba(59, 130, 246, 0.1)';
    hamburgerBtn.style.background = 'rgba(30, 41, 59, 0.8)';
    hamburgerBtn.style.color = '#e2e8f0';
  });

  // 添加到文档
  document.body.appendChild(sidebarOverlay);
  document.body.appendChild(sidebar);
  document.body.appendChild(hamburgerBtn);

  // 点击遮罩关闭侧边栏
  sidebarOverlay.addEventListener('click', closeSidebar);
}

// 打开侧边栏
function openSidebar() {
  const sidebar = document.getElementById('sidebar-menu');
  const overlay = document.getElementById('sidebar-overlay');
  
  sidebar.style.left = '0';
  overlay.style.opacity = '1';
  overlay.style.visibility = 'visible';
  
  // 防止背景滚动
  document.body.style.overflow = 'hidden';
}

// 关闭侧边栏
function closeSidebar() {
  const sidebar = document.getElementById('sidebar-menu');
  const overlay = document.getElementById('sidebar-overlay');
  
  sidebar.style.left = '-300px';
  overlay.style.opacity = '0';
  overlay.style.visibility = 'hidden';
  
  // 恢复背景滚动
  document.body.style.overflow = 'auto';
}

// 添加页面过渡效果
document.addEventListener('click', function(e) {
  // 检查是否点击了内部链接
  if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('/')) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    
    // 添加页面过渡效果
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
      window.location.href = href;
    }, 300);
  }
});