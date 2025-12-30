# Hexo + GitHub Pages 部署指南

## 部署步骤

1. **配置 GitHub 仓库**：
   - 登录 GitHub，创建一个名为 `yourusername.github.io` 的仓库（将 `yourusername` 替换为你的 GitHub 用户名）
   - 确保仓库设置中启用了 GitHub Pages 功能

2. **修改 Hexo 配置**：
   在 `_config.yml` 文件中，将部署配置修改为你的仓库信息：
   ```yaml
   deploy:
     type: git
     repo: https://github.com/yourusername/yourusername.github.io.git
     branch: main
   ```

3. **部署命令**：
   在终端中执行以下命令部署：
   ```bash
   hexo clean
   hexo generate
   hexo deploy
   ```
   
   或者可以一步完成：
   ```bash
   hexo clean; hexo generate; hexo deploy
   ```

## 自定义域名（可选）

如果要使用自定义域名，请在 `source` 目录下创建 `CNAME` 文件，并写入你的域名：
```
yourdomain.com
```

## 主题配置

当前博客使用的是 NexT 主题，如需进一步自定义，可以参考：
- [NexT 主题官方文档](https://theme-next.js.org/)
- 在项目根目录下的 `_config.next.yml` 文件中进行详细配置

## 常用命令

- `hexo new "文章标题"` - 创建新文章
- `hexo generate` 或 `hexo g` - 生成静态文件
- `hexo server` 或 `hexo s` - 启动本地服务器
- `hexo deploy` 或 `hexo d` - 部署到 GitHub Pages
- `hexo clean` - 清除缓存和生成的文件