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
          <span class="typewriter-text" id="typewriter-text"></span>
          <span class="cursor" id="typewriter-cursor">█</span>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertBefore(loadingScreen, document.body.firstChild);
  document.body.classList.add('loading');
  
  // 定义博客标题序列
  const blogTitleSequence = [
    '叶_',
    '叶同_',
    '叶同__',
    '叶同学_',
    '叶同学__',
    '叶同学的_',
    '叶同学的博_',
    '叶同学的博客_'
  ];
  
  // 开始标题打字机序列
  typeBlogTitle(blogTitleSequence, 0);
}

// 逐步显示博客标题的函数
function typeBlogTitle(sequence, index) {
  if (index >= sequence.length) {
    // 标题显示完成后，移除下划线并淡出加载屏幕
    setTimeout(() => {
      const textElement = document.getElementById('typewriter-text');
      if (textElement) {
        textElement.textContent = textElement.textContent.replace(/_/g, ''); // 移除所有下划线
      }
      setTimeout(fadeOutLoadingScreen, 1000);
    }, 1000);
    return;
  }
  
  const currentItem = sequence[index];
  const textElement = document.getElementById('typewriter-text');
  const cursorElement = document.getElementById('typewriter-cursor');
  
  // 清空当前文本
  textElement.textContent = '';
  
  // 显示当前项的文本，逐字打字
  typeText(currentItem, 0, () => {
    // 文本打完后等待指定延迟，然后继续下一项
    setTimeout(() => {
      // 继续下一个序列
      typeBlogTitle(sequence, index + 1);
    }, 800);
  });
}

// 逐字打字函数
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