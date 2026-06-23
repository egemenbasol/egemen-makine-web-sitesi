@echo off
chcp 65001 >nul
title Egemen Makine - Web Sitesi
cd /d "%~dp0"

echo.
echo ========================================
echo   Egemen Makine Web Sitesi Baslatiliyor
echo ========================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo HATA: Node.js kurulu degil.
  echo Suradan kurun: https://nodejs.org
  echo LTS surumunu indirin, kurun, bilgisayari yeniden baslatin.
  pause
  exit /b 1
)

echo Node.js bulundu.
echo Paketler kontrol ediliyor...
call npm.cmd install
if errorlevel 1 (
  echo HATA: npm install basarisiz oldu.
  pause
  exit /b 1
)

echo Windows CSS paketleri kontrol ediliyor...
call npm.cmd install lightningcss-win32-x64-msvc @tailwindcss/oxide-win32-x64-msvc --no-save

echo.
echo Site baslatiliyor...
echo Tarayicida acin: http://localhost:3000
echo.
echo Durdurmak icin bu pencerede Ctrl+C basin.
echo.

call npm run dev

pause
