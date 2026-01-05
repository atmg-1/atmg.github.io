// 高级赛博朋克视觉效果
function addAdvancedCyberpunkEffects() {
  // 鼠标跟随粒子效果
  document.addEventListener('mousemove', function(e) {
    createMouseParticle(e.clientX, e.clientY);
  });

  // 创建鼠标粒子
  function createMouseParticle(x, y) {
    if (Math.random() > 0.7) { // 30% 概率创建粒子
      const particle = document.createElement('div');
      particle.className = 'advanced-particle';
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      
      // 随机颜色
      const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'];
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      // 随机大小
      const size = Math.random() * 4 + 2;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      
      document.body.appendChild(particle);
      
      // 3秒后移除粒子
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 3000);
    }
  }

  // 动态霓虹效果
  const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, .post-title, .site-title, .nav-item, .btn, button, a');
  elements.forEach(el => {
    if (Math.random() > 0.5) { // 50% 概率添加霓虹效果
      el.classList.add('neon-glow-enhanced');
    }
  });

  // 添加全息效果到主要内容区域
  const mainContent = document.querySelector('.main-inner') || document.querySelector('main') || document.querySelector('.content');
  if (mainContent) {
    mainContent.classList.add('hologram-project', 'particle-network');
  }

  // 添加动态边框效果到文章块
  const postBlocks = document.querySelectorAll('.post-block, .article-item, .post-content');
  postBlocks.forEach(block => {
    block.classList.add('neon-flow-border', 'hologram-float');
    
    // 添加点击波纹效果
    block.addEventListener('click', function(e) {
      createRippleEffect(e, this);
    });
  });

  // 创建波纹效果
  function createRippleEffect(e, element) {
    const ripple = document.createElement('span');
    ripple.className = 'wave-effect';
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = size + 'px';
    ripple.style.height = size + 'px';
    ripple.style.left = e.clientX - rect.left - size/2 + 'px';
    ripple.style.top = e.clientY - rect.top - size/2 + 'px';
    
    element.appendChild(ripple);
    
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 600);
  }

  // 添加动态故障效果到标题
  const titles = document.querySelectorAll('h1, h2, h3, .post-title, .site-title');
  titles.forEach(title => {
    title.setAttribute('data-text', title.textContent);
    if (Math.random() > 0.6) { // 40% 概率添加故障效果
      title.classList.add('glitch-enhanced');
    }
    
    // 添加悬停效果
    title.addEventListener('mouseenter', function() {
      if (Math.random() > 0.3) { // 70% 概率触发效果
        this.classList.add('n3on-3d', 'liquid-neon');
      }
    });
    
    title.addEventListener('mouseleave', function() {
      this.classList.remove('n3on-3d', 'liquid-neon');
    });
  });

  // 添加扫描效果到主要内容
  const contentElements = document.querySelectorAll('.post-content, .article-content, .content');
  contentElements.forEach(content => {
    content.classList.add('spectrum-scan', 'ray-tracing');
  });

  // 添加电弧连接效果到链接
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    if (Math.random() > 0.8) { // 20% 概率添加电弧效果
      link.classList.add('arc-connect');
    }
  });

  // 添加霓虹脉冲波效果到页面主体
  document.body.classList.add('neon-pulse-wave');

  // 添加光谱边框到特定元素
  const specialElements = document.querySelectorAll('.post-block, .main-inner, .content-wrap');
  specialElements.forEach(el => {
    if (Math.random() > 0.5) { // 50% 概率添加光谱边框
      el.classList.add('spectrum-border');
    }
  });

  // 添加霓虹波纹效果到按钮
  const buttons = document.querySelectorAll('button, .btn, input[type="button"], input[type="submit"]');
  buttons.forEach(btn => {
    btn.classList.add('neon-ripple');
  });

  // 添加全息纹理到背景
  document.body.classList.add('hologram-texture');

  // 添加动态扫描线效果
  setInterval(() => {
    if (Math.random() > 0.8) { // 20% 概率触发扫描线
      const scanLine = document.createElement('div');
      scanLine.className = 'neon-scan-enhanced';
      scanLine.style.position = 'fixed';
      scanLine.style.top = '0';
      scanLine.style.left = '0';
      scanLine.style.width = '100%';
      scanLine.style.height = '2px';
      scanLine.style.pointerEvents = 'none';
      scanLine.style.zIndex = '9999';
      
      document.body.appendChild(scanLine);
      
      setTimeout(() => {
        if (scanLine.parentNode) {
          scanLine.parentNode.removeChild(scanLine);
        }
      }, 1500);
    }
  }, 1000); // 每秒检查一次
}

// 启动高级效果
document.addEventListener('DOMContentLoaded', addAdvancedCyberpunkEffects);

// 添加波纹效果样式
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  .wave-effect {
    position: absolute;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    background: radial-gradient(circle, rgba(0, 255, 255, 0.6) 0%, transparent 70%);
    pointer-events: none;
    z-index: 9999;
    animation: wave-animation 0.6s linear;
  }

  @keyframes wave-animation {
    to {
      transform: translate(-50%, -50%) scale(2);
      opacity: 0;
    }
  }
`;
document.head.appendChild(rippleStyle);