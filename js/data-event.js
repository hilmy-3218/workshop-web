const events = [
  {
    date: "12",
    month: "OKT",
    image: "assets/event/kapolsek.png",
    alt: "Upacara Bendera dengan Pembina Kapolsek Kota",
    tag: "Kegiatan Sekolah",
    title: "Sinergi Pembentukan Karakter: Kapolsek Kota Jadi Pembina Upacara",
    description:
      "Selaku pembina upacara di SMAN 1 Kudus, Kapolsek Kota AKP Rusmanto berpesan agar siswa disiplin, jauhi kenakalan, dan bijak bermedsos.",
    time: "07:00 WIB",
    location: "Lapangan SMA Negeri 1 Kudus",
  },
  {
    date: "13",
    month: "OCT",
    image: "assets/event/taekwondo.png",
    alt: "Prestasi Medali Emas dan Perak Taekwondo Internasional SMAN 1 Kudus",
    tag: "Prestasi",
    title:
      "SMA Negeri 1 Kudus Raih Medali Emas dan Perak di Ajang Taekwondo Internasional",
    description:
      "Larasati Putrinuri, siswi SMAN 1 Kudus, sukses membawa pulang medali emas dan perak pada ajang internasional Pugnator Taekwondo Grandslam Youth Champions 2026.",
    time: "09.00",
    location: "Stadiun Kelapa Dua, Tangerang",
  },
  {
    date: "16",
    month: "OCT",
    image: "./assets/event/lakon.png",
    alt: "Pementasan lakon Jangan Sampai Puncak oleh SMAN 1 Kudus",
    tag: "Seni & Budaya",
    title:
      "Pukau Penonton Sejak Pagi, SMAN 1 Kudus Buka Festival Teater Pelajar (FTP) 2026 Lewat Lakon “Jangan Sampai Puncak”",
    description:
      "SMAN 1 Kudus sukses memukau penonton di Festival Teater Pelajar 2026 dengan lakon intens dan mistis berjudul 'Jangan Sampai Puncak'.",
    time: "08:00 WIB",
    location: "Aula SMA Negeri 1 Kudus",
  },
  {
    date: "23",
    month: "OCT",
    image: "assets/event/sidang_rak.png",
    alt: "Sidang Rencana Anggaran Kegiatan MPK dan OSIS SMAN 1 Kudus",
    tag: "Organisasi",
    title:
      "Wujudkan Transparansi Anggaran, MPK dan OSIS SMA N 1 Kudus Resmi Gelar Sidang RAK",
    description:
      "MPK dan OSIS SMAN 1 Kudus menggelar Sidang RAK untuk memaparkan program kerja serta menegakkan transparansi pengelolaan anggaran.",
    time: "09.30",
    location: "Aula SMA Negeri 1 Kudus",
  },
  {
    date: "22",
    month: "OCT",
    image: "./assets/event/kota_santri.png",
    alt: "Peringatan Hari Santri 2026 di Alun-Alun Simpang Tujuh Kudus",
    tag: "Kegiatan Sekolah",
    title:
      "Menggema di Jantung Kota Santri: Ribuan Peserta Padati Alun-Alun Simpang Tujuh Peringati Hari Santri 2026",
    description:
      "Ribuan peserta memadati Alun-Alun Simpang Tujuh Kudus dalam rangka memperingati Hari Santri 2026 dengan penuh khidmat dan semarak.",
    time: "08.30",
    location: "Alun-Alun Simpang Tujuh Kudus",
  },
  {
    date: "28",
    month: "SEP",
    image: "./assets/event/osisDanMpk.webp",
    alt: "Apel Serah Terima Jabatan OSIS dan MPK SMAN 1 Kudus Periode 2026/2027",
    tag: "Organisasi",
    title:
      "Apel Serah Terima Jabatan OSIS dan MPK SMA Negeri 1 Kudus Periode 2026/2027 Resmi Digelar",
    description:
      "Serah terima jabatan OSIS dan MPK SMAN 1 Kudus periode 2026/2027 resmi digelar di lapangan indoor sebagai awal masa kepemimpinan pengurus baru.",
    time: "07.30",
    location: "Lapangan Indoor SMA Negeri 1 Kudus",
  },
];

// Ambil container
const eventsGrid = document.getElementById("eventsGrid");

// Tampilkan data ke HTML
events.forEach((event) => {
  eventsGrid.innerHTML += `
        <div class="event-card">
            <div class="event-img">
                <img
                    src="${event.image}"
                    alt="${event.alt}"
                    class="card-img"
                    loading="lazy"
                />

                <div class="event-date">
                    ${event.date}<br />
                    <small>${event.month}</small>
                </div>
            </div>

            <div class="event-content">
                <span class="event-tag">${event.tag}</span>

                <h3>${event.title}</h3>

                <p>${event.description}</p>

                <div class="event-meta">
                    <span>
                        <i class="far fa-clock"></i>
                        ${event.time}
                    </span>

                    <span>
                        <i class="far fa-map"></i>
                        ${event.location}
                    </span>
                </div>
            </div>
        </div>
    `;
});
