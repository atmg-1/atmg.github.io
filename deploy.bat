@echo off
echo 正在部署 Hexo 博客到 GitHub Pages...
echo.

echo 清理旧文件...
hexo clean

echo.
echo 生成静态文件...
hexo generate

echo.
echo 部署到 GitHub...
hexo deploy

echo.
echo 部署完成！
echo 如果部署失败，请确保您已在 GitHub 上创建了 atmg-1/atmg.github.io 仓库
echo 并且配置了正确的访问权限
pause