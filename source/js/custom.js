// 鍚�姩鐢婚潰鍔熻兘
function createStartupScreen() {
  // 鍒涘缓鍚�姩灞忓箷瀹瑰櫒
  const startupScreen = document.createElement('div');
  startupScreen.className = 'startup-screen';
  startupScreen.id = 'startup-screen';
  
  // 鍒涘缓涔辩爜鏂囨湰鍏冪礌
  const glitchText = document.createElement('div');
  glitchText.className = 'glitch-text-init';
  glitchText.setAttribute('data-text', '鍙跺悓瀛︾殑鍗氬�');
  glitchText.textContent = '鍙跺悓瀛︾殑鍗氬�';
  
  startupScreen.appendChild(glitchText);
  document.body.appendChild(startupScreen);
  
  // 娣诲姞鐐瑰嚮浜嬩欢浠ヨЕ鍙戝姩鏁�
  document.addEventListener('click', function() {
    if (startupScreen.parentNode) {
      // 瑙﹀彂璧涘崥鏈嬪厠椋庢牸鍔ㄦ晥
      const glitchText = startupScreen.querySelector('.glitch-text-init');
      if (glitchText) {
        glitchText.style.animation = 'glitch-disappear 0.8s forwards';
      }
      
      // 娣诲姞鏁翠綋娣″嚭鏁堟灉
      startupScreen.style.animation = 'fadeOut 1s forwards';
      
      // 1绉掑悗绉婚櫎鍚�姩灞忓箷
      setTimeout(() => {
        startupScreen.remove();
        
        // 瑙﹀彂椤甸潰鍐呭�鐨勮繘鍏ュ姩鐢�
        const mainContent = document.querySelector('.main');
        if (mainContent) {
          mainContent.style.opacity = '0';
          mainContent.style.transform = 'translateY(20px)';
          
          // 浣垮唴瀹规贰鍏�
          setTimeout(() => {
            mainContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
          }, 10);
        }
      }, 800);
    }
  }, { once: true }); // 鍙�墽琛屼竴娆�
}

// 鍦―OM鍔犺浇鍓嶅垱寤哄惎鍔ㄥ睆骞�
createStartupScreen();

// 浠ｇ爜闆ㄦ晥鏋滃疄鐜�
document.addEventListener('DOMContentLoaded', function() {
  // 鍒涘缓浠ｇ爜闆ㄥ�鍣�
  const matrixContainer = document.createElement('div');
  matrixContainer.className = 'matrix-rain';
  document.body.appendChild(matrixContainer);

  // 浠ｇ爜闆ㄥ瓧绗﹂泦
  const chars = '01abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?/'; 
  const fontSize = 14;
  const columns = Math.floor(window.innerWidth / fontSize);
  
  // 涓烘瘡鍒楀垱寤轰竴涓�瓧绗︽祦
  const drops = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * -100); // 闅忔満璧峰�浣嶇疆
  }

  // 缁樺埗浠ｇ爜闆�
  function drawMatrix() {
    // 娓呴櫎褰撳墠鍐呭�
    matrixContainer.innerHTML = '';
    
    for (let i = 0; i < drops.length; i++) {
      // 闅忔満閫夋嫨瀛楃�
      const text = chars[Math.floor(Math.random() * chars.length)];
      
      // 鍒涘缓瀛楃�鍏冪礌
      const span = document.createElement('span');
      span.textContent = text;
      span.style.left = (i * fontSize) + 'px';
      span.style.top = (drops[i] * fontSize) + 'px';
      span.style.animationDuration = (Math.random() * 5 + 3) + 's'; // 闅忔満鍔ㄧ敾鏃堕暱
      
      matrixContainer.appendChild(span);
      
      // 鏇存柊浣嶇疆锛屽�鏋滃埌搴曢儴鍒欓噸缃�埌椤堕儴
      drops[i]++;
      if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.975) {
        drops[i] = Math.floor(Math.random() * -20);
      }
    }
    
    requestAnimationFrame(drawMatrix);
  }

  // 鍚�姩浠ｇ爜闆�
  drawMatrix();

  // 绐楀彛澶у皬鏀瑰彉鏃堕噸鏂拌�绠�
  window.addEventListener('resize', function() {
    const newColumns = Math.floor(window.innerWidth / fontSize);
    if (newColumns > drops.length) {
      // 娣诲姞鏂板垪
      for (let i = drops.length; i < newColumns; i++) {
        drops[i] = Math.floor(Math.random() * -100);
      }
    }
  });

  // 娣诲姞鏍囬�鎵撳瓧鏁堟灉
  addTypingUnderscore();
  
  // 娣诲姞娓告垙鐣岄潰瑁呴グ鍏冪礌
  addGameUIDecorations();
  
  // 鍒涘缓鏁版嵁娴佽�楗�
  const dataStream = document.createElement('div');
  dataStream.className = 'data-stream';
  document.body.appendChild(dataStream);

  // 鍒涘缓鍏ㄦ伅缃戞牸
  const hologramGrid = document.createElement('div');
  hologramGrid.className = 'hologram-grid';
  document.body.appendChild(hologramGrid);

  // 鍒涘缓鍔ㄦ€佺矑瀛愭晥鏋�
  createDynamicParticles();

  // 鍒涘缓娴佸姩鍏夋潫鏁堟灉
  createLightBeams();

  function addGameUIDecorations() {
    // 鍒涘缓鍥涗釜瑙掔殑瑁呴グ鍏冪礌
    const corners = ['tl', 'tr', 'bl', 'br'];
    corners.forEach(pos => {
      const corner = document.createElement('div');
      corner.className = `game-ui-corner ${pos}`;
      document.body.appendChild(corner);
    });
  }

  function createDynamicParticles() {
    // 鍒涘缓澶氫釜鍔ㄦ€佺矑瀛�
    for (let i = 0; i < 100; i++) { // 澧炲姞绮掑瓙鏁伴噺
      const particle = document.createElement('div');
      particle.className = 'dynamic-particle';
      
      // 闅忔満浣嶇疆
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.top = Math.random() * 100 + 'vh';
      
      // 闅忔満澶у皬
      const size = Math.random() * 4 + 1; // 澧炲姞鏈€澶у昂瀵�
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      
      // 闅忔満棰滆壊
      const colors = ['#00ffff', '#ff00ff', '#00ff00', '#ffff00'];
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      // 闅忔満鍔ㄧ敾寤惰繜鍜屾寔缁�椂闂�
      particle.style.animationDelay = Math.random() * 15 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's'; // 澧炲姞鍔ㄧ敾鏃堕暱
      
      document.body.appendChild(particle);
    }
  }

  function createLightBeams() {
    // 鍒涘缓娴佸姩鍏夋潫鏁堟灉
    for (let i = 0; i < 8; i++) { // 澧炲姞鍏夋潫鏁伴噺
      const beam = document.createElement('div');
      beam.className = 'light-beam';
      
      // 闅忔満鏂瑰悜 (姘村钩鎴栧瀭鐩�)
      if (Math.random() > 0.5) {
        beam.classList.add('light-beam-horizontal');
      } else {
        beam.classList.add('light-beam-vertical');
      }
      
      // 闅忔満鍔ㄧ敾寤惰繜
      beam.style.animationDelay = (Math.random() * 20) + 's';
      
      document.body.appendChild(beam);
    }
  }

  // 鍒涘缓璧涘崥鏈嬪厠鍔ㄧ敾鍏冪礌
  function createCyberAnims() {
    // 鍒涘缓缃戞牸鍔ㄧ敾鑳屾櫙
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

    // 鍒涘缓澶氫釜鍏夋潫鎵�弿鏁堟灉
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const beam = document.createElement('div');
        beam.className = 'cyber-beam';
        beam.style.setProperty('--delay', (i * 1.5) + 's');
        document.body.appendChild(beam);
      }, i * 1500);
    }

    // 涓烘爣棰樻坊鍔犳墦瀛楁満鏁堟灉
    // 涓烘墍鏈夋爣棰樻坊鍔犳墦瀛楁満鏁堟灉
    const allTitles = document.querySelectorAll('h1, h2, h3, h4, h5, h6, .site-title, .title');
    allTitles.forEach(title => {
      // 涓烘爣棰樻坊鍔犳墦瀛楁満鏁堟灉
      title.classList.add('typewriter');
      
      // 鍚屾椂娣诲姞璧涘崥鏈嬪厠鏁堟灉
      title.classList.add('cyber-glitch-text', 'cyber-flicker');
    });

    // 涓洪〉闈�腑鐨勬枃鏈�厓绱犳坊鍔犺禌鍗氭湅鍏嬪姩鐢�
    const textElements = document.querySelectorAll('h1, h2, h3, h4, .post-title, .post-header');
    textElements.forEach(el => {
      if (Math.random() > 0.7) { // 30% 姒傜巼娣诲姞鍔ㄧ敾
        el.classList.add('cyber-flicker');
      }
    });
  }

  // 璋冪敤鍑芥暟鍒涘缓璧涘崥鏈嬪厠鍔ㄧ敾
  createCyberAnims();

  // 鍒涘缓椤甸潰鍒囨崲鏁呴殰鑹烘湳鏁堟灉
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

    // 鐩戝惉椤甸潰璺宠浆浜嬩欢
    document.addEventListener('click', function(e) {
      // 妫€鏌ョ偣鍑荤殑鍏冪礌鏄�惁涓洪摼鎺�
      const link = e.target.closest('a');
      if (link && link.href && !link.hasAttribute('target') && !link.href.startsWith('mailto:') && !link.href.startsWith('tel:')) {
        // 闃绘�榛樿�琛屼负鐩村埌鍔ㄧ敾瀹屾垚
        e.preventDefault();
        
        // 鏄剧ず鏁呴殰鑹烘湳鏁堟灉
        glitchContainer.classList.add('active');
        
        // 绛夊緟鍔ㄧ敾瀹屾垚鍚庤烦杞�
        setTimeout(() => {
          window.location.href = link.href;
        }, 800);
      }
    });

    // 澶勭悊娴忚�鍣ㄥ墠杩涘悗閫€鎸夐挳
    window.addEventListener('popstate', function() {
      glitchContainer.classList.add('active');
    });

    // 椤甸潰鍔犺浇瀹屾垚鍚庨殣钘忔晠闅滄晥鏋�
    window.addEventListener('load', function() {
      glitchContainer.classList.remove('active');
    });
  }

  // 鍒濆�鍖栭〉闈㈣烦杞�晠闅滆壓鏈�晥鏋�
  createPageGlitchTransition();

  // 鍒濆�鍖栨枃瀛楀姩鐢绘晥鏋�
  initTextAnimations();

  // 鍒濆�鍖栨枃瀛楀姩鐢绘晥鏋滃嚱鏁�
  function initTextAnimations() {
    // 涓烘爣棰樻坊鍔犳晠闅滆壓鏈�晥鏋�
    const titles = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    titles.forEach(title => {
      // 娣诲姞鏁呴殰鏁堟灉绫�
      title.classList.add('text-glitch');
      title.setAttribute('data-text', title.textContent);
      
      // 涓烘爣棰樻坊鍔犻湏铏瑰彂鍏夋晥鏋�
      title.classList.add('text-glow');
      
      // 娣诲姞榧犳爣鎮�仠鏃剁殑鏁呴殰鏁堟灉
      title.addEventListener('mouseenter', function() {
        // 闄愬埗鏁呴殰鍔ㄧ敾娆℃暟涓�34娆★紙鏍规嵁鐢ㄦ埛鍋忓ソ锛�
        let glitchCount = 0;
        const maxGlitchCount = 34;
        
        const glitchInterval = setInterval(() => {
          glitchCount++;
          if (glitchCount >= maxGlitchCount) {
            clearInterval(glitchInterval);
            // 閲嶇疆涓烘�甯哥姸鎬�
            title.style.transform = 'translate(0)';
          } else {
            // 闅忔満鏁呴殰鍙樻崲
            const x = Math.random() * 4 - 2;
            const y = Math.random() * 4 - 2;
            title.style.transform = `translate(${x}px, ${y}px)`;
            
            // 闅忔満棰滆壊鍋忕Щ
            const color1 = Math.random() > 0.5 ? '#ff00c1' : 'transparent';
            const color2 = Math.random() > 0.5 ? '#00fff9' : 'transparent';
            
            // 鍒涘缓浼�厓绱犳潵妯℃嫙鏁呴殰鏁堟灉
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
              
              // 杩欓噷闇€瑕佸湪鏍囬�鐨勭浉瀵瑰畾浣嶅�鍣ㄤ腑娣诲姞杩欎簺鍏冪礌
              title.style.position = 'relative';
              title.appendChild(overlay1);
              title.appendChild(overlay2);
            }
          }
        }, 100); // 姣�100姣��瑙﹀彂涓€娆℃晠闅滄晥鏋�
      });
      
      // 绉婚櫎鎮�仠鏃舵竻鐞嗕簨浠�
      title.addEventListener('mouseleave', function() {
        // 绉婚櫎娣诲姞鐨勬晠闅滆�鐩栧眰
        const overlays = title.querySelectorAll('.glitch-overlay');
        overlays.forEach(overlay => overlay.remove());
        title.style.transform = 'translate(0)';
      });
    });

    // 涓烘墍鏈夊唴瀹规坊鍔犲儚绱犳枃瀛楁晥鏋�
    const allContent = document.querySelectorAll('.post-body, .post-content, .article-content, p, span, div');
    allContent.forEach(content => {
      // 涓哄唴瀹瑰尯鍩熸坊鍔犲儚绱犳晥鏋�
      content.classList.add('pixel-content');
      
      // 涓哄唴瀹逛腑鐨勬爣棰樻坊鍔犲儚绱犳晥鏋�
      const headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach(heading => {
        heading.classList.add('pixel-title');
      });
    });
    
    // 涓烘枃绔犲唴瀹逛腑鐨勬枃鏈�坊鍔犻殢鏈哄儚绱犳枃瀛楁晥鏋�
    const paragraphs = document.querySelectorAll('p, span, div');
    paragraphs.forEach(p => {
      if (Math.random() > 0.7) { // 30% 姒傜巼娣诲姞鍍忕礌鏁堟灉
        p.classList.add('pixel-text');
      }
    });

    // 涓洪摼鎺ユ坊鍔犻殢鏈哄姩鐢绘晥鏋�
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      const effects = ['text-glow', 'text-pulse', 'text-flicker'];
      const randomEffect = effects[Math.floor(Math.random() * effects.length)];
      link.classList.add(randomEffect);
    });

    // 涓虹壒瀹氬厓绱犳坊鍔犳晠闅滄晥鏋�
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
      if (Math.random() > 0.7) { // 30% 姒傜巼娣诲姞鏁呴殰鏁堟灉
        // 闅忔満閫夋嫨鏁呴殰鏁堟灉绫诲瀷
        const glitchTypes = ['text-glitch', 'text-glitch-v2', 'text-glitch-v3'];
        const randomGlitch = glitchTypes[Math.floor(Math.random() * glitchTypes.length)];
        heading.classList.add(randomGlitch);
        heading.setAttribute('data-text', heading.textContent);
      }
    });

    // 涓洪〉闈�腑鐨勬枃鏈�坊鍔犳祦鍔ㄦ晥鏋�
    const postTitles = document.querySelectorAll('.post-title');
    postTitles.forEach(title => {
      if (Math.random() > 0.6) { // 40% 姒傜巼娣诲姞娴佸姩鏁堟灉
        title.classList.add('text-flow');
      }
    });
    
    // 娣诲姞鏇村�浜や簰鍏冪礌
    addInteractiveElements();
  }
  
  // 娣诲姞鏇村�浜や簰鍏冪礌
  function addInteractiveElements() {
    // 涓烘墍鏈夐摼鎺ユ坊鍔犳偓鍋滄晥鏋�
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      // 娣诲姞璧涘崥鏈嬪厠鎮�仠鏁堟灉
      link.classList.add('cyber-link');
      
      // 娣诲姞榧犳爣杩涘叆鍜岀�寮€浜嬩欢
      link.addEventListener('mouseenter', function() {
        // 鍒涘缓涓存椂鍏夋晥
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
        
        // 300ms鍚庣Щ闄ゅ厜鏁�
        setTimeout(() => {
          if (glow.parentNode) {
            glow.remove();
          }
        }, 300);
      });
      
      link.addEventListener('mouseleave', function() {
        // 榧犳爣绂诲紑鏃剁Щ闄ゆ墍鏈夊厜鏁�
        const glows = this.querySelectorAll('.link-glow-effect');
        glows.forEach(glow => glow.remove());
      });
    });
    
    // 涓烘寜閽�坊鍔犲姩鎬佹晥鏋�
    const buttons = document.querySelectorAll('button, .btn, input[type="button"], input[type="submit"]');
    buttons.forEach(button => {
      button.classList.add('cyber-button');
      
      button.addEventListener('click', function() {
        // 鐐瑰嚮鏃剁殑鑴夊啿鏁堟灉
        const pulse = document.createElement('div');
        pulse.className = 'button-pulse';
        
        // 璁剧疆鑴夊啿浣嶇疆
        const rect = this.getBoundingClientRect();
        pulse.style.width = this.offsetWidth + 'px';
        pulse.style.height = this.offsetHeight + 'px';
        pulse.style.left = rect.left + 'px';
        pulse.style.top = rect.top + 'px';
        
        document.body.appendChild(pulse);
        
        // 600ms鍚庣Щ闄よ剦鍐�
        setTimeout(() => {
          if (pulse.parentNode) {
            pulse.remove();
          }
        }, 600);
      });
    });
    
    // 娣诲姞鍏ㄥ眬鎮�仠鏁堟灉
    const interactiveElements = document.querySelectorAll('div, span, li, .post-block, .post-header');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', function() {
        if (Math.random() > 0.8) { // 20% 姒傜巼娣诲姞鎮�仠鏁堟灉
          this.classList.add('cyber-hover');
        }
      });
      
      element.addEventListener('mouseleave', function() {
        this.classList.remove('cyber-hover');
      });
    });
  }
});

// 涓轰笉鍚岄〉闈㈡坊鍔犱簰鍔ㄥ姛鑳�
function addInteractiveFeatures() {
  // 妫€鏌ュ綋鍓嶉〉闈㈢被鍨�
  const path = window.location.pathname;
  
  if (path === '/' || path.includes('index.html')) {
    // 涓婚〉浜掑姩鍔熻兘
    addHomeInteractions();
  } else if (path.includes('about')) {
    // 鍏充簬椤甸潰浜掑姩鍔熻兘
    addAboutInteractions();
  } else if (path.includes('categories')) {
    // 鍒嗙被椤甸潰浜掑姩鍔熻兘
    addCategoryInteractions();
  } else if (path.includes('tags')) {
    // 鏍囩�椤甸潰浜掑姩鍔熻兘
    addTagInteractions();
  }
}

// 涓婚〉浜掑姩鍔熻兘
function addHomeInteractions() {
  // 涓烘枃绔犳爣棰樻坊鍔犳偓鍋滄晥鏋�
  const postTitles = document.querySelectorAll('.post-title-link');
  postTitles.forEach(title => {
    title.classList.add('cyber-link');
    
    title.addEventListener('mouseenter', function() {
      // 娣诲姞鏁呴殰鏁堟灉
      this.style.animation = 'textGlitch 0.3s infinite';
      
      // 鍒涘缓鎮�仠鏁堟灉
      const hoverEffect = document.createElement('div');
      hoverEffect.className = 'post-hover-effect';
      hoverEffect.style.position = 'absolute';
      hoverEffect.style.bottom = '0';
      hoverEffect.style.left = '0';
      hoverEffect.style.width = '100%';
      hoverEffect.style.height = '2px';
      hoverEffect.style.background = 'linear-gradient(90deg, transparent, #00ffff, #ff00ff, transparent)';
      hoverEffect.style.opacity = '0';
      
      // 娣诲姞鍒伴摼鎺�
      this.appendChild(hoverEffect);
      
      // 鍔ㄧ敾杩涘叆
      setTimeout(() => {
        hoverEffect.style.transition = 'opacity 0.3s';
        hoverEffect.style.opacity = '1';
      }, 10);
    });
    
    title.addEventListener('mouseleave', function() {
      this.style.animation = '';
      // 绉婚櫎鎮�仠鏁堟灉
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

// 鍏充簬椤甸潰浜掑姩鍔熻兘
function addAboutInteractions() {
  // 涓哄叧浜庨〉闈㈡坊鍔犳墦瀛楁満鍔ㄧ敾
  const aboutContent = document.querySelector('.main-inner');
  if (aboutContent) {
    // 娣诲姞璧涘崥鏈嬪厠椋庢牸杈规�
    aboutContent.classList.add('cyber-border');
    
    // 涓烘�钀芥坊鍔犵偣鍑绘晥鏋�
    const paragraphs = aboutContent.querySelectorAll('p');
    paragraphs.forEach((p, index) => {
      p.style.cursor = 'pointer';
      p.addEventListener('click', function() {
        // 鐐瑰嚮鏃舵坊鍔犺剦鍐叉晥鏋�
        this.classList.add('pulse-effect');
        setTimeout(() => {
          this.classList.remove('pulse-effect');
        }, 500);
        
        // 娣诲姞鏁呴殰鑹烘湳鏁堟灉
        this.style.animation = 'textGlitch 0.5s';
        setTimeout(() => {
          this.style.animation = '';
        }, 500);
      });
    });
  }
}

// 鍒嗙被椤甸潰浜掑姩鍔熻兘
function addCategoryInteractions() {
  // 涓哄垎绫婚」娣诲姞浜掑姩鏁堟灉
  const categoryItems = document.querySelectorAll('.category-list-item a, .category-link');
  categoryItems.forEach(item => {
    item.classList.add('cyber-link');
    
    item.addEventListener('mouseenter', function() {
      // 娣诲姞闇撹櫣鍙戝厜鏁堟灉
      this.style.textShadow = '0 0 5px #00ffff, 0 0 10px #00ffff';
      this.style.transition = 'all 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.textShadow = '';
    });
    
    // 鐐瑰嚮鍒嗙被鏃剁殑鍔ㄦ晥
    item.addEventListener('click', function(e) {
      e.preventDefault();
      
      // 娣诲姞娑熸吉鏁堟灉
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.backgroundColor = 'rgba(0, 255, 255, 0.4)';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'ripple-animation 0.6s linear';
      ripple.style.pointerEvents = 'none';
      
      // 璁＄畻鐐瑰嚮浣嶇疆
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
      
      // 寤惰繜璺宠浆
      setTimeout(() => {
        window.location.href = this.href;
      }, 300);
    });
  });
}

// 鏍囩�椤甸潰浜掑姩鍔熻兘
function addTagInteractions() {
  // 涓烘爣绛炬坊鍔犱簰鍔ㄦ晥鏋�
  const tagItems = document.querySelectorAll('.tag-cloud a, .tag-link');
  tagItems.forEach((tag, index) => {
    tag.classList.add('cyber-tag');
    
    // 鏍规嵁鏍囩�浣跨敤棰戠巼璁剧疆涓嶅悓鏁堟灉
    const fontSize = parseFloat(getComputedStyle(tag).fontSize);
    tag.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    
    tag.addEventListener('mouseenter', function() {
      // 闅忔満澶у皬鍙樺寲
      const scale = 1 + (Math.random() * 0.3);
      this.style.transform = `scale(${scale})`;
      
      // 闅忔満棰滆壊鍙樺寲
      const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'];
      this.style.color = colors[Math.floor(Math.random() * colors.length)];
      this.style.textShadow = `0 0 8px ${colors[Math.floor(Math.random() * colors.length)]}`;
    });
    
    tag.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.color = '';
      this.style.textShadow = '';
    });
    
    // 鐐瑰嚮鏍囩�鏃剁殑鐗规畩鏁堟灉
    tag.addEventListener('click', function(e) {
      e.preventDefault();
      
      // 娣诲姞鐖嗙偢鏁堟灉
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
          
          // 娣诲姞鍒扮偣鍑讳綅缃�
          this.style.position = 'relative';
          this.appendChild(particle);
          
          // 鍔ㄧ敾
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
      
      // 寤惰繜璺宠浆
      setTimeout(() => {
        window.location.href = this.href;
      }, 500);
    });
  });
}

// 鍒涘缓鑳屾櫙涔辩爜鍜岄粦瀹�唬鐮佹晥鏋�
function createHackerBackgroundEffects() {
  // 鍒涘缓鑳屾櫙鎵�弿绾挎晥鏋�
  const scanLine = document.createElement('div');
  scanLine.className = 'scan-line';
  document.body.appendChild(scanLine);
  
  // 鍒涘缓澶氫釜榛戝�浠ｇ爜琛�
  for (let i = 0; i < 25; i++) {  // 澧炲姞鏁伴噺
    setTimeout(() => {
      const hackerLine = document.createElement('div');
      hackerLine.className = 'hacker-code-line';
      
      // 鐢熸垚闅忔満浣嶇疆
      hackerLine.style.left = Math.random() * 100 + '%';
      hackerLine.style.animationDuration = (Math.random() * 8 + 6) + 's';  // 鍑忓皯鏃堕棿锛屽姞蹇�姩鐢�
      
      // 鐢熸垚闅忔満涔辩爜鏂囨湰
      const chars = '0123456789ABCDEFabcdef!@#$%^&*()_+-=[]{}|;:,.<>?/';
      let text = '';
      for (let j = 0; j < 120; j++) {  // 澧炲姞鏂囨湰闀垮害
        text += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      
      hackerLine.textContent = text;
      
      // 闅忔満閫夋嫨棰滆壊
      if (Math.random() > 0.5) {
        hackerLine.style.color = '#00ffff';
        hackerLine.style.textShadow = '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.6);';
      } else {
        hackerLine.style.color = '#ff00ff';
        hackerLine.style.textShadow = '0 0 10px rgba(255, 0, 255, 0.8), 0 0 20px rgba(255, 0, 255, 0.6);';
      }
      
      document.body.appendChild(hackerLine);
      
      // 璁剧疆鐢熷懡鍛ㄦ湡
      setTimeout(() => {
        if (hackerLine.parentNode) {
          hackerLine.remove();
        }
      }, 12000);  // 鍑忓皯鐢熷懡鍛ㄦ湡
    }, i * 400);  // 璋冩暣闂撮殧
  }
  
  // 鍒涘缓闅忔満瀹氫綅鐨勪贡鐮佹枃鏈�
  for (let i = 0; i < 20; i++) {  // 澧炲姞鏁伴噺
    setTimeout(() => {
      const glitchText = document.createElement('div');
      glitchText.className = 'glitch-text-bg';
      glitchText.style.left = Math.random() * 100 + '%';
      glitchText.style.top = Math.random() * 100 + '%';
      glitchText.style.animationDuration = (Math.random() * 20 + 8) + 's';  // 鍑忓皯鏃堕棿
      
      // 鐢熸垚闅忔満涔辩爜
      const chars = '0123456789ABCDEFabcdef';
      let text = '0x';
      for (let j = 0; j < 12; j++) {  // 澧炲姞闀垮害
        text += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      
      glitchText.textContent = text;
      
      // 闅忔満棰滆壊
      if (Math.random() > 0.5) {
        glitchText.style.color = '#00ffff';
        glitchText.style.textShadow = '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.6);';
      } else {
        glitchText.style.color = '#ff00ff';
        glitchText.style.textShadow = '0 0 10px rgba(255, 0, 255, 0.8), 0 0 20px rgba(255, 0, 255, 0.6);';
      }
      
      document.body.appendChild(glitchText);
    }, i * 800);
  }
  
  // 鍒涘缓娴�姩浠ｇ爜鐗囨�
  for (let i = 0; i < 40; i++) {  // 澧炲姞鏁伴噺
    setTimeout(() => {
      const floatingCode = document.createElement('div');
      floatingCode.className = 'floating-code';
      floatingCode.style.left = Math.random() * 100 + '%';
      floatingCode.style.animationDuration = (Math.random() * 15 + 10) + 's';  // 鍑忓皯鏃堕棿
      floatingCode.style.animationDelay = (Math.random() * 4) + 's';
      
      // 鐢熸垚闅忔満浠ｇ爜鐗囨�
      const codeFragments = [
        '01010101', '11110000', '0xCAFEBABE', 'void*ptr', 'NULL',
        'sizeof', 'malloc', 'int i=0', 'return', 'if(x>0)',
        'while(1)', 'for(;;)', 'main()', 'printf', '0xDEADBEEF',
        '0x4558504C', 'HTTP/1.1', 'TCP/IP', 'UDP', 'SSL/TLS',
        'AES-256', 'SHA-256', 'RSA', 'PKI', 'VPN', 'SSH', 'FTP',
        'root@cyber:', '#include', 'memset', 'memcpy', 'kernel',
        '0xFFFFFFFF', 'exploit', 'buffer', 'overflow', 'shellcode',
        'NOP-SLED', 'RCE', '0day', 'payload', 'encrypt', 'decrypt'
      ];
      
      floatingCode.textContent = codeFragments[Math.floor(Math.random() * codeFragments.length)];
      
      // 闅忔満棰滆壊
      if (Math.random() > 0.5) {
        floatingCode.style.color = '#00ffff';
        floatingCode.style.textShadow = '0 0 8px rgba(0, 255, 255, 0.8), 0 0 15px rgba(0, 255, 255, 0.6);';
      } else {
        floatingCode.style.color = '#ff00ff';
        floatingCode.style.textShadow = '0 0 8px rgba(255, 0, 255, 0.8), 0 0 15px rgba(255, 0, 255, 0.6);';
      }
      
      document.body.appendChild(floatingCode);
      
      // 璁剧疆鐢熷懡鍛ㄦ湡
      setTimeout(() => {
        if (floatingCode.parentNode) {
          floatingCode.remove();
        }
      }, 20000);  // 鍑忓皯鐢熷懡鍛ㄦ湡
    }, i * 250);  // 璋冩暣闂撮殧
  }
  
  // 鍒涘缓闈欐€佷贡鐮佽�楗�
  for (let i = 0; i < 12; i++) {  // 澧炲姞鏁伴噺
    const staticGlitch = document.createElement('div');
    staticGlitch.className = 'static-glitch';
    staticGlitch.style.left = (i * 8.33) + '%';  // 鍧囧寑鍒嗗竷
    staticGlitch.style.top = '0';
    
    // 鐢熸垚涔辩爜鏂囨湰
    const chars = '0123456789ABCDEF';
    let text = '';
    for (let j = 0; j < 25; j++) {  // 澧炲姞闀垮害
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    staticGlitch.textContent = text;
    
    // 闅忔満棰滆壊
    if (Math.random() > 0.5) {
      staticGlitch.style.color = '#00ffff';
      staticGlitch.style.textShadow = '0 0 12px rgba(0, 255, 255, 0.8), 0 0 25px rgba(0, 255, 255, 0.6);';
    } else {
      staticGlitch.style.color = '#ff00ff';
      staticGlitch.style.textShadow = '0 0 12px rgba(255, 0, 255, 0.8), 0 0 25px rgba(255, 0, 255, 0.6);';
    }
    
    document.body.appendChild(staticGlitch);
  }
}

// 鍒涘缓鑳屾櫙涔辩爜鍜岄粦瀹�唬鐮佹晥鏋�
createHackerBackgroundEffects();

// 鍒涘缓楂樼骇璧涘崥鏈嬪厠鏁堟灉
function createAdvancedCyberpunkEffects() {
  // 鍒涘缓鏁版嵁娴佹晥鏋滃�鍣�
  const dataStreamEffect = document.createElement('div');
  dataStreamEffect.className = 'data-stream-effect';
  document.body.appendChild(dataStreamEffect);
  
  // 鍒涘缓楂樼骇缃戞牸绯荤粺
  const advancedGrid = document.createElement('div');
  advancedGrid.className = 'advanced-grid';
  document.body.appendChild(advancedGrid);
  
  // 涓轰富瑕佸唴瀹瑰尯鍩熸坊鍔犻珮绾ч湏铏规晥鏋�
  const mainContent = document.querySelector('.main-inner') || document.querySelector('main') || document.querySelector('.content');
  if (mainContent) {
    mainContent.classList.add('advanced-neon', 'holographic-effect');
  }
  
  // 涓烘墍鏈夋枃绔犲潡娣诲姞缁堟瀬璧涘崥鏈嬪厠鏁堟灉
  const postBlocks = document.querySelectorAll('.post-block, .article-item, .post-content');
  postBlocks.forEach(block => {
    block.classList.add('ultimate-cyberpunk');
    
    // 娣诲姞榧犳爣绉诲姩浜嬩欢鏉ュ垱寤虹矑瀛愮垎鐐告晥鏋�
    block.addEventListener('mousemove', function(e) {
      if (Math.random() > 0.7) { // 30% 姒傜巼瑙﹀彂
        createParticleExplosion(e, this);
      }
    });
  });
  
  // 涓烘爣棰樻坊鍔犻珮绾ф晠闅滄晥鏋�
  const titles = document.querySelectorAll('h1, h2, h3, .post-title, .site-title');
  titles.forEach(title => {
    title.classList.add('glitch-advanced');
    title.setAttribute('data-text', title.textContent);
    
    // 娣诲姞鐐瑰嚮鏃剁殑闇撹櫣鎵�弿绾挎晥鏋�
    title.addEventListener('click', function() {
      createNeonScanline();
    });
  });
  
  // 鍒涘缓闇撹櫣鎵�弿绾挎晥鏋�
  function createNeonScanline() {
    const scanline = document.createElement('div');
    scanline.className = 'neon-scanline';
    document.body.appendChild(scanline);
    
    // 3绉掑悗绉婚櫎鎵�弿绾�
    setTimeout(() => {
      if (scanline.parentNode) {
        scanline.remove();
      }
    }, 3000);
  }
  
  // 鍒涘缓绮掑瓙鐖嗙偢鏁堟灉
  function createParticleExplosion(e, container) {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    
    // 璁＄畻鐩稿�浜庡�鍣ㄧ殑浣嶇疆
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    particleContainer.style.left = x + 'px';
    particleContainer.style.top = y + 'px';
    
    // 鍒涘缓澶氫釜绮掑瓙
    for (let i = 0; i < 12; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // 闅忔満棰滆壊
      const colors = ['#00ffff', '#ff00ff', '#00ff00', '#ffff00'];
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      // 闅忔満鏂瑰悜鍜岃窛绂�
      const angle = (i * 30) * Math.PI / 180; // 30搴﹂棿闅�
      const distance = 50 + Math.random() * 50; // 50-100px
      
      particle.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
      particle.style.setProperty('--ty', Math.sin(angle) * distance + 'px');
      
      particleContainer.appendChild(particle);
    }
    
    container.appendChild(particleContainer);
    
    // 600ms鍚庣Щ闄ょ矑瀛愬�鍣�
    setTimeout(() => {
      if (particleContainer.parentNode) {
        particleContainer.remove();
      }
    }, 600);
  }
  
  // 鍒涘缓楂樼骇绮掑瓙绯荤粺
  for (let i = 0; i < 150; i++) { // 澧炲姞绮掑瓙鏁伴噺
    setTimeout(() => {
      const advancedParticle = document.createElement('div');
      advancedParticle.className = 'advanced-particle';
      
      // 闅忔満浣嶇疆
      advancedParticle.style.left = Math.random() * 100 + 'vw';
      advancedParticle.style.top = Math.random() * 100 + 'vh';
      
      // 闅忔満棰滆壊
      const colors = [
        'rgba(0, 255, 255, 0.7)',  // 闈掕壊
        'rgba(255, 0, 255, 0.7)',  // 鍝佺孩
        'rgba(0, 255, 200, 0.7)',  // 钃濈豢鑹�
        'rgba(255, 200, 0, 0.7)'   // 榛勮壊
      ];
      advancedParticle.style.color = colors[Math.floor(Math.random() * colors.length)];
      
      // 闅忔満澶у皬
      const size = Math.random() * 3 + 1;
      advancedParticle.style.width = size + 'px';
      advancedParticle.style.height = size + 'px';
      
      // 闅忔満鍔ㄧ敾寤惰繜
      advancedParticle.style.animationDelay = Math.random() * 10 + 's';
      
      document.body.appendChild(advancedParticle);
      
      // 璁剧疆鐢熷懡鍛ㄦ湡
      setTimeout(() => {
        if (advancedParticle.parentNode) {
          advancedParticle.remove();
        }
      }, 20000);
    }, i * 100); // 鍒嗘壒鍒涘缓锛岄伩鍏嶆€ц兘闂��
  }
  
  // 涓洪〉闈�腑鐨勬枃鏈�厓绱犳坊鍔犺禌鍗氭湅鍏嬪厜鏅曟晥鏋�
  const textElements = document.querySelectorAll('p, span, div, li');
  textElements.forEach(el => {
    if (Math.random() > 0.9) { // 10% 姒傜巼娣诲姞鍏夋檿鏁堟灉
      el.classList.add('cyber-glow');
    }
  });
}

// 鍒涘缓楂樼骇璧涘崥鏈嬪厠鏁堟灉
function createAdvancedCyberpunkEffects() {
  // 鍒涘缓鏁版嵁娴佹晥鏋滃�鍣�
  const dataStreamEffect = document.createElement('div');
  dataStreamEffect.className = 'data-stream-effect';
  document.body.appendChild(dataStreamEffect);
  
  // 鍒涘缓楂樼骇缃戞牸绯荤粺
  const advancedGrid = document.createElement('div');
  advancedGrid.className = 'advanced-grid';
  document.body.appendChild(advancedGrid);
  
  // 鍒涘缓楂樼骇缃戞牸绯荤粺澧炲己
  const advancedGridEnhanced = document.createElement('div');
  advancedGridEnhanced.className = 'advanced-grid-enhanced';
  document.body.appendChild(advancedGridEnhanced);
  
  // 鍒涘缓鍏夋潫鐭╅樀鏁堟灉
  const lightBeamMatrix = document.createElement('div');
  lightBeamMatrix.className = 'light-beam-matrix';
  document.body.appendChild(lightBeamMatrix);
  
  // 涓轰富瑕佸唴瀹瑰尯鍩熸坊鍔犻珮绾ч湏铏规晥鏋�
  const mainContent = document.querySelector('.main-inner') || document.querySelector('main') || document.querySelector('.content');
  if (mainContent) {
    mainContent.classList.add('advanced-neon', 'holographic-effect', 'hologram-enhanced');
  }
  
  // 涓烘墍鏈夋枃绔犲潡娣诲姞缁堟瀬璧涘崥鏈嬪厠鏁堟灉
  const postBlocks = document.querySelectorAll('.post-block, .article-item, .post-content');
  postBlocks.forEach(block => {
    block.classList.add('ultimate-cyberpunk', 'space-warp');
    
    // 娣诲姞榧犳爣绉诲姩浜嬩欢鏉ュ垱寤虹矑瀛愮垎鐐告晥鏋�
    block.addEventListener('mousemove', function(e) {
      if (Math.random() > 0.7) { // 30% 姒傜巼瑙﹀彂
        createParticleExplosion(e, this);
      }
    });
    
    // 娣诲姞楂樼骇鏁呴殰鏁堟灉
    block.classList.add('multi-layer-glitch');
    block.setAttribute('data-text', block.textContent.substring(0, 20) + '...');
  });
  
  // 涓烘爣棰樻坊鍔犻珮绾ф晠闅滄晥鏋�
  const titles = document.querySelectorAll('h1, h2, h3, .post-title, .site-title');
  titles.forEach(title => {
    title.classList.add('glitch-advanced', 'advanced-glitch');
    title.setAttribute('data-text', title.textContent);
    
    // 娣诲姞鐐瑰嚮鏃剁殑闇撹櫣鎵�弿绾挎晥鏋�
    title.addEventListener('click', function() {
      createNeonScanline();
    });
    
    // 娣诲姞闇撹櫣绠℃晥鏋�
    title.classList.add('neon-tube');
  });
  
  // 涓哄�鑸�爮娣诲姞鍏ㄦ伅闈㈡澘鏁堟灉
  const navbar = document.querySelector('.header') || document.querySelector('.nav');
  if (navbar) {
    navbar.classList.add('holographic-panel');
  }
  
  // 涓轰晶杈规爮娣诲姞鍏ㄦ伅闈㈡澘鏁堟灉
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.classList.add('holographic-panel', 'hologram-projection');
  }
  
  // 涓洪〉鑴氭坊鍔犲叏鎭�潰鏉挎晥鏋�
  const footer = document.querySelector('footer') || document.querySelector('.footer');
  if (footer) {
    footer.classList.add('holographic-panel');
  }
  
  // 鍒涘缓闇撹櫣鎵�弿绾挎晥鏋�
  function createNeonScanline() {
    const scanline = document.createElement('div');
    scanline.className = 'neon-scanline';
    document.body.appendChild(scanline);
    
    // 3绉掑悗绉婚櫎鎵�弿绾�
    setTimeout(() => {
      if (scanline.parentNode) {
        scanline.remove();
      }
    }, 3000);
  }
  
  // 鍒涘缓绮掑瓙鐖嗙偢鏁堟灉
  function createParticleExplosion(e, container) {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    
    // 璁＄畻鐩稿�浜庡�鍣ㄧ殑浣嶇疆
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    particleContainer.style.left = x + 'px';
    particleContainer.style.top = y + 'px';
    
    // 鍒涘缓澶氫釜绮掑瓙
    for (let i = 0; i < 12; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // 闅忔満棰滆壊
      const colors = ['#00ffff', '#ff00ff', '#00ff00', '#ffff00'];
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      // 闅忔満鏂瑰悜鍜岃窛绂�
      const angle = (i * 30) * Math.PI / 180; // 30搴﹂棿闅�
      const distance = 50 + Math.random() * 50; // 50-100px
      
      particle.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
      particle.style.setProperty('--ty', Math.sin(angle) * distance + 'px');
      
      particleContainer.appendChild(particle);
    }
    
    container.appendChild(particleContainer);
    
    // 600ms鍚庣Щ闄ょ矑瀛愬�鍣�
    setTimeout(() => {
      if (particleContainer.parentNode) {
        particleContainer.remove();
      }
    }, 600);
  }
  
  // 鍒涘缓楂樼骇绮掑瓙绯荤粺
  for (let i = 0; i < 150; i++) { // 澧炲姞绮掑瓙鏁伴噺
    setTimeout(() => {
      const advancedParticle = document.createElement('div');
      advancedParticle.className = 'advanced-particle';
      
      // 闅忔満浣嶇疆
      advancedParticle.style.left = Math.random() * 100 + 'vw';
      advancedParticle.style.top = Math.random() * 100 + 'vh';
      
      // 闅忔満棰滆壊
      const colors = [
        'rgba(0, 255, 255, 0.7)',  // 闈掕壊
        'rgba(255, 0, 255, 0.7)',  // 鍝佺孩
        'rgba(0, 255, 200, 0.7)',  // 钃濈豢鑹�
        'rgba(255, 200, 0, 0.7)'   // 榛勮壊
      ];
      advancedParticle.style.color = colors[Math.floor(Math.random() * colors.length)];
      
      // 闅忔満澶у皬
      const size = Math.random() * 3 + 1;
      advancedParticle.style.width = size + 'px';
      advancedParticle.style.height = size + 'px';
      
      // 闅忔満鍔ㄧ敾寤惰繜
      advancedParticle.style.animationDelay = Math.random() * 10 + 's';
      
      document.body.appendChild(advancedParticle);
      
      // 璁剧疆鐢熷懡鍛ㄦ湡
      setTimeout(() => {
        if (advancedParticle.parentNode) {
          advancedParticle.remove();
        }
      }, 20000);
    }, i * 100); // 鍒嗘壒鍒涘缓锛岄伩鍏嶆€ц兘闂��
  }
  
  // 鍒涘缓鍔ㄦ€佺矑瀛愬満
  createDynamicParticleField();
  
  // 涓洪〉闈�腑鐨勬枃鏈�厓绱犳坊鍔犺禌鍗氭湅鍏嬪厜鏅曟晥鏋�
  const textElements = document.querySelectorAll('p, span, div, li');
  textElements.forEach(el => {
    if (Math.random() > 0.9) { // 10% 姒傜巼娣诲姞鍏夋檿鏁堟灉
      el.classList.add('cyber-glow');
    }
    
    // 涓烘洿澶氬厓绱犳坊鍔犲厜璋辨壂鎻忔晥鏋�
    if (Math.random() > 0.8) { // 20% 姒傜巼娣诲姞鎵�弿鏁堟灉
      el.classList.add('spectrum-scan');
    }
  });
}

// 鍒涘缓鍔ㄦ€佺矑瀛愬満
function createDynamicParticleField() {
  const particleField = document.createElement('div');
  particleField.className = 'particle-field';
  document.body.appendChild(particleField);
  
  // 鍒涘缓澶氫釜鍔ㄦ€佺矑瀛�
  for (let i = 0; i < 200; i++) { // 澧炲姞绮掑瓙鏁伴噺
    setTimeout(() => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // 闅忔満浣嶇疆
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      particle.style.left = posX + '%';
      particle.style.top = posY + '%';
      
      // 闅忔満棰滆壊
      const colors = ['#00ffff', '#ff00ff', '#00ff00', '#ffff00', '#ff5500'];
      particle.style.color = colors[Math.floor(Math.random() * colors.length)];
      
      // 闅忔満澶у皬
      const size = Math.random() * 4 + 1;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      
      // 闅忔満杩愬姩璺濈�
      const tx = (Math.random() - 0.5) * 200;
      const ty = (Math.random() - 0.5) * 200;
      particle.style.setProperty('--tx', tx + 'px');
      particle.style.setProperty('--ty', ty + 'px');
      
      // 闅忔満鍔ㄧ敾鏃堕暱
      particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
      
      particleField.appendChild(particle);
      
      // 璁剧疆鐢熷懡鍛ㄦ湡
      setTimeout(() => {
        if (particle.parentNode) {
          particle.remove();
        }
      }, 25000);
    }, i * 50); // 鍒嗘壒鍒涘缓
  }
}

// 鍒濆�鍖栭珮绾ц禌鍗氭湅鍏嬫晥鏋�
setTimeout(createAdvancedCyberpunkEffects, 1500); // 绛夊緟鍏朵粬鏁堟灉鍔犺浇鍚庡啀鍒濆�鍖�

// 鍒濆�鍖栭〉闈㈢壒瀹氱殑浜掑姩鍔熻兘
setTimeout(addInteractiveFeatures, 1000); // 绛夊緟鍚�姩灞忓箷娑堝け鍚庡啀鍒濆�鍖�

// 添加高级赛博朋克视觉效果
function addAdvancedCyberpunkEffects() {
  // 创建全息扫描效果
  const hologramScan = document.createElement('div');
  hologramScan.className = 'hologram-scan-effect';
  hologramScan.style.cssText = position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999; opacity: 0.3;
  document.body.appendChild(hologramScan);

  // 创建动态网格扫描
  const dynamicGrid = document.createElement('div');
  dynamicGrid.className = 'dynamic-grid-scan';
  document.body.appendChild(dynamicGrid);

  // 创建等离子球效果
  const plasmaOrb = document.createElement('div');
  plasmaOrb.className = 'plasma-orb';
  plasmaOrb.style.left = Math.random() * (window.innerWidth - 300) + 'px';
  plasmaOrb.style.top = Math.random() * (window.innerHeight - 300) + 'px';
  document.body.appendChild(plasmaOrb);

  // 为所有标题添加霓虹效果
  const allTitles = document.querySelectorAll('h1, h2, h3, h4, h5, h6, .post-title, .site-title');
  allTitles.forEach(title => {
    title.classList.add('capsule-glow');
    title.classList.add('neon-glitch-art');
    title.setAttribute('data-text', title.textContent);
  });

  // 为主要内容区域添加赛博等离子体效果
  const mainContent = document.querySelector('.main-inner') || document.querySelector('main') || document.querySelector('.content');
  if (mainContent) {
    mainContent.classList.add('cyber-plasma');
  }

  // 为所有文章块添加量子波动效果
  const postBlocks = document.querySelectorAll('.post-block, .article-item, .post-content');
  postBlocks.forEach(block => {
    block.classList.add('quantum-flux');
    block.classList.add('circuit-board');
  });

  // 为所有链接添加霓虹效果
  const allLinks = document.querySelectorAll('a');
  allLinks.forEach(link => {
    if (!link.classList.contains('no-neon')) {
      link.classList.add('capsule-glow');
    }
  });

  // 为所有按钮添加霓虹边框效果
  const buttons = document.querySelectorAll('button, .btn, .button, input[type='submit'], input[type='button']');
  buttons.forEach(button => {
    button.classList.add('cyberpunk-border');
  });

  // 添加鼠标追踪粒子效果
  document.addEventListener('mousemove', (e) => {
    createMouseParticle(e.clientX, e.clientY);
  });

  // 添加点击波纹效果
  document.addEventListener('click', (e) => {
    createRippleEffect(e.clientX, e.clientY);
  });
}

// 创建鼠标追踪粒子
function createMouseParticle(x, y) {
  if (Math.random() > 0.7) {  // 减少粒子数量以提高性能
    const particle = document.createElement('div');
    particle.style.cssText = position: fixed; width: 4px; height: 4px; border-radius: 50%; background: ; pointer-events: none; z-index: 9998; left: px; top: px; transition: all 0.5s ease; transform: translate(-50%, -50%);
    document.body.appendChild(particle);

    // 动画粒子
    setTimeout(() => {
      particle.style.transform = 	ranslate(px, px)
      particle.style.opacity = '0';
    }, 10);

    // 移除粒子
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 500);
  }
}

// 创建点击波纹效果
function createRippleEffect(x, y) {
  const ripple = document.createElement('div');
  ripple.style.cssText = position: fixed; width: 0; height: 0; border-radius: 50%; background: radial-gradient(circle, rgba(0, 255, 255, 0.6), transparent); transform: translate(-50%, -50%); pointer-events: none; z-index: 9997; left: px; top: px;
  document.body.appendChild(ripple);

  // 动画波纹
  setTimeout(() => {
    ripple.style.width = '100px';
    ripple.style.height = '100px';
    ripple.style.opacity = '0';
  }, 10);

  // 移除波纹
  setTimeout(() => {
    if (ripple.parentNode) {
      ripple.parentNode.removeChild(ripple);
    }
  }, 600);
}

// 在页面加载完成后添加高级效果
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addAdvancedCyberpunkEffects);
} else {
  addAdvancedCyberpunkEffects();
}

// 添加更多高级赛博朋克效果
function addMoreAdvancedEffects() {
  // 为整个页面添加全息投影效果
  document.body.classList.add('hologram-projection');
  
  // 为主要内容区域添加等离子球效果
  const mainContent = document.querySelector('.main-inner') || document.querySelector('main') || document.querySelector('.content');
  if (mainContent) {
    mainContent.classList.add('plasma-ball');
  }
  
  // 为所有文章标题添加多层故障效果
  const postTitles = document.querySelectorAll('.post-title-link, h1, h2');
  postTitles.forEach(title => {
    title.classList.add('multi-layer-glitch');
    title.setAttribute('data-text', title.textContent);
  });
  
  // 为所有段落添加赛博控制台效果
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(p => {
    p.classList.add('cyber-console');
  });
  
  // 创建高级粒子场
  createAdvancedParticleField();
  
  // 为侧边栏添加全息面板效果
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.classList.add('holographic-panel');
  }
  
  // 为页眉添加霓虹管效果
  const header = document.querySelector('.header');
  if (header) {
    header.classList.add('neon-tube');
  }
}

// 创建高级粒子场
function createAdvancedParticleField() {
  const particleField = document.querySelector('.particle-field') || document.createElement('div');
  if (!document.querySelector('.particle-field')) {
    particleField.className = 'particle-field';
    document.body.appendChild(particleField);
  }
  
  // 创建更多动态粒子
  for (let i = 0; i < 300; i++) {
    setTimeout(() => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // 随机位置
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      particle.style.left = posX + '%';
      particle.style.top = posY + '%';
      
      // 随机颜色
      const colors = ['#00ffff', '#ff00ff', '#00ff00', '#ffff00', '#ff5500', '#00ffcc'];
      particle.style.color = colors[Math.floor(Math.random() * colors.length)];
      
      // 随机大小
      const size = Math.random() * 5 + 1;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      
      // 随机运动距离
      const tx = (Math.random() - 0.5) * 300;
      const ty = (Math.random() - 0.5) * 300;
      particle.style.setProperty('--tx', tx + 'px');
      particle.style.setProperty('--ty', ty + 'px');
      
      // 随机动画时长
      particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
      
      particleField.appendChild(particle);
      
      // 设置生命周期
      setTimeout(() => {
        if (particle.parentNode) {
          particle.remove();
        }
      }, 30000);
    }, i * 75); // 分批创建
  }
}

// 添加更多高级效果
setTimeout(addMoreAdvancedEffects, 2000); // 稍后添加更多效果

