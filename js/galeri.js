// 1. Array Data Gallery
const galleryData = [
  {
    title: "Sidang Rencana Anggaran Kegiatan (RAK) MPK & OSIS",
    category: "kegiatan",
    categoryName: "Kegiatan Siswa",
    image: "./assets/event/sidang_rak.png",
    alt: "Sidang RAK MPK dan OSIS SMA Negeri 1 Kudus",
    description:
      "Wujudkan transparansi dan efisiensi keuangan organisasi melalui pemaparan serta pengesahan Rencana Anggaran Kegiatan MPK dan OSIS SMASA.",
    link: "./details/detail-sidang-rak.html",
  },
  {
    title: "Festival Teater Pelajar (FTP) 2026",
    category: "seni",
    categoryName: "Seni & Budaya",
    image: "./assets/event/lakon.png",
    alt: "Pementasan Teater SMAN 1 Kudus di FTP 2026",
    description:
      "Penampilan memukau tim teater SMAN 1 Kudus saat membuka babak penyisihan FTP 2026 lewat lakon 'Jangan Sampai Puncak'.",
    link: "./details/detail-ftp-2026.html",
  },
  {
    title: "Peringatan Hari Santri 2026",
    category: "kegiatan",
    categoryName: "Kegiatan Siswa",
    image: "./assets/event/kota_santri.png",
    alt: "Peringatan Hari Santri 2026 di Alun-Alun Simpang Tujuh",
    description:
      "Partisipasi siswa SMAN 1 Kudus bersama ribuan peserta memadati Alun-Alun Simpang Tujuh dalam peringatan Hari Santri 2026.",
    link: "./details/detail-hari-santri-2026.html",
  },
  {
    title: "Perpustakaan SMASA",
    category: "fasilitas",
    categoryName: "Fasilitas Kampus",
    image: "./assets/event/perpustakaan.png",
    alt: "Perpustakaan SMAN 1 Kudus",
    description:
      "Fasilitas Learning Center modern dengan koleksi ribuan e-book dan jurnal riset lengkap.",
    link: "detail-perpustakaan.html",
  },
  {
    title: "Medali Emas & Perak Taekwondo Internasional",
    category: "prestasi",
    categoryName: "Prestasi & Lomba",
    image: "./assets/event/taekwondo.png",
    alt: "Prestasi Taekwondo Internasional SMAN 1 Kudus",
    description:
      "Larasati Putrinuri sukses menyabet medali emas dan perak pada ajang Pugnator International Open Taekwondo Grandslam Youth Champions 2026.",
    link: "./details/detail-taekwondo-internasional.html",
  },
  {
    title: "Laboratorium Komputer",
    category: "fasilitas",
    categoryName: "Fasilitas Kampus",
    image: "./assets/event/lab-komputer.png",
    alt: "Laboratorium Komputer SMAN 1 Kudus",
    description:
      "Laboratorium komputer SMAN 1 Kudus sebagai fasilitas penunjang pembelajaran teknologi informasi, praktik komputer, dan pengembangan keterampilan digital siswa.",
    link: "detail-lab-komputer.html",
  },
];

// 2. Ambil container
const galleryGrid = document.getElementById("galleryGrid");

// 3. Fungsi Menampilkan Gallery
function renderGallery(data) {
  galleryGrid.innerHTML = "";

  data.forEach((item) => {
    galleryGrid.innerHTML += `
      <a href="${item.link}" class="gallery-card" data-category="${item.category}">
        <img
          src="${item.image}"
          alt="${item.alt}"
          class="gallery-img"
          loading="lazy"
        />

        <div class="card-default-title">
          ${item.title}
        </div>

        <div class="gallery-overlay">
          <span class="gallery-tag">
            ${item.categoryName}
          </span>

          <h3 class="gallery-overlay-title">
            ${item.title}
          </h3>

          <p class="gallery-overlay-desc">
            ${item.description}
          </p>

          <span class="gallery-btn-link">
            Lihat Selengkapnya
            <i class="fas fa-arrow-right"></i>
          </span>
        </div>
      </a>
    `;
  });
}

// 4. Filter Gallery
function filterGallery(event, category) {
  // Mengubah tombol aktif
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  event.currentTarget.classList.add("active");

  // Memfilter data berdasarkan kategori
  if (category === "all") {
    renderGallery(galleryData);
  } else {
    const filteredData = galleryData.filter(
      (item) => item.category === category
    );

    renderGallery(filteredData);
  }
}

// 5. Jalankan saat halaman dibuka
renderGallery(galleryData);