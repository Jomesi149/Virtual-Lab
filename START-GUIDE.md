# 🚀 CARA RUN FRONTEND - SIMPLE GUIDE

## ⚡ Cara Paling Mudah (1 Command)

```powershell
.\start-json.ps1
```

Script ini akan otomatis:
1. Start backend-json (terminal baru)
2. Start frontend (terminal baru)
3. Siap pakai!

---

## 📝 Cara Manual (2 Terminal)

### Terminal 1 - Backend:
```powershell
.\run-backend.ps1
```

### Terminal 2 - Frontend:
```powershell
.\run-frontend.ps1
```

---

## 🔧 Cara Paling Detail (Step by Step)

### 1️⃣ Buka PowerShell #1 untuk Backend

```powershell
cd "C:\Joan\Kuliah\SEM 5\PAWM\Virtual-Lab\backend-json"
npm install
npm run dev
```

✅ Tunggu sampai muncul:
```
🚀 Server is running on port 5000
💾 Using JSON file storage
```

**JANGAN CLOSE TERMINAL INI!**

---

### 2️⃣ Buka PowerShell #2 untuk Frontend

```powershell
cd "C:\Joan\Kuliah\SEM 5\PAWM\Virtual-Lab\frontend"
npm install
npm run dev
```

✅ Tunggu sampai muncul:
```
➜  Local:   http://localhost:3000/
```

**JANGAN CLOSE TERMINAL INI!**

---

### 3️⃣ Buka Browser

```
http://localhost:3000
```

---

## 📋 Checklist

- [ ] Backend running di port 5000 ✅
- [ ] Frontend running di port 3000 ✅
- [ ] Browser buka http://localhost:3000 ✅
- [ ] Bisa register & login ✅

---

## ⚠️ Jika Ada Error

### Error: "npm not found"
```powershell
# Install Node.js dari https://nodejs.org/
# Restart PowerShell setelah install
```

### Error: "Cannot find module"
```powershell
# Install dependencies
cd frontend
npm install
```

### Error: Port already in use
```powershell
# Kill process yang menggunakan port
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Backend Error (MongoDB)
```powershell
# Pastikan menggunakan backend-json, BUKAN backend!
cd backend-json
npm run dev
```

---

## 🎯 Files yang Bisa Dijalankan

| File | Fungsi |
|------|--------|
| `start-json.ps1` | Start backend + frontend (otomatis) |
| `run-backend.ps1` | Start backend saja |
| `run-frontend.ps1` | Start frontend saja |
| `choose-version.ps1` | Pilih versi & install |

---

## 💡 Tips

1. **Selalu jalankan backend dulu**, baru frontend
2. **Jangan close terminal** yang running
3. **Gunakan backend-json** (bukan backend)
4. **Ctrl+C** untuk stop server

---

## 🚀 Quick Commands

```powershell
# Otomatis (RECOMMENDED)
.\start-json.ps1

# Manual Backend
.\run-backend.ps1

# Manual Frontend
.\run-frontend.ps1
```

---

## ✅ Setelah Running

- Backend: http://localhost:5000/api/health
- Frontend: http://localhost:3000
- Register user baru
- Login
- Mulai belajar UX Laws!

**Happy Learning! 🎓**
