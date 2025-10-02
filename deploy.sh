#!/bin/bash

# 🚀 Business Consultancy Website - Vercel Deployment Script

echo "🚀 Starting deployment process..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: Business Consultancy Website"
fi

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  No remote origin found. Please add your GitHub repository:"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/business-consultancy-website.git"
    echo ""
    echo "📝 Steps to deploy:"
    echo "1. Create a new repository on GitHub"
    echo "2. Run: git remote add origin https://github.com/YOUR_USERNAME/business-consultancy-website.git"
    echo "3. Run: git push -u origin main"
    echo "4. Go to vercel.com and import your repository"
    exit 1
fi

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

# Add and commit changes
echo "📝 Committing changes..."
git add .
git commit -m "Deploy: Business Consultancy Website - $(date)"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin master

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Deployment initiated!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Go to https://vercel.com"
    echo "2. Sign up/Login with GitHub"
    echo "3. Click 'New Project'"
    echo "4. Import your repository"
    echo "5. Deploy!"
    echo ""
    echo "🌐 Your site will be live at: https://your-project-name.vercel.app"
else
    echo "❌ Failed to push to GitHub. Please check your connection and try again."
    exit 1
fi
