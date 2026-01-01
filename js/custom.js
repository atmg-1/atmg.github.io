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
});