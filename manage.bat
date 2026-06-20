@echo off
title Portfolio Server Manager
:menu
cls
echo ==================================================
echo         Portfolio Developer Control Panel
echo ==================================================
echo.
echo  [1] Start Dev Server
echo  [2] Stop Dev Server (Free Port 3000)
echo  [3] Restart Dev Server
echo  [4] Exit
echo.
echo ==================================================
set /p opt="Select an option (1-4): "

if "%opt%"=="1" goto start
if "%opt%"=="2" goto stop
if "%opt%"=="3" goto restart
if "%opt%"=="4" goto exit
goto menu

:start
cls
echo Starting portfolio development server...
cd /d "%~dp0app"
start cmd /k "yarn dev"
echo Server initiated in a separate window.
timeout /t 3 >nul
goto menu

:stop
cls
echo Stopping portfolio development server (Port 3000)...
set found=0
for /f "tokens=5" %%a in ('netstat -aon ^| findstr LISTENING ^| findstr :3000') do (
    echo Killing process PID %%a...
    taskkill /f /pid %%a
    set found=1
)
if "%found%"=="0" (
    echo No active portfolio server found running on Port 3000.
) else (
    echo Portfolio server stopped successfully.
)
echo.
pause
goto menu

:restart
cls
echo Restarting portfolio development server...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr LISTENING ^| findstr :3000') do (
    taskkill /f /pid %%a
)
cd /d "%~dp0app"
start cmd /k "yarn dev"
echo Server restarted.
timeout /t 3 >nul
goto menu

:exit
exit
