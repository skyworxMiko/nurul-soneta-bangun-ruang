// ========================================================
// UNIFIED MULTI-DIMENSIONAL (3D / 4D / 5D) ENGINE
// ========================================================

// 1. DIMENSIONAL DATA DICTIONARY FOR ALL SHAPES
function getShapeDimensionData(key, dim) {
  const base = SHAPES_DATA[key];
  if (!base) return null;

  // DIMENSION 3D (Standard SD)
  if (dim === 3) {
    return {
      title: `Bangun Ruang 3D: <strong>${base.name}</strong> ${base.emoji}`,
      dimBadge: '3D',
      sisi: base.sisi,
      rusuk: base.rusuk,
      sudut: base.sudut,
      descSisi: base.descSisi,
      descRusuk: base.descRusuk,
      descSudut: base.descSudut,
      description: base.description,
      formulaVol: base.formulaVol,
      formulaArea: base.formulaArea,
      mascotTip: base.mascotTip,
      realWorld: base.realWorld
    };
  }

  // DIMENSION 4D (Ruang-Waktu / 4 Sumbu: X, Y, Z, W)
  if (dim === 4) {
    switch (key) {
      case 'kubus':
        return {
          title: 'Dimensi 4D: <strong>Tesseract (Kubus 4D)</strong> 🎲⏱️',
          dimBadge: '4D',
          sisi: '8 Sel Kubus 3D',
          rusuk: '32 Rusuk 4D',
          sudut: '16 Titik Sudut (2⁴)',
          descSisi: '8 Kubus 3D membungkus ruang Tesseract',
          descRusuk: '32 Rusuk 4 Dimensi pada sumbu (X, Y, Z, W)',
          descSudut: '16 Titik sudut koordinat hiper-ruang',
          description: 'Tesseract adalah hiperkubus di dalam 4 dimensi ruang. Memiliki 16 titik sudut, 32 rusuk, 24 bidang persegi, dan dibatasi oleh 8 sel kubus 3D. Kubus bagian dalam dapat berputar membalik menembus sumbu ke-4 tanpa menabrak dinding luarnya!',
          formulaVol: 'V_{4D} = s⁴ (Sisi pangkat 4)',
          formulaArea: 'Luas Batas = 8 &times; s³ (8 Sel Kubus)',
          mascotTip: 'Di dimensi ke-4, ada sumbu W (Waktu/Dimensi ke-4). Kubus dalam berotasi menembus sumbu ke-4 secara ajaib!',
          realWorld: [
            { id: 'dadu_4d', name: 'Dadu Tesseract 4D', icon: '🎲', fact: 'Dadu 4 dimensi dengan angka di kubus luar dan kubus dalamnya yang berotasi!' },
            { id: 'rubik_4d', name: 'Rubik Hiper-Ruang 4D', icon: '🧩', fact: 'Rubik ajaib 4D yang dapat diputar menembus sumbu dimensi keempat!' },
            { id: 'tesseract_wire', name: 'Rangka Tesseract Neon', icon: '💠', fact: 'Model rangka kawat Tesseract dengan 16 titik sudut berpijar neon!' },
            { id: 'kotak_waktu', name: 'Kotak Krono Waktu 4D', icon: '⏱️', fact: 'Kotak ruang-waktu dengan inti portal energi di tengahnya!' }
          ]
        };

      case 'balok':
        return {
          title: 'Dimensi 4D: <strong>Hiper-Balok 4D (Cuboid 4D)</strong> 📦⏱️',
          dimBadge: '4D',
          sisi: '8 Sel Balok 3D',
          rusuk: '32 Rusuk 4D',
          sudut: '16 Titik Sudut',
          descSisi: '8 Sel balok 3D saling berhadapan kongruen',
          descRusuk: '32 Rusuk (p, l, t, w saling ortogonal)',
          descSudut: '16 Sudut siku-siku 4 dimensi',
          description: 'Hiper-Balok 4D adalah bangun balok yang diperluas ke sumbu keempat (W). Bentuk ini memiliki panjang (p), lebar (l), tinggi (t), dan kedalaman waktu (w) yang berbeda ukuran.',
          formulaVol: 'V_{4D} = p &times; l &times; t &times; w',
          formulaArea: 'Hiper-Luas = 2(plt + plw + ptw + ltw)',
          mascotTip: 'Keren sekali! Hiper-Balok 4D mirip seperti lemari atau peti masa depan yang mampu menampung materi antar dimensi!',
          realWorld: [
            { id: 'peti_4d', name: 'Peti Kargo Waktu 4D', icon: '📦', fact: 'Peti kargo berdimensi 4 dengan kunci gravitasi magnetik!' },
            { id: 'memori_4d', name: 'Chip Memori Kuantum 4D', icon: '💾', fact: 'Chip kristal balok 4D penyimpan data melintasi garis waktu!' },
            { id: 'reaktor_balok_4d', name: 'Reaktor Hiper-Balok 4D', icon: '🔋', fact: 'Baterai balok 4D penghasil medan energi plasma berdensitas tinggi!' },
            { id: 'lemari_4d', name: 'Lemari Multi-Dimensi 4D', icon: '🚪', fact: 'Lemari ruang-waktu yang tampak ramping namun luas di dalamnya!' }
          ]
        };

      case 'tabung':
        return {
          title: 'Dimensi 4D: <strong>Hiper-Silinder 4D</strong> 🥫⏱️',
          dimBadge: '4D',
          sisi: '2 Bola Tutup + 1 Selimut 4D',
          rusuk: '0 (Mulus Melingkar)',
          sudut: '0 (Tanpa Titik Sudut)',
          descSisi: 'Dibatasi 2 bola sferik 3D dan selimut silinder hiperbolik',
          descRusuk: 'Tidak memiliki rusuk tajam',
          descSudut: '0 (Permukaan mulus sempurna)',
          description: 'Hiper-Silinder adalah tabung yang diperluas ke dimensi 4. Tutup atas dan bawahnya bukan sekadar lingkaran datar, melainkan bola 3D utuh yang dihubungkan oleh selimut silinder ruang-waktu!',
          formulaVol: 'V_{4D} = 4/3 &times; &pi; &times; r³ &times; t_w',
          formulaArea: 'Luas Batas = (8/3)&pi;r³ + 4&pi;r² &times; t_w',
          mascotTip: 'Bayangkan sebuah tabung kaleng susu yang alas dan tutupnya adalah bola melayang! Itulah Hiper-Silinder 4D!',
          realWorld: [
            { id: 'hyperloop_4d', name: 'Pipa Hyperloop 4D', icon: '🌀', fact: 'Tabung vakum 4 dimensi untuk perjalanan kapsul berkecepatan cahaya!' },
            { id: 'kapsul_silinder_4d', name: 'Kapsul Stasis Silinder 4D', icon: '🧪', fact: 'Tabung stasis pelindung materi dengan cairan neon bercahaya!' },
            { id: 'fusi_4d', name: 'Cincin Reaktor Fusi 4D', icon: '⚡', fact: 'Reaktor fusi berbentuk silinder fluks magnetik 4 sumbu!' },
            { id: 'baterai_4d', name: 'Baterai Ion Kuantum 4D', icon: '🔋', fact: 'Tabung baterai kuantum dengan daya tanpa henti sepanjang waktu!' }
          ]
        };

      case 'kerucut':
        return {
          title: 'Dimensi 4D: <strong>Hiper-Kerucut 4D</strong> 🍦⏱️',
          dimBadge: '4D',
          sisi: '1 Bola Alas + 1 Selimut Mengerucut',
          rusuk: '1 Permukaan Batas',
          sudut: '1 Titik Puncak Krono',
          descSisi: 'Alas berbentuk bola 3D dengan selimut hiperbolik',
          descRusuk: 'Batas lengkung sferik alas',
          descSudut: '1 Titik puncak singularitas dimensi 4',
          description: 'Hiper-Kerucut 4D memiliki alas berbentuk bola 3D penuh, di mana seluruh titik di permukaan bola tersebut mengerucut ke satu titik puncak singularitas di dimensi waktu (W)!',
          formulaVol: 'V_{4D} = 1/4 &times; (4/3 &times; &pi;r³) &times; t_w',
          formulaArea: 'Luas Hiper = Luas Alas Bola + Selimut 4D',
          mascotTip: 'Jika kerucut 3D beralaskan lingkaran datar, maka kerucut 4D beralaskan bola utuh yang meruncing ke masa depan!',
          realWorld: [
            { id: 'corong_4d', name: 'Corong Waktu Kerucut 4D', icon: '⏳', fact: 'Corong hiperbolik yang memusatkan aliran partikel waktu ke puncaknya!' },
            { id: 'pulsar_4d', name: 'Antena Pemancar Pulsar 4D', icon: '📡', fact: 'Antena kerucut frekuensi kosmik penangkap sinyal bintang pulsar!' },
            { id: 'topi_krono_4d', name: 'Topi Energi Krono 4D', icon: '🎉', fact: 'Topi pesta dimensi 4 dengan cincin cahaya berputar mengelilingi puncak!' },
            { id: 'traffic_4d', name: 'Traffic Beacon 4D', icon: '🚧', fact: 'Rambu penanda jalan kosmik berpendar oranye di lintasan antariksa!' }
          ]
        };

      case 'bola':
        return {
          title: 'Dimensi 4D: <strong>Hipersfer (Glome 4D)</strong> 🔮⏱️',
          dimBadge: '4D',
          sisi: '1 Volume 4D',
          rusuk: '0 (Cincin Fluks)',
          sudut: '0 (Mulus 4D)',
          descSisi: 'Lapisan ruang sferik 4D (x² + y² + z² + w² = r²)',
          descRusuk: 'Tidak memiliki rusuk tajam',
          descSudut: 'Tidak memiliki titik sudut tajam',
          description: 'Hipersfer (Glome) adalah bentuk Bola di dalam 4 dimensi ruang. Di layar komputer, bayangan 4D-nya terlihat seperti cincin bola kosmik berlapis yang saling berputar menembus satu sama lain!',
          formulaVol: 'V_{4D} = 1/2 &times; &pi;² &times; r⁴',
          formulaArea: 'Luas Hiper = 2&pi;² &times; r³',
          mascotTip: 'Tahukah kamu? Bola 4D (Glome) memiliki bentuk sempurna di 4 sumbu! Coba lihat cincin-cincin sirkular yang berputar saling melingkupi!',
          realWorld: [
            { id: 'kelereng_4d', name: 'Kelereng Glome 4D', icon: '🔮', fact: 'Kelereng kaca 4D dengan cincin cahaya berputar menembus bagian dalamnya!' },
            { id: 'gelembung_4d', name: 'Gelembung Ruang-Waktu', icon: '🌌', fact: 'Gelembung kosmik 4 dimensi dengan cincin gravitasi membungkusnya!' },
            { id: 'blackhole_4d', name: 'Model Lubang Hitam 4D', icon: '⏱️', fact: 'Bola gravitasi dengan cincin akresi 4D yang melengkungkan cahaya!' },
            { id: 'planet_4d', name: 'Planet Cincin 4D', icon: '🪐', fact: 'Bola planet unik dengan 3 cincin ortogonal saling melingkar antar dimensi!' }
          ]
        };

      case 'prisma':
        return {
          title: 'Dimensi 4D: <strong>Hiper-Prisma Segitiga 4D</strong> ⛺⏱️',
          dimBadge: '4D',
          sisi: '2 Prisma Segitiga + 3 Balok Selubung',
          rusuk: '18 Rusuk 4D',
          sudut: '12 Titik Sudut',
          descSisi: 'Dua prisma 3D sejajar dihubungkan 3 sel balok',
          descRusuk: '18 Rusuk pembentuk kerangka 4 dimensi',
          descSudut: '12 Titik sudut pertemuan rusuk 4D',
          description: 'Hiper-Prisma Segitiga 4D dibentuk dengan menggeser prisma segitiga sepanjang sumbu ke-4 (W). Prisma awal dan akhir dihubungkan oleh 3 sel balok 3D yang membentuk terowongan prismatik!',
          formulaVol: 'V_{4D} = Luas Alas Segitiga &times; t_prisma &times; t_w',
          formulaArea: 'Luas Batas = 2(V_prisma) + 3(V_balok)',
          mascotTip: 'Prisma 4D tampak seperti kristal segitiga yang memproyeksikan bayangannya ke dimensi waktu!',
          realWorld: [
            { id: 'tenda_4d', name: 'Tenda Ruang-Waktu 4D', icon: '⛺', fact: 'Tenda ekspedisi 4D dengan pelindung badai radiasi kosmik!' },
            { id: 'prisma_spektrum_4d', name: 'Prisma Spektrum Waktu 4D', icon: '🌈', fact: 'Prisma kaca pembias cahaya putih menjadi spektrum pelangi antar-dimensi!' },
            { id: 'kristal_segitiga_4d', name: 'Kristal Prisma Krono 4D', icon: '💎', fact: 'Kristal segitiga ungu mengambang dengan cincin rotasi emas!' },
            { id: 'toblerone_4d', name: 'Kemasan Hiper-Prisma 4D', icon: '🍫', fact: 'Kemasan cokelat emas futuristik berbentuk prisma segitiga 4D!' }
          ]
        };

      case 'limas':
        return {
          title: 'Dimensi 4D: <strong>Hiper-Limas 4D (5-Cell Polytope)</strong> 🔺⏱️',
          dimBadge: '4D',
          sisi: '1 Sel Balok Alas + 4 Sel Limas',
          rusuk: '16 Rusuk 4D',
          sudut: '9 Titik Sudut',
          descSisi: 'Alas berbentuk balok 3D menuju 1 puncak waktu',
          descRusuk: '16 Rusuk penghubung sudut alas ke puncak',
          descSudut: '8 Sudut alas + 1 Titik puncak 4D',
          description: 'Hiper-Limas 4D memiliki alas berbentuk bangun balok 3D, di mana seluruh sudutnya ditarik menyatu menuju satu titik puncak tunggal pada sumbu keempat!',
          formulaVol: 'V_{4D} = 1/4 &times; (V_alas_balok) &times; t_w',
          formulaArea: 'Luas Batas = Luas Balok Alas + 4 Sel Limas',
          mascotTip: 'Piramida 4D ini memiliki kekuatan struktur yang luar biasa di dalam ruang-waktu!',
          realWorld: [
            { id: 'piramida_4d', name: 'Piramida Kosmik 4D', icon: '🔺', fact: 'Piramida obsidian megah berpendar garis-garis energi sirkuit neon!' },
            { id: 'menara_krono_4d', name: 'Menara Jam Waktu 4D', icon: '🗼', fact: 'Menara runcing dengan jam digital holografis yang berputar melingkar!' },
            { id: 'sensor_limas_4d', name: 'Detektor Gravitasi 4D', icon: '🛰️', fact: 'Satelit sensor limas pendeteksi gelombang gravitasi ruang angkasa!' },
            { id: 'obelisk_4d', name: 'Monolit Obelisk 4D', icon: '🏛️', fact: 'Tugu monolit ramping dengan kristal melayang di ujung puncaknya!' }
          ]
        };
    }
  }

  // DIMENSION 5D (Hiper-Kosmik / 5 Sumbu: X, Y, Z, W, V)
  if (dim === 5) {
    switch (key) {
      case 'kubus':
        return {
          title: 'Dimensi 5D: <strong>Penteract (Kubus 5D)</strong> 🎲🌌',
          dimBadge: '5D',
          sisi: '10 Sel Tesseract 4D',
          rusuk: '80 Rusuk Kosmik',
          sudut: '32 Titik Sudut (2⁵)',
          descSisi: '10 Tesseract 4D membungkus Penteract',
          descRusuk: '80 Rusuk Hiper-Ruang (X, Y, Z, W, V)',
          descSudut: '32 Titik sudut koordinat (2^5 = 32)',
          description: 'Penteract adalah bangun ruang hiper-kubus dalam 5 dimensi. Memiliki 32 titik sudut, 80 rusuk, 80 bidang bujur sangkar, 40 sel kubus, dan dibatasi oleh 10 tesseract 4D! Model di layar adalah bayangan proyeksi 3D dari ruang dimensi kelima.',
          formulaVol: 'V_{5D} = s⁵ (Sisi pangkat 5!)',
          formulaArea: 'Hiper-Luas = 10 &times; s⁴ (10 Tesseract)',
          mascotTip: 'Maha Dahsyat! Penteract 5D memiliki 32 titik sudut dan 80 rusuk kosmik! Para ilmuwan fisika kuantum mempelajari dimensi ke-5 untuk memahami gravitasi dan multiverse!',
          realWorld: [
            { id: 'pesawat_5d', name: 'Pesawat Antariksa 5D', icon: '🛸', fact: 'Pesawat penjelajah ruang angkasa masa depan yang dirancang melompati batas dimensi ruang dan waktu!' },
            { id: 'portal_5d', name: 'Portal Wormhole 5D', icon: '🌀', fact: 'Portal lubang cacing (wormhole) adalah lorong pintas antar dimensi di alam semesta!' },
            { id: 'kristal_5d', name: 'Kristal Penteract 5D', icon: '🔮', fact: 'Kristal energi misterius yang membiaskan cahaya ke 5 arah dimensi ruang!' },
            { id: 'matriks_5d', name: 'Matriks Kosmik 5D', icon: '🪐', fact: 'Kisi matriks energi semesta 5 dimensi berputar harmonis!' }
          ]
        };

      case 'balok':
        return {
          title: 'Dimensi 5D: <strong>Hiper-Balok Kosmik 5D</strong> 📦🌌',
          dimBadge: '5D',
          sisi: '10 Sel Hiper-Balok 4D',
          rusuk: '80 Rusuk 5D',
          sudut: '32 Titik Sudut',
          descSisi: '10 Hiper-Balok 4D pada 5 sumbu ortogonal',
          descRusuk: '80 Rusuk ruang berarah (p, l, t, w, v)',
          descSudut: '32 Titik simetri ruang 5 dimensi',
          description: 'Hiper-Balok Kosmik 5D memiliki 5 dimensi ukuran: panjang, lebar, tinggi, waktu, dan sumbu kelima (vorteks). Struktur balok ini menjadi dasar teoritis kapal pengangkut materi antar semesta!',
          formulaVol: 'V_{5D} = p &times; l &times; t &times; w &times; v',
          formulaArea: 'Hiper-Luas 5D = 10 Sel Hiper-Balok 4D',
          mascotTip: 'Hiper-Balok 5D adalah gudang penyimpanan multiverse yang dapat menampung miliaran galaksi dalam koordinat kuantum!',
          realWorld: [
            { id: 'ark_5d', name: 'Ark Galaksi 5D', icon: '🛸', fact: 'Kapal induk pengangkut antargalaksi dengan teknologi lompatan hiper-ruang 5D!' },
            { id: 'generator_5d', name: 'Generator Gravitasi 5D', icon: '⚡', fact: 'Mesin pengatur gravitasi 5 sumbu penstabil orbit planet buatan!' },
            { id: 'kapsul_antarbintang_5d', name: 'Kapsul Antarbintang 5D', icon: '🚀', fact: 'Kapsul ekspedisi penjelajah ujung semesta dengan propulsi foton!' },
            { id: 'monolit_5d', name: 'Monolit Semesta 5D', icon: '🏛️', fact: 'Monolit hitam legendaris yang menyimpan peta koordinat multiverse!' }
          ]
        };

      case 'tabung':
        return {
          title: 'Dimensi 5D: <strong>Silinder Kosmik 5D</strong> 🥫🌌',
          dimBadge: '5D',
          sisi: 'Medan Silinder 5 Sumbu',
          rusuk: '0 Rusuk Tajam (5 Cincin Fluks)',
          sudut: '0 (Mulus Simetris)',
          descSisi: 'Selimut melengkung 5 dimensi dengan 2 bola glome 4D',
          descRusuk: '0 (Garis medan fluks kontinu)',
          descSudut: '0 (Bentuk halus berputar)',
          description: 'Silinder Kosmik 5D adalah tabung berputar yang menghubungkan dua dunia dalam ruang lima dimensi. Dikelilingi 5 cincin magnetik yang menjaga stabilitas pusaran singularitas!',
          formulaVol: 'V_{5D} = V_{Glome} &times; t_v = 1/2&pi;²r⁴ &times; t_v',
          formulaArea: 'Hiper-Batas 5D = Selimut 5 Sumbu',
          mascotTip: 'Bayangkan terowongan pipa raksasa tempat bintang-bintang meluncur menembus multiverse!',
          realWorld: [
            { id: 'wormhole_silinder_5d', name: 'Terowongan Cacing 5D', icon: '🌀', fact: 'Pusaran lorong cacing silinder yang melintasi dimensi kelima secara instan!' },
            { id: 'akselerator_5d', name: 'Akselerator Partikel 5D', icon: '⚙️', fact: 'Cincin pemercepat partikel subatomik hingga melampaui kecepatan waktu!' },
            { id: 'reaktor_kosmik_5d', name: 'Reaktor Plasma Kosmik 5D', icon: '🧪', fact: 'Tabung reaktor penyerap energi bintang kuasar di luar angkasa!' },
            { id: 'suar_galaksi_5d', name: 'Mercusuar Galaksi 5D', icon: '🗼', fact: 'Menara suar pemandu navigasi armada bintang antar galaksi!' }
          ]
        };

      case 'kerucut':
        return {
          title: 'Dimensi 5D: <strong>Hiper-Kerucut Kosmik 5D</strong> 🍦🌌',
          dimBadge: '5D',
          sisi: '1 Alas 4D + Selimut 5 Sumbu',
          rusuk: '0 Rusuk',
          sudut: '1 Puncak Singularity 5D',
          descSisi: 'Alas berbentuk glome 4D menuju 1 titik kosmik',
          descRusuk: '0 (Batas kontinu)',
          descSudut: '1 Titik fokus kuantum gravitasi',
          description: 'Hiper-Kerucut Kosmik 5D berfungsi seperti corong gravitasi kosmik (gravitational funnel) yang mengalirkan energi kosmik dari 5 sumbu dimensi menuju satu titik fokus super padat!',
          formulaVol: 'V_{5D} = 1/5 &times; (V_{Alas_4D}) &times; t_v',
          formulaArea: 'Luas Batas 5D',
          mascotTip: 'Corong kerucut 5D ini mampu membelokkan cahaya dan ruang di sekitarnya membentuk cincin-cincin pelangi kosmik!',
          realWorld: [
            { id: 'corong_multiverse_5d', name: 'Corong Multiverse 5D', icon: '📡', fact: 'Teleskop corong canggih penangkap citra alam semesta paralel!' },
            { id: 'pulsar_vortex_5d', name: 'Pusaran Gravitasi 5D', icon: '🌌', fact: 'Pusaran kerucut kuantum yang mengisap dan memancarkan radiasi kosmik!' },
            { id: 'menara_bintang_5d', name: 'Menara Suar Bintang 5D', icon: '🗼', fact: 'Menara pemancar sinyal kuantum dengan kristal kerucut di puncaknya!' },
            { id: 'lensa_kosmik_5d', name: 'Lensa Fokus Kosmik 5D', icon: '⭐', fact: 'Lensa kristal kerucut pemusat berkas foton laser berenergi raksasa!' }
          ]
        };

      case 'bola':
        return {
          title: 'Dimensi 5D: <strong>Hipersfer Kosmik 5D (4-Sphere)</strong> 🌌🔮',
          dimBadge: '5D',
          sisi: '1 Hiper-Volume 5D',
          rusuk: '0 (5 Medan Orbit)',
          sudut: '0 (Simetri 5D)',
          descSisi: 'Ruang sferik 5D (x² + y² + z² + w² + v² = r²)',
          descRusuk: '0 (Mulus tanpa rusuk)',
          descSudut: '0 (Simetri sempurna di 5 sumbu)',
          description: 'Bola 5 Dimensi adalah bola dalam 5 koordinat ruang (x, y, z, w, v). Memiliki simetri sempurna di semua 5 sumbu dengan cincin medan gravitasi kosmik multi-aksial!',
          formulaVol: 'V_{5D} = 8/15 &times; &pi;² &times; r⁵',
          formulaArea: 'Hiper-Batas = 8/3 &times; &pi;² &times; r⁴',
          mascotTip: 'Dahsyat sekali! Bola 5D dikelilingi oleh 5 cincin gravitasi kosmik yang berputar di 5 sumbu dimensi ruang!',
          realWorld: [
            { id: 'multiverse_5d', name: 'Multiverse Bola 5D', icon: '🪐', fact: 'Bola semesta paralel dengan 5 cincin berputar di 5 sumbu dimensi kosmik!' },
            { id: 'vortex_5d', name: 'Pusaran Gravitasi 5D', icon: '🌀', fact: 'Bola energi 5 dimensi dengan pusaran gravitasi kuantum!' },
            { id: 'atom_5d', name: 'Atom Kuantum 5D', icon: '⚛️', fact: 'Bola inti atom dengan 5 lintasan orbit elektron berdimensi tinggi!' },
            { id: 'kristal_bola_5d', name: 'Bola Kristal Kosmik 5D', icon: '🔮', fact: 'Bola kristal bercahaya multi-spektrum dengan 5 cincin energi!' }
          ]
        };

      case 'prisma':
        return {
          title: 'Dimensi 5D: <strong>Hiper-Prisma Kosmik 5D</strong> ⛺🌌',
          dimBadge: '5D',
          sisi: 'Multi-Prisma 5 Sumbu',
          rusuk: '30 Rusuk Koordinat 5D',
          sudut: '20 Titik Sudut',
          descSisi: 'Jaringan prisma segitiga pada 5 arah dimensi',
          descRusuk: '30 Rusuk pembagi kisi energi kosmik',
          descSudut: '20 Titik sudut simetri kristal',
          description: 'Hiper-Prisma Kosmik 5D memperluas sifat pembiasan prisma ke dalam 5 koordinat ruang. Struktur ini memecah energi partikel menjadi 5 spektrum kosmik yang indah!',
          formulaVol: 'V_{5D} = V_{Prisma_4D} &times; t_v',
          formulaArea: 'Hiper-Luas 5D',
          mascotTip: 'Prisma 5D ini tampak memancarkan aura cahaya aurora warna-warni yang berdenyut selaras di 5 sumbu!',
          realWorld: [
            { id: 'prisma_multiverse_5d', name: 'Prisma Pembias 5D', icon: '🌈', fact: 'Prisma kosmik pembias energi partikel menjadi aurora 5 warna!' },
            { id: 'kubah_kosmik_5d', name: 'Kubah Tenda Kosmik 5D', icon: '⛺', fact: 'Pangkalan kubah luar angkasa modular penjelajah peradaban tinggi!' },
            { id: 'kristal_energi_5d', name: 'Kristal Energi 5 Sumbu', icon: '💎', fact: 'Kristal heksagonal bercahaya dengan 5 partikel bintang melayang!' },
            { id: 'relik_prisma_5d', name: 'Relik Ruang Kosmik 5D', icon: '✨', fact: 'Artefak kuno alien berbentuk prisma dengan inti energi berputar!' }
          ]
        };

      case 'limas':
        return {
          title: 'Dimensi 5D: <strong>Hiper-Limas Kosmik 5D</strong> 🔺🌌',
          dimBadge: '5D',
          sisi: 'Struktur Kompleks 5-Polytope',
          rusuk: '25 Rusuk Koordinat 5D',
          sudut: '15 Titik Sudut',
          descSisi: 'Struktur limas bertingkat berdimensi lima',
          descRusuk: '25 Rusuk kisi fluks kosmik',
          descSudut: '15 Titik temu koordinat ruang 5D',
          description: 'Hiper-Limas Kosmik 5D adalah perwujudan piramida tertinggi di alam semesta. Memiliki simetri 5 sumbu yang mengarahkan gelombang gravitasi ke puncak piramida!',
          formulaVol: 'V_{5D} = 1/5 &times; (V_{Alas_4D}) &times; t_v',
          formulaArea: 'Hiper-Batas 5D',
          mascotTip: 'Piramida 5D dikelilingi oleh orbit-orbit satelit dan cincin cincin kosmik yang berpijar megah!',
          realWorld: [
            { id: 'piramida_multiverse_5d', name: 'Piramida Multiverse 5D', icon: '🔺', fact: 'Piramida emas kosmik agung dengan 5 cincin orbit cincin bercahaya!' },
            { id: 'pilar_energi_5d', name: 'Pilar Energi Kosmik 5D', icon: '⚡', fact: 'Pilar piramida raksasa pemancar gelombang energi antar tata surya!' },
            { id: 'stasiun_piramid_5d', name: 'Stasiun Orbit 5D', icon: '🌌', fact: 'Stasiun luar angkasa berbentuk piramida dengan dermaga pesawat antariksa!' },
            { id: 'monolit_limas_5d', name: 'Kuil Hiper-Ruang 5D', icon: '🏛️', fact: 'Monolit kuil peradaban kosmik dengan batu puncak yang melayang bebas!' }
          ]
        };
    }
  }

  return null;
}

function buildDimensionModel(key, dim) {
  const group = new THREE.Group();

  // BOLA 4D & 5D
  if (key === 'bola') {
    if (dim === 4) {
      // Glome 4D (Dual spheres + 3 orthogonal rotating rings)
      const outerSphere = new THREE.Mesh(
        new THREE.SphereGeometry(1.6, 32, 32),
        new THREE.MeshStandardMaterial({
          color: 0x06B6D4,
          roughness: 0.1,
          metalness: 0.2,
          transparent: true,
          opacity: 0.45,
          wireframe: wireframeMode
        })
      );
      const innerSphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.95, 24, 24),
        new THREE.MeshStandardMaterial({
          color: 0xEC4899,
          roughness: 0.2,
          metalness: 0.2,
          transparent: true,
          opacity: 0.65,
          wireframe: wireframeMode
        })
      );
      group.add(outerSphere, innerSphere);

      // 3 Orthogonal Torus Rings
      const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.65, 0.05, 16, 48), new THREE.MeshBasicMaterial({ color: 0xF59E0B }));
      const ring2 = new THREE.Mesh(new THREE.TorusGeometry(1.65, 0.05, 16, 48), new THREE.MeshBasicMaterial({ color: 0x10B981 }));
      ring2.rotation.x = Math.PI / 2;
      const ring3 = new THREE.Mesh(new THREE.TorusGeometry(1.65, 0.05, 16, 48), new THREE.MeshBasicMaterial({ color: 0x8B5CF6 }));
      ring3.rotation.y = Math.PI / 2;
      group.add(ring1, ring2, ring3);

      const core = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), new THREE.MeshBasicMaterial({ color: 0xFACC15 }));
      group.add(core);
      return group;

    } else if (dim === 5) {
      // 5D 4-Sphere (Triple glowing shells + 5 dimensional rings)
      const s1 = new THREE.Mesh(new THREE.SphereGeometry(1.65, 32, 32), new THREE.MeshStandardMaterial({ color: 0x8B5CF6, transparent: true, opacity: 0.38, wireframe: wireframeMode }));
      const s2 = new THREE.Mesh(new THREE.SphereGeometry(1.15, 24, 24), new THREE.MeshStandardMaterial({ color: 0xEC4899, transparent: true, opacity: 0.55, wireframe: wireframeMode }));
      const s3 = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), new THREE.MeshStandardMaterial({ color: 0x06B6D4, transparent: true, opacity: 0.72, wireframe: wireframeMode }));
      group.add(s1, s2, s3);

      const ringColors = [0xF59E0B, 0x10B981, 0x06B6D4, 0xEC4899, 0xFBBF24];
      for (let i = 0; i < 5; i++) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(1.72, 0.04, 12, 48), new THREE.MeshBasicMaterial({ color: ringColors[i] }));
        ring.rotation.x = (i * Math.PI) / 5;
        ring.rotation.y = (i * Math.PI) / 2.5;
        group.add(ring);
      }
      return group;
    }
  }

  // KUBUS 4D & 5D (Tesseract & Penteract)
  if (key === 'kubus') {
    if (dim === 4 || dim === 5) {
      return createHypercubeModel(dim);
    }
  }

  // BALOK 4D & 5D
  if (key === 'balok') {
    if (dim === 4) {
      // Inner cuboid + Outer expanded cuboid + Flux ring
      const inGeo = new THREE.BoxGeometry(2.4, 1.5, 1.2);
      const inMesh = new THREE.Mesh(inGeo, new THREE.MeshStandardMaterial({ color: 0x06B6D4, transparent: true, opacity: 0.65, wireframe: wireframeMode }));
      const outGeo = new THREE.BoxGeometry(3.2, 2.1, 1.8);
      const outMesh = new THREE.Mesh(outGeo, new THREE.MeshBasicMaterial({ color: 0x8B5CF6, wireframe: true }));
      const ring = new THREE.Mesh(new THREE.TorusGeometry(2.3, 0.05, 16, 40), new THREE.MeshBasicMaterial({ color: 0xF59E0B }));
      ring.rotation.x = Math.PI / 3;
      group.add(inMesh, outMesh, ring);
      return group;
    } else {
      // 5D Balok: Triple nested cuboid frames + 5 cosmic rings
      const b1 = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.3, 1.0), new THREE.MeshStandardMaterial({ color: 0x8B5CF6, transparent: true, opacity: 0.7, wireframe: wireframeMode }));
      const b2 = new THREE.Mesh(new THREE.BoxGeometry(2.8, 1.8, 1.4), new THREE.MeshBasicMaterial({ color: 0xEC4899, wireframe: true }));
      const b3 = new THREE.Mesh(new THREE.BoxGeometry(3.5, 2.3, 1.9), new THREE.MeshBasicMaterial({ color: 0x06B6D4, wireframe: true }));
      group.add(b1, b2, b3);

      const cols = [0xF59E0B, 0x10B981, 0x06B6D4, 0xEC4899, 0xFBBF24];
      for (let i = 0; i < 5; i++) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(2.4 + i * 0.1, 0.035, 12, 40), new THREE.MeshBasicMaterial({ color: cols[i] }));
        ring.rotation.x = (i * Math.PI) / 4;
        ring.rotation.z = (i * Math.PI) / 3;
        group.add(ring);
      }
      return group;
    }
  }

  // TABUNG 4D & 5D
  if (key === 'tabung') {
    if (dim === 4) {
      // Inner solid cylinder + Outer translucent cylinder + Equatorial torus
      const c1 = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 2.4, 32), new THREE.MeshStandardMaterial({ color: 0x10B981, transparent: true, opacity: 0.65, wireframe: wireframeMode }));
      const c2 = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 3.0, 24), new THREE.MeshBasicMaterial({ color: 0x06B6D4, wireframe: true }));
      const t1 = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.05, 16, 40), new THREE.MeshBasicMaterial({ color: 0xF59E0B }));
      t1.rotation.x = Math.PI / 2;
      group.add(c1, c2, t1);
      return group;
    } else {
      // 5D Tabung: Concentric cylinders + 5 orbital rings
      const c1 = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 2.2, 32), new THREE.MeshStandardMaterial({ color: 0x8B5CF6, transparent: true, opacity: 0.65, wireframe: wireframeMode }));
      const c2 = new THREE.Mesh(new THREE.CylinderGeometry(1.7, 1.7, 2.9, 24), new THREE.MeshBasicMaterial({ color: 0xEC4899, wireframe: true }));
      group.add(c1, c2);

      const cols = [0xF59E0B, 0x10B981, 0x06B6D4, 0xEC4899, 0xFBBF24];
      for (let i = 0; i < 5; i++) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(2.1 + i * 0.1, 0.035, 12, 40), new THREE.MeshBasicMaterial({ color: cols[i] }));
        ring.rotation.x = (i * Math.PI) / 5;
        ring.rotation.y = (i * Math.PI) / 2.5;
        group.add(ring);
      }
      return group;
    }
  }

  // KERUCUT 4D & 5D
  if (key === 'kerucut') {
    if (dim === 4) {
      // Double inverted cones + apex glowing sphere + base ring
      const k1 = new THREE.Mesh(new THREE.ConeGeometry(1.4, 2.6, 32), new THREE.MeshStandardMaterial({ color: 0xF59E0B, transparent: true, opacity: 0.65, wireframe: wireframeMode }));
      const k2 = new THREE.Mesh(new THREE.ConeGeometry(1.8, 3.2, 24), new THREE.MeshBasicMaterial({ color: 0xEC4899, wireframe: true }));
      const apexSphere = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16), new THREE.MeshBasicMaterial({ color: 0xFACC15 }));
      apexSphere.position.y = 1.3;
      const bRing = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.05, 16, 36), new THREE.MeshBasicMaterial({ color: 0x06B6D4 }));
      bRing.rotation.x = Math.PI / 2;
      bRing.position.y = -1.3;
      group.add(k1, k2, apexSphere, bRing);
      return group;
    } else {
      // 5D Kerucut: Nested cones + 5 cosmic orbital rings
      const k1 = new THREE.Mesh(new THREE.ConeGeometry(1.3, 2.4, 32), new THREE.MeshStandardMaterial({ color: 0x8B5CF6, transparent: true, opacity: 0.7, wireframe: wireframeMode }));
      const k2 = new THREE.Mesh(new THREE.ConeGeometry(1.9, 3.1, 24), new THREE.MeshBasicMaterial({ color: 0x10B981, wireframe: true }));
      group.add(k1, k2);

      const cols = [0xF59E0B, 0x10B981, 0x06B6D4, 0xEC4899, 0xFBBF24];
      for (let i = 0; i < 5; i++) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(2.1 + i * 0.1, 0.035, 12, 40), new THREE.MeshBasicMaterial({ color: cols[i] }));
        ring.rotation.x = (i * Math.PI) / 5;
        ring.rotation.z = (i * Math.PI) / 2.5;
        group.add(ring);
      }
      return group;
    }
  }

  // PRISMA 4D & 5D
  if (key === 'prisma') {
    const { geo } = createGeometryForShape('prisma');
    if (dim === 4) {
      const p1 = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x3B82F6, transparent: true, opacity: 0.65, wireframe: wireframeMode }));
      const p2 = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0xEC4899, wireframe: true }));
      p2.scale.set(1.4, 1.4, 1.4);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.05, 16, 36), new THREE.MeshBasicMaterial({ color: 0xF59E0B }));
      ring.rotation.x = Math.PI / 3;
      group.add(p1, p2, ring);
      return group;
    } else {
      const p1 = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x8B5CF6, transparent: true, opacity: 0.65, wireframe: wireframeMode }));
      const p2 = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0x10B981, wireframe: true }));
      p2.scale.set(1.45, 1.45, 1.45);
      group.add(p1, p2);

      const cols = [0xF59E0B, 0x10B981, 0x06B6D4, 0xEC4899, 0xFBBF24];
      for (let i = 0; i < 5; i++) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(2.2 + i * 0.1, 0.035, 12, 40), new THREE.MeshBasicMaterial({ color: cols[i] }));
        ring.rotation.x = (i * Math.PI) / 5;
        ring.rotation.y = (i * Math.PI) / 2.5;
        group.add(ring);
      }
      return group;
    }
  }

  // LIMAS 4D & 5D
  if (key === 'limas') {
    const { geo } = createGeometryForShape('limas');
    if (dim === 4) {
      const l1 = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0xEF4444, transparent: true, opacity: 0.65, wireframe: wireframeMode }));
      const l2 = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0x06B6D4, wireframe: true }));
      l2.scale.set(1.4, 1.4, 1.4);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.05, 16, 36), new THREE.MeshBasicMaterial({ color: 0xF59E0B }));
      ring.rotation.x = Math.PI / 3;
      group.add(l1, l2, ring);
      return group;
    } else {
      const l1 = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x8B5CF6, transparent: true, opacity: 0.65, wireframe: wireframeMode }));
      const l2 = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0xEC4899, wireframe: true }));
      l2.scale.set(1.5, 1.5, 1.5);
      group.add(l1, l2);

      const cols = [0xF59E0B, 0x10B981, 0x06B6D4, 0xEC4899, 0xFBBF24];
      for (let i = 0; i < 5; i++) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(2.2 + i * 0.1, 0.035, 12, 40), new THREE.MeshBasicMaterial({ color: cols[i] }));
        ring.rotation.x = (i * Math.PI) / 5;
        ring.rotation.z = (i * Math.PI) / 2.5;
        group.add(ring);
      }
      return group;
    }
  }

  return group;
}

// 5D Cosmic Particle Field Generator
function create5DParticleField() {
  const count = 350;
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const palette = [
    [0.51, 0.55, 0.98], // Indigo
    [0.02, 0.71, 0.83], // Cyan
    [0.95, 0.62, 0.07], // Amber
    [0.93, 0.28, 0.60]  // Pink
  ];

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 18;

    const col = palette[Math.floor(Math.random() * palette.length)];
    colors[i * 3] = col[0];
    colors[i * 3 + 1] = col[1];
    colors[i * 3 + 2] = col[2];
  }

  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.12,
    vertexColors: true,
    transparent: true,
    opacity: 0.85
  });

  particles5D = new THREE.Points(geo, mat);
  scene.add(particles5D);
}

// 4D Net-to-3D Folding Engine
function createFoldingCubeGroup() {
  const group = new THREE.Group();
  foldingHinges = [];
  const s = 2.4;
  const half = s / 2;

  // Base (Alas) - Blue
  const baseMat = new THREE.MeshStandardMaterial({ color: 0x3B82F6, roughness: 0.3, side: THREE.DoubleSide });
  const baseMesh = new THREE.Mesh(new THREE.PlaneGeometry(s, s), baseMat);
  baseMesh.rotation.x = -Math.PI / 2;
  baseMesh.position.y = -half;
  baseMesh.receiveShadow = true;
  group.add(baseMesh);

  const wallMat = new THREE.MeshStandardMaterial({ color: 0x10B981, roughness: 0.3, side: THREE.DoubleSide });
  const topMat = new THREE.MeshStandardMaterial({ color: 0xEC4899, roughness: 0.3, side: THREE.DoubleSide });

  // 1. South Face (Depan) - Pivot at +Z edge
  const southHinge = new THREE.Group();
  southHinge.position.set(0, -half, half);
  const southMesh = new THREE.Mesh(new THREE.PlaneGeometry(s, s), wallMat);
  southMesh.position.set(0, 0, half);
  southMesh.rotation.x = -Math.PI / 2;
  southHinge.add(southMesh);
  group.add(southHinge);

  // 2. East Face (Kanan) - Pivot at +X edge
  const eastHinge = new THREE.Group();
  eastHinge.position.set(half, -half, 0);
  const eastMesh = new THREE.Mesh(new THREE.PlaneGeometry(s, s), wallMat);
  eastMesh.position.set(half, 0, 0);
  eastMesh.rotation.x = -Math.PI / 2;
  eastHinge.add(eastMesh);
  group.add(eastHinge);

  // 3. West Face (Kiri) - Pivot at -X edge
  const westHinge = new THREE.Group();
  westHinge.position.set(-half, -half, 0);
  const westMesh = new THREE.Mesh(new THREE.PlaneGeometry(s, s), wallMat);
  westMesh.position.set(-half, 0, 0);
  westMesh.rotation.x = -Math.PI / 2;
  westHinge.add(westMesh);
  group.add(westHinge);

  // 4. North Face (Belakang) - Pivot at -Z edge
  const northHinge = new THREE.Group();
  northHinge.position.set(0, -half, -half);
  const northMesh = new THREE.Mesh(new THREE.PlaneGeometry(s, s), wallMat);
  northMesh.position.set(0, 0, -half);
  northMesh.rotation.x = -Math.PI / 2;
  northHinge.add(northMesh);

  // 5. Top Face (Tutup) - Connected to edge of North face
  const topHinge = new THREE.Group();
  topHinge.position.set(0, 0, -s);
  const topMesh = new THREE.Mesh(new THREE.PlaneGeometry(s, s), topMat);
  topMesh.position.set(0, 0, -half);
  topMesh.rotation.x = -Math.PI / 2;
  topHinge.add(topMesh);
  northHinge.add(topHinge);

  group.add(northHinge);

  foldingHinges = [
    { group: southHinge, axis: 'x', factor: 1 },
    { group: eastHinge, axis: 'z', factor: -1 },
    { group: westHinge, axis: 'z', factor: 1 },
    { group: northHinge, axis: 'x', factor: -1 },
    { group: topHinge, axis: 'x', factor: -1 }
  ];

  return group;
}

function applyFoldingProgress(p) {
  const angle = p * (Math.PI / 2);
  foldingHinges.forEach(h => {
    if (h.axis === 'x') {
      h.group.rotation.x = angle * h.factor;
    } else if (h.axis === 'z') {
      h.group.rotation.z = angle * h.factor;
    }
  });
}


// --- HAPTIC FEEDBACK (DIMENSI KE-5 VIBRATION SENSORY) ---
function triggerHaptic(pattern = 25) {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    try { navigator.vibrate(pattern); } catch (e) {}
  }
}
/* ========================================================
   PETUALANGAN BANGUN RUANG 3D - JAVASCRIPT ENGINE
   Three.js 3D Visualizer, Web Audio Synthesizer,
   Jaring-Jaring SVG Generator, Smart Calculator, & Quiz
   ======================================================== */

// --- DATA BANGUN RUANG ---
const SHAPES_DATA = {
  kubus: {
    name: "Kubus",
    emoji: "🎲",
    sisi: 6,
    rusuk: 12,
    sudut: 8,
    descSisi: "6 persegi kongruen (sama besar)",
    descRusuk: "12 rusuk sama panjang",
    descSudut: "8 titik sudut siku-siku (90°)",
    description: "Kubus adalah bangun ruang istimewa yang semua sisinya berbentuk bujur sangkar (persegi) yang sama persis ukurannya.",
    formulaVol: "V = s &times; s &times; s = s&sup3;",
    formulaArea: "L = 6 &times; s&sup2;",
    realWorld: [
      { id: "dadu", name: "Dadu Permainan", icon: "🎲", fact: "Wah keren! Dadu memiliki 6 sisi persegi yang masing-masing diberi tanda titik angka 1 sampai 6!" },
      { id: "rubik", name: "Rubik Ajaib", icon: "🧩", fact: "Rubik ajaib tersusun dari kubus-kubus kecil beraneka warna dengan 6 bidang sisi berbentuk bujur sangkar!" },
      { id: "kado", name: "Kotak Kado", icon: "🎁", fact: "Kotak kado ini dibungkus pita indah dan memiliki 6 sisi persegi yang sama besar!" },
      { id: "es", name: "Es Batu Kotak", icon: "🧊", fact: "Es batu ini membeku dalam cetakan berbentuk kubus sempurna, dingin dan transparan!" }
    ],
    mascotTip: "Tahukah kamu? Karena semua rusuk kubus sama panjang, mencari volumenya cukup mengalikan panjang rusuk sebanyak tiga kali (s &times; s &times; s)!",
    dimensions: { size: 2.4 }
  },
  balok: {
    name: "Balok",
    emoji: "📦",
    sisi: 6,
    rusuk: 12,
    sudut: 8,
    descSisi: "3 pasang sisi persegi panjang",
    descRusuk: "12 rusuk (4p, 4l, 4t)",
    descSudut: "8 titik sudut siku-siku",
    description: "Balok adalah bangun ruang tiga dimensi yang dibentuk oleh tiga pasang persegi panjang, di mana sisi-sisi yang berhadapan sama besar.",
    formulaVol: "V = p &times; l &times; t",
    formulaArea: "L = 2 &times; (pl + pt + lt)",
    realWorld: [
      { id: "sepatu", name: "Kotak Sepatu", icon: "👟", fact: "Kotak sepatu memiliki ukuran panjang, lebar, dan tinggi yang berbeda, membentuk bangun balok!" },
      { id: "kulkas", name: "Lemari Es", icon: "🚪", fact: "Lemari es di rumah kita berbentuk balok tinggi dengan pintu freezer dan pendingin di depan!" },
      { id: "buku", name: "Buku Tulis", icon: "📚", fact: "Buku pelajaran memiliki ketebalan (tinggi), panjang, dan lebar, sehingga merupakan contoh balok nyata!" },
      { id: "bata", name: "Batu Bata", icon: "🧱", fact: "Batu bata bangunan dibuat berbentuk balok agar mudah disusun rapi dan kokoh saat membuat dinding rumah!" }
    ],
    mascotTip: "Balok mirip dengan kubus, tapi panjang, lebar, dan tingginya bisa berbeda ukuran!",
    dimensions: { p: 3.2, l: 2.0, t: 1.6 }
  },
  tabung: {
    name: "Tabung (Silinder)",
    emoji: "🥫",
    sisi: 3,
    rusuk: 2,
    sudut: 0,
    descSisi: "2 lingkaran (alas & tutup) + 1 selimut",
    descRusuk: "2 rusuk lengkung",
    descSudut: "0 (tidak memiliki titik sudut)",
    description: "Tabung dibatasi oleh dua lingkaran yang sejajar dan sama besar sebagai alas dan tutup, serta sebuah bidang lengkung yang disebut selimut.",
    formulaVol: "V = &pi; &times; r&sup2; &times; t",
    formulaArea: "L = 2&pi;r(r + t)",
    realWorld: [
      { id: "kaleng", name: "Kaleng Susu", icon: "🥫", fact: "Kaleng susu berbentuk tabung dengan alas dan tutup lingkaran berbahan logam, serta label selimut di badannya!" },
      { id: "drum", name: "Drum Musik", icon: "🥁", fact: "Alat musik drum memiliki tabung silinder dengan membran lingkaran di atas dan bawahnya!" },
      { id: "celengan", name: "Celengan Koin", icon: "🪙", fact: "Celengan kaleng berbentuk tabung dengan lubang koin di bagian tutup lingkaran atasnya!" },
      { id: "baterai", name: "Baterai Jam", icon: "🔋", fact: "Baterai silinder memiliki kutub positif menonjol di atas dan kutub negatif datar di alasnya!" }
    ],
    mascotTip: "Tabung tidak punya pojokan (titik sudut) lho! Jika selimut tabung dibuka, bentuknya menjadi persegi panjang yang lebar!",
    dimensions: { r: 1.4, t: 2.6 }
  },
  kerucut: {
    name: "Kerucut",
    emoji: "🍦",
    sisi: 2,
    rusuk: 1,
    sudut: 1,
    descSisi: "1 lingkaran (alas) + 1 selimut lengkung",
    descRusuk: "1 rusuk lengkung di lingkaran alas",
    descSudut: "1 titik puncak (bukan sudut siku-siku)",
    description: "Kerucut adalah bangun ruang dengan alas berbentuk lingkaran dan selimut yang mengerucut runcing ke satu titik puncak.",
    formulaVol: "V = 1/3 &times; &pi; &times; r&sup2; &times; t",
    formulaArea: "L = &pi;r(r + s)",
    realWorld: [
      { id: "topi", name: "Topi Ulang Tahun", icon: "🎉", fact: "Topi pesta ulang tahun berbentuk kerucut meruncing ke atas dengan bola hiasan di puncaknya!" },
      { id: "es_krim", name: "Cone Es Krim", icon: "🍦", fact: "Cone es krim adalah bentuk kerucut renyah yang dibalik dan diisi es krim lezat di atasnya!" },
      { id: "tumpeng", name: "Tumpeng Kuning", icon: "🍚", fact: "Nasi tumpeng dicetak berbentuk kerucut sempurna di atas nampan beralaskan daun pisang!" },
      { id: "traffic_cone", name: "Traffic Cone Jalan", icon: "🚧" , fact: "Traffic cone jalan raya berbentuk kerucut berwarna oranye terang dengan strip pemantul cahaya!" }
    ],
    mascotTip: "Volume kerucut persis sepertiga (1/3) dari volume tabung dengan jari-jari dan tinggi yang sama!",
    dimensions: { r: 1.6, t: 2.8 }
  },
  bola: {
    name: "Bola",
    emoji: "⚽",
    sisi: 1,
    rusuk: 0,
    sudut: 0,
    descSisi: "1 sisi lengkung menyeluruh",
    descRusuk: "0 (tidak ada rusuk)",
    descSudut: "0 (tidak ada titik sudut)",
    description: "Bola adalah bangun ruang yang dibatasi oleh satu bidang lengkung sempurna, di mana setiap titik di permukaannya berjarak sama ke pusat bola.",
    formulaVol: "V = 4/3 &times; &pi; &times; r&sup3;",
    formulaArea: "L = 4 &times; &pi; &times; r&sup2;",
    realWorld: [
      { id: "bola_sepak", name: "Bola Sepak", icon: "⚽", fact: "Bola sepak berbentuk bola sempurna dengan pola segi lima hitam dan segi enam putih yang ikonik!" },
      { id: "kelereng", name: "Kelereng Kaca", icon: "🔮", fact: "Kelereng terbuat dari kaca bening padat dengan liukan warna-warni cantik di dalamnya!" },
      { id: "jeruk", name: "Buah Jeruk", icon: "🍊", fact: "Buah jeruk di alam berbentuk bola dengan tangkai dan daun kecil di atasnya!" },
      { id: "globe", name: "Globe Bola Dunia", icon: "🌍", fact: "Globe adalah tiruan bola bumi yang berputar miring pada poros penyangganya!" }
    ],
    mascotTip: "Bola adalah bangun ruang paling mulus! Tidak ada garis lurus maupun sudut tajam di seluruh permukaannya.",
    dimensions: { r: 1.7 }
  },
  prisma: {
    name: "Prisma Segitiga",
    emoji: "⛺",
    sisi: 5,
    rusuk: 9,
    sudut: 6,
    descSisi: "2 segitiga (alas & tutup) + 3 persegi tegak",
    descRusuk: "9 rusuk (3 alas, 3 tutup, 3 tegak)",
    descSudut: "6 titik sudut",
    description: "Prisma segitiga memiliki alas dan atap berbentuk segitiga sama dan sebangun (kongruen), yang dihubungkan oleh sisi tegak persegi panjang.",
    formulaVol: "V = (1/2 &times; a &times; t_alas) &times; t_prisma",
    formulaArea: "L = (2 &times; Luas Alas) + Keliling &times; t",
    realWorld: [
      { id: "tenda", name: "Tenda Berkemah", icon: "⛺", fact: "Tenda pramuka memanfaatkan bentuk prisma segitiga agar air hujan mengalir turun ke samping!" },
      { id: "toblerone", name: "Cokelat Toblerone", icon: "🍫", fact: "Kemasan cokelat Toblerone yang legendaris berbentuk prisma segitiga berwarna emas!" },
      { id: "atap", name: "Atap Rumah Adat", icon: "🏠", fact: "Banyak atap rumah dibangun dengan bentuk prisma segitiga yang kuat dan kokoh!" },
      { id: "kaca_prisma", name: "Kaca Prisma Pelangi", icon: "🌈", fact: "Prisma kaca segitiga dapat menguraikan seberkas cahaya putih menjadi pelangi 7 warna!" }
    ],
    mascotTip: "Ingat prinsip prisma: Bentuk tutupnya selalu sama persis dengan bentuk alasnya!",
    dimensions: { base: 2.4, heightT: 2.0, length: 2.8 }
  },
  limas: {
    name: "Limas Segiempat",
    emoji: "🔺",
    sisi: 5,
    rusuk: 8,
    sudut: 5,
    descSisi: "1 alas persegi + 4 segitiga tegak",
    descRusuk: "8 rusuk (4 alas, 4 rusuk tegak)",
    descSudut: "5 titik sudut (4 di bawah, 1 puncak)",
    description: "Limas segiempat memiliki alas berbentuk persegi atau persegi panjang, dan dinding tegaknya terdiri dari empat bidang segitiga yang bertemu di satu puncak.",
    formulaVol: "V = 1/3 &times; Luas Alas &times; t",
    formulaArea: "L = Luas Alas + Jumlah 4 Segitiga",
    realWorld: [
      { id: "piramida", name: "Piramida Mesir Kuno", icon: "🏛️", fact: "Piramida Giza di Mesir adalah contoh limas segiempat raksasa yang tersusun dari jutaan batu kapur!" },
      { id: "tenda_piramid", name: "Tenda Segiempat", icon: "⛺", fact: "Tenda kanopi berbentuk limas segiempat dengan 4 tiang penyangga di setiap sudut bawahnya!" },
      { id: "gantungan", name: "Gantungan Kunci Piramid", icon: "🗝️", fact: "Gantungan kunci berbentuk limas segiempat kristal dengan ring gantungan di puncaknya!" },
      { id: "menara", name: "Ujung Menara Jam", icon: "🗼", fact: "Ujung atap menara jam sering dirancang berbentuk limas segiempat runcing yang megah!" }
    ],
    mascotTip: "Perbedaan Limas dan Prisma: Limas meruncing ke satu titik puncak, sedangkan prisma punya atap datar!",
    dimensions: { base: 2.4, height: 2.6 }
  }
};

// --- WEB AUDIO SYNTHESIZER ---
class SoundEffects {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPop() {
    triggerHaptic(18);
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.09);
    } catch (e) {
      console.log(e);
    }
  }

  playSuccess() {
    triggerHaptic([40, 50, 60]);
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.value = freq;
        const startTime = this.ctx.currentTime + (idx * 0.08);
        gain.gain.setValueAtTime(0.18, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.36);
      });
    } catch (e) {
      console.log(e);
    }
  }

  playError() {
    triggerHaptic([70, 40, 70]);
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(260, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, this.ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.26);
    } catch (e) {
      console.log(e);
    }
  }

  playShutter() {
    triggerHaptic([30, 20, 45]);
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      // Click 1 (shutter opening mechanical snap)
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(1400, now);
      osc1.frequency.exponentialRampToValueAtTime(380, now + 0.035);
      gain1.gain.setValueAtTime(0.28, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.04);

      // Click 2 (shutter close blade snap 45ms later)
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(850, now + 0.045);
      osc2.frequency.exponentialRampToValueAtTime(260, now + 0.095);
      gain2.gain.setValueAtTime(0.32, now + 0.045);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.095);
      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(now + 0.045);
      osc2.stop(now + 0.10);
    } catch (e) {
      console.log(e);
    }
  }
}

const sfx = new SoundEffects();

// --- THREE.JS 3D ENGINE ---
// --- 5D SENSORY & 4D TIME-FOLDING ENGINE VARIABLES ---
let particles5D = null;
let show5DParticles = true;
let isFolding4D = false;
let foldingProgress = 1.0; // 1 = closed cube, 0 = flat net
let foldingHinges = [];
let foldingSpeed = 0.02;
let foldingDir = -1;

let scene, camera, renderer, controls;
let currentMeshGroup = null;
let currentEdgesLine = null;
let currentVerticesGroup = null;
let activeColor = '#3B82F6';
let autoRotate = true;
let showVertices = false;
let showEdges = true;
let wireframeMode = false;
let currentShapeKey = 'kubus';
let activeDimension = 3; // 3D, 4D, 5D


// ========================================================
// MATHEMATICAL 4D TESSERACT & 5D PENTERACT ENGINE
// ========================================================
const V4D = [];
for (let x = -1; x <= 1; x += 2) {
  for (let y = -1; y <= 1; y += 2) {
    for (let z = -1; z <= 1; z += 2) {
      for (let w = -1; w <= 1; w += 2) {
        V4D.push([x, y, z, w]);
      }
    }
  }
}
const E4D = [];
for (let i = 0; i < 16; i++) {
  for (let j = i + 1; j < 16; j++) {
    let diff = 0;
    for (let k = 0; k < 4; k++) {
      if (V4D[i][k] !== V4D[j][k]) diff++;
    }
    if (diff === 1) E4D.push([i, j]);
  }
}

const V5D = [];
for (let x = -1; x <= 1; x += 2) {
  for (let y = -1; y <= 1; y += 2) {
    for (let z = -1; z <= 1; z += 2) {
      for (let w = -1; w <= 1; w += 2) {
        for (let v = -1; v <= 1; v += 2) {
          V5D.push([x, y, z, w, v]);
        }
      }
    }
  }
}
const E5D = [];
for (let i = 0; i < 32; i++) {
  for (let j = i + 1; j < 32; j++) {
    let diff = 0;
    for (let k = 0; k < 5; k++) {
      if (V5D[i][k] !== V5D[j][k]) diff++;
    }
    if (diff === 1) E5D.push([i, j]);
  }
}

// 4D / 5D Runtime Three.js Objects
let hyperEdgeLines = null;
let hyperVertexSpheres = null;
let hyperInnerMesh = null;
let hyperTimeAngle = 0;

function createHypercubeModel(dim) {
  const group = new THREE.Group();
  
  if (dim === 4) {
    // 4D Tesseract (16 Vertices, 32 Edges)
    // Edges
    const linePositions = new Float32Array(E4D.length * 2 * 3);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x06B6D4, // Neon Cyan
      linewidth: 3,
      transparent: true,
      opacity: 0.9
    });
    hyperEdgeLines = new THREE.LineSegments(lineGeo, lineMat);
    group.add(hyperEdgeLines);

    // Vertices
    hyperVertexSpheres = new THREE.Group();
    const vGeo = new THREE.SphereGeometry(0.1, 16, 16);
    const vMat = new THREE.MeshStandardMaterial({
      color: 0xEC4899, // Hot Pink
      emissive: 0xDB2777,
      emissiveIntensity: 0.7,
      roughness: 0.2
    });
    for (let i = 0; i < 16; i++) {
      const sp = new THREE.Mesh(vGeo, vMat);
      hyperVertexSpheres.add(sp);
    }
    group.add(hyperVertexSpheres);

    // Inner glowing core
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.35, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xF59E0B })
    );
    group.add(core);

  } else if (dim === 5) {
    // 5D Penteract (32 Vertices, 80 Edges)
    // Edges
    const linePositions = new Float32Array(E5D.length * 2 * 3);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xA855F7, // Neon Purple
      linewidth: 3,
      transparent: true,
      opacity: 0.9
    });
    hyperEdgeLines = new THREE.LineSegments(lineGeo, lineMat);
    group.add(hyperEdgeLines);

    // Vertices
    hyperVertexSpheres = new THREE.Group();
    const vGeo = new THREE.SphereGeometry(0.09, 16, 16);
    const vMat = new THREE.MeshStandardMaterial({
      color: 0xF59E0B, // Gold
      emissive: 0xD97706,
      emissiveIntensity: 0.7,
      roughness: 0.2
    });
    for (let i = 0; i < 32; i++) {
      const sp = new THREE.Mesh(vGeo, vMat);
      hyperVertexSpheres.add(sp);
    }
    group.add(hyperVertexSpheres);

    // Core
    const core = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.4, 0),
      new THREE.MeshBasicMaterial({ color: 0x06B6D4 })
    );
    group.add(core);
  }

  return group;
}

function updateHypercubeAnimation(time) {
  if (!hyperEdgeLines) return;

  if (activeDimension === 4) {
    // 4D Rotation in XW plane
    const theta = time * 0.9;
    const cosT = Math.cos(theta);
    const sinT = Math.sin(theta);
    const projected = [];

    for (let i = 0; i < 16; i++) {
      const [x, y, z, w] = V4D[i];
      // 4D rotation in X-W plane
      const rx = x * cosT - w * sinT;
      const rw = x * sinT + w * cosT;
      // Perspective projection 4D -> 3D
      const dist = 2.5;
      const k = 1 / (dist - rw * 0.7);
      const px = rx * k * 3.4;
      const py = y * k * 3.4;
      const pz = z * k * 3.4;
      projected.push(px, py, pz);

      if (hyperVertexSpheres && hyperVertexSpheres.children[i]) {
        hyperVertexSpheres.children[i].position.set(px, py, pz);
      }
    }

    // Update edge lines
    const posAttr = hyperEdgeLines.geometry.attributes.position;
    let ptr = 0;
    for (let i = 0; i < E4D.length; i++) {
      const [i1, i2] = E4D[i];
      posAttr.array[ptr++] = projected[i1 * 3];
      posAttr.array[ptr++] = projected[i1 * 3 + 1];
      posAttr.array[ptr++] = projected[i1 * 3 + 2];
      posAttr.array[ptr++] = projected[i2 * 3];
      posAttr.array[ptr++] = projected[i2 * 3 + 1];
      posAttr.array[ptr++] = projected[i2 * 3 + 2];
    }
    posAttr.needsUpdate = true;

  } else if (activeDimension === 5) {
    // 5D Rotation in XW and YV planes
    const t1 = time * 0.8;
    const t2 = time * 1.1;
    const cos1 = Math.cos(t1), sin1 = Math.sin(t1);
    const cos2 = Math.cos(t2), sin2 = Math.sin(t2);
    const projected = [];

    for (let i = 0; i < 32; i++) {
      const [x, y, z, w, v] = V5D[i];
      // Rotate XW
      const rx = x * cos1 - w * sin1;
      const rw = x * sin1 + w * cos1;
      // Rotate YV
      const ry = y * cos2 - v * sin2;
      const rv = y * sin2 + v * cos2;

      // Double perspective projection 5D -> 4D -> 3D
      const d1 = 3.2;
      const k1 = 1 / (d1 - rv * 0.6);
      const d2 = 2.8;
      const k2 = 1 / (d2 - rw * k1 * 0.6);
      const scale = k1 * k2 * 6.5;

      const px = rx * scale;
      const py = ry * scale;
      const pz = z * scale;
      projected.push(px, py, pz);

      if (hyperVertexSpheres && hyperVertexSpheres.children[i]) {
        hyperVertexSpheres.children[i].position.set(px, py, pz);
      }
    }

    // Update edge lines
    const posAttr = hyperEdgeLines.geometry.attributes.position;
    let ptr = 0;
    for (let i = 0; i < E5D.length; i++) {
      const [i1, i2] = E5D[i];
      posAttr.array[ptr++] = projected[i1 * 3];
      posAttr.array[ptr++] = projected[i1 * 3 + 1];
      posAttr.array[ptr++] = projected[i1 * 3 + 2];
      posAttr.array[ptr++] = projected[i2 * 3];
      posAttr.array[ptr++] = projected[i2 * 3 + 1];
      posAttr.array[ptr++] = projected[i2 * 3 + 2];
    }
    posAttr.needsUpdate = true;
  }
}

function initThreeEngine() {
  const container = document.getElementById('canvasContainer');
  const width = container.clientWidth || 600;
  const height = container.clientHeight || 480;

  // Scene
  scene = new THREE.Scene();
  scene.background = null;

  // Camera
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(4.2, 3.2, 5.5);

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  // Orbit Controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.minDistance = 2.5;
  controls.maxDistance = 15;
  controls.maxPolarAngle = Math.PI / 2 + 0.3; // Allow looking slightly under
  // Touch controls optimized for mobile smartphones & tablets
  controls.touches = {
    ONE: THREE.TOUCH.ROTATE,
    TWO: THREE.TOUCH.DOLLY_PAN
  };

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xffffff, 0.85);
  mainLight.position.set(6, 10, 7);
  mainLight.castShadow = true;
  scene.add(mainLight);

  const fillLight = new THREE.DirectionalLight(0x93C5FD, 0.45);
  fillLight.position.set(-6, -4, -5);
  scene.add(fillLight);

  // Subtle Floor Grid Platform
  createGroundPlatform();

  // 5D Cosmic Particle Atmosphere
  create5DParticleField();


  // Load initial shape
  loadShape(currentShapeKey);

  // Responsive Resize handlers for Mobile & PC
  window.addEventListener('resize', onWindowResize);
  window.addEventListener('orientationchange', () => {
    setTimeout(onWindowResize, 150);
  });

  if (window.ResizeObserver && container) {
    const resizeObs = new ResizeObserver(() => {
      onWindowResize();
    });
    resizeObs.observe(container);
  }

  // Animation Loop
  let clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

        // Animate 5D Cosmic Particle Field
    if (particles5D && show5DParticles) {
      particles5D.rotation.y += 0.0015;
      particles5D.rotation.x = Math.sin(elapsedTime * 0.3) * 0.08;
    }

    // Animate 4D Time-Folding if active
    if (isFolding4D && foldingHinges.length > 0) {
      foldingProgress += foldingSpeed * foldingDir;
      if (foldingProgress <= 0) {
        foldingProgress = 0;
        foldingDir = 1; // Unfolded, now fold back
      } else if (foldingProgress >= 1) {
        foldingProgress = 1;
        foldingDir = -1; // Closed, unfold again
      }
      applyFoldingProgress(foldingProgress);
    }

    if (currentMeshGroup) {
      if (autoRotate) {
        currentMeshGroup.rotation.y += 0.008;
      }
      // Gentle floating animation
      currentMeshGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.08 + 0.1;
    }

    if (activeDimension === 4 || activeDimension === 5) {
      updateHypercubeAnimation(elapsedTime);
    }
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}

function createGroundPlatform() {
  // Circular soft pedestal
  const platformGeo = new THREE.CylinderGeometry(3.6, 3.8, 0.1, 48);
  const platformMat = new THREE.MeshStandardMaterial({
    color: 0xE0E7FF,
    roughness: 0.9,
    metalness: 0.05
  });
  const platform = new THREE.Mesh(platformGeo, platformMat);
  platform.position.y = -2.1;
  platform.receiveShadow = true;
  scene.add(platform);

  // Grid helper on top of pedestal
  const grid = new THREE.GridHelper(6, 12, 0x818CF8, 0xC7D2FE);
  grid.position.y = -2.04;
  scene.add(grid);
}

function onWindowResize() {
  const container = document.getElementById('canvasContainer');
  if (!container || !renderer || !camera) return;
  const width = container.clientWidth || 600;
  const height = container.clientHeight || 480;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

// Build 3D Geometries with correct dimensions and vertex mapping

// --- PROCEDURAL 3D REAL-WORLD TEXTURES & BUILDERS ---
let activeRealWorldIndex = null;

function createDiceTexture(number) {
  const canvas = document.createElement('canvas');
  canvas.width = 256; canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, 256, 256);
  ctx.strokeStyle = '#CBD5E1'; ctx.lineWidth = 14;
  ctx.strokeRect(7, 7, 242, 242);
  ctx.fillStyle = number === 1 ? '#EF4444' : '#1E293B';
  const r = number === 1 ? 30 : 20;
  const drawDot = (x, y) => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  };
  const p = { c: 128, l: 64, r: 192, t: 64, b: 192 };
  if (number === 1) drawDot(p.c, p.c);
  if (number === 2) { drawDot(p.l, p.t); drawDot(p.r, p.b); }
  if (number === 3) { drawDot(p.l, p.t); drawDot(p.c, p.c); drawDot(p.r, p.b); }
  if (number === 4) { drawDot(p.l, p.t); drawDot(p.r, p.t); drawDot(p.l, p.b); drawDot(p.r, p.b); }
  if (number === 5) { drawDot(p.l, p.t); drawDot(p.r, p.t); drawDot(p.c, p.c); drawDot(p.l, p.b); drawDot(p.r, p.b); }
  if (number === 6) { drawDot(p.l, p.t); drawDot(p.r, p.t); drawDot(p.l, p.c); drawDot(p.r, p.c); drawDot(p.l, p.b); drawDot(p.r, p.b); }
  return new THREE.CanvasTexture(canvas);
}

function createRubikFaceTexture(faceColors) {
  const canvas = document.createElement('canvas');
  canvas.width = 256; canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#111827';
  ctx.fillRect(0, 0, 256, 256);
  const size = 72; const gap = 8;
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const x = 11 + c * (size + gap);
      const y = 11 + r * (size + gap);
      ctx.fillStyle = faceColors[r * 3 + c];
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(x, y, size, size, 8);
      else ctx.rect(x, y, size, size);
      ctx.fill();
    }
  }
  return new THREE.CanvasTexture(canvas);
}

function createCanLabelTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512; canvas.height = 256;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createLinearGradient(0, 0, 512, 0);
  grad.addColorStop(0, '#0284C7');
  grad.addColorStop(0.5, '#38BDF8');
  grad.addColorStop(1, '#0284C7');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 256);
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.arc(256, 128, 90, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#0369A1';
  ctx.font = 'bold 36px Fredoka, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('🥛 SUSU', 256, 120);
  ctx.fillText('SEGAR', 256, 160);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 22px Fredoka, sans-serif';
  ctx.fillText('★ KAYA KALSIUM & VITAMIN ★', 256, 230);
  return new THREE.CanvasTexture(canvas);
}

function createBatteryTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512; canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#1E293B';
  ctx.fillRect(0, 0, 512, 256);
  ctx.fillStyle = '#D97706';
  ctx.fillRect(0, 0, 512, 80);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 40px Fredoka, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('⚡ POWER CELL 1.5V', 256, 160);
  ctx.font = 'bold 28px sans-serif';
  ctx.fillText('+ [POSITIVE] +', 256, 55);
  return new THREE.CanvasTexture(canvas);
}

function createSoccerBallTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512; canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#F8FAFC';
  ctx.fillRect(0, 0, 512, 256);
  ctx.fillStyle = '#0F172A';
  const centers = [
    [100, 70], [250, 60], [400, 70],
    [180, 150], [330, 150], [480, 150],
    [100, 220], [250, 220], [400, 220]
  ];
  centers.forEach(([cx, cy]) => {
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const a = (i * 2 * Math.PI) / 5 - Math.PI / 2;
      const x = cx + 22 * Math.cos(a);
      const y = cy + 22 * Math.sin(a);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
  });
  return new THREE.CanvasTexture(canvas);
}

function createEarthTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512; canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#0284C7';
  ctx.fillRect(0, 0, 512, 256);
  ctx.fillStyle = '#22C55E';
  ctx.beginPath(); ctx.ellipse(320, 90, 70, 45, 0, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(270, 160, 40, 50, 0.2, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(120, 85, 45, 40, -0.3, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(145, 175, 35, 55, 0.4, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(400, 185, 30, 25, 0, 0, Math.PI * 2); ctx.fill();
  return new THREE.CanvasTexture(canvas);
}

function createWaffleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256; canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#D97706';
  ctx.fillRect(0, 0, 256, 256);
  ctx.strokeStyle = '#92400E';
  ctx.lineWidth = 4;
  for (let i = -256; i < 512; i += 24) {
    ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i + 256, 256); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(i + 256, 0); ctx.lineTo(i, 256); ctx.stroke();
  }
  return new THREE.CanvasTexture(canvas);
}

function createPyramidTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256; canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#D97706';
  ctx.fillRect(0, 0, 256, 256);
  ctx.strokeStyle = '#78350F';
  ctx.lineWidth = 3;
  for (let y = 0; y < 256; y += 18) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(256, y); ctx.stroke();
  }
  return new THREE.CanvasTexture(canvas);
}

// Procedural Real-World Model Builder
function buildRealWorldModel(shapeKey, itemId) {
  const group = new THREE.Group();

  switch (itemId) {
    // KUBUS
    case 'dadu': {
      const geo = new THREE.BoxGeometry(2.4, 2.4, 2.4);
      const mats = [
        new THREE.MeshStandardMaterial({ map: createDiceTexture(1), roughness: 0.2 }),
        new THREE.MeshStandardMaterial({ map: createDiceTexture(6), roughness: 0.2 }),
        new THREE.MeshStandardMaterial({ map: createDiceTexture(2), roughness: 0.2 }),
        new THREE.MeshStandardMaterial({ map: createDiceTexture(5), roughness: 0.2 }),
        new THREE.MeshStandardMaterial({ map: createDiceTexture(3), roughness: 0.2 }),
        new THREE.MeshStandardMaterial({ map: createDiceTexture(4), roughness: 0.2 })
      ];
      const mesh = new THREE.Mesh(geo, mats);
      mesh.castShadow = true;
      group.add(mesh);
      break;
    }
    case 'rubik': {
      const geo = new THREE.BoxGeometry(2.4, 2.4, 2.4);
      const colors = ['#EF4444', '#3B82F6', '#10B981', '#F59E0B', '#F97316', '#FFFFFF'];
      const makeShuffled = () => [colors[0], colors[1], colors[2], colors[3], colors[4], colors[5], colors[0], colors[1], colors[2]];
      const mats = [
        new THREE.MeshStandardMaterial({ map: createRubikFaceTexture(makeShuffled()), roughness: 0.3 }),
        new THREE.MeshStandardMaterial({ map: createRubikFaceTexture(makeShuffled()), roughness: 0.3 }),
        new THREE.MeshStandardMaterial({ map: createRubikFaceTexture(makeShuffled()), roughness: 0.3 }),
        new THREE.MeshStandardMaterial({ map: createRubikFaceTexture(makeShuffled()), roughness: 0.3 }),
        new THREE.MeshStandardMaterial({ map: createRubikFaceTexture(makeShuffled()), roughness: 0.3 }),
        new THREE.MeshStandardMaterial({ map: createRubikFaceTexture(makeShuffled()), roughness: 0.3 })
      ];
      const mesh = new THREE.Mesh(geo, mats);
      mesh.castShadow = true;
      group.add(mesh);
      break;
    }
    case 'kado': {
      const boxGeo = new THREE.BoxGeometry(2.2, 2.2, 2.2);
      const boxMat = new THREE.MeshStandardMaterial({ color: 0x8B5CF6, roughness: 0.3 });
      const box = new THREE.Mesh(boxGeo, boxMat);
      box.castShadow = true;
      group.add(box);

      const ribMat = new THREE.MeshStandardMaterial({ color: 0xFBBF24, roughness: 0.2, metalness: 0.2 });
      const ribX = new THREE.Mesh(new THREE.BoxGeometry(2.24, 2.24, 0.45), ribMat);
      const ribZ = new THREE.Mesh(new THREE.BoxGeometry(0.45, 2.24, 2.24), ribMat);
      group.add(ribX, ribZ);

      // Bow on top
      const knotGeo = new THREE.TorusGeometry(0.35, 0.09, 16, 24);
      const knot1 = new THREE.Mesh(knotGeo, ribMat);
      knot1.position.set(0, 1.25, 0);
      knot1.rotation.y = Math.PI / 4;
      knot1.rotation.x = Math.PI / 3;
      const knot2 = new THREE.Mesh(knotGeo, ribMat);
      knot2.position.set(0, 1.25, 0);
      knot2.rotation.y = -Math.PI / 4;
      knot2.rotation.x = -Math.PI / 3;
      const knotCenter = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), ribMat);
      knotCenter.position.set(0, 1.25, 0);
      group.add(knot1, knot2, knotCenter);
      break;
    }
    case 'es': {
      const iceGeo = new THREE.BoxGeometry(2.3, 2.3, 2.3);
      const iceMat = new THREE.MeshStandardMaterial({
        color: 0xA5F3FC,
        roughness: 0.1,
        metalness: 0.1,
        transparent: true,
        opacity: 0.8
      });
      const ice = new THREE.Mesh(iceGeo, iceMat);
      ice.castShadow = true;
      group.add(ice);
      // Small trapped bubbles
      const bubGeo = new THREE.SphereGeometry(0.1, 8, 8);
      const bubMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.7 });
      const bCoords = [[-0.4, 0.2, 0.3], [0.5, -0.3, -0.4], [0.1, 0.5, -0.2], [-0.3, -0.4, 0.5]];
      bCoords.forEach(c => {
        const b = new THREE.Mesh(bubGeo, bubMat);
        b.position.set(c[0], c[1], c[2]);
        group.add(b);
      });
      break;
    }

    // BALOK
    case 'sepatu': {
      // Base
      const baseGeo = new THREE.BoxGeometry(3.2, 1.3, 2.0);
      const baseMat = new THREE.MeshStandardMaterial({ color: 0x0F766E, roughness: 0.4 });
      const base = new THREE.Mesh(baseGeo, baseMat);
      base.castShadow = true;
      group.add(base);
      // Lid
      const lidGeo = new THREE.BoxGeometry(3.3, 0.35, 2.1);
      const lidMat = new THREE.MeshStandardMaterial({ color: 0xEA580C, roughness: 0.3 });
      const lid = new THREE.Mesh(lidGeo, lidMat);
      lid.position.y = 0.75;
      lid.castShadow = true;
      group.add(lid);
      break;
    }
    case 'kulkas': {
      const bodyGeo = new THREE.BoxGeometry(2.0, 3.4, 1.8);
      const bodyMat = new THREE.MeshStandardMaterial({ color: 0xCBD5E1, roughness: 0.25, metalness: 0.3 });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.castShadow = true;
      group.add(body);
      // Door seam
      const seam = new THREE.Mesh(new THREE.BoxGeometry(2.02, 0.04, 1.82), new THREE.MeshBasicMaterial({ color: 0x475569 }));
      seam.position.y = 0.5;
      group.add(seam);
      // Handles
      const hGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.6, 16);
      const hMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.6 });
      const h1 = new THREE.Mesh(hGeo, hMat);
      h1.position.set(0.85, 0.85, 0.95);
      const h2 = new THREE.Mesh(hGeo, hMat);
      h2.position.set(0.85, 0.05, 0.95);
      group.add(h1, h2);
      break;
    }
    case 'buku': {
      const coverGeo = new THREE.BoxGeometry(2.2, 0.38, 3.0);
      const coverMat = new THREE.MeshStandardMaterial({ color: 0x1D4ED8, roughness: 0.3 });
      const cover = new THREE.Mesh(coverGeo, coverMat);
      group.add(cover);
      // Pages
      const pageGeo = new THREE.BoxGeometry(2.05, 0.28, 2.85);
      const pageMat = new THREE.MeshStandardMaterial({ color: 0xF8FAFC, roughness: 0.7 });
      const pages = new THREE.Mesh(pageGeo, pageMat);
      pages.position.set(0.06, 0, 0);
      group.add(pages);
      break;
    }
    case 'bata': {
      const brickGeo = new THREE.BoxGeometry(3.2, 1.2, 1.8);
      const brickMat = new THREE.MeshStandardMaterial({ color: 0xB91C1C, roughness: 0.8 });
      const brick = new THREE.Mesh(brickGeo, brickMat);
      brick.castShadow = true;
      group.add(brick);
      // 3 holes
      const holeGeo = new THREE.CylinderGeometry(0.25, 0.25, 1.22, 16);
      const holeMat = new THREE.MeshBasicMaterial({ color: 0x450A0A });
      [-0.9, 0, 0.9].forEach(x => {
        const h = new THREE.Mesh(holeGeo, holeMat);
        h.position.x = x;
        group.add(h);
      });
      break;
    }

    // TABUNG
    case 'kaleng': {
      const canGeo = new THREE.CylinderGeometry(1.35, 1.35, 2.6, 36);
      const canMat = [
        new THREE.MeshStandardMaterial({ map: createCanLabelTexture(), roughness: 0.3 }),
        new THREE.MeshStandardMaterial({ color: 0xE2E8F0, metalness: 0.8, roughness: 0.2 }),
        new THREE.MeshStandardMaterial({ color: 0xE2E8F0, metalness: 0.8, roughness: 0.2 })
      ];
      const can = new THREE.Mesh(canGeo, canMat);
      can.castShadow = true;
      group.add(can);
      // Silver rims
      const rimMat = new THREE.MeshStandardMaterial({ color: 0x94A3B8, metalness: 0.85, roughness: 0.2 });
      const rimT = new THREE.Mesh(new THREE.TorusGeometry(1.35, 0.06, 16, 36), rimMat);
      rimT.rotation.x = Math.PI / 2;
      rimT.position.y = 1.3;
      const rimB = new THREE.Mesh(new THREE.TorusGeometry(1.35, 0.06, 16, 36), rimMat);
      rimB.rotation.x = Math.PI / 2;
      rimB.position.y = -1.3;
      // Pull tab
      const tab = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.04, 8, 16), rimMat);
      tab.rotation.x = Math.PI / 2;
      tab.position.set(0.3, 1.32, 0);
      group.add(rimT, rimB, tab);
      break;
    }
    case 'drum': {
      const drumGeo = new THREE.CylinderGeometry(1.4, 1.4, 2.2, 32);
      const drumMat = [
        new THREE.MeshStandardMaterial({ color: 0xDC2626, roughness: 0.2 }),
        new THREE.MeshStandardMaterial({ color: 0xFFFFFF, roughness: 0.5 }),
        new THREE.MeshStandardMaterial({ color: 0xFFFFFF, roughness: 0.5 })
      ];
      const drum = new THREE.Mesh(drumGeo, drumMat);
      group.add(drum);
      // Silver chrome rims & rods
      const rimMat = new THREE.MeshStandardMaterial({ color: 0xE2E8F0, metalness: 0.8, roughness: 0.2 });
      const r1 = new THREE.Mesh(new THREE.TorusGeometry(1.42, 0.08, 16, 32), rimMat);
      r1.rotation.x = Math.PI / 2; r1.position.y = 1.1;
      const r2 = new THREE.Mesh(new THREE.TorusGeometry(1.42, 0.08, 16, 32), rimMat);
      r2.rotation.x = Math.PI / 2; r2.position.y = -1.1;
      group.add(r1, r2);
      // Rods
      const rodGeo = new THREE.CylinderGeometry(0.03, 0.03, 2.15, 8);
      for (let i = 0; i < 6; i++) {
        const ang = (i * Math.PI * 2) / 6;
        const rod = new THREE.Mesh(rodGeo, rimMat);
        rod.position.set(1.42 * Math.cos(ang), 0, 1.42 * Math.sin(ang));
        group.add(rod);
      }
      break;
    }
    case 'celengan': {
      const celGeo = new THREE.CylinderGeometry(1.3, 1.3, 2.4, 32);
      const celMat = new THREE.MeshStandardMaterial({ color: 0xF59E0B, roughness: 0.3 });
      const cel = new THREE.Mesh(celGeo, celMat);
      group.add(cel);
      // Slot
      const slot = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.04, 0.16), new THREE.MeshBasicMaterial({ color: 0x1E293B }));
      slot.position.y = 1.21;
      // Coin peeking
      const coin = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.05, 24), new THREE.MeshStandardMaterial({ color: 0xFBBF24, metalness: 0.7, roughness: 0.2 }));
      coin.position.set(0, 1.32, 0);
      coin.rotation.z = Math.PI / 8;
      group.add(slot, coin);
      break;
    }
    case 'baterai': {
      const batGeo = new THREE.CylinderGeometry(1.25, 1.25, 2.5, 32);
      const batMat = [
        new THREE.MeshStandardMaterial({ map: createBatteryTexture(), roughness: 0.3 }),
        new THREE.MeshStandardMaterial({ color: 0xCBD5E1, metalness: 0.8 }),
        new THREE.MeshStandardMaterial({ color: 0xCBD5E1, metalness: 0.8 })
      ];
      const bat = new THREE.Mesh(batGeo, batMat);
      group.add(bat);
      // Nub
      const nub = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.25, 24), new THREE.MeshStandardMaterial({ color: 0xE2E8F0, metalness: 0.9 }));
      nub.position.y = 1.35;
      group.add(nub);
      break;
    }

    // KERUCUT
    case 'topi': {
      const hatGeo = new THREE.ConeGeometry(1.45, 2.6, 32);
      const hatMat = new THREE.MeshStandardMaterial({ color: 0xEC4899, roughness: 0.3 });
      const hat = new THREE.Mesh(hatGeo, hatMat);
      group.add(hat);
      // Pom-pom on apex
      const pom = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 16), new THREE.MeshStandardMaterial({ color: 0xF59E0B }));
      pom.position.y = 1.4;
      // Brim ring
      const brim = new THREE.Mesh(new THREE.TorusGeometry(1.45, 0.09, 16, 32), new THREE.MeshStandardMaterial({ color: 0x3B82F6 }));
      brim.rotation.x = Math.PI / 2;
      brim.position.y = -1.3;
      group.add(pom, brim);
      break;
    }
    case 'es_krim': {
      // Waffle cone
      const coneGeo = new THREE.ConeGeometry(1.2, 2.2, 32);
      const coneMat = new THREE.MeshStandardMaterial({ map: createWaffleTexture(), roughness: 0.5 });
      const cone = new THREE.Mesh(coneGeo, coneMat);
      cone.rotation.x = Math.PI;
      cone.position.y = -0.3;
      group.add(cone);
      // Ice cream scoop
      const scoopGeo = new THREE.SphereGeometry(1.15, 32, 32);
      const scoopMat = new THREE.MeshStandardMaterial({ color: 0xFB7185, roughness: 0.6 });
      const scoop = new THREE.Mesh(scoopGeo, scoopMat);
      scoop.position.y = 1.05;
      group.add(scoop);
      // Sprinkles
      const spGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.2, 8);
      const spColors = [0x3B82F6, 0xF59E0B, 0x10B981, 0xFFFFFF];
      for (let i = 0; i < 12; i++) {
        const spMat = new THREE.MeshBasicMaterial({ color: spColors[i % spColors.length] });
        const sp = new THREE.Mesh(spGeo, spMat);
        const u = Math.random() * Math.PI * 2;
        const v = Math.random() * 0.8;
        sp.position.set(0.95 * Math.sin(v) * Math.cos(u), 1.05 + 0.95 * Math.cos(v), 0.95 * Math.sin(v) * Math.sin(u));
        sp.rotation.set(Math.random(), Math.random(), Math.random());
        group.add(sp);
      }
      break;
    }
    case 'tumpeng': {
      const tumpengGeo = new THREE.ConeGeometry(1.5, 2.6, 32);
      const tumpengMat = new THREE.MeshStandardMaterial({ color: 0xFACC15, roughness: 0.65 });
      const tumpeng = new THREE.Mesh(tumpengGeo, tumpengMat);
      group.add(tumpeng);
      // Banana leaf tray
      const tray = new THREE.Mesh(new THREE.CylinderGeometry(2.3, 2.3, 0.08, 32), new THREE.MeshStandardMaterial({ color: 0x15803D, roughness: 0.4 }));
      tray.position.y = -1.32;
      // Red chili garnish
      const chili = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.4, 8), new THREE.MeshStandardMaterial({ color: 0xEF4444 }));
      chili.position.y = 1.45;
      group.add(tray, chili);
      break;
    }
    case 'traffic_cone': {
      const tcGeo = new THREE.ConeGeometry(1.3, 2.6, 32);
      const tcMat = new THREE.MeshStandardMaterial({ color: 0xEA580C, roughness: 0.3 });
      const tc = new THREE.Mesh(tcGeo, tcMat);
      group.add(tc);
      // Reflective white rings
      const wMat = new THREE.MeshStandardMaterial({ color: 0xF8FAFC, roughness: 0.2 });
      const r1 = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.8, 0.4, 32, 1, true), wMat);
      r1.position.y = 0.1;
      const r2 = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.45, 0.35, 32, 1, true), wMat);
      r2.position.y = 0.75;
      // Base
      const tcBase = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.16, 2.4), new THREE.MeshStandardMaterial({ color: 0x1E293B, roughness: 0.7 }));
      tcBase.position.y = -1.35;
      group.add(r1, r2, tcBase);
      break;
    }

    // BOLA
    case 'bola_sepak': {
      const ballGeo = new THREE.SphereGeometry(1.6, 36, 36);
      const ballMat = new THREE.MeshStandardMaterial({ map: createSoccerBallTexture(), roughness: 0.35 });
      const ball = new THREE.Mesh(ballGeo, ballMat);
      group.add(ball);
      break;
    }
    case 'kelereng': {
      const marbGeo = new THREE.SphereGeometry(1.6, 32, 32);
      const marbMat = new THREE.MeshStandardMaterial({ color: 0x06B6D4, roughness: 0.05, transparent: true, opacity: 0.75 });
      const marb = new THREE.Mesh(marbGeo, marbMat);
      group.add(marb);
      // Inner ribbon swirl
      const tor1 = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.12, 16, 32), new THREE.MeshStandardMaterial({ color: 0xFBBF24 }));
      tor1.rotation.x = Math.PI / 3;
      const tor2 = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.12, 16, 32), new THREE.MeshStandardMaterial({ color: 0xEF4444 }));
      tor2.rotation.y = Math.PI / 3;
      group.add(tor1, tor2);
      break;
    }
    case 'jeruk': {
      const orangeGeo = new THREE.SphereGeometry(1.6, 32, 32);
      const orangeMat = new THREE.MeshStandardMaterial({ color: 0xF97316, roughness: 0.6 });
      const orange = new THREE.Mesh(orangeGeo, orangeMat);
      group.add(orange);
      // Stem
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.4, 8), new THREE.MeshStandardMaterial({ color: 0x78350F }));
      stem.position.y = 1.7;
      // Leaf
      const leafGeo = new THREE.SphereGeometry(0.35, 12, 12);
      leafGeo.scale(1.8, 0.2, 0.8);
      const leaf = new THREE.Mesh(leafGeo, new THREE.MeshStandardMaterial({ color: 0x16A34A }));
      leaf.position.set(0.4, 1.72, 0);
      leaf.rotation.z = Math.PI / 6;
      group.add(stem, leaf);
      break;
    }
    case 'globe': {
      const gSphere = new THREE.Mesh(new THREE.SphereGeometry(1.5, 32, 32), new THREE.MeshStandardMaterial({ map: createEarthTexture(), roughness: 0.4 }));
      gSphere.rotation.z = -0.4;
      group.add(gSphere);
      // Bronze meridian ring
      const bMat = new THREE.MeshStandardMaterial({ color: 0xD97706, metalness: 0.7, roughness: 0.3 });
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.08, 16, 32, Math.PI), bMat);
      ring.rotation.z = -0.4;
      ring.position.y = 0;
      // Stand base
      const standPole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.8, 16), bMat);
      standPole.position.y = -1.75;
      const standBase = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.2, 0.2, 24), bMat);
      standBase.position.y = -2.1;
      group.add(ring, standPole, standBase);
      break;
    }

    // PRISMA SEGITIGA
    case 'tenda': {
      const shape = new THREE.Shape();
      shape.moveTo(0, 1.2);
      shape.lineTo(-1.3, -0.9);
      shape.lineTo(1.3, -0.9);
      shape.closePath();
      const geo = new THREE.ExtrudeGeometry(shape, { depth: 2.8, bevelEnabled: false });
      geo.center();
      const tent = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x16A34A, roughness: 0.5 }));
      group.add(tent);
      // Front opening flap
      const flapShape = new THREE.Shape();
      flapShape.moveTo(0, 0.8); flapShape.lineTo(-0.9, -0.85); flapShape.lineTo(0.9, -0.85); flapShape.closePath();
      const flapGeo = new THREE.ShapeGeometry(flapShape);
      const flap = new THREE.Mesh(flapGeo, new THREE.MeshBasicMaterial({ color: 0x0F172A }));
      flap.position.set(0, 0, 1.41);
      group.add(flap);
      break;
    }
    case 'toblerone': {
      const shape = new THREE.Shape();
      shape.moveTo(0, 1.2); shape.lineTo(-1.2, -0.8); shape.lineTo(1.2, -0.8); shape.closePath();
      const geo = new THREE.ExtrudeGeometry(shape, { depth: 3.0, bevelEnabled: false });
      geo.center();
      const tob = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0xFBBF24, roughness: 0.3 }));
      group.add(tob);
      break;
    }
    case 'atap': {
      const shape = new THREE.Shape();
      shape.moveTo(0, 1.3); shape.lineTo(-1.4, -0.7); shape.lineTo(1.4, -0.7); shape.closePath();
      const geo = new THREE.ExtrudeGeometry(shape, { depth: 2.8, bevelEnabled: false });
      geo.center();
      const atap = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x9A3412, roughness: 0.6 }));
      group.add(atap);
      break;
    }
    case 'kaca_prisma': {
      const shape = new THREE.Shape();
      shape.moveTo(0, 1.3); shape.lineTo(-1.2, -0.8); shape.lineTo(1.2, -0.8); shape.closePath();
      const geo = new THREE.ExtrudeGeometry(shape, { depth: 2.4, bevelEnabled: false });
      geo.center();
      const prism = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0xE0E7FF, transparent: true, opacity: 0.7, roughness: 0.1 }));
      group.add(prism);
      // Rainbow beam lines
      const colors = [0xEF4444, 0xF97316, 0xFACC15, 0x10B981, 0x3B82F6, 0x8B5CF6];
      colors.forEach((col, idx) => {
        const lineGeo = new THREE.CylinderGeometry(0.04, 0.04, 2.0, 8);
        const line = new THREE.Mesh(lineGeo, new THREE.MeshBasicMaterial({ color: col }));
        line.rotation.z = Math.PI / 3 + idx * 0.06;
        line.position.set(1.4 + idx * 0.1, -0.2 - idx * 0.1, 0);
        group.add(line);
      });
      break;
    }

    // LIMAS SEGIEMPAT
    case 'piramida': {
      const pyrGeo = new THREE.ConeGeometry(2.1, 2.6, 4);
      pyrGeo.rotateY(Math.PI / 4);
      const pyrMat = new THREE.MeshStandardMaterial({ map: createPyramidTexture(), roughness: 0.8 });
      const pyr = new THREE.Mesh(pyrGeo, pyrMat);
      group.add(pyr);
      // Golden capstone
      const capGeo = new THREE.ConeGeometry(0.5, 0.6, 4);
      capGeo.rotateY(Math.PI / 4);
      const cap = new THREE.Mesh(capGeo, new THREE.MeshStandardMaterial({ color: 0xFBBF24, metalness: 0.8, roughness: 0.2 }));
      cap.position.y = 1.05;
      group.add(cap);
      break;
    }
    case 'tenda_piramid': {
      const topGeo = new THREE.ConeGeometry(2.1, 1.8, 4);
      topGeo.rotateY(Math.PI / 4);
      const top = new THREE.Mesh(topGeo, new THREE.MeshStandardMaterial({ color: 0x2563EB, roughness: 0.4 }));
      top.position.y = 0.5;
      group.add(top);
      // 4 poles
      const poleGeo = new THREE.CylinderGeometry(0.05, 0.05, 1.8, 8);
      const poleMat = new THREE.MeshStandardMaterial({ color: 0x94A3B8, metalness: 0.7 });
      const corners = [[-1.4, -1.4], [1.4, -1.4], [1.4, 1.4], [-1.4, 1.4]];
      corners.forEach(([x, z]) => {
        const pole = new THREE.Mesh(poleGeo, poleMat);
        pole.position.set(x, -0.5, z);
        group.add(pole);
      });
      break;
    }
    case 'gantungan': {
      const pyrGeo = new THREE.ConeGeometry(2.0, 2.5, 4);
      pyrGeo.rotateY(Math.PI / 4);
      const pyr = new THREE.Mesh(pyrGeo, new THREE.MeshStandardMaterial({ color: 0xF59E0B, metalness: 0.6, roughness: 0.2 }));
      group.add(pyr);
      // Ring
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.06, 12, 24), new THREE.MeshStandardMaterial({ color: 0xE2E8F0, metalness: 0.9 }));
      ring.position.y = 1.5;
      group.add(ring);
      break;
    }
    
    // 5D HYPER-SPACE OBJECTS
    
    // BOLA 4D OBJECTS
    case 'kelereng_4d': {
      const gSphere = new THREE.Mesh(new THREE.SphereGeometry(1.5, 32, 32), new THREE.MeshStandardMaterial({ color: 0x06B6D4, roughness: 0.1, transparent: true, opacity: 0.7 }));
      const r1 = new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.06, 16, 48), new THREE.MeshBasicMaterial({ color: 0xFBBF24 }));
      const r2 = new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.06, 16, 48), new THREE.MeshBasicMaterial({ color: 0xEC4899 }));
      r2.rotation.x = Math.PI / 2;
      group.add(gSphere, r1, r2);
      break;
    }
    case 'gelembung_4d': {
      const bubble = new THREE.Mesh(new THREE.SphereGeometry(1.6, 32, 32), new THREE.MeshStandardMaterial({ color: 0xA5F3FC, transparent: true, opacity: 0.5, roughness: 0.05 }));
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.08, 16, 36), new THREE.MeshBasicMaterial({ color: 0x8B5CF6 }));
      ring.rotation.x = Math.PI / 3;
      group.add(bubble, ring);
      break;
    }
    case 'blackhole_4d': {
      const bh = new THREE.Mesh(new THREE.SphereGeometry(1.3, 32, 32), new THREE.MeshBasicMaterial({ color: 0x09090B }));
      const disk = new THREE.Mesh(new THREE.RingGeometry(1.5, 2.5, 36), new THREE.MeshStandardMaterial({ color: 0xF97316, side: THREE.DoubleSide, emissive: 0xEA580C, emissiveIntensity: 0.8 }));
      disk.rotation.x = Math.PI / 2.3;
      group.add(bh, disk);
      break;
    }
    case 'planet_4d': {
      const pl = new THREE.Mesh(new THREE.SphereGeometry(1.4, 32, 32), new THREE.MeshStandardMaterial({ color: 0x3B82F6, roughness: 0.3 }));
      const rA = new THREE.Mesh(new THREE.TorusGeometry(1.8, 0.06, 16, 36), new THREE.MeshBasicMaterial({ color: 0xF59E0B }));
      const rB = new THREE.Mesh(new THREE.TorusGeometry(1.8, 0.06, 16, 36), new THREE.MeshBasicMaterial({ color: 0x10B981 }));
      rB.rotation.y = Math.PI / 2;
      group.add(pl, rA, rB);
      break;
    }

    // BOLA 5D OBJECTS
    case 'multiverse_5d': {
      const core = new THREE.Mesh(new THREE.SphereGeometry(1.3, 32, 32), new THREE.MeshStandardMaterial({ color: 0x8B5CF6, emissive: 0x6D28D9, emissiveIntensity: 0.5 }));
      group.add(core);
      const ringCols = [0xF59E0B, 0x06B6D4, 0xEC4899, 0x10B981, 0xFFFFFF];
      for (let i = 0; i < 5; i++) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(1.65, 0.05, 12, 36), new THREE.MeshBasicMaterial({ color: ringCols[i] }));
        ring.rotation.x = (i * Math.PI) / 5;
        ring.rotation.y = (i * Math.PI) / 2.5;
        group.add(ring);
      }
      break;
    }
    case 'vortex_5d': {
      const vSph = new THREE.Mesh(new THREE.SphereGeometry(1.4, 32, 32), new THREE.MeshStandardMaterial({ color: 0x06B6D4, transparent: true, opacity: 0.7 }));
      const vRing = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.12, 16, 36), new THREE.MeshStandardMaterial({ color: 0xEC4899, wireframe: true }));
      vRing.rotation.x = Math.PI / 3;
      group.add(vSph, vRing);
      break;
    }
    case 'atom_5d': {
      const nucleus = new THREE.Mesh(new THREE.SphereGeometry(0.7, 16, 16), new THREE.MeshStandardMaterial({ color: 0xEF4444 }));
      group.add(nucleus);
      for (let i = 0; i < 5; i++) {
        const orbit = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.03, 8, 36), new THREE.MeshBasicMaterial({ color: 0x38BDF8 }));
        orbit.rotation.x = (i * Math.PI) / 5;
        orbit.rotation.z = (i * Math.PI) / 3;
        const elec = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), new THREE.MeshBasicMaterial({ color: 0xFACC15 }));
        elec.position.set(1.7 * Math.cos(i), 1.7 * Math.sin(i), 0);
        orbit.add(elec);
        group.add(orbit);
      }
      break;
    }
    case 'kristal_bola_5d': {
      const kSph = new THREE.Mesh(new THREE.IcosahedronGeometry(1.5, 1), new THREE.MeshStandardMaterial({ color: 0xD946EF, wireframe: true }));
      const kCore = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 16), new THREE.MeshStandardMaterial({ color: 0xF59E0B }));
      group.add(kSph, kCore);
      break;
    }

    // KUBUS 4D OBJECTS
    case 'dadu_4d': {
      const outerCube = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.4, 2.4), new THREE.MeshStandardMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.75 }));
      const innerCube = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 1.2), new THREE.MeshStandardMaterial({ color: 0xEF4444 }));
      group.add(outerCube, innerCube);
      break;
    }
    case 'rubik_4d': {
      const rBox = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.4, 2.4), new THREE.MeshStandardMaterial({ color: 0x111827, wireframe: true }));
      const rCore = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 1.2), new THREE.MeshStandardMaterial({ color: 0x3B82F6 }));
      group.add(rBox, rCore);
      break;
    }
    case 'tesseract_wire': {
      const b1 = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.4, 2.4), new THREE.MeshBasicMaterial({ color: 0x06B6D4, wireframe: true }));
      const b2 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 1.2), new THREE.MeshBasicMaterial({ color: 0xEC4899, wireframe: true }));
      group.add(b1, b2);
      break;
    }
    case 'kotak_waktu': {
      const box = new THREE.Mesh(new THREE.BoxGeometry(2.2, 2.2, 2.2), new THREE.MeshStandardMaterial({ color: 0x4F46E5, transparent: true, opacity: 0.8 }));
      const pRing = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.08, 16, 32), new THREE.MeshBasicMaterial({ color: 0xF59E0B }));
      pRing.rotation.x = Math.PI / 4;
      group.add(box, pRing);
      break;
    }

    case 'pesawat_5d': {
      const fusGeo = new THREE.ConeGeometry(0.6, 2.6, 8);
      fusGeo.rotateX(Math.PI / 2);
      const fus = new THREE.Mesh(fusGeo, new THREE.MeshStandardMaterial({ color: 0x4F46E5, metalness: 0.8, roughness: 0.2 }));
      group.add(fus);
      // Wings
      const wingGeo = new THREE.BoxGeometry(2.8, 0.08, 1.2);
      const wing = new THREE.Mesh(wingGeo, new THREE.MeshStandardMaterial({ color: 0x06B6D4, metalness: 0.7 }));
      wing.position.set(0, 0, -0.3);
      group.add(wing);
      // Cockpit
      const cpit = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), new THREE.MeshBasicMaterial({ color: 0xFACC15 }));
      cpit.position.set(0, 0.25, 0.3);
      group.add(cpit);
      break;
    }
    case 'portal_5d': {
      const ringMat = new THREE.MeshStandardMaterial({ color: 0x8B5CF6, emissive: 0x6D28D9, emissiveIntensity: 0.5 });
      const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.12, 16, 36), ringMat);
      const ring2 = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.09, 16, 36), new THREE.MeshStandardMaterial({ color: 0x06B6D4 }));
      ring2.rotation.y = Math.PI / 3;
      const vortex = new THREE.Mesh(new THREE.CircleGeometry(1.0, 32), new THREE.MeshBasicMaterial({ color: 0x0F172A, side: THREE.DoubleSide }));
      group.add(ring1, ring2, vortex);
      break;
    }
    case 'kristal_5d': {
      const kGeo = new THREE.OctahedronGeometry(1.4, 0);
      const kMat = new THREE.MeshStandardMaterial({ color: 0xEC4899, roughness: 0.1, metalness: 0.2, transparent: true, opacity: 0.85 });
      const kristal = new THREE.Mesh(kGeo, kMat);
      group.add(kristal);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.8, 0.05, 12, 36), new THREE.MeshBasicMaterial({ color: 0xF59E0B }));
      ring.rotation.x = Math.PI / 3;
      group.add(ring);
      break;
    }
    case 'planet_5d': {
      const pSphere = new THREE.Mesh(new THREE.SphereGeometry(1.3, 32, 32), new THREE.MeshStandardMaterial({ color: 0x6366F1, roughness: 0.3 }));
      const pRing = new THREE.Mesh(new THREE.RingGeometry(1.7, 2.4, 32), new THREE.MeshStandardMaterial({ color: 0xF59E0B, side: THREE.DoubleSide }));
      pRing.rotation.x = Math.PI / 2.5;
      group.add(pSphere, pRing);
      break;
    }

    
    // --- 4D BALOK ITEMS ---
    case 'peti_4d': {
      const chest = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.6, 1.4), new THREE.MeshStandardMaterial({ color: 0x1E1B4B, metalness: 0.6, roughness: 0.3 }));
      const wire = new THREE.Mesh(new THREE.BoxGeometry(2.7, 1.7, 1.5), new THREE.MeshBasicMaterial({ color: 0x06B6D4, wireframe: true }));
      const lock = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.15, 16), new THREE.MeshBasicMaterial({ color: 0xF59E0B }));
      lock.rotation.x = Math.PI / 2;
      lock.position.z = 0.75;
      group.add(chest, wire, lock);
      break;
    }
    case 'memori_4d': {
      const chip = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.3, 1.8), new THREE.MeshStandardMaterial({ color: 0x065F46, metalness: 0.8, roughness: 0.2 }));
      const core = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.4, 0.8), new THREE.MeshBasicMaterial({ color: 0x10B981 }));
      const pins = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.15, 1.9), new THREE.MeshStandardMaterial({ color: 0xF59E0B, metalness: 0.9 }));
      group.add(chip, core, pins);
      break;
    }
    case 'reaktor_balok_4d': {
      const casing = new THREE.Mesh(new THREE.BoxGeometry(2.2, 2.6, 1.4), new THREE.MeshStandardMaterial({ color: 0x312E81, transparent: true, opacity: 0.7 }));
      const plasma = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.8, 0.8), new THREE.MeshBasicMaterial({ color: 0x06B6D4 }));
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.06, 16, 32), new THREE.MeshBasicMaterial({ color: 0xEC4899 }));
      ring.rotation.x = Math.PI / 4;
      group.add(casing, plasma, ring);
      break;
    }
    case 'lemari_4d': {
      const cab = new THREE.Mesh(new THREE.BoxGeometry(1.8, 3.0, 1.4), new THREE.MeshStandardMaterial({ color: 0x1F2937, roughness: 0.4 }));
      const edge = new THREE.Mesh(new THREE.BoxGeometry(1.85, 3.05, 1.45), new THREE.MeshBasicMaterial({ color: 0x8B5CF6, wireframe: true }));
      const led = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), new THREE.MeshBasicMaterial({ color: 0x10B981 }));
      led.position.set(0.6, 1.2, 0.74);
      group.add(cab, edge, led);
      break;
    }

    // --- 4D TABUNG ITEMS ---
    case 'hyperloop_4d': {
      const tube = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 3.2, 32), new THREE.MeshStandardMaterial({ color: 0x06B6D4, transparent: true, opacity: 0.45, roughness: 0.1 }));
      const pod = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 1.6, 16), new THREE.MeshStandardMaterial({ color: 0x1E1B4B, metalness: 0.8 }));
      const magRing = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.08, 16, 32), new THREE.MeshBasicMaterial({ color: 0xF59E0B }));
      magRing.rotation.x = Math.PI / 2;
      group.add(tube, pod, magRing);
      break;
    }
    case 'kapsul_silinder_4d': {
      const glass = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 2.6, 24), new THREE.MeshStandardMaterial({ color: 0x10B981, transparent: true, opacity: 0.5 }));
      const capTop = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.15, 0.35, 24), new THREE.MeshStandardMaterial({ color: 0x374151, metalness: 0.8 }));
      capTop.position.y = 1.4;
      const capBottom = capTop.clone();
      capBottom.position.y = -1.4;
      const core = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 1.8, 16), new THREE.MeshBasicMaterial({ color: 0x6EE7B7 }));
      group.add(glass, capTop, capBottom, core);
      break;
    }
    case 'fusi_4d': {
      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 2.8, 24), new THREE.MeshBasicMaterial({ color: 0x06B6D4 }));
      const t1 = new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.14, 16, 36), new THREE.MeshStandardMaterial({ color: 0xF59E0B, metalness: 0.8 }));
      t1.rotation.x = Math.PI / 2;
      const t2 = t1.clone();
      t2.position.y = 0.8;
      const t3 = t1.clone();
      t3.position.y = -0.8;
      group.add(pillar, t1, t2, t3);
      break;
    }
    case 'baterai_4d': {
      const body = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 2.4, 24), new THREE.MeshStandardMaterial({ color: 0x111827, metalness: 0.5, roughness: 0.4 }));
      const gauge = new THREE.Mesh(new THREE.CylinderGeometry(1.02, 1.02, 1.0, 24), new THREE.MeshBasicMaterial({ color: 0x10B981 }));
      const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.4, 16), new THREE.MeshStandardMaterial({ color: 0xF59E0B, metalness: 0.9 }));
      pin.position.y = 1.35;
      group.add(body, gauge, pin);
      break;
    }

    // --- 4D KERUCUT ITEMS ---
    case 'corong_4d': {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(1.5, 2.6, 24), new THREE.MeshStandardMaterial({ color: 0x8B5CF6, transparent: true, opacity: 0.65, roughness: 0.2 }));
      const spiralRing = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.06, 16, 32), new THREE.MeshBasicMaterial({ color: 0x06B6D4 }));
      spiralRing.rotation.x = Math.PI / 2.3;
      const apex = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16), new THREE.MeshBasicMaterial({ color: 0xFACC15 }));
      apex.position.y = 1.3;
      group.add(cone, spiralRing, apex);
      break;
    }
    case 'pulsar_4d': {
      const dish = new THREE.Mesh(new THREE.ConeGeometry(1.7, 1.2, 32), new THREE.MeshStandardMaterial({ color: 0x374151, metalness: 0.8, roughness: 0.3 }));
      dish.rotation.x = Math.PI;
      dish.position.y = -0.5;
      const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.8, 12), new THREE.MeshBasicMaterial({ color: 0xF59E0B }));
      mast.position.y = 0.5;
      const emitter = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 16), new THREE.MeshBasicMaterial({ color: 0x06B6D4 }));
      emitter.position.y = 1.35;
      group.add(dish, mast, emitter);
      break;
    }
    case 'topi_krono_4d': {
      const hat = new THREE.Mesh(new THREE.ConeGeometry(1.4, 2.6, 24), new THREE.MeshStandardMaterial({ color: 0xEC4899, roughness: 0.3 }));
      const pom = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 16), new THREE.MeshBasicMaterial({ color: 0xFACC15 }));
      pom.position.y = 1.35;
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.45, 0.06, 12, 32), new THREE.MeshBasicMaterial({ color: 0x06B6D4 }));
      ring.rotation.x = Math.PI / 2;
      ring.position.y = -1.2;
      group.add(hat, pom, ring);
      break;
    }
    case 'traffic_4d': {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(1.3, 2.4, 24), new THREE.MeshStandardMaterial({ color: 0xEA580C, roughness: 0.4 }));
      const b1 = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.05, 12, 24), new THREE.MeshBasicMaterial({ color: 0xFFFFFF }));
      b1.rotation.x = Math.PI / 2; b1.position.y = 0.3;
      const b2 = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.05, 12, 24), new THREE.MeshBasicMaterial({ color: 0xFFFFFF }));
      b2.rotation.x = Math.PI / 2; b2.position.y = -0.4;
      const baseBox = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.18, 2.2), new THREE.MeshStandardMaterial({ color: 0x111827 }));
      baseBox.position.y = -1.25;
      group.add(cone, b1, b2, baseBox);
      break;
    }

    // --- 4D PRISMA ITEMS ---
    case 'tenda_4d': {
      const { geo } = createGeometryForShape('prisma');
      const tent = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x0284C7, metalness: 0.4, roughness: 0.3 }));
      const frame = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0x38BDF8, wireframe: true }));
      frame.scale.set(1.08, 1.08, 1.08);
      group.add(tent, frame);
      break;
    }
    case 'prisma_spektrum_4d': {
      const { geo } = createGeometryForShape('prisma');
      const prism = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.55, roughness: 0.1 }));
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 3.2, 12), new THREE.MeshBasicMaterial({ color: 0xFFFFFF }));
      beam.rotation.z = Math.PI / 3;
      const rainbow = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 1.4), new THREE.MeshBasicMaterial({ color: 0xEC4899, side: THREE.DoubleSide, transparent: true, opacity: 0.8 }));
      rainbow.position.set(1.2, 0, 0.5);
      rainbow.rotation.y = Math.PI / 4;
      group.add(prism, beam, rainbow);
      break;
    }
    case 'kristal_segitiga_4d': {
      const { geo } = createGeometryForShape('prisma');
      const gem = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0xA855F7, metalness: 0.2, roughness: 0.1, transparent: true, opacity: 0.8 }));
      const ring = new THREE.Mesh(new THREE.TorusGeometry(2.0, 0.06, 16, 36), new THREE.MeshBasicMaterial({ color: 0xF59E0B }));
      ring.rotation.x = Math.PI / 3;
      group.add(gem, ring);
      break;
    }
    case 'toblerone_4d': {
      const { geo } = createGeometryForShape('prisma');
      const choco = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0xD97706, metalness: 0.7, roughness: 0.2 }));
      const band = new THREE.Mesh(new THREE.BoxGeometry(0.4, 2.2, 2.5), new THREE.MeshBasicMaterial({ color: 0xDC2626 }));
      group.add(choco, band);
      break;
    }

    // --- 4D LIMAS ITEMS ---
    case 'piramida_4d': {
      const { geo } = createGeometryForShape('limas');
      const pyr = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x0F172A, roughness: 0.3 }));
      const glyph = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0x06B6D4, wireframe: true }));
      glyph.scale.set(1.05, 1.05, 1.05);
      const capstone = new THREE.Mesh(new THREE.ConeGeometry(0.4, 0.6, 4), new THREE.MeshBasicMaterial({ color: 0xFACC15 }));
      capstone.position.y = 1.6;
      group.add(pyr, glyph, capstone);
      break;
    }
    case 'menara_krono_4d': {
      const { geo } = createGeometryForShape('limas');
      const spire = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.4 }));
      spire.scale.set(1.1, 1.6, 1.1);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.08, 16, 32), new THREE.MeshBasicMaterial({ color: 0x06B6D4 }));
      ring.rotation.x = Math.PI / 2;
      group.add(spire, ring);
      break;
    }
    case 'sensor_limas_4d': {
      const { geo } = createGeometryForShape('limas');
      const sensor = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8 }));
      const dish = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), new THREE.MeshBasicMaterial({ color: 0xF59E0B }));
      dish.position.y = 1.3;
      group.add(sensor, dish);
      break;
    }
    case 'obelisk_4d': {
      const { geo } = createGeometryForShape('limas');
      const ob = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x1E293B, roughness: 0.5 }));
      ob.scale.set(0.8, 2.2, 0.8);
      const beacon = new THREE.Mesh(new THREE.OctahedronGeometry(0.35, 0), new THREE.MeshBasicMaterial({ color: 0xEC4899 }));
      beacon.position.y = 2.4;
      group.add(ob, beacon);
      break;
    }

    // --- 5D BALOK ITEMS ---
    case 'ark_5d': {
      const hull = new THREE.Mesh(new THREE.BoxGeometry(3.0, 1.2, 1.8), new THREE.MeshStandardMaterial({ color: 0x1E1B4B, metalness: 0.8, roughness: 0.2 }));
      const warp = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 3.4, 16), new THREE.MeshBasicMaterial({ color: 0x06B6D4 }));
      warp.rotation.z = Math.PI / 2; warp.position.set(0, 0.6, 0.9);
      const warp2 = warp.clone(); warp2.position.set(0, 0.6, -0.9);
      group.add(hull, warp, warp2);
      break;
    }
    case 'generator_5d': {
      const block = new THREE.Mesh(new THREE.BoxGeometry(2.2, 2.2, 2.2), new THREE.MeshStandardMaterial({ color: 0x0F172A, roughness: 0.4 }));
      const r1 = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.08, 16, 32), new THREE.MeshBasicMaterial({ color: 0xF59E0B }));
      const r2 = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.08, 16, 32), new THREE.MeshBasicMaterial({ color: 0x10B981 }));
      r2.rotation.x = Math.PI / 2;
      group.add(block, r1, r2);
      break;
    }
    case 'kapsul_antarbintang_5d': {
      const body = new THREE.Mesh(new THREE.BoxGeometry(2.8, 1.0, 1.2), new THREE.MeshStandardMaterial({ color: 0xF1F5F9, metalness: 0.9 }));
      const thruster = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.4, 0.6, 16), new THREE.MeshBasicMaterial({ color: 0x3B82F6 }));
      thruster.rotation.z = Math.PI / 2; thruster.position.x = -1.6;
      group.add(body, thruster);
      break;
    }
    case 'monolit_5d': {
      const mono = new THREE.Mesh(new THREE.BoxGeometry(1.2, 3.4, 0.4), new THREE.MeshStandardMaterial({ color: 0x000000, metalness: 0.9, roughness: 0.1 }));
      const halo = new THREE.Mesh(new THREE.TorusGeometry(1.8, 0.05, 16, 40), new THREE.MeshBasicMaterial({ color: 0x8B5CF6 }));
      halo.rotation.x = Math.PI / 3;
      group.add(mono, halo);
      break;
    }

    // --- 5D TABUNG ITEMS ---
    case 'wormhole_silinder_5d': {
      const tunnel = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 3.0, 32, 1, true), new THREE.MeshBasicMaterial({ color: 0x6D28D9, side: THREE.DoubleSide, wireframe: true }));
      const core = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 3.2, 16), new THREE.MeshBasicMaterial({ color: 0x06B6D4 }));
      group.add(tunnel, core);
      break;
    }
    case 'akselerator_5d': {
      const torus = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.35, 16, 48), new THREE.MeshStandardMaterial({ color: 0x374151, metalness: 0.8 }));
      const beam = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.08, 12, 48), new THREE.MeshBasicMaterial({ color: 0xFACC15 }));
      group.add(torus, beam);
      break;
    }
    case 'reaktor_kosmik_5d': {
      const chamber = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 2.6, 24), new THREE.MeshStandardMaterial({ color: 0x1E1B4B, transparent: true, opacity: 0.6 }));
      const orb = new THREE.Mesh(new THREE.SphereGeometry(0.8, 24, 24), new THREE.MeshBasicMaterial({ color: 0xEC4899 }));
      group.add(chamber, orb);
      break;
    }
    case 'suar_galaksi_5d': {
      const tower = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.8, 3.2, 16), new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.7 }));
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.45, 16, 16), new THREE.MeshBasicMaterial({ color: 0x38BDF8 }));
      lamp.position.y = 1.7;
      group.add(tower, lamp);
      break;
    }

    // --- 5D KERUCUT ITEMS ---
    case 'corong_multiverse_5d': {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(1.6, 2.8, 32), new THREE.MeshStandardMaterial({ color: 0x4338CA, roughness: 0.3 }));
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.08, 16, 32), new THREE.MeshBasicMaterial({ color: 0x10B981 }));
      ring.rotation.x = Math.PI / 2; ring.position.y = -1.3;
      group.add(horn, ring);
      break;
    }
    case 'pulsar_vortex_5d': {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(1.5, 2.6, 24), new THREE.MeshBasicMaterial({ color: 0xEC4899, wireframe: true }));
      const disk = new THREE.Mesh(new THREE.RingGeometry(0.8, 2.2, 32), new THREE.MeshBasicMaterial({ color: 0xF59E0B, side: THREE.DoubleSide }));
      disk.rotation.x = Math.PI / 2.3;
      group.add(cone, disk);
      break;
    }
    case 'menara_bintang_5d': {
      const spire = new THREE.Mesh(new THREE.ConeGeometry(0.8, 3.2, 16), new THREE.MeshStandardMaterial({ color: 0x0F172A, metalness: 0.8 }));
      const star = new THREE.Mesh(new THREE.OctahedronGeometry(0.4, 0), new THREE.MeshBasicMaterial({ color: 0xFACC15 }));
      star.position.y = 1.8;
      group.add(spire, star);
      break;
    }
    case 'lensa_kosmik_5d': {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(1.5, 2.2, 32), new THREE.MeshStandardMaterial({ color: 0x06B6D4, transparent: true, opacity: 0.6 }));
      for (let i = 0; i < 3; i++) {
        const lr = new THREE.Mesh(new THREE.TorusGeometry(0.5 + i * 0.4, 0.04, 12, 32), new THREE.MeshBasicMaterial({ color: 0xF59E0B }));
        lr.rotation.x = Math.PI / 2;
        lr.position.y = -0.8 + i * 0.6;
        group.add(lr);
      }
      group.add(cone);
      break;
    }

    // --- 5D PRISMA ITEMS ---
    case 'prisma_multiverse_5d': {
      const { geo } = createGeometryForShape('prisma');
      const prism = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x8B5CF6, transparent: true, opacity: 0.7 }));
      for (let i = 0; i < 5; i++) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(2.0 + i * 0.1, 0.03, 12, 32), new THREE.MeshBasicMaterial({ color: [0xF59E0B, 0x10B981, 0x06B6D4, 0xEC4899, 0xFACC15][i] }));
        ring.rotation.x = (i * Math.PI) / 5;
        group.add(ring);
      }
      group.add(prism);
      break;
    }
    case 'kubah_kosmik_5d': {
      const { geo } = createGeometryForShape('prisma');
      const dome = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x1E293B, metalness: 0.6 }));
      const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.6, 8), new THREE.MeshBasicMaterial({ color: 0x06B6D4 }));
      ant.position.y = 1.4;
      group.add(dome, ant);
      break;
    }
    case 'kristal_energi_5d': {
      const { geo } = createGeometryForShape('prisma');
      const gem = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x06B6D4, roughness: 0.1, transparent: true, opacity: 0.85 }));
      const core = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), new THREE.MeshBasicMaterial({ color: 0xFACC15 }));
      group.add(gem, core);
      break;
    }
    case 'relik_prisma_5d': {
      const { geo } = createGeometryForShape('prisma');
      const rel = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0xB45309, metalness: 0.8 }));
      const floatOrb = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), new THREE.MeshBasicMaterial({ color: 0x38BDF8 }));
      floatOrb.position.y = 1.6;
      group.add(rel, floatOrb);
      break;
    }

    // --- 5D LIMAS ITEMS ---
    case 'piramida_multiverse_5d': {
      const { geo } = createGeometryForShape('limas');
      const pyr = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0xF59E0B, metalness: 0.8, roughness: 0.2 }));
      for (let i = 0; i < 5; i++) {
        const r = new THREE.Mesh(new THREE.TorusGeometry(2.1 + i * 0.1, 0.035, 12, 36), new THREE.MeshBasicMaterial({ color: [0xF59E0B, 0x10B981, 0x06B6D4, 0xEC4899, 0xFACC15][i] }));
        r.rotation.x = (i * Math.PI) / 5;
        r.rotation.z = (i * Math.PI) / 3;
        group.add(r);
      }
      group.add(pyr);
      break;
    }
    case 'pilar_energi_5d': {
      const { geo } = createGeometryForShape('limas');
      const pillar = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x0F172A, roughness: 0.4 }));
      pillar.scale.set(0.9, 2.2, 0.9);
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 3.4, 12), new THREE.MeshBasicMaterial({ color: 0x06B6D4 }));
      group.add(pillar, beam);
      break;
    }
    case 'stasiun_piramid_5d': {
      const { geo } = createGeometryForShape('limas');
      const st = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.7 }));
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.8, 0.1, 16, 36), new THREE.MeshBasicMaterial({ color: 0xEC4899 }));
      ring.rotation.x = Math.PI / 2;
      group.add(st, ring);
      break;
    }
    case 'monolit_limas_5d': {
      const { geo } = createGeometryForShape('limas');
      const temple = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x1E1B4B, roughness: 0.3 }));
      const singularity = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), new THREE.MeshBasicMaterial({ color: 0xFACC15 }));
      singularity.position.y = 1.7;
      group.add(temple, singularity);
      break;
    }

case 'menara': {
      // Spire
      const spireGeo = new THREE.ConeGeometry(1.6, 2.4, 4);
      spireGeo.rotateY(Math.PI / 4);
      const spire = new THREE.Mesh(spireGeo, new THREE.MeshStandardMaterial({ color: 0x0D9488, roughness: 0.4 }));
      spire.position.y = 0.6;
      group.add(spire);
      // Tower base
      const tBase = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.2, 2.2), new THREE.MeshStandardMaterial({ color: 0xB45309, roughness: 0.8 }));
      tBase.position.y = -1.1;
      group.add(tBase);
      // Clock dial
      const clock = new THREE.Mesh(new THREE.CircleGeometry(0.4, 16), new THREE.MeshBasicMaterial({ color: 0xFFFFFF }));
      clock.position.set(0, -1.1, 1.11);
      group.add(clock);
      break;
    }
    default: {
      const geo = new THREE.BoxGeometry(2, 2, 2);
      const mat = new THREE.MeshStandardMaterial({ color: 0x3B82F6 });
      group.add(new THREE.Mesh(geo, mat));
    }
  }

  return group;
}


function loadRealWorldObject(shapeKey, itemIndex) {
  sfx.playSuccess();
  activeRealWorldIndex = itemIndex;
  const dimData = getShapeDimensionData(shapeKey, activeDimension);
  const item = dimData.realWorld[itemIndex];

  // Clean old meshes
  if (currentMeshGroup) {
    scene.remove(currentMeshGroup);
  }

  currentMeshGroup = buildRealWorldModel(shapeKey, item.id);
  scene.add(currentMeshGroup);

  // Update header label and show reset button
  document.getElementById('currentShapeLabel').innerHTML = `Benda Nyata: <strong>${item.name}</strong> ${item.icon}`;
  const resetBtn = document.getElementById('resetToGeoBtn');
  if (resetBtn) resetBtn.classList.remove('hidden');

  // Update mascot tip
  document.getElementById('mascotTip').innerHTML = item.fact;

  // Update active state on badges
  document.querySelectorAll('#realworldItems .rw-item').forEach((badge, idx) => {
    badge.classList.toggle('active-rw', idx === itemIndex);
  });
}

function createGeometryForShape(key) {
  let geo;
  let vertices = [];

  switch (key) {
    case 'kubus': {
      const s = 2.4;
      geo = new THREE.BoxGeometry(s, s, s);
      const h = s / 2;
      vertices = [
        [-h, -h, -h], [h, -h, -h], [h, h, -h], [-h, h, -h],
        [-h, -h,  h], [h, -h,  h], [h, h,  h], [-h, h,  h]
      ];
      break;
    }
    case 'balok': {
      const p = 3.2, t = 1.8, l = 2.2;
      geo = new THREE.BoxGeometry(p, t, l);
      const hp = p / 2, ht = t / 2, hl = l / 2;
      vertices = [
        [-hp, -ht, -hl], [hp, -ht, -hl], [hp, ht, -hl], [-hp, ht, -hl],
        [-hp, -ht,  hl], [hp, -ht,  hl], [hp, ht,  hl], [-hp, ht,  hl]
      ];
      break;
    }
    case 'tabung': {
      const r = 1.35, t = 2.6;
      geo = new THREE.CylinderGeometry(r, r, t, 36);
      vertices = []; // Tabung 0 titik sudut
      break;
    }
    case 'kerucut': {
      const r = 1.5, t = 2.7;
      geo = new THREE.ConeGeometry(r, t, 36);
      vertices = [[0, t / 2, 0]]; // Titik puncak
      break;
    }
    case 'bola': {
      const r = 1.6;
      geo = new THREE.SphereGeometry(r, 36, 36);
      vertices = []; // Bola 0 titik sudut
      break;
    }
    case 'prisma': {
      // Prisma Segitiga: Extrude Geometry
      const shape = new THREE.Shape();
      const a = 1.3, hTri = 2.1;
      shape.moveTo(0, hTri * 0.6);
      shape.lineTo(-a, -hTri * 0.4);
      shape.lineTo(a, -hTri * 0.4);
      shape.closePath();

      const extrudeSettings = {
        depth: 2.6,
        bevelEnabled: false
      };
      geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      geo.center();

      const depthH = 2.6 / 2;
      vertices = [
        [0, hTri * 0.6 - 0.2, -depthH],
        [-a, -hTri * 0.4 - 0.2, -depthH],
        [a, -hTri * 0.4 - 0.2, -depthH],
        [0, hTri * 0.6 - 0.2, depthH],
        [-a, -hTri * 0.4 - 0.2, depthH],
        [a, -hTri * 0.4 - 0.2, depthH]
      ];
      break;
    }
        case 'hypercube': {
      // 5D Tesseract Projection
      geo = new THREE.BoxGeometry(2.4, 2.4, 2.4);
      vertices = [
        [-1.2, -1.2, -1.2], [1.2, -1.2, -1.2], [1.2, 1.2, -1.2], [-1.2, 1.2, -1.2],
        [-1.2, -1.2, 1.2], [1.2, -1.2, 1.2], [1.2, 1.2, 1.2], [-1.2, 1.2, 1.2],
        [-0.6, -0.6, -0.6], [0.6, -0.6, -0.6], [0.6, 0.6, -0.6], [-0.6, 0.6, -0.6],
        [-0.6, -0.6, 0.6], [0.6, -0.6, 0.6], [0.6, 0.6, 0.6], [-0.6, 0.6, 0.6]
      ];
      break;
    }
    case 'limas': {
      // Limas Segiempat: 4-sided cone
      const r = 2.1;
      const h = 2.6;
      geo = new THREE.ConeGeometry(r, h, 4);
      geo.rotateY(Math.PI / 4); // Aligns square base nicely
      const halfB = (r * Math.sqrt(2)) / 2;
      const halfH = h / 2;
      vertices = [
        [0, halfH, 0], // Puncak
        [-halfB, -halfH, -halfB],
        [halfB, -halfH, -halfB],
        [halfB, -halfH, halfB],
        [-halfB, -halfH, halfB]
      ];
      break;
    }
  }

  return { geo, vertices };
}



function setDimension(dim) {
  sfx.playPop();
  triggerHaptic([35, 45, 35]);
  activeDimension = parseInt(dim);

  // Update dimension toggle buttons
  document.querySelectorAll('.dim-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.getAttribute('data-dim')) === activeDimension);
  });

  // Reload current shape under the new dimension
  loadShape(currentShapeKey);
}


window.setDimension = setDimension;


function loadShape(shapeKey) {
  currentShapeKey = shapeKey;
  activeRealWorldIndex = null;
  const resetBtn = document.getElementById('resetToGeoBtn');
  if (resetBtn) resetBtn.classList.add('hidden');

  // Reset hypercube animation state when not on kubus
  if (shapeKey !== 'kubus') {
    hyperEdgeLines = null;
    hyperVertexSpheres = null;
    hyperInnerMesh = null;
  }

  // Clean old meshes
  if (currentMeshGroup) {
    scene.remove(currentMeshGroup);
  }

  currentMeshGroup = new THREE.Group();

  if (activeDimension === 3) {
    // Standard 3D Shape
    const { geo, vertices } = createGeometryForShape(shapeKey);

    const meshMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activeColor),
      roughness: 0.32,
      metalness: 0.12,
      wireframe: wireframeMode,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1
    });

    const mesh = new THREE.Mesh(geo, meshMat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    currentMeshGroup.add(mesh);

    // Rusuk
    const edgesGeo = new THREE.EdgesGeometry(geo, shapeKey === 'tabung' || shapeKey === 'kerucut' ? 25 : 15);
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0x1E1B4B,
      linewidth: 3,
      transparent: true,
      opacity: showEdges ? 0.95 : 0
    });
    currentEdgesLine = new THREE.LineSegments(edgesGeo, edgesMat);
    currentMeshGroup.add(currentEdgesLine);

    // Titik Sudut
    currentVerticesGroup = new THREE.Group();
    const vSphereGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const vSphereMat = new THREE.MeshStandardMaterial({
      color: 0xF59E0B,
      emissive: 0xF59E0B,
      emissiveIntensity: 0.6,
      roughness: 0.2
    });

    vertices.forEach(pos => {
      const vMesh = new THREE.Mesh(vSphereGeo, vSphereMat);
      vMesh.position.set(pos[0], pos[1], pos[2]);
      currentVerticesGroup.add(vMesh);
    });

    currentVerticesGroup.visible = showVertices;
    currentMeshGroup.add(currentVerticesGroup);

  } else {
    // 4D or 5D Model for this shape
    currentMeshGroup = buildDimensionModel(shapeKey, activeDimension);
  }

  scene.add(currentMeshGroup);

  // Update UI Panels with Dimension-Aware Data
  updateShapeDetails(shapeKey);
}



function updateShapeDetails(key) {
  const data = getShapeDimensionData(key, activeDimension);
  if (!data) return;

  // Header badge
  document.getElementById('currentShapeLabel').innerHTML = data.title;

  // Stat boxes
  document.getElementById('valSisi').textContent = data.sisi;
  document.getElementById('descSisi').textContent = data.descSisi;

  document.getElementById('valRusuk').textContent = data.rusuk;
  document.getElementById('descRusuk').textContent = data.descRusuk;

  document.getElementById('valSudut').textContent = data.sudut;
  document.getElementById('descSudut').textContent = data.descSudut;

  // Description & Formulas
  document.getElementById('shapeDescription').textContent = data.description;
  document.getElementById('formulaVolume').innerHTML = data.formulaVol;
  document.getElementById('formulaArea').innerHTML = data.formulaArea;

  // Real world badges (clickable to show 3D model)
  const rwContainer = document.getElementById('realworldItems');
  rwContainer.innerHTML = '';
  data.realWorld.forEach((item, index) => {
    const badge = document.createElement('button');
    badge.className = 'rw-item' + (activeRealWorldIndex === index ? ' active-rw' : '');
    badge.setAttribute('title', `Lihat model 3D ${item.name}`);
    badge.innerHTML = `<span class="rw-icon">${item.icon}</span> <span class="rw-label">${item.name}</span> <span class="rw-3d-tag">3D ✨</span>`;
    badge.addEventListener('click', () => {
      loadRealWorldObject(key, index);
    });
    rwContainer.appendChild(badge);
  });

  // Mascot tip
  document.getElementById('mascotTip').innerHTML = data.mascotTip;
}


// --- JARING-JARING (2D NETS GENERATOR) ---
let currentCubePattern = 1;

function updateJaringDisplay() {
  const select = document.getElementById('jaringShapeSelect');
  const shape = select.value;
  const wrapper = document.getElementById('jaringSvgWrapper');
  const title = document.getElementById('jaringTitle');
  const cubeControls = document.getElementById('cubePatternControls');
  const detailList = document.getElementById('jaringDetailText');
  const examTip = document.getElementById('jaringExamTip');

  if (shape === 'kubus') {
    cubeControls.classList.remove('hidden');
    title.textContent = `Pola Jaring-Jaring Kubus (Variasi ${currentCubePattern})`;
    renderCubeNetSVG(wrapper, currentCubePattern);
    
    detailList.innerHTML = `
      <div class="jaring-step-item">
        <span class="step-num">1</span>
        <div><strong>Buka Semua Rusuk Tegak:</strong> Rentangkan keempat sisi samping kubus sehingga membentuk barisan 4 persegi sejajar.</div>
      </div>
      <div class="jaring-step-item">
        <span class="step-num">2</span>
        <div><strong>Posisikan Alas dan Tutup:</strong> Pasang satu persegi di atas (tutup) dan satu persegi di bawah (alas) pada posisi yang berseberangan agar tidak tumpang tindih saat dilipat.</div>
      </div>
      <div class="jaring-step-item">
        <span class="step-num">3</span>
        <div><strong>Lipat Kembali:</strong> Lipat setiap sambungan 90° ke atas, maka akan terbentuk kubus sempurna tanpa celah!</div>
      </div>
    `;
    examTip.textContent = "Tips Ujian SD: Pola kubus paling sering keluar adalah Pola 1-4-1 (satu di atas, empat di tengah, satu di bawah)! Alas dan Tutup tidak boleh bersentuhan langsung.";
  } else {
    cubeControls.classList.add('hidden');

    if (shape === 'balok') {
      title.textContent = 'Jaring-Jaring Balok (Pola 1-4-1)';
      renderBalokNetSVG(wrapper);
      detailList.innerHTML = `
        <div class="jaring-step-item">
          <span class="step-num">1</span>
          <div><strong>3 Pasang Persegi Panjang:</strong> Jaring-jaring balok terdiri dari 6 persegi panjang dengan 3 pasang ukuran yang kongruen (alas = tutup, depan = belakang, kiri = kanan).</div>
        </div>
        <div class="jaring-step-item">
          <span class="step-num">2</span>
          <div><strong>Aturan Lipatan:</strong> Sisi yang berhadapan harus memiliki ukuran panjang & lebar yang sama persis saat dirangkai!</div>
        </div>
      `;
      examTip.textContent = "Tips Ujian SD: Pastikan sisi alas (bawah) dan tutup (atas) memiliki panjang dan lebar yang sama persis!";
    } else if (shape === 'tabung') {
      title.textContent = 'Jaring-Jaring Tabung (Silinder)';
      renderTabungNetSVG(wrapper);
      detailList.innerHTML = `
        <div class="jaring-step-item">
          <span class="step-num">1</span>
          <div><strong>Selimut Tabung:</strong> Saat dibuka memanjang, bidang lengkung selimut tabung berubah menjadi sebuah persegi panjang yang lebar!</div>
        </div>
        <div class="jaring-step-item">
          <span class="step-num">2</span>
          <div><strong>Alas dan Tutup:</strong> Dua lingkaran identik menempel di sisi atas dan bawah persegi panjang tersebut.</div>
        </div>
        <div class="jaring-step-item">
          <span class="step-num">3</span>
          <div><strong>Panjang Selimut:</strong> Panjang persegi panjang selimut sama dengan keliling lingkaran alasnya (2 &times; &pi; &times; r)!</div>
        </div>
      `;
      examTip.textContent = "Rumus Sakti: Panjang selimut tabung = Keliling lingkaran alas = 2 × π × r !";
    } else if (shape === 'kerucut') {
      title.textContent = 'Jaring-Jaring Kerucut';
      renderKerucutNetSVG(wrapper);
      detailList.innerHTML = `
        <div class="jaring-step-item">
          <span class="step-num">1</span>
          <div><strong>Juring Lingkaran (Selimut):</strong> Selimut kerucut yang dibuka berbentuk seperti irisan kue pizza besar (juring lingkaran)!</div>
        </div>
        <div class="jaring-step-item">
          <span class="step-num">2</span>
          <div><strong>Lingkaran Alas:</strong> Lingkaran kecil menempel di bagian bawah busur juring sebagai dasar kerucut.</div>
        </div>
      `;
      examTip.textContent = "Garis miring pada kerucut dinamakan 'Garis Pelukis' (lambang s)!";
    } else if (shape === 'limas') {
      title.textContent = 'Jaring-Jaring Limas Segiempat';
      renderLimasNetSVG(wrapper);
      detailList.innerHTML = `
        <div class="jaring-step-item">
          <span class="step-num">1</span>
          <div><strong>Alas Persegi:</strong> Terletak tepat di tengah jaring-jaring sebagai pondasi.</div>
        </div>
        <div class="jaring-step-item">
          <span class="step-num">2</span>
          <div><strong>4 Segitiga Sayap:</strong> Empat bidang segitiga mekar di keempat sisi persegi, siap dilipat ke atas bertemu di satu titik puncak.</div>
        </div>
      `;
      examTip.textContent = "Bentuk jaring-jaring limas segiempat menyerupai bentuk bintang 4 sudut!";
    } else if (shape === 'prisma') {
      title.textContent = 'Jaring-Jaring Prisma Segitiga';
      renderPrismaNetSVG(wrapper);
      detailList.innerHTML = `
        <div class="jaring-step-item">
          <span class="step-num">1</span>
          <div><strong>3 Persegi Panjang:</strong> Membentuk dinding tengah yang bersambungan.</div>
        </div>
        <div class="jaring-step-item">
          <span class="step-num">2</span>
          <div><strong>2 Segitiga (Alas & Tutup):</strong> Menempel pada salah satu persegi panjang di posisi atas dan bawah.</div>
        </div>
      `;
      examTip.textContent = "Kedua bentuk segitiga pada jaring-jaring prisma harus persis sama ukuran dan arahnya!";
    }
  }
}

// SVG Renderers
function renderCubeNetSVG(container, pattern) {
  // Grid layout for cube net (unit size: 50px)
  const u = 52;
  let layout = [];
  // layout format: [row, col, type, label]

  if (pattern === 1) { // 1-4-1 standard
    layout = [
      [0, 1, 'tutup', 'Tutup'],
      [1, 0, 'tegak', 'Kiri'],
      [1, 1, 'alas', 'Alas'],
      [1, 2, 'tegak', 'Kanan'],
      [1, 3, 'tegak', 'Depan'],
      [2, 1, 'tegak', 'Belakang']
    ];
  } else if (pattern === 2) { // 1-4-1 variasi b
    layout = [
      [0, 2, 'tutup', 'Tutup'],
      [1, 0, 'tegak', 'Kiri'],
      [1, 1, 'alas', 'Alas'],
      [1, 2, 'tegak', 'Kanan'],
      [1, 3, 'tegak', 'Depan'],
      [2, 0, 'tegak', 'Belakang']
    ];
  } else if (pattern === 3) { // 2-3-1
    layout = [
      [0, 0, 'tutup', 'Tutup'],
      [0, 1, 'tegak', 'Atas'],
      [1, 1, 'alas', 'Alas'],
      [1, 2, 'tegak', 'Kanan'],
      [1, 3, 'tegak', 'Depan'],
      [2, 2, 'tegak', 'Belakang']
    ];
  } else if (pattern === 4) { // 2-2-2 zig-zag
    layout = [
      [0, 0, 'tutup', 'Tutup'],
      [0, 1, 'tegak', 'Kiri'],
      [1, 1, 'alas', 'Alas'],
      [1, 2, 'tegak', 'Kanan'],
      [2, 2, 'tegak', 'Depan'],
      [2, 3, 'tegak', 'Belakang']
    ];
  } else if (pattern === 5) { // 3-3-0 tangga
    layout = [
      [0, 0, 'tutup', 'Tutup'],
      [0, 1, 'tegak', 'Kiri'],
      [0, 2, 'tegak', 'Atas'],
      [1, 2, 'alas', 'Alas'],
      [1, 3, 'tegak', 'Kanan'],
      [1, 4, 'tegak', 'Depan']
    ];
  }

  let minX = 0, maxX = 4, minY = 0, maxY = 2;
  layout.forEach(([r, c]) => {
    if (c > maxX) maxX = c;
    if (r > maxY) maxY = r;
  });

  const width = (maxX + 1.2) * u;
  const height = (maxY + 1.2) * u;
  const offsetX = 25;
  const offsetY = 25;

  let rectsSvg = '';
  layout.forEach(([r, c, type, label]) => {
    let fill = type === 'alas' ? '#3B82F6' : (type === 'tutup' ? '#EC4899' : '#10B981');
    let x = offsetX + c * u;
    let y = offsetY + r * u;

    rectsSvg += `
      <g class="net-face" style="cursor: pointer;">
        <rect x="${x}" y="${y}" width="${u}" height="${u}" rx="4" fill="${fill}" stroke="#1E1B4B" stroke-width="2.5" fill-opacity="0.85"/>
        <text x="${x + u/2}" y="${y + u/2 + 5}" font-family="Fredoka, sans-serif" font-size="12" font-weight="600" fill="#ffffff" text-anchor="middle">${label}</text>
      </g>
    `;
  });

  container.innerHTML = `
    <svg viewBox="0 0 ${width + 50} ${height + 50}" width="100%" height="320" style="max-width: 480px; display: block; margin: auto;">
      ${rectsSvg}
    </svg>
  `;
}

function renderBalokNetSVG(container) {
  // Balok with dimensions (p=80, l=45, t=55)
  const p = 84, l = 46, t = 52;
  const ox = 30, oy = 25;

  container.innerHTML = `
    <svg viewBox="0 0 380 320" width="100%" height="320" style="max-width: 420px; display: block; margin: auto;">
      <!-- Tutup -->
      <g>
        <rect x="${ox + l}" y="${oy}" width="${p}" height="${l}" rx="4" fill="#EC4899" stroke="#1E1B4B" stroke-width="2.5" fill-opacity="0.9"/>
        <text x="${ox + l + p/2}" y="${oy + l/2 + 5}" font-family="Fredoka" font-size="12" fill="#fff" text-anchor="middle">Tutup (${p}x${l})</text>
      </g>
      <!-- Row 2: Kiri, Alas, Kanan, Belakang -->
      <!-- Kiri -->
      <g>
        <rect x="${ox}" y="${oy + l}" width="${l}" height="${t}" rx="4" fill="#10B981" stroke="#1E1B4B" stroke-width="2.5" fill-opacity="0.9"/>
        <text x="${ox + l/2}" y="${oy + l + t/2 + 5}" font-family="Fredoka" font-size="11" fill="#fff" text-anchor="middle">Kiri</text>
      </g>
      <!-- Alas -->
      <g>
        <rect x="${ox + l}" y="${oy + l}" width="${p}" height="${t}" rx="4" fill="#3B82F6" stroke="#1E1B4B" stroke-width="2.5" fill-opacity="0.9"/>
        <text x="${ox + l + p/2}" y="${oy + l + t/2 + 5}" font-family="Fredoka" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">Alas (${p}x${t})</text>
      </g>
      <!-- Kanan -->
      <g>
        <rect x="${ox + l + p}" y="${oy + l}" width="${l}" height="${t}" rx="4" fill="#10B981" stroke="#1E1B4B" stroke-width="2.5" fill-opacity="0.9"/>
        <text x="${ox + l + p + l/2}" y="${oy + l + t/2 + 5}" font-family="Fredoka" font-size="11" fill="#fff" text-anchor="middle">Kanan</text>
      </g>
      <!-- Belakang -->
      <g>
        <rect x="${ox + l + p + l}" y="${oy + l}" width="${p}" height="${t}" rx="4" fill="#10B981" stroke="#1E1B4B" stroke-width="2.5" fill-opacity="0.9"/>
        <text x="${ox + l + p + l + p/2}" y="${oy + l + t/2 + 5}" font-family="Fredoka" font-size="11" fill="#fff" text-anchor="middle">Belakang</text>
      </g>
      <!-- Depan -->
      <g>
        <rect x="${ox + l}" y="${oy + l + t}" width="${p}" height="${l}" rx="4" fill="#10B981" stroke="#1E1B4B" stroke-width="2.5" fill-opacity="0.9"/>
        <text x="${ox + l + p/2}" y="${oy + l + t + l/2 + 5}" font-family="Fredoka" font-size="12" fill="#fff" text-anchor="middle">Depan</text>
      </g>
    </svg>
  `;
}

function renderTabungNetSVG(container) {
  container.innerHTML = `
    <svg viewBox="0 0 380 320" width="100%" height="320" style="max-width: 420px; display: block; margin: auto;">
      <!-- Tutup Lingkaran -->
      <g>
        <circle cx="190" cy="50" r="40" fill="#EC4899" stroke="#1E1B4B" stroke-width="2.5" fill-opacity="0.9"/>
        <text x="190" y="55" font-family="Fredoka" font-size="12" fill="#fff" text-anchor="middle">Tutup Lingkaran</text>
      </g>
      <!-- Selimut Persegi Panjang -->
      <g>
        <rect x="65" y="98" width="250" height="110" rx="4" fill="#10B981" stroke="#1E1B4B" stroke-width="2.5" fill-opacity="0.9"/>
        <text x="190" y="150" font-family="Fredoka" font-size="14" font-weight="700" fill="#fff" text-anchor="middle">Selimut Tabung (Persegi Panjang)</text>
        <text x="190" y="172" font-family="Fredoka" font-size="11" fill="#E0E7FF" text-anchor="middle">Panjang = Keliling Lingkaran (2 &times; &pi; &times; r)</text>
      </g>
      <!-- Alas Lingkaran -->
      <g>
        <circle cx="190" cy="256" r="40" fill="#3B82F6" stroke="#1E1B4B" stroke-width="2.5" fill-opacity="0.9"/>
        <text x="190" y="261" font-family="Fredoka" font-size="12" fill="#fff" text-anchor="middle">Alas Lingkaran</text>
      </g>
    </svg>
  `;
}

function renderKerucutNetSVG(container) {
  container.innerHTML = `
    <svg viewBox="0 0 380 320" width="100%" height="320" style="max-width: 420px; display: block; margin: auto;">
      <!-- Juring Lingkaran (Selimut) -->
      <!-- Center (190, 40), Radius 160, angles from 45 to 135 deg -->
      <path d="M 190,40 L 80,180 A 160,160 0 0,0 300,180 Z" fill="#10B981" stroke="#1E1B4B" stroke-width="2.5" fill-opacity="0.9"/>
      <text x="190" y="130" font-family="Fredoka" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">Selimut Kerucut</text>
      <text x="190" y="150" font-family="Fredoka" font-size="11" fill="#EDE9FE" text-anchor="middle">(Bentuk Juring Lingkaran)</text>

      <!-- Alas Lingkaran -->
      <circle cx="190" cy="245" r="46" fill="#3B82F6" stroke="#1E1B4B" stroke-width="2.5" fill-opacity="0.9"/>
      <text x="190" y="250" font-family="Fredoka" font-size="12" font-weight="600" fill="#fff" text-anchor="middle">Alas Lingkaran</text>
    </svg>
  `;
}

function renderLimasNetSVG(container) {
  container.innerHTML = `
    <svg viewBox="0 0 380 320" width="100%" height="320" style="max-width: 420px; display: block; margin: auto;">
      <!-- Segitiga Atas -->
      <polygon points="190,20 145,115 235,115" fill="#10B981" stroke="#1E1B4B" stroke-width="2.5" fill-opacity="0.9"/>
      <!-- Segitiga Bawah -->
      <polygon points="190,300 145,205 235,205" fill="#10B981" stroke="#1E1B4B" stroke-width="2.5" fill-opacity="0.9"/>
      <!-- Segitiga Kiri -->
      <polygon points="50,160 145,115 145,205" fill="#10B981" stroke="#1E1B4B" stroke-width="2.5" fill-opacity="0.9"/>
      <!-- Segitiga Kanan -->
      <polygon points="330,160 235,115 235,205" fill="#10B981" stroke="#1E1B4B" stroke-width="2.5" fill-opacity="0.9"/>

      <!-- Alas Persegi Tengah -->
      <rect x="145" y="115" width="90" height="90" rx="4" fill="#3B82F6" stroke="#1E1B4B" stroke-width="2.5" fill-opacity="0.95"/>
      <text x="190" y="165" font-family="Fredoka" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">Alas Persegi</text>
    </svg>
  `;
}

function renderPrismaNetSVG(container) {
  container.innerHTML = `
    <svg viewBox="0 0 380 320" width="100%" height="320" style="max-width: 420px; display: block; margin: auto;">
      <!-- Segitiga Atas (Tutup) -->
      <polygon points="190,30 145,110 235,110" fill="#EC4899" stroke="#1E1B4B" stroke-width="2.5" fill-opacity="0.9"/>
      <text x="190" y="85" font-family="Fredoka" font-size="10" fill="#fff" text-anchor="middle">Tutup</text>

      <!-- 3 Persegi Panjang Tengah -->
      <!-- Kiri -->
      <rect x="55" y="110" width="90" height="95" rx="3" fill="#10B981" stroke="#1E1B4B" stroke-width="2.5" fill-opacity="0.9"/>
      <!-- Tengah -->
      <rect x="145" y="110" width="90" height="95" rx="3" fill="#10B981" stroke="#1E1B4B" stroke-width="2.5" fill-opacity="0.9"/>
      <text x="190" y="162" font-family="Fredoka" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">Sisi Tegak</text>
      <!-- Kanan -->
      <rect x="235" y="110" width="90" height="95" rx="3" fill="#10B981" stroke="#1E1B4B" stroke-width="2.5" fill-opacity="0.9"/>

      <!-- Segitiga Bawah (Alas) -->
      <polygon points="190,285 145,205 235,205" fill="#3B82F6" stroke="#1E1B4B" stroke-width="2.5" fill-opacity="0.9"/>
      <text x="190" y="240" font-family="Fredoka" font-size="10" fill="#fff" text-anchor="middle">Alas</text>
    </svg>
  `;
}

// --- INTERACTIVE CALCULATOR ENGINE ---
const CALC_SHAPES = {
  kubus: {
    sliders: [
      { id: 'sisi', name: 'Panjang Rusuk (s)', min: 1, max: 20, val: 5, unit: 'cm' }
    ],
    calc: (v) => {
      const s = v.sisi;
      const vol = s * s * s;
      const area = 6 * s * s;
      return {
        volFormula: "V = s &times; s &times; s",
        volSteps: `V = ${s} &times; ${s} &times; ${s}`,
        volTotal: vol,
        areaFormula: "L = 6 &times; s&sup2;",
        areaSteps: `L = 6 &times; (${s} &times; ${s}) = 6 &times; ${s * s}`,
        areaTotal: area,
        fact: `Volume ${vol.toLocaleString('id-ID')} cm&sup3; setara dengan ${vol} ml air ${vol >= 1000 ? `(${(vol/1000).toFixed(1)} Liter!)` : '(sekitar setengah gelas)'}.`
      };
    }
  },
  balok: {
    sliders: [
      { id: 'panjang', name: 'Panjang (p)', min: 2, max: 20, val: 8, unit: 'cm' },
      { id: 'lebar', name: 'Lebar (l)', min: 2, max: 15, val: 5, unit: 'cm' },
      { id: 'tinggi', name: 'Tinggi (t)', min: 2, max: 15, val: 4, unit: 'cm' }
    ],
    calc: (v) => {
      const { panjang: p, lebar: l, tinggi: t } = v;
      const vol = p * l * t;
      const pl = p * l, pt = p * t, lt = l * t;
      const area = 2 * (pl + pt + lt);
      return {
        volFormula: "V = p &times; l &times; t",
        volSteps: `V = ${p} &times; ${l} &times; ${t}`,
        volTotal: vol,
        areaFormula: "L = 2 &times; (p&sdot;l + p&sdot;t + l&sdot;t)",
        areaSteps: `L = 2 &times; (${pl} + ${pt} + ${lt}) = 2 &times; ${pl + pt + lt}`,
        areaTotal: area,
        fact: `Kotak ini berukuran ${p}&times;${l}&times;${t} cm, bisa memuat isi hingga ${vol.toLocaleString('id-ID')} cm&sup3;!`
      };
    }
  },
  tabung: {
    sliders: [
      { id: 'jari', name: 'Jari-jari Alas (r)', min: 1, max: 14, val: 7, unit: 'cm' },
      { id: 'tinggi', name: 'Tinggi Tabung (t)', min: 2, max: 25, val: 10, unit: 'cm' }
    ],
    calc: (v) => {
      const { jari: r, tinggi: t } = v;
      const pi = (r % 7 === 0) ? (22 / 7) : 3.14;
      const piStr = (r % 7 === 0) ? "22/7" : "3,14";
      const vol = Math.round(pi * r * r * t);
      const area = Math.round(2 * pi * r * (r + t));
      return {
        volFormula: "V = &pi; &times; r&sup2; &times; t",
        volSteps: `V = ${piStr} &times; ${r}&sup2; &times; ${t}`,
        volTotal: vol,
        areaFormula: "L = 2 &times; &pi; &times; r &times; (r + t)",
        areaSteps: `L = 2 &times; ${piStr} &times; ${r} &times; (${r} + ${t})`,
        areaTotal: area,
        fact: `Bentuk kaleng ini dapat menampung cairan sebanyak ${vol.toLocaleString('id-ID')} ml!`
      };
    }
  },
  kerucut: {
    sliders: [
      { id: 'jari', name: 'Jari-jari Alas (r)', min: 2, max: 14, val: 7, unit: 'cm' },
      { id: 'tinggi', name: 'Tinggi Kerucut (t)', min: 3, max: 24, val: 9, unit: 'cm' }
    ],
    calc: (v) => {
      const { jari: r, tinggi: t } = v;
      const pi = (r % 7 === 0) ? (22 / 7) : 3.14;
      const piStr = (r % 7 === 0) ? "22/7" : "3,14";
      const vol = Math.round((1 / 3) * pi * r * r * t);
      // Garis pelukis s
      const s = Math.round(Math.sqrt(r * r + t * t) * 10) / 10;
      const area = Math.round(pi * r * (r + s));
      return {
        volFormula: "V = 1/3 &times; &pi; &times; r&sup2; &times; t",
        volSteps: `V = 1/3 &times; ${piStr} &times; ${r}&sup2; &times; ${t}`,
        volTotal: vol,
        areaFormula: `L = &pi;r(r + s) &nbsp;[s = &radic;(r&sup2;+t&sup2;) &approx; ${s} cm]`,
        areaSteps: `L = ${piStr} &times; ${r} &times; (${r} + ${s})`,
        areaTotal: area,
        fact: `Cone es krim dengan tinggi ${t} cm ini dapat menampung es krim lezat hingga ${vol} cm&sup3;!`
      };
    }
  },
  bola: {
    sliders: [
      { id: 'jari', name: 'Jari-jari Bola (r)', min: 2, max: 14, val: 7, unit: 'cm' }
    ],
    calc: (v) => {
      const r = v.jari;
      const pi = (r % 7 === 0) ? (22 / 7) : 3.14;
      const piStr = (r % 7 === 0) ? "22/7" : "3,14";
      const vol = Math.round((4 / 3) * pi * r * r * r);
      const area = Math.round(4 * pi * r * r);
      return {
        volFormula: "V = 4/3 &times; &pi; &times; r&sup3;",
        volSteps: `V = 4/3 &times; ${piStr} &times; ${r}&sup3;`,
        volTotal: vol,
        areaFormula: "L = 4 &times; &pi; &times; r&sup2;",
        areaSteps: `L = 4 &times; ${piStr} &times; ${r}&sup2;`,
        areaTotal: area,
        fact: `Bola dengan diameter ${r * 2} cm ini memiliki volume ${vol.toLocaleString('id-ID')} cm&sup3;!`
      };
    }
  }
};

let currentCalcShape = 'kubus';

function buildCalcSliders(shapeKey) {
  currentCalcShape = shapeKey;
  const config = CALC_SHAPES[shapeKey];
  const container = document.getElementById('dynamicSliders');
  container.innerHTML = '';

  config.sliders.forEach(s => {
    const item = document.createElement('div');
    item.className = 'slider-item';
    item.innerHTML = `
      <div class="slider-label-row">
        <span>${s.name}</span>
        <span class="slider-val-badge" id="badge_${s.id}">${s.val} ${s.unit}</span>
      </div>
      <input type="range" class="custom-range" id="input_${s.id}" min="${s.min}" max="${s.max}" value="${s.val}">
    `;
    container.appendChild(item);

    const input = item.querySelector(`#input_${s.id}`);
    input.addEventListener('input', () => {
      document.getElementById(`badge_${s.id}`).textContent = `${input.value} ${s.unit}`;
      updateCalculations();
    });
  });

  updateCalculations();
}

function updateCalculations() {
  const config = CALC_SHAPES[currentCalcShape];
  const values = {};
  config.sliders.forEach(s => {
    const input = document.getElementById(`input_${s.id}`);
    values[s.id] = parseFloat(input.value);
  });

  const res = config.calc(values);
  document.getElementById('calcVolFormula').innerHTML = res.volFormula;
  document.getElementById('calcVolSteps').innerHTML = res.volSteps;
  document.getElementById('calcVolTotal').innerHTML = `${res.volTotal.toLocaleString('id-ID')} <span class="unit">cm&sup3;</span>`;

  document.getElementById('calcAreaFormula').innerHTML = res.areaFormula;
  document.getElementById('calcAreaSteps').innerHTML = res.areaSteps;
  document.getElementById('calcAreaTotal').innerHTML = `${res.areaTotal.toLocaleString('id-ID')} <span class="unit">cm&sup2;</span>`;

  document.getElementById('capacityComparison').innerHTML = res.fact;
}

function applyPreset(level) {
  sfx.playPop();
  const config = CALC_SHAPES[currentCalcShape];
  config.sliders.forEach(s => {
    const input = document.getElementById(`input_${s.id}`);
    if (level === 'kecil') {
      input.value = s.min + 1;
    } else if (level === 'sedang') {
      input.value = Math.round((s.min + s.max) / 2);
    } else if (level === 'besar') {
      input.value = s.max - 2;
    }
    document.getElementById(`badge_${s.id}`).textContent = `${input.value} ${s.unit}`;
  });
  updateCalculations();
}


// =========================================================================
// --- AI CAMERA BANGUN RUANG SCANNER MODULE ---
// =========================================================================
let aiVisionModel = null;
let isAiModelLoading = false;
let cocoDetectorModel = null;
let isCocoModelLoading = false;
let cameraMediaStream = null;
let currentCameraFacing = 'environment'; // Back camera default for scanning objects
let lastDetectedShapeKey = 'kubus';
let lastDetectedRealWorldId = 'dadu';
let lastCaptureTimestamp = 0;
let currentScanSessionId = 0;
let isCurrentlyScanning = false;

// Sizing modes for camera reticle frame
const FRAME_SIZING_MODES = [
  { mode: 'mode-wide', label: 'Kotak Luas (Besar)', icon: 'fa-expand' },
  { mode: 'mode-square', label: 'Kotak Persegi', icon: 'fa-square' },
  { mode: 'mode-tall', label: 'Kotak Tinggi (Silinder)', icon: 'fa-arrows-up-down' }
];
let currentFrameModeIndex = 0;

// Keyword mappings between ImageNet / Common Names and Indonesian Elementary Bangun Ruang
// ========================================================
// ADVANCED HYBRID AI & COMPUTER VISION SHAPE DETECTOR
// Multi-Signal: Deep Learning (MobileNet v2) + Geometric Contour Analysis
// ========================================================

let currentDetectionTargetGroup = 'all'; // 'all' | 'lengkung' | 'kotak'
let aiModelLoadingPromise = null;

function setDetectionTargetGroup(group) {
  sfx.playPop();
  currentDetectionTargetGroup = group;
  document.querySelectorAll('.mode-chip').forEach(chip => {
    chip.classList.toggle('active', chip.getAttribute('data-target-group') === group);
  });
}

function updateAiModelStatusUI(status) {
  const badge = document.getElementById('aiModelStatusBadge');
  if (!badge) return;
  // Built-in High Precision Shape Detector is always 100% active and ready immediately
  badge.className = 'ai-status-badge ready';
  badge.innerHTML = '<i class="fa-solid fa-brain text-emerald"></i> <span>Model Pendeteksi Aktif</span>';
}

// High-Precision Semantic & Geometric Taxonomy for ImageNet 1,000 Classes
const SHAPE_AI_RULES = [
  // --- BALOK (Prisma Segiempat / Kotak Panjang / TV / Elektronik / Buku) ---
  {
    shape: 'balok',
    regex: /\b(television|tv|monitor|crt screen|screen|desktop computer|laptop|notebook computer|hand-held computer|home theater|entertainment center)\b/i,
    defaultName: 'Televisi / Layar Monitor',
    weight: 96
  },
  {
    shape: 'balok',
    regex: /\b(cellular telephone|cellphone|mobile phone|remote control|remote|radio|cassette|loudspeaker|speaker|computer keyboard)\b/i,
    defaultName: 'Ponsel / Remote / Elektronik',
    weight: 88
  },
  {
    shape: 'balok',
    regex: /\b(book|comic book|binder|notebook|hardback|paperback|bookcase|envelope|packet)\b/i,
    defaultName: 'Buku Paket / Modul Bacaan',
    weight: 88
  },
  {
    shape: 'balok',
    regex: /\b(carton|crate|shoe box|shoebox|pencil box|pencil case|matchbox|filing cabinet|china cabinet|wardrobe|chest|dresser|cupboard|medicine chest|refrigerator|microwave)\b/i,
    defaultName: 'Kardus / Kotak Balok',
    weight: 92
  },
  {
    shape: 'balok',
    regex: /\b(soap dispenser|sponge|eraser|mattress|pillow|brick|doormat)\b/i,
    defaultName: 'Penghapus / Spons Balok',
    weight: 82
  },
  {
    shape: 'balok',
    regex: /\b(modem|router|switch|set-top box|decoder|power adapter|wall socket)\b/i,
    defaultName: 'Modem / Router Kotak',
    weight: 94
  },

  // --- KUBUS (Kubus Persegi Sama Sisi 1:1) ---
  {
    shape: 'kubus',
    regex: /\b(die|dice|cube|rubik|magic cube|toy block|alphabet block|wooden block|ice cube|sugar cube|puzzle box|safe)\b/i,
    defaultName: 'Dadu / Kotak Kubus Rubik',
    weight: 95
  },

  // --- TABUNG (Silinder Melingkar / Botol / Kaleng) ---
  {
    shape: 'tabung',
    regex: /\b(bottle|beer bottle|wine bottle|pop bottle|water bottle|soda bottle|pill bottle|thermos|tumbler)\b/i,
    defaultName: 'Botol Minum Silinder',
    weight: 95
  },
  {
    shape: 'tabung',
    regex: /\b(can|tin can|pop can|soda can|beer can|milk can|canister)\b/i,
    exclude: /\b(opener|toucan|american|african)\b/i,
    defaultName: 'Kaleng Minuman / Susu',
    weight: 95
  },
  {
    shape: 'tabung',
    regex: /\b(coffee mug|mug|cup|measuring cup|beaker|flask|cylinder|tube|pipe|spray can|aerosol|hair spray|roll|paper towel|toilet paper|candle|battery|drum|barrel|oil drum|bucket|pail|vase|cocktail shaker|coffeepot|teapot)\b/i,
    defaultName: 'Gelas / Wadah Silinder',
    weight: 88
  },
  {
    shape: 'tabung',
    regex: /\b(electric fan|blower|fan|wall fan|ceiling fan|ventilator)\b/i,
    defaultName: 'Kipas Angin Bulat (Silinder)',
    weight: 92
  },
  {
    shape: 'tabung',
    regex: /\b(wall clock|analog clock|digital clock|clock)\b/i,
    defaultName: 'Jam Dinding Bulat (Silinder)',
    weight: 92
  },

  // --- KERUCUT (Kerucut Lancip / Cone) ---
  {
    shape: 'kerucut',
    regex: /\b(ice cream|icecream|traffic cone|party hat|dunce cap|funnel|conical|megaphone|cornet)\b/i,
    defaultName: 'Es Krim Cone / Topi Kerucut',
    weight: 96
  },

  // --- BOLA (Bulatan Sempurna / Bola Olahraga) ---
  {
    shape: 'bola',
    regex: /\b(ball|soccer ball|football|basketball|tennis ball|volleyball|golf ball|baseball|ping-pong ball|rugby ball|bowling ball|croquet ball)\b/i,
    exclude: /\b(helmet|player|glove|bat)\b/i,
    defaultName: 'Bola Olahraga Bulat',
    weight: 95
  },
  {
    shape: 'bola',
    regex: /\b(globe|orange|lemon|apple|grapefruit|pomegranate|melon|watermelon|balloon|marble|sphere|bubble)\b/i,
    defaultName: 'Bola / Buah Bulat',
    weight: 90
  },

  // --- PRISMA (Prisma Segitiga / Tenda / Wedge) ---
  {
    shape: 'prisma',
    regex: /\b(tent|mountain tent|ridge tent|dome tent|camping tent|wedge|cheese wedge|sandwich|toblerone|triangular prism)\b/i,
    defaultName: 'Tenda Kemah (Prisma)',
    weight: 95
  },

  // --- LIMAS (Limas Piramida Segiempat) ---
  {
    shape: 'limas',
    regex: /\b(pyramid|obelisk|steeple|church steeple|apex|tetrahedron)\b/i,
    defaultName: 'Piramida / Limas Segiempat',
    weight: 95
  }
];

// High-Precision Semantic Mapping for GitHub COCO-SSD Real-World Objects
const COCO_SHAPE_MAPPINGS = {
  // --- BALOK (Prisma Segiempat / Kotak Panjang / Flat Screens / Perabot) ---
  tv: { shape: 'balok', name: 'Televisi / Layar Monitor', realId: 'sepatu', boost: 98 },
  laptop: { shape: 'balok', name: 'Laptop / Komputer Jinjing', realId: 'sepatu', boost: 98 },
  'cell phone': { shape: 'balok', name: 'Smartphone / Ponsel Pintar', realId: 'sepatu', boost: 97 },
  book: { shape: 'balok', name: 'Buku Pelajaran / Kotak Berkas', realId: 'sepatu', boost: 98 },
  microwave: { shape: 'balok', name: 'Microwave / Oven Mini', realId: 'sepatu', boost: 96 },
  refrigerator: { shape: 'balok', name: 'Kulkas / Lemari Pendingin', realId: 'sepatu', boost: 97 },
  oven: { shape: 'balok', name: 'Oven Dapur Balok', realId: 'sepatu', boost: 95 },
  toaster: { shape: 'balok', name: 'Pemanggang Roti (Toaster)', realId: 'sepatu', boost: 95 },
  suitcase: { shape: 'balok', name: 'Koper Pakaian Kotak', realId: 'sepatu', boost: 97 },
  backpack: { shape: 'balok', name: 'Tas Ransel Sekolah', realId: 'sepatu', boost: 94 },
  bed: { shape: 'balok', name: 'Tempat Tidur / Kasur Balok', realId: 'sepatu', boost: 95 },
  couch: { shape: 'balok', name: 'Sofa / Kursi Balok Panjang', realId: 'sepatu', boost: 94 },
  'dining table': { shape: 'balok', name: 'Meja Persegi Panjang', realId: 'sepatu', boost: 95 },
  keyboard: { shape: 'balok', name: 'Papan Ketik (Keyboard)', realId: 'sepatu', boost: 96 },
  remote: { shape: 'balok', name: 'Remote TV Balok Panjang', realId: 'sepatu', boost: 96 },
  car: { shape: 'balok', name: 'Mobil / Kendaraan Kotak', realId: 'sepatu', boost: 94 },
  bus: { shape: 'balok', name: 'Bus / Kendaraan Balok Panjang', realId: 'sepatu', boost: 96 },
  train: { shape: 'balok', name: 'Gerbong Kereta Balok', realId: 'sepatu', boost: 96 },
  truck: { shape: 'balok', name: 'Truk Kontainer Balok', realId: 'sepatu', boost: 97 },

  // --- TABUNG (Silinder / Botol / Cangkir / Kaleng / Gelas) ---
  bottle: { shape: 'tabung', name: 'Botol Minuman (Tabung Silinder)', realId: 'kaleng', boost: 98 },
  cup: { shape: 'tabung', name: 'Cangkir / Gelas Minum (Silinder)', realId: 'kaleng', boost: 97 },
  'wine glass': { shape: 'tabung', name: 'Gelas Kaca Silinder', realId: 'kaleng', boost: 95 },
  bowl: { shape: 'tabung', name: 'Mangkuk / Wadah Lengkung', realId: 'kaleng', boost: 92 },
  vase: { shape: 'tabung', name: 'Vas Bunga Silinder', realId: 'kaleng', boost: 94 },
  clock: { shape: 'tabung', name: 'Jam Dinding Bulat / Silinder', realId: 'kaleng', boost: 92 },
  pottedplant: { shape: 'tabung', name: 'Pot Tanaman Silinder', realId: 'kaleng', boost: 90 },

  // --- BOLA (Sphere / Bola Olahraga / Bulat Sempurna) ---
  'sports ball': { shape: 'bola', name: 'Bola Olahraga (Bulat Sempurna)', realId: 'bola_sepak', boost: 99 },
  apple: { shape: 'bola', name: 'Buah Apel (Bentuk Bola)', realId: 'bola_sepak', boost: 95 },
  orange: { shape: 'bola', name: 'Buah Jeruk (Bentuk Bola)', realId: 'bola_sepak', boost: 96 },
  frisbee: { shape: 'bola', name: 'Piringan Cakram Bulat', realId: 'bola_sepak', boost: 90 }
};

// Asynchronously load GitHub AI Models (COCO-SSD & MobileNet) in background while Built-in CV is always 100% ready
function initAIVisionModel() {
  // Built-in High-Speed Geometric Computer Vision is ALWAYS 100% ready immediately
  updateAiModelStatusUI('ready');

  // 1. Initialize GitHub COCO-SSD Object Detector
  if (typeof cocoSsd !== 'undefined' && !cocoDetectorModel && !isCocoModelLoading) {
    isCocoModelLoading = true;
    cocoSsd.load({ base: 'lite_mobilenet_v2' })
      .then(model => {
        cocoDetectorModel = model;
        isCocoModelLoading = false;
        console.log('GitHub COCO-SSD Object Detection Model Ready!');
        updateAiModelStatusUI('ready');
      })
      .catch(err => {
        console.log('COCO-SSD background load note (Built-in detector active):', err.message);
        isCocoModelLoading = false;
      });
  }

  // 2. Initialize MobileNet as auxiliary classifier
  if (typeof mobilenet !== 'undefined' && !aiVisionModel && !isAiModelLoading) {
    isAiModelLoading = true;
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('MobileNet CDN timeout')), 1500)
    );

    Promise.race([mobilenet.load(), timeoutPromise])
      .then(model => {
        aiVisionModel = model;
        isAiModelLoading = false;
        console.log('MobileNet AI Model Connected Successfully!');
      })
      .catch(err => {
        isAiModelLoading = false;
      });
  }

  return Promise.resolve(true);
}

async function startCameraScanner() {
  sfx.playPop();
  const video = document.getElementById('cameraVideo');
  const dot = document.getElementById('camStatusDot');
  const statusText = document.getElementById('camStatusText');
  const hud = document.getElementById('scannerHudOverlay');
  const placeholder = document.getElementById('cameraOffPlaceholder');
  const toggleBtn = document.getElementById('toggleCameraBtn');
  const scanBtn = document.getElementById('captureScanBtn');

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert('Perangkat atau browser ini tidak mendukung akses kamera langsung. Silakan gunakan tombol "Pilih Foto Galeri" atau "Uji Coba Cepat".');
    return;
  }

  try {
    if (cameraMediaStream) {
      stopCameraScanner();
    }

    statusText.textContent = 'Menghubungkan ke kamera...';

    const constraints = {
      video: {
        facingMode: currentCameraFacing,
        width: { ideal: 1280 },
        height: { ideal: 720 }
      },
      audio: false
    };

    cameraMediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = cameraMediaStream;
    await video.play();

    // Update UI states
    const viewport = document.querySelector('.viewfinder-viewport');
    if (viewport) viewport.classList.add('is-active');
    if (dot) dot.classList.add('active');
    if (statusText) statusText.textContent = 'Kamera Aktif • Ketuk Layar / Shutter untuk Jepret Foto';


    if (hud) hud.classList.remove('hidden');
    if (placeholder) placeholder.classList.add('hidden');
    if (scanBtn) scanBtn.classList.remove('hidden');
    if (toggleBtn) {
      toggleBtn.innerHTML = '<i class="fa-solid fa-video-slash"></i> <span>Tutup Kamera</span>';
      toggleBtn.classList.remove('primary-btn');
      toggleBtn.classList.add('secondary-btn');
    }

    // Warm up AI model
    initAIVisionModel();

  } catch (err) {
    console.error('Camera access error:', err);
    if (statusText) statusText.textContent = 'Kamera Tidak Tersedia';
    alert('Tidak dapat mengakses kamera. Pastikan izin kamera telah diberikan di browser, atau coba tombol "Pilih Foto Galeri" / "Uji Coba Cepat".');
  }
}

// Stop device camera to save battery
function stopCameraScanner() {
  if (cameraMediaStream) {
    cameraMediaStream.getTracks().forEach(track => track.stop());
    cameraMediaStream = null;
  }

  const video = document.getElementById('cameraVideo');
  if (video) video.srcObject = null;

  const viewport = document.querySelector('.viewfinder-viewport');
  if (viewport) viewport.classList.remove('is-active');


  const dot = document.getElementById('camStatusDot');
  const statusText = document.getElementById('camStatusText');
  const hud = document.getElementById('scannerHudOverlay');
  const placeholder = document.getElementById('cameraOffPlaceholder');
  const toggleBtn = document.getElementById('toggleCameraBtn');
  const scanBtn = document.getElementById('captureScanBtn');

  if (dot) dot.classList.remove('active');
  if (statusText) statusText.textContent = 'Kamera Dimatikan';
  if (hud) hud.classList.add('hidden');
  if (placeholder) placeholder.classList.remove('hidden');
  if (scanBtn) scanBtn.classList.add('hidden');

  if (toggleBtn) {
    toggleBtn.innerHTML = '<i class="fa-solid fa-video"></i> <span>Buka Kamera</span>';
    toggleBtn.classList.remove('secondary-btn');
    toggleBtn.classList.add('primary-btn');
  }
}

function toggleCamera() {
  if (cameraMediaStream) {
    sfx.playPop();
    stopCameraScanner();
  } else {
    startCameraScanner();
  }
}

function switchCameraFacing() {
  sfx.playPop();
  currentCameraFacing = currentCameraFacing === 'environment' ? 'user' : 'environment';
  if (cameraMediaStream) {
    startCameraScanner();
  }
}

// Toggle detection box aspect / size
function cycleFrameSize() {
  sfx.playPop();
  currentFrameModeIndex = (currentFrameModeIndex + 1) % FRAME_SIZING_MODES.length;
  const current = FRAME_SIZING_MODES[currentFrameModeIndex];
  const frame = document.querySelector('.scanner-frame');
  const label = document.getElementById('frameSizeLabel');

  if (frame) {
    frame.classList.remove('mode-wide', 'mode-square', 'mode-tall');
    if (current.mode !== 'mode-wide') {
      frame.classList.add(current.mode);
    }
  }
  if (label) {
    label.textContent = current.label;
  }
}

// Calculate exact sub-rectangle in the video stream corresponding to the reticle frame
function getFrameCropCoordinates(video, frameEl, viewportEl) {
  const vw = video.videoWidth || 1280;
  const vh = video.videoHeight || 720;
  if (!frameEl || !viewportEl) {
    return { sx: 0, sy: 0, sw: vw, sh: vh };
  }

  const vpRect = viewportEl.getBoundingClientRect();
  const fRect = frameEl.getBoundingClientRect();

  if (vpRect.width <= 0 || vpRect.height <= 0 || fRect.width <= 0 || fRect.height <= 0) {
    return { sx: 0, sy: 0, sw: vw, sh: vh };
  }

  // Handle CSS object-fit: cover scaling
  const videoAspect = vw / vh;
  const vpAspect = vpRect.width / vpRect.height;

  let renderW, renderH, offsetX, offsetY;
  if (videoAspect > vpAspect) {
    // Video is wider than viewport -> cropped horizontally
    renderH = vpRect.height;
    renderW = vpRect.height * videoAspect;
    offsetX = (renderW - vpRect.width) / 2;
    offsetY = 0;
  } else {
    // Video is taller than viewport -> cropped vertically
    renderW = vpRect.width;
    renderH = vpRect.width / videoAspect;
    offsetX = 0;
    offsetY = (renderH - vpRect.height) / 2;
  }

  // Frame position in rendered video coordinate space
  const frameInRenderX = (fRect.left - vpRect.left) + offsetX;
  const frameInRenderY = (fRect.top - vpRect.top) + offsetY;

  // Scale back to intrinsic video pixel coordinates
  const scale = vw / renderW;
  const sx = Math.max(0, Math.floor(frameInRenderX * scale));
  const sy = Math.max(0, Math.floor(frameInRenderY * scale));
  const sw = Math.min(vw - sx, Math.max(20, Math.floor(fRect.width * scale)));
  const sh = Math.min(vh - sy, Math.max(20, Math.floor(fRect.height * scale)));

  return { sx, sy, sw, sh };
}

// Capture current frame from video (cropped precisely to reticle box) and run AI analysis
function captureAndScan() {
  const video = document.getElementById('cameraVideo');
  const canvas = document.getElementById('cameraCanvas');
  const frameEl = document.querySelector('.scanner-frame');
  const viewportEl = document.querySelector('.viewfinder-viewport');
  const flashEl = document.getElementById('shutterFlash');
  const captureBtn = document.getElementById('captureScanBtn');
  if (!video || !cameraMediaStream) return;

  // Anti-debounce guard: prevent double-clicks or touch/click ghost events (minimum 350ms cooldown)
  const now = Date.now();
  if (now - lastCaptureTimestamp < 350) {
    return;
  }
  lastCaptureTimestamp = now;

  // Increment unique scan session ID so obsolete/concurrent scans are cleanly discarded
  const scanSessionId = ++currentScanSessionId;
  isCurrentlyScanning = true;

  // Authentic SLR camera shutter sound & haptic vibration
  if (sfx.playShutter) sfx.playShutter();
  else sfx.playSuccess();

  // Instant visual camera shutter flash animation
  if (flashEl) {
    flashEl.classList.add('flash-active');
    setTimeout(() => {
      flashEl.classList.remove('flash-active');
    }, 120);
  }

  // Shutter button haptic active animation
  if (captureBtn) {
    captureBtn.classList.add('is-scanning');
    setTimeout(() => captureBtn.classList.remove('is-scanning'), 600);
  }

  // Frame crop calculation strictly inside reticle box
  const crop = getFrameCropCoordinates(video, frameEl, viewportEl);

  // 1. Explicitly clear and draw to main canvas (guarantees zero residual pixels from previous photos)
  canvas.width = crop.sw;
  canvas.height = crop.sh;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, crop.sw, crop.sh);
  ctx.drawImage(video, crop.sx, crop.sy, crop.sw, crop.sh, 0, 0, crop.sw, crop.sh);

  // 2. Create isolated immutable snapshot canvas for AI analysis (guarantees zero crosstalk across rapid scans)
  const snapshotCanvas = document.createElement('canvas');
  snapshotCanvas.width = crop.sw;
  snapshotCanvas.height = crop.sh;
  const snapCtx = snapshotCanvas.getContext('2d');
  snapCtx.drawImage(video, crop.sx, crop.sy, crop.sw, crop.sh, 0, 0, crop.sw, crop.sh);
  const snapDataUrl = snapshotCanvas.toDataURL('image/jpeg', 0.92);

  // Play scanning HUD laser animation
  const hud = document.getElementById('scannerHudOverlay');
  if (hud) {
    hud.classList.add('scanning-active');
    setTimeout(() => hud.classList.remove('scanning-active'), 800);
  }

  // 3. Instant UI Reset: Immediately update thumbnail with NEW photo and show loading state
  // to give user 100% immediate visual confirmation that the previous photo has been replaced
  const resultCard = document.getElementById('detectionResultCard');
  const thumbImg = document.getElementById('scannedThumbImg');
  const titleEl = document.getElementById('detectedShapeTitle');
  const objLabelEl = document.getElementById('detectedObjectLabel');
  const confPctEl = document.getElementById('confidencePctLabel');
  const confBarEl = document.getElementById('confidenceBarFill');
  const candBox = document.getElementById('detectionCandidateChips');

  if (thumbImg) thumbImg.src = snapDataUrl;
  if (titleEl) titleEl.innerHTML = '<span style="color:#0284C7; font-size:1.35rem; display:inline-flex; align-items:center; gap:0.5rem;"><i class="fa-solid fa-spinner fa-spin"></i> AI Menganalisis Foto Baru...</span>';
  if (objLabelEl) objLabelEl.textContent = 'Memindai citra kamera secara real-time...';
  if (confPctEl) confPctEl.textContent = '...%';
  if (confBarEl) confBarEl.style.width = '35%';
  if (candBox) candBox.innerHTML = '';
  if (resultCard) {
    resultCard.classList.add('is-analyzing');
    if (resultCard.classList.contains('hidden')) {
      resultCard.classList.remove('hidden');
    }
  }

  // 4. Run AI analysis with fresh snapshot & session ID
  analyzeImageFrame(snapshotCanvas, snapDataUrl, scanSessionId);
}

// Handle image upload from gallery / disk
function handleImageFileUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  sfx.playSuccess();
  const reader = new FileReader();
  reader.onload = function(event) {
    const img = new Image();
    img.onload = function() {
      const scanSessionId = ++currentScanSessionId;
      isCurrentlyScanning = true;

      const canvas = document.getElementById('cameraCanvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      // Instant UI transition
      const resultCard = document.getElementById('detectionResultCard');
      const thumbImg = document.getElementById('scannedThumbImg');
      const titleEl = document.getElementById('detectedShapeTitle');
      const objLabelEl = document.getElementById('detectedObjectLabel');
      const confPctEl = document.getElementById('confidencePctLabel');
      const confBarEl = document.getElementById('confidenceBarFill');
      const candBox = document.getElementById('detectionCandidateChips');

      if (thumbImg) thumbImg.src = img.src;
      if (titleEl) titleEl.innerHTML = '<span style="color:#0284C7; font-size:1.35rem; display:inline-flex; align-items:center; gap:0.5rem;"><i class="fa-solid fa-spinner fa-spin"></i> AI Menganalisis Berkas Foto...</span>';
      if (objLabelEl) objLabelEl.textContent = 'Memindai citra yang diunggah...';
      if (confPctEl) confPctEl.textContent = '...%';
      if (confBarEl) confBarEl.style.width = '35%';
      if (candBox) candBox.innerHTML = '';
      if (resultCard) {
        resultCard.classList.add('is-analyzing');
        resultCard.classList.remove('hidden');
      }

      analyzeImageFrame(canvas, img.src, scanSessionId);
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
}

// Test sample object preset button
function testSampleObject(sampleKey) {
  sfx.playSuccess();
  const canvas = document.getElementById('cameraCanvas');
  canvas.width = 400;
  canvas.height = 400;
  const ctx = canvas.getContext('2d');

  // Draw simulated graphic on canvas
  ctx.fillStyle = '#1E1B4B';
  ctx.fillRect(0, 0, 400, 400);

  // Preset dictionary mapping
  const presets = {
    dadu: { shape: 'kubus', name: 'Dadu Permainan', realId: 'dadu', icon: '🎲', color: '#EF4444' },
    sepatu: { shape: 'balok', name: 'Kotak Sepatu', realId: 'sepatu', icon: '📦', color: '#3B82F6' },
    kaleng: { shape: 'tabung', name: 'Kaleng Susu', realId: 'kaleng', icon: '🥫', color: '#10B981' },
    es_krim: { shape: 'kerucut', name: 'Cone Es Krim', realId: 'es_krim', icon: '🍦', color: '#F59E0B' },
    bola_sepak: { shape: 'bola', name: 'Bola Sepak', realId: 'bola_sepak', icon: '⚽', color: '#8B5CF6' },
    tenda: { shape: 'prisma', name: 'Tenda Berkemah', realId: 'tenda', icon: '⛺', color: '#06B6D4' },
    piramida: { shape: 'limas', name: 'Piramida Giza', realId: 'piramida', icon: '🔺', color: '#F97316' }
  };

  const item = presets[sampleKey] || presets.dadu;

  // Render stylized visual on canvas
  ctx.fillStyle = item.color;
  ctx.beginPath();
  ctx.arc(200, 200, 120, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = '90px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(item.icon, 200, 200);

  const dataUrl = canvas.toDataURL('image/jpeg', 0.9);

  // Present result directly with 97% accuracy
  displayDetectionResult({
    shapeKey: item.shape,
    objectName: item.name,
    realWorldId: item.realId,
    confidence: 97,
    imageSrc: dataUrl
  });
}

// AI Analysis: Hybrid Deep Learning (MobileNet top-10) + Scientific Geometric Vision Analyzer

// Universal Real-World Semantic & Geometric Classifier for 1,000+ Everyday Objects
function classifyRealWorldObject(className) {
  if (!className) return { shape: 'balok', name: 'Benda Kotak / Balok' };
  const lower = className.toLowerCase();

  // 1. Animals / Biological / Organic Forms
  if (/dog|terrier|hound|retriever|poodle|shepherd|spaniel|bulldog|husky|cat|tabby|siamese|persian|cougar|lynx|leopard|jaguar|lion|tiger|bird|finch|sparrow|eagle|hawk|owl|pelican|toucan|duck|goose|swan|fish|shark|whale|ray|carp|goldfish|salmon|trout|snake|lizard|turtle|alligator|crocodile|frog|toad|spider|beetle|butterfly|moth|ant|fly|bee|wasp|bear|wolf|fox|deer|rabbit|monkey|gorilla|chimpanzee|elephant/i.test(lower)) {
    return {
      shape: 'bola',
      isOrganic: true,
      name: 'Makhluk Hidup / Hewan (Bentuk Organik Alami)'
    };
  }

  // 2. Cones (Kerucut)
  if (/\b(cone|ice cream|icecream|party hat|dunce cap|funnel|conical|megaphone|cornet|sorbet)\b/i.test(lower)) {
    let n = 'Cone / Kerucut';
    if (/ice cream|icecream/i.test(lower)) n = 'Es Krim Cone';
    else if (/funnel/i.test(lower)) n = 'Corong Kerucut';
    else if (/party hat/i.test(lower)) n = 'Topi Pesta Kerucut';
    else if (/traffic cone/i.test(lower)) n = 'Traffic Cone (Kerucut Lalu Lintas)';
    return { shape: 'kerucut', name: n };
  }

  // 3. Spheres & Balls (Bola)
  if (/\b(ball|soccer ball|football|basketball|tennis ball|volleyball|golf ball|baseball|ping-pong ball|rugby ball|bowling ball|croquet ball|billiard ball|pool ball|cricket ball)\b/i.test(lower) && !/\b(helmet|glove|bat|player)\b/i.test(lower)) {
    return { shape: 'bola', name: 'Bola Olahraga Bulat' };
  }
  if (/\b(globe|balloon|hot-air balloon|marble|sphere|bubble|orb)\b/i.test(lower)) {
    let n = 'Bola / Bulatan Sempurna';
    if (/globe/i.test(lower)) n = 'Globe (Bola Dunia)';
    else if (/balloon/i.test(lower)) n = 'Balon Bulat';
    return { shape: 'bola', name: n };
  }
  if (/\b(orange|lemon|apple|grapefruit|pomegranate|melon|watermelon|cantaloupe|honeydew|coconut|fig|jackfruit|strawberry|tomato|cabbage|onion|egg)\b/i.test(lower)) {
    return { shape: 'bola', name: 'Buah / Benda Bulat' };
  }

  // 4. Pyramids (Limas)
  if (/\b(pyramid|obelisk|steeple|church steeple|apex|tetrahedron)\b/i.test(lower)) {
    let n = 'Piramida / Obelisk (Limas Segiempat)';
    if (/obelisk/i.test(lower)) n = 'Tugu Obelisk (Limas)';
    return { shape: 'limas', name: n };
  }

  // 5. Triangular Prisms (Prisma Segitiga)
  if (/\b(tent|mountain tent|ridge tent|dome tent|camping tent|wedge|cheese wedge|sandwich|toblerone|triangular prism|doorstop|gable)\b/i.test(lower)) {
    let n = 'Tenda / Prisma Segitiga';
    if (/tent/i.test(lower)) n = 'Tenda Kemah (Prisma Segitiga)';
    else if (/sandwich/i.test(lower)) n = 'Roti Sandwich Segitiga (Prisma)';
    else if (/toblerone/i.test(lower)) n = 'Cokelat Toblerone (Prisma)';
    return { shape: 'prisma', name: n };
  }

  // 6. Cubes (Kubus)
  if (/\b(die|dice|cube|rubik|magic cube|toy block|alphabet block|wooden block|ice cube|sugar cube|puzzle box|safe)\b/i.test(lower) && !/\b(safety pin)\b/i.test(lower)) {
    let n = 'Dadu / Kotak Kubus';
    if (/die|dice/i.test(lower)) n = 'Dadu Permainan';
    else if (/safe/i.test(lower)) n = 'Brankas Kubus';
    else if (/rubik/i.test(lower)) n = 'Kubus Rubik';
    return { shape: 'kubus', name: n };
  }

  // 7. Cylinders (Tabung)
  if (/\b(bottle|beer bottle|wine bottle|pop bottle|water bottle|soda bottle|pill bottle|thermos|tumbler|flask|pitcher)\b/i.test(lower)) {
    return { shape: 'tabung', name: 'Botol Minuman Silinder' };
  }
  if (/\b(can|tin can|pop can|soda can|beer can|milk can|canister)\b/i.test(lower) && !/\b(opener|toucan|american|african)\b/i.test(lower)) {
    return { shape: 'tabung', name: 'Kaleng Minuman / Susu' };
  }
  if (/\b(coffee mug|mug|cup|measuring cup|beaker|goblet|chalice|coffeepot|teapot)\b/i.test(lower)) {
    return { shape: 'tabung', name: 'Cangkir / Gelas Silinder' };
  }
  if (/\b(drum|barrel|cask|beer barrel|oil drum|bucket|pail|ashcan|trash can|garbage can)\b/i.test(lower)) {
    return { shape: 'tabung', name: 'Tong / Drum / Ember Tabung' };
  }
  if (/\b(candle|taper|torch|battery|electric battery|flashlight|lipstick|lighter)\b/i.test(lower)) {
    return { shape: 'tabung', name: 'Lilin / Baterai Silinder' };
  }
  if (/\b(electric fan|blower|fan|wall fan|ceiling fan|ventilator)\b/i.test(lower)) {
    return { shape: 'tabung', name: 'Kipas Angin Bulat (Silinder)' };
  }
  if (/\b(wall clock|analog clock|digital clock|clock|stopwatch|compass|wheel|tire)\b/i.test(lower)) {
    return { shape: 'tabung', name: 'Jam Dinding / Benda Bundar Tabung' };
  }
  if (/\b(pipe|tube|conduit|roll|paper towel|toilet paper|vase|urn|jar|spray can|aerosol|hair spray|ballpoint|pen)\b/i.test(lower)) {
    return { shape: 'tabung', name: 'Wadah / Pulpen Silinder' };
  }

  // 8. Rectangular Cuboids (Balok)
  // Displays & Electronics
  if (/\b(television|tv|monitor|crt screen|screen|desktop computer|laptop|notebook computer|hand-held computer|home theater|entertainment center)\b/i.test(lower)) {
    return { shape: 'balok', name: 'Televisi / Layar Monitor' };
  }
  if (/\b(cellular telephone|cellphone|mobile phone|remote control|remote|radio|cassette|tape player|loudspeaker|speaker|subwoofer|amplifier|keyboard|keypad|hard disc|modem|router|switch|printer|photocopier|fax|scanner|projector|webcam|ipod)\b/i.test(lower)) {
    let n = 'Perangkat Elektronik Balok';
    if (/phone|cellphone/i.test(lower)) n = 'Ponsel / Smartphone';
    else if (/remote/i.test(lower)) n = 'Remote Control TV';
    else if (/modem|router/i.test(lower)) n = 'Modem / Router Kotak';
    else if (/keyboard/i.test(lower)) n = 'Papan Ketik (Keyboard)';
    else if (/speaker/i.test(lower)) n = 'Speaker Kotak';
    return { shape: 'balok', name: n };
  }
  // Books, Paper, Boxes, Packaging
  if (/\b(book|comic book|binder|notebook|hardback|paperback|bookcase|envelope|packet|carton|crate|shoe box|shoebox|pencil box|pencil case|matchbox|cardboard|package)\b/i.test(lower)) {
    let n = 'Kotak / Buku Balok';
    if (/book|comic/i.test(lower)) n = 'Buku Paket / Bacaan';
    else if (/carton|cardboard|crate/i.test(lower)) n = 'Kardus / Kotak Paket';
    else if (/pencil box|pencil case/i.test(lower)) n = 'Kotak Pensil';
    else if (/binder/i.test(lower)) n = 'Binder / Map Berkas';
    return { shape: 'balok', name: n };
  }
  // Furniture, Cabinets, Appliances
  if (/\b(filing cabinet|china cabinet|wardrobe|chest|dresser|cupboard|desk|dining table|coffee table|pool table|refrigerator|icebox|microwave|toaster|waffle iron|dishwasher|washing machine|dryer|stove|oven|air conditioner|medicine chest|espresso maker|bathtub)\b/i.test(lower)) {
    let n = 'Perabot Rumah Balok';
    if (/refrigerator/i.test(lower)) n = 'Kulkas / Lemari Pendingin';
    else if (/microwave/i.test(lower)) n = 'Microwave / Oven Mini';
    else if (/wardrobe|cabinet|cupboard/i.test(lower)) n = 'Lemari Kotak';
    else if (/table|desk/i.test(lower)) n = 'Meja';
    else if (/espresso/i.test(lower)) n = 'Mesin Espresso';
    else if (/bathtub/i.test(lower)) n = 'Bak Mandi (Bathtub)';
    return { shape: 'balok', name: n };
  }
  // Bags, Luggage, Household solids
  if (/\b(briefcase|suitcase|luggage|backpack|wallet|purse|soap|sponge|eraser|mattress|pillow|doormat|brick|picture frame|mirror)\b/i.test(lower)) {
    let n = 'Benda Kotak / Balok';
    if (/backpack/i.test(lower)) n = 'Tas Ransel';
    else if (/eraser|sponge|soap/i.test(lower)) n = 'Penghapus / Spons Balok';
    else if (/pillow|mattress/i.test(lower)) n = 'Bantal / Kasur';
    else if (/brick/i.test(lower)) n = 'Batu Bata Balok';
    return { shape: 'balok', name: n };
  }
  // Vehicles
  if (/\b(car|cab|automobile|bus|train|locomotive|truck|trailer|van|wagon|jeep|limousine)\b/i.test(lower)) {
    return { shape: 'balok', name: 'Kendaraan / Mobil (Bentuk Balok)' };
  }

  // Fallback: Clean English label capitalized
  const cleanWord = className.split(',')[0].trim();
  return { shape: 'balok', name: cleanWord };
}

// AI Analysis: Ensemble Deep Learning (MobileNet Top-15) + High-Precision Computer Vision Geometry
async function analyzeImageFrame(canvas, optionalImgSrc, scanSessionId) {
  const imgSrc = optionalImgSrc || canvas.toDataURL('image/jpeg', 0.88);

  // 1. Run Built-in Scientific Computer Vision Geometry Engine on Canvas (Instant 0ms execution)
  const geoResult = runGeometricShapeAnalysis(canvas);

  // Initialize prediction state
  const aiScores = { kubus: 0, balok: 0, tabung: 0, kerucut: 0, bola: 0, prisma: 0, limas: 0 };
  let bestAiPredictionName = '';
  let bestAiShapeMatch = null;
  let highestPredProb = 0;

  // 2. Run GitHub COCO-SSD Real-World Object Detector (TV, Bottle, Sports Ball, Laptop, Book, Cup, etc.)
  let bestCocoMatch = null;
  if (cocoDetectorModel) {
    try {
      const cocoDetections = await cocoDetectorModel.detect(canvas);
      if (cocoDetections && cocoDetections.length > 0) {
        for (const det of cocoDetections) {
          const cls = (det.class || '').toLowerCase();
          const mapping = COCO_SHAPE_MAPPINGS[cls];
          if (mapping && det.score > 0.38) {
            if (!bestCocoMatch || det.score > bestCocoMatch.score) {
              bestCocoMatch = {
                shape: mapping.shape,
                name: mapping.name,
                realId: mapping.realId,
                score: det.score,
                boost: mapping.boost
              };
            }
          }
        }
      }
    } catch (e) {
      console.warn('COCO-SSD inference note:', e);
    }
  }

  // If COCO-SSD identified an everyday object, award strong confidence
  if (bestCocoMatch) {
    aiScores[bestCocoMatch.shape] += bestCocoMatch.score * 135;
    bestAiShapeMatch = bestCocoMatch.shape;
    bestAiPredictionName = bestCocoMatch.name;
    highestPredProb = bestCocoMatch.score;
  }

  // 3. Run MobileNet Classifier as Auxiliary Deep Learning Signal
  if (aiVisionModel) {
    try {
      // Primary: Classify focused reticle crop
      const predictions = await aiVisionModel.classify(canvas, 12);
      
      // Secondary: Also classify live video feed for global context if available
      let predictionsFull = [];
      const videoEl = document.getElementById('cameraVideo');
      if (videoEl && videoEl.videoWidth > 0 && cameraMediaStream) {
        try {
          predictionsFull = await aiVisionModel.classify(videoEl, 8);
        } catch (e) {}
      }

      // Merge and evaluate predictions with rank weighting
      const mergedPreds = [
        ...predictions.map(p => ({ ...p, weight: 1.0 })),
        ...predictionsFull.map(p => ({ ...p, weight: 0.85 }))
      ];

      if (mergedPreds && mergedPreds.length > 0) {
        for (let i = 0; i < mergedPreds.length; i++) {
          const pred = mergedPreds[i];
          const prob = pred.probability || (1 / (i + 1));
          const rankWeight = (1.0 / (1 + i * 0.12)) * (pred.weight || 1.0);

          const classified = classifyRealWorldObject(pred.className);
          if (classified && classified.shape) {
            const points = prob * rankWeight * 95;
            aiScores[classified.shape] += points;

            if (!bestAiShapeMatch || prob > highestPredProb) {
              highestPredProb = prob;
              bestAiShapeMatch = classified.shape;
              bestAiPredictionName = classified.name;
            }
          }
        }
      }
    } catch (e) {
      console.warn('MobileNet classification error, continuing with Computer Vision:', e);
    }
  }

  // 3. Combined Ensemble Scoring (60% AI Model + 40% Geometry Contour)
  const finalScores = {};
  const allShapes = ['kubus', 'balok', 'tabung', 'kerucut', 'bola', 'prisma', 'limas'];

  for (const shape of allShapes) {
    let scoreAI = aiScores[shape] || 0;
    let scoreGeo = (geoResult.scores && geoResult.scores[shape]) ? geoResult.scores[shape] : 0;

    // Apply target group user preference filter
    let multiplier = 1.0;
    if (currentDetectionTargetGroup === 'lengkung') {
      if (['tabung', 'bola', 'kerucut'].includes(shape)) multiplier = 1.6;
      else multiplier = 0.5;
    } else if (currentDetectionTargetGroup === 'kotak') {
      if (['kubus', 'balok', 'prisma', 'limas'].includes(shape)) multiplier = 1.6;
      else multiplier = 0.5;
    }

    if (bestAiShapeMatch) {
      finalScores[shape] = (scoreAI * 0.65 + scoreGeo * 0.35) * multiplier;
    } else {
      // Offline / CV only mode
      finalScores[shape] = scoreGeo * multiplier;
    }
  }

  // Rank candidate shapes
  const ranked = Object.entries(finalScores).sort((a, b) => b[1] - a[1]);
  const winnerKey = ranked[0][0];

  const shapeDetails = {
    kubus: { name: 'Dadu / Kotak Kubus', realId: 'dadu', icon: '🎲' },
    balok: { name: 'Kotak Persegi Panjang / Balok', realId: 'sepatu', icon: '📦' },
    tabung: { name: 'Kaleng / Botol Silinder', realId: 'kaleng', icon: '🥫' },
    kerucut: { name: 'Cone / Topi Kerucut', realId: 'es_krim', icon: '🍦' },
    bola: { name: 'Bola / Bulatan Sempurna', realId: 'bola_sepak', icon: '⚽' },
    prisma: { name: 'Tenda / Prisma Segitiga', realId: 'tenda', icon: '⛺' },
    limas: { name: 'Piramida / Limas Segiempat', realId: 'piramida', icon: '🔺' }
  };

  let detectedObjName = (bestAiShapeMatch === winnerKey && bestAiPredictionName) 
    ? bestAiPredictionName 
    : shapeDetails[winnerKey].name;

  // Smart contextual Indonesian object naming based on geometric aspect ratio & contours
  if (!bestAiShapeMatch || detectedObjName === shapeDetails[winnerKey].name) {
    const asp = (geoResult && geoResult.objAspect) ? geoResult.objAspect : 1.0;
    if (winnerKey === 'balok') {
      if (asp >= 1.30) detectedObjName = 'Televisi / Layar Monitor (Balok)';
      else if (asp >= 1.10) detectedObjName = 'Buku / Kotak Persegi Panjang (Balok)';
      else if (asp <= 0.82) detectedObjName = 'Kotak Pensil / Kardus Berdiri (Balok)';
      else detectedObjName = 'Benda Kotak Balok';
    } else if (winnerKey === 'tabung') {
      if (asp <= 0.78) detectedObjName = 'Botol Minum / Termos Silinder (Tabung)';
      else detectedObjName = 'Kaleng Minuman / Gelas Silinder (Tabung)';
    } else if (winnerKey === 'bola') {
      detectedObjName = 'Bola Olahraga / Bulatan Sempurna (Bola)';
    } else if (winnerKey === 'kubus') {
      detectedObjName = 'Dadu / Kotak Kubus Sisi Sama (Kubus)';
    } else if (winnerKey === 'kerucut') {
      detectedObjName = 'Cone Es Krim / Topi Kerucut';
    } else if (winnerKey === 'prisma') {
      detectedObjName = 'Tenda Kemah (Prisma Segitiga)';
    } else if (winnerKey === 'limas') {
      detectedObjName = 'Piramida / Tugu Limas';
    }
  }

  let calculatedConfidence = Math.min(98, Math.max(88, Math.round(82 + ranked[0][1] * 0.18)));

  const topCandidates = ranked.slice(0, 3).map(([key, score]) => {
    const info = shapeDetails[key] || shapeDetails.kubus;
    const basePct = Math.min(97, Math.max(50, Math.round(55 + score * 0.35)));
    return {
      shapeKey: key,
      name: info.name,
      icon: info.icon,
      confidence: basePct
    };
  });
  
  // Stale scan guard: discard results if user took a newer photo while this was analyzing
  if (scanSessionId && scanSessionId !== currentScanSessionId) {
    console.log('Stale scan session #' + scanSessionId + ' discarded. Active session is #' + currentScanSessionId);
    return;
  }
  isCurrentlyScanning = false;

  displayDetectionResult({
    shapeKey: winnerKey,
    objectName: detectedObjName,
    realWorldId: shapeDetails[winnerKey].realId,
    confidence: calculatedConfidence,
    imageSrc: imgSrc,
    candidates: topCandidates
  });
}

// Built-in Scientific Computer Vision Contour & Geometry Engine
function runGeometricShapeAnalysis(canvas) {
  const w = canvas.width;
  const h = canvas.height;
  if (w <= 10 || h <= 10) {
    return { shape: 'kubus', scores: { kubus: 80, balok: 70, tabung: 50, kerucut: 40, bola: 40, prisma: 40, limas: 40 } };
  }

  const ctx = canvas.getContext('2d');
  const imgData = ctx.getImageData(0, 0, w, h);
  const data = imgData.data;

  // 1. Resample to fast analysis matrix (120x120)
  const stepX = Math.max(1, Math.floor(w / 120));
  const stepY = Math.max(1, Math.floor(h / 120));
  const gw = Math.floor(w / stepX);
  const gh = Math.floor(h / stepY);

  const gray = new Float32Array(gw * gh);
  for (let gy = 0; gy < gh; gy++) {
    for (let gx = 0; gx < gw; gx++) {
      const px = (gy * stepY * w + gx * stepX) * 4;
      gray[gy * gw + gx] = data[px] * 0.299 + data[px + 1] * 0.587 + data[px + 2] * 0.114;
    }
  }

  // 2. 2D Gradient / Edge Detection
  const edges = new Float32Array(gw * gh);
  let totalEdge = 0;
  for (let gy = 1; gy < gh - 1; gy++) {
    for (let gx = 1; gx < gw - 1; gx++) {
      const idx = gy * gw + gx;
      const dx = (gray[idx + 1] - gray[idx - 1]) * 0.5;
      const dy = (gray[idx + gw] - gray[idx - gw]) * 0.5;
      const mag = Math.sqrt(dx * dx + dy * dy);
      edges[idx] = mag;
      totalEdge += mag;
    }
  }
  const avgEdge = totalEdge / (gw * gh);
  const edgeThreshold = Math.max(10, avgEdge * 1.2);

  // 3. Find true object bounding box inside the reticle
  let minGx = gw, maxGx = 0, minGy = gh, maxGy = 0;
  for (let gy = 2; gy < gh - 2; gy++) {
    for (let gx = 2; gx < gw - 2; gx++) {
      if (edges[gy * gw + gx] > edgeThreshold) {
        if (gx < minGx) minGx = gx;
        if (gx > maxGx) maxGx = gx;
        if (gy < minGy) minGy = gy;
        if (gy > maxGy) maxGy = gy;
      }
    }
  }

  if (maxGx - minGx < 12 || maxGy - minGy < 12) {
    minGx = Math.floor(gw * 0.08);
    maxGx = Math.floor(gw * 0.92);
    minGy = Math.floor(gh * 0.08);
    maxGy = Math.floor(gh * 0.92);
  }

  const objW = maxGx - minGx;
  const objH = maxGy - minGy;
  const objAspect = objW / Math.max(1, objH);
  const objCx = (minGx + maxGx) / 2;
  const objCy = (minGy + maxGy) / 2;

  // 4. Circularity / Radial Symmetry Test (Sphere / Bola detector)
  let cornerEdges = 0;
  let centerEdges = 0;
  const qW = Math.max(2, Math.floor(objW * 0.22));
  const qH = Math.max(2, Math.floor(objH * 0.22));

  for (let gy = minGy; gy <= maxGy; gy++) {
    for (let gx = minGx; gx <= maxGx; gx++) {
      const isCorner = (gx < minGx + qW || gx > maxGx - qW) && (gy < minGy + qH || gy > maxGy - qH);
      const isCenter = Math.abs(gx - objCx) < qW && Math.abs(gy - objCy) < qH;
      const e = edges[gy * gw + gx];
      if (e > edgeThreshold) {
        if (isCorner) cornerEdges++;
        if (isCenter) centerEdges++;
      }
    }
  }

  const cornerFillRatio = cornerEdges / Math.max(1, (qW * qH * 4));
  const circularityScore = (objAspect >= 0.76 && objAspect <= 1.28) ? Math.max(0, 1 - cornerFillRatio * 3.2) : 0;

  // 5. Section Widths (Tapering Test for Kerucut / Limas)
  function measureSectionWidth(normY) {
    const gy = Math.min(gh - 1, Math.max(0, Math.floor(minGy + objH * normY)));
    let firstX = -1, lastX = -1;
    for (let gx = minGx; gx <= maxGx; gx++) {
      if (edges[gy * gw + gx] > edgeThreshold * 0.65) {
        if (firstX === -1) firstX = gx;
        lastX = gx;
      }
    }
    return (firstX !== -1 && lastX >= firstX) ? (lastX - firstX) : Math.floor(objW * 0.5);
  }

  const widthTop = measureSectionWidth(0.20);
  const widthMid = measureSectionWidth(0.50);
  const widthBot = measureSectionWidth(0.80);
  const taperRatio = widthTop / Math.max(1, widthBot);
  const isParallel = Math.abs(widthTop - widthBot) / Math.max(1, objW) < 0.22;

  const scores = { kubus: 0, balok: 0, tabung: 0, kerucut: 0, bola: 0, prisma: 0, limas: 0 };

  // --- Bola (Lingkaran Sempurna) ---
  if (circularityScore > 0.40 && objAspect >= 0.82 && objAspect <= 1.22) {
    scores.bola += 65 + circularityScore * 35;
  } else if (objAspect >= 0.88 && objAspect <= 1.14 && circularityScore > 0.25) {
    scores.bola += 40;
  }

  // --- Kerucut & Limas (Upright Tapered Shapes ONLY) ---
  // STRICT GUARD: Kerucut & Limas MUST be upright/portrait (objAspect <= 1.15).
  // A wide horizontal rectangle (objAspect > 1.15) like a TV, monitor, book, or shoe box can NEVER be a Kerucut!
  if (objAspect <= 1.15 && taperRatio < 0.65 && widthMid >= widthTop) {
    const taperStrength = (1 - taperRatio) * 60;
    if (circularityScore > 0.30 || objAspect < 0.90) {
      scores.kerucut += 55 + taperStrength;
      scores.limas += 35 + taperStrength * 0.6;
    } else {
      scores.limas += 55 + taperStrength;
      scores.kerucut += 35 + taperStrength * 0.6;
    }
  }

  // --- Tabung (Silinder Vertikal) ---
  if (objAspect <= 0.88 && isParallel) {
    scores.tabung += 68 + (1 - objAspect) * 35;
    scores.balok += 25;
  } else if (isParallel && circularityScore > 0.20 && objAspect <= 1.0) {
    scores.tabung += 48;
  }

  // --- Balok (Cuboid: Horizontal Landscape / Vertical Stand) ---
  if (objAspect >= 1.20) {
    // Horizontal / landscape rectangle (TV, laptop, monitor, shoe box, book, phone)
    scores.balok += 68 + Math.min(30, (objAspect - 1.2) * 25);
    if (objAspect >= 1.30) {
      scores.balok += 28; // Strong TV / 16:9 screen boost
      // Strip any false cone/sphere points on wide rectangular surfaces
      scores.kerucut = Math.min(scores.kerucut, 5);
      scores.limas = Math.min(scores.limas, 10);
      scores.bola = Math.min(scores.bola, 5);
    }
  } else if (objAspect <= 0.80) {
    // Vertical / portrait rectangle (standing box, tall book)
    if (!isParallel || circularityScore < 0.25) {
      scores.balok += 55;
    }
  }

  // --- Kubus (Square 1:1) ---
  if (objAspect >= 0.82 && objAspect <= 1.20) {
    if (circularityScore < 0.35) {
      scores.kubus += 62 + (1 - Math.abs(objAspect - 1)) * 30;
    } else {
      scores.kubus += 20;
    }
  }

  // --- Prisma Segitiga ---
  if (objAspect >= 1.05 && objAspect <= 1.55 && taperRatio < 0.70 && taperRatio > 0.35) {
    scores.prisma += 50;
  }

  return { scores, objAspect, circularityScore, taperRatio };
}

// Present detection results in UI with Candidate Chips
function displayDetectionResult(result) {
  const card = document.getElementById('detectionResultCard');
  const thumbImg = document.getElementById('scannedThumbImg');
  const titleEl = document.getElementById('detectedShapeTitle');
  const objLabelEl = document.getElementById('detectedObjectLabel');
  const confPctEl = document.getElementById('confidencePctLabel');
  const confBarEl = document.getElementById('confidenceBarFill');
  const propSisi = document.getElementById('detectedPropSisi');
  const propRusuk = document.getElementById('detectedPropRusuk');
  const propSudut = document.getElementById('detectedPropSudut');
  const expText = document.getElementById('detectionExplanationText');
  const view3dBtn = document.getElementById('view3dFromDetectionBtn');

  lastDetectedShapeKey = result.shapeKey;
  lastDetectedRealWorldId = result.realWorldId;

  const base = SHAPES_DATA[result.shapeKey] || SHAPES_DATA.kubus;

  isCurrentlyScanning = false;

  // Scroll and reveal result card
  if (card) {
    card.classList.remove('is-analyzing');
    card.classList.remove('hidden');
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Fill UI
  if (thumbImg) thumbImg.src = result.imageSrc;
  if (titleEl) titleEl.innerHTML = base.name.toUpperCase() + ' ' + base.emoji;
  if (objLabelEl) objLabelEl.textContent = 'Objek Dikenali: ' + result.objectName;
  if (confPctEl) confPctEl.textContent = result.confidence + '%';
  if (confBarEl) confBarEl.style.width = result.confidence + '%';

  if (propSisi) propSisi.textContent = base.sisi;
  if (propRusuk) propRusuk.textContent = base.rusuk;
  if (propSudut) propSudut.textContent = base.sudut;

  if (expText) {
    expText.innerHTML = 'Berdasarkan analisis citra kamera, benda ini memiliki <strong>' + base.descSisi + '</strong>, <strong>' + base.descRusuk + '</strong>, dan <strong>' + base.descSudut + '</strong>. Ini adalah sifat khas dari bangun ruang <strong>' + base.name + '</strong>!';
  }

  // Render top alternative candidate chips
  const candBox = document.getElementById('detectionCandidateChips');
  if (candBox && result.candidates && result.candidates.length > 0) {
    candBox.innerHTML = '';
    result.candidates.forEach((cand, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cand-chip-btn ' + (cand.shapeKey === result.shapeKey ? 'winner' : '');
      const shapeInfo = SHAPES_DATA[cand.shapeKey] || SHAPES_DATA.kubus;
      btn.innerHTML = '<span>' + (idx + 1) + '. ' + shapeInfo.emoji + ' ' + shapeInfo.name + '</span> <strong>(' + cand.confidence + '%)</strong>';
      btn.onclick = () => manuallyCorrectDetection(cand.shapeKey);
      candBox.appendChild(btn);
    });
  }

  // Highlight matching correction chip
  document.querySelectorAll('.correction-chip').forEach(chip => {
    chip.classList.toggle('active', chip.getAttribute('data-shape') === result.shapeKey);
  });

  // Bind 3D view button
  if (view3dBtn) {
    view3dBtn.onclick = function() {
      open3DModelFromDetection(result.shapeKey, result.realWorldId);
    };
  }

  if (card) {
    card.classList.remove('hidden');
    card.scrollIntoView({ behavior: 'smooth' });
  }

  // Sound and confetti celebration
  sfx.playSuccess();
  if (typeof confetti === 'function') {
    confetti({ particleCount: 75, spread: 80, origin: { y: 0.6 } });
  }
}

// 1-Click Instant Correction from user
function manuallyCorrectDetection(shapeKey) {
  sfx.playPop();
  if (!SHAPES_DATA[shapeKey]) return;

  const base = SHAPES_DATA[shapeKey];
  let defaultRealId = (base.realWorld && base.realWorld.length > 0) ? base.realWorld[0].id : '';

  const thumbImg = document.getElementById('scannedThumbImg');
  const currentImgSrc = thumbImg ? thumbImg.src : '';

  displayDetectionResult({
    shapeKey: shapeKey,
    objectName: base.name + ' (Pilihan Kamu)',
    realWorldId: defaultRealId,
    confidence: 100,
    imageSrc: currentImgSrc,
    candidates: []
  });
}

// Reset view to scan again
function resetDetectionView() {
  sfx.playPop();
  const card = document.getElementById('detectionResultCard');
  if (card) card.classList.add('hidden');

  const viewport = document.querySelector('.viewfinder-viewport');
  if (viewport) viewport.scrollIntoView({ behavior: 'smooth' });

  if (!cameraMediaStream) {
    startCameraScanner();
  }
}

function open3DModelFromDetection(shapeKey, realWorldId) {
  sfx.playPop();
  stopCameraScanner();

  // 1. Switch to 3D Explorer Tab
  switchTab('eksplorasi');

  // 2. Set active shape pill
  document.querySelectorAll('.shape-pill').forEach(pill => {
    pill.classList.toggle('active', pill.getAttribute('data-shape') === shapeKey);
  });

  // 3. Set dimension to 3D and load shape
  setDimension(3);
  loadShape(shapeKey);

  // 4. Load the matching real-world 3D object
  const shapeData = SHAPES_DATA[shapeKey];
  if (shapeData && shapeData.realWorld) {
    let targetIndex = shapeData.realWorld.findIndex(item => item.id === realWorldId);
    if (targetIndex === -1) targetIndex = 0;
    loadRealWorldObject(shapeKey, targetIndex);
  }
}


// --- KUIS JUARA MATEMATIKA SD (32 VARIED QUESTIONS & RANDOMIZER) ---
const ALL_QUIZ_QUESTIONS = [
  {
    q: "Aku memiliki 6 sisi yang semuanya berbentuk bujur sangkar (persegi) yang sama besar. Siapakah aku?",
    icon: "🎲",
    options: ["Balok", "Kubus", "Prisma Segitiga", "Limas Segiempat"],
    ans: 1,
    exp: "Benar sekali! Ciri khas utama Kubus adalah keenam sisinya berbentuk persegi (bujur sangkar) yang sama persis ukurannya."
  },
  {
    q: "Berapakah jumlah rusuk yang dimiliki oleh bangun ruang Balok?",
    icon: "📦",
    options: ["6 rusuk", "8 rusuk", "12 rusuk", "10 rusuk"],
    ans: 2,
    exp: "Tepat! Balok memiliki 12 rusuk, yang terdiri dari 4 rusuk panjang, 4 rusuk lebar, dan 4 rusuk tinggi."
  },
  {
    q: "Bangun ruang manakah di bawah ini yang sama sekali TIDAK mempunyai titik sudut?",
    icon: "⚽",
    options: ["Kerucut dan Balok", "Tabung dan Bola", "Prisma dan Tabung", "Limas dan Kubus"],
    ans: 1,
    exp: "Hebat! Tabung dan Bola tidak memiliki titik sudut tajam karena permukaannya merupakan bidang lengkung mulus."
  },
  {
    q: "Topi pesta ulang tahun dan cone es krim adalah contoh nyata dari bangun ruang...",
    icon: "🍦",
    options: ["Tabung", "Limas Segiempat", "Kerucut", "Bola"],
    ans: 2,
    exp: "Pintar! Kerucut memiliki satu alas lingkaran dan satu titik runcing di puncaknya seperti topi pesta!"
  },
  {
    q: "Jika sebuah kubus memiliki panjang rusuk (s) = 5 cm, berapakah volume kubus tersebut?",
    icon: "🧮",
    options: ["25 cm³", "75 cm³", "125 cm³", "100 cm³"],
    ans: 2,
    exp: "Luar biasa! Volume Kubus = s × s × s = 5 × 5 × 5 = 125 cm³."
  },
  {
    q: "Berapakah jumlah titik sudut pada bangun ruang Limas Segiempat?",
    icon: "🔺",
    options: ["4 titik sudut", "5 titik sudut", "8 titik sudut", "6 titik sudut"],
    ans: 1,
    exp: "Benar! Limas Segiempat memiliki 4 titik sudut di bagian alas persegi dan 1 titik sudut di puncak (total 5)."
  },
  {
    q: "Jika sebuah bangun ruang Tabung dibuka selimutnya, maka bidang datar yang terbentuk adalah...",
    icon: "🥫",
    options: ["Persegi Panjang", "Segitiga", "Juring Lingkaran", "Trapesium"],
    ans: 0,
    exp: "Hebat! Selimut tabung jika dibentangkan lurus akan menjadi sebuah persegi panjang yang lebar."
  },
  {
    q: "Benda di bawah ini yang berbentuk bangun ruang Tabung adalah...",
    icon: "🥛",
    options: ["Kotak Pensil", "Kaleng Susu", "Kelereng", "Dadu"],
    ans: 1,
    exp: "Tepat sekali! Kaleng susu memiliki alas dan tutup lingkaran serta selimut tabung."
  },
  {
    q: "Rumus untuk menghitung Volume Balok dengan panjang p, lebar l, dan tinggi t adalah...",
    icon: "📐",
    options: ["p + l + t", "p × l × t", "2 × (p + l)", "p × l : t"],
    ans: 1,
    exp: "Bagus sekali! Volume Balok dihitung dengan mengalikan panjang × lebar × tinggi (V = p × l × t)."
  },
  {
    q: "Prisma segitiga (seperti bentuk tenda pramuka) memiliki jumlah sisi (bidang) sebanyak...",
    icon: "⛺",
    options: ["4 sisi", "5 sisi", "6 sisi", "7 sisi"],
    ans: 1,
    exp: "Tepat! Prisma segitiga memiliki 5 sisi: 2 sisi segitiga (alas & atap) serta 3 sisi tegak persegi panjang."
  },
  {
    q: "Berapakah jumlah titik sudut siku-siku yang dimiliki oleh sebuah bangun ruang Kubus?",
    icon: "🎲",
    options: ["6 titik sudut", "8 titik sudut", "12 titik sudut", "4 titik sudut"],
    ans: 1,
    exp: "Benar sekali! Kubus memiliki 8 titik sudut, yaitu 4 titik di bagian atas dan 4 titik di bagian alas."
  },
  {
    q: "Bangun ruang yang hanya dibatasi oleh SATU bidang lengkung menyeluruh tanpa rusuk adalah...",
    icon: "🔮",
    options: ["Kerucut", "Bola", "Tabung", "Limas"],
    ans: 1,
    exp: "Pintar! Bola adalah satu-satunya bangun ruang yang hanya memiliki 1 sisi lengkung dan tidak memiliki rusuk sama sekali."
  },
  {
    q: "Berapakah jumlah rusuk lengkung yang ada pada bangun ruang Kerucut?",
    icon: "🎉",
    options: ["0 rusuk", "1 rusuk lengkung", "2 rusuk lengkung", "3 rusuk lengkung"],
    ans: 1,
    exp: "Tepat! Kerucut memiliki tepat 1 rusuk lengkung di sekeliling lingkaran alasnya."
  },
  {
    q: "Rumus luas permukaan sebuah kubus jika diketahui panjang rusuknya s adalah...",
    icon: "📏",
    options: ["L = 4 × s", "L = 6 × s²", "L = s³", "L = 12 × s"],
    ans: 1,
    exp: "Luar biasa! Karena kubus memiliki 6 sisi persegi kongruen (luas = s²), maka luas totalnya adalah 6 × s²."
  },
  {
    q: "Sebuah balok memiliki ukuran panjang 6 cm, lebar 4 cm, dan tinggi 3 cm. Berapakah volumenya?",
    icon: "📦",
    options: ["48 cm³", "72 cm³", "24 cm³", "36 cm³"],
    ans: 1,
    exp: "Benar! Volume Balok = p × l × t = 6 × 4 × 3 = 72 cm³."
  },
  {
    q: "Berapakah jumlah rusuk pada bangun ruang Prisma Segitiga?",
    icon: "⛺",
    options: ["6 rusuk", "9 rusuk", "12 rusuk", "8 rusuk"],
    ans: 1,
    exp: "Hebat! Prisma segitiga memiliki 9 rusuk: 3 di alas segitiga, 3 di atap segitiga, dan 3 rusuk tegak."
  },
  {
    q: "Berapakah jumlah rusuk pada bangun ruang Limas Segiempat?",
    icon: "🔺",
    options: ["6 rusuk", "8 rusuk", "10 rusuk", "5 rusuk"],
    ans: 1,
    exp: "Tepat! Limas segiempat memiliki 8 rusuk: 4 rusuk di alas segiempat dan 4 rusuk tegak yang meruncing ke puncak."
  },
  {
    q: "Bangun ruang yang memiliki alas dan atap berbentuk segitiga sama dan sebangun (kongruen) adalah...",
    icon: "🍫",
    options: ["Prisma Segitiga", "Limas Segitiga", "Kerucut", "Balok"],
    ans: 0,
    exp: "Bagus! Prisma segitiga dicirikan oleh alas dan tutupnya yang kongruen berbentuk segitiga."
  },
  {
    q: "Rumus untuk menghitung Volume Tabung dengan jari-jari r dan tinggi t adalah...",
    icon: "🥫",
    options: ["V = 2 × π × r × t", "V = π × r² × t", "V = 1/3 × π × r² × t", "V = 4/3 × π × r³"],
    ans: 1,
    exp: "Pintar! Volume Tabung = Luas Alas Lingkaran (π × r²) dikali Tinggi (t), yaitu V = π × r² × t."
  },
  {
    q: "Volume sebuah Kerucut adalah sepertiga (1/3) dari volume bangun ruang...",
    icon: "🍦",
    options: ["Bola", "Kubus", "Tabung", "Balok"],
    ans: 2,
    exp: "Benar sekali! Volume Kerucut (1/3 × π × r² × t) persis sepertiga dari volume Tabung yang berjari-jari dan bertinggi sama."
  },
  {
    q: "Jaring-jaring bangun ruang Kubus tersusun dari persegi kongruen sebanyak...",
    icon: "📐",
    options: ["4 buah persegi", "6 buah persegi", "8 buah persegi", "12 buah persegi"],
    ans: 1,
    exp: "Tepat! Jaring-jaring kubus terdiri dari 6 bujur sangkar (persegi) yang dapat dilipat membentuk kubus utuh."
  },
  {
    q: "Piramida Giza di Mesir yang sangat megah merupakan contoh nyata dari bangun ruang...",
    icon: "🏛️",
    options: ["Prisma Segitiga", "Kerucut", "Limas Segiempat", "Kubus"],
    ans: 2,
    exp: "Hebat! Piramida Giza beralaskan bujur sangkar dan mengerucut 4 sisi segitiga ke puncak, menjadikannya Limas Segiempat."
  },
  {
    q: "Benda di bawah ini yang memiliki bentuk Bola sempurna adalah...",
    icon: "🌍",
    options: ["Kelereng kaca & Globe", "Kotak Sepatu", "Topi Ulang Tahun", "Batu Bata"],
    ans: 0,
    exp: "Benar! Kelereng kaca dan globe bola dunia adalah contoh benda berbentuk bola sempurna."
  },
  {
    q: "Batu bata bangunan dan kotak pasta gigi di rumah kita adalah contoh dari bangun ruang...",
    icon: "🧱",
    options: ["Kubus", "Balok", "Tabung", "Limas"],
    ans: 1,
    exp: "Tepat sekali! Batu bata dan kotak pasta gigi memiliki ukuran panjang, lebar, dan tinggi berbeda sehingga berbentuk Balok."
  },
  {
    q: "Bangun ruang yang memiliki dua bidang lingkaran sejajar sebagai alas dan tutup adalah...",
    icon: "🥁",
    options: ["Kerucut", "Tabung (Silinder)", "Bola", "Prisma"],
    ans: 1,
    exp: "Pintar! Tabung memiliki dua lingkaran yang sejajar dan sama besar sebagai alas dan tutupnya."
  },
  {
    q: "Berapakah jumlah bidang sisi yang dimiliki oleh bangun ruang Balok?",
    icon: "🚪",
    options: ["4 sisi", "6 sisi", "8 sisi", "12 sisi"],
    ans: 1,
    exp: "Bagus! Balok dibatasi oleh 6 bidang sisi berbentuk persegi panjang (3 pasang sisi yang berhadapan sama besar)."
  },
  {
    q: "Berapakah jumlah seluruh bidang sisi yang membatasi bangun ruang Tabung?",
    icon: "🔋",
    options: ["2 sisi", "3 sisi", "4 sisi", "1 sisi"],
    ans: 1,
    exp: "Benar! Tabung memiliki 3 sisi: 1 lingkaran alas, 1 lingkaran tutup, dan 1 bidang selimut lengkung."
  },
  {
    q: "Jika jaring-jaring Limas Segiempat dibuka dan dibentangkan, bangun datar apa sajakah yang terbentuk?",
    icon: "🔺",
    options: ["1 persegi dan 4 segitiga", "2 segitiga dan 3 persegi", "6 persegi", "1 lingkaran dan 1 selimut"],
    ans: 0,
    exp: "Luar biasa! Jaring-jaring limas segiempat terdiri dari 1 persegi sebagai alas dan 4 segitiga sebagai dinding tegak."
  },
  {
    q: "Sebuah kubus memiliki volume 27 cm³. Berapakah panjang rusuk kubus tersebut?",
    icon: "🧮",
    options: ["9 cm", "3 cm", "6 cm", "4 cm"],
    ans: 1,
    exp: "Tepat! Karena 3 × 3 × 3 = 27 cm³, maka panjang rusuk kubus tersebut adalah 3 cm."
  },
  {
    q: "Sebuah dadu permainan dan rubik warna-warni merupakan contoh konkret dari bangun ruang...",
    icon: "🎲",
    options: ["Balok", "Kubus", "Prisma Segitiga", "Tabung"],
    ans: 1,
    exp: "Hebat! Dadu dan rubik memiliki 6 sisi bujur sangkar sama besar, sehingga merupakan contoh nyata bangun Kubus."
  },
  {
    q: "Benda di bawah ini yang BUKAN merupakan contoh benda berbentuk kerucut adalah...",
    icon: "🚧",
    options: ["Cone es krim", "Topi ulang tahun", "Kotak kado", "Traffic cone jalan"],
    ans: 2,
    exp: "Pintar! Kotak kado berbentuk kubus atau balok, bukan kerucut."
  },
  {
    q: "Berapakah jumlah titik sudut pada bangun ruang Prisma Segitiga?",
    icon: "⛺",
    options: ["4 titik sudut", "6 titik sudut", "8 titik sudut", "9 titik sudut"],
    ans: 1,
    exp: "Tepat sekali! Prisma segitiga memiliki 6 titik sudut: 3 titik sudut di alas segitiga dan 3 titik sudut di atap segitiga."
  }
];

let currentQuizStudent = { name: '', studentClass: 'Kelas 4 SD' };
let activeQuizQuestions = [];
let currentQuizIndex = 0;
let quizScore = 0;
let userQuizAnswers = [];

// Helper: Fisher-Yates Array Shuffler
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Generate 10 randomized questions with randomized options
function getRandomizedQuizQuestions(count = 10) {
  const shuffledPool = shuffleArray(ALL_QUIZ_QUESTIONS);
  const selected = shuffledPool.slice(0, count);

  return selected.map(item => {
    const originalCorrectText = item.options[item.ans];
    const shuffledOptions = shuffleArray(item.options);
    const newAnsIndex = shuffledOptions.indexOf(originalCorrectText);

    return {
      q: item.q,
      icon: item.icon,
      options: shuffledOptions,
      ans: newAnsIndex,
      exp: item.exp
    };
  });
}

// LocalStorage History Storage Key
const QUIZ_STORAGE_KEY = 'bangun_ruang_quiz_history';

function loadQuizHistory() {
  try {
    const data = localStorage.getItem(QUIZ_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to load history:', e);
    return [];
  }
}

function saveQuizHistory(record) {
  let history = loadQuizHistory();
  history.unshift(record); // Add new entry to the top
  if (history.length > 50) history = history.slice(0, 50); // Keep 50 records
  try {
    localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(history));
  } catch (e) {
    console.error('Failed to save history:', e);
  }
  renderHistoryTable();
}

function deleteHistoryItem(id) {
  sfx.playPop();
  let history = loadQuizHistory();
  history = history.filter(item => item.id !== id);
  try {
    localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(history));
  } catch (e) {}
  renderHistoryTable();
}

function clearAllQuizHistory() {
  const history = loadQuizHistory();
  if (history.length === 0) return;

  if (confirm('Apakah kamu yakin ingin menghapus seluruh riwayat pengerjaan kuis ini?')) {
    sfx.playPop();
    try {
      localStorage.removeItem(QUIZ_STORAGE_KEY);
    } catch (e) {}
    renderHistoryTable();
  }
}

function renderHistoryTable() {
  const history = loadQuizHistory();
  const tableBody = document.getElementById('historyTableBody');
  const tableWrap = document.getElementById('historyTableWrap');
  const emptyState = document.getElementById('historyEmptyState');
  const totalEl = document.getElementById('totalQuizTakers');
  const avgEl = document.getElementById('avgQuizScore');
  const perfectEl = document.getElementById('perfectScoreCount');

  // Summary KPI Calculations
  if (totalEl) totalEl.textContent = history.length;
  if (perfectEl) {
    const perfectCount = history.filter(h => h.score === 100).length;
    perfectEl.textContent = perfectCount;
  }
  if (avgEl) {
    if (history.length > 0) {
      const sum = history.reduce((acc, h) => acc + (h.score || 0), 0);
      avgEl.textContent = Math.round(sum / history.length);
    } else {
      avgEl.textContent = '0';
    }
  }

  if (!tableBody) return;

  if (history.length === 0) {
    if (tableWrap) tableWrap.classList.add('hidden');
    if (emptyState) emptyState.classList.remove('hidden');
    tableBody.innerHTML = '';
    return;
  }

  if (tableWrap) tableWrap.classList.remove('hidden');
  if (emptyState) emptyState.classList.add('hidden');

  tableBody.innerHTML = '';
  history.forEach((item, index) => {
    const tr = document.createElement('tr');

    let badgeClass = 'score-low';
    if (item.score >= 90) badgeClass = 'score-high';
    else if (item.score >= 70) badgeClass = 'score-mid';

    tr.innerHTML = `
      <td class="col-num">${index + 1}</td>
      <td class="col-date">${item.date}</td>
      <td class="col-name">
        <div class="student-avatar-pill">
          <span class="avatar-letter">${(item.name || 'S').charAt(0).toUpperCase()}</span>
          <strong>${item.name || 'Siswa'}</strong>
        </div>
      </td>
      <td class="col-class"><span class="class-badge">${item.studentClass || '-'}</span></td>
      <td class="col-score"><span class="score-badge ${badgeClass}">${item.score} / 100</span></td>
      <td class="col-stars"><span class="stars-text">${item.stars || '⭐⭐⭐'}</span></td>
      <td class="col-action">
        <button class="delete-row-btn" title="Hapus Riwayat Siswa Ini" onclick="deleteHistoryItem(${item.id})">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </td>
    `;
    tableBody.appendChild(tr);
  });
}

function startQuiz() {
  const nameInput = document.getElementById('studentNameInput');
  const classSelect = document.getElementById('studentClassSelect');
  const errorMsg = document.getElementById('identityErrorMsg');

  const studentName = nameInput ? nameInput.value.trim() : '';
  const studentClass = classSelect ? classSelect.value : 'Kelas 4 SD';

  // Validation: Student Name Required
  if (!studentName) {
    if (errorMsg) errorMsg.classList.remove('hidden');
    if (nameInput) {
      nameInput.focus();
      nameInput.classList.add('input-error');
    }
    sfx.playError();
    return;
  }

  if (errorMsg) errorMsg.classList.add('hidden');
  if (nameInput) nameInput.classList.remove('input-error');

  // Remember name and class in localStorage
  try {
    localStorage.setItem('last_student_name', studentName);
    localStorage.setItem('last_student_class', studentClass);
  } catch (e) {}

  currentQuizStudent = { name: studentName, studentClass: studentClass };

  sfx.playPop();
  currentQuizIndex = 0;
  quizScore = 0;
  userQuizAnswers = [];

  // Generate fresh, randomized 10 questions with randomized options
  activeQuizQuestions = getRandomizedQuizQuestions(10);

  document.getElementById('quizIntroCard').classList.add('hidden');
  document.getElementById('quizResultCard').classList.add('hidden');
  document.getElementById('quizPlayCard').classList.remove('hidden');

  renderQuizQuestion();
}

function renderQuizQuestion() {
  if (!activeQuizQuestions || activeQuizQuestions.length === 0) {
    activeQuizQuestions = getRandomizedQuizQuestions(10);
  }

  const qData = activeQuizQuestions[currentQuizIndex];
  const total = activeQuizQuestions.length;

  document.getElementById('quizQuestionCount').textContent = `Soal ${currentQuizIndex + 1} dari ${total}`;
  document.getElementById('quizLiveScore').innerHTML = `<i class="fa-solid fa-star text-amber"></i> Skor: ${quizScore}`;

  // Progress Bar
  const pct = Math.round(((currentQuizIndex) / total) * 100);
  document.getElementById('quizProgressFill').style.width = `${pct}%`;

  // Visual emoji & question text
  document.getElementById('questionVisualHint').textContent = qData.icon;
  document.getElementById('questionText').textContent = qData.q;

  // Options Grid
  const optionsGrid = document.getElementById('quizOptionsGrid');
  optionsGrid.innerHTML = '';

  const letters = ['A', 'B', 'C', 'D'];
  qData.options.forEach((optText, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt-btn';
    btn.innerHTML = `
      <span class="opt-letter">${letters[idx]}</span>
      <span class="opt-text">${optText}</span>
    `;
    btn.addEventListener('click', () => handleOptionSelected(idx, btn));
    optionsGrid.appendChild(btn);
  });

  // Hide feedback box
  document.getElementById('quizFeedback').classList.add('hidden');
}

function handleOptionSelected(selectedIdx, clickedBtn) {
  const qData = activeQuizQuestions[currentQuizIndex];
  const allBtns = document.querySelectorAll('.quiz-opt-btn');
  allBtns.forEach(b => b.disabled = true);

  const feedbackBox = document.getElementById('quizFeedback');
  const feedbackTitle = document.getElementById('feedbackTitle');
  const feedbackExp = document.getElementById('feedbackExplanation');
  const feedbackIcon = document.getElementById('feedbackIcon');

  feedbackBox.classList.remove('hidden');

  if (selectedIdx === qData.ans) {
    // Correct
    quizScore += 10;
    sfx.playSuccess();
    clickedBtn.classList.add('correct');
    feedbackBox.className = 'quiz-feedback-box correct-feedback';
    feedbackTitle.textContent = "Luar Biasa, Jawabanmu Tepat! 🌟";
    feedbackIcon.textContent = "🎉";
    // Trigger small confetti burst
    if (typeof confetti === 'function') {
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
    }
  } else {
    // Incorrect
    sfx.playError();
    clickedBtn.classList.add('wrong');
    allBtns[qData.ans].classList.add('correct');
    feedbackBox.className = 'quiz-feedback-box wrong-feedback';
    feedbackTitle.textContent = "Ayo Belajar Lagi! 💡";
    feedbackIcon.textContent = "🤔";
  }

  feedbackExp.textContent = qData.exp;
  document.getElementById('quizLiveScore').innerHTML = `<i class="fa-solid fa-star text-amber"></i> Skor: ${quizScore}`;
}

function nextQuizQuestion() {
  sfx.playPop();
  currentQuizIndex++;
  if (currentQuizIndex < activeQuizQuestions.length) {
    renderQuizQuestion();
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  document.getElementById('quizPlayCard').classList.add('hidden');
  document.getElementById('quizResultCard').classList.remove('hidden');

  const finalScoreEl = document.getElementById('finalScoreVal');
  finalScoreEl.textContent = quizScore;

  const starsEl = document.getElementById('starsAwarded');
  const msgEl = document.getElementById('resultFeedbackMessage');

  // Fill recipient name on Certificate
  const nameEl = document.getElementById('certStudentName');
  const classEl = document.getElementById('certStudentClass');
  if (nameEl) nameEl.textContent = currentQuizStudent.name || 'Siswa Berprestasi';
  if (classEl) classEl.textContent = currentQuizStudent.studentClass || 'Sekolah Dasar';

  let starsText = "⭐⭐⭐";
  let gradeText = "Sempurna";

  if (quizScore >= 90) {
    starsText = "⭐⭐⭐";
    gradeText = "Sempurna";
    starsEl.textContent = "⭐⭐⭐";
    msgEl.textContent = `Selamat ${currentQuizStudent.name}! Kamu adalah Sang Juara Matematika Bangun Ruang Sekolah Dasar!`;
    sfx.playSuccess();
    if (typeof confetti === 'function') {
      confetti({ particleCount: 120, spread: 100, origin: { y: 0.5 } });
    }
  } else if (quizScore >= 70) {
    starsText = "⭐⭐☆";
    gradeText = "Hebat";
    starsEl.textContent = "⭐⭐☆";
    msgEl.textContent = `Hebat sekali ${currentQuizStudent.name}! Pemahamanmu tentang bangun ruang sudah sangat baik, terus tingkatkan ya!`;
    sfx.playSuccess();
  } else {
    starsText = "⭐☆☆";
    gradeText = "Perlu Belajar";
    starsEl.textContent = "⭐☆☆";
    msgEl.textContent = `Semangat ${currentQuizStudent.name}! Buka kembali menu Eksplorasi 3D dan Jaring-jaring untuk melihat sifat-sifat bangun ruang.`;
  }

  // Format Date (e.g., "18 Okt 2026, 08:35")
  const now = new Date();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const formattedDate = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}, ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  const record = {
    id: Date.now(),
    name: currentQuizStudent.name || 'Siswa Juara',
    studentClass: currentQuizStudent.studentClass || 'Sekolah Dasar',
    score: quizScore,
    maxScore: 100,
    stars: starsText,
    grade: gradeText,
    date: formattedDate
  };

  // Save to LocalStorage and update table
  saveQuizHistory(record);
}

function retryQuiz() {
  sfx.playPop();
  document.getElementById('quizResultCard').classList.add('hidden');
  document.getElementById('quizIntroCard').classList.remove('hidden');
  const nameInput = document.getElementById('studentNameInput');
  if (nameInput) nameInput.focus();
}

function scrollToHistory() {
  sfx.playPop();
  const histCard = document.getElementById('quizHistoryCard');
  if (histCard) {
    histCard.scrollIntoView({ behavior: 'smooth' });
  }
}



// ========================================================
// OFFLINE STANDALONE QR CODE GENERATOR LIBRARY (QRCode.js)
// ========================================================
var QRCode;!function(){function a(a){this.mode=c.MODE_8BIT_BYTE,this.data=a,this.parsedData=[];for(var b=[],d=0,e=this.data.length;e>d;d++){var f=this.data.charCodeAt(d);f>65536?(b[0]=240|(1835008&f)>>>18,b[1]=128|(258048&f)>>>12,b[2]=128|(4032&f)>>>6,b[3]=128|63&f):f>2048?(b[0]=224|(61440&f)>>>12,b[1]=128|(4032&f)>>>6,b[2]=128|63&f):f>128?(b[0]=192|(1984&f)>>>6,b[1]=128|63&f):b[0]=f,this.parsedData=this.parsedData.concat(b)}this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function b(a,b){this.typeNumber=a,this.errorCorrectLevel=b,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function i(a,b){if(void 0==a.length)throw new Error(a.length+"/"+b);for(var c=0;c<a.length&&0==a[c];)c++;this.num=new Array(a.length-c+b);for(var d=0;d<a.length-c;d++)this.num[d]=a[d+c]}function j(a,b){this.totalCount=a,this.dataCount=b}function k(){this.buffer=[],this.length=0}function m(){return"undefined"!=typeof CanvasRenderingContext2D}function n(){var a=!1,b=navigator.userAgent;return/android/i.test(b)&&(a=!0,aMat=b.toString().match(/android ([0-9]\.[0-9])/i),aMat&&aMat[1]&&(a=parseFloat(aMat[1]))),a}function r(a,b){for(var c=1,e=s(a),f=0,g=l.length;g>=f;f++){var h=0;switch(b){case d.L:h=l[f][0];break;case d.M:h=l[f][1];break;case d.Q:h=l[f][2];break;case d.H:h=l[f][3]}if(h>=e)break;c++}if(c>l.length)throw new Error("Too long data");return c}function s(a){var b=encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return b.length+(b.length!=a?3:0)}a.prototype={getLength:function(){return this.parsedData.length},write:function(a){for(var b=0,c=this.parsedData.length;c>b;b++)a.put(this.parsedData[b],8)}},b.prototype={addData:function(b){var c=new a(b);this.dataList.push(c),this.dataCache=null},isDark:function(a,b){if(0>a||this.moduleCount<=a||0>b||this.moduleCount<=b)throw new Error(a+","+b);return this.modules[a][b]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,c){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++){this.modules[d]=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[d][e]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(a,c),this.typeNumber>=7&&this.setupTypeNumber(a),null==this.dataCache&&(this.dataCache=b.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,c)},setupPositionProbePattern:function(a,b){for(var c=-1;7>=c;c++)if(!(-1>=a+c||this.moduleCount<=a+c))for(var d=-1;7>=d;d++)-1>=b+d||this.moduleCount<=b+d||(this.modules[a+c][b+d]=c>=0&&6>=c&&(0==d||6==d)||d>=0&&6>=d&&(0==c||6==c)||c>=2&&4>=c&&d>=2&&4>=d?!0:!1)},getBestMaskPattern:function(){for(var a=0,b=0,c=0;8>c;c++){this.makeImpl(!0,c);var d=f.getLostPoint(this);(0==c||a>d)&&(a=d,b=c)}return b},createMovieClip:function(a,b,c){var d=a.createEmptyMovieClip(b,c),e=1;this.make();for(var f=0;f<this.modules.length;f++)for(var g=f*e,h=0;h<this.modules[f].length;h++){var i=h*e,j=this.modules[f][h];j&&(d.beginFill(0,100),d.moveTo(i,g),d.lineTo(i+e,g),d.lineTo(i+e,g+e),d.lineTo(i,g+e),d.endFill())}return d},setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(var b=8;b<this.moduleCount-8;b++)null==this.modules[6][b]&&(this.modules[6][b]=0==b%2)},setupPositionAdjustPattern:function(){for(var a=f.getPatternPosition(this.typeNumber),b=0;b<a.length;b++)for(var c=0;c<a.length;c++){var d=a[b],e=a[c];if(null==this.modules[d][e])for(var g=-2;2>=g;g++)for(var h=-2;2>=h;h++)this.modules[d+g][e+h]=-2==g||2==g||-2==h||2==h||0==g&&0==h?!0:!1}},setupTypeNumber:function(a){for(var b=f.getBCHTypeNumber(this.typeNumber),c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[Math.floor(c/3)][c%3+this.moduleCount-8-3]=d}for(var c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[c%3+this.moduleCount-8-3][Math.floor(c/3)]=d}},setupTypeInfo:function(a,b){for(var c=this.errorCorrectLevel<<3|b,d=f.getBCHTypeInfo(c),e=0;15>e;e++){var g=!a&&1==(1&d>>e);6>e?this.modules[e][8]=g:8>e?this.modules[e+1][8]=g:this.modules[this.moduleCount-15+e][8]=g}for(var e=0;15>e;e++){var g=!a&&1==(1&d>>e);8>e?this.modules[8][this.moduleCount-e-1]=g:9>e?this.modules[8][15-e-1+1]=g:this.modules[8][15-e-1]=g}this.modules[this.moduleCount-8][8]=!a},mapData:function(a,b){for(var c=-1,d=this.moduleCount-1,e=7,g=0,h=this.moduleCount-1;h>0;h-=2)for(6==h&&h--;;){for(var i=0;2>i;i++)if(null==this.modules[d][h-i]){var j=!1;g<a.length&&(j=1==(1&a[g]>>>e));var k=f.getMask(b,d,h-i);k&&(j=!j),this.modules[d][h-i]=j,e--,-1==e&&(g++,e=7)}if(d+=c,0>d||this.moduleCount<=d){d-=c,c=-c;break}}}},b.PAD0=236,b.PAD1=17,b.createData=function(a,c,d){for(var e=j.getRSBlocks(a,c),g=new k,h=0;h<d.length;h++){var i=d[h];g.put(i.mode,4),g.put(i.getLength(),f.getLengthInBits(i.mode,a)),i.write(g)}for(var l=0,h=0;h<e.length;h++)l+=e[h].dataCount;if(g.getLengthInBits()>8*l)throw new Error("code length overflow. ("+g.getLengthInBits()+">"+8*l+")");for(g.getLengthInBits()+4<=8*l&&g.put(0,4);0!=g.getLengthInBits()%8;)g.putBit(!1);for(;;){if(g.getLengthInBits()>=8*l)break;if(g.put(b.PAD0,8),g.getLengthInBits()>=8*l)break;g.put(b.PAD1,8)}return b.createBytes(g,e)},b.createBytes=function(a,b){for(var c=0,d=0,e=0,g=new Array(b.length),h=new Array(b.length),j=0;j<b.length;j++){var k=b[j].dataCount,l=b[j].totalCount-k;d=Math.max(d,k),e=Math.max(e,l),g[j]=new Array(k);for(var m=0;m<g[j].length;m++)g[j][m]=255&a.buffer[m+c];c+=k;var n=f.getErrorCorrectPolynomial(l),o=new i(g[j],n.getLength()-1),p=o.mod(n);h[j]=new Array(n.getLength()-1);for(var m=0;m<h[j].length;m++){var q=m+p.getLength()-h[j].length;h[j][m]=q>=0?p.get(q):0}}for(var r=0,m=0;m<b.length;m++)r+=b[m].totalCount;for(var s=new Array(r),t=0,m=0;d>m;m++)for(var j=0;j<b.length;j++)m<g[j].length&&(s[t++]=g[j][m]);for(var m=0;e>m;m++)for(var j=0;j<b.length;j++)m<h[j].length&&(s[t++]=h[j][m]);return s};for(var c={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},d={L:1,M:0,Q:3,H:2},e={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var b=a<<10;f.getBCHDigit(b)-f.getBCHDigit(f.G15)>=0;)b^=f.G15<<f.getBCHDigit(b)-f.getBCHDigit(f.G15);return(a<<10|b)^f.G15_MASK},getBCHTypeNumber:function(a){for(var b=a<<12;f.getBCHDigit(b)-f.getBCHDigit(f.G18)>=0;)b^=f.G18<<f.getBCHDigit(b)-f.getBCHDigit(f.G18);return a<<12|b},getBCHDigit:function(a){for(var b=0;0!=a;)b++,a>>>=1;return b},getPatternPosition:function(a){return f.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,b,c){switch(a){case e.PATTERN000:return 0==(b+c)%2;case e.PATTERN001:return 0==b%2;case e.PATTERN010:return 0==c%3;case e.PATTERN011:return 0==(b+c)%3;case e.PATTERN100:return 0==(Math.floor(b/2)+Math.floor(c/3))%2;case e.PATTERN101:return 0==b*c%2+b*c%3;case e.PATTERN110:return 0==(b*c%2+b*c%3)%2;case e.PATTERN111:return 0==(b*c%3+(b+c)%2)%2;default:throw new Error("bad maskPattern:"+a)}},getErrorCorrectPolynomial:function(a){for(var b=new i([1],0),c=0;a>c;c++)b=b.multiply(new i([1,g.gexp(c)],0));return b},getLengthInBits:function(a,b){if(b>=1&&10>b)switch(a){case c.MODE_NUMBER:return 10;case c.MODE_ALPHA_NUM:return 9;case c.MODE_8BIT_BYTE:return 8;case c.MODE_KANJI:return 8;default:throw new Error("mode:"+a)}else if(27>b)switch(a){case c.MODE_NUMBER:return 12;case c.MODE_ALPHA_NUM:return 11;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 10;default:throw new Error("mode:"+a)}else{if(!(41>b))throw new Error("type:"+b);switch(a){case c.MODE_NUMBER:return 14;case c.MODE_ALPHA_NUM:return 13;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 12;default:throw new Error("mode:"+a)}}},getLostPoint:function(a){for(var b=a.getModuleCount(),c=0,d=0;b>d;d++)for(var e=0;b>e;e++){for(var f=0,g=a.isDark(d,e),h=-1;1>=h;h++)if(!(0>d+h||d+h>=b))for(var i=-1;1>=i;i++)0>e+i||e+i>=b||(0!=h||0!=i)&&g==a.isDark(d+h,e+i)&&f++;f>5&&(c+=3+f-5)}for(var d=0;b-1>d;d++)for(var e=0;b-1>e;e++){var j=0;a.isDark(d,e)&&j++,a.isDark(d+1,e)&&j++,a.isDark(d,e+1)&&j++,a.isDark(d+1,e+1)&&j++,(0==j||4==j)&&(c+=3)}for(var d=0;b>d;d++)for(var e=0;b-6>e;e++)a.isDark(d,e)&&!a.isDark(d,e+1)&&a.isDark(d,e+2)&&a.isDark(d,e+3)&&a.isDark(d,e+4)&&!a.isDark(d,e+5)&&a.isDark(d,e+6)&&(c+=40);for(var e=0;b>e;e++)for(var d=0;b-6>d;d++)a.isDark(d,e)&&!a.isDark(d+1,e)&&a.isDark(d+2,e)&&a.isDark(d+3,e)&&a.isDark(d+4,e)&&!a.isDark(d+5,e)&&a.isDark(d+6,e)&&(c+=40);for(var k=0,e=0;b>e;e++)for(var d=0;b>d;d++)a.isDark(d,e)&&k++;var l=Math.abs(100*k/b/b-50)/5;return c+=10*l}},g={glog:function(a){if(1>a)throw new Error("glog("+a+")");return g.LOG_TABLE[a]},gexp:function(a){for(;0>a;)a+=255;for(;a>=256;)a-=255;return g.EXP_TABLE[a]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},h=0;8>h;h++)g.EXP_TABLE[h]=1<<h;for(var h=8;256>h;h++)g.EXP_TABLE[h]=g.EXP_TABLE[h-4]^g.EXP_TABLE[h-5]^g.EXP_TABLE[h-6]^g.EXP_TABLE[h-8];for(var h=0;255>h;h++)g.LOG_TABLE[g.EXP_TABLE[h]]=h;i.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var b=new Array(this.getLength()+a.getLength()-1),c=0;c<this.getLength();c++)for(var d=0;d<a.getLength();d++)b[c+d]^=g.gexp(g.glog(this.get(c))+g.glog(a.get(d)));return new i(b,0)},mod:function(a){if(this.getLength()-a.getLength()<0)return this;for(var b=g.glog(this.get(0))-g.glog(a.get(0)),c=new Array(this.getLength()),d=0;d<this.getLength();d++)c[d]=this.get(d);for(var d=0;d<a.getLength();d++)c[d]^=g.gexp(g.glog(a.get(d))+b);return new i(c,0).mod(a)}},j.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],j.getRSBlocks=function(a,b){var c=j.getRsBlockTable(a,b);if(void 0==c)throw new Error("bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+b);for(var d=c.length/3,e=[],f=0;d>f;f++)for(var g=c[3*f+0],h=c[3*f+1],i=c[3*f+2],k=0;g>k;k++)e.push(new j(h,i));return e},j.getRsBlockTable=function(a,b){switch(b){case d.L:return j.RS_BLOCK_TABLE[4*(a-1)+0];case d.M:return j.RS_BLOCK_TABLE[4*(a-1)+1];case d.Q:return j.RS_BLOCK_TABLE[4*(a-1)+2];case d.H:return j.RS_BLOCK_TABLE[4*(a-1)+3];default:return void 0}},k.prototype={get:function(a){var b=Math.floor(a/8);return 1==(1&this.buffer[b]>>>7-a%8)},put:function(a,b){for(var c=0;b>c;c++)this.putBit(1==(1&a>>>b-c-1))},getLengthInBits:function(){return this.length},putBit:function(a){var b=Math.floor(this.length/8);this.buffer.length<=b&&this.buffer.push(0),a&&(this.buffer[b]|=128>>>this.length%8),this.length++}};var l=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],o=function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){function g(a,b){var c=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)b.hasOwnProperty(d)&&c.setAttribute(d,b[d]);return c}var b=this._htOption,c=this._el,d=a.getModuleCount();Math.floor(b.width/d),Math.floor(b.height/d),this.clear();var h=g("svg",{viewBox:"0 0 "+String(d)+" "+String(d),width:"100%",height:"100%",fill:b.colorLight});h.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),c.appendChild(h),h.appendChild(g("rect",{fill:b.colorDark,width:"1",height:"1",id:"template"}));for(var i=0;d>i;i++)for(var j=0;d>j;j++)if(a.isDark(i,j)){var k=g("use",{x:String(i),y:String(j)});k.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),h.appendChild(k)}},a.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},a}(),p="svg"===document.documentElement.tagName.toLowerCase(),q=p?o:m()?function(){function a(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}function d(a,b){var c=this;if(c._fFail=b,c._fSuccess=a,null===c._bSupportDataURI){var d=document.createElement("img"),e=function(){c._bSupportDataURI=!1,c._fFail&&_fFail.call(c)},f=function(){c._bSupportDataURI=!0,c._fSuccess&&c._fSuccess.call(c)};return d.onabort=e,d.onerror=e,d.onload=f,d.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",void 0}c._bSupportDataURI===!0&&c._fSuccess?c._fSuccess.call(c):c._bSupportDataURI===!1&&c._fFail&&c._fFail.call(c)}if(this._android&&this._android<=2.1){var b=1/window.devicePixelRatio,c=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(a,d,e,f,g,h,i,j){if("nodeName"in a&&/img/i.test(a.nodeName))for(var l=arguments.length-1;l>=1;l--)arguments[l]=arguments[l]*b;else"undefined"==typeof j&&(arguments[1]*=b,arguments[2]*=b,arguments[3]*=b,arguments[4]*=b);c.apply(this,arguments)}}var e=function(a,b){this._bIsPainted=!1,this._android=n(),this._htOption=b,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=b.width,this._elCanvas.height=b.height,a.appendChild(this._elCanvas),this._el=a,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return e.prototype.draw=function(a){var b=this._elImage,c=this._oContext,d=this._htOption,e=a.getModuleCount(),f=d.width/e,g=d.height/e,h=Math.round(f),i=Math.round(g);b.style.display="none",this.clear();for(var j=0;e>j;j++)for(var k=0;e>k;k++){var l=a.isDark(j,k),m=k*f,n=j*g;c.strokeStyle=l?d.colorDark:d.colorLight,c.lineWidth=1,c.fillStyle=l?d.colorDark:d.colorLight,c.fillRect(m,n,f,g),c.strokeRect(Math.floor(m)+.5,Math.floor(n)+.5,h,i),c.strokeRect(Math.ceil(m)-.5,Math.ceil(n)-.5,h,i)}this._bIsPainted=!0},e.prototype.makeImage=function(){this._bIsPainted&&d.call(this,a)},e.prototype.isPainted=function(){return this._bIsPainted},e.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},e.prototype.round=function(a){return a?Math.floor(1e3*a)/1e3:a},e}():function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){for(var b=this._htOption,c=this._el,d=a.getModuleCount(),e=Math.floor(b.width/d),f=Math.floor(b.height/d),g=['<table style="border:0;border-collapse:collapse;">'],h=0;d>h;h++){g.push("<tr>");for(var i=0;d>i;i++)g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+e+"px;height:"+f+"px;background-color:"+(a.isDark(h,i)?b.colorDark:b.colorLight)+';"></td>');g.push("</tr>")}g.push("</table>"),c.innerHTML=g.join("");var j=c.childNodes[0],k=(b.width-j.offsetWidth)/2,l=(b.height-j.offsetHeight)/2;k>0&&l>0&&(j.style.margin=l+"px "+k+"px")},a.prototype.clear=function(){this._el.innerHTML=""},a}();QRCode=function(a,b){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:d.H},"string"==typeof b&&(b={text:b}),b)for(var c in b)this._htOption[c]=b[c];"string"==typeof a&&(a=document.getElementById(a)),this._android=n(),this._el=a,this._oQRCode=null,this._oDrawing=new q(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},QRCode.prototype.makeCode=function(a){this._oQRCode=new b(r(a,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(a),this._oQRCode.make(),this._el.title=a,this._oDrawing.draw(this._oQRCode),this.makeImage()},QRCode.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},QRCode.prototype.clear=function(){this._oDrawing.clear()},QRCode.CorrectLevel=d}();

// ========================================================
// PRESENTATION BARCODE / QR CODE FEATURE
// Live URL: https://nurul-soneta.vercel.app/
// ========================================================
let presentationQrInstance = null;
let modalProjectorQrInstance = null;
let currentBasePresentationUrl = 'https://nurul-soneta.vercel.app/';
let currentSelectedDest = 'home'; // 'home' | 'kamera' | 'kuis' | 'eksplorasi'

function getFinalPresentationUrl() {
  let base = currentBasePresentationUrl.trim() || 'https://nurul-soneta.vercel.app/';
  base = base.split('#')[0];
  if (!base.endsWith('/') && !base.includes('?')) {
    base += '/';
  }
  if (currentSelectedDest === 'kamera') return base + '#tab-kamera';
  if (currentSelectedDest === 'kuis') return base + '#tab-kuis';
  if (currentSelectedDest === 'eksplorasi') return base + '#tab-eksplorasi';
  return base;
}

function renderPresentationQrCodes() {
  const url = getFinalPresentationUrl();

  // Update card URL badge
  const urlDisplay = document.getElementById('qrUrlText');
  if (urlDisplay) urlDisplay.textContent = url;

  // Update projector URL pill
  const projUrlDisplay = document.getElementById('projectorUrlDisplay');
  if (projUrlDisplay) projUrlDisplay.textContent = url;

  // Update projector target banner
  const targetBanner = document.getElementById('projectorTargetBanner');
  if (targetBanner) {
    const titles = {
      home: 'Beranda & Aplikasi Utama Pembelajaran',
      kamera: 'Detektor Kamera AI Bangun Ruang 📸',
      kuis: 'Tantangan Kuis Juara Matematika 🏆',
      eksplorasi: 'Eksplorasi 3D & 5D Bangun Ruang 🧊'
    };
    targetBanner.innerHTML = 'Halaman yang dibuka saat discan: <strong>' + (titles[currentSelectedDest] || titles.home) + '</strong>';
  }

  // 1. Render on main card
  const cardBox = document.getElementById('presentationQrCode');
  if (cardBox && typeof QRCode !== 'undefined') {
    cardBox.innerHTML = '';
    try {
      presentationQrInstance = new QRCode(cardBox, {
        text: url,
        width: 200,
        height: 200,
        colorDark: '#0F172A',
        colorLight: '#FFFFFF',
        correctLevel: QRCode.CorrectLevel.H
      });
    } catch(e) {
      console.warn('QR render error:', e);
    }
  }

  // 2. Render on projector modal
  const modalBox = document.getElementById('modalProjectorQrCode');
  if (modalBox && typeof QRCode !== 'undefined') {
    modalBox.innerHTML = '';
    try {
      modalProjectorQrInstance = new QRCode(modalBox, {
        text: url,
        width: 300,
        height: 300,
        colorDark: '#0F172A',
        colorLight: '#FFFFFF',
        correctLevel: QRCode.CorrectLevel.H
      });
    } catch(e) {
      console.warn('Projector QR render error:', e);
    }
  }
}

function setPresentationDestination(dest) {
  sfx.playPop();
  currentSelectedDest = dest;
  document.querySelectorAll('.qr-dest-chip').forEach(chip => {
    chip.classList.toggle('active', chip.getAttribute('data-dest') === dest);
  });
  renderPresentationQrCodes();
}

function copyPresentationLink() {
  const url = getFinalPresentationUrl();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      sfx.playSuccess();
      const btnText = document.getElementById('copyLinkBtnText');
      if (btnText) {
        btnText.textContent = 'Tersalin! ✅';
        setTimeout(() => btnText.textContent = 'Salin Link', 2000);
      }
    }).catch(() => {
      prompt('Salin link presentasi berikut:', url);
    });
  } else {
    prompt('Salin link presentasi berikut:', url);
  }
}

function downloadPresentationQr() {
  sfx.playSuccess();
  const cardBox = document.getElementById('presentationQrCode');
  const canvas = cardBox ? cardBox.querySelector('canvas') : null;
  const img = cardBox ? cardBox.querySelector('img') : null;

  let dataUrl = '';
  if (canvas) {
    dataUrl = canvas.toDataURL('image/png');
  } else if (img && img.src) {
    dataUrl = img.src;
  }

  if (dataUrl) {
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'Barcode_QR_Presentasi_' + currentSelectedDest + '.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

function openProjectorModal() {
  sfx.playPop();
  renderPresentationQrCodes();
  const modal = document.getElementById('projectorQrModal');
  if (modal) modal.classList.remove('hidden');
}

function closeProjectorModal() {
  sfx.playPop();
  const modal = document.getElementById('projectorQrModal');
  if (modal) modal.classList.add('hidden');
}

function initPresentationQrFeature() {
  // Destination chips
  document.querySelectorAll('.qr-dest-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const dest = chip.getAttribute('data-dest');
      if (dest) setPresentationDestination(dest);
    });
  });

  // Custom URL input
  const urlInput = document.getElementById('customPresentationUrlInput');
  if (urlInput) {
    urlInput.addEventListener('input', (e) => {
      currentBasePresentationUrl = e.target.value.trim() || 'https://nurul-soneta.vercel.app/';
      renderPresentationQrCodes();
    });
  }

  // Reset URL button
  const resetBtn = document.getElementById('resetDefaultUrlBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      sfx.playPop();
      currentBasePresentationUrl = 'https://nurul-soneta.vercel.app/';
      if (urlInput) urlInput.value = currentBasePresentationUrl;
      renderPresentationQrCodes();
    });
  }

  // Copy and Download buttons
  const copyBtn = document.getElementById('copyPresentationLinkBtn');
  if (copyBtn) copyBtn.addEventListener('click', copyPresentationLink);
  const dlBtn = document.getElementById('downloadQrImgBtn');
  if (dlBtn) dlBtn.addEventListener('click', downloadPresentationQr);

  // Projector modal buttons
  const openProjBtn = document.getElementById('openProjectorModalBtn');
  if (openProjBtn) openProjBtn.addEventListener('click', openProjectorModal);
  const closeProjBtn = document.getElementById('closeProjectorModalBtn');
  if (closeProjBtn) closeProjBtn.addEventListener('click', closeProjectorModal);
  const closeProjBottomBtn = document.getElementById('closeProjectorModalBottomBtn');
  if (closeProjBottomBtn) closeProjBottomBtn.addEventListener('click', closeProjectorModal);

  const projModal = document.getElementById('projectorQrModal');
  if (projModal) {
    projModal.addEventListener('click', (e) => {
      if (e.target === projModal) closeProjectorModal();
    });
  }

  // Render initial QR
  setTimeout(renderPresentationQrCodes, 80);
}

// Auto hash navigation (e.g. participant scans QR with #tab-kamera)
function checkInitialTabFromHash() {
  const hash = window.location.hash.replace('#tab-', '').replace('#', '');
  if (['home', 'eksplorasi', 'jaring', 'kalkulator', 'kamera', 'kuis'].includes(hash)) {
    switchTab(hash);
  }
}
window.addEventListener('hashchange', checkInitialTabFromHash);

// --- TAB SWITCHER ---
function switchTab(tabId) {
  sfx.playPop();
  // Update nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
  });

  // Update tab sections
  document.querySelectorAll('.tab-content').forEach(section => {
    section.classList.toggle('active', section.id === `tab-${tabId}`);
  });

  // Resize Three.js if returning to 3D explorer
  // Stop camera if navigating away from camera tab
  if (typeof cameraMediaStream !== 'undefined' && cameraMediaStream && tabId !== 'kamera') {
    stopCameraScanner();
  }

  if (tabId === 'eksplorasi') {
    setTimeout(onWindowResize, 50);
  } else if (tabId === 'jaring') {
    updateJaringDisplay();
  } else if (tabId === 'kalkulator') {
    buildCalcSliders(currentCalcShape);
  }
}

// --- SETUP EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize 3D Engine
  initThreeEngine();

  
  // Dimension Selector Buttons (3D / 4D / 5D)
  document.querySelectorAll('.dim-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const dim = btn.getAttribute('data-dim');
      setDimension(dim);
    });
  });

  // 2. Tab Navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      switchTab(tab);
    });
  });

  // 3. Shape Selector Pills in Tab 1
  document.querySelectorAll('.shape-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      sfx.playPop();
      document.querySelectorAll('.shape-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const shape = pill.getAttribute('data-shape');
      loadShape(shape);
    });
  });

  // 4. 3D Floating Toolbar Controls
  // Auto Rotate Toggle
  const rotateBtn = document.getElementById('toggleRotateBtn');
  rotateBtn.addEventListener('click', () => {
    sfx.playPop();
    autoRotate = !autoRotate;
    rotateBtn.classList.toggle('active', autoRotate);
  });

  // Vertices Toggle
  const verticesBtn = document.getElementById('toggleVerticesBtn');
  verticesBtn.addEventListener('click', () => {
    sfx.playPop();
    showVertices = !showVertices;
    verticesBtn.classList.toggle('active', showVertices);
    if (currentVerticesGroup) {
      currentVerticesGroup.visible = showVertices;
    }
  });

  // Edges Toggle
  const edgesBtn = document.getElementById('toggleEdgesBtn');
  edgesBtn.addEventListener('click', () => {
    sfx.playPop();
    showEdges = !showEdges;
    edgesBtn.classList.toggle('active', showEdges);
    if (currentEdgesLine) {
      currentEdgesLine.material.opacity = showEdges ? 0.95 : 0;
    }
  });

  // Wireframe Toggle
  const wireBtn = document.getElementById('toggleWireframeBtn');
  wireBtn.addEventListener('click', () => {
    sfx.playPop();
    wireframeMode = !wireframeMode;
    wireBtn.classList.toggle('active', wireframeMode);
    if (currentMeshGroup && currentMeshGroup.children[0]) {
      currentMeshGroup.children[0].material.wireframe = wireframeMode;
    }
  });

  // Reset to Geometric Shape Button
  const resetToGeo = document.getElementById('resetToGeoBtn');
  if (resetToGeo) {
    resetToGeo.addEventListener('click', () => {
      sfx.playPop();
      loadShape(currentShapeKey);
    });
  }


  // 4D Folding Animation Toggle
  const foldBtn = document.getElementById('btnFoldToggle');
  if (foldBtn) {
    foldBtn.addEventListener('click', () => {
      sfx.playPop();
      triggerHaptic([40, 50, 40]);
      isFolding4D = !isFolding4D;
      foldBtn.classList.toggle('active', isFolding4D);

      if (isFolding4D) {
        // Switch mesh group to folding net model
        if (currentMeshGroup) scene.remove(currentMeshGroup);
        currentMeshGroup = createFoldingCubeGroup();
        scene.add(currentMeshGroup);
        foldingProgress = 1.0;
        foldingDir = -1;
        document.getElementById('currentShapeLabel').innerHTML = 'Animasi 4D: <strong>Melipat Kubus (Waktu)</strong> ⏱️';
        document.getElementById('mascotTip').innerHTML = 'Lihat! Ini adalah <strong>Dimensi ke-4 (Waktu & Transformasi)</strong>: Kamu bisa melihat langsung bagaimana jaring-jaring 2D melipat naik membentuk kubus 3D!';
      } else {
        loadShape(currentShapeKey);
      }
    });
  }

  // 5D Particle Atmosphere Toggle
  const particleBtn = document.getElementById('btnParticleToggle');
  if (particleBtn) {
    particleBtn.addEventListener('click', () => {
      sfx.playPop();
      show5DParticles = !show5DParticles;
      particleBtn.classList.toggle('active', show5DParticles);
      if (particles5D) particles5D.visible = show5DParticles;
    });
  }

  // Reset Camera View
  const resetBtn = document.getElementById('resetCamBtn');
  resetBtn.addEventListener('click', () => {
    sfx.playPop();
    camera.position.set(4.2, 3.2, 5.5);
    controls.target.set(0, 0, 0);
  });

  // Color Palette Dots
  document.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      sfx.playPop();
      document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      activeColor = dot.getAttribute('data-color');
      if (currentMeshGroup && currentMeshGroup.children[0]) {
        currentMeshGroup.children[0].material.color.set(activeColor);
      }
    });
  });

  // 5. Jaring-Jaring Controls
  const jaringSelect = document.getElementById('jaringShapeSelect');
  jaringSelect.addEventListener('change', () => {
    sfx.playPop();
    updateJaringDisplay();
  });

  document.querySelectorAll('#cubePatternControls .sub-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      sfx.playPop();
      document.querySelectorAll('#cubePatternControls .sub-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCubePattern = parseInt(pill.getAttribute('data-pattern'));
      updateJaringDisplay();
    });
  });

  // 6. Calculator Controls
  const calcSelect = document.getElementById('calcShapeSelect');
  calcSelect.addEventListener('change', () => {
    sfx.playPop();
    buildCalcSliders(calcSelect.value);
  });

  // 7. Quiz Controls
  // --- Camera Scanner Event Listeners ---
  const toggleCamBtn = document.getElementById('toggleCameraBtn');
  if (toggleCamBtn) toggleCamBtn.addEventListener('click', toggleCamera);
  const startCamPlaceholderBtn = document.getElementById('startCameraPlaceholderBtn');
  if (startCamPlaceholderBtn) startCamPlaceholderBtn.addEventListener('click', startCameraScanner);
  const switchFacingBtn = document.getElementById('switchCamFacingBtn');
  if (switchFacingBtn) switchFacingBtn.addEventListener('click', switchCameraFacing);
  const cycleFrameBtn = document.getElementById('cycleFrameSizeBtn');
  if (cycleFrameBtn) cycleFrameBtn.addEventListener('click', cycleFrameSize);
  const captureBtn = document.getElementById('captureScanBtn');
  if (captureBtn) captureBtn.addEventListener('click', captureAndScan);



  const uploadInput = document.getElementById('fileUploadInput');
  if (uploadInput) uploadInput.addEventListener('change', handleImageFileUpload);

  // Direct Click/Tap on Reticle Box or Viewport to Instantly Capture & Detect
  const scannerFrameBox = document.querySelector('.scanner-frame');
  const viewfinderViewportEl = document.querySelector('.viewfinder-viewport');

  let touchHandled = false;

  function handleBoxDirectCapture(e) {
    if (cameraMediaStream) {
      if (e) {
        e.stopPropagation();
        e.preventDefault();
      }
      captureAndScan();
    }
  }

  if (scannerFrameBox) {
    scannerFrameBox.addEventListener('touchstart', () => {
      touchHandled = true;
    }, { passive: true });

    scannerFrameBox.addEventListener('touchend', (e) => {
      if (cameraMediaStream) {
        e.preventDefault();
        captureAndScan();
        setTimeout(() => { touchHandled = false; }, 400);
      }
    }, { passive: false });

    scannerFrameBox.addEventListener('click', (e) => {
      if (touchHandled) return;
      handleBoxDirectCapture(e);
    });
  }

  if (viewfinderViewportEl) {
    viewfinderViewportEl.addEventListener('click', (e) => {
      if (touchHandled) return;
      if (e.target.closest('#cameraOffPlaceholder') || e.target.closest('button') || e.target.closest('label') || e.target.closest('.scanner-frame')) {
        return;
      }
      if (cameraMediaStream) {
        captureAndScan();
      }
    });
  }

  // Warm up AI model in background early on page load
  setTimeout(() => {
    initAIVisionModel();
  }, 1200);

  // Pre-fill student identity if stored
  try {
    const savedName = localStorage.getItem('last_student_name');
    const savedClass = localStorage.getItem('last_student_class');
    if (savedName) {
      const nameInput = document.getElementById('studentNameInput');
      if (nameInput) nameInput.value = savedName;
    }
    if (savedClass) {
      const classSelect = document.getElementById('studentClassSelect');
      if (classSelect) classSelect.value = savedClass;
    }
  } catch (e) {}

  // Render initial history table
  renderHistoryTable();

  // 7. Quiz Controls
  const startBtn = document.getElementById('startQuizBtn');
  if (startBtn) startBtn.addEventListener('click', startQuiz);
  const nextBtn = document.getElementById('nextQuestionBtn');
  if (nextBtn) nextBtn.addEventListener('click', nextQuizQuestion);
  const clearHistBtn = document.getElementById('clearHistoryBtn');
  if (clearHistBtn) clearHistBtn.addEventListener('click', clearAllQuizHistory);
  document.getElementById('retryQuizBtn').addEventListener('click', startQuiz);

  // 8. Sound Toggle Header Action
  const soundBtn = document.getElementById('soundToggleBtn');
  soundBtn.addEventListener('click', () => {
    sfx.enabled = !sfx.enabled;
    soundBtn.innerHTML = sfx.enabled 
      ? '<i class="fa-solid fa-volume-high"></i>' 
      : '<i class="fa-solid fa-volume-xmark"></i>';
    if (sfx.enabled) sfx.playPop();
  });

  // 9. Info / Help Modal
  const infoModal = document.getElementById('infoModal');
  const infoBtn = document.getElementById('infoModalBtn');
  const closeBtn = document.getElementById('closeModalBtn');
  const understandBtn = document.getElementById('modalUnderstandBtn');

  function openModal() {
    sfx.playPop();
    infoModal.classList.remove('hidden');
  }
  function closeModal() {
    sfx.playPop();
    infoModal.classList.add('hidden');
  }

  infoBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  understandBtn.addEventListener('click', closeModal);
  infoModal.addEventListener('click', (e) => {
    if (e.target === infoModal) closeModal();
  });

  // Initial runs
  updateJaringDisplay();
  buildCalcSliders('kubus');
  checkInitialTabFromHash();
  initPresentationQrFeature();
});

// Explicit window bindings for inline HTML handlers
window.switchTab = switchTab;
window.applyPreset = applyPreset;
window.startQuiz = startQuiz;

window.deleteHistoryItem = deleteHistoryItem;
window.clearAllQuizHistory = clearAllQuizHistory;
window.retryQuiz = retryQuiz;
window.scrollToHistory = scrollToHistory;

window.toggleCamera = toggleCamera;
window.startCameraScanner = startCameraScanner;
window.stopCameraScanner = stopCameraScanner;
window.switchCameraFacing = switchCameraFacing;
window.cycleFrameSize = cycleFrameSize;
window.captureAndScan = captureAndScan;
window.testSampleObject = testSampleObject;
window.resetDetectionView = resetDetectionView;
window.open3DModelFromDetection = open3DModelFromDetection;
window.manuallyCorrectDetection = manuallyCorrectDetection;

window.setPresentationDestination = setPresentationDestination;
window.copyPresentationLink = copyPresentationLink;
window.downloadPresentationQr = downloadPresentationQr;
window.openProjectorModal = openProjectorModal;
window.closeProjectorModal = closeProjectorModal;
window.renderPresentationQrCodes = renderPresentationQrCodes;
window.setDetectionTargetGroup = setDetectionTargetGroup;
