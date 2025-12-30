@echo off
echo.
echo ========================================
echo        欢迎使用"叶学生的酒吧"文章发布工具
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
echo ---
echo. > temp_post.md

powershell -Command "Get-Content temp_post.md | Out-File -encoding UTF8 source\_posts\%title%.md -Force"
del temp_post.md

echo.
echo 文章已创建完成！文件位置：source\_posts\%title%.md
echo.
echo ========================================
echo 请手动编辑该文件添加文章内容，然后运行 deploy_post.bat 进行部署
echo ========================================
pause