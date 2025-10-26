# 🚀 UX Virtual Lab - JSON Version (NO DATABASE REQUIRED!)

## ✅ Versi Ini Menggunakan JSON File Storage

**TIDAK PERLU INSTALL DATABASE APAPUN!**

Versi ini menggunakan file JSON untuk menyimpan data:
- ✅ **ZERO setup** - Langsung jalan
- ✅ **No MongoDB** needed
- ✅ **No installation** required
- ✅ Perfect untuk **development & learning**

---

## 🚀 Quick Start

### 1. Install Dependencies

```powershell
cd backend-json
npm install
```

### 2. Start Server

```powershell
npm run dev
```

Server akan running di `http://localhost:5000`

### 3. Start Frontend

Buka terminal baru:

```powershell
cd frontend
npm install
npm run dev
```

Frontend akan running di `http://localhost:3000`

### 4. Use the App!

1. Buka browser: `http://localhost:3000`
2. **Register** akun baru
3. **Login**
4. Initialize UX laws (otomatis saat pertama kali akses)
5. Mulai belajar!

---

## 📂 Data Storage

Data disimpan di file JSON:

```
backend-json/
  data/
    users.json       # User data (auto-created)
    ux-laws.json     # UX laws data (auto-created)
```

File-file ini akan dibuat otomatis saat aplikasi pertama kali dijalankan.

---

## 🎯 Fitur Lengkap

Sama seperti versi MongoDB, tapi tanpa perlu database:

- ✅ User Registration & Login
- ✅ JWT Authentication
- ✅ 8 UX Laws content
- ✅ Progress tracking
- ✅ User profile
- ✅ Mark laws as complete
- ✅ Responsive UI

---

## 🔧 Cara Kerja

Backend menggunakan **JSON file storage** dengan:
- `fs/promises` untuk async file operations
- Structured data service layer
- Sama persis dengan MongoDB API

**Frontend tidak perlu diubah sama sekali!** API endpoint sama persis.

---

## ⚡ Kelebihan JSON Version

| Feature | JSON | MongoDB |
|---------|------|---------|
| **Setup Time** | ⚡ 0 menit | ⏰ 5-30 menit |
| **Installation** | ✅ Tidak perlu | ❌ Perlu install |
| **Learning Curve** | ✅ Mudah | ⚠️ Perlu belajar |
| **Perfect For** | 🎓 Lab/Learning | 🚀 Production |

---

## 📊 Kapan Gunakan Versi Ini?

**✅ Gunakan JSON version jika:**
- Development & testing
- Learning project
- Lab assignment
- Prototype
- Tidak mau install database

**❌ Jangan gunakan jika:**
- Production dengan banyak user
- Perlu concurrent access
- Data critical
- Scalability penting

---

## 🔄 Migration ke MongoDB

Jika nanti ingin migrate ke MongoDB:
1. Gunakan folder `backend` (bukan `backend-json`)
2. Setup MongoDB Atlas (gratis)
3. Data structure sama, mudah migrate

---

## 🎉 Ready to Go!

```powershell
# Backend
cd backend-json
npm install
npm run dev

# Frontend (terminal baru)
cd frontend  
npm install
npm run dev

# Open browser
# http://localhost:3000
```

**No database, no problem!** 🚀
