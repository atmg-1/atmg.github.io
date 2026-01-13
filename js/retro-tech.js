// 90年代代码风格 - 《流浪地球》科幻主题效果
document.addEventListener('DOMContentLoaded', function() {
  // 初始化所有复古科技效果
  initRetroTechEffects();
  createScanLine();
  createParticles();
  addTypewriterEffect();
  addSystemMessages();
});

// 初始化所有复古科技效果
function initRetroTechEffects() {
  // 添加系统就绪消息
  showSystemMessage('SYSTEM READY', 'success');
  
  // 为所有链接添加复古样式
  enhanceLinks();
  
  // 为所有按钮添加复古样式
  enhanceButtons();
  
  // 为所有标题添加复古样式
  enhanceHeaders();
  
  // 为所有段落添加复古样式
  enhanceParagraphs();
  
  // 为所有列表添加复古样式
  enhanceLists();
  
  // 为所有代码块添加复古样式
  enhanceCodeBlocks();
}

// 创建扫描线效果
function createScanLine() {
  const scanLine = document.createElement('div');
  scanLine.className = 'scan-line';
  document.body.appendChild(scanLine);
}

// 创建粒子效果
function createParticles() {
  // 创建多个粒子
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(particle);
  }
}

// 添加打字机效果
function addTypewriterEffect() {
  // 为特定元素添加打字机效果
  const elements = document.querySelectorAll('h1, h2, .site-title, .post-title');
  elements.forEach(el => {
    // 添加打字机效果
    const originalText = el.textContent;
    el.textContent = '';
    el.style.visibility = 'visible';
    
    let i = 0;
    const speed = 50; // 打字速度
    
    function typeWriter() {
      if (i < originalText.length) {
        el.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    
    // 延迟开始打字效果
    setTimeout(typeWriter, Math.random() * 1000);
  });
}

// 添加系统消息
function addSystemMessages() {
  // 添加页面加载消息
  setTimeout(() => {
    showSystemMessage('PAGE LOADED SUCCESSFULLY', 'success');
  }, 1000);
  
  // 添加安全协议消息
  setTimeout(() => {
    showSystemMessage('SECURITY PROTOCOL ACTIVE', 'info');
  }, 3000);
}

// 显示系统消息
function showSystemMessage(message, type = 'info') {
  const msgDiv = document.createElement('div');
  msgDiv.className = `system-message ${type}`;
  msgDiv.textContent = `[${getCurrentTimestamp()}] ${message}`;
  
  document.body.appendChild(msgDiv);
  
  // 3秒后移除消息
  setTimeout(() => {
    msgDiv.remove();
  }, 3000);
}

// 获取当前时间戳
function getCurrentTimestamp() {
  const now = new Date();
  return now.toISOString().substr(11, 12);
}

// 增强链接
function enhanceLinks() {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    // 添加复古样式类
    link.classList.add('retro-link');
    
    // 添加悬停效果
    link.addEventListener('mouseenter', function() {
      this.style.textShadow = '0 0 10px #0f0';
      this.style.color = '#0f0';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.textShadow = 'none';
      this.style.color = '#0af';
    });
  });
}

// 增强按钮
function enhanceButtons() {
  const buttons = document.querySelectorAll('button, input[type="button"], input[type="submit"]');
  buttons.forEach(button => {
    // 添加复古样式类
    button.classList.add('retro-button');
    
    // 添加点击效果
    button.addEventListener('mousedown', function() {
      this.style.background = '#0f0';
      this.style.color = '#000';
      this.style.boxShadow = '0 0 20px #0f0';
    });
    
    button.addEventListener('mouseup', function() {
      this.style.background = '#000';
      this.style.color = '#0f0';
      this.style.boxShadow = '0 0 15px #0f0';
    });
  });
}

// 增强标题
function enhanceHeaders() {
  const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  headers.forEach(header => {
    // 添加闪烁效果
    header.addEventListener('mouseenter', function() {
      this.style.textShadow = '0 0 15px #0f0, 0 0 20px #0f0';
    });
    
    header.addEventListener('mouseleave', function() {
      this.style.textShadow = '0 0 10px #0f0';
    });
  });
}

// 增强段落
function enhanceParagraphs() {
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(paragraph => {
    // 添加闪烁效果
    paragraph.addEventListener('mouseenter', function() {
      this.style.textShadow = '0 0 8px #0f0';
    });
    
    paragraph.addEventListener('mouseleave', function() {
      this.style.textShadow = 'none';
    });
  });
}

// 增强列表
function enhanceLists() {
  const lists = document.querySelectorAll('ul, ol');
  lists.forEach(list => {
    // 添加样式
    list.style.border = '1px solid #0f0';
    list.style.padding = '10px';
    list.style.margin = '10px 0';
    list.style.background = 'rgba(0, 0, 0, 0.5)';
  });
}

// 增强代码块
function enhanceCodeBlocks() {
  const codeBlocks = document.querySelectorAll('pre, code');
  codeBlocks.forEach(block => {
    // 添加复古代码块样式
    block.classList.add('code-block');
    
    // 添加行号
    if (block.tagName === 'PRE') {
      addLineNumbers(block);
    }
  });
}

// 为代码块添加行号
function addLineNumbers(preElement) {
  const code = preElement.querySelector('code') || preElement;
  const lines = code.innerHTML.split('\n');
  
  let numberedLines = '';
  lines.forEach((line, index) => {
    if (line.trim() !== '') {
      numberedLines += `<span class="line-number">${(index + 1).toString().padStart(3, '0')}</span>${line}\n`;
    } else {
      numberedLines += '\n';
    }
  });
  
  code.innerHTML = numberedLines;
}

// 添加全局键盘事件监听
document.addEventListener('keydown', function(e) {
  // 按下Ctrl+Shift+H显示帮助信息
  if (e.ctrlKey && e.shiftKey && e.key === 'H') {
    e.preventDefault();
    showSystemMessage('HELP: Ctrl+Shift+H - Help Screen | F1 - System Info', 'info');
  }
  
  // 按下F1显示系统信息
  if (e.key === 'F1') {
    e.preventDefault();
    showSystemMessage('SYSTEM INFO: Retro-Tech v1.0 | Uptime: 00:15:42 | Memory: 64KB', 'info');
  }
});

// 添加鼠标移动效果
document.addEventListener('mousemove', function(e) {
  // 随机显示系统消息
  if (Math.random() < 0.01) { // 1% 概率
    const messages = [
      'DATA STREAM ACTIVE',
      'PROCESSING...',
      'MEMORY USAGE: LOW',
      'CPU: 42%',
      'CONNECTION SECURE'
    ];
    showSystemMessage(messages[Math.floor(Math.random() * messages.length)], 'info');
  }
});

// 添加页面可见性变化事件
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    showSystemMessage('SYSTEM PAUSED', 'warning');
  } else {
    showSystemMessage('SYSTEM RESUMED', 'success');
  }
});

// 添加页面加载完成事件
window.addEventListener('load', function() {
  showSystemMessage('ALL SYSTEMS NOMINAL', 'success');
  
  // 添加加载完成的特殊效果
  const mainContainer = document.querySelector('.main-container') || document.body;
  mainContainer.style.border = '2px solid #0f0';
  mainContainer.style.boxShadow = '0 0 25px rgba(0, 255, 0, 0.4)';
  
  setTimeout(() => {
    mainContainer.style.border = '1px solid #0f0';
    mainContainer.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.3)';
  }, 2000);
});

// 添加周期性的系统检查
setInterval(() => {
  if (Math.random() < 0.3) { // 30% 概率
    const checks = ['MEMORY CHECK', 'VIRUS SCAN', 'BACKUP ACTIVE', 'SYNC COMPLETE'];
    showSystemMessage(`${checks[Math.floor(Math.random() * checks.length)]}: OK`, 'success');
  }
}, 10000);

// 添加页面错误监控
window.addEventListener('error', function(event) {
  showSystemMessage(`ERROR: ${event.error.message}`, 'error');
});

// 添加控制台日志拦截
const originalLog = console.log;
console.log = function(...args) {
  originalLog.apply(console, args);
  // 也可以在这里添加到系统消息
  if (args.length > 0 && typeof args[0] === 'string') {
    showSystemMessage(`LOG: ${args[0].substring(0, 50)}...`, 'info');
  }
};

// 添加复古输入框效果
function enhanceInputs() {
  const inputs = document.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.classList.add('retro-input');
    
    // 添加聚焦效果
    input.addEventListener('focus', function() {
      this.style.boxShadow = '0 0 15px #0f0';
      this.style.borderColor = '#0f0';
    });
    
    input.addEventListener('blur', function() {
      this.style.boxShadow = 'none';
      this.style.borderColor = '#0f0';
    });
  });
}

// 在页面完全加载后增强输入框
window.addEventListener('load', enhanceInputs);

// 添加复古卡片效果
function enhanceCards() {
  const cards = document.querySelectorAll('.post-block, .card, .article');
  cards.forEach(card => {
    card.classList.add('retro-card');
  });
}

// 在页面完全加载后增强卡片
window.addEventListener('load', enhanceCards);

// 添加复古菜单效果
function enhanceMenus() {
  const menus = document.querySelectorAll('.menu, .nav, nav');
  menus.forEach(menu => {
    menu.classList.add('menu-retro');
  });
}

// 在页面完全加载后增强菜单
window.addEventListener('load', enhanceMenus);

// 添加复古表格效果
function enhanceTables() {
  const tables = document.querySelectorAll('table');
  tables.forEach(table => {
    table.style.border = '1px solid #0f0';
    table.style.background = 'rgba(0, 0, 0, 0.7)';
    
    const headers = table.querySelectorAll('th');
    headers.forEach(th => {
      th.classList.add('table-header-retro');
    });
  });
}

// 在页面完全加载后增强表格
window.addEventListener('load', enhanceTables);

// 添加复古标签效果
function enhanceTags() {
  const tags = document.querySelectorAll('.tag, .label, .badge');
  tags.forEach(tag => {
    tag.classList.add('tag-retro');
  });
}

// 在页面完全加载后增强标签
window.addEventListener('load', enhanceTags);

// 添加复古引用效果
function enhanceQuotes() {
  const quotes = document.querySelectorAll('blockquote, q');
  quotes.forEach(quote => {
    quote.classList.add('quote-retro');
  });
}

// 在页面完全加载后增强引用
window.addEventListener('load', enhanceQuotes);

// 添加复古分页效果
function enhancePagination() {
  const pagination = document.querySelectorAll('.pagination, .pager');
  pagination.forEach(pager => {
    pager.classList.add('pagination-retro');
  });
}

// 在页面完全加载后增强分页
window.addEventListener('load', enhancePagination);

// 添加复古搜索效果
function enhanceSearch() {
  const searchForms = document.querySelectorAll('.search-form, .search-box');
  searchForms.forEach(form => {
    form.classList.add('search-retro');
  });
}

// 在页面完全加载后增强搜索
window.addEventListener('load', enhanceSearch);

// 添加复古面包屑效果
function enhanceBreadcrumbs() {
  const breadcrumbs = document.querySelectorAll('.breadcrumb, .path');
  breadcrumbs.forEach(crumb => {
    crumb.classList.add('breadcrumb-retro');
  });
}

// 在页面完全加载后增强面包屑
window.addEventListener('load', enhanceBreadcrumbs);

// 添加复古分类效果
function enhanceCategories() {
  const categories = document.querySelectorAll('.category, .cat');
  categories.forEach(cat => {
    cat.classList.add('category-retro');
  });
}

// 在页面完全加载后增强分类
window.addEventListener('load', enhanceCategories);

// 添加复古评论效果
function enhanceComments() {
  const comments = document.querySelectorAll('.comment, .reply');
  comments.forEach(comment => {
    comment.classList.add('comment-retro');
  });
}

// 在页面完全加载后增强评论
window.addEventListener('load', enhanceComments);

// 添加复古归档效果
function enhanceArchives() {
  const archives = document.querySelectorAll('.archive, .archive-item');
  archives.forEach(archive => {
    archive.classList.add('archive-retro');
  });
}

// 在页面完全加载后增强归档
window.addEventListener('load', enhanceArchives);

// 添加复古侧边栏效果
function enhanceSidebars() {
  const sidebars = document.querySelectorAll('.sidebar, .widget');
  sidebars.forEach(sidebar => {
    sidebar.classList.add('sidebar-retro');
  });
}

// 在页面完全加载后增强侧边栏
window.addEventListener('load', enhanceSidebars);

// 添加复古导航效果
function enhanceNav() {
  const navs = document.querySelectorAll('.nav, .navigation');
  navs.forEach(nav => {
    nav.classList.add('nav-retro');
  });
}

// 在页面完全加载后增强导航
window.addEventListener('load', enhanceNav);

// 添加复古页码效果
function enhancePageNumbers() {
  const pageNumbers = document.querySelectorAll('.page-number, .page-numbers');
  pageNumbers.forEach(num => {
    num.classList.add('page-number-retro');
  });
}

// 在页面完全加载后增强页码
window.addEventListener('load', enhancePageNumbers);

// 添加复古加载动画
function addLoadingAnimation() {
  const loader = document.createElement('div');
  loader.className = 'loader-retro';
  loader.style.position = 'fixed';
  loader.style.top = '50%';
  loader.style.left = '50%';
  loader.style.zIndex = '9999';
  loader.style.display = 'none';
  
  document.body.appendChild(loader);
  
  // 显示加载动画
  function showLoader() {
    loader.style.display = 'inline-block';
  }
  
  // 隐藏加载动画
  function hideLoader() {
    loader.style.display = 'none';
  }
  
  // 页面加载事件
  window.addEventListener('beforeunload', showLoader);
  window.addEventListener('load', hideLoader);
}

// 在页面完全加载后添加加载动画
window.addEventListener('load', addLoadingAnimation);

// 最后添加全局样式覆盖
const globalStyle = document.createElement('style');
globalStyle.textContent = `
  /* 全局样式覆盖 */
  * {
    font-family: 'Courier New', 'Monaco', 'Menlo', monospace !important;
    transition: none !important;
  }
  
  body {
    background: #000 !important;
    color: #0f0 !important;
  }
  
  /* 隐藏原始样式 */
  .cyber-card, .cyber-grid, .neon-text, .cyber-link, .cyber-quote,
  .night-mode, .search-form, .search-input, .read-progress-bar,
  .site-stats, .page-view-counter, .word-count, .back-to-top,
  .human-card, .warm-tip, .interactive-btn, .form-control,
  .social-icons, .social-icon, .progress-bar, .progress-value {
    display: none !important;
  }
`;
document.head.appendChild(globalStyle);