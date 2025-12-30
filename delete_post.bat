@echo off
chcp 65001 >nul
echo.
echo ========================================
echo      欢迎使用"叶学生的酒吧"文章删除工具
echo ========================================
echo.

dir /b source\_posts\
echo.
set /p filename=请输入要删除的文章文件名（包括.md扩展名）: 

if not exist "source\_posts\%filename%" (
    echo.
    echo 错误：文件 %filename% 不存在！
    pause
    exit /b 1
)

powershell -Command "Remove-Item -Path 'source/_posts/%filename%' -Force"
echo.
if exist "source\_posts\%filename%" (echo 删除失败：文件可能存在权限问题) else (echo 文件 %filename% 已成功删除！)

echo.
echo 正在重新生成并部署网站...
hexo clean
hexo generate
hexo deploy

echo.
echo ========================================
echo 文章已成功从您的"叶学生的酒吧"博客中删除
echo 访问地址: https://atmg-1.github.io/atmg.github.io/
echo ========================================
pause