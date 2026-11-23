@echo off
REM Instala lo necesario para generar los videos (Windows 10/11).
where ffmpeg >nul 2>nul || winget install -e --id Gyan.FFmpeg
where python >nul 2>nul || winget install -e --id Python.Python.3.12
python -m pip install -r "%~dp0requirements.txt"
echo.
echo Listo. Cierra y vuelve a abrir la terminal, y ejecuta:  python generar_video.py
pause
