@echo off
REM 🚀 Business Consultancy Website - Vercel Deployment Script (Windows)

echo 🚀 Starting deployment process...

REM Check if git is initialized
if not exist ".git" (
    echo 📦 Initializing Git repository...
    git init
    git add .
    git commit -m "Initial commit: Business Consultancy Website"
)

REM Build the project
echo 🔨 Building project...
call npm run build

if %errorlevel% equ 0 (
    echo ✅ Build successful!
) else (
    echo ❌ Build failed. Please fix the errors and try again.
    pause
    exit /b 1
)

REM Add and commit changes
echo 📝 Committing changes...
git add .
git commit -m "Deploy: Business Consultancy Website - %date%"

REM Push to GitHub
echo 🚀 Pushing to GitHub...
git push origin main

if %errorlevel% equ 0 (
    echo.
    echo 🎉 Deployment initiated!
    echo.
    echo 📋 Next steps:
    echo 1. Go to https://vercel.com
    echo 2. Sign up/Login with GitHub
    echo 3. Click 'New Project'
    echo 4. Import your repository
    echo 5. Deploy!
    echo.
    echo 🌐 Your site will be live at: https://your-project-name.vercel.app
) else (
    echo ❌ Failed to push to GitHub. Please check your connection and try again.
    pause
    exit /b 1
)

pause
