# Deployment Guide - Vercel

## Cara Deploy ke Vercel

### Opsi 1: Deploy via Vercel Dashboard (Recommended)

1. **Install Vercel CLI (optional):**
   ```bash
   npm i -g vercel
   ```

2. **Login ke Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Deploy Production:**
   ```bash
   vercel --prod
   ```

### Opsi 2: Deploy via GitHub/GitLab/Bitbucket

1. Push code ke repository Git (GitHub/GitLab/Bitbucket)
2. Login ke [vercel.com](https://vercel.com)
3. Klik "Add New Project"
4. Import repository Anda
5. Vercel akan auto-detect Next.js dan mengkonfigurasi semuanya
6. Klik "Deploy"

### Konfigurasi yang Diperlukan

#### Environment Variables (jika ada)
Jika nanti membutuhkan environment variables, tambahkan di:
- Vercel Dashboard → Project → Settings → Environment Variables

#### Build Settings
Proyek ini sudah dikonfigurasi untuk Vercel dengan:
- Framework: Next.js 14
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### Regional Deployment
Proyek dikonfigurasi untuk deploy di region Singapore (sin1) untuk performa optimal untuk Indonesia. Bisa diubah di `vercel.json` jika perlu.

### Setelah Deploy

1. **Custom Domain (Optional):**
   - Vercel akan memberikan domain gratis: `yourproject.vercel.app`
   - Bisa tambahkan custom domain di Settings → Domains

2. **Monitoring:**
   - Cek analytics di Vercel Dashboard
   - Monitor performance dan errors

### Troubleshooting

Jika ada error saat build:
1. Pastikan semua dependencies terinstall: `npm install`
2. Pastikan Node.js version >= 18
3. Cek build logs di Vercel Dashboard untuk detail error

### Notes

- Vercel otomatis handle:
  - SSL certificates
  - CDN global
  - Automatic deployments dari Git
  - Preview deployments untuk setiap PR

## Production Checklist

- [ ] Semua environment variables sudah di-set
- [ ] Build lokal berhasil (`npm run build`)
- [ ] Test di production preview
- [ ] Custom domain sudah dikonfigurasi (jika ada)
- [ ] Analytics/monitoring sudah setup

Selamat deploy! 🚀
