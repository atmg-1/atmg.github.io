@echo off
chcp 65001 >nul
echo.
echo ========================================
echo      欢迎使用"叶学生的酒吧"一键发布工具
echo ========================================
echo.

set /p title=请输入文章标题: 
set /p content=请输入文章内容: 
set /p tags=请输入文章标签（多个标签用逗号分隔，如: Tech,Life,Study - 请使用英文，避免使用中文）: 
set /p category=请输入文章分类（如: Tech,Life,Study - 请使用英文，避免使用中文）: 

echo.
echo 正在创建文章...

echo --- > "temp_post.md"
echo title: %title% >> "temp_post.md"
powershell -Command "Get-Date -Format 'yyyy-MM-dd HH:mm:ss'" > temp_date.txt
set /p datevar=<temp_date.txt
echo date: %datevar% >> "temp_post.md"
del temp_date.txt
if not "%tags%x"=="x" echo tags: ^[ %tags% ^] >> "temp_post.md"
if not "%category%x"=="x" echo categories: ^[ %category% ^] >> "temp_post.md"
echo --- >> "temp_post.md"
echo. >> "temp_post.md"
echo %content% >> "temp_post.md"

powershell -Command "Get-Content -Encoding UTF8 temp_post.md | Out-File -Encoding UTF8 -FilePath 'source/_posts/%title%.md' -Force"

del "temp_post.md"

echo.
echo 正在生成并部署网站...
hexo clean
hexo generate
hexo deploy

echo.
echo ========================================
echo 恭喜！文章已成功发布到您的"叶学生的酒吧"博客
echo 访问地址: https://atmg-1.github.io/atmg.github.io/
echo ========================================
pause