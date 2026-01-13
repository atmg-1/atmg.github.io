// 文章目录生成和阅读进度条功能
document.addEventListener('DOMContentLoaded', function() {
  // 检查是否为可以生成目录的页面
  if (isPageWithHeadings()) {
    createTableOfContents();
    createReadingProgressBar();
    updateReadingProgress();
  }
});

function isPageWithHeadings() {
  // 检查页面是否包含标题元素，适用于文章页面和其他页面
  const hasContentArea = document.querySelector('.post-body') !== null || 
         document.querySelector('.post-content') !== null ||
         document.querySelector('.post-title') !== null ||
         document.querySelector('.about-content') !== null ||
         document.querySelector('.page-content') !== null ||
         document.querySelector('main') !== null ||
         document.querySelector('body') !== null;
         
  if (!hasContentArea) return false;
  
  // 同时检查页面是否有足够的标题来生成目录
  const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  // 对于主页，只要有标题就生成目录
  if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    return allHeadings.length >= 1; // 主页只要有1个标题就生成目录
  } else {
    return allHeadings.length >= 2; // 其他页面需要2个标题才生成目录
  }
}

function createTableOfContents() {
  // 修改逻辑以支持多种页面类型
  let contentArea = document.querySelector('.post-body') || 
               document.querySelector('.post-content') || 
               document.querySelector('.about-content') ||
               document.querySelector('.page-content') ||
               document.querySelector('main') ||
               document.querySelector('body');
  
  if (!contentArea) return;
  
  // 查找所有标题
  const headings = contentArea.querySelectorAll('h1, h2, h3, h4, h5, h6');
  if (headings.length < 1) return; // 至少需要1个标题才生成目录
  
  // 创建目录容器
  const tocContainer = document.createElement('div');
  tocContainer.className = 'table-of-contents';
  tocContainer.innerHTML = '<h3>文章目录</h3><ul></ul>';
  
  const tocList = tocContainer.querySelector('ul');
  
  // 为每个标题生成目录项
  headings.forEach((heading, index) => {
    // 为标题添加ID以便锚点链接
    if (!heading.id) {
      heading.id = 'heading-' + index;
    }
    
    const listItem = document.createElement('li');
    listItem.className = `toc-level-${getHeadingLevel(heading)}`;
    
    const link = document.createElement('a');
    link.href = '#' + heading.id;
    link.textContent = heading.textContent;
    
    // 添加点击平滑滚动
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.getElementById(this.getAttribute('href').substring(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
    
    listItem.appendChild(link);
    tocList.appendChild(listItem);
  });
  
  // 添加到内容开头
  contentArea.insertBefore(tocContainer, contentArea.firstChild);
}

function getHeadingLevel(heading) {
  return parseInt(heading.tagName.charAt(1));
}

function createReadingProgressBar() {
  // 创建阅读进度条
  const progressBar = document.createElement('div');
  progressBar.className = 'read-progress-bar';
  document.body.appendChild(progressBar);
}

function updateReadingProgress() {
  // 更新阅读进度
  window.addEventListener('scroll', function() {
    const progressBar = document.querySelector('.read-progress-bar');
    if (!progressBar) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / documentHeight) * 100;
    
    progressBar.style.width = progress + '%';
  });
}

// 添加目录样式
const tocStyle = document.createElement('style');
tocStyle.textContent = `
  .table-of-contents {
    background: rgba(20, 10, 40, 0.7) !important;
    border: 1px solid rgba(0, 200, 255, 0.3) !important;
    border-radius: 10px !important;
    padding: 1.5rem !important;
    margin: 1.5rem 0 !important;
    position: relative !important;
  }
  
  .table-of-contents h3 {
    color: #0ff !important;
    margin-top: 0 !important;
    font-size: 1.3rem !important;
    text-align: center !important;
  }
  
  .table-of-contents ul {
    list-style: none !important;
    padding-left: 1rem !important;
    margin: 1rem 0 !important;
  }
  
  .table-of-contents li {
    margin: 0.5rem 0 !important;
  }
  
  .table-of-contents a {
    color: #a0a0ff !important;
    text-decoration: none !important;
    transition: all 0.3s ease !important;
    display: block !important;
    padding: 0.3rem 0.5rem !important;
    border-radius: 5px !important;
  }
  
  .table-of-contents a:hover {
    color: #0ff !important;
    background: rgba(0, 200, 255, 0.1) !important;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5) !important;
  }
  
  .toc-level-1 a { padding-left: 0 !important; }
  .toc-level-2 a { padding-left: 1rem !important; }
  .toc-level-3 a { padding-left: 2rem !important; }
  .toc-level-4 a { padding-left: 3rem !important; }
  .toc-level-5 a { padding-left: 4rem !important; }
  .toc-level-6 a { padding-left: 5rem !important; }
`;
document.head.appendChild(tocStyle);