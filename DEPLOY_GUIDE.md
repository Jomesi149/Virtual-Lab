# Panduan Deploy ke Vercel

## 📋 Checklist Deploy Autentikasi

### A. Setup Backend di Vercel

1. **Deploy Backend**
   - Buka [Vercel Dashboard](https://vercel.com)
   - Import project `Virtual-Lab/backend`
   - Pilih Root Directory: `backend`

2. **Set Environment Variables di Vercel (Backend)**
   Tambahkan di Vercel Dashboard > Settings > Environment Variables:
   ```
   MONGODB_URI=mongodb+srv://joanmelkior14:qvuB85O1GfAOaViJ@virtuallab.pik9djq.mongodb.net/
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend-url.vercel.app
   ```

3. **Catat URL Backend**
   - Setelah deploy, Vercel akan memberikan URL, misal: `https://virtual-lab-api.vercel.app`
   - Simpan URL ini untuk setup frontend

### B. Setup Frontend di Vercel

1. **Deploy Frontend**
   - Buka [Vercel Dashboard](https://vercel.com)
   - Import project `Virtual-Lab/frontend`
   - Pilih Root Directory: `frontend`

2. **Set Environment Variables di Vercel (Frontend)**
   Tambahkan di Vercel Dashboard > Settings > Environment Variables:
   ```
   VITE_API_URL=https://virtual-lab-api.vercel.app
   ```
   ⚠️ **PENTING:** Ganti dengan URL backend Anda yang sebenarnya!

3. **Redeploy jika perlu**
   - Setelah menambah environment variable, klik "Redeploy" di Vercel

### C. Update CORS di Backend `.env`

Tambahkan URL frontend Vercel ke file `.env` backend (lokal):
```
FRONTEND_URL=https://your-frontend-url.vercel.app
```

Lalu push perubahan dan redeploy backend.

---

## 🧪 Testing Autentikasi

### 1. Test di Development (Lokal)
```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend
cd frontend
npm run dev
```
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

### 2. Test di Production (Vercel)
1. Buka URL frontend Vercel Anda
2. Coba Register user baru
3. Coba Login dengan user yang baru dibuat
4. Cek Console Browser (F12) untuk memastikan tidak ada CORS error
5. Cek Network tab untuk melihat request ke backend berhasil (status 200/201)

---

## 🔍 Troubleshooting

### ❌ Error: CORS Policy
**Solusi:**
- Pastikan `FRONTEND_URL` di backend `.env` sudah benar
- Redeploy backend setelah update environment variable
- Clear browser cache dan coba lagi

### ❌ Error: Network Error / Cannot POST /api/auth/login
**Solusi:**
- Pastikan `VITE_API_URL` di frontend Vercel sudah diisi dengan URL backend yang benar
- Pastikan URL backend bisa diakses (buka di browser)
- Check backend logs di Vercel Dashboard

### ❌ Error: Token is not valid
**Solusi:**
- Pastikan `JWT_SECRET` sama di lokal dan production
- Clear localStorage di browser
- Logout dan login ulang

### ❌ Error: MongoDB Connection Failed
**Solusi:**
- Pastikan `MONGODB_URI` di Vercel environment variables benar
- Check MongoDB Atlas Network Access (whitelist 0.0.0.0/0 untuk Vercel)
- Check MongoDB Atlas Database Access (pastikan user ada dan password benar)

---

## 📝 File yang Sudah Diupdate

✅ `frontend/vite.config.js` - Support environment variable untuk API URL  
✅ `frontend/src/context/AuthContext.jsx` - Gunakan dynamic API URL  
✅ `backend/server.js` - CORS configuration untuk production  
✅ `frontend/.env` - Environment variable untuk development  
✅ `frontend/.env.example` - Template environment variable  
✅ `backend/.env.example` - Template environment variable  

---

## 🚀 Cara Kerja

### Development (Lokal)
- Frontend di `localhost:3000` → Proxy Vite → Backend di `localhost:5000`
- `VITE_API_URL` = kosong (gunakan proxy)

### Production (Vercel)
- Frontend di `your-app.vercel.app` → Direct → Backend di `your-api.vercel.app`
- `VITE_API_URL` = URL backend Vercel

---

## 📌 Catatan Penting

1. **Jangan commit file `.env`** - Sudah masuk `.gitignore`
2. **JWT_SECRET harus sama** di lokal dan production
3. **Whitelist IP di MongoDB Atlas** - Tambahkan `0.0.0.0/0` untuk Vercel
4. **HTTPS wajib di production** - Vercel otomatis menyediakan HTTPS
5. **Environment variables berbeda** untuk setiap environment (development/production)

---

## 🔐 Keamanan

- ✅ Gunakan JWT_SECRET yang kuat dan acak di production
- ✅ Jangan expose credentials di repository
- ✅ Gunakan HTTPS di production
- ✅ Set CORS origin specific (bukan wildcard *)
- ✅ Validasi input di backend
- ✅ Hash password dengan bcrypt

