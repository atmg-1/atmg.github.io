@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo.
echo ========================================
echo      博客创建和发布一体化脚本
echo ========================================
echo.

REM 显示选项菜单
:menu
echo 请选择操作:
echo 1. 创建新文章
echo 2. 发布所有文章
echo 3. 创建并立即发布文章
echo 4. 退出
echo.
set /p choice="请输入选项 (1-4): "

if "%choice%"=="1" goto create
if "%choice%"=="2" goto publish
if "%choice%"=="3" goto create_and_publish
if "%choice%"=="4" goto exit
echo 无效选项，请重新选择。
echo.
goto menu

:create
echo.
echo ========================
echo     创建新文章
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

set /p title="请输入文章标题: "
if "!title!"=="" (
    echo 标题不能为空！
    pause
    goto menu
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
echo 文章创建完成！
echo 您可以稍后运行 publish_blog.bat 或 full_publish.bat 进行发布
echo.
pause
goto menu

:publish
echo.
echo ========================
echo     发布所有文章
echo ========================
echo.

echo 正在清理缓存...
call hexo clean
if errorlevel 1 (
    echo 清理命令执行失败
    pause
    goto menu
)

echo 正在生成静态文件...
call hexo generate
if errorlevel 1 (
    echo 生成命令执行失败
    pause
    goto menu
)

echo 正在部署到服务器...
call hexo deploy
if errorlevel 1 (
    echo 部署命令执行失败
    pause
    goto menu
)

echo.
echo ========================
echo 所有文章发布成功！
echo 访问您的博客: https://atmg-1.github.io/atmg.github.io/
echo ========================
echo.
pause
goto menu

:create_and_publish
echo.
echo ========================
echo   创建并发布文章
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

set /p title="请输入文章标题: "
if "!title!"=="" (
    echo 标题不能为空！
    pause
    goto menu
)

set /p content="请输入文章内容: "
if "!content!"=="" (
    echo 内容不能为空！
    pause
    goto menu
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
    goto menu
)

call hexo generate
if errorlevel 1 (
    echo 生成命令执行失败
    pause
    goto menu
)

call hexo deploy
if errorlevel 1 (
    echo 部署命令执行失败
    pause
    goto menu
)

echo.
echo ========================
echo 博客创建并发布成功！
echo 访问您的博客: https://atmg-1.github.io/atmg.github.io/
echo ========================
echo.
pause
goto menu

:exit
echo 再见！
exit /b 0