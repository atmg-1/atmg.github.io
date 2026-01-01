// 添加更流畅的下划线光标效果到标题
function addTypingUnderscore() {
  const titles = document.querySelectorAll('.posts-expand .post-title');
  
  titles.forEach(title => {
    // 保存原始文本内容
    const originalText = title.textContent.trim();
    
    // 清空标题内容以进行打字动画
    title.textContent = '';
    
    // 创建一个容器来存放打字效果
    const textContainer = document.createElement('span');
    textContainer.textContent = '';
    
    // 创建下划线光标
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    
    title.appendChild(textContainer);
    title.appendChild(cursor);
    
    // 执行打字动画
    let i = 0;
    const typingSpeed = 150; // 每150毫秒打一个字，稍微放慢以增加可读性
    
    const typeWriter = setInterval(() => {
      if (i < originalText.length) {
        textContainer.textContent += originalText.charAt(i);
        i++;
        
        // 添加打字音效（可选，通过CSS动画模拟）
        title.style.transform = 'scale(1.02)';
        setTimeout(() => {
          title.style.transform = 'scale(1)';
        }, 40);
      } else {
        clearInterval(typeWriter);
        
        // 打字完成后，移除光标并添加完成类
        cursor.remove();
        
        // 添加完成后触发的赛博朋克故障效果
        title.classList.add('typing-complete');
        
        // 添加一个完成时的视觉反馈
        title.style.animation = 'cyberGlitch 3s infinite';
        
        // 添加一个轻微的脉冲效果来增强完成感
        // 检查是否已存在pulse动画样式，避免重复添加
        let existingStyle = document.getElementById('pulse-animation');
        if (!existingStyle) {
          const pulseStyle = document.createElement('style');
          pulseStyle.id = 'pulse-animation';
          pulseStyle.textContent = `
            @keyframes pulse {
              0% { text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #0080ff, 0 0 20px #0080ff; }
              50% { text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #0080ff, 0 0 40px #0080ff; }
              100% { text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #0080ff, 0 0 20px #0080ff; }
            }
          `;
          document.head.appendChild(pulseStyle);
        }
        title.style.animation = 'cyberGlitch 8s infinite, pulse 0.5s ease';
      }
    }, typingSpeed);
  });
}

// 代码雨效果实现
document.addEventListener('DOMContentLoaded', function() {
  // 添加标题打字效果
  addTypingUnderscore();
  
  // 添加游戏界面装饰元素
  addGameUIDecorations();
  
  // 创建代码雨容器
  const matrixContainer = document.createElement('div');
  matrixContainer.className = 'matrix-rain';
  document.body.appendChild(matrixContainer);

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
});