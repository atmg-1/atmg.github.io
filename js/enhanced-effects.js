// 增强的赛博朋克主题JavaScript效果
// 包含丰富的动画、交互和视觉效果

document.addEventListener('DOMContentLoaded', function() {
  // 创建高级赛博朋克效果
  createAdvancedCyberpunkEffects();
  
  // 添加鼠标跟随光圈效果
  createMouseFollower();
  
  // 添加全局点击涟漪效果
  addGlobalClickEffects();
  
  // 为页面元素添加动态效果
  addDynamicElementEffects();
  
  // 创建霓虹扫描线效果
  createNeonScanlines();
  
  // 添加全息投影效果
  addHolographicEffects();
});

// 创建高级赛博朋克效果
function createAdvancedCyberpunkEffects() {
  // 为标题添加高级故障效果
  const titles = document.querySelectorAll('h1, h2, h3, .post-title, .site-title');
  titles.forEach(title => {
    title.classList.add('glitch-advanced');
    title.setAttribute('data-text', title.textContent);
    
    // 随机添加3D旋转或液态霓虹效果
    if (Math.random() > 0.5) {
      title.classList.add('n3on-3d');
    } else {
      title.classList.add('liquid-neon');
    }
    
    // 鼠标悬停时的动态效果
    title.addEventListener('mouseenter', function() {
      if (Math.random() > 0.3) { // 70% 概率添加效果
        this.classList.add('spectrum-scan');
      }
    });
    
    title.addEventListener('mouseleave', function() {
      this.classList.remove('spectrum-scan');
    });
  });
  
  // 为主要内容区域添加霓虹脉冲波效果
  const mainContent = document.querySelector('.main-inner') || document.querySelector('main') || document.querySelector('.content');
  if (mainContent) {
    mainContent.classList.add('neon-pulse-wave');
  }
  
  // 为文章块添加边框效果
  const postBlocks = document.querySelectorAll('.post-block, .article-item, .post-content');
  postBlocks.forEach(block => {
    // 随机添加光谱边框或霓虹流动边框
    if (Math.random() > 0.5) {
      block.classList.add('spectrum-border');
    } else {
      block.classList.add('neon-flow-border');
    }
    
    // 添加全息浮动效果
    block.classList.add('hologram-float');
  });
  
  // 为链接添加电弧连接效果
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    if (Math.random() > 0.8) { // 20% 概率
      link.classList.add('arc-connect');
    }
  });
  
  // 为按钮添加波纹效果
  const buttons = document.querySelectorAll('button, .btn, input[type="button"], input[type="submit"]');
  buttons.forEach(btn => {
    btn.classList.add('neon-ripple');
  });
  
  // 为内容区域添加光线追踪效果
  const contentAreas = document.querySelectorAll('.post-body, .content, .article-content');
  contentAreas.forEach(content => {
    content.classList.add('ray-tracing');
  });
}

// 创建鼠标跟随光圈效果
function createMouseFollower() {
  const follower = document.createElement('div');
  follower.className = 'cursor-follower';
  document.body.appendChild(follower);
  
  let mouseX = 0;
  let mouseY = 0;
  let posX = 0;
  let posY = 0;
  
  // 跟踪鼠标位置
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // 平滑移动光圈
  const updatePosition = () => {
    posX += (mouseX - posX) / 6;
    posY += (mouseY - posY) / 6;
    
    follower.style.left = posX + 'px';
    follower.style.top = posY + 'px';
    
    requestAnimationFrame(updatePosition);
  };
  
  updatePosition();
}

// 添加全局点击涟漪效果
function addGlobalClickEffects() {
  document.addEventListener('click', function(e) {
    // 创建涟漪效果
    const ripple = document.createElement('div');
    ripple.className = 'click-effect';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    document.body.appendChild(ripple);
    
    // 600ms后移除涟漪效果
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.remove();
      }
    }, 600);
  });
}

// 为页面元素添加动态效果
function addDynamicElementEffects() {
  // 为所有元素添加随机效果
  const allElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, div, a, button, .post-block, .main-inner');
  
  allElements.forEach(el => {
    // 随机添加效果 (50% 概率)
    if (Math.random() > 0.5) {
      el.classList.add('advanced-neon');
    }
    
    // 随机添加全息效果 (30% 概率)
    if (Math.random() > 0.7) {
      el.classList.add('holographic-effect');
    }
    
    // 随机添加辉光效果 (20% 概率)
    if (Math.random() > 0.8) {
      el.classList.add('neon-glow-enhanced');
    }
  });
  
  // 为主要内容区域添加纹理效果
  const mainContent = document.querySelector('.main-inner') || document.querySelector('main') || document.querySelector('.content');
  if (mainContent) {
    mainContent.classList.add('hologram-texture');
  }
}

// 创建霓虹扫描线效果
function createNeonScanlines() {
  // 定期添加随机扫描线
  setInterval(() => {
    if (Math.random() > 0.8) { // 20% 概率每秒触发
      const scanLine = document.createElement('div');
      scanLine.className = 'neon-scan-enhanced';
      document.body.appendChild(scanLine);
      
      // 1.5秒后移除扫描线
      setTimeout(() => {
        if (scanLine.parentNode) {
          scanLine.remove();
        }
      }, 1500);
    }
  }, 1000);
}

// 添加全息投影效果
function addHolographicEffects() {
  // 为整个body添加脉冲波效果
  document.body.classList.add('neon-pulse-wave');
  
  // 添加全息纹理效果
  document.body.classList.add('hologram-texture');
}

// 添加回到顶部按钮
function createBackToTopButton() {
  const button = document.createElement('div');
  button.className = 'back-to-top';
  button.innerHTML = '↑';
  document.body.appendChild(button);
  
  // 监听滚动事件
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      // 显示按钮
      button.style.opacity = '1';
      button.style.pointerEvents = 'auto';
    } else {
      // 隐藏按钮
      button.style.opacity = '0';
      button.style.pointerEvents = 'none';
    }
  });
  
  // 点击按钮回到顶部
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// 初始化回到顶部按钮
document.addEventListener('DOMContentLoaded', createBackToTopButton);

// 添加键盘交互效果
document.addEventListener('keydown', function(e) {
  // 添加特殊按键效果
  if (e.key === 'Enter') {
    // Enter键添加涟漪效果
    const ripple = document.createElement('div');
    ripple.className = 'click-effect';
    ripple.style.left = window.innerWidth/2 + 'px';
    ripple.style.top = window.innerHeight/2 + 'px';
    document.body.appendChild(ripple);
    
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.remove();
      }
    }, 600);
  }
});

// 添加更多视觉效果
function addMoreEffects() {
  // 添加数字雨效果
  createDigitalRain();
  
  // 添加粒子系统
  createParticleSystem();
  
  // 添加动态霓虹文字
  createAnimatedNeonTexts();
  
  // 添加故障效果增强
  addEnhancedGlitchEffects();
  
  // 添加光束效果
  addLaserBeams();
}

// 数字雨效果
function createDigitalRain() {
  const canvas = document.createElement('canvas');
  canvas.id = 'digital-rain';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.zIndex = '-1';
  canvas.style.pointerEvents = 'none';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  const characters = '0123456789ABCDEF';
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = [];
  
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
  }
  
  function drawDigitalRain() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#0f0';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
      const text = characters.charAt(Math.floor(Math.random() * characters.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      
      drops[i]++;
    }
  }
  
  setInterval(drawDigitalRain, 33);
}

// 粒子系统
function createParticleSystem() {
  // 暂时留空，后续实现
}

// 动态霓虹文字
function createAnimatedNeonTexts() {
  const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, .nav-item, .post-title, .site-title, .site-subtitle');
  elements.forEach(el => {
    // 添加脉冲效果
    el.classList.add('neon-pulse-enhanced');
  });
}

// 增强故障效果
function addEnhancedGlitchEffects() {
  const elements = document.querySelectorAll('h1, h2, h3, .post-block, .main-inner, .content-wrap');
  elements.forEach(el => {
    // 添加更复杂的故障效果
    el.classList.add('enhanced-glitch');
    
    // 随机触发故障效果
    setInterval(() => {
      if (Math.random() > 0.95) { // 5% 概率
        el.classList.add('glitch-active');
        setTimeout(() => {
          el.classList.remove('glitch-active');
        }, 200);
      }
    }, 2000);
  });
}

// 光束效果
function addLaserBeams() {
  // 创建光束容器
  const laserContainer = document.createElement('div');
  laserContainer.id = 'laser-container';
  laserContainer.style.position = 'fixed';
  laserContainer.style.top = '0';
  laserContainer.style.left = '0';
  laserContainer.style.width = '100%';
  laserContainer.style.height = '100%';
  laserContainer.style.pointerEvents = 'none';
  laserContainer.style.zIndex = '-1';
  laserContainer.style.overflow = 'hidden';
  document.body.appendChild(laserContainer);
  
  // 创建随机光束
  setInterval(() => {
    if (Math.random() > 0.9) { // 10% 概率
      createLaserBeam();
    }
  }, 1000);
}

function createLaserBeam() {
  const laser = document.createElement('div');
  laser.className = 'laser-beam';
  laser.style.position = 'absolute';
  laser.style.height = '2px';
  laser.style.background = 'linear-gradient(90deg, transparent, #0ff, transparent)';
  laser.style.width = '100%';
  laser.style.left = '0';
  laser.style.top = Math.random() * 100 + '%';
  laser.style.opacity = '0';
  laser.style.boxShadow = '0 0 10px #0ff, 0 0 20px #0ff';
  
  document.getElementById('laser-container').appendChild(laser);
  
  // 动画
  let opacity = 0;
  const fadeInterval = setInterval(() => {
    opacity += 0.05;
    laser.style.opacity = opacity;
    if (opacity >= 0.6) {
      clearInterval(fadeInterval);
      setTimeout(() => {
        let fadeOut = 0.6;
        const fadeOutInterval = setInterval(() => {
          fadeOut -= 0.05;
          laser.style.opacity = fadeOut;
          if (fadeOut <= 0) {
            clearInterval(fadeOutInterval);
            if (laser.parentNode) {
              laser.remove();
            }
          }
        }, 50);
      }, 500);
    }
  }, 30);
}

// 启动更多效果
document.addEventListener('DOMContentLoaded', addMoreEffects);