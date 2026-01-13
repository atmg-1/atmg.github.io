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

// 创建扫描线效果 - 已禁用以防止闪烁
function createScanLine() {
  // 扫描线效果已禁用
}

// 创建粒子效果 - 已禁用以防止闪烁
function createParticles() {
  // 粒子效果已禁用
}

// 添加打字机效果 - 已禁用以防止闪烁
function addTypewriterEffect() {
  // 打字机效果已禁用
}

// 添加系统消息 - 已禁用以防止闪烁
function addSystemMessages() {
  // 系统消息已禁用
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
    
    // 设置静态样式，无闪烁效果
    link.style.color = '#0af';
    link.style.textDecoration = 'underline';
  });
}

// 增强按钮
function enhanceButtons() {
  const buttons = document.querySelectorAll('button, input[type="button"], input[type="submit"]');
  buttons.forEach(button => {
    // 添加复古样式类
    button.classList.add('retro-button');
    
    // 设置静态样式，无闪烁效果
    button.style.background = '#000';
    button.style.color = '#0f0';
    button.style.border = '1px solid #0f0';
  });
}

// 增强标题
function enhanceHeaders() {
  const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  headers.forEach(header => {
    // 设置静态样式，无闪烁效果
    header.style.textShadow = '0 0 10px #0f0';
  });
}

// 增强段落
function enhanceParagraphs() {
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(paragraph => {
    // 无闪烁效果
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

// 添加全局键盘事件监听 - 已禁用以防止闪烁
// document.addEventListener('keydown', function(e) {
//   // 按下Ctrl+Shift+H显示帮助信息
//   if (e.ctrlKey && e.shiftKey && e.key === 'H') {
//     e.preventDefault();
//     showSystemMessage('HELP: Ctrl+Shift+H - Help Screen | F1 - System Info', 'info');
//   }
//   
//   // 按下F1显示系统信息
//   if (e.key === 'F1') {
//     e.preventDefault();
//     showSystemMessage('SYSTEM INFO: Retro-Tech v1.0 | Uptime: 00:15:42 | Memory: 64KB', 'info');
//   }
// });

// 添加鼠标移动效果 - 已禁用以防止闪烁
// document.addEventListener('mousemove', function(e) {
//   // 随机显示系统消息
//   if (Math.random() < 0.01) { // 1% 概率
//     const messages = [
//       'DATA STREAM ACTIVE',
//       'PROCESSING...',
//       'MEMORY USAGE: LOW',
//       'CPU: 42%',
//       'CONNECTION SECURE'
//     ];
//     showSystemMessage(messages[Math.floor(Math.random() * messages.length)], 'info');
//   }
// });

// 添加页面可见性变化事件 - 已禁用以防止闪烁
// document.addEventListener('visibilitychange', function() {
//   if (document.hidden) {
//     showSystemMessage('SYSTEM PAUSED', 'warning');
//   } else {
//     showSystemMessage('SYSTEM RESUMED', 'success');
//   }
// });

// 添加页面加载完成事件
window.addEventListener('load', function() {
  // 移除动态效果以防止闪烁
  const mainContainer = document.querySelector('.main-container') || document.body;
  if (mainContainer) {
    mainContainer.style.border = '1px solid #0f0';
    mainContainer.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.3)';
  }
});

// 添加周期性的系统检查 - 已禁用以防止闪烁
// setInterval(() => {
//   if (Math.random() < 0.3) { // 30% 概率
//     const checks = ['MEMORY CHECK', 'VIRUS SCAN', 'BACKUP ACTIVE', 'SYNC COMPLETE'];
//     showSystemMessage(`${checks[Math.floor(Math.random() * checks.length)]}: OK`, 'success');
//   }
// }, 10000);

// 添加页面错误监控
window.addEventListener('error', function(event) {
  showSystemMessage(`ERROR: ${event.error.message}`, 'error');
});

// 添加控制台日志拦截 - 已禁用以防止闪烁
// const originalLog = console.log;
// console.log = function(...args) {
//   originalLog.apply(console, args);
//   // 也可以在这里添加到系统消息
//   if (args.length > 0 && typeof args[0] === 'string') {
//     showSystemMessage(`LOG: ${args[0].substring(0, 50)}...`, 'info');
//   }
// };

// 添加复古输入框效果
function enhanceInputs() {
  const inputs = document.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.classList.add('retro-input');
    
    // 设置静态样式，无闪烁效果
    input.style.background = '#000';
    input.style.color = '#0f0';
    input.style.border = '1px solid #0f0';
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

// 添加复古加载动画 - 已禁用以防止闪烁
function addLoadingAnimation() {
  // 加载动画已禁用
}

// 在页面完全加载后添加加载动画 - 已禁用
// window.addEventListener('load', addLoadingAnimation);

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