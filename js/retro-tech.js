// CTF西电风格科技效果 - 网络安全竞赛风格个人博客系统
document.addEventListener('DOMContentLoaded', function() {
  // 初始化所有CTF科技效果
  initCTFTechEffects();
  initSidebarMenu();
  initDynamicParticles();
  initTypewriterEffect();
});

// 初始化CTF科技效果
function initCTFTechEffects() {
  // 添加数据流动画
  addDataStreamEffect();
  // 添加终端打印效果
  addTerminalPrintEffect();
  // 添加CTF风格动画
  addCTFAnimations();
}

// 初始化动态粒子效果
function initDynamicParticles() {
  const particleContainer = document.createElement('div');
  particleContainer.className = 'particle-container';
  document.body.appendChild(particleContainer);
  
  // 创建多个粒子
  for (let i = 0; i < 30; i++) {
    createParticle(particleContainer);
  }
  
  // 定期添加新粒子以保持动态效果
  setInterval(() => {
    if (particleContainer.children.length < 40) {
      createParticle(particleContainer);
    }
  }, 3000);
}

// 创建单个粒子
function createParticle(container) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  
  // 随机大小
  const size = Math.random() * 5 + 1;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  
  // 随机位置
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;
  
  // 随机动画时长和延迟
  const duration = Math.random() * 20 + 10;
  const delay = Math.random() * 5;
  particle.style.animation = `float ${duration}s infinite linear ${delay}s`;
  
  container.appendChild(particle);
}

// 简化文字效果，避免影响文字显示
function initTypewriterEffect() {
  // 暂时禁用可能影响文字显示的打字机效果
  // 保持原始文字内容不变，只添加轻微的淡入效果
  setTimeout(() => {
    const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headers.forEach(header => {
      header.style.opacity = 0;
      
      let opacity = 0;
      const timer = setInterval(() => {
        opacity += 0.02;
        header.style.opacity = opacity;
        
        if (opacity >= 1) {
          clearInterval(timer);
        }
      }, 50);
    });
  }, 100);
}

// 移除可能导致闪烁的重复初始化
window.addEventListener('load', function() {
  // 确保只初始化一次
});

// 添加终端打印效果
function addTerminalPrintEffect() {
  // 创建终端样式的动画效果
  const terminalStyle = document.createElement('style');
  terminalStyle.textContent = `
    /* 终端光标闪烁效果 */
    .terminal-cursor {
      display: inline-block;
      width: 8px;
      height: 16px;
      background-color: #00ff00;
      vertical-align: middle;
      animation: blink 1s infinite;
      margin-left: 4px;
    }
    
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    
    /* 终端文本输入动画 */
    .terminal-typewriter {
      overflow: hidden;
      border-right: 2px solid #00ff00;
      white-space: nowrap;
      animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
    }
    
    @keyframes typing {
      from { width: 0; }
      to { width: 100%; }
    }
    
    @keyframes blink-caret {
      from, to { border-color: transparent; }
      50% { border-color: #00ff00; }
    }
  `;

  document.head.appendChild(terminalStyle);
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
    
    /* CTF风格数据流线条动画 */
    .data-stream-line {
      position: fixed;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(0, 255, 0, 0.8), transparent);
      filter: drop-shadow(0 0 2px rgba(0, 255, 0, 0.8)) drop-shadow(0 0 4px rgba(0, 255, 0, 0.6));
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

// 添加CTF风格动画
function addCTFAnimations() {
  // 创建CTF风格的动画效果
  const ctfStyle = document.createElement('style');
  ctfStyle.textContent = `
    /* CTF风格脉冲动画 */
    .ctf-pulse {
      animation: ctfPulse 2s infinite;
    }
    
    @keyframes ctfPulse {
      0% { box-shadow: 0 0 5px rgba(0, 255, 0, 0.5); }
      50% { box-shadow: 0 0 15px rgba(0, 255, 0, 0.8), 0 0 20px rgba(0, 200, 0, 0.6); }
      100% { box-shadow: 0 0 5px rgba(0, 255, 0, 0.5); }
    }
    
    /* CTF风格扫描动画 */
    .ctf-scan {
      position: relative;
      overflow: hidden;
    }
    
    .ctf-scan::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(0, 255, 0, 0.1), transparent);
      animation: ctfScan 3s linear infinite;
    }
    
    @keyframes ctfScan {
      0% { left: -100%; }
      100% { left: 100%; }
    }
    
    /* CTF风格闪烁动画 */
    .ctf-flicker {
      animation: ctfFlicker 1.5s infinite;
    }
    
    @keyframes ctfFlicker {
      0%, 100% { opacity: 1; filter: brightness(1); }
      25% { opacity: 0.8; filter: brightness(1.1); }
      50% { opacity: 0.6; filter: brightness(0.9); }
      75% { opacity: 0.9; filter: brightness(1.05); }
    }
  `;
  
  document.head.appendChild(ctfStyle);
}

// 初始化左侧侧边栏菜单 - 已禁用弹出功能
function initSidebarMenu() {
  // 不创建弹出侧边栏，保持默认侧边栏
  console.log('侧边栏弹出功能已禁用');
  return;
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