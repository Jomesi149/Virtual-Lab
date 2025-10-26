# Check if using local MongoDB or cloud (Atlas)
Write-Host "Make sure MongoDB is ready (local or Atlas)..." -ForegroundColor Yellow
Write-Host "See MONGODB-SETUP.md for setup instructions" -ForegroundColor Cyan
Start-Sleep -Seconds 2

# Start Backend
Write-Host "`nStarting Backend Server..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\backend'; npm run dev"

# Wait a bit for backend to start
Start-Sleep -Seconds 3

# Start Frontend
Write-Host "Starting Frontend Server..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\frontend'; npm run dev"

Write-Host "`n✅ Servers are starting!" -ForegroundColor Green
Write-Host "`nBackend: http://localhost:5000" -ForegroundColor Cyan
Write-Host "Frontend: http://localhost:3000" -ForegroundColor Cyan
Write-Host "`nPress any key to exit this window..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
