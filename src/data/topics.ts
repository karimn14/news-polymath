import { TopicInfo } from '../types';

export interface Profession {
  id: number;
  name: string;
  category: string;
  topics: string[];
}

export const PROFESSIONS: Profession[] = [
  {
    id: 1,
    name: "PENGACARA",
    category: "Advokat Litigasi",
    topics: [
      "Peta profesi: jenis pengacara (litigasi, korporat, pidana, in-house) dan jenjang karier dari junior ke partner",
      "Anatomi sebuah kasus: dari klien datang sampai putusan — alur lengkap",
      "Persiapan sebelum sidang: bukti, saksi, dokumen, dan strategi",
      "Jenis-jenis persidangan dan tingkatan pengadilan (PN, PT, MA, MK)",
      "Seni bertanya: cross-examination dan menggali kebohongan saksi",
      "Menyusun argumen hukum yang meyakinkan hakim",
      "Etika vs strategi: batas antara membela klien dan berbohong",
      "Negosiasi settlement — kenapa 90% kasus tidak sampai sidang penuh",
      "Psikologi ruang sidang: membaca hakim, membaca juri (jika relevan)",
      "Kasus-kasus ikonik dan pelajaran dari pengacara yang \"menang tanpa menang\""
    ]
  },
  {
    id: 2,
    name: "PSIKOLOG",
    category: "Klinis",
    topics: [
      "Peta profesi: psikolog klinis vs psikiater vs konselor — beda kewenangan",
      "Sesi pertama: cara membangun rapport dan intake assessment",
      "Kerangka teori utama: CBT, psikodinamik, humanistik — kapan pakai yang mana",
      "Membaca yang tidak terucap: bahasa tubuh, resistensi, defense mechanism",
      "Menyusun rencana terapi dan mengukur progres",
      "Menghadapi klien manipulatif atau berbahaya (self-harm risk assessment)",
      "Countertransference: kenapa terapis juga perlu terapi",
      "Diagnosis vs labeling — bahaya overdiagnosis",
      "Etika kerahasiaan dan kapan harus dilanggar (duty to warn)",
      "Batas kemampuan psikolog: kapan harus rujuk ke psikiater"
    ]
  },
  {
    id: 3,
    name: "DOKTER",
    category: "Umum / IGD",
    topics: [
      "Peta profesi: dari koas ke spesialis, dan jenjang IGD vs poli vs bedah",
      "Anamnesis: seni bertanya untuk menemukan penyakit sebenarnya",
      "Diagnosis banding: cara berpikir dokter saat gejala ambigu",
      "Triase IGD: siapa ditangani duluan dan kenapa",
      "Membaca hasil lab dan pencitraan secara praktis",
      "Komunikasi buruk-berita ke pasien dan keluarga",
      "Keputusan di bawah tekanan: kapan harus ambil risiko tindakan",
      "Malpraktik: garis tipis antara human error dan kelalaian",
      "Burnout dokter dan realita sistem kesehatan Indonesia",
      "Evidence-based medicine vs pengalaman klinis — mana yang menang"
    ]
  },
  {
    id: 4,
    name: "KRIMINAL INVESTIGATOR",
    category: "Detektif / Penyidik",
    topics: [
      "Peta profesi: penyidik polisi vs detektif swasta vs forensik",
      "TKP: cara mengamankan dan membaca crime scene",
      "Mengumpulkan bukti: fisik, digital, testimoni — mana yang paling kuat",
      "Interogasi vs interview: teknik menggali pengakuan tanpa memaksa",
      "Membangun profil pelaku (criminal profiling) — mitos vs realita",
      "Kesalahan investigasi umum yang membebaskan pelaku bersalah",
      "Forensik digital: jejak yang orang tidak sadar tinggalkan",
      "Chain of custody — kenapa bukti sempurna bisa gagal di pengadilan",
      "Kasus cold case: kenapa sebagian terpecahkan setelah puluhan tahun",
      "Bias investigator: tunnel vision dan cara menghindarinya"
    ]
  },
  {
    id: 5,
    name: "BIOLOGIS",
    category: "Peneliti / Ahli Biologi Lapangan",
    topics: [
      "Peta profesi: biologi molekuler vs ekologi vs konservasi — beda dunia kerja",
      "Merancang eksperimen: hipotesis, variabel, kontrol",
      "Kerja lapangan: observasi spesies dan pengambilan sampel",
      "Membaca data biologis: statistik dasar yang wajib dikuasai",
      "Bioteknologi praktis: CRISPR, kultur sel, untuk apa dipakai industri",
      "Konservasi: dilema ekonomi vs ekologi di lapangan nyata",
      "Publikasi ilmiah: cara kerja peer review dan kenapa lambat",
      "Etika riset: hewan uji, consent, dan batasan eksperimen",
      "Biologi terapan di industri: pangan, farmasi, pertanian",
      "Kesalahan umum yang bikin penelitian biologi tidak reproducible"
    ]
  },
  {
    id: 6,
    name: "MONTIR",
    category: "Mekanik Otomotif",
    topics: [
      "Peta profesi: montir umum vs spesialis (mesin, kelistrikan, bodi) dan jenjang skill",
      "Diagnosis kerusakan: dari bunyi, bau, dan gejala ke akar masalah",
      "Anatomi mesin pembakaran internal — yang wajib dipahami tiap montir",
      "Sistem kelistrikan modern: kenapa mobil sekarang \"komputer berjalan\"",
      "Alat diagnostik (scanner OBD) dan cara membaca kode error",
      "Kesalahan customer service yang bikin montir dianggap \"tukang tipu\"",
      "Trade-off spare part: OEM vs aftermarket vs KW — kapan pilih apa",
      "Preventive maintenance vs corrective — ekonomi merawat kendaraan",
      "EV dan hybrid: pergeseran skill yang harus dikuasai montir masa depan",
      "Membangun bengkel sendiri: dari skill teknis ke bisnis"
    ]
  },
  {
    id: 7,
    name: "DOSEN / GURU",
    category: "Pendidik",
    topics: [
      "Peta profesi: dosen vs guru — beda tuntutan riset, mengajar, dan administrasi",
      "Merancang kurikulum: dari learning outcome ke rencana pembelajaran",
      "Teknik mengajar yang benar-benar melekat vs yang cuma terasa efektif",
      "Membaca kelas: kapan murid paham, bingung, atau bosan",
      "Asesmen yang adil: kenapa ujian pilihan ganda sering menyesatkan",
      "Menghadapi murid kesulitan tanpa membuat mereka minder",
      "Politik kampus/sekolah: birokrasi yang mempengaruhi kualitas mengajar",
      "Riset vs mengajar: dilema dosen yang dituntut publikasi",
      "Teknologi pendidikan: AI, online learning — ancaman atau alat bantu",
      "Guru yang diingat murid seumur hidup — apa yang mereka lakukan beda"
    ]
  },
  {
    id: 8,
    name: "PEMADAM KEBAKARAN",
    category: "Rescue & Emergency",
    topics: [
      "Peta profesi: struktur damkar, jenjang, dan spesialisasi (wildfire, urban, rescue)",
      "Anatomi api: fase kebakaran dan kenapa detik pertama krusial",
      "Size-up: penilaian cepat situasi sebelum masuk ke lokasi",
      "Taktik pemadaman: interior attack vs defensive — kapan pilih mana",
      "Peralatan dan APD: kenapa desainnya seperti itu",
      "Search and rescue dalam asap tebal dan visibilitas nol",
      "Bahaya tersembunyi: flashover, backdraft, dan runtuhnya struktur",
      "Kerja tim: komando insiden dan komunikasi di tengah chaos",
      "Trauma psikologis pemadam: PTSD yang jarang dibicarakan",
      "Pencegahan kebakaran: kenapa ini lebih penting dari pemadaman itu sendiri"
    ]
  },
  {
    id: 9,
    name: "PMI / RELAWAN",
    category: "Palang Merah & Kemanusiaan",
    topics: [
      "Peta profesi: PMI vs NGO internasional vs relawan independen",
      "Respons bencana: 72 jam pertama yang menentukan",
      "Triase medis darurat di lapangan minim sumber daya",
      "Logistik kemanusiaan: distribusi bantuan yang adil dan efisien",
      "Psikologi korban bencana: trauma dan cara pendampingan awal",
      "Koordinasi multi-lembaga: kenapa bantuan sering tumpang tindih/kacau",
      "Etika kemanusiaan: netralitas di tengah konflik bersenjata",
      "Kesehatan masyarakat pasca bencana: mencegah wabah kedua",
      "Burnout relawan: kenapa banyak yang berhenti setelah 1-2 misi",
      "Membangun sistem kesiapsiagaan komunitas sebelum bencana terjadi"
    ]
  },
  {
    id: 10,
    name: "PETANI & PETERNAK",
    category: "Agrikultur & Peternakan",
    topics: [
      "Peta profesi: skala usaha tani (subsisten, komersial, korporat) dan rantai nilainya",
      "Siklus tanam: dari pemilihan bibit sampai panen — keputusan di tiap fase",
      "Membaca tanah dan cuaca: pengetahuan lokal vs data ilmiah",
      "Manajemen hama dan penyakit tanpa merusak ekosistem",
      "Peternakan: siklus reproduksi, pakan, dan kesehatan ternak",
      "Ekonomi pertanian: kenapa petani sering rugi meski panen bagus",
      "Teknologi pertanian modern: presisi farming vs kearifan tradisional",
      "Rantai pasok: kenapa harga di petani beda jauh dari harga konsumen",
      "Perubahan iklim: dampak nyata yang dirasakan petani sekarang",
      "Dari petani ke pengusaha agri: strategi naik kelas"
    ]
  },
  {
    id: 11,
    name: "SALES",
    category: "Penjualan B2B & Enterprise",
    topics: [
      "Peta profesi: sales B2B vs B2C vs enterprise — beda siklus dan skill",
      "Anatomi funnel penjualan: dari prospek dingin sampai closing",
      "Membaca kebutuhan tersembunyi di balik apa yang diucapkan klien",
      "Teknik handling objection tanpa terkesan memaksa",
      "Psikologi closing: kapan harus push, kapan harus diam",
      "Membangun trust dalam waktu singkat dengan orang asing",
      "Sales yang jujur vs manipulatif — garis tipis yang sering dilanggar",
      "Cold calling/cold outreach: kenapa masih relevan di era digital",
      "Retensi vs akuisisi: kenapa mempertahankan klien lebih murah",
      "Dari sales individu ke sales leader: skill yang berubah total"
    ]
  },
  {
    id: 12,
    name: "MARKETING",
    category: "Pemasaran & Strategi Brand",
    topics: [
      "Peta profesi: brand marketing vs performance marketing vs growth",
      "Riset pasar: cara menemukan kebutuhan yang belum disadari konsumen",
      "Positioning: kenapa produk sama bisa laku atau gagal total",
      "Psikologi konsumen: bias yang dieksploitasi iklan (dan etikanya)",
      "Membaca data marketing: metrik yang penting vs yang menyesatkan (vanity metrics)",
      "Storytelling merek: kenapa orang beli cerita, bukan produk",
      "Channel strategy: kapan pakai media sosial, SEO, ads, atau offline",
      "A/B testing dan eksperimen: cara marketing modern mengambil keputusan",
      "Krisis PR: cara merespons saat merek diserang publik",
      "Marketing yang berkelanjutan vs yang cuma viral sesaat"
    ]
  },
  {
    id: 13,
    name: "SUPPLY CHAIN",
    category: "Rantai Pasok & Logistik",
    topics: [
      "Peta profesi: procurement, logistik, warehousing, demand planning — beda fokus",
      "Anatomi rantai pasok: dari bahan baku sampai ke tangan konsumen",
      "Forecasting permintaan: cara memprediksi tanpa bola kristal",
      "Trade-off inventory: kelebihan stok vs kehabisan stok — biaya keduanya",
      "Manajemen supplier: negosiasi, evaluasi, dan mitigasi risiko",
      "Logistik dan distribusi: kenapa \"last mile\" adalah yang paling mahal",
      "Disrupsi rantai pasok: pelajaran dari krisis chip dan pandemi",
      "Teknologi supply chain: ERP, IoT tracking, dan otomasi gudang",
      "Sustainability dalam supply chain: tekanan baru dari regulasi dan konsumen",
      "Optimasi end-to-end: kenapa efisiensi satu bagian bisa merugikan bagian lain"
    ]
  },
  {
    id: 14,
    name: "PEBISNIS / PENGUSAHA",
    category: "Kewirausahaan & Bisnis",
    topics: [
      "Peta profesi: solopreneur vs startup founder vs pemilik bisnis keluarga",
      "Validasi ide: cara tahu ide bisnis layak sebelum buang uang",
      "Product-market fit: kenapa produk bagus pun bisa gagal di pasar salah",
      "Manajemen kas: kenapa bisnis untung bisa tetap bangkrut",
      "Membangun tim awal: kesalahan hiring yang mematikan startup",
      "Fundraising: cara kerja pitching ke investor dan apa yang mereka cari",
      "Pivot: kapan harus mengubah arah bisnis total vs bertahan",
      "Kompetisi: strategi menghadapi pemain besar dengan modal kecil",
      "Skala usaha: kenapa yang berhasil di skala kecil sering gagal saat scale up",
      "Exit strategy: dijual, IPO, atau diwariskan — mikir dari awal"
    ]
  },
  {
    id: 15,
    name: "JURNALIS INVESTIGATIF",
    category: "Jurnalisme Mendalam",
    topics: [
      "Peta profesi: jurnalis investigatif vs reporter berita vs kolumnis",
      "Menemukan cerita: dari tip/rumor ke investigasi yang layak dikejar",
      "Verifikasi fakta: standar \"dua sumber independen\" dan kenapa itu penting",
      "Membangun dan melindungi sumber rahasia (whistleblower)",
      "Menelusuri dokumen dan data publik: FOI, laporan keuangan, database",
      "Wawancara sulit: cara menembus narasumber yang menghindar atau berbohong",
      "Etika jurnalisme: batas antara mengejar kebenaran dan melanggar privasi",
      "Ancaman hukum dan fisik: kenapa investigasi bisa berujung somasi atau bahaya",
      "Menyusun narasi: cara membuat fakta kompleks mudah dipahami publik",
      "Dampak investigasi: kapan liputan benar-benar mengubah kebijakan"
    ]
  },
  {
    id: 16,
    name: "DIPLOMAT / NEGOSIATOR",
    category: "Diplomasi & Negosiasi",
    topics: [
      "Peta profesi: diplomat karier vs negosiator bisnis vs mediator konflik",
      "Persiapan negosiasi: riset kepentingan lawan sebelum duduk di meja",
      "BATNA: konsep inti yang menentukan siapa punya leverage",
      "Membaca sinyal non-verbal dan budaya lintas negara",
      "Teknik negosiasi win-win vs kapan harus bermain zero-sum",
      "Diplomasi di balik layar: kenapa kesepakatan resmi sudah \"settled\" sebelum pertemuan",
      "Menghadapi deadlock: taktik memecah kebuntuan negosiasi",
      "Bahasa diplomatik: cara mengatakan \"tidak\" tanpa merusak hubungan",
      "Studi kasus krisis diplomatik dan bagaimana itu diselesaikan (atau gagal)",
      "Negosiasi dalam tekanan waktu dan asimetri kekuatan"
    ]
  },
  {
    id: 17,
    name: "CHEF PROFESIONAL",
    category: "Kuliner & Manajemen Restoran",
    topics: [
      "Peta profesi: line cook ke sous chef ke executive chef — jenjang dapur",
      "Anatomi dapur profesional: sistem brigade dan pembagian stasiun",
      "Mise en place: filosofi persiapan yang menentukan kelancaran servis",
      "Membangun menu: keseimbangan kreativitas, biaya, dan operasional",
      "Food costing: kenapa harga menu dihitung sampai ke gram",
      "Manajemen servis saat rush hour: koordinasi di bawah tekanan ekstrem",
      "Kepemimpinan dapur: budaya keras dapur profesional dan sisi gelapnya",
      "Inovasi rasa: cara chef menciptakan hidangan baru secara sistematis",
      "Standar kebersihan dan keamanan pangan yang wajib tapi sering diremehkan",
      "Dari chef ke pengusaha restoran: skill yang beda total"
    ]
  },
  {
    id: 18,
    name: "PILOT",
    category: "Penerbangan Komersial",
    topics: [
      "Peta profesi: pilot komersial vs kargo vs private jet, dan jenjang dari kopilot ke kapten",
      "Pre-flight: checklist dan persiapan yang tidak boleh dilewati",
      "Membaca instrumen dan keputusan saat kondisi visual buruk (IFR)",
      "Komunikasi dengan ATC: protokol yang menyelamatkan nyawa",
      "Cockpit Resource Management: kenapa kerja tim kokpit dirancang ulang setelah banyak kecelakaan",
      "Menghadapi keadaan darurat: engine failure, cuaca ekstrem, keputusan detik",
      "Psikologi pilot: kelelahan, automation complacency, dan disiplin mental",
      "Anatomi kecelakaan pesawat: pelajaran dari investigasi black box",
      "Otomasi vs kendali manual: dilema pilot di era pesawat modern",
      "Regulasi penerbangan: kenapa industri ini paling ketat soal keselamatan"
    ]
  },
  {
    id: 19,
    name: "CONTENT CREATOR",
    category: "Industri Kreatif & Agency",
    topics: [
      "Peta profesi: content creator individu vs tim kreatif agency — beda ritme kerja",
      "Menemukan ide: dari observasi random ke konten yang relevan",
      "Storytelling visual: struktur yang bikin orang menonton sampai habis",
      "Algoritma platform: memahami tanpa jadi budak algoritma",
      "Personal branding vs client branding: dua permainan berbeda",
      "Produksi konten cepat: alur kerja dari ide ke publish dalam sehari",
      "Kolaborasi kreatif di agency: brief, revisi, dan ego klien",
      "Monetisasi: dari endorsement ke bisnis konten yang sustainable",
      "Burnout kreatif: kenapa profesi ini rawan kehilangan passion",
      "Mengukur dampak konten: engagement palsu vs pengaruh nyata"
    ]
  },
  {
    id: 20,
    name: "POLITIKUS",
    category: "Kebijakan Publik & Politik",
    topics: [
      "Peta profesi: politikus lokal vs nasional, jalur partai vs independen",
      "Membangun basis dukungan: dari komunitas kecil ke elektabilitas",
      "Merancang kebijakan: dari janji kampanye ke implementasi realistis",
      "Retorika politik: cara bicara yang menggerakkan massa",
      "Koalisi dan kompromi: kenapa politik adalah seni negosiasi tanpa henti",
      "Media dan citra: mengelola persepsi publik di era media sosial",
      "Menghadapi oposisi dan serangan personal tanpa kehilangan arah",
      "Etika vs pragmatisme: dilema yang dihadapi hampir semua politisi",
      "Studi kasus kebijakan yang berhasil vs yang gagal total",
      "Warisan politik: bagaimana politisi ingin diingat vs kenyataan sejarah"
    ]
  },
  {
    id: 21,
    name: "ANTROPOLOG",
    category: "Antropologi & Budaya",
    topics: [
      "Peta profesi: antropologi budaya vs fisik vs linguistik vs arkeologi",
      "Etnografi: metode observasi partisipan dan tantangan objektivitasnya",
      "Memahami budaya asing tanpa proyeksi bias sendiri (etnosentrisme)",
      "Kekerabatan dan struktur sosial: kenapa ini inti studi antropologi klasik",
      "Ritual dan simbol: cara membaca makna di balik tradisi",
      "Antropologi terapan: dipakai di bisnis, desain produk, kebijakan publik",
      "Dilema etika lapangan: hubungan peneliti dengan komunitas yang diteliti",
      "Perubahan budaya: bagaimana globalisasi mengubah masyarakat tradisional",
      "Kritik terhadap antropologi kolonial dan pergeserannya sekarang",
      "Menulis etnografi: dari catatan lapangan mentah ke narasi ilmiah"
    ]
  },
  {
    id: 22,
    name: "SOSIOLOG",
    category: "Sosiologi & Dinamika Sosial",
    topics: [
      "Peta profesi: sosiolog akademik vs peneliti kebijakan vs konsultan sosial",
      "Perspektif utama: fungsionalisme, konflik, interaksionisme simbolik",
      "Metode penelitian: survei besar vs studi kualitatif mendalam",
      "Struktur sosial: kelas, stratifikasi, dan mobilitas sosial di Indonesia",
      "Institusi sosial: keluarga, pendidikan, agama sebagai objek analisis",
      "Perilaku kolektif: kenapa massa bertindak berbeda dari individu",
      "Sosiologi digital: bagaimana media sosial mengubah interaksi sosial",
      "Ketimpangan sosial: akar struktural vs narasi individual",
      "Perubahan sosial: revolusi vs evolusi bertahap dalam masyarakat",
      "Dari riset ke kebijakan: bagaimana temuan sosiologi memengaruhi regulasi"
    ]
  },
  {
    id: 23,
    name: "AHLI SEJARAH",
    category: "Sejarawan & Historiografi",
    topics: [
      "Peta profesi: sejarawan akademik vs kurator vs penulis populer",
      "Metode sejarah: dari sumber primer/sekunder ke rekonstruksi peristiwa",
      "Historiografi: kenapa sejarah yang sama ditulis berbeda tiap era",
      "Kritik sumber: cara membedakan fakta, propaganda, dan mitos",
      "Sejarah lisan: metode dan tantangan menggali ingatan yang memudar",
      "Sebab-akibat dalam sejarah: kenapa satu peristiwa jarang punya satu sebab",
      "Sejarah revisionis: kapan menulis ulang sejarah itu valid vs berbahaya",
      "Sejarah Indonesia yang kontroversial: studi kasus interpretasi yang berbeda",
      "Menghubungkan masa lalu ke masa kini: sejarah sebagai alat memahami sekarang",
      "Menulis sejarah untuk publik: menyeimbangkan akurasi dan keterbacaan"
    ]
  }
];

// Flat 230 list
export const ALL_TOPICS: TopicInfo[] = [];

let counter = 1;
for (const prof of PROFESSIONS) {
  prof.topics.forEach((topicTitle, index) => {
    ALL_TOPICS.push({
      id: counter,
      professionId: prof.id,
      professionName: prof.name,
      professionCategory: prof.category,
      dayInProfession: index + 1,
      topicTitle: topicTitle,
    });
    counter++;
  });
}

export function getTopicById(id: number): TopicInfo | undefined {
  if (id < 1 || id > ALL_TOPICS.length) return undefined;
  return ALL_TOPICS[id - 1];
}
