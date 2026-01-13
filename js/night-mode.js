// 夜间模式切换功能
document.addEventListener('DOMContentLoaded', function() {
  // 创建夜间模式切换按钮
  createNightModeToggle();
  
  // 检查用户偏好并应用相应模式
  checkUserPreference();
});

function createNightModeToggle() {
  // 检查是否已有切换按钮
  if (document.querySelector('.night-mode-toggle')) return;
  
  // 创建切换按钮
  const toggleButton = document.createElement('button');
  toggleButton.className = 'night-mode-toggle';
  toggleButton.innerHTML = '🌙';
  toggleButton.title = '切换夜间模式';
  toggleButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    font-size: 18px;
    cursor: pointer;
    z-index: 9999;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    box-shadow: 0 0 15px rgba(0, 200, 255, 0.3);
  `;
  
  // 添加霓虹效果
  toggleButton.addEventListener('mouseover', function() {
    this.style.boxShadow = '0 0 20px rgba(0, 200, 255, 0.6)';
    this.style.background = 'rgba(0, 200, 255, 0.3)';
  });
  
  toggleButton.addEventListener('mouseout', function() {
    this.style.boxShadow = '0 0 15px rgba(0, 200, 255, 0.3)';
    this.style.background = 'rgba(255, 255, 255, 0.2)';
  });
  
  // 添加点击事件
  toggleButton.addEventListener('click', function() {
    toggleNightMode();
  });
  
  // 添加到页面
  document.body.appendChild(toggleButton);
}

function toggleNightMode() {
  const isNightMode = document.body.classList.contains('night-mode');
  
  if (isNightMode) {
    // 切换到日间模式
    document.body.classList.remove('night-mode');
    document.querySelector('.night-mode-toggle').innerHTML = '🌙';
    localStorage.setItem('nightMode', 'false');
  } else {
    // 切换到夜间模式
    document.body.classList.add('night-mode');
    document.querySelector('.night-mode-toggle').innerHTML = '☀️';
    localStorage.setItem('nightMode', 'true');
  }
  
  // 添加切换动画效果
  document.body.style.transition = 'background 0.5s ease';
}

function checkUserPreference() {
  // 检查本地存储中的设置
  const savedMode = localStorage.getItem('nightMode');
  if (savedMode === 'true') {
    document.body.classList.add('night-mode');
    if (document.querySelector('.night-mode-toggle')) {
      document.querySelector('.night-mode-toggle').innerHTML = '☀️';
    }
  } else if (savedMode === 'false') {
    document.body.classList.remove('night-mode');
    if (document.querySelector('.night-mode-toggle')) {
      document.querySelector('.night-mode-toggle').innerHTML = '🌙';
    }
  } else {
    // 如果没有存储设置，检查系统偏好
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('night-mode');
      if (document.querySelector('.night-mode-toggle')) {
        document.querySelector('.night-mode-toggle').innerHTML = '☀️';
      }
      localStorage.setItem('nightMode', 'true');
    }
  }
}

// 监听系统主题变化
if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    if (!localStorage.getItem('nightMode')) {
      if (e.matches) {
        document.body.classList.add('night-mode');
        if (document.querySelector('.night-mode-toggle')) {
          document.querySelector('.night-mode-toggle').innerHTML = '☀️';
        }
      } else {
        document.body.classList.remove('night-mode');
        if (document.querySelector('.night-mode-toggle')) {
          document.querySelector('.night-mode-toggle').innerHTML = '🌙';
        }
      }
    }
  });
}