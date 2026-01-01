// 启动画面功能
function createStartupScreen() {
  // 创建启动屏幕容器
  const startupScreen = document.createElement('div');
  startupScreen.className = 'startup-screen';
  startupScreen.id = 'startup-screen';
  
  // 创建乱码文本元素
  const glitchText = document.createElement('div');
  glitchText.className = 'glitch-text-init';
  glitchText.setAttribute('data-text', '叶同学的博客');
  glitchText.textContent = '叶同学的博客';
  
  startupScreen.appendChild(glitchText);
  document.body.appendChild(startupScreen);
  
  // 添加点击事件以触发动效
  document.addEventListener('click', function() {
    if (startupScreen.parentNode) {
      // 触发赛博朋克风格动效
      const glitchText = startupScreen.querySelector('.glitch-text-init');
      if (glitchText) {
        glitchText.style.animation = 'glitch-disappear 0.8s forwards';
      }
      
      // 添加整体淡出效果
      startupScreen.style.animation = 'fadeOut 1s forwards';
      
      // 1秒后移除启动屏幕
      setTimeout(() => {
        startupScreen.remove();
        
        // 触发页面内容的进入动画
        const mainContent = document.querySelector('.main');
        if (mainContent) {
          mainContent.style.opacity = '0';
          mainContent.style.transform = 'translateY(20px)';
          
          // 使内容淡入
          setTimeout(() => {
            mainContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
          }, 10);
        }
      }, 800);
    }
  }, { once: true }); // 只执行一次
}

// 在DOM加载前创建启动屏幕
createStartupScreen();

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
    for (let i = 0; i < 100; i++) { // 增加粒子数量
      const particle = document.createElement('div');
      particle.className = 'dynamic-particle';
      
      // 随机位置
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.top = Math.random() * 100 + 'vh';
      
      // 随机大小
      const size = Math.random() * 4 + 1; // 增加最大尺寸
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      
      // 随机颜色
      const colors = ['#00ffff', '#ff00ff', '#00ff00', '#ffff00'];
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      // 随机动画延迟和持续时间
      particle.style.animationDelay = Math.random() * 15 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's'; // 增加动画时长
      
      document.body.appendChild(particle);
    }
  }

  function createLightBeams() {
    // 创建流动光束效果
    for (let i = 0; i < 8; i++) { // 增加光束数量
      const beam = document.createElement('div');
      beam.className = 'light-beam';
      
      // 随机方向 (水平或垂直)
      if (Math.random() > 0.5) {
        beam.classList.add('light-beam-horizontal');
      } else {
        beam.classList.add('light-beam-vertical');
      }
      
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

    // 为标题添加打字机效果
    const title = document.querySelector('.site-title, h1, .title');
    if (title) {
      // 如果是文章页面的标题，应用打字机效果
      if (window.location.pathname.includes('/20')) { // 检查是否是文章页
        title.classList.add('typewriter');
      } else {
        title.classList.add('cyber-glitch-text', 'cyber-flicker');
      }
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

    // 为文章内容添加像素文字效果
    if (window.location.pathname.includes('/20')) { // 只在文章页面应用像素效果
      const postContent = document.querySelector('.post-body, .post-content, .article-content');
      if (postContent) {
        // 为整个文章内容区域添加像素效果
        postContent.classList.add('pixel-content');
        
        // 为文章内的标题添加像素效果
        const headings = postContent.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach(heading => {
          heading.classList.add('pixel-title');
        });
      }
    }
    
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
      if (Math.random() > 0.7) { // 30% 概率添加故障效果
        // 随机选择故障效果类型
        const glitchTypes = ['text-glitch', 'text-glitch-v2', 'text-glitch-v3'];
        const randomGlitch = glitchTypes[Math.floor(Math.random() * glitchTypes.length)];
        heading.classList.add(randomGlitch);
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
    
    // 添加更多交互元素
    addInteractiveElements();
  }
  
  // 添加更多交互元素
  function addInteractiveElements() {
    // 为所有链接添加悬停效果
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      // 添加赛博朋克悬停效果
      link.classList.add('cyber-link');
      
      // 添加鼠标进入和离开事件
      link.addEventListener('mouseenter', function() {
        // 创建临时光效
        const glow = document.createElement('div');
        glow.className = 'link-glow-effect';
        glow.style.position = 'absolute';
        glow.style.width = '100%';
        glow.style.height = '100%';
        glow.style.top = '0';
        glow.style.left = '0';
        glow.style.pointerEvents = 'none';
        glow.style.borderRadius = getComputedStyle(this).borderRadius;
        this.appendChild(glow);
        
        // 300ms后移除光效
        setTimeout(() => {
          if (glow.parentNode) {
            glow.remove();
          }
        }, 300);
      });
      
      link.addEventListener('mouseleave', function() {
        // 鼠标离开时移除所有光效
        const glows = this.querySelectorAll('.link-glow-effect');
        glows.forEach(glow => glow.remove());
      });
    });
    
    // 为按钮添加动态效果
    const buttons = document.querySelectorAll('button, .btn, input[type="button"], input[type="submit"]');
    buttons.forEach(button => {
      button.classList.add('cyber-button');
      
      button.addEventListener('click', function() {
        // 点击时的脉冲效果
        const pulse = document.createElement('div');
        pulse.className = 'button-pulse';
        
        // 设置脉冲位置
        const rect = this.getBoundingClientRect();
        pulse.style.width = this.offsetWidth + 'px';
        pulse.style.height = this.offsetHeight + 'px';
        pulse.style.left = rect.left + 'px';
        pulse.style.top = rect.top + 'px';
        
        document.body.appendChild(pulse);
        
        // 600ms后移除脉冲
        setTimeout(() => {
          if (pulse.parentNode) {
            pulse.remove();
          }
        }, 600);
      });
    });
    
    // 添加全局悬停效果
    const interactiveElements = document.querySelectorAll('div, span, li, .post-block, .post-header');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', function() {
        if (Math.random() > 0.8) { // 20% 概率添加悬停效果
          this.classList.add('cyber-hover');
        }
      });
      
      element.addEventListener('mouseleave', function() {
        this.classList.remove('cyber-hover');
      });
    });
  }
});

// 为不同页面添加互动功能
function addInteractiveFeatures() {
  // 检查当前页面类型
  const path = window.location.pathname;
  
  if (path === '/' || path.includes('index.html')) {
    // 主页互动功能
    addHomeInteractions();
  } else if (path.includes('about')) {
    // 关于页面互动功能
    addAboutInteractions();
  } else if (path.includes('categories')) {
    // 分类页面互动功能
    addCategoryInteractions();
  } else if (path.includes('tags')) {
    // 标签页面互动功能
    addTagInteractions();
  }
}

// 主页互动功能
function addHomeInteractions() {
  // 为文章标题添加悬停效果
  const postTitles = document.querySelectorAll('.post-title-link');
  postTitles.forEach(title => {
    title.classList.add('cyber-link');
    
    title.addEventListener('mouseenter', function() {
      // 添加故障效果
      this.style.animation = 'textGlitch 0.3s infinite';
      
      // 创建悬停效果
      const hoverEffect = document.createElement('div');
      hoverEffect.className = 'post-hover-effect';
      hoverEffect.style.position = 'absolute';
      hoverEffect.style.bottom = '0';
      hoverEffect.style.left = '0';
      hoverEffect.style.width = '100%';
      hoverEffect.style.height = '2px';
      hoverEffect.style.background = 'linear-gradient(90deg, transparent, #00ffff, #ff00ff, transparent)';
      hoverEffect.style.opacity = '0';
      
      // 添加到链接
      this.appendChild(hoverEffect);
      
      // 动画进入
      setTimeout(() => {
        hoverEffect.style.transition = 'opacity 0.3s';
        hoverEffect.style.opacity = '1';
      }, 10);
    });
    
    title.addEventListener('mouseleave', function() {
      this.style.animation = '';
      // 移除悬停效果
      const hoverEffect = this.querySelector('.post-hover-effect');
      if (hoverEffect) {
        hoverEffect.style.opacity = '0';
        setTimeout(() => {
          if (hoverEffect.parentNode) {
            hoverEffect.remove();
          }
        }, 300);
      }
    });
  });
}

// 关于页面互动功能
function addAboutInteractions() {
  // 为关于页面添加打字机动画
  const aboutContent = document.querySelector('.main-inner');
  if (aboutContent) {
    // 添加赛博朋克风格边框
    aboutContent.classList.add('cyber-border');
    
    // 为段落添加点击效果
    const paragraphs = aboutContent.querySelectorAll('p');
    paragraphs.forEach((p, index) => {
      p.style.cursor = 'pointer';
      p.addEventListener('click', function() {
        // 点击时添加脉冲效果
        this.classList.add('pulse-effect');
        setTimeout(() => {
          this.classList.remove('pulse-effect');
        }, 500);
        
        // 添加故障艺术效果
        this.style.animation = 'textGlitch 0.5s';
        setTimeout(() => {
          this.style.animation = '';
        }, 500);
      });
    });
  }
}

// 分类页面互动功能
function addCategoryInteractions() {
  // 为分类项添加互动效果
  const categoryItems = document.querySelectorAll('.category-list-item a, .category-link');
  categoryItems.forEach(item => {
    item.classList.add('cyber-link');
    
    item.addEventListener('mouseenter', function() {
      // 添加霓虹发光效果
      this.style.textShadow = '0 0 5px #00ffff, 0 0 10px #00ffff';
      this.style.transition = 'all 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.textShadow = '';
    });
    
    // 点击分类时的动效
    item.addEventListener('click', function(e) {
      e.preventDefault();
      
      // 添加涟漪效果
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.backgroundColor = 'rgba(0, 255, 255, 0.4)';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'ripple-animation 0.6s linear';
      ripple.style.pointerEvents = 'none';
      
      // 计算点击位置
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.remove();
        }
      }, 600);
      
      // 延迟跳转
      setTimeout(() => {
        window.location.href = this.href;
      }, 300);
    });
  });
}

// 标签页面互动功能
function addTagInteractions() {
  // 为标签添加互动效果
  const tagItems = document.querySelectorAll('.tag-cloud a, .tag-link');
  tagItems.forEach((tag, index) => {
    tag.classList.add('cyber-tag');
    
    // 根据标签使用频率设置不同效果
    const fontSize = parseFloat(getComputedStyle(tag).fontSize);
    tag.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    
    tag.addEventListener('mouseenter', function() {
      // 随机大小变化
      const scale = 1 + (Math.random() * 0.3);
      this.style.transform = `scale(${scale})`;
      
      // 随机颜色变化
      const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'];
      this.style.color = colors[Math.floor(Math.random() * colors.length)];
      this.style.textShadow = `0 0 8px ${colors[Math.floor(Math.random() * colors.length)}`;
    });
    
    tag.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.color = '';
      this.style.textShadow = '';
    });
    
    // 点击标签时的特殊效果
    tag.addEventListener('click', function(e) {
      e.preventDefault();
      
      // 添加爆炸效果
      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          const particle = document.createElement('div');
          particle.style.position = 'absolute';
          particle.style.width = '6px';
          particle.style.height = '6px';
          particle.style.borderRadius = '50%';
          particle.style.backgroundColor = ['#00ffff', '#ff00ff', '#ffff00'][Math.floor(Math.random() * 3)];
          particle.style.left = `${e.offsetX}px`;
          particle.style.top = `${e.offsetY}px`;
          particle.style.pointerEvents = 'none';
          
          // 添加到点击位置
          this.style.position = 'relative';
          this.appendChild(particle);
          
          // 动画
          const angle = (i * 60) * Math.PI / 180;
          const distance = 30;
          particle.style.transition = 'all 0.6s ease-out';
          particle.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
          particle.style.opacity = '0';
          
          setTimeout(() => {
            if (particle.parentNode) {
              particle.remove();
            }
          }, 600);
        }, i * 100);
      }
      
      // 延迟跳转
      setTimeout(() => {
        window.location.href = this.href;
      }, 500);
    });
  });
}

// 初始化页面特定的互动功能
setTimeout(addInteractiveFeatures, 1000); // 等待启动屏幕消失后再初始化