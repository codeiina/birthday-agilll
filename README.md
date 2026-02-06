# 🎂 Website Ulang Tahun - Minimalis & Elegan

Website ulang tahun interaktif dengan desain minimalis white & grey, dilengkapi music player dan animasi halus.

---

## ✨ Fitur Utama

### 🎨 Design
- ✅ Tema warna: White & Soft Grey (Minimalis, Clean, Elegan)
- ✅ Typography: Playfair Display (Serif - untuk heading) & Poppins (Sans-serif - untuk body)
- ✅ Fully Responsive (Desktop & Mobile)
- ✅ Smooth animations dengan Motion/React

### 📸 Komponen
1. **Hero Section** - Landing page dengan judul elegan dan animasi
2. **Photo Carousel** - Slider foto otomatis dengan navigasi arrows & dots
3. **Message Section** - 3 kartu ucapan dengan hover effects
4. **Photo Gallery** - Grid 6 foto dengan hover overlay
5. **Love Quotes** - Quotes romantis dalam card elegan
6. **Footer** - Pesan penutup yang hangat
7. **Music Player** - Floating music player dengan play/pause control

---

## 🎵 Music Player

Music player floating di pojok kanan bawah dengan fitur:
- ✅ Play / Pause button
- ✅ Animasi indikator saat playing
- ✅ Hover untuk expand info
- ✅ Loop otomatis
- ✅ Minimalis & menyatu dengan desain

### 📁 Cara Menambahkan Lagu:

1. Simpan file lagu (`.mp3`) di folder: `/public/assets/music/`
2. Buka file: `/src/app/components/music-player.tsx`
3. Update variabel `SONG_PATH`:

```typescript
const SONG_PATH = "/assets/music/nama-lagu-kamu.mp3";
```

📖 **Panduan lengkap**: Baca `/public/assets/music/README.md`

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm atau yarn

### Instalasi

```bash
# Clone atau download project

# Install dependencies
npm install
# atau
yarn install

# Jalankan development server
npm run dev
# atau
yarn dev

# Buka browser
# http://localhost:5173
```

### Build Production

```bash
npm run build
# atau
yarn build

# Folder dist/ akan berisi file production-ready
```

---

## 📂 Struktur Folder

```
/
├── public/
│   └── assets/
│       └── music/              # 🎵 Taruh file lagu di sini
│           └── README.md       # Panduan musik
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── hero-section.tsx
│   │   │   ├── photo-carousel.tsx
│   │   │   ├── message-section.tsx
│   │   │   ├── photo-gallery.tsx
│   │   │   ├── love-quotes.tsx
│   │   │   ├── footer.tsx
│   │   │   └── music-player.tsx  # 🎼 Music Player
│   │   └── App.tsx
│   │
│   └── styles/
│       ├── theme.css            # 🎨 Tema warna
│       └── fonts.css            # 🔤 Font imports
│
├── DEPLOYMENT-GUIDE.md          # 📘 Panduan deploy
└── README.md                    # 📄 File ini
```

---

## 🎨 Kustomisasi

### 1. Ubah Warna Tema

Edit `/src/styles/theme.css`:

```css
:root {
  --background: #ffffff;      /* Background utama */
  --foreground: #2d3748;      /* Text color */
  --primary: #4a5568;         /* Warna primary (grey) */
  --secondary: #f7fafc;       /* Background section */
  --muted: #edf2f7;          /* Background card */
  --accent: #e2e8f0;         /* Accent color */
}
```

### 2. Update Konten

**Hero Section** - `/src/app/components/hero-section.tsx`:
```typescript
// Ubah subtitle
<p>To the most beautiful soul</p>
```

**Messages** - `/src/app/components/message-section.tsx`:
```typescript
const messages = [
  {
    title: 'Untuk Cintaku',
    message: 'Ubah pesan di sini...'
  }
]
```

**Love Quotes** - `/src/app/components/love-quotes.tsx`:
```typescript
const quotes = [
  {
    text: 'Ubah quote di sini...',
    author: 'Your name'
  }
]
```

**Footer** - `/src/app/components/footer.tsx`:
```typescript
// Ubah nama di signature
<p>Your Love</p>
```

### 3. Ganti Foto

Website ini menggunakan Unsplash API untuk foto. Untuk ganti foto:

**Carousel** - `/src/app/components/photo-carousel.tsx`:
```typescript
const photos = [
  {
    url: 'https://images.unsplash.com/...',
    caption: 'Ubah caption...'
  }
]
```

**Gallery** - `/src/app/components/photo-gallery.tsx`:
```typescript
const galleryPhotos = [
  {
    url: 'https://images.unsplash.com/...',
    title: 'Ubah title...'
  }
]
```

---

## 🌐 Deploy ke Internet

Website ini siap di-deploy ke Netlify (GRATIS!).

### 📘 Panduan Lengkap

Baca file: `/DEPLOYMENT-GUIDE.md` untuk tutorial step-by-step.

### Quick Deploy:

```bash
# 1. Build project
npm run build

# 2. Upload folder 'dist/' ke Netlify
# Via drag & drop di netlify.com
```

**Atau via GitHub:**
```bash
# Push ke GitHub
git init
git add .
git commit -m "Initial commit"
git push

# Connect GitHub repo ke Netlify
# Netlify akan auto-deploy!
```

---

## 🛠️ Tech Stack

- ⚛️ **React 18** - UI Framework
- 🎨 **Tailwind CSS v4** - Styling
- ✨ **Motion/React** - Animations (formerly Framer Motion)
- 🎠 **React Slick** - Carousel
- 🎭 **Lucide React** - Icons
- 📦 **Vite** - Build tool

---

## 📱 Responsiveness

Website ini fully responsive dan sudah ditest di:
- ✅ Desktop (1920px+)
- ✅ Laptop (1366px - 1920px)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 768px)

---

## 🎯 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

---

## 📝 Notes

### Music Player
- Autoplay mungkin tidak berfungsi di beberapa browser (perlu user interaction)
- User harus klik tombol play untuk memulai musik
- File lagu akan loop otomatis

### Images
- Website menggunakan Unsplash CDN untuk images
- Tidak perlu khawatir tentang hosting images
- Gambar akan load cepat dari CDN

### Animations
- Smooth scroll reveal animations
- Hover effects pada cards dan gallery
- Floating animations pada hero section

---

## 📞 Troubleshooting

### Music tidak terdengar?
1. Cek path file di `music-player.tsx`
2. Pastikan file lagu ada di `/public/assets/music/`
3. Test di browser lain

### Build error?
1. Hapus `node_modules/` dan `package-lock.json`
2. Jalankan `npm install` lagi
3. Coba `npm run build` lagi

### Deploy gagal?
1. Baca error message di Netlify dashboard
2. Test build di local: `npm run build`
3. Pastikan semua dependencies sudah di install

---

## 💝 Final Tips

### Sebelum Share ke Pacar:

1. ✅ Test semua fitur berfungsi
2. ✅ Ganti semua placeholder text
3. ✅ Add lagu yang meaningful
4. ✅ Test di mobile device
5. ✅ Check typo di semua text
6. ✅ Preview di incognito mode

### Cara Share yang Special:

- 📱 Kirim link dengan pesan romantis
- 🎁 Print QR code di kartu ucapan
- 💝 Surprise dengan show di layar besar
- 📧 Email dengan subject yang sweet

---

## 🎉 Credits

- Design: Minimalist & Elegant approach
- Typography: Google Fonts (Playfair Display, Poppins)
- Images: Unsplash (Free stock photos)
- Icons: Lucide React
- Animations: Motion/React

---

## ❤️ Made with Love

Website ini dibuat dengan sepenuh hati untuk merayakan hari spesial orang yang kamu sayangi.

**Happy Birthday to your special one! 🎂✨**

---

## 📄 License

This project is for personal use only.
Feel free to customize and use for your special occasions.

---

**Enjoy! 🎊**
