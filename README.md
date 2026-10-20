# Petualangan Bangun Ruang 3D 🎲📐
**Media Pembelajaran Interaktif Matematika Sekolah Dasar (SD)**

Website interaktif berbasis animasi 3D dan teknologi web modern untuk membantu siswa sekolah dasar memahami konsep geometri bangun ruang dengan cara yang menyenangkan, visual, dan mudah dipahami.

---

## 👩‍🏫 Profil Pengembang Media
* **Nama Lengkap:** Nurul Soneta
* **NIM:** 24129418
* **Program Studi:** Pendidikan Guru Sekolah Dasar (PGSD)
* **Fakultas / Universitas:** Fakultas Ilmu Pendidikan • Universitas Negeri Padang (UNP)
* **🌐 Link Website Live Vercel:** [https://nurul-soneta.vercel.app/](https://nurul-soneta.vercel.app/)

---

## 🌟 Fitur Utama

### 1. 🎮 Eksplorasi 3D Interaktif (Three.js)
* **7 Bangun Ruang Lengkap SD:**
  1. **Kubus** (6 sisi persegi, 12 rusuk, 8 titik sudut)
  2. **Balok** (6 sisi persegi panjang, 12 rusuk, 8 titik sudut)
  3. **Tabung / Silinder** (2 lingkaran + 1 selimut lengkung, 2 rusuk lengkung, 0 titik sudut)
  4. **Kerucut** (1 alas lingkaran + 1 selimut juring, 1 rusuk lengkung, 1 titik puncak)
  5. **Bola** (1 bidang lengkung sempurna, 0 rusuk, 0 titik sudut)
  6. **Prisma Segitiga** (2 segitiga kongruen + 3 persegi tegak, 9 rusuk, 6 titik sudut)
  7. **Limas Segiempat** (1 alas persegi + 4 segitiga tegak, 8 rusuk, 5 titik sudut)
* **Interaksi 3D:**
  * Putar bebas model dari segala sudut (Orbit Control: Drag mouse).
  * Perbesar / Perkecil (Zoom in/out via Scroll mouse).
  * **Tombol Ajaib Titik Sudut:** Menampilkan bola cahaya keemasan di setiap titik sudut bangun ruang.
  * **Tombol Rusuk:** Menegaskan garis-garis rusuk dengan outline kontras.
  * **Mode Rangka (Wireframe):** Menjadikan model transparan agar siswa dapat melihat bagian dalam.
  * **Ganti Warna:** Palet 7 pilihan warna ceria kesukaan anak.
  * 🌟 **Interaktif Benda di Sekitar Kita (3D Real-World Objects):**
    Klik salah satu benda nyata (seperti Dadu bertitik angka, Rubik warna-warni, Kotak Kado berpita, Kaleng Susu bermerek, Cone Es Krim berskup stroberi, Bola Sepak, Tenda Berkemah, Piramida Mesir Kuno, dll) untuk melihat model 3D nyata tersebut langsung berputar di kanvas Three.js! Tersedia tombol *"Bentuk Polos"* untuk kembali ke bentuk geometri awal kapan saja.

### 2. 🧩 3D Shape Builder: Petualangan Jaring-Jaring Bangun Ruang (Fase C SD)
Fitur inovatif pembelajaran matematika interaktif Fase C (Kelas VI SD) berbasis animasi 3D dan Three.js:
* **10 Model Bangun Ruang Lengkap & Pembuktian Geometris:**
  1. 🎲 **Kubus**: 6 bujur sangkar identik kongruen, lipatan sudut siku-siku $90^\circ$ dengan engsel rusuk bertingkat (*nested hinge*) sisi alas, depan, belakang, kiri, kanan, dan tutup atas.
  2. 📦 **Balok**: 6 persegi panjang proporsional ($p \times l \times t$), lipatan sudut $90^\circ$ menutup tepat tanpa celah maupun tumpang tindih.
  3. ⛺ **Prisma Segitiga**: 2 segitiga sama sisi kongruen + 3 persegi panjang, rotasi engsel atap $120^\circ$ dan segitiga $90^\circ$, kedua tutup segitiga tegak menutup pas di ujung prisma.
  4. 🔻 **Limas Segitiga (Tetrahedron)**: 4 segitiga sama sisi kongruen, rotasi lipatan $109.47^\circ$, ketiga segitiga selimut melipat ke atas menyatu tepat pada 1 titik puncak di atas titik berat alas.
  5. 🔺 **Limas Segi Empat**: 1 alas bujur sangkar + 4 segitiga sama kaki, rotasi engsel miring $118.61^\circ$, keempat ujung puncak (*apex*) bertemu presisi matematis di $(0, H, 0)$ dengan toleransi error $0.000000$!
  6. 🏛️ **Prisma Segi Lima**: 2 segi lima beraturan (alas dan tutup) + 5 persegi panjang sisi tegak yang melipat $90^\circ$ tegak lurus, menutup presisi tanpa celah.
  7. 💎 **Limas Segi Lima**: 1 alas segi lima beraturan + 5 segitiga sama kaki, kelima puncak segitiga menyatu presisi di poros pusat puncak.
  8. 🛑 **Prisma Segi Enam**: 2 segi enam beraturan + 6 persegi panjang sisi tegak, bentuk dasar sarang lebah dan pensil kayu.
  9. 🎪 **Limas Segi Enam**: 1 segi enam beraturan + 6 segitiga sama kaki, keenam segitiga melipat tepat menyatu di satu puncak poros pusat.
  10. 🛢️ **Tabung (Silinder)**: 2 lingkaran identik (alas dan tutup) serta 1 persegi panjang selimut tabung. Siswa dapat melihat lembaran persegi panjang melengkung simetris (*symmetric curling*) menjadi silinder bundar sementara kedua lingkaran menutup kedua ujungnya dengan presisi tinggi!
* **Kontrol Interaktif Lengkap:**
  * **Slider Lipatan 0% – 100%**: 0% adalah bangun ruang 3D tertutup rapat; 100% terbentang rata menjadi jaring-jaring 2D pada bidang $Y=0$.
  * **Tombol "Bentangkan Jaring-Jaring" & "Lipat Jadi Bangun Ruang"**: Animasi halus dengan kurva perlambatan (*cubic easing*) dan efek suara gerakan (*whoosh sound effect*).
  * **Mode Animasi Otomatis (Breathing Mode)**: Bergerak melipat dan membentang secara bolak-balik tanpa henti dengan 3 pilihan kecepatan: *Lambat*, *Normal*, dan *Cepat*.
  * **Eksplorasi Unsur Bangun Ruang**:
    * 🏷️ *Label Nama Sisi*: Badge 3D (Alas, Depan, Belakang, Samping, Tutup Atas) yang terproyeksi dinamis mengikuti perputaran kamera.
    * 📏 *Garis Rusuk Jelas*: Outline kontras penanda engsel lipatan rusuk.
    * ⚪ *Titik Sudut Emas*: Bola koordinat persinggungan titik sudut bangun ruang.
  * **Preset Sudut Pandang Kamera**: Pilihan cepat pandangan **3D Isometrik**, **Atas (2D Tegak Lurus)**, **Depan**, dan **Samping**.
  * **Dua Opsi Akses**:
    * Terintegrasi langsung di Tab **Laboratorium Jaring-Jaring** pada `index.html`.
    * Versi mandiri (*standalone zero-dependency*) di `shape_builder_3d.html` dengan tombol layar penuh (*fullscreen*) ramah Smart TV / Proyektor Kelas.
* **Pola Diagram 2D & Variasi**: Tetap mempertahankan generator 11 pola variasi jaring-jaring 2D kubus (1-4-1, 2-3-1, 2-2-2, 3-3-0) dengan kode warna alas dan tutup.

### 3. 🧮 Kalkulator & Simulasi Dimensi Cerdas
* Slider interaktif untuk mengubah panjang, lebar, tinggi, dan jari-jari.
* Menghitung **Volume** dan **Luas Permukaan** secara otomatis dengan langkah-langkah rumus bertahap.
* Komparasi analogi konkret yang mudah dibayangkan anak SD (misal: *Volume 1.000 cm³ setara dengan 1 liter susu kotak!*).

### 4. 🏆 Kuis Juara Matematika
* 10 soal tantangan pilihan ganda interaktif bergambar.
* Efek suara ceria (*synthesized sound*) tanpa perlu unduh file audio eksternal.
* Ledakan konfeti (*canvas-confetti*) saat menjawab benar dan meraih skor tinggi.
* Piagam bintang juara (1 - 3 Bintang Emas).

### 5. 📱💻 Dukungan Penuh Mobile & PC (Responsif)
* **Smartphone & Tablet**: Kontrol sentuh (*1-finger touch rotate*, *2-finger pinch zoom*), bilah menu geser (*swipeable*), tata letak otomatis vertikal, dan canvas dinamis ramah layar kecil.
* **PC & Laptop**: Dukungan tampilan layar lebar, navigasi mouse drag & scroll, kartu informasi berdampingan (*split-view*).

### 6. 🔄🌌 Pengubah Dimensi Bentuk Bangun Ruang (3D, 4D, 5D Switcher)
Bentuk bangun ruang kini dapat diganti-ganti secara langsung melalui tombol dimensi di atas kanvas:
* **🧊 Mode 3D (Bangun Ruang SD)**: 7 bangun ruang fisik (Kubus, Balok, Tabung, Kerucut, Bola, Prisma, Limas) dengan 3 sumbu ($X, Y, Z$) lengkap dengan 28 contoh benda nyata di sekitar kita.
* **⏱️ Mode 4D (Tesseract / 4-Cube)**: Proyeksi kubus dalam 4 dimensi ruang ($X, Y, Z, W$) dengan 16 titik sudut ($2^4$), 32 rusuk, dan 8 kubus pembatas yang berputar membalik secara dinamis seiring waktu!
* **🌌 Mode 5D (Penteract / 5-Cube)**: Proyeksi kubus dalam 5 dimensi ruang ($X, Y, Z, W, V$) dengan 32 titik sudut koordinat ($2^5$), 80 rusuk hiper-ruang, dan 10 tesseract sel pembatas yang berputar kosmik dalam proyeksi multi-sumbu!

### 7. 📸 Detektor Kamera AI Bangun Ruang (Deep Learning & Computer Vision)
* Menggunakan kamera perangkat secara langsung untuk mendeteksi benda konkret (kotak sepatu, dadu, kaleng, bola, cone, dll).
* **Pemotongan Presisi (ROI Cropping):** Kamera memotong tepat pada kotak bidik (*scanner frame*) sehingga latar belakang ruangan tidak mengganggu akurasi AI.
* **Klasifikasi Cerdas MobileNet (Top-10):** Menganalisis 10 prediksi probabilitas terbaik dari ribuan kelas objek.
* **Analyzer Geometri Ilmiah (Fallback CV):** Menghitung rasio aspek ($W/H$), kontras 4 sudut (uji bola), dan rasio tirus (*taper ratio*) untuk kerucut/limas.
* **Integrasi 3D 1-Klik:** Dari hasil pindai, siswa dapat langsung mengklik tombol *"Lihat Model 3D Benda Ini"* untuk membuka model interaktif Three.js.

### 8. 📱 Barcode / QR Code Presentasi & Uji Coba Peserta (Live Vercel)
* Tersedia kartu Barcode/QR Code di Beranda yang mengarah langsung ke `https://nurul-soneta.vercel.app/`.
* Peserta presentasi cukup memindai menggunakan kamera HP/Google Lens untuk ikut menguji aplikasi secara langsung.
* **Pilihan Halaman Tujuan:** Presenter dapat memilih apakah kode QR membuka Beranda, langsung ke Detektor Kamera AI (`#tab-kamera`), Kuis Juara (`#tab-kuis`), atau Eksplorasi 3D (`#tab-eksplorasi`).
* **Mode Proyektor Layar Penuh:** Membuka tampilan kode QR berukuran besar di proyektor kelas agar mudah dipindai oleh audiens dari jarak jauh.
* **Fitur Salin Link & Unduh Gambar:** Untuk memudahkan pembagian tautan ke grup kelas atau materi slide presentasi.

---

## 🚀 Cara Membuka & Menggunakan

1. **Buka Langsung di Browser:**
   * Cukup klik ganda (double-click) file `index.html` pada komputer/laptop Anda.
   * Halaman akan langsung terbuka di browser (Google Chrome, Microsoft Edge, Mozilla Firefox, dll).

2. **Atau Menggunakan Local Server (Opsional):**
   ```bash
   # Menggunakan Node.js
   npx serve .
   # Atau menggunakan Python
   python -m http.server 8000
   ```
   Lalu buka browser di `http://localhost:8000`.

---

## 📂 Struktur File

```
c:\Pribadi\Tugas\
├── index.html            # Aplikasi web utama lengkap dengan navigasi tab terpadu
├── shape_builder_3d.html # Modul mandiri 3D Shape Builder (siap jalan, ramah Smart TV & Whiteboard)
├── styles.css            # Gaya visual ceria, responsif, tipografi Fredoka & Quicksand
├── script.js             # Mesin 3D Three.js, animasi lipat jaring-jaring, Web Audio, kuis, AI scanner
└── README.md             # Panduan dokumentasi proyek dan capaian pembelajaran
```

---

*Dibuat khusus untuk mendukung pembelajaran matematika SD yang interaktif, visual, dan menyenangkan!* 🎓✨
