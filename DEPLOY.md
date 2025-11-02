# 🚀 Quick Deploy Guide - Vercel

## Langkah-langkah Deploy

### Method 1: Via Vercel CLI (Paling Cepat)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   
   Untuk production:
   ```bash
   vercel --prod
   ```

### Method 2: Via GitHub + Vercel Dashboard (Recommended)

1. **Push ke GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy via Vercel:**
   - Login ke [vercel.com](https://vercel.com)
   - Klik "Add New Project"
   - Import repository dari GitHub
   - Vercel akan auto-detect Next.js
   - Klik "Deploy" ✅

### Method 3: Drag & Drop (Tanpa Git)

1. Build project:
   ```bash
   npm run build
   ```
   
2. Zip folder `.next` dan file-file penting

3. Upload via Vercel Dashboard → Deploy

## ⚙️ Konfigurasi

### Build Settings (Otomatis)
- Framework: Next.js 14
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### Environment Variables (jika ada)
Tambahkan di: Vercel Dashboard → Settings → Environment Variables

## 📝 Checklist Sebelum Deploy

- [x] Semua dependencies sudah terinstall
- [x] Build lokal sukses (`npm run build`)
- [x] `vercel.json` sudah ada
- [x] `.gitignore` sudah proper

## ✅ Setelah Deploy

1. Website akan live di: `yourproject.vercel.app`
2. Bisa tambahkan custom domain di Settings → Domains
3. Setiap push ke GitHub akan auto-deploy (jika pakai Method 2)

## 🐛 Troubleshooting

**Build Error?**
- Pastikan Node.js >= 18
- Cek build logs di Vercel Dashboard
- Test build lokal dulu: `npm run build`

**404 Error?**
- Pastikan `middleware.ts` ada
- Cek routing Next.js 14 App Router

## 🎉 Selesai!

Website sudah siap di Vercel dengan:
- ✅ SSL Certificate (HTTPS)
- ✅ Global CDN
- ✅ Auto deployments
- ✅ Preview deployments untuk PR

Selamat deploy! 🚀
