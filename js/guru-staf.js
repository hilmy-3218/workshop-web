// 1. Array Data Pimpinan Sekolah
const dataPimpinan = [
    {
        nama: "Nur Afifuddin, S.Pd,  M.Pd.",
        jabatan: "Kepala Sekolah",
        keterangan: "Pembina Utama Muda / IV c",
        foto: "./assets/guru-staff/kepala-sekolah.png"
    },
    {
        nama: "Daviq Prasetian, S.Pd.",
        jabatan: "Waka Kurikulum",
        keterangan: "NIP. 19820317 201001 1 020",
        foto: "./assets/guru-staff/wakur.png"
    },
    {
        nama: "Yosy Setyaji, S.Pd.",
        jabatan: "Waka Sarpras",
        keterangan: "NIP. 19931215 202321 1 1014",
        foto: "./assets/guru-staff/wasar.png"
    },
    {
        nama: "Eko Prasetyo.",
        jabatan: "Waka Humas",
        keterangan: "NIP. 19791017 200903  1 003",
        foto: "./assets/guru-staff/wahum.png"
    },
    {
        nama: "Sulistyani, S.Pd., M.Pd.",
        jabatan: "Waka Kesiswaan",
        keterangan: "NIP. 19760807 200801 2 015",
        foto: "./assets/guru-staff/wakes.png"
    }
];

// 2. Array Data Dewan Guru
const dataGuru = [
    {
        nama: "Muh Prayetno, S.Ag, M.S.I",
        mapel: "Guru Agama",
        nip: "NIP. 19820815 200801 1 009",
        foto: "./assets/guru-staff/guru_agama.png"
    },
    {
        nama: "Drs. Eko Nur Budi, M.Pd.",
        mapel: "Guru Bahasa Indonesia",
        nip: "NIP. 19900322 201502 2 004",
        foto: "./assets/guru-staff/guru_bindo.png"
    },
    {
        nama: "Dartik, S.Pd.",
        mapel: "Guru PKN",
        nip: "NIP. 19870109 201201 1 005",
        foto: "./assets/guru-staff/guru_pkn.png"
    },
    {
        nama: "Moh. Muchlas, S.Pd., M.Pd.",
        mapel: "Guru Seni Rupa",
        nip: "NIP. 19730119 201301 1 015",
        foto: "./assets/guru-staff/guru_seni-rupa.png"
    },
    {
        nama: "Indriati sukorini, S.Pd, M.Pd.",
        mapel: "Guru Matematika",
        nip: "NIP. 19850412 201001 2 015",
        foto: "./assets/guru-staff/guru_mtk.png"
    },
    {
        nama: "Eni Susianti, S.Pd.",
        mapel: "Guru Kimia",
        nip: "NIP. 19781104 200501 1 003",
        foto: "./assets/guru-staff/guru_kimia.png"
    },
    {
        nama: "Farida, S.Pd.",
        mapel: "Guru Bahasa Inggris",
        nip: "NIP. 19920618 201903 2 011",
        foto: "./assets/guru-staff/guru_ing.png"
    },
    {
        nama: "Mustafa Hizkia S, S.Th., M.Pd.K",
        mapel: "Guru Agama Kristen",
        nip: "NIP. 19920618 201903 2 011",
        foto: "./assets/guru-staff/guru_aga-kristen.png"
    },
    {
        nama: "Mei Wulan Sari, S.Pd.",
        mapel: "Guru Bahasa Jawa",
        nip: "NIP. 19940210 202012 2 008",
        foto: "./assets/guru-staff/guru_jawa.png"
    },
    {
        nama: "Solikan, S.Pd.",
        mapel: "Guru Fisika",
        nip: "NIP. 19750519 200212 1 002",
        foto: "./assets/guru-staff/guru_fisika.png"
    },
    {
        nama: "Ari Wijaya, S.Kom.",
        mapel: "Guru TIK",
        nip: "NIP. 19850412 201001 2 015",
        foto: "./assets/guru-staff/guru_tik.png"
    },
    {
        nama: "Fauzul Muna, S.Pd.",
        mapel: "Guru Ekonomi",
        nip: "NIP. 19990411 201003 2 012",
        foto: "./assets/guru-staff/guru_ekonomi.png"
    }
];

// 3. Array Data Staf & Tenaga Kependidikan
const dataStaf = [
    {
        nama: "Taufiq, S.I.P.",
        posisi: "Kepala Tata Usaha",
        nip: "NIP. 19820815 200801 1 009",
        foto: "./assets/guru-staff/staf_1.png"
    },
    {
        nama: "Istiyanah, S.I.P.",
        posisi: "Administrasi & Keuangan",
        nip: "NIP. 19900322 201502 2 004",
        foto: "./assets/guru-staff/staf_2.png"
    },
    {
        nama: "Jami`atun, S.I.P.",
        posisi: "Koordinator Perpustakaan",
        nip: "NIP. 19850412 201001 2 015",
        foto: "./assets/guru-staff/staf_3.png"
    },
    {
        nama: "Ari Purnomo.",
        posisi: "Laboran Sains & Komputer",
        nip: "NIP. 19950612 201012 2 022",
        foto: "./assets/guru-staff/staf_4.png"
    }
];

// Fungsi Render Pimpinan
document.addEventListener("DOMContentLoaded", () => {

    // Tampilkan pimpinan
    const leadershipContainer = document.getElementById("leadership-container");

    dataPimpinan.forEach((pimpinan) => {
        leadershipContainer.innerHTML += `
            <div class="leader-card">
                <div class="leader-img">
                    <img src="${pimpinan.foto}" alt="${pimpinan.jabatan}">
                </div>

                <div class="leader-info">
                    <span class="leader-role">${pimpinan.jabatan}</span>
                    <h3>${pimpinan.nama}</h3>
                    <p>${pimpinan.keterangan}</p>
                </div>
            </div>
        `;
    });


    // Tampilkan guru
    const guruContainer = document.getElementById("guru-container");

    dataGuru.forEach((guru) => {
        guruContainer.innerHTML += `
            <div class="staff-card">
                <div class="staff-avatar">
                    <img src="${guru.foto}" alt="${guru.nama}">
                </div>

                <div class="staff-body">
                    <h4>${guru.nama}</h4>
                    <span class="staff-subject">${guru.mapel}</span>
                    <p class="staff-nip">${guru.nip}</p>
                </div>
            </div>
        `;
    });


    // Tampilkan staf
    const stafContainer = document.getElementById("staf-container");

    dataStaf.forEach((staf) => {
        stafContainer.innerHTML += `
            <div class="staff-card">
                <div class="staff-avatar">
                    <img src="${staf.foto}" alt="${staf.nama}">
                </div>

                <div class="staff-body">
                    <h4>${staf.nama}</h4>
                    <span class="staff-subject">${staf.posisi}</span>
                    <p class="staff-nip">${staf.nip}</p>
                </div>
            </div>
        `;
    });

});