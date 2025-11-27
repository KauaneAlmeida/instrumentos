@echo off
echo ========================================
echo   UPLOAD PENSEMED PARA GITHUB
echo ========================================
echo.
echo Antes de executar este script:
echo 1. Crie um repositorio no GitHub: https://github.com/new
echo    Nome: pensemed-website
echo.
echo 2. Digite seu nome de usuario do GitHub abaixo
echo.
set /p GITHUB_USER="Seu usuario do GitHub: "
echo.
echo ========================================
echo   CONFIGURANDO E ENVIANDO...
echo ========================================
echo.

git remote remove origin 2>nul
git remote add origin https://github.com/%GITHUB_USER%/pensemed-website.git
git branch -M main
git push -u origin main

echo.
echo ========================================
echo   CONCLUIDO!
echo ========================================
echo.
echo Seu repositorio esta em:
echo https://github.com/%GITHUB_USER%/pensemed-website
echo.
echo Pressione qualquer tecla para abrir no navegador...
pause >nul
start https://github.com/%GITHUB_USER%/pensemed-website
