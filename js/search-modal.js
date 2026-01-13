// 搜索模态框功能
document.addEventListener('DOMContentLoaded', function() {
  // 创建搜索模态框
  createSearchModal();
  
  // 绑定搜索快捷键
  bindSearchShortcut();
});

// 创建搜索模态框
function createSearchModal() {
  // 创建模态框HTML结构
  const modalHtml = `
    <div id="search-modal" class="search-modal">
      <div class="search-modal-content">
        <div class="search-modal-header">
          <input type="text" id="modal-search-input" class="modal-search-input" placeholder="输入关键词搜索...">
          <span id="close-search-modal" class="close-search">&times;</span>
        </div>
        <div id="modal-search-results" class="modal-search-results">
          <p class="search-tips">输入关键词开始搜索</p>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHtml);
  
  // 绑定事件
  const modal = document.getElementById('search-modal');
  const searchInput = document.getElementById('modal-search-input');
  const closeModal = document.getElementById('close-search-modal');
  
  // 关闭模态框
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  // 点击模态框外部关闭
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  // 搜索输入事件
  searchInput.addEventListener('input', debounce(function() {
    performSearch(searchInput.value);
  }, 300));
  
  // 键盘事件
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      modal.style.display = 'none';
    }
  });
}

// 执行搜索
function performSearch(query) {
  if (!query || query.trim().length < 2) {
    document.getElementById('modal-search-results').innerHTML = '<p class="search-tips">输入至少2个字符开始搜索</p>';
    return;
  }
  
  // 显示加载状态
  document.getElementById('modal-search-results').innerHTML = '<p class="search-loading">搜索中...</p>';
  
  // 尝试从本地搜索数据搜索
  if (window.searchData) {
    const results = searchInData(query, window.searchData);
    displaySearchResults(results, query);
  } else {
    // 如果没有本地数据，尝试加载
    loadSearchData().then(function(data) {
      window.searchData = data;
      const results = searchInData(query, data);
      displaySearchResults(results, query);
    }).catch(function() {
      document.getElementById('modal-search-results').innerHTML = '<p class="search-error">搜索数据加载失败</p>';
    });
  }
}

// 从数据中搜索
function searchInData(query, searchData) {
  const results = [];
  const keywords = query.toLowerCase().split(/\s+/).filter(k => k);
  
  if (!searchData || !searchData.pages) return results;
  
  for (const page of searchData.pages) {
    let score = 0;
    const title = (page.title || '').toLowerCase();
    const content = (page.content || '').toLowerCase();
    const url = page.url || '';
    
    // 根据关键词匹配计算分数
    for (const keyword of keywords) {
      if (title.includes(keyword)) score += 10;
      if (content.includes(keyword)) score += 1;
    }
    
    if (score > 0) {
      // 找到关键词上下文
      let preview = content.substring(0, 100) + '...';
      for (const keyword of keywords) {
        const idx = content.indexOf(keyword);
        if (idx !== -1) {
          const start = Math.max(0, idx - 20);
          const end = Math.min(content.length, idx + keyword.length + 60);
          preview = '...' + content.substring(start, end) + '...';
          break;
        }
      }
      
      results.push({
        title: page.title || '无标题',
        url: url,
        preview: preview,
        score: score
      });
    }
  }
  
  // 按分数排序
  return results.sort((a, b) => b.score - a.score).slice(0, 10);
}

// 显示搜索结果
function displaySearchResults(results, query) {
  const resultsContainer = document.getElementById('modal-search-results');
  
  if (results.length === 0) {
    resultsContainer.innerHTML = `<p class="search-no-results">未找到"${query}"的相关结果</p>`;
    return;
  }
  
  let resultsHtml = `<div class="search-results-count">找到 ${results.length} 条结果</div>`;
  
  results.forEach(function(result, index) {
    resultsHtml += `
      <div class="modal-search-result-item" data-url="${result.url}">
        <a href="${result.url}" class="search-result-link">
          <h3 class="search-result-title">${highlightKeywords(result.title, query)}</h3>
          <p class="search-result-preview">${highlightKeywords(result.preview, query)}</p>
        </a>
      </div>
    `;
  });
  
  resultsContainer.innerHTML = resultsHtml;
  
  // 绑定点击事件
  document.querySelectorAll('.modal-search-result-item').forEach(function(item) {
    item.addEventListener('click', function(e) {
      if (!e.target.closest('.search-result-link')) {
        const url = this.getAttribute('data-url');
        window.location.href = url;
      }
    });
  });
}

// 高亮关键词
function highlightKeywords(text, query) {
  if (!query) return text;
  
  const keywords = query.split(/\s+/).filter(k => k);
  let highlighted = text;
  
  for (const keyword of keywords) {
    const regex = new RegExp(`(${escapeRegExp(keyword)})`, 'gi');
    highlighted = highlighted.replace(regex, '<span class="search-keyword-highlight">$1</span>');
  }
  
  return highlighted;
}

// 转义正则表达式特殊字符
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 加载搜索数据
function loadSearchData() {
  return fetch('/search.json')
    .then(response => response.json())
    .catch(() => {
      // 如果无法加载远程数据，返回空结果
      return { pages: [] };
    });
}

// 防抖函数
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 绑定搜索快捷键
function bindSearchShortcut() {
  document.addEventListener('keydown', function(e) {
    // Ctrl + K 或 Cmd + K 打开搜索
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearchModal();
    }
    
    // ESC 关闭搜索
    const modal = document.getElementById('search-modal');
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
    }
  });
  
  // 添加搜索按钮（如果还没有的话）
  addSearchButton();
}

// 打开搜索模态框
function openSearchModal() {
  const modal = document.getElementById('search-modal');
  const searchInput = document.getElementById('modal-search-input');
  
  modal.style.display = 'block';
  searchInput.focus();
  
  // 清空之前的搜索结果
  document.getElementById('modal-search-results').innerHTML = '<p class="search-tips">输入关键词开始搜索</p>';
  searchInput.value = '';
}

// 添加搜索按钮
function addSearchButton() {
  // 检查是否已经有搜索按钮
  if (document.querySelector('.global-search-btn')) return;
  
  // 创建搜索按钮
  const searchButton = document.createElement('button');
  searchButton.className = 'global-search-btn';
  searchButton.innerHTML = '🔍';
  searchButton.title = '搜索 (Ctrl+K)';
  searchButton.style.cssText = `
    position: fixed;
    top: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(0, 200, 255, 0.2);
    border: 1px solid rgba(0, 200, 255, 0.3);
    color: #0ff;
    font-size: 20px;
    cursor: pointer;
    z-index: 9999;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    box-shadow: 0 0 15px rgba(0, 200, 255, 0.3);
  `;
  
  // 悬停效果
  searchButton.addEventListener('mouseover', function() {
    this.style.boxShadow = '0 0 20px rgba(0, 200, 255, 0.6)';
    this.style.background = 'rgba(0, 200, 255, 0.3)';
  });
  
  searchButton.addEventListener('mouseout', function() {
    this.style.boxShadow = '0 0 15px rgba(0, 200, 255, 0.3)';
    this.style.background = 'rgba(0, 200, 255, 0.2)';
  });
  
  // 点击事件
  searchButton.addEventListener('click', openSearchModal);
  
  document.body.appendChild(searchButton);
}

// 添加搜索相关的CSS样式
const searchStyles = document.createElement('style');
searchStyles.textContent = `
  .search-modal {
    display: none;
    position: fixed;
    z-index: 10000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
  }

  .search-modal-content {
    background: rgba(20, 10, 40, 0.95);
    margin: 5% auto;
    padding: 0;
    border: 1px solid rgba(0, 200, 255, 0.3);
    border-radius: 10px;
    width: 90%;
    max-width: 800px;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 30px rgba(0, 200, 255, 0.4);
    backdrop-filter: blur(10px);
    animation: modalSlideIn 0.3s ease-out;
  }

  @keyframes modalSlideIn {
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .search-modal-header {
    padding: 20px;
    border-bottom: 1px solid rgba(0, 200, 255, 0.2);
    display: flex;
    align-items: center;
  }

  .modal-search-input {
    flex: 1;
    padding: 12px 20px;
    padding-right: 40px;
    border: 2px solid rgba(0, 200, 255, 0.3);
    border-radius: 30px;
    background: rgba(10, 5, 20, 0.7);
    color: #e0e0ff;
    font-size: 16px;
  }

  .modal-search-input:focus {
    outline: none;
    border-color: #0ff;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
  }

  .close-search {
    margin-left: 15px;
    font-size: 28px;
    font-weight: bold;
    color: #0ff;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .close-search:hover {
    background: rgba(0, 200, 255, 0.2);
    transform: scale(1.1);
  }

  .modal-search-results {
    padding: 20px;
    overflow-y: auto;
    max-height: calc(80vh - 140px);
  }

  .search-tips {
    text-align: center;
    color: #a0a0ff;
    font-size: 16px;
    padding: 40px 0;
  }

  .search-loading {
    text-align: center;
    color: #0ff;
    font-size: 16px;
    padding: 40px 0;
  }

  .search-no-results {
    text-align: center;
    color: #ff6b6b;
    font-size: 16px;
    padding: 40px 0;
  }

  .search-results-count {
    color: #0ff;
    font-size: 14px;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 200, 255, 0.1);
  }

  .modal-search-result-item {
    margin-bottom: 15px;
    padding: 15px;
    border-radius: 8px;
    background: rgba(30, 20, 50, 0.5);
    border: 1px solid rgba(0, 200, 255, 0.1);
    transition: all 0.3s ease;
  }

  .modal-search-result-item:hover {
    background: rgba(50, 30, 70, 0.7);
    border-color: rgba(0, 200, 255, 0.3);
    transform: translateX(5px);
  }

  .search-result-link {
    text-decoration: none;
  }

  .search-result-title {
    color: #0ff;
    margin: 0 0 8px 0;
    font-size: 18px;
  }

  .search-result-preview {
    color: #a0a0ff;
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
  }

  .search-keyword-highlight {
    background: rgba(0, 255, 255, 0.2);
    padding: 0 2px;
    border-radius: 2px;
    font-weight: bold;
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .search-modal-content {
      width: 95%;
      margin: 10% auto;
    }
    
    .search-modal-header {
      flex-direction: column;
    }
    
    .modal-search-input {
      width: 100%;
      margin-bottom: 10px;
    }
    
    .close-search {
      align-self: flex-end;
      margin-left: 0;
    }
  }
`;
document.head.appendChild(searchStyles);