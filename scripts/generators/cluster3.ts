import { TopicInfo } from "../../src/types.ts";
import { ArticleData, calculateReadingTime, buildRawMarkdown } from "../articleBuilderBase.ts";

export function generateCluster3Article(topic: TopicInfo): ArticleData {
  const { id, professionId, professionName, professionCategory, dayInProfession, topicTitle } = topic;
  const label = `${professionName} · Hari ${dayInProfession} dari 10`;

  let headline = "";
  let lead = "";
  let sections: Array<{ title: string; content: string }> = [];
  let takeaways: string[] = [];
  let reflectiveQuestion = "";

  if (professionId === 11) {
    // SALES (Topics 101-110)
    headline = `Arsitektur Penjualan Enterprise & B2B: Menguasai ${topicTitle}`;
    lead = `Pukul delapan pagi di ruang tunggu lantai 32 gedung perkantoran segitiga emas Jakarta. Di dalam tas kulit Anda tersimpan proposal tender pengadaan sistem otomasi pabrik bernilai miliaran rupiah. Di seberang meja kaca duduk Chief Technology Officer (CTO) yang skeptis dan Procurement Director yang hanya peduli pada pemotongan harga. Terkait ${topicTitle.toLowerCase()}, sales B2B tingkat tinggi bukan adu rayu mulut manis, melainkan seni mendiagnosis rasa sakit finansial klien, merancang arsitektur nilai ROI, dan menavigasi politik kantor klien yang rumit.`;
    sections = [
      {
        title: "Anatomi Penjualan Enterprise: Menemukan 'Economic Buyer' dan Rasa Sakit Nyata",
        content: `Dalam membedah ${topicTitle}, kesalahan fatal tenaga penjual pemula adalah terburu-buru melakukan presentasi produk (pitching) sebelum memetakan matriks pengambil keputusan. Menggunakan metodologi MEDDIC (Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion), praktisi sales enterprise mencari siapa pemilik anggaran sesungguhnya. Klien korporasi tidak membeli fitur teknis; mereka membeli reduksi risiko operasional, efisiensi jam kerja, atau peningkatan margin laba bersih tahunan.`
      },
      {
        title: "Seni Menggali Kebutuhan Tersembunyi dan Handling Objection Tanpa Bertengkar",
        content: `Klien jarang mengungkapkan motivasi terdalamnya di awal pertemuan. Melalui teknik SPIN Selling (Situation, Problem, Implication, Need-Payoff), sales ulung melontarkan pertanyaan implikasi: 'Jika sistem lama Anda down 4 jam saat peak season, berapa kerugian penalti kontrak yang harus Anda bayar?'. Pertanyaan ini membuat klien menyadari besarnya biaya dari ketidakbertindakan (cost of inaction). Ketika menghadapi keberatan harga, sales tidak langsung memberi diskon, melainkan menggeser fokus ke total cost of ownership (TCO) selama 5 tahun.`
      },
      {
        title: "Psikologi Closing dan Etika Membangun Hubungan Jangka Panjang",
        content: `Closing sebuah kesepakatan B2B bernilai tinggi bukanlah momen dramatis menekan tanda tangan, melainkan konsekuensi logis dari proses evaluasi yang terstruktur rapi. Sales yang manipulatif mungkin menang satu kali namun kehilangan repeat order dan merusak reputasi industri. Sebaliknya, konsultan penjualan yang berintegritas berani berkata jujur jika produknya belum memenuhi spesifikasi klien, membangun modal kepercayaan (social capital) yang bernilai seumur karier.`
      },
      {
        title: "Pelajaran Negosiasi Nilai bagi Insinyur dan Pendiri Startup Hardware",
        content: `Bagi mahasiswa teknik fisika dan inovator hardware, produk tercanggih di dunia akan mati di laboratorium jika Anda tidak bisa menjualnya. Jangan pernah memperlakukan sales sebagai fungsi kelas dua; sales adalah garis depan validasi pasar. Menguasai siklus penjualan enterprise melatih Anda menghargai struktur insentif manusia, birokrasi legal vendor korporasi, dan kalkulasi pengembalian modal investasi yang ketat.`
      }
    ];
    takeaways = [
      "Jual ROI Finansial, Bukan Fitur Teknis: Terjemahkan keunggulan rekayasa Anda ke dalam angka penghematan biaya atau peningkatan laba yang dipahami direksi.",
      "Kualifikasi Prospek dengan Disiplin MEDDIC: Jangan buang waktu berbulan-bulan bernegosiasi dengan staf yang tidak memegang wewenang tanda tangan anggaran.",
      "Pertanyaan Implikasi Membuka Kesadaran: Bimbing klien menghitung sendiri kerugian yang mereka derita jika menunda adopsi solusi teknologi Anda.",
      "Integritas adalah Strategi Retensi Terbaik: Kejujuran atas keterbatasan sistem membangun reputasi jangka panjang yang mendatangkan kontrak bernilai puluhan kali lipat."
    ];
    reflectiveQuestion = `Berapa nilai kerugian konkret dalam rupiah per hari yang dialami calon pelanggan Anda jika mereka TIDAK membeli solusi teknologi yang Anda tawarkan hari ini?`;
  } else if (professionId === 12) {
    // MARKETING (Topics 111-120)
    headline = `Strategi Brand dan Riset Pasar: Membedah Kekuatan ${topicTitle}`;
    lead = `Di hadapan dasbor analitik pemasaran yang menampilkan jutaan tayangan kampanye digital, matriks konversi iklan, dan grafik retensi pengguna. Angka klik melimpah, namun penjualan riil mandek. Terkait ${topicTitle.toLowerCase()}, pemasaran modern telah bermutasi dari sekadar adu kreasi visual menjadi perpaduan sains data perilaku, psikologi kognitif massa, dan arsitektur posisi merek (positioning) yang tajam di benak konsumen.`;
    sections = [
      {
        title: "Positioning dan Diferensiasi: Mengapa Produk Bagus Gagal Total di Pasar",
        content: `Menghadapi ${topicTitle}, aturan utama pemasaran adalah 'jika Anda mencoba menjadi segalanya bagi semua orang, Anda bukan apa-apa bagi siapa pun'. Hukum posisi merek (positioning) menuntut produk menempati satu kata tunggal di benak konsumen—seperti Volvo dengan 'keselamatan' atau Apple dengan 'kesederhanaan elegan'. Produk teknologi yang superior secara teknis kerap tumbang oleh produk kompetitor yang lebih inferior namun memiliki narasi posisi nilai yang kristal dan tak tertandingi.`
      },
      {
        title: "Psikologi Konsumen dan Sains Eksperimen A/B Testing",
        content: `Konsumen modern tidak bertindak rasional; keputusan pembelian dikendalikan oleh bias kognitif bawah sadar: anchoring effect, loss aversion, dan social proof. Tim pemasaran berkinerja tinggi menjalankan eksperimen A/B testing berkelanjutan terhadap pesan teks, arsitektur harga, dan alur konversi landing page. Setiap hipotesis diuji dengan disiplin statistik ilmiah untuk memisahkan antara korelasi semu dan kausalitas peningkatan konversi nyata.`
      },
      {
        title: "Perang Melawan Vanity Metrics dan Manajemen Krisis Citra Merek (PR)",
        content: `Jebakan paling umum bagi pemasar pemula adalah terlena oleh 'vanity metrics'—jumlah likes, follower media sosial, dan tayangan video yang tidak pernah terkonversi menjadi kas operasional riil. Pemasar senior mengawasi metrik substantif: Customer Acquisition Cost (CAC), Customer Lifetime Value (LTV), dan rasio retensi bulan ke-12. Di samping itu, ketika terjadi krisis produk atau kegagalan teknis, protokol komunikasi krisis yang cepat, transparan, dan bertanggung jawab adalah penentu keselamatan merek.`
      },
      {
        title: "Arsitektur Narasi Merek bagi Inovator Rekayasa Teknologi",
        content: `Bagi mahasiswa teknik dan wirausahawan hardware ITB, pemasaran adalah jembatan yang menghubungkan kecanggihan mikrokontroler dengan emosi manusia pengguna. Orang tidak membeli obeng atau bor; orang membeli lubang di dinding untuk menggantung foto keluarganya. Memahami pemasaran melatih inovator merumuskan narasi 'Jobs to be Done' (JTBD) yang membuat produk teknologi diadopsi secara luas oleh masyarakat.`
      }
    ];
    takeaways = [
      "Fokus pada Jobs to be Done: Konsumen menyewa produk teknologi Anda untuk menyelesaikan tugas emosional dan fungsional tertentu dalam hidup mereka.",
      "Ukur LTV dibanding CAC: Pastikan nilai umur pelanggan minimal 3 kali lipat lebih besar daripada biaya akuisisi untuk menjamin keberlanjutan bisnis.",
      "Diferensiasi Radikal Mengalahkan Status Quo: Jangan buat produk yang 10% lebih murah; buatlah produk yang menempati kategori solusi yang berbeda secara fundamental.",
      "Jaga Reputasi dengan Kejujuran Transparan: Saat terjadi malfungsi teknis produk, mintalah maaf secara terbuka dan paparkan solusi pemulihan konkret seketika."
    ];
    reflectiveQuestion = `Dalam satu kata yang tidak boleh ditiru oleh kompetitor, kata apakah yang langsung terpatri di benak pelanggan saat mendengar nama produk teknologi Anda?`;
  } else if (professionId === 13) {
    // SUPPLY CHAIN (Topics 121-130)
    headline = `Arsitektur Rantai Pasok Global: Ketahanan Sistem dalam ${topicTitle}`;
    lead = `Pukul sembilan pagi saat memantau status kontainer kargo laut di dashboard logistik terintegrasi. Kapal pengangkut chip mikrokontroler tertahan di pelabuhan akibat badai monsun, sementara pabrik perakitan perangkat keras Anda di Cikarang hanya memiliki persediaan penyangga (buffer stock) untuk 48 jam ke depan. Terkait ${topicTitle.toLowerCase()}, supply chain adalah sistem sirkulasi darah industri manufaktur. Satu sumbatan kecil di hulu dapat melumpuhkan seluruh perakitan hilir dalam hitungan hari.`;
    sections = [
      {
        title: "Anatomi Rantai Pasok: Dari Tambang Silikon Menuju Konsumen Akhir",
        content: `Dalam membedah ${topicTitle}, praktisi supply chain memetakan seluruh rantai nilai: Tier-1 (pemasok modul langsung), Tier-2 (pemasok komponen dasar), hingga Tier-3 (pabrik pemurnian bahan baku mentah). Kegagalan industri modern kerap terjadi bukan pada Tier-1, melainkan pada pemasok Tier-3 yang terabaikan—misalnya kebakaran pabrik resin epoksi tunggal yang menghentikan lini produksi semikonduktor di seluruh dunia. Transparansi visibilitas rantai pasok multi-tier adalah syarat ketahanan bisnis.`
      },
      {
        title: "Trade-off Abadi Inventory: Just-in-Time (JIT) vs Just-in-Case (JIC) dan Bullwhip Effect",
        content: `Filosofi manufaktur Jepang 'Just-in-Time' (JIT) meminimalkan biaya penyimpanan stok gudang hingga nol. Namun saat disrupsi global melanda, JIT berubah menjadi mimpi buruk kekosongan stok. Praktisi modern menerapkan model hibrida 'Just-in-Case' (JIC) untuk komponen kritis berwaktu tunggu panjang (long-lead time). Bersamaan dengan itu, mereka mengendalikan 'Bullwhip Effect'—distorsi amplifikasi fluktuasi pesanan dari hilir ke hulu akibat lambatnya sinkronisasi data permintaan.`
      },
      {
        title: "Logistik Last-Mile, Manajemen Vendor, dan Mitigasi Single Point of Failure",
        content: `Pengiriman jarak tempuh terakhir (last-mile delivery) memakan hingga 53% dari total biaya logistik akibat kemacetan perkotaan dan inefisiensi rute. Di ranah pengadaan, ketergantungan pada vendor tunggal (single sourcing) adalah kerentanan fatal. Praktisi supply chain menerapkan strategi dual-sourcing: 70% volume diberikan ke pemasok utama berefisiensi tinggi, sementara 30% diberikan ke pemasok lokal cadangan untuk menjamin kelangsungan pasokan saat krisis geopolitik meletus.`
      },
      {
        title: "Pelajaran Teori Sistem dan Dinamika Antrean bagi Insinyur Hardware ITB",
        content: `Bagi mahasiswa teknik fisika, rantai pasok adalah perwujudan fisik dari Teori Kendali Sistem dan Dinamika Sistem (System Dynamics). Waktu tunggu (lead time) adalah konstanta waktu keterlambatan fase, persediaan gudang adalah kapasitansi muatan, dan pesanan adalah sinyal kendali input. Menganalisis supply chain dengan kacamata rekayasa sistem memungkinkan inovator merancang pabrikasi perangkat keras yang tahan terhadap osilasi dan resonansi pasar.`
      }
    ];
    takeaways = [
      "Hilangkan Single Point of Failure Komponen: Jangan pernah merancang PCB dengan komponen kritis yang hanya diproduksi oleh satu pabrik tunggal di dunia.",
      "Kendalikan Bullwhip Effect dengan Data Riil: Bagikan data penjualan riil secara instan kepada pemasok hulu untuk menghindari penumpukan stok yang tak berguna.",
      "Hitung Total Cost of Logistics: Ingat bahwa harga komponen murah dari luar negeri sering kali terhapus oleh mahalnya biaya logistik, bea cukai, dan waktu tunggu.",
      "Rancang Redundansi Rantai Pasok: Alokasikan sebagian volume produksi kepada vendor sekunder lokal sebagai polis asuransi keberlanjutan bisnis."
    ];
    reflectiveQuestion = `Jika vendor penyedia komponen paling kritis Anda mendadak bangkrut atau menghentikan pasokan besok pagi, berapa minggu produk Anda mampu bertahan sebelum lini produksi mati total?`;
  } else if (professionId === 14) {
    // PEBISNIS / PENGUSAHA (Topics 131-140)
    headline = `Naluri Pengusaha dan Skala Usaha: Menaklukkan Tantangan ${topicTitle}`;
    lead = `Pukul sepuluh malam di meja kerja kantor rintisan yang mulai sepi. Laporan arus kas bulanan (burn rate) menunjukkan runway tersisa 4 bulan lagi, sementara target pertumbuhan pengguna bulanan belum menembus kurva eksponensial. Terkait ${topicTitle.toLowerCase()}, menjadi pebisnis sejati bukanlah tentang panggung gemerlap konferensi atau kartu nama CEO bergengsi, melainkan keberanian menanggung ketidakpastian ekstrem, mengelola risiko kebangkrutan pribadi, dan memimpin manusia di tengah badai krisis modal.`;
    sections = [
      {
        title: "Product-Market Fit (PMF) dan Validasi Masalah Sebelum Membakar Modal",
        content: `Menghadapi ${topicTitle}, kesalahan nomor satu pendiri startup berlatar belakang teknis adalah 'a solution in search of a problem'—membangun teknologi canggih tanpa ada orang yang rela mengeluarkan uang tunai untuk membelinya. Mencapai Product-Market Fit (PMF) ditandai saat produk ditarik oleh pasar (market pull) dengan sangat kencang hingga tim kewalahan memenuhi pesanan. Validasi dilakukan melalui prototipe Minimum Viable Product (MVP) kasar yang langsung diuji ke tangan pembeli berbayar.`
      },
      {
        title: "Kedaulatan Arus Kas: Mengapa Bisnis yang Membukukan Laba Tetap Bisa Bangkrut",
        content: `Prinsip fundamental keuangan bisnis: 'Profit is an opinion, but Cash is a fact'. Banyak pengusaha bangkrut saat mencatat laba besar di atas kertas akuntansi karena piutang pelanggan tertahan 90 hari sementara tagihan vendor, gaji karyawan, dan pajak harus dibayar tunai tiap akhir bulan. Manajemen modal kerja (working capital management) dan disiplin menjaga runway kas minimal 12 bulan adalah benteng pertahanan mutlak seorang founder.`
      },
      {
        title: "Membangun Tim Inti dan Seni Melakukan Pivot Tanpa Kehilangan Arah",
        content: `Faktor penentu hidup-mati perusahaan di tahun pertama adalah kualitas rekrutmen 10 karyawan pertama. Merekrut talenta cerdas yang memiliki integritas dan 'founder mentality' jauh lebih berharga daripada pelamar berijazah mentereng yang hanya mencari zona nyaman. Ketika hipotesis awal bisnis terbukti keliru di pasar, pengusaha visioner berani melakukan 'pivot' radikal—mengubah model bisnis atau target pasar sambil tetap mempertahankan visi teknologi dasarnya.`
      },
      {
        title: "Transisi dari Operator Teknis Menuju Arsitek Modal dan Budaya Perusahaan",
        content: `Bagi mahasiswa teknik fisika dan inovator hardware ITB, tantangan terbesar saat scaling bisnis adalah melepaskan peran sebagai 'tukang solder dan coding' untuk bermutasi menjadi Chief Allocation Officer. Waktu Anda harus dialokasikan untuk tiga tugas vital: menjaga kas tidak habis, merekrut talenta terbaik di pasar, dan mengomunikasikan visi perusahaan secara konsisten kepada investor dan pelanggan.`
      }
    ];
    takeaways = [
      "Validasi dengan Transaksi Tunai: Jangan percaya pujian calon pengguna; satu-satunya validasi produk yang sah adalah saat pelanggan rela mentransfer uang muka.",
      "Arus Kas Adalah Oksigen Operasional: Monitor arus kas mingguan dengan ketat dan jangan biarkan piutang pelanggan membahayakan kelangsungan gaji tim Anda.",
      "Rekrut Karakter dan Budaya Kerja: Keahlian teknis dapat dilatih, namun etika kerja, integritas, dan ketahanan di bawah tekanan adalah bawaan karakter.",
      "Lepaskan Peran Operator Lapangan: Skala bisnis Anda ditentukan oleh kemampuan Anda membangun sistem dan mendelegasikan wewenang kepada tim yang kompeten."
    ];
    reflectiveQuestion = `Berapa bulan sisa runway kas operasional bisnis Anda hari ini jika seluruh pendapatan baru mendadak berhenti total mulai esok hari?`;
  } else {
    // JURNALIS INVESTIGATIF (Topics 141-150)
    headline = `Jurnalisme Investigasi Mendalam: Mengungkap Fakta Tersembunyi dalam ${topicTitle}`;
    lead = `Pukul sembilan malam di sudut kedai kopi remang-remang pinggiran kota. Di seberang meja Anda duduk seorang pejabat pengadaan dengan topi bisbol rendah, menyerahkan flashdisk terenkripsi berisi dokumen internal tender proyek infrastruktur publik senilai triliunan rupiah. Sebagai jurnalis investigatif, Anda memegang tanggung jawab etis dan hukum raksasa. Terkait ${topicTitle.toLowerCase()}, jurnalisme sejati bukan sekadar mengutip siaran pers pejabat humas, melainkan membongkar penyalahgunaan kekuasaan demi akuntabilitas publik.`;
    sections = [
      {
        title: "Standar Dua Sumber Independen dan Audit Forensik Dokumen Publik",
        content: `Menghadapi ${topicTitle}, aturan emas investigasi jurnalistik adalah standar verifikasi 'dua sumber independen' yang tidak saling terhubung. Dokumen bocoran (leaks) tidak boleh langsung dipercaya mentah-mentah; jurnalis membedah metadata berkas PDF, menelusuri nomor registrasi akta pendirian perusahaan di Ditjen AHU Kemenkumham, memeriksa rekam jejak kepemilikan silang (beneficial ownership), serta mencocokkan arus data anggaran publik (APBN/APBD) dengan realitas fisik di lapangan.`
      },
      {
        title: "Perlindungan Whistleblower dan Keamanan Operasional Digital",
        content: `Nyawa dan mata pencaharian narasumber rahasia berada di pundak jurnalis. Praktisi investigasi menerapkan protokol Operational Security (OpSec) ketat: komunikasi hanya menggunakan aplikasi pesan terenkripsi end-to-end tanpa nomor telepon terdaftar, perangkat komputer 'air-gapped' tanpa sambungan internet untuk memeriksa data sensitif, serta perlindungan hak tolak jurnalis di hadapan penyidik hukum peradilan sesuai Undang-Undang Pers.`
      },
      {
        title: "Menavigasi Somasi Hukum, Ancaman Fisik, dan Etika Cover Both Sides",
        content: `Sebelum laporan investigasi dipublikasikan di halaman muka media, tim redaksi menjalankan prosedur 'clearing' hukum bersama pengacara media untuk memitigasi jerat pasal pencemaran nama baik (UU ITE). Jurnalis wajib mengirimkan surat konfirmasi resmi berisi daftar pertanyaan rinci kepada pihak terduga (hak jawab/cover both sides). Memberikan waktu yang adil bagi pihak tertuduh untuk merespons adalah pilar integritas jurnalistik yang membedakan investigasi berkelas dari pembunuhan karakter (hit piece).`
      },
      {
        title: "Kekuatan Verifikasi Bukti Objektif bagi Praktisi Rekayasa dan Bisnis",
        content: `Bagi mahasiswa teknik fisika dan pelaku usaha, metode jurnalisme investigatif mengajarkan kerangka skeptisisme ilmiah yang sangat sehat (intellectual honesty). Jangan pernah memercayai klaim spesifikasi vendor atau laporan kemajuan proyek sebelum Anda memverifikasinya langsung dengan data telemetri independen dan audit fisik di lapangan kerja.`
      }
    ];
    takeaways = [
      "Prinsip Verifikasi Dua Sumber Independen: Jangan ambil keputusan strategis atau investasi besar berdasarkan laporan dari satu pihak tunggal semata.",
      "Protokol Keamanan Data dan Privasi: Lindungi data rahasia dagang dan identitas sumber internal dengan enkripsi kuat dan pemisahan akses yang ketat.",
      "Uji Keseimbangan Narasi (Cover Both Sides): Selalu dengarkan penjelasan pihak yang dikritik sebelum mengambil tindakan pemecatan atau sanksi hukum internal.",
      "Telusuri Arus Uang (Follow the Money): Motivasi tersembunyi dan konflik kepentingan dalam proyek bisnis paling mudah terungkap dengan mengaudit aliran dana transaksi."
    ];
    reflectiveQuestion = `Jika laporan kinerja teknis atau keuangan produk Anda diaudit secara independen oleh jurnalis investigatif hari ini, fakta memalukan apa yang paling Anda khawatirkan terungkap ke publik?`;
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
