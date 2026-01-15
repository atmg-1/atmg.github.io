// 古典打字机效果实现
document.addEventListener('DOMContentLoaded', function() {
  // 检查是否应该显示打字机效果
  const showTypewriter = localStorage.getItem('typewriterShown');
  
  // 如果还没有显示过打字机效果，则显示它
  if (!showTypewriter) {
    showTypewriterAnimation();
  } else {
    // 如果已经显示过，则直接显示主要内容
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
      loadingScreen.style.display = 'none';
    }
    document.body.classList.remove('loading');
  }
});

function showTypewriterAnimation() {
  // 创建加载屏幕
  const loadingScreen = document.createElement('div');
  loadingScreen.className = 'loading-screen';
  loadingScreen.innerHTML = `
    <div class="typewriter-container">
      <div class="typewriter-content">
        <div class="typewriter-header">
          <span class="terminal-prompt">visitor@wandering-earth:~$ </span>
          <span class="typewriter-text" id="typewriter-text"></span>
          <span class="cursor" id="typewriter-cursor">█</span>
        </div>
        <div class="typewriter-output" id="typewriter-output"></div>
        <div class="typewriter-footer">
          <div class="system-info">
            <span class="info-item">System: Wandering Earth 2026</span>
            <span class="info-item">Kernel: Linux 5.4.0</span>
            <span class="info-item">Uptime: 24d 18h 32m</span>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertBefore(loadingScreen, document.body.firstChild);
  document.body.classList.add('loading');
  
  // 定义打字机内容序列
  const typewriterSequence = [
    { text: 'Initializing Wandering Earth System...', delay: 500 },
    { text: 'Loading quantum drive cores...', delay: 800 },
    { text: 'Calibrating planetary engines...', delay: 1000 },
    { text: 'Checking navigation systems...', delay: 700 },
    { text: 'Establishing quantum entanglement...', delay: 900 },
    { text: 'Accessing underground city networks...', delay: 800 },
    { text: 'Connecting to Beijing 2078 Control Center...', delay: 1000 },
    { text: 'Welcome to the Wandering Earth Blog!', delay: 1000 }
  ];
  
  // 开始打字机序列
  typeSequence(typewriterSequence, 0);
}

function typeSequence(sequence, index) {
  if (index >= sequence.length) {
    // 序列完成后，淡出加载屏幕
    setTimeout(fadeOutLoadingScreen, 2000);
    return;
  }
  
  const currentItem = sequence[index];
  const textElement = document.getElementById('typewriter-text');
  const cursorElement = document.getElementById('typewriter-cursor');
  
  // 清空当前文本
  textElement.textContent = '';
  
  // 显示当前项的文本，逐字打字
  typeText(currentItem.text, 0, () => {
    // 文本打完后等待指定延迟，然后继续下一项
    setTimeout(() => {
      // 添加输出到输出区域
      const outputElement = document.getElementById('typewriter-output');
      const outputLine = document.createElement('div');
      outputLine.className = 'output-line';
      outputLine.textContent = currentItem.text.replace('...', '');
      outputElement.appendChild(outputLine);
      
      // 继续下一个序列
      typeSequence(sequence, index + 1);
    }, currentItem.delay);
  });
}

function typeText(text, index, callback) {
  const textElement = document.getElementById('typewriter-text');
  const cursorElement = document.getElementById('typewriter-cursor');
  
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    
    // 随机打字速度，模拟真实打字效果
    const randomDelay = Math.random() * 100 + 50;
    setTimeout(() => typeText(text, index, callback), randomDelay);
  } else {
    // 文本完成，调用回调
    if (callback) callback();
  }
}

function fadeOutLoadingScreen() {
  const loadingScreen = document.querySelector('.loading-screen');
  if (loadingScreen) {
    // 添加淡出效果
    loadingScreen.style.transition = 'opacity 1.5s ease-out';
    loadingScreen.style.opacity = '0';
    
    setTimeout(() => {
      loadingScreen.style.display = 'none';
      document.body.classList.remove('loading');
      
      // 标记已经显示过打字机效果
      localStorage.setItem('typewriterShown', 'true');
    }, 1500);
  }
}

// 添加键盘事件，允许用户跳过动画
document.addEventListener('keydown', function(e) {
  if (document.body.classList.contains('loading')) {
    // 如果按下任意键，跳过动画
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
      loadingScreen.style.display = 'none';
      document.body.classList.remove('loading');
      
      // 标记已经显示过打字机效果
      localStorage.setItem('typewriterShown', 'true');
    }
  }
});