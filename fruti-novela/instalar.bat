@echo off
echo === Instalando lo necesario para Fruti Novela ===
where python >nul 2>nul || (echo Instala Python desde https://www.python.org/downloads/ marcando "Add to PATH" & pause & exit /b 1)
where ffmpeg >nul 2>nul || (echo Instalando FFmpeg con winget... & winget install --id Gyan.FFmpeg -e)
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
echo.
echo Listo. Cierra y vuelve a abrir la terminal, luego ejecuta:
echo    python generar.py ejemplo\guion.txt
pause
