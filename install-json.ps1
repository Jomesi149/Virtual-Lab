# Install backend-json dependencies
Write-Host "Installing JSON backend dependencies..." -ForegroundColor Green
Set-Location backend-json
npm install

# Install frontend dependencies
Write-Host "`nInstalling frontend dependencies..." -ForegroundColor Green
Set-Location ../frontend
npm install

Write-Host "`n✅ Installation complete!" -ForegroundColor Green
Write-Host "`nJSON Version - NO DATABASE NEEDED!" -ForegroundColor Cyan
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "1. Start backend: cd backend-json && npm run dev"
Write-Host "2. Start frontend: cd frontend && npm run dev"
Write-Host "3. Open http://localhost:3000 in your browser"
Write-Host "`nNo MongoDB installation required! 🎉" -ForegroundColor Green
