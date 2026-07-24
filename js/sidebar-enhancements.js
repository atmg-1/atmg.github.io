// 侧边栏增强功能
document.addEventListener('DOMContentLoaded', function() {
  // 获取侧边栏和遮罩元素
  const sidebar = document.querySelector('.sidebar');
  const sidebarDimmer = document.querySelector('.sidebar-dimmer');
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  
  // 添加完全隐藏侧边栏的功能
  if (sidebar && sidebarDimmer) {
    // 点击遮罩隐藏侧边栏
    sidebarDimmer.addEventListener('click', function() {
      hideSidebar();
    });
    
    // ESC键隐藏侧边栏
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        hideSidebar();
      }
    });
  }
  
  // 隐藏侧边栏函数
  function hideSidebar() {
    if (sidebar) {
      sidebar.classList.add('hidden');
    }
    if (sidebarDimmer) {
      sidebarDimmer.classList.add('hidden');
    }
    // 移除激活类
    document.body.classList.remove('sidebar-active');
  }

  // 如果有侧边栏切换按钮，也绑定隐藏功能
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
      // 检查侧边栏当前是否激活
      const isActive = document.body.classList.contains('sidebar-active');
      if (isActive) {
        // 如果激活，则在点击后再次隐藏
        setTimeout(hideSidebar, 300); // 等待动画完成
      }
    });
  }

  // 添加侧边栏菜单项的点击隐藏功能
  const sidebarMenuItems = document.querySelectorAll('.sidebar-nav a');
  sidebarMenuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      // 延迟隐藏侧边栏，让链接跳转先发生
      setTimeout(hideSidebar, 100);
    });
  });

  // 添加键盘快捷键功能
  document.addEventListener('keydown', function(event) {
    // Ctrl/Cmd + Shift + S 隐藏侧边栏
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === 's') {
      event.preventDefault();
      hideSidebar();
    }
  });

  // 为侧边栏添加滚动监听，防止内容滚动时侧边栏干扰
  if (sidebar) {
    sidebar.addEventListener('wheel', function(e) {
      // 防止侧边栏滚动影响页面滚动
      const scrollTop = this.scrollTop;
      const scrollHeight = this.scrollHeight;
      const clientHeight = this.clientHeight;
      const delta = e.deltaY;

      // 只有在滚动到顶部或底部时才允许页面滚动
      if ((delta < 0 && scrollTop === 0) || (delta > 0 && scrollTop + clientHeight >= scrollHeight)) {
        e.stopPropagation();
      }
    }, { passive: false });
  }
});