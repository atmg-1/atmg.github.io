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

// 初始化左侧侧边栏菜单 - 已禁用弹出功能
function initSidebarMenu() {
  // 不创建弹出侧边栏，保持默认侧边栏
  console.log('侧边栏弹出功能已禁用');
  return;
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