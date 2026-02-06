# 🎵 Music Folder - Panduan Lengkap

## Folder ini untuk menyimpan file lagu yang akan diputar di website ulang tahun

---

## 📁 Struktur Folder

```
/public/assets/music/
├── README.md (file ini)
└── [file-lagu-kamu].mp3 (taruh file lagu di sini)
```

---

## 🎼 Cara Menambahkan Lagu

### Langkah 1: Siapkan File Lagu
- Format yang didukung: `.mp3` (direkomendasikan), `.wav`, `.ogg`
- Ukuran file: Maksimal 10MB untuk performa optimal
- Contoh nama file: 
  - `birthday-song.mp3`
  - `lagu-ultah.mp3`
  - `our-favorite-song.mp3`

### Langkah 2: Upload File Lagu
1. Simpan file lagu kamu ke folder ini: `/public/assets/music/`
2. Pastikan nama file tidak mengandung spasi (gunakan dash `-` atau underscore `_`)

### Langkah 3: Update Path di Kode
1. Buka file: `/src/app/components/music-player.tsx`
2. Cari baris dengan komentar: `// GANTI PATH LAGU DI SINI!`
3. Ubah nilai `SONG_PATH` sesuai nama file lagumu

**Contoh:**

```typescript
// Jika nama file lagu kamu: birthday-song.mp3
const SONG_PATH = "/assets/music/birthday-song.mp3";

// Jika nama file lagu kamu: our-song.mp3
const SONG_PATH = "/assets/music/our-song.mp3";

// Jika nama file lagu kamu: lagu-romantis.mp3
const SONG_PATH = "/assets/music/lagu-romantis.mp3";
```

---

## 🎯 Tips Memilih Lagu

1. **Pilih lagu yang bermakna** untuk kalian berdua
2. **Durasi ideal**: 2-5 menit (lagu akan otomatis loop/berulang)
3. **Genre yang cocok**:
   - Lagu romantis/love song
   - Acoustic/piano version
   - Instrumental
   - Lagu favorit bersama

---

## 🔧 Troubleshooting

### Lagu tidak terdengar?
✅ Pastikan path file sudah benar di `music-player.tsx`
✅ Cek nama file tidak ada typo
✅ Pastikan browser mendukung autoplay (klik tombol play)

### Lagu terlalu keras/pelan?
Buka file `/src/app/components/music-player.tsx` dan tambahkan:
```typescript
// Di dalam useEffect atau setelah audioRef.current
audioRef.current.volume = 0.5; // Nilai 0.0 - 1.0 (0.5 = 50% volume)
```

---

## 📝 Catatan Penting

⚠️ **File lagu TIDAK disertakan dalam repository**
- Kamu harus menambahkan file lagu sendiri
- File lagu tidak akan ter-commit ke Git (sudah ada di .gitignore)

⚠️ **Copyright**
- Pastikan kamu punya hak untuk menggunakan lagu tersebut
- Hanya untuk penggunaan pribadi/non-komersial

---

## 🚀 Deploy ke Netlify

Saat deploy ke Netlify, pastikan:
1. File lagu sudah ada di folder `/public/assets/music/`
2. Upload semua file termasuk folder `public`
3. Netlify akan otomatis serve file dari folder `public`

---

## ❓ Butuh Bantuan?

Jika ada masalah:
1. Cek console browser (F12 → Console) untuk error
2. Pastikan path file sudah benar
3. Test di browser yang berbeda

---

**Made with ❤️ for your special day**
