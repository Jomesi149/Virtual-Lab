Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  MongoDB Atlas Setup Helper" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Langkah-langkah setup MongoDB Atlas:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Buka browser ke:" -ForegroundColor Green
Write-Host "   https://www.mongodb.com/cloud/atlas/register" -ForegroundColor White
Write-Host ""
Write-Host "2. Daftar dengan email/Google (GRATIS)" -ForegroundColor Green
Write-Host ""
Write-Host "3. Buat cluster M0 (Free tier)" -ForegroundColor Green
Write-Host ""
Write-Host "4. Setup Database User:" -ForegroundColor Green
Write-Host "   - Username: uxlab_user" -ForegroundColor White
Write-Host "   - Password: (buat password Anda)" -ForegroundColor White
Write-Host ""
Write-Host "5. Setup Network Access:" -ForegroundColor Green
Write-Host "   - Allow access from anywhere (0.0.0.0/0)" -ForegroundColor White
Write-Host ""
Write-Host "6. Dapatkan Connection String:" -ForegroundColor Green
Write-Host "   - Klik Connect > Drivers > Node.js" -ForegroundColor White
Write-Host "   - Copy connection string" -ForegroundColor White
Write-Host ""
Write-Host "7. Update file backend\.env:" -ForegroundColor Green
Write-Host "   MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/ux-virtual-lab?retryWrites=true&w=majority" -ForegroundColor White
Write-Host ""

$openBrowser = Read-Host "Buka browser untuk daftar MongoDB Atlas? (y/n)"

if ($openBrowser -eq 'y' -or $openBrowser -eq 'Y') {
    Write-Host ""
    Write-Host "Membuka browser..." -ForegroundColor Green
    Start-Process "https://www.mongodb.com/cloud/atlas/register"
}

Write-Host ""
Write-Host "Setelah setup selesai, jalankan:" -ForegroundColor Yellow
Write-Host "  cd backend" -ForegroundColor White
Write-Host "  npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "Untuk panduan lengkap, baca: MONGODB-SETUP.md" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
