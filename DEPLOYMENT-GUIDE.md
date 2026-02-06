# 🚀 Panduan Deploy Website Ulang Tahun ke Netlify

Panduan lengkap untuk men-deploy website ulang tahun yang sudah dibuat ke Netlify.

---

## 📋 Persiapan Sebelum Deploy

### ✅ Checklist:

1. **File lagu sudah ditambahkan**
   - File `.mp3` sudah ada di `/public/assets/music/`
   - Path lagu sudah diupdate di `/src/app/components/music-player.tsx`

2. **Personalisasi konten**
   - Ganti nama di footer (`/src/app/components/footer.tsx`)
   - Customize pesan di message section jika perlu
   - Update quotes di love quotes section

3. **Test di local**
   - Jalankan `npm run dev` atau `yarn dev`
   - Buka `http://localhost:5173`
   - Pastikan semua fitur berjalan dengan baik
   - Test music player berfungsi

---

## 🌐 Deploy ke Netlify

### Metode 1: Deploy via GitHub (Recommended)

#### Step 1: Push ke GitHub

```bash
# Inisialisasi git (jika belum)
git init

# Tambahkan semua file
git add .

# Commit
git commit -m "Birthday website - ready to deploy"

# Tambahkan remote repository
git remote add origin https://github.com/username/repo-name.git

# Push ke GitHub
git push -u origin main
```

#### Step 2: Connect ke Netlify

1. Login ke [Netlify](https://netlify.com)
2. Klik **"Add new site"** → **"Import an existing project"**
3. Pilih **"GitHub"**
4. Authorize Netlify untuk akses GitHub kamu
5. Pilih repository yang baru kamu push
6. Konfigurasi build settings:
   - **Build command**: `npm run build` atau `yarn build`
   - **Publish directory**: `dist`
7. Klik **"Deploy site"**

#### Step 3: Tunggu Deploy Selesai

- Netlify akan otomatis build dan deploy
- Proses memakan waktu 2-5 menit
- Website akan live di URL: `random-name.netlify.app`

---

### Metode 2: Deploy Manual via Drag & Drop

#### Step 1: Build Project

```bash
# Install dependencies (jika belum)
npm install
# atau
yarn install

# Build production
npm run build
# atau
yarn build
```

Ini akan membuat folder `dist/` yang berisi file production-ready.

#### Step 2: Upload ke Netlify

1. Login ke [Netlify](https://netlify.com)
2. Scroll ke bawah ke **"Want to deploy a new site without connecting to Git?"**
3. Drag & drop folder `dist/` ke area upload
4. Tunggu upload & deploy selesai
5. Website akan live!

---

## 🎨 Customize Domain (Opsional)

### Ubah Nama Domain Netlify

1. Di dashboard Netlify, klik site kamu
2. Pilih **"Site settings"** → **"Domain management"**
3. Klik **"Options"** → **"Edit site name"**
4. Ganti dengan nama yang kamu mau (contoh: `birthday-sayang.netlify.app`)

### Gunakan Custom Domain (Berbayar)

1. Beli domain dari provider (Namecheap, GoDaddy, dll)
2. Di Netlify: **"Domain management"** → **"Add custom domain"**
3. Ikuti instruksi untuk pointing DNS

---

## 🔧 Troubleshooting

### ❌ Build Failed

**Solusi:**
- Cek error message di Netlify dashboard
- Pastikan semua dependencies sudah ada di `package.json`
- Test build di local dulu: `npm run build`

### ❌ Music Player Tidak Berfungsi

**Solusi:**
- Pastikan file lagu ada di `/public/assets/music/`
- Cek path di `music-player.tsx` sudah benar
- Test di local sebelum deploy

### ❌ Images Tidak Muncul

**Solusi:**
- Website ini menggunakan Unsplash untuk images
- Pastikan koneksi internet stabil
- Images akan load otomatis dari CDN Unsplash

### ❌ Website Lambat

**Solusi:**
- Compress file lagu (jangan lebih dari 10MB)
- Optimize images jika kamu upload custom images
- Netlify sudah include CDN gratis

---

## 🎯 Tips Post-Deploy

### 1. Test Website

Setelah deploy, test semua fitur:
- ✅ Scroll halaman
- ✅ Klik tombol "Lihat Kenangan"
- ✅ Test carousel auto-slide
- ✅ Klik play music player
- ✅ Hover effects di gallery
- ✅ Test di mobile dan desktop

### 2. Share dengan Pacar

Cara yang special untuk share:
- 📱 Kirim link via chat dengan pesan romantis
- 🎁 QR code di kartu ucapan
- 💝 Surprise dengan menampilkan di layar laptop/TV

### 3. Monitor Analytics (Opsional)

Netlify menyediakan analytics gratis:
- Lihat berapa kali website dikunjungi
- Tracking unique visitors
- Dapat notifikasi saat deploy success

---

## 📱 Mobile Optimization

Website sudah responsive! Test di berbagai device:
- ✅ iPhone/Android phones
- ✅ Tablets
- ✅ Desktop (Chrome, Firefox, Safari)

---

## 🔄 Update Website Setelah Deploy

### Via GitHub (jika connect via Git):

```bash
# Edit file yang ingin diubah
# Commit changes
git add .
git commit -m "Update content"
git push

# Netlify akan otomatis re-deploy!
```

### Via Manual Upload:

1. Edit file di local
2. Run `npm run build` lagi
3. Upload folder `dist/` yang baru ke Netlify

---

## 💾 Backup

Simpan backup project:
- 💾 Simpan di GitHub (sudah otomatis)
- 💾 Download folder project ke external drive
- 💾 Screenshot hasil jadi untuk kenangan

---

## 🎉 Selesai!

Website ulang tahun kamu sudah live dan siap untuk dibagikan!

**URL Format:**
- Netlify: `https://nama-site.netlify.app`
- Custom domain: `https://yourdomain.com`

---

## 📞 Support

Jika ada masalah saat deploy:
1. Cek [Netlify Docs](https://docs.netlify.com)
2. Cek build logs di Netlify dashboard
3. Test build di local terlebih dahulu

---

**Happy Deploying! 🚀**

Made with ❤️ for special moments.
