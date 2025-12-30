# 我的 Hexo 博客

基于 Hexo 和 NexT 主题搭建的个人博客，部署在 GitHub Pages 上。

## 本地开发

### 环境要求
- Node.js (v18.0 或更高版本)
- Git

### 安装依赖

```bash
npm install
```

### 启动本地服务器

```bash
npm run server
# 或者
hexo server
```

访问 http://localhost:4000 查看博客。

### 生成静态文件

```bash
npm run build
# 或者
hexo generate
```

## 部署到 GitHub Pages

### 配置

在 `_config.yml` 文件中配置部署信息：

```yaml
deploy:
  type: git
  repo: https://github.com/yourusername/yourusername.github.io.git
  branch: main
```

### 部署

```bash
npm run deploy
# 或者
hexo deploy
```

也可以使用提供的批处理脚本 `deploy.bat` 进行一键部署。

## 创建新文章

```bash
hexo new "文章标题"
```

## 项目结构

```
.
├── _config.yml       # 站点配置文件
├── package.json      # 项目依赖配置
├── deploy.bat        # 部署脚本
├── github-deploy.md  # GitHub 部署说明
├── scaffolds/        # 模板文件夹
├── source/           # 源文件夹
│   └── _posts/       # 文章存放位置
└── themes/           # 主题文件夹
```

## 主题配置

当前使用的是 NexT 主题，如需进一步自定义，请参考 [NexT 主题官方文档](https://theme-next.js.org/)。

## 常用命令

- `hexo new "文章标题"` - 创建新文章
- `hexo generate` 或 `hexo g` - 生成静态文件
- `hexo server` 或 `hexo s` - 启动本地服务器
- `hexo deploy` 或 `hexo d` - 部署到 GitHub Pages
- `hexo clean` - 清除缓存和生成的文件