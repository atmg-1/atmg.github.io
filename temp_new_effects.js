// 发光功能
function createGlowingEffects() {
  // 为全屏文字添加发光效果
  const allTexts = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, div, a, li');
  allTexts.forEach(text => {
    if (Math.random() > 0.9) { // 10%概率
      text.classList.add('text-glow');
      text.style.textShadow = `0 0 ${Math.random() * 10 + 5}px rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.7)`;
    }
  });

  // 创建发光背景
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const glow = document.createElement('div');
      glow.className = 'glowing-point';
      glow.style.left = Math.random() * 100 + '%';
      glow.style.top = Math.random() * 100 + '%';
      glow.style.width = (Math.random() * 10 + 2) + 'px';
      glow.style.height = glow.style.width;
      glow.style.backgroundColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`;
      glow.style.boxShadow = `0 0 ${Math.random() * 20 + 10}px ${glow.style.backgroundColor.replace('0.6', '0.8')}`;
      glow.style.borderRadius = '50%';
      glow.style.position = 'fixed';
      glow.style.zIndex = '-1';
      glow.style.pointerEvents = 'none';
      glow.style.animation = `pulse ${Math.random() * 4 + 2}s infinite alternate`;
      document.body.appendChild(glow);
    }, i * 300);
  }
}

// 添加光标功能
function addInteractiveFeatures() {
  // 添加光标跟随
  const cursorFollower = document.createElement('div');
  cursorFollower.className = 'cursor-follower';
  cursorFollower.style.position = 'fixed';
  cursorFollower.style.width = '30px';
  cursorFollower.style.height = '30px';
  cursorFollower.style.border = '2px solid #00ffff';
  cursorFollower.style.borderRadius = '50%';
  cursorFollower.style.pointerEvents = 'none';
  cursorFollower.style.zIndex = '9999';
  cursorFollower.style.transition = 'all 0.1s ease';
  cursorFollower.style.mixBlendMode = 'difference';
  cursorFollower.style.left = '-100px'; // 微暂隐藏
  cursorFollower.style.top = '-100px';
  document.body.appendChild(cursorFollower);

  document.addEventListener('mousemove', (e) => {
    // 绑定光标
    cursorFollower.style.left = e.clientX - 15 + 'px';
    cursorFollower.style.top = e.clientY - 15 + 'px';
    
    // 添加随机故障效果
    if (Math.random() > 0.95) {
      cursorFollower.style.transform = `translate(${Math.random() * 6 - 3}px, ${Math.random() * 6 - 3}px)`;
      setTimeout(() => {
        cursorFollower.style.transform = 'translate(0, 0)';
      }, 100);
    }
  });

  // 为链接和按钮添加光标模拟
  const interactiveElements = document.querySelectorAll('a, button, input[type="button"], input[type="submit"]');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorFollower.style.transform = 'scale(1.5)';
      cursorFollower.style.borderColor = '#ff00ff';
    });
    
    el.addEventListener('mouseleave', () => {
      cursorFollower.style.transform = 'scale(1)';
      cursorFollower.style.borderColor = '#00ffff';
    });
  });

  // 添加鼠标点击效果
  document.addEventListener('click', (e) => {
    const clickEffect = document.createElement('div');
    clickEffect.className = 'click-effect';
    clickEffect.style.position = 'fixed';
    clickEffect.style.left = e.clientX - 10 + 'px';
    clickEffect.style.top = e.clientY - 10 + 'px';
    clickEffect.style.width = '20px';
    clickEffect.style.height = '20px';
    clickEffect.style.border = '2px solid #00ffff';
    clickEffect.style.borderRadius = '50%';
    clickEffect.style.pointerEvents = 'none';
    clickEffect.style.zIndex = '9998';
    clickEffect.style.animation = 'clickAnimation 0.6s ease-out';
    document.body.appendChild(clickEffect);

    setTimeout(() => {
      if (clickEffect.parentNode) {
        clickEffect.remove();
      }
    }, 600);
  });
}

// 创建随机变化的背景网格效果
function createDynamicBackground() {
  // 创建变化的背景网格效果
  const bgCanvas = document.createElement('canvas');
  bgCanvas.id = 'dynamic-bg';
  bgCanvas.style.position = 'fixed';
  bgCanvas.style.top = '0';
  bgCanvas.style.left = '0';
  bgCanvas.style.width = '100%';
  bgCanvas.style.height = '100%';
  bgCanvas.style.zIndex = '-2';
  bgCanvas.style.pointerEvents = 'none';
  bgCanvas.style.opacity = '0.15';
  document.body.appendChild(bgCanvas);

  const ctx = bgCanvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;
  bgCanvas.width = width;
  bgCanvas.height = height;

  // 创建随机点坐标
  const points = [];
  for (let i = 0; i < 100; i++) {
    points.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 0.5
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(0, 255, 255, 0.1)';
    
    // 绘制点和连接线
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      
      // 连接近的点
      for (let j = i + 1; j < points.length; j++) {
        const p2 = points[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - dist/100)})`;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
      
      // 游戏点位置
      p.x += p.vx;
      p.y += p.vy;
      
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    }
    
    requestAnimationFrame(draw);
  }
  
  draw();
  
  // 窗口大小改变时重新计算
  window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    bgCanvas.width = width;
    bgCanvas.height = height;
    
    // 增加新的点
    for (let i = points.length; i < 100; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5
      });
    }
  });
}

// 响应式前进/后退
function addNavigationEffects() {
  // 创建页面进入动画
  window.addEventListener('load', () => {
    const mainContent = document.querySelector('.main-inner') || document.querySelector('main') || document.querySelector('.content');
    if (mainContent) {
      mainContent.style.opacity = '0';
      mainContent.style.transform = 'translateY(20px)';
      mainContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      
      setTimeout(() => {
        mainContent.style.opacity = '1';
        mainContent.style.transform = 'translateY(0)';
      }, 500);
    }
  });
  
  // 增加回到顶部按钮
  const backToTop = document.createElement('div');
  backToTop.className = 'back-to-top';
  backToTop.innerHTML = '^^^^';
  backToTop.style.position = 'fixed';
  backToTop.style.bottom = '30px';
  backToTop.style.right = '30px';
  backToTop.style.width = '50px';
  backToTop.style.height = '50px';
  backToTop.style.backgroundColor = 'rgba(0, 255, 255, 0.2)';
  backToTop.style.border = '1px solid rgba(0, 255, 255, 0.5)';
  backToTop.style.borderRadius = '50%';
  backToTop.style.display = 'flex';
  backToTop.style.justifyContent = 'center';
  backToTop.style.alignItems = 'center';
  backToTop.style.cursor = 'pointer';
  backToTop.style.zIndex = '1000';
  backToTop.style.color = '#00ffff';
  backToTop.style.fontSize = '20px';
  backToTop.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.5)';
  backToTop.style.transition = 'all 0.3s ease';
  backToTop.style.opacity = '0';
  backToTop.style.pointerEvents = 'none';
  
  document.body.appendChild(backToTop);
  
  // 添加滚动显示/隐藏
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.style.opacity = '1';
      backToTop.style.pointerEvents = 'auto';
      backToTop.style.transform = 'scale(1)';
    } else {
      backToTop.style.opacity = '0';
      backToTop.style.pointerEvents = 'none';
      backToTop.style.transform = 'scale(0.8)';
    }
  });
  
  // 创建回到顶部功能
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 添加全局功能
function addMoreAdvancedEffects() {
  createGlowingEffects();
  addInteractiveFeatures();
  createDynamicBackground();
  addNavigationEffects();
  
  // 添加随时变化的背景网格效果
  setInterval(() => {
    if (Math.random() > 0.7) {
      const elements = document.querySelectorAll('.post-block, .main-inner, .content-wrap');
      elements.forEach(el => {
        if (Math.random() > 0.8) {
          el.style.filter = `hue-rotate(${Math.random() * 20 - 10}deg) saturate(1.1)`;
          setTimeout(() => {
            el.style.filter = '';
          }, 200);
        }
      });
    }
  }, 5000);
}

// 在加载完成后启动所有功能
setTimeout(addMoreAdvancedEffects, 2000); // 稍后运行更多效果