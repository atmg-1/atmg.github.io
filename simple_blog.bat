@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo.
echo ========================
echo   简洁博客发布脚本
echo ========================
echo.

REM 获取当前日期时间
for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
set "YYYY=%dt:~0,4%"
set "MM=%dt:~4,2%"
set "DD=%dt:~6,2%"

set "datestr=%YYYY%-%MM%-%DD% 12:00:00"

echo 当前日期: %YYYY%-%MM%-%DD%
echo.

set /p title="文章标题: "
if "!title!"=="" (
    echo 标题不能为空！
    pause
    exit /b 1
)

echo.
echo 文章内容 (输入完成后按 Enter):
set /p content=""

REM 可选的图片链接
set /p image="图片链接 (可选，直接回车跳过): "

REM 可选的外部链接
set /p link="外部链接 (可选，直接回车跳过): "

REM 创建文章文件名
set "filename=%YYYY%-%MM%-%DD%-%title%.md"
set "filepath=source\_posts\!filename!"

echo.
echo 正在创建文章...

REM 创建文章内容
(
echo ---
echo title: !title!
echo date: !datestr!
echo ---
echo.
if not "!image!"=="" echo ![!title!](!image!)
echo !content!
if not "!link!"=="" echo.
if not "!link!"=="" echo [更多内容](!link!)
) > "!filepath!"

echo.
echo 文章创建成功: !filepath!
echo.
echo 正在发布到博客...
call hexo clean
call hexo generate
call hexo deploy

echo.
echo ========================
echo 博客发布成功！
echo 访问您的博客: https://atmg-1.github.io/atmg.github.io/
echo ========================
echo.

pause