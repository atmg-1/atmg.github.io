// 代码雨效果实现
document.addEventListener('DOMContentLoaded', function() {
  // 创建代码雨容器
  const matrixContainer = document.createElement('div');
  matrixContainer.className = 'matrix-rain';
  document.body.appendChild(matrixContainer);

  // 代码雨字符集
  const chars = '01abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?/'; 
  const fontSize = 14;
  const columns = Math.floor(window.innerWidth / fontSize);
  
  // 为每列创建一个字符流
  const drops = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * -100); // 随机起始位置
  }

  // 绘制代码雨
  function drawMatrix() {
    // 清除当前内容
    matrixContainer.innerHTML = '';
    
    for (let i = 0; i < drops.length; i++) {
      // 随机选择字符
      const text = chars[Math.floor(Math.random() * chars.length)];
      
      // 创建字符元素
      const span = document.createElement('span');
      span.textContent = text;
      span.style.left = (i * fontSize) + 'px';
      span.style.top = (drops[i] * fontSize) + 'px';
      span.style.animationDuration = (Math.random() * 5 + 3) + 's'; // 随机动画时长
      
      matrixContainer.appendChild(span);
      
      // 更新位置，如果到底部则重置到顶部
      drops[i]++;
      if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.975) {
        drops[i] = Math.floor(Math.random() * -20);
      }
    }
    
    requestAnimationFrame(drawMatrix);
  }

  // 启动代码雨
  drawMatrix();

  // 窗口大小改变时重新计算
  window.addEventListener('resize', function() {
    const newColumns = Math.floor(window.innerWidth / fontSize);
    if (newColumns > drops.length) {
      // 添加新列
      for (let i = drops.length; i < newColumns; i++) {
        drops[i] = Math.floor(Math.random() * -100);
      }
    }
  });

  // 添加标题打字效果
  addTypingUnderscore();
  
  // 添加游戏界面装饰元素
  addGameUIDecorations();
  
  // 创建数据流装饰
  const dataStream = document.createElement('div');
  dataStream.className = 'data-stream';
  document.body.appendChild(dataStream);

  // 创建全息网格
  const hologramGrid = document.createElement('div');
  hologramGrid.className = 'hologram-grid';
  document.body.appendChild(hologramGrid);

  // 创建动态粒子效果
  createDynamicParticles();

  // 创建流动光束效果
  createLightBeams();

  function addGameUIDecorations() {
    // 创建四个角的装饰元素
    const corners = ['tl', 'tr', 'bl', 'br'];
    corners.forEach(pos => {
      const corner = document.createElement('div');
      corner.className = `game-ui-corner ${pos}`;
      document.body.appendChild(corner);
    });
  }

  function createDynamicParticles() {
    // 创建多个动态粒子
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'dynamic-particle';
      
      // 随机位置
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.top = Math.random() * 100 + 'vh';
      
      // 随机大小
      const size = Math.random() * 3 + 1;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      
      // 随机动画延迟
      particle.style.animationDelay = Math.random() * 15 + 's';
      
      document.body.appendChild(particle);
    }
  }

  function createLightBeams() {
    // 创建流动光束效果
    for (let i = 0; i < 5; i++) {
      const beam = document.createElement('div');
      beam.className = 'light-beam';
      
      // 随机动画延迟
      beam.style.animationDelay = (Math.random() * 20) + 's';
      
      document.body.appendChild(beam);
    }
  }

  // 创建赛博朋克动画元素
  function createCyberAnims() {
    // 创建网格动画背景
    const grid = document.createElement('div');
    grid.className = 'cyber-grid';
    grid.style.position = 'fixed';
    grid.style.top = '0';
    grid.style.left = '0';
    grid.style.width = '100%';
    grid.style.height = '100%';
    grid.style.pointerEvents = 'none';
    grid.style.zIndex = '-2';
    grid.style.opacity = '0.3';
    document.body.appendChild(grid);

    // 创建多个光束扫描效果
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const beam = document.createElement('div');
        beam.className = 'cyber-beam';
        beam.style.setProperty('--delay', (i * 1.5) + 's');
        document.body.appendChild(beam);
      }, i * 1500);
    }

    // 为标题添加故障动画
    const title = document.querySelector('.site-title, h1, .title');
    if (title) {
      title.classList.add('cyber-glitch-text', 'cyber-flicker');
    }

    // 为页面中的文本元素添加赛博朋克动画
    const textElements = document.querySelectorAll('h1, h2, h3, h4, .post-title, .post-header');
    textElements.forEach(el => {
      if (Math.random() > 0.7) { // 30% 概率添加动画
        el.classList.add('cyber-flicker');
      }
    });
  }

  // 调用函数创建赛博朋克动画
  createCyberAnims();

  // 创建页面切换故障艺术效果
  function createPageGlitchTransition() {
    const glitchContainer = document.createElement('div');
    glitchContainer.className = 'page-glitch-transition';
    glitchContainer.innerHTML = `
      <div class="glitch-static"></div>
      <div class="glitch-text">LOADING...</div>
      <div class="glitch-line"></div>
      <div class="glitch-line"></div>
      <div class="glitch-line"></div>
      <div class="glitch-line"></div>
    `;
    document.body.appendChild(glitchContainer);

    // 监听页面跳转事件
    document.addEventListener('click', function(e) {
      // 检查点击的元素是否为链接
      const link = e.target.closest('a');
      if (link && link.href && !link.hasAttribute('target') && !link.href.startsWith('mailto:') && !link.href.startsWith('tel:')) {
        // 阻止默认行为直到动画完成
        e.preventDefault();
        
        // 显示故障艺术效果
        glitchContainer.classList.add('active');
        
        // 等待动画完成后跳转
        setTimeout(() => {
          window.location.href = link.href;
        }, 800);
      }
    });

    // 处理浏览器前进后退按钮
    window.addEventListener('popstate', function() {
      glitchContainer.classList.add('active');
    });

    // 页面加载完成后隐藏故障效果
    window.addEventListener('load', function() {
      glitchContainer.classList.remove('active');
    });
  }

  // 初始化页面跳转故障艺术效果
  createPageGlitchTransition();

  // 初始化文字动画效果
  initTextAnimations();

  // 初始化文字动画效果函数
  function initTextAnimations() {
    // 为标题添加故障艺术效果
    const titles = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    titles.forEach(title => {
      // 添加故障效果类
      title.classList.add('text-glitch');
      title.setAttribute('data-text', title.textContent);
      
      // 为标题添加霓虹发光效果
      title.classList.add('text-glow');
      
      // 添加鼠标悬停时的故障效果
      title.addEventListener('mouseenter', function() {
        // 限制故障动画次数为34次（根据用户偏好）
        let glitchCount = 0;
        const maxGlitchCount = 34;
        
        const glitchInterval = setInterval(() => {
          glitchCount++;
          if (glitchCount >= maxGlitchCount) {
            clearInterval(glitchInterval);
            // 重置为正常状态
            title.style.transform = 'translate(0)';
          } else {
            // 随机故障变换
            const x = Math.random() * 4 - 2;
            const y = Math.random() * 4 - 2;
            title.style.transform = `translate(${x}px, ${y}px)`;
            
            // 随机颜色偏移
            const color1 = Math.random() > 0.5 ? '#ff00c1' : 'transparent';
            const color2 = Math.random() > 0.5 ? '#00fff9' : 'transparent';
            
            // 创建伪元素来模拟故障效果
            if (!title.querySelector('.glitch-overlay')) {
              const overlay1 = document.createElement('div');
              overlay1.className = 'glitch-overlay';
              overlay1.style.position = 'absolute';
              overlay1.style.top = '0';
              overlay1.style.left = '0';
              overlay1.style.width = '100%';
              overlay1.style.height = '100%';
              overlay1.style.pointerEvents = 'none';
              overlay1.style.color = color1;
              overlay1.style.textShadow = '2px 0 #ff00c1';
              overlay1.style.marginLeft = '2px';
              overlay1.style.opacity = '0.7';
              overlay1.textContent = title.textContent;
              
              const overlay2 = document.createElement('div');
              overlay2.className = 'glitch-overlay';
              overlay2.style.position = 'absolute';
              overlay2.style.top = '0';
              overlay2.style.left = '0';
              overlay2.style.width = '100%';
              overlay2.style.height = '100%';
              overlay2.style.pointerEvents = 'none';
              overlay2.style.color = color2;
              overlay2.style.textShadow = '2px 0 #00fff9';
              overlay2.style.marginLeft = '-2px';
              overlay2.style.opacity = '0.7';
              overlay2.textContent = title.textContent;
              
              // 这里需要在标题的相对定位容器中添加这些元素
              title.style.position = 'relative';
              title.appendChild(overlay1);
              title.appendChild(overlay2);
            }
          }
        }, 100); // 每100毫秒触发一次故障效果
      });
      
      // 移除悬停时清理事件
      title.addEventListener('mouseleave', function() {
        // 移除添加的故障覆盖层
        const overlays = title.querySelectorAll('.glitch-overlay');
        overlays.forEach(overlay => overlay.remove());
        title.style.transform = 'translate(0)';
      });
    });

    // 为文章内容中的文本添加随机像素文字效果
    const paragraphs = document.querySelectorAll('p, span, div');
    paragraphs.forEach(p => {
      if (Math.random() > 0.7) { // 30% 概率添加像素效果
        p.classList.add('pixel-text');
      }
    });

    // 为链接添加随机动画效果
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      const effects = ['text-glow', 'text-pulse', 'text-flicker'];
      const randomEffect = effects[Math.floor(Math.random() * effects.length)];
      link.classList.add(randomEffect);
    });

    // 为特定元素添加故障效果
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
      if (Math.random() > 0.5) { // 50% 概率添加故障效果
        heading.classList.add('text-glitch');
        heading.setAttribute('data-text', heading.textContent);
      }
    });

    // 为页面中的文本添加流动效果
    const postTitles = document.querySelectorAll('.post-title');
    postTitles.forEach(title => {
      if (Math.random() > 0.6) { // 40% 概率添加流动效果
        title.classList.add('text-flow');
      }
    });
  }
});