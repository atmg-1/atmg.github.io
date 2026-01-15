@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo.
echo ========================
echo   博客文章创建脚本
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

set /p tags="请输入标签 (用逗号分隔, 如: 技术,生活): "
set /p category="请输入分类: "

REM 创建文章文件名
set "filename=%YYYY%-%MM%-%DD%-%title%.md"
set "filepath=source\_posts\!filename!"

echo.
echo 正在创建文章文件...
echo.

REM 创建文章内容（空内容，等待用户编辑）
(
echo ---
echo title: !title!
echo date: !datestr!
if not "!tags!"=="" echo tags: [!tags!]
if not "!category!"=="" echo categories: [!category!]
echo ---
echo.
echo # !title!
echo.
echo 在这里输入您的文章内容...
) > "!filepath!"

echo 文章已创建: !filepath!
echo.
echo 现在您可以编辑该文件来添加内容。
echo.

REM 询问是否立即编辑
set /p edit_now="是否立即使用默认编辑器打开文件? (y/n): "
if /i "!edit_now!"=="y" (
    start "" "!filepath!"
)

echo.
echo ========================
echo 文章创建完成！
echo 当您完成编辑后，运行 publish_blog.bat 进行发布
echo ========================
echo.

pause