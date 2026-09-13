@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ============================================
echo  Phira-Vrenxz 官网 / 文档站 —— 本地预览
echo ============================================
echo.
if not exist "node_modules" (
  echo [1/2] 首次运行，正在安装依赖（需要联网）...
  call npm install
  if errorlevel 1 goto err
)
if not exist "docs\.vitepress\dist\index.html" (
  echo [2/2] 还没有构建产物，正在构建...
  call npm run build
  if errorlevel 1 goto err
)
echo.
echo 预览地址： http://localhost:4173/
echo 关掉这个窗口即可停止。
echo.
start "" http://localhost:4173/
call npm run preview
goto end

:err
echo.
echo *** 失败了：请确认已安装 Node.js（node -v 能出版本号）并且网络可用。
pause

:end
pause