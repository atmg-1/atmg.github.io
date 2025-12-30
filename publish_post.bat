@echo off
echo.
echo ========================================
echo      欢迎使用"叶学生的酒吧"一键发布工具
echo ========================================
echo.

set /p title=请输入文章标题: 
set /p subtitle=请输入文章副标题（可选，直接回车跳过）: 
set /p tags=请输入文章标签（多个标签用逗号分隔，如: 技术,生活,学习）: 
set /p category=请输入文章分类（如: 技术分享,生活感悟）: 

echo.
echo 正在创建文章...
echo ---
echo title: %title%
echo date: %date:~0,4%-%date:~5,2%-%date:~8,2% %time:~0,2%:%time:~3,2%:%time:~6,2%
if not "%subtitle%"=="" echo subtitle: %subtitle%
echo tags: [%tags%]
echo categories: [%category%]
echo --- > temp_post.md

powershell -Command "Get-Content temp_post.md | Out-File -encoding UTF8 source\_posts\%title%.md -Force"
del temp_post.md

echo.
echo 文章已创建完成！文件位置：source\_posts\%title%.md
echo.
echo ========================================
echo 正在启动本地编辑器，请在打开的文件中输入文章内容...
echo ========================================
notepad source\_posts\%title%.md

echo.
echo ========================================
echo 文章内容编辑完成后，将自动进行部署...
echo ========================================
timeout /t 5 /nobreak >nul

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