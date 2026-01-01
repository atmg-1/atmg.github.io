@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo.
echo ========================
echo   博客部署修复脚本
echo ========================
echo.

echo 正在检查配置...
if not exist "_config.yml" (
    echo 错误: 找不到 _config.yml 配置文件
    pause
    exit /b 1
)

echo 正在清理缓存...
call hexo clean
if errorlevel 1 (
    echo 清理命令执行失败
    pause
    exit /b 1
)

echo 正在生成静态文件...
call hexo generate
if errorlevel 1 (
    echo 生成命令执行失败
    pause
    exit /b 1
)

echo 正在部署到GitHub Pages...
call hexo deploy
if errorlevel 1 (
    echo 部署命令执行失败
    echo 请检查 _config.yml 中的部署配置
    pause
    exit /b 1
)

echo.
echo ========================
echo 博客部署成功！
echo 访问您的博客: https://atmg-1.github.io/atmg.github.io/
echo ========================
echo.

pause