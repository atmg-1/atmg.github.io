// 访问统计和页面性能监控
document.addEventListener('DOMContentLoaded', function() {
  // 页面访问统计
  trackPageView();
  
  // 性能监控
  monitorPerformance();
  
  // 用户行为跟踪
  trackUserBehavior();
});

// 页面访问统计
function trackPageView() {
  // 获取当前页面路径
  const pagePath = window.location.pathname;
  
  // 从localStorage获取访问数据
  let visitData = JSON.parse(localStorage.getItem('blogVisitData') || '{}');
  
  // 更新当前页面访问次数
  if (!visitData[pagePath]) {
    visitData[pagePath] = {
      views: 0,
      lastVisit: null
    };
  }
  
  visitData[pagePath].views++;
  visitData[pagePath].lastVisit = new Date().toISOString();
  
  // 更新总访问量
  if (!visitData.total) {
    visitData.total = 0;
  }
  visitData.total++;
  
  // 保存到localStorage
  localStorage.setItem('blogVisitData', JSON.stringify(visitData));
  
  // 如果是首页，显示访问统计信息
  if (pagePath === '/' || pagePath === '/atmg.github.io/') {
    displaySiteStats();
  }
  
  // 显示当前页面访问量（如果有对应元素）
  displayPageViews(pagePath);
}

// 显示网站统计数据
function displaySiteStats() {
  const visitData = JSON.parse(localStorage.getItem('blogVisitData') || '{}');
  const totalVisits = visitData.total || 0;
  
  // 创建统计显示元素
  let statsElement = document.querySelector('.site-stats');
  if (!statsElement) {
    statsElement = document.createElement('div');
    statsElement.className = 'site-stats';
    statsElement.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      background: rgba(0, 0, 0, 0.7);
      color: #0ff;
      padding: 10px 15px;
      border-radius: 5px;
      font-size: 14px;
      z-index: 9999;
      font-family: monospace;
      border: 1px solid rgba(0, 255, 255, 0.3);
      backdrop-filter: blur(5px);
    `;
    statsElement.innerHTML = `总访问量: ${totalVisits}`;
    document.body.appendChild(statsElement);
  } else {
    statsElement.innerHTML = `总访问量: ${totalVisits}`;
  }
}

// 显示页面访问量
function displayPageViews(pagePath) {
  const visitData = JSON.parse(localStorage.getItem('blogVisitData') || '{}');
  const pageViews = visitData[pagePath]?.views || 0;
  
  // 查找页面视图计数器元素
  let viewCounter = document.querySelector('.page-view-counter');
  if (!viewCounter) {
    // 创建页面视图计数器
    viewCounter = document.createElement('span');
    viewCounter.className = 'page-view-counter';
    viewCounter.style.cssText = `
      margin-left: 10px;
      color: #0ff;
      font-size: 0.9em;
    `;
    viewCounter.textContent = `浏览: ${pageViews}`;
    
    // 尝试添加到合适的位置（如文章标题旁边）
    const postTitle = document.querySelector('.post-title, h1, .post-header');
    if (postTitle) {
      postTitle.appendChild(viewCounter);
    }
  } else {
    viewCounter.textContent = `浏览: ${pageViews}`;
  }
}

// 性能监控
function monitorPerformance() {
  // 监控页面加载时间
  window.addEventListener('load', function() {
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0];
      if (perfData) {
        const loadTime = perfData.loadEventEnd - perfData.fetchStart;
        console.log(`页面加载时间: ${loadTime}ms`);
        
        // 存储性能数据
        const perfStats = JSON.parse(localStorage.getItem('perfStats') || '[]');
        perfStats.push({
          timestamp: new Date().toISOString(),
          loadTime: loadTime,
          page: window.location.pathname
        });
        
        // 只保留最近100条记录
        if (perfStats.length > 100) {
          perfStats.shift();
        }
        
        localStorage.setItem('perfStats', JSON.stringify(perfStats));
      }
    }, 0);
  });
}

// 用户行为跟踪
function trackUserBehavior() {
  // 跟踪滚动深度
  let maxScrollPercent = 0;
  window.addEventListener('scroll', function() {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    maxScrollPercent = Math.max(maxScrollPercent, scrolled);
  });
  
  // 页面停留时间
  const startTime = Date.now();
  
  // 页面卸载时保存数据
  window.addEventListener('beforeunload', function() {
    const timeSpent = Date.now() - startTime;
    
    // 保存用户行为数据
    const userData = JSON.parse(localStorage.getItem('userData') || '[]');
    userData.push({
      page: window.location.pathname,
      timeSpent: timeSpent,
      maxScroll: Math.round(maxScrollPercent),
      timestamp: new Date().toISOString()
    });
    
    // 只保留最近50条记录
    if (userData.length > 50) {
      userData.shift();
    }
    
    localStorage.setItem('userData', JSON.stringify(userData));
  });
}

// 添加回顶按钮
function addBackToTopButton() {
  const backToTopBtn = document.createElement('button');
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.innerHTML = '↑';
  backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(0, 200, 255, 0.2);
    border: 1px solid rgba(0, 200, 255, 0.3);
    color: #0ff;
    font-size: 20px;
    cursor: pointer;
    z-index: 9998;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    box-shadow: 0 0 15px rgba(0, 200, 255, 0.3);
    display: none;
  `;
  
  // 悬停效果
  backToTopBtn.addEventListener('mouseover', function() {
    this.style.boxShadow = '0 0 20px rgba(0, 200, 255, 0.6)';
    this.style.background = 'rgba(0, 200, 255, 0.3)';
  });
  
  backToTopBtn.addEventListener('mouseout', function() {
    this.style.boxShadow = '0 0 15px rgba(0, 200, 255, 0.3)';
    this.style.background = 'rgba(0, 200, 255, 0.2)';
  });
  
  // 点击事件
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // 监听滚动事件，控制按钮显示隐藏
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  
  document.body.appendChild(backToTopBtn);
}

// 初始化回顶按钮
addBackToTopButton();

// 添加字数统计功能
function addWordCount() {
  const postContents = document.querySelectorAll('.post-body, .post-content');
  postContents.forEach(content => {
    const text = content.innerText || content.textContent;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    
    // 创建字数统计元素
    const wordCountElement = document.createElement('div');
    wordCountElement.className = 'word-count';
    wordCountElement.style.cssText = `
      color: #0ff;
      font-size: 0.9em;
      margin: 10px 0;
      padding: 5px 10px;
      border-left: 3px solid #0ff;
      background: rgba(0, 200, 255, 0.05);
    `;
    wordCountElement.textContent = `字数: ${wordCount} | 预计阅读时间: ${Math.ceil(wordCount/200)}分钟`;
    
    // 插入到内容前面
    content.parentNode.insertBefore(wordCountElement, content);
  });
}

// 在适当的时候添加字数统计
setTimeout(addWordCount, 1000);