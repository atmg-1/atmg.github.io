// 增强的赛博朋克风格效果 - 已优化以避免闪烁
document.addEventListener('DOMContentLoaded', function() {
  // 初始化所有效果
  createCyberpunkHomepageEffects();
  createDynamicTitleEffect();
  // 注意：已移除可能导致闪烁的故障艺术效果
});

// 创建赛博朋克风格的首页特效
function createCyberpunkHomepageEffects() {
  // 创建网格背景效果
  createGridBackground();
  
  // 创建霓虹灯效果（稳定版，无闪烁）
  createStableNeonLights();
  
  // 创建浮动元素
  createFloatingElements();
}

// 创建网格背景效果
function createGridBackground() {
  const gridContainer = document.createElement('div');
  gridContainer.className = 'cyber-grid-container';
  gridContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -4;
    background-image: 
      linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 40px 40px;
    animation: cyberpan 20s linear infinite;
  `;
  
  document.body.appendChild(gridContainer);
  
  // 添加动画样式
  const gridStyles = document.createElement('style');
  gridStyles.textContent = `
    @keyframes cyberpan {
      0% { transform: translate(0, 0); }
      100% { transform: translate(40px, 40px); }
    }
  `;
  document.head.appendChild(gridStyles);
}

// 创建稳定的霓虹灯效果（无闪烁）
function createStableNeonLights() {
  const neonElements = document.querySelectorAll('.site-title, .post-title, .nav-item a, .btn, .cyber-neon');
  
  neonElements.forEach(el => {
    if (!el.classList.contains('neon-enhanced')) {
      el.classList.add('neon-enhanced');
      
      // 添加稳定的霓虹效果，无闪烁
      el.style.textShadow = `
        0 0 5px #fff,
        0 0 10px #fff,
        0 0 15px #fff,
        0 0 20px #0ff,
        0 0 35px #0ff,
        0 0 40px #0ff,
        0 0 50px #0ff
      `;
      
      // 移除闪烁动画，使用稳定的动画
      el.style.animation = 'neon-glow 3s ease-in-out infinite alternate';
      
      // 鼠标悬停增强效果
      el.addEventListener('mouseenter', function() {
        this.style.animation = 'neon-intensify 0.5s forwards';
      });
      
      el.addEventListener('mouseleave', function() {
        this.style.animation = 'neon-glow 3s ease-in-out infinite alternate';
      });
    }
  });
  
  // 添加霓虹动画样式（稳定版）
  const neonStyles = document.createElement('style');
  neonStyles.textContent = `
    @keyframes neon-glow {
      0% {
        text-shadow:
          0 0 5px #fff,
          0 0 10px #fff,
          0 0 15px #fff,
          0 0 20px #0ff,
          0 0 35px #0ff,
          0 0 40px #0ff,
          0 0 50px #0ff;
      }
      100% {
        text-shadow:
          0 0 8px #fff,
          0 0 15px #fff,
          0 0 20px #fff,
          0 0 25px #0ff,
          0 0 40px #0ff,
          0 0 45px #0ff,
          0 0 55px #0ff;
      }
    }
    
    @keyframes neon-intensify {
      0% {
        text-shadow:
          0 0 5px #fff,
          0 0 10px #fff,
          0 0 15px #fff,
          0 0 20px #0ff,
          0 0 35px #0ff,
          0 0 40px #0ff,
          0 0 50px #0ff;
        transform: scale(1.05);
      }
      100% {
        text-shadow:
          0 0 10px #fff,
          0 0 20px #fff,
          0 0 30px #fff,
          0 0 40px #0ff,
          0 0 60px #0ff,
          0 0 80px #0ff,
          0 0 100px #0ff;
        transform: scale(1.1);
      }
    }
  `;
  document.head.appendChild(neonStyles);
}

// 创建浮动元素
function createFloatingElements() {
  // 创建浮动的几何形状
  for (let i = 0; i < 12; i++) {
    const floatEl = document.createElement('div');
    floatEl.className = 'cyber-float-element';
    floatEl.style.cssText = `
      position: fixed;
      width: ${Math.random() * 60 + 20}px;
      height: ${Math.random() * 60 + 20}px;
      background: rgba(0, 255, 255, ${Math.random() * 0.1 + 0.05});
      border: 1px solid rgba(0, 255, 255, 0.3);
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      border-radius: ${Math.random() > 0.5 ? '50%' : '10%'};
      z-index: -3;
      animation: float-${i % 3} ${15 + Math.random() * 20}s infinite linear;
      backdrop-filter: blur(2px);
    `;
    
    document.body.appendChild(floatEl);
  }
  
  // 添加浮动动画样式
  const floatStyles = document.createElement('style');
  floatStyles.textContent = `
    @keyframes float-0 {
      0% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(50px, 50px) rotate(90deg); }
      50% { transform: translate(100px, 0) rotate(180deg); }
      75% { transform: translate(50px, -50px) rotate(270deg); }
      100% { transform: translate(0, 0) rotate(360deg); }
    }
    
    @keyframes float-1 {
      0% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(-30px, 40px) scale(1.2); }
      100% { transform: translate(0, 0) scale(1); }
    }
    
    @keyframes float-2 {
      0% { transform: translate(0, 0) skew(0deg, 0deg); }
      25% { transform: translate(40px, -20px) skew(5deg, 3deg); }
      50% { transform: translate(20px, 30px) skew(-3deg, 5deg); }
      75% { transform: translate(-30px, 10px) skew(4deg, -4deg); }
      100% { transform: translate(0, 0) skew(0deg, 0deg); }
    }
  `;
  document.head.appendChild(floatStyles);
}

// 创建动态标题效果
function createDynamicTitleEffect() {
  const title = document.querySelector('.site-title') || document.querySelector('title') || document.querySelector('h1');
  if (title) {
    title.classList.add('dynamic-title');
    
    // 添加动态标题样式
    const titleStyle = document.createElement('style');
    titleStyle.textContent = `
      .dynamic-title {
        background: linear-gradient(45deg, #0ff, #f0f, #0f0, #ff0, #0ff);
        background-size: 300% 300% !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-clip: text !important;
        animation: gradient-shift 8s ease infinite !important;
      }
      
      @keyframes gradient-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(titleStyle);
  }
}