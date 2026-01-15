@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo.
echo ========================
echo   博客发布自动化脚本
echo ========================
echo.

REM 获取当前日期时间
for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
set "YY=%dt:~2,2%"
set "YYYY=%dt:~0,4%"
set "MM=%dt:~4,2%"
set "DD=%dt:~6,2%"
set "HH=%dt:~8,2%"
set "Min=%dt:~10,2%"
set "Sec=%dt:~12,2%"

set "datestr=%YYYY%-%MM%-%DD% %HH%:%Min%:%Sec%"

echo 当前时间: %datestr%
echo.

REM 获取文章信息
set /p title="请输入文章标题: "
if "!title!"=="" (
    echo 标题不能为空！
    pause
    exit /b 1
)

set /p content="请输入文章内容: "
if "!content!"=="" (
    echo 内容不能为空！
    pause
    exit /b 1
)

set /p tags="请输入标签 (用逗号分隔, 如: 技术,生活): "
set /p category="请输入分类: "

REM 创建文章文件名
set "filename=%YYYY%-%MM%-%DD%-%title%.md"
set "filepath=source\_posts\!filename!"

echo.
echo 正在创建文章文件...
echo.

REM 创建文章内容
(
echo ---
echo title: !title!
echo date: !datestr!
if not "!tags!"=="" echo tags: [!tags!]
if not "!category!"=="" echo categories: [!category!]
echo ---
echo.
echo !content!
) > "!filepath!"

echo 文章已创建: !filepath!
echo.

REM 生成并部署
echo 正在生成和部署博客...
echo.

call hexo clean
if errorlevel 1 (
    echo 清理命令执行失败
    pause
    exit /b 1
)

call hexo generate
if errorlevel 1 (
    echo 生成命令执行失败
    pause
    exit /b 1
)

call hexo deploy
if errorlevel 1 (
    echo 部署命令执行失败
    pause
    exit /b 1
)

echo.
echo ========================
echo 博客发布成功！
echo 访问您的博客: https://atmg-1.github.io/atmg.github.io/
echo ========================
echo.

pause