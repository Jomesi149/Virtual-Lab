# Start Frontend Only
Write-Host "Starting Frontend Development Server..." -ForegroundColor Green
Write-Host ""

# Check if in correct directory
$currentDir = Get-Location
Write-Host "Current directory: $currentDir" -ForegroundColor Yellow

# Navigate to frontend directory
$frontendDir = Join-Path $PSScriptRoot "frontend"
Set-Location $frontendDir

Write-Host "Changed to: $(Get-Location)" -ForegroundColor Cyan
Write-Host ""

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies first..." -ForegroundColor Yellow
    npm install
    Write-Host ""
}

Write-Host "Starting Vite dev server..." -ForegroundColor Green
Write-Host ""
Write-Host "Frontend akan running di: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Pastikan backend sudah running di port 5000!" -ForegroundColor Yellow
Write-Host "Jika belum, jalankan di terminal lain: cd backend-json && npm run dev" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Ctrl+C to stop" -ForegroundColor Gray
Write-Host ""

npm run dev
