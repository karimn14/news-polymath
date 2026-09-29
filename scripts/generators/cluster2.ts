import { TopicInfo } from "../../src/types.ts";
import { ArticleData, calculateReadingTime, buildRawMarkdown } from "../articleBuilderBase.ts";

export function generateCluster2Article(topic: TopicInfo): ArticleData {
  const { id, professionId, professionName, professionCategory, dayInProfession, topicTitle } = topic;
  const label = `${professionName} · Hari ${dayInProfession} dari 10`;

  let headline = "";
  let lead = "";
  let sections: Array<{ title: string; content: string }> = [];
  let takeaways: string[] = [];
  let reflectiveQuestion = "";

  if (professionId === 6) {
    // MONTIR (Topics 51-60)
    headline = `Diagnosis Mekanik Otomotif: Menelusuri Akar Masalah dalam ${topicTitle}`;
    lead = `Aroma bensin timbal, oli transmisi hangat, dan deru kompresor udara menyambut Anda di kolong lift hidrolik bengkel modern. Di hadapan Anda, sebuah SUV mewah dengan keluhan mesin pincang (misfire) tak beraturan yang telah membuat tiga bengkel sebelumnya menyerah. Terkait ${topicTitle.toLowerCase()}, seorang montir sejati bukan sekadar tukang copot baut, melainkan teknisi diagnostik sistem elektromekanik terintegrasi yang memadukan indra pendengaran tajam dengan osiloskop digital.`;
    sections = [
      {
        title: "Anatomi Kerusakan: Dari Gejala Sensorik Menuju Pembuktian Instrumentasi",
        content: `Dalam membedah ${topicTitle}, montir berpengalaman tidak langsung mengganti komponen mahal berdasarkan tebakan. Kerusakan mesin selalu meninggalkan jejak: bunyi knocking logam menandakan detonasi dini, asap putih manis mengindikasikan kebocoran paking silinder ke ruang bakar, sementara kode DTC (Diagnostic Trouble Code) P0300 memberi petunjuk kegagalan pengapian acak. Menggunakan scanner OBD-II dan membaca 'freeze frame data' memungkinkan montir melihat kondisi rpm, beban mesin, dan suhu pendingin tepat di detik kegagalan terjadi.`
      },
      {
        title: "Sistem Terdistribusi Mobil Modern: Mengapa Kendaraan Kini Adalah Jaringan Komputer Bergerak",
        content: `Mobil masa kini memiliki 70 hingga 100 ECU (Electronic Control Unit) yang saling berkomunikasi melalui protokol CAN-Bus (Controller Area Network). Kegagalan pada sensor sudut kemudi dapat melumpuhkan sistem kontrol traksi (ESP) dan transmisi otomatis secara bersamaan. Montir profesional memeriksa integritas sinyal tegangan diferensial CAN-High dan CAN-Low dengan osiloskop 2-channel, memastikan tidak ada lonjakan noise elektromagnetik atau resistansi terminasi 120-ohm yang putus.`
      },
      {
        title: "Trade-off Suku Cadang: OEM, Aftermarket Berkualitas, vs Bahaya KW di Lapangan",
        content: `Salah satu dilema etika dan operasional harian di bengkel adalah memilih suku cadang. Suku cadang OEM menjamin toleransi mikron pabrik namun berharga selangit; aftermarket berstandar ISO menawarkan efisiensi biaya; sedangkan barang tiruan (KW) menyimpan risiko kegagalan katastrofik, seperti timing belt putus yang menghancurkan seluruh klep mesin. Mengedukasi pelanggan dengan transparansi teknis adalah pembeda antara bengkel terpercaya dan cap buruk 'tukang tipu'.`
      },
      {
        title: "Pelajaran Manajemen Keandalan Fisik bagi Rekayasawan Hardware",
        content: `Bagi mahasiswa teknik dan pembuat perangkat keras elektronika industri, dunia mekanik otomotif memberikan pelajaran berharga tentang desain tahan lingkungan ekstrem (ruggedization). Getaran mekanik konstan, suhu kompartemen mesin hingga 110°C, dan lonjakan transient tegangan alternator adalah parameter nyata yang menguji keandalan polder sirkuit. Prinsip 'preventive maintenance' berkala jauh lebih murah daripada 'corrective overhaul' setelah sistem jebol.`
      }
    ];
    takeaways = [
      "Verifikasi dengan Data Telemetri: Jangan ganti komponen hardware berdasarkan intuisi semata; baca log data error dan analisis freeze frame sebelum mengambil kesimpulan.",
      "Pahami Protokol Bus dan Interferensi: Pastikan komunikasi antar modul tertutup dari gangguan derau elektromagnetik (EMI) di lingkungan operasi riil.",
      "Transparansi Kualitas Komponen: Selalu jujur mengenai trade-off suku cadang kepada klien untuk membangun reputasi bisnis yang tahan uji puluhan tahun.",
      "Desain untuk Perawatan Preventif: Rancang perangkat keras dengan akses servis modular yang memudahkan teknisi melakukan perawatan rutin tanpa membongkar seluruh sistem."
    ];
    reflectiveQuestion = `Seberapa mudah perangkat keras atau sistem operasional bisnis yang Anda rancang saat ini untuk didiagnosis dan diservis saat terjadi kegagalan tak terduga di lapangan?`;
  } else if (professionId === 7) {
    // DOSEN / GURU (Topics 61-70)
    headline = `Arsitektur Pedagogi dan Pembelajaran: Menghidupkan Daya Kritis dalam ${topicTitle}`;
    lead = `Pukul tujuh pagi di ruang kelas berkapasitas 80 mahasiswa teknik. Deretan layar laptop dan tatapan mata yang masih mengantuk menyambut Anda di depan papan tulis. Di era di mana seluruh rumus matematika dapat diselesaikan oleh AI dalam hitungan detik, peran seorang dosen dan guru mengalami evolusi radikal. Terkait ${topicTitle.toLowerCase()}, mendidik bukan lagi menuangkan air ke dalam ember kosong, melainkan menyalakan api rasa ingin tahu dan membangun ketahanan kognitif generasi penerus.`;
    sections = [
      {
        title: "Perancangan Kurikulum Berbasis Outcome (OBE) dan Taksonomi Bloom",
        content: `Menghadapi ${topicTitle}, pendidik profesional memulai dari capaian pembelajaran akhir (intended learning outcome). Menggunakan Taksonomi Bloom yang telah direvisi, tujuan pengajaran diarahkan melompat dari tingkat 'mengingat' dan 'memahami' menuju 'menganalisis', 'mengevaluasi', dan 'mencipta'. Silabus bukan sekadar daftar bab buku teks, melainkan peta jalan transformasi kognitif yang mengintegrasikan teori dasar dengan proyek rekayasa dunia nyata.`
      },
      {
        title: "Membaca Dinamika Kelas: Mengatasi Cognitive Overload dan Menjaga Atensi",
        content: `Kapasitas memori kerja (working memory) manusia sangat terbatas. Pengajar ulung memahami teori beban kognitif (Cognitive Load Theory) dengan memecah materi rumit menjadi blok-blok modular (chunking) dan menggunakan scaffolding bertahap. Dengan mengamati mikro-sinyal kelas—tatapan hampa, penurunan respons tanya-jawab, atau kegelisahan fisik—dosen mengubah tempo, menyisipkan studi kasus kontroversial, atau mengaktifkan diskusi kelompok (peer instruction).`
      },
      {
        title: "Dilema Asesmen: Keterbatasan Ujian Pilihan Ganda vs Rubrik Otentik",
        content: `Ujian pilihan ganda sering kali hanya menguji memori jangka pendek dan mendorong mahasiswa berspekulasi. Pendidik visioner merancang asesmen autentik: evaluasi portofolio, simulasi pemecahan krisis industri, dan ujian lisan (viva voce) yang menguji pemahaman konsep fundamental. Di tengah maraknya plagiarisme digital, penilaian difokuskan pada penalaran di balik proses, bukan semata hasil akhir jawaban.`
      },
      {
        title: "Pelajaran Mentoring dan Alih Pengetahuan bagi Founder Startup",
        content: `Bagi pendiri bisnis teknologi, setiap founder adalah pendidik bagi tim dan pelanggannya. Jika Anda tidak mampu mengajarkan visi teknis produk kepada anggota tim baru secara sistematis, perusahaan Anda akan mengalami 'brain drain' saat skala membesar. Pedagogi yang efektif mengajarkan cara menyederhanakan konsep tanpa menghilangkan esensi kecanggihannya.`
      }
    ];
    takeaways = [
      "Chunking dan Manajemen Beban Kognitif: Pecah penjelasan sistem teknis rumit ke dalam modul-modul kecil agar mudah diserap oleh tim dan calon investor.",
      "Asesmen Berbasis Proses: Ukur kemampuan pemecahan masalah anggota tim dari cara berpikir dan logika mereka, bukan hanya hasil instan.",
      "Active Listening di Ruang Presentasi: Baca sinyal kebingungan audiens saat pitching dan segera ubah narasi sebelum Anda kehilangan atensi mereka sepenuhnya.",
      "Bangun Budaya Keberanian Bertanya: Ciptakan ruang aman di mana anggota tim tidak takut mengakui ketidaktahuan teknis demi menemukan kebenaran objektif."
    ];
    reflectiveQuestion = `Bagaimana metode Anda mentransfer pengetahuan kunci dan visi teknis kepada rekan tim baru: apakah terdengar seperti ceramah membosankan atau petualangan pemecahan masalah bersama?`;
  } else if (professionId === 8) {
    // PEMADAM KEBAKARAN (Topics 71-80)
    headline = `Komando Insiden di Garis Depan Api: Mitigasi Bahaya dalam ${topicTitle}`;
    lead = `Klaxon pangkalan damkar berbunyi kencang memecah keheningan posko jaga. Dalam 60 detik, Anda telah mengenakan pakaian pelindung bunker gear, sepatu bot termal, dan tabung SCBA bertekanan 300 bar di atas truk damkar 5.000 liter yang membelah kemacetan kota. Laporan awal menyebutkan api melahap lantai tiga gedung pergudangan baterai lithium. Terkait ${topicTitle.toLowerCase()}, kesalahan sekecil apa pun di bawah suhu 800°C bukan hanya membakar properti, melainkan merenggut nyawa rekan satu regu.`;
    sections = [
      {
        title: "Anatomi Termodinamika Api: Fase Kebakaran dan Size-Up Awal",
        content: `Membedah ${topicTitle} menuntut pemahaman mendalam tentang segitiga api dan dinamika gas panas. Kebakaran berkembang melalui empat fase: ignition, growth, fully developed, dan decay. Komandan regu melakukan 'size-up' 360 derajat dalam hitungan detik: mengamati warna dan kecepatan asap (smoke reading), arah tiupan angin, serta integritas struktural rangka atap baja yang mulai melengkung di bawah paparan panas intensif.`
      },
      {
        title: "Taktik Serangan: Interior Attack vs Defensive Operation di Medan Krisis",
        content: `Keputusan taktis paling genting adalah memilih antara 'interior attack' (masuk ke dalam sarang api dengan selang bertekanan tinggi untuk mematikan titik panas) atau 'defensive exterior attack' (fokus mengisolasi perambatan api ke gedung sekitar). Di dalam visibilitas nol akibat jelaga hitam pekat, petugas bergerak merayap dengan teknik 'sounding the floor' menggunakan kapak untuk memastikan lantai beton tidak ambruk akibat paparan panas ekstrem.`
      },
      {
        title: "Bahaya Tersembunyi yang Mematikan: Flashover, Backdraft, dan Thermal Runaway",
        content: `Musuh paling ditakuti pemadam bukanlah api yang terlihat, melainkan fenomena fisika ekstrem. 'Flashover' terjadi ketika seluruh material mudah terbakar di ruangan mencapai suhu auto-ignition secara serentak; 'backdraft' meledak saat oksigen segar mendadak masuk ke ruangan kaya gas pirolisis panas. Sementara pada kebakaran baterai lithium, thermal runaway memproduksi oksigen sendiri yang membuat pemadaman air biasa tidak berdaya tanpa pendinginan sel secara masif.`
      },
      {
        title: "Protokol Komando Insiden (ICS) untuk Arsitektur Krisis Bisnis",
        content: `Bagi wirausahawan dan insinyur hardware ITB, Incident Command System (ICS) damkar adalah cetak biru sempurna manajemen krisis. Di tengah kepanikan, rantai komando harus tunggal, peran terdefinisi kaku (Incident Commander, Safety Officer, Operations Chief), dan komunikasi radio wajib menggunakan format singkat terkonfirmasi (closed-loop communication). Keberhasilan mengatasi bencana bermula dari protokol yang telah dilatih berulang kali.`
      }
    ];
    takeaways = [
      "Closed-Loop Communication dalam Krisis: Selalu konfirmasi ulang setiap instruksi kritis dalam tim untuk mencegah miskomunikasi di bawah tekanan tinggi.",
      "Ketahui Kapan Beralih ke Taktik Defensif: Jangan ragu melakukan cut-loss atau pivot defensif saat proyek Anda menunjukkan tanda-tanda keruntuhan struktural.",
      "Pahami Sifat Bahan dan Titik Nyala Sistem: Kenali titik rentan kritis (thermal runaway) dalam rantai pasok atau operasional Anda sebelum terbakar krisis.",
      "Disiplin Checklist Keselamatan Personal: Jangan pernah menerobos risiko bisnis tanpa alat pelindung (kontrak hukum, cadangan kas darurat, asuransi aset)."
    ];
    reflectiveQuestion = `Jika 'kebakaran' operasional atau skandal reputasi melanda startup Anda hari ini, siapakah figur komandan tunggal yang berwenang mengambil keputusan evakuasi tanpa ragu?`;
  } else if (professionId === 9) {
    // PMI / RELAWAN (Topics 81-90)
    headline = `Logistik Kemanusiaan dan Respons Bencana: Strategi Lapangan dalam ${topicTitle}`;
    lead = `Pukul lima pagi di posko tanggap darurat pasca gempa bumi 7.2 magnitudo. Reruntuhan beton, jaringan listrik padam total, dan ribuan warga mengungsi di tenda-tenda darurat yang berlumpur. Sebagai koordinator tim medis dan relawan PMI, Anda dihadapkan pada keterbatasan sumber daya ekstrem di 72 jam pertama yang menentukan (golden hours). Terkait ${topicTitle.toLowerCase()}, niat baik saja tidak cukup; kemanusiaan menuntut ketepatan manajemen logistik, protokol triase klinis, dan ketahanan mental baja.`;
    sections = [
      {
        title: "Fase 72 Jam Pertama: Rapid Needs Assessment dan Triase Lapangan",
        content: `Dalam menghadapi ${topicTitle}, tindakan awal relawan profesional adalah melakukan Rapid Needs Assessment (RNA). Tanpa pemetaan kebutuhan objektif, bantuan yang datang justru memicu kemacetan logistik ('disaster after disaster'). Di tenda medis lapangan dengan stok obat terbatas, sistem triase START (Simple Triage and Rapid Treatment) diterapkan dengan memberi pita warna: merah (prioritas darurat), kuning (tertunda), hijau (cedera ringan), dan hitam (meninggal dunia).`
      },
      {
        title: "Logistik Kemanusiaan Rantai Dingin dan Distribusi Bantuan Berkeadilan",
        content: `Tantangan terberat di zona bencana adalah rantai pasok (supply chain) yang terputus. Mengirimkan vaksin dan darah donor menuntut rantai dingin (cold chain) dengan generator cadangan dan monitoring suhu ketat. Distribusi logistik pangan wajib menghindari kerumunan liar dengan menerapkan sistem kartu keluarga per blok pengungsian, memastikan kelompok rentan seperti lansia, ibu hamil, dan anak-anak mendapatkan jatah nutrisi yang adil.`
      },
      {
        title: "Mitigasi Trauma Psikologis, Etika Netralitas, dan Burnout Relawan",
        content: `Relawan kemanusiaan bekerja di episentrum penderitaan manusia. Memberikan pertolongan pertama psikologis (Psychological First Aid/PFA) menuntut kepekaan budaya lokal tanpa menjanjikan hal yang mustahil. Bersamaan dengan itu, kelelahan emosional (compassion fatigue) dan PTSD membayangi relawan. Lembaga kemanusiaan menerapkan rotasi wajib maksimal 14 hari penugasan lapangan guna melindungi kesehatan mental petugas.`
      },
      {
        title: "Aplikasi Rekayasa Frugal dan Sistem Desentralisasi bagi Teknolog",
        content: `Bagi mahasiswa teknik fisika dan pengembang IoT hardware, medan bencana adalah laboratorium pengujian paling brutal. Sistem komunikasi radio mesh mandiri, alat purifikasi air berenergi surya mandiri, dan instrumen diagnostik murah (frugal engineering) yang tangguh di lingkungan kotor membuktikan bahwa desain teknologi terbaik adalah yang mampu bekerja di titik terlemah peradaban.`
      }
    ];
    takeaways = [
      "Frugal Engineering di Kondisi Ekstrem: Rancang perangkat teknologi yang mampu bertahan hidup tanpa jaringan internet konvensional dan listrik stabil.",
      "Triase Alokasi Sumber Daya Terbatas: Beranilah memprioritaskan alokasi waktu dan modal pada masalah yang memiliki probabilitas dampak penyelamatan tertinggi.",
      "Rantai Pasok Kritis Berbasis Kartu: Tertibkan sistem distribusi sebelum logistik dibagikan untuk mencegah kekacauan operasional di lapangan.",
      "Rotasi Beban Kerja Mencegah Burnout: Sadari batas ketahanan mental tim Anda di masa krisis; istirahatkan talenta kunci sebelum mereka ambruk permanen."
    ];
    reflectiveQuestion = `Seberapa mandiri dan tangguh solusi teknologi yang Anda kembangkan jika diuji di daerah pelosok tanpa dukungan infrastruktur internet dan listrik kota?`;
  } else {
    // PETANI & PETERNAK (Topics 91-100)
    headline = `Agrikultur Modern dan Ketahanan Hayati: Mengelola Siklus dalam ${topicTitle}`;
    lead = `Pukul 05.00 subuh saat embun masih membasahi dedaunan di hamparan lahan pertanian dataran tinggi. Di hadapan Anda, bentangan 20 hektar lahan hortikultura yang sedang memasuki fase pembungaan kritis, sementara prakiraan cuaca satelit memprediksi anomali El Niño dengan kekeringan berkepanjangan. Terkait ${topicTitle.toLowerCase()}, petani dan peternak modern bukan lagi pekerja pasrah, melainkan manajer risiko biologis, ahli biokimia tanah, dan navigator rantai pasok agribisnis berpresisi tinggi.`;
    sections = [
      {
        title: "Agronomi Berpresisi: Pembacaan Kimia Tanah dan Dinamika Hara Mikro",
        content: `Dalam membedah ${topicTitle}, keberhasilan panen berakar pada sains riil di bawah permukaan tanah. Petani maju memantau parameter pH tanah (ideal 6.0-6.8), kapasitas tukar kation (KTK), serta rasio karbon-nitrogen (C/N ratio). Mengintegrasikan sensor kelembaban tanah kapasitif dengan sistem irigasi tetes (drip fertigation) memungkinkan nutrisi N-P-K dan mikronutrien (Zinc, Boron) diinjeksikan langsung ke perakaran tanaman dengan pemborosan air mendekati nol.`
      },
      {
        title: "Pengendalian Hama Terpadu (PHT) dan Manajemen Biosekuriti Peternakan",
        content: `Ketergantungan berlebihan pada pestisida kimiawi terbukti memicu resistensi hama dan degradasi mikrobioma tanah. Pendekatan Pengendalian Hama Terpadu (PHT) memanfaatkan predator alami, perangkap feromon, dan rotasi tanaman musiman. Di sektor peternakan, biosekuriti tiga zona (merah, kuning, hijau) dan tata kelola pakan berbasis Total Mixed Ration (TMR) menjadi benteng mutlak pencegah wabah penyakit menular seperti PMK atau flu burung.`
      },
      {
        title: "Ekonomi Pertanian dan Jebakan Rantai Pasok Tengkulak",
        content: `Paradoks klasik agrikultur adalah melimpahnya panen yang justru membuat harga anjlok (harga jatuh di tingkat petani namun mahal di supermarket kota). Petani cerdas membangun nilai tambah pascapanen: teknologi pengeringan gabah modern, fasilitas cold storage bersama, serta standardisasi sortasi grade A/B/C. Menguasai kontrak pasok langsung dengan industri pengolahan pangan membebaskan produsen dari jerat asimetri informasi para calo tengkulak.`
      },
      {
        title: "Siklus Tertutup dan Model Bisnis Berkelanjutan bagi Inovator",
        content: `Bagi praktisi teknik dan wirausahawan hardware, agrikultur mengajarkan doktrin efisiensi termodinamika siklus tertutup (circular economy). Limbah kotoran ternak dikonversi menjadi biogas penghasil listrik dan pupuk kascing organik, sementara limbah jerami menjadi pakan fermentasi. Inovasi agritech sejati bukan sekadar membuat aplikasi dashboard, melainkan memecahkan friksi fisik di lapangan lumpur dan gudang logistik.`
      }
    ];
    takeaways = [
      "Manajemen Risiko Biologis Siklis: Rencanakan arus kas dan kapasitas operasional dengan memperhitungkan siklus alamiah yang tidak dapat dipercepat secara instan.",
      "Optimasi Fisiologis Sensorik: Gunakan sensor presisi untuk memantau variabel vital lingkungan sebelum terjadi defisiensi nutrisi atau kegagalan sistemik.",
      "Integrasi Hulu-Hilir Pascapanen: Ciptakan nilai tambah pengolahan sebelum menjual komoditas mentah untuk mengunci margin keuntungan yang lebih stabil.",
      "Prinsip Circular Economy: Ubah limbah sampingan operasional sistem Anda menjadi sumber energi atau input bernilai bagi lini bisnis lainnya."
    ];
    reflectiveQuestion = `Bagaimana Anda melindungi model bisnis Anda dari fluktuasi pasokan bahan baku mentah dan manipulasi harga perantara di sepanjang rantai nilai industri Anda?`;
  }

  const rawArticle = {
    topicId: id,
    professionLabel: label,
    headline,
    leadParagraph: lead,
    sections,
    takeaways,
    reflectiveQuestion,
    readingTimeMinutes: calculateReadingTime(lead + " " + sections.map(s => s.content).join(" ")),
    generatedAt: new Date().toISOString()
  };

  return {
    ...rawArticle,
    rawMarkdown: buildRawMarkdown(rawArticle)
  };
}
