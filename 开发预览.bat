@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ============================================
echo  Phira-Vrenxz 官网 / 文档站 —— 开发模式（改完即时生效）
echo ============================================
echo.
if not exist "node_modules" (
  echo 首次运行，正在安装依赖（需要联网）...
  call npm install
  if errorlevel 1 goto err
)
echo.
echo 开发地址： http://localhost:5173/
echo 改完 docs 里的 markdown / css 会自动刷新；关掉窗口即停止。
echo.
start "" http://localhost:5173/
call npm run dev
goto end

:err
echo.
echo *** 失败了：请确认已安装 Node.js（node -v 能出版本号）并且网络可用。
pause

:end
pause