@echo off
echo ========================================
echo ZaykaWrap Android Setup Script
echo ========================================
echo.

echo Step 1: Checking Node.js...
node --version
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)
echo Node.js is installed!
echo.

echo Step 2: Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: npm install failed!
    pause
    exit /b 1
)
echo Dependencies installed!
echo.

echo Step 3: Installing Capacitor CLI...
call npm install -g @capacitor/cli
echo.

echo Step 4: Adding Android platform...
call npx cap add android
if %errorlevel% neq 0 (
    echo ERROR: Failed to add Android platform!
    pause
    exit /b 1
)
echo Android platform added!
echo.

echo Step 5: Syncing website to Android...
call npx cap sync
if %errorlevel% neq 0 (
    echo ERROR: Sync failed!
    pause
    exit /b 1
)
echo Sync complete!
echo.

echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Android Studio will open automatically
echo 2. Wait for Gradle sync to complete (5-10 minutes)
echo 3. Go to Build ^> Build Bundle(s) / APK(s) ^> Build APK(s)
echo.
echo Opening Android Studio...
call npx cap open android

pause
