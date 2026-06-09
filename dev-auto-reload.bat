@echo off
chcp 65001 >nul
setlocal
title NEW SITE - Dev com Auto-Reload

echo ========================================
echo   NEW SITE - Dev com Auto-Reload
echo ========================================
echo.

REM Garantir que o script rode a partir da raiz do projeto
cd /d "%~dp0"

REM Verificar se Node.js esta instalado
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERRO] Node.js nao encontrado. Instale o Node.js primeiro.
    pause
    exit /b 1
)

REM Verificar se npm esta disponivel
where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERRO] npm nao encontrado. Reinstale o Node.js com npm habilitado.
    pause
    exit /b 1
)

REM Instalar dependencias na primeira execucao
if not exist "node_modules" (
    echo [INFO] Dependencias nao encontradas. Instalando...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERRO] Falha ao instalar as dependencias.
        pause
        exit /b 1
    )
)

REM Encerrar qualquer processo ouvindo na porta 3000
echo [INFO] Limpando porta 3000...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000 ^| findstr LISTENING') do (
    taskkill /F /PID %%a >nul 2>&1
)

timeout /t 2 >nul

echo [INFO] Iniciando servidor Vite...
echo.
echo ========================================
echo   Servidor rodando com auto-reload!
echo   URL: http://localhost:3000
echo.
echo   O Vite recarrega automaticamente
echo   quando voce salva os arquivos.
echo.
echo   Para parar o servidor, pressione Ctrl+C
echo ========================================
echo.

timeout /t 3 >nul
start "" http://localhost:3000 >nul 2>&1

echo [INFO] Navegador aberto. Logs do servidor abaixo:
echo ========================================
echo.

call npm run dev

echo.
echo [INFO] Servidor encerrado.
timeout /t 2 >nul
