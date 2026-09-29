import { TopicInfo } from "../../src/types.ts";
import { ArticleData, calculateReadingTime, buildRawMarkdown } from "../articleBuilderBase.ts";

export function generateCluster1Article(topic: TopicInfo): ArticleData {
  const { id, professionId, professionName, professionCategory, dayInProfession, topicTitle } = topic;
  const label = `${professionName} · Hari ${dayInProfession} dari 10`;

  let headline = "";
  let lead = "";
  let sections: Array<{ title: string; content: string }> = [];
  let takeaways: string[] = [];
  let reflectiveQuestion = "";

  if (professionId === 1) {
    // PENGACARA (Topics 4 to 10)
    if (dayInProfession === 4) {
      headline = "Peta Tingkatan Persidangan: Menavigasi Yurisdiksi dari Pengadilan Negeri ke Mahkamah Konstitusi";
      lead = "Pukul delapan pagi di koridor Pengadilan Negeri Jakarta Pusat, riuh pengacara, panitera pengganti, dan para pihak berseliweran di antara aroma rokok kretek dan tumpukan berkas perkara bertinta stempel basah. Di tangan Anda terdapat memori gugatan perdata perbuatan melawan hukum (PMH). Bagi pengacara muda, pengadilan sering dibayangkan sebagai satu arena homogen. Namun di lapangan, hukum Indonesia adalah labirin bertingkat dengan logika pembuktian yang berbeda 180 derajat di setiap jenjang.";
      sections = [
        {
          title: "Anatomi Peradilan Tingkat Pertama (PN): Ladang Tempur Fakta Materiil",
          content: "Pengadilan Negeri adalah satu-satunya gelanggang di mana fakta diuji secara fisik. Di sinilah saksi disumpah, rekaman audio diputar, surat asli dicocokkan dengan fotokopi bermeterai, dan pemeriksaan setempat (gerechtelijke plaatsopneming) dilakukan. Jika Anda melewatkan satu alat bukti kunci di PN, pintu pembuktian tertutup selamanya. Dalam sistem hukum acara perdata (HIR/RBG), hakim tingkat pertama adalah 'judex facti'—hakim pemeriksa fakta. Mereka tidak hanya membaca pasal undang-undang, melainkan mengamati getar suara saksi, konsistensi tanggal kuitansi, dan kronologi transfer perbankan. Bagi seorang insinyur sistem, PN adalah tahap 'hardware debugging' di mana setiap sensor dan sinyal fisik diuji validitasnya secara empiris."
        },
        {
          title: "Pengadilan Tinggi (PT) dan Mahkamah Agung (MA): Dari Pemeriksa Fakta Menuju Judex Juris",
          content: "Ketika perkara melompat ke tingkat banding di Pengadilan Tinggi, dinamika berubah total. Tidak ada lagi persidangan tatap muka, saksi yang dipanggil ulang, atau adu mulut retorika. Hakim tinggi memeriksa berkas perkara ('dossier') secara tertulis. Keberhasilan banding bertumpu pada ketajaman Memori Banding: membedah kekeliruan pertimbangan hukum hakim tingkat pertama (judex facti). Lebih jauh lagi, saat perkara menembus Kasasi di Mahkamah Agung, MA menolak memeriksa ulang fakta materiil; MA bertindak sebagai 'judex juris' yang hanya menguji apakah ada kesalahan penerapan hukum, pelanggaran tata tertib peradilan, atau kelalaian mencantumkan dasar putusan. Mengajukan bukti baru saat kasasi adalah kekeliruan fatal yang langsung berbuah penolakan putusan."
        },
        {
          title: "Mahkamah Konstitusi (MK) dan Peninjauan Kembali (PK): Benteng Terakhir dan Syarat Ketat Novum",
          content: "Tingkatan puncak memiliki arsitektur tersendiri. Peninjauan Kembali (PK) adalah upaya hukum luar biasa yang menuntut adanya 'novum'—bukti baru yang bersifat menentukan, yang telah ada pada saat persidangan berlangsung namun belum ditemukan karena keadaan tertentu. Novum bukan sekadar dokumen tambahan, melainkan bukti yang jika diketahui pada waktu persidangan akan menghasilkan putusan berbeda. Sementara itu, Mahkamah Konstitusi (MK) berada di luar hierarki peradilan umum, bertindak sebagai 'the guardian of constitution' yang menguji apakah norma undang-undang bertentangan dengan UUD 1945. Di MK, argumen bukan tentang kerugian perorangan konkret semata, melainkan doktrin constitutional loss dan penafsiran hak warga negara."
        },
        {
          title: "Strategi Alokasi Energi dan Biaya bagi Prinsipal Bisnis",
          content: "Miskonsepsi terbesar pelaku usaha adalah memperlakukan setiap gugatan dengan nafsu bertarung hingga tingkat kasasi dan PK. Advokat ulung menghitung nilai bersih waktu (time value of litigation). Membawa sengketa hingga MA memakan waktu 3 sampai 6 tahun, selama itu dana tertahan, bank menolak pinjaman, dan valuasi aset tergerus depresiasi. Pengacara korporat senior selalu merancang 'exit strategy' di tiap tingkatan: jika putusan PN menguntungkan, jadikan posisi tawar kuat untuk memaksa lawan menyepakati akta perdamaian (dading) sebelum memori banding diajukan."
        }
      ];
      takeaways: [
        "Fakta Mengunci di Tingkat Pertama: Seluruh bukti fisik, saksi ahli, dan audit forensik wajib tuntas diajukan di Pengadilan Negeri; pengadilan banding dan kasasi tidak menerima re-investigasi fakta.",
        "Kekuatan Novum Bersifat Mutlak: Jangan andalkan Peninjauan Kembali kecuali Anda memegang dokumen autentik yang terbukti luput bukan karena kelalaian pihak Anda.",
        "Hitung Biaya Kesempatan (Opportunity Cost): Tiga tahun litigasi demi kemenangan 100% sering kali lebih merugikan daripada restrukturisasi kompromi 70% di tahun pertama.",
        "Pahami Peran Lembaga: Gunakan PN untuk sengketa kontrak, MA untuk koreksi penerapan regulasi, dan MK untuk merombak pasal undang-undang yang menghambat inovasi industri."
      ];
      reflectiveQuestion = "Dalam sengketa bisnis yang sedang Anda hadapi atau proyeksikan, apakah Anda mengejar validasi ego moral di pengadilan atau efisiensi pemulihan modal yang paling rasional?";
    } else if (dayInProfession === 5) {
      headline = "Seni Bertanya di Meja Hijau: Cross-Examination, Funneling, dan Membongkar Inkonsistensi Saksi";
      lead = "Lampu ruang sidang menyorot tajam ke kursi saksi ahli yang dihadirkan oleh pihak lawan. Di tangan Anda bukan teks pidato berkobar-kobar, melainkan daftar 15 pertanyaan terstruktur yang telah dikalibrasi selama tiga hari. Saksi ahli lawan adalah guru besar teknik dengan jam terbang 30 tahun. Menyerang keahlian akademisnya secara frontal adalah bunuh diri reputasional. Anda membutuhkan teknik 'cross-examination' presisi: mengajukan pertanyaan tertutup bertahap yang mengunci saksi ke dalam parameter teknis buatan Anda sendiri, sampai dia tidak memiliki opsi selain mengakui kegagalan metodologinya sendiri.";
      sections = [
        {
          title: "Teknik Funneling: Menjerat Asumsi dari Makro Menuju Mikro",
          content: "Pemeriksaan silang (cross-examination) bukanlah ajang interogasi kasar seperti di film laga, melainkan orkestrasi logika deduktif yang tenang. Praktisi senior menggunakan metode 'funneling' (corong). Pertanyaan awal selalu dimulai dengan premis umum yang tidak mungkin dibantah oleh saksi, misalnya: 'Apakah Anda sepakat bahwa setiap pengujian kekuatan tarik material wajib mengikuti standar ASTM E8?'. Saksi pasti menjawab 'Ya'. Pertanyaan kedua: 'Apakah standar tersebut mensyaratkan kalibrasi load cell dalam kurun waktu 12 bulan terakhir?'. Saksi kembali menjawab 'Ya'. Di titik inilah corong menyempit. Pertanyaan ketiga menunjukkan bukti audit lab yang memperlihatkan kalibrasi alat uji mereka telah kedaluwarsa 4 bulan saat sampel diambil. Saksi terperangkap oleh premis yang ia setujui sendiri."
        },
        {
          title: "Hukum Emas Pertanyaan Silang: Jangan Pernah Menanyakan 'Mengapa'",
          content: "Kaidah fundamental dalam advokasi peradilan adalah 'Never ask a question you don't know the answer to, and never ask why'. Begitu Anda menanyakan 'Mengapa Anda tidak mengkalibrasi alat tersebut?', Anda memberikan panggung bagi saksi untuk merangkai alibi emosional, justifikasi teknis, atau mendominasi narasi. Pertanyaan silang yang efektif selalu berupa kalimat deklaratif yang menuntut konfirmasi biner: 'Ya' atau 'Tidak'. Advokat berpengalaman mengontrol tempo ruang sidang, memotong jawaban saksi yang mulai bertele-tele dengan sopan namun tegas ('Terima kasih saksi, cukup jawab apakah sertifikat ini kedaluwarsa atau tidak')."
        },
        {
          title: "Mendeteksi Mikroekspresi dan Inkonsistensi Berkas BAP",
          content: "Saksi yang berbohong atau mengarang cerita jarang runtuh karena tekanan suara; mereka runtuh oleh friksi antara memori faktual dan narasi fabrikasi. Praktisi litigasi membandingkan kata demi kata antara Berita Acara Pemeriksaan (BAP) penyidikan polisi dengan keterangan langsung di muka sidang. Perbedaan jeda waktu, pilihan kata ganti, atau perubahan urutan kejadian adalah sinyal alarm. Dengan menghadapkan saksi pada kontradiksi dokumen yang ditandatanganinya sendiri 6 bulan lalu, kredibilitas saksi di mata majelis hakim runtuh seketika."
        },
        {
          title: "Aplikasi Seni Bertanya dalam Negosiasi Vendor Hardware dan Investor",
          content: "Bagi seorang teknolog atau insinyur hardware, keterampilan cross-examination adalah senjata paling berharga saat berhadapan dengan subkontraktor pabrikasi atau calon mitra strategis. Alih-alih bertanya 'Apakah pabrik Anda sanggup membuat toleransi 0.05 mm?', ajukan pertanyaan funneling: minta log kalibrasi mesin CNC mereka, rasio scrap bulanan, dan sertifikasi operator. Seni bertanya mengalihkan percakapan dari klaim sepihak menjadi verifikasi data empiris yang objektif."
        }
      ];
      takeaways = [
        "Metode Funneling Logis: Kunci lawan dengan menyepakati standar objektif terlebih dahulu sebelum membeberkan kegagalan operasional mereka.",
        "Tutup Ruang Alibi: Jangan tanyakan 'mengapa' saat menguji kebenaran; fokus pada fakta biner yang terdokumentasi secara fisik.",
        "Gunakan Dokumen sebagai Cermin: Inkonsistensi paling telak selalu terungkap saat pernyataan lisan dibenturkan dengan rekam jejak tertulis pihak itu sendiri.",
        "Verifikasi Vendor Tanpa Emosi: Gunakan teknik pertanyaan terstruktur untuk menguji kapasitas manufaktur mitra bisnis sebelum modal Anda dikucurkan."
      ];
      reflectiveQuestion = "Saat mewawancarai calon mitra kunci atau supplier hari ini, apakah Anda membiarkan mereka menjual narasi indah atau Anda secara metodologis menguji batas klaim mereka?";
    } else if (dayInProfession === 6) {
      headline = "Arsitektur Argumen Hukum: Membangun Silogisme Kedap Celah dan Meja Redaksi Legal Opinion";
      lead = "Tumpukan undang-undang, peraturan pemerintah pengganti undang-undang (Perppu), dan putusan Mahkamah Agung era 1980-an memenuhi meja kerja firma hukum. Klien Anda, sebuah konsorsium telekomunikasi satelit, meminta legal opinion setebal 20 halaman dalam waktu 24 jam mengenai legalitas frekuensi gelombang mikro yang mereka sewa dari BUMN yang sedang dipailitkan. Argumen hukum yang meyakinkan bukan karya sastra puitis, melainkan konstruksi silogisme matematis yang presisi: premis mayor (norma hukum), premis minor (fakta materiil), dan konklusi tak terbantahkan.";
      sections = [
        {
          title: "Pondasi Silogisme Hukum: Premis Mayor, Premis Minor, dan Konklusi",
          content: "Penalaran hukum (legal reasoning) bekerja mirip dengan kode kompilasi perangkat lunak: jika sintaks logika cacat, seluruh program akan crash. Premis mayor adalah norma hukum yang valid dan berlaku (lex positiva). Premis minor adalah serangkaian fakta konkret yang telah teruji alat buktinya. Jika premis mayor menyatakan 'Setiap orang yang karena kelalaiannya mengakibatkan kerugian wajib mengganti rugi (Pasal 1365 KUHPer)', dan premis minor membuktikan 'Vendor terlambat menginstalasi sistem server tanpa dasar force majeure', maka konklusinya adalah 'Vendor wajib membayar ganti rugi'. Kesalahan advokat pemula adalah memasukkan opini subjektif ke dalam premis, sehingga lawan mudah membongkar cacat logikanya (fallacy)."
        },
        {
          title: "Asas-Asas Preferensi Hukum: Mengurai Tabrakan Regulasi yang Semrawut",
          content: "Dalam yurisdiksi Indonesia di mana ribuan peraturan kementerian saling tumpang tindih, advokat senior menguasai senjata 'tiga asas preferensi hukum'. Pertama, Lex Superior Derogat Legi Inferiori (hukum yang lebih tinggi mengesampingkan hukum yang lebih rendah). Kedua, Lex Specialis Derogat Legi Generali (hukum yang khusus mengesampingkan hukum yang umum). Ketiga, Lex Posterior Derogat Legi Priori (hukum yang baru mengesampingkan hukum yang lama). Menguasai ketiga asas ini memungkinkan pengacara membebaskan klien dari ancaman denda kementerian dengan menunjukkan bahwa peraturan menteri terkait telah gugur oleh ketentuan undang-undang sektoral."
        },
        {
          title: "Anatomi Legal Opinion yang Digunakan Direksi Korporasi Bernilai Triliunan",
          content: "Sebuah Legal Opinion (LO) yang berwibawa memiliki format baku: Executive Summary, Statement of Facts, Issues Presented, Applicable Laws, Legal Analysis, and Recommendations. Dokumen ini bukan sekadar kajian teoritis kampus, melainkan benteng perlindungan pribadi bagi direksi (Business Judgment Rule). Ketika direksi mengambil keputusan berisiko tinggi berdasarkan LO independen, mereka terlindungi dari jerat pidana korupsi atau gugatan perdata kepailitan pribadi karena telah bertindak dengan itikad baik (fiduciary duty)."
        },
        {
          title: "Pelajaran untuk Pengembang Hardware: Kontrak Adalah Kode yang Dieksekusi Manusia",
          content: "Bagi insinyur perangkat keras, baris kode firmware mengendalikan aktuator mekanik. Dalam dunia bisnis, klausul kontrak adalah kode yang mengendalikan manusia dan arus modal. Jika klausul 'Defect Liability Period' tidak merinci apakah kerusakan akibat lonjakan tegangan PLN termasuk tanggungan garansi, Anda membuka celah sengketa bernilai miliaran. Menulis kontrak dengan ketelitian silogisme hukum mencegah perusahaan rintisan Anda mati konyol akibat tafsir ganda."
        }
      ];
      takeaways = [
        "Bangun Silogisme Kedap Air: Pastikan setiap klaim bisnis Anda berdiri di atas premis fakta yang terverifikasi dan premis regulasi yang sah.",
        "Manfaatkan Asas Preferensi: Jangan menyerah pada surat teguran dinas sebelum memeriksa apakah regulasi yang mereka rujuk bertabrakan dengan undang-undang di atasnya.",
        "Legal Opinion sebagai Perisai Pribadi: Dapatkan kajian hukum formal sebelum menandatangani keputusan pengadaan atau pendanaan bernilai strategis.",
        "Kontrak adalah Spesifikasi Sistem: Tulis setiap klausul garansi dan batasan tanggung jawab dengan tingkat presisi yang sama seperti toleransi sirkuit elektronik."
      ];
      reflectiveQuestion = "Apakah kontrak kerja sama atau terms of service produk teknologi Anda sudah disusun dengan logika silogisme yang kedap celah, atau masih menyimpan bom waktu interpretasi ganda?";
    } else {
      // Days 7-10 fallback/structured lawyer
      headline = `Strategi Lanjutan Advokat: Membedah ${topicTitle}`;
      lead = `Di meja kerja praktik hukum berisiko tinggi, seorang advokat senior tidak sekadar mengutip pasal undang-undang melainkan menavigasi dinamika psikologis, kalkulasi ekonomi perkara, dan perlindungan aset strategis klien. Menghadapi ${topicTitle.toLowerCase()}, setiap langkah prosedural memiliki konsekuensi langsung terhadap neraca keuangan dan kelangsungan reputasi bisnis para pihak.`;
      sections = [
        {
          title: "Peta Risiko Lapangan dan Kerangka Regulasi Terkait",
          content: `Membedah ${topicTitle} menuntut pemahaman mendalam atas batas-batas regulasi formal dan realitas interaksi di lapangan peradilan. Di Indonesia, hukum tertulis sering kali hanya mencakup 50% dari kalkulasi keputusan; 50% sisanya adalah manajemen pemangku kepentingan, pemahaman profil hakim pemeriksa perkara, dan mitigasi eksposur publik di media. Praktisi hukum yang matang tidak pernah melangkah tanpa peta risiko multi-dimensi yang memetakan skenario terbaik, skenario moderat, dan skenario krisis.`
        },
        {
          title: "Protokol Eksekusi Taktis dan Pengumpulan Bukti Kritis",
          content: `Langkah operasional dalam mengeksekusi strategi ini melibatkan audit dokumen komprehensif, pencatatan kronologis bermeterai, dan penyiapan 'shadow dossier' yang mengantisipasi manuver serangan pihak lawan. Setiap berkas yang diajukan ke hadapan majelis atau mitra runding harus melewati pengujian beban (stress-testing) internal untuk memastikan tidak ada celah pembuktian yang dapat diputarbalikkan menjadi senjata bumerang.`
        },
        {
          title: "Dilema Nyata: Titik Temu antara Moralitas, Kecepatan, dan Nilai Komersial",
          content: `Di ranah perselisihan bernilai tinggi, benturan antara idealisme hukum acara dan kecepatan pemulihan modal selalu menjadi dilema paling tajam. Menunggu putusan berkekuatan hukum tetap selama bertahun-tahun sering kali berujung pada kemenangan hampa saat pihak tergugat telah memindahkan seluruh likuiditasnya. Advokat ulung mengidentifikasi titik ungkit konservatoir untuk membekukan rekening lawan secara sah sebelum proses peradilan berlarut-larut.`
        },
        {
          title: "Aplikasi Model Mental Hukum bagi Inovator Teknologi dan Bisnis",
          content: `Bagi wirausahawan dan insinyur hardware, cara berpikir yuridis ini mengajarkan doktrin pertahanan berlapis (defense-in-depth). Sama seperti merancang redundansi pada catu daya atau sensor satelit, arsitektur bisnis wajib memiliki klausul pengakhiran sepihak (termination for convenience), forum penyelesaian sengketa arbitrase internasional (SIAC/BANI), dan pemisahan liabilitas entitas induk.`
        }
      ];
      takeaways = [
        "Desain Pertahanan Berlapis: Lindungi modal intelektual dan operasional Anda dengan klausul pembatasan tanggung jawab sebelum friksi muncul.",
        "Kemenangan Substansial Melampaui Putusan Kertas: Prioritaskan pengamanan aset riil daripada sekadar mengantongi amar putusan formal yang tidak dapat dieksekusi.",
        "Stress-Testing Argumen: Uji setiap klaim internal Anda melalui sudut pandang lawan paling agresif sebelum memaparkannya ke publik.",
        "Kecepatan Tindakan Konservatoir: Amankan jaminan kebendaan di awal perkara untuk mencegah pengalihan aset secara curang oleh mitra bermasalah."
      ];
      reflectiveQuestion = `Bagaimana Anda memastikan struktur operasional dan perizinan bisnis Anda hari ini mampu bertahan dari serangan hukum yang dipersiapkan secara sistematis oleh kompetitor?`;
    }
  } else if (professionId === 2) {
    // PSIKOLOG (Topics 11 to 20)
    headline = `Psikologi Klinis Terapan: Membedah ${topicTitle}`;
    lead = `Pukul delapan pagi di ruang konseling yang hening berpencahayaan hangat, seorang psikolog klinis tidak sedang duduk sebagai pembaca ramalan, melainkan sebagai analis sistem perilaku manusia yang sangat teliti. Di hadapan Anda duduk seorang klien dengan tanda-tanda kelelahan kronis atau afek datar. Terkait ${topicTitle.toLowerCase()}, tugas Anda adalah membedah distorsi kognitif, mengurai trauma masa lalu, dan merumuskan intervensi terapeutik berbasis bukti.`;
    sections = [
      {
        title: "Anatomi Fenomena Mental: Mengurai Struktur Gejala dan Konteks Klien",
        content: `Dalam menghadapi ${topicTitle}, psikolog klinis memulai dengan menanggalkan penilaian moral subjektif. Manusia adalah sistem adaptif kompleks yang merespons stresor lingkungan melalui pola pertahanan psikologis tertentu. Mengidentifikasi apakah suatu respons adalah reaksi stres akut, gangguan afektif mayor, atau mekanisme koping yang maladaptif menuntut keahlian diagnostik tajam berpedoman pada DSM-5 dan ICD-11, dipadukan dengan observasi klinis mikroekspresi dan modulasi intonasi suara.`
      },
      {
        title: "Protokol Klinis dan Metodologi Intervensi Berbasis Bukti",
        content: `Eksekusi terapi bertumpu pada therapeutic alliance—ikatan rasa aman dan kepercayaan antara terapis dan klien yang terbukti menjadi prediktor keberhasilan terapi tertinggi. Menggunakan kerangka Cognitive Behavioral Therapy (CBT), Acceptance and Commitment Therapy (ACT), atau pendekatan psikodinamik, praktisi memandu klien melakukan restrukturisasi kognitif (cognitive reframing). Klien dilatih mengenali bias 'all-or-nothing thinking' atau 'catastrophizing' yang selama ini menyabotase keputusan hidup mereka.`
      },
      {
        title: "Titik Kritis Lapangan: Resistensi, Transferensi, dan Batasan Etik",
        content: `Tantangan paling rumit dalam praktik klinis bukan menghafal teori, melainkan menavigasi dinamika bawah sadar ruang terapi. Klien sering kali memproyeksikan kemarahan terhadap figur otoritas masa kecilnya kepada terapis (transferensi), sementara terapis rentan mengalami 'countertransference' jika luka pribadinya belum tuntas. Menjaga batas profesional (boundary setting) dan mengenali batas kewenangan etik—termasuk kapan harus merujuk kasus ke psikiater untuk farmakoterapi—adalah pilar keselamatan pasien.`
      },
      {
        title: "Pelajaran Kritis bagi Pemimpin Tim Rekayasa dan Pendiri Startup",
        content: `Bagi mahasiswa teknik fisika dan wirausahawan hardware yang terbiasa dengan logika deterministik sirkuit, psikologi klinis mengajarkan bahwa manusia adalah subsistem non-linear. Mengabaikan faktor beban kognitif, burnout tim, atau bias kognitif dalam pengambilan keputusan produk adalah kegagalan rekayasa sistem yang paling mematikan. Menguasai prinsip regulasi emosi dan active listening adalah keterampilan kepemimpinan terpenting saat menavigasi krisis peluncuran produk.`
      }
    ];
    takeaways = [
      "Therapeutic Alliance dalam Organisasi: Kepercayaan psikologis (psychological safety) adalah pondasi mutlak sebelum tim dapat menerima kritik teknis yang tajam.",
      "Dekonstruksi Distorsi Kognitif: Kenali pola pikir biner dan katastropik dalam menganalisis kegagalan prototipe sebelum mengambil keputusan terburu-buru.",
      "Manajemen Countertransference Pribadi: Sadari bias emosional masa lalu Anda sendiri agar tidak mengaburkan penilaian terhadap kinerja bawahan atau mitra.",
      "Ketahui Batas Kompetensi: Sama seperti psikolog merujuk ke psikiater, jangan ragu mendelegasikan masalah di luar keahlian inti Anda kepada spesialis yang tepat."
    ];
    reflectiveQuestion = `Pola distorsi kognitif apa yang tanpa Anda sadari kerap menyabotase cara Anda merespons tekanan kerja dan konflik dalam tim rekayasa Anda?`;
  } else if (professionId === 3) {
    // DOKTER (Topics 21 to 30)
    headline = `Protokol Klinis Dokter: Menavigasi Ketidakpastian dan Tekanan dalam ${topicTitle}`;
    lead = `Pukul 02.15 dini hari di Instalasi Gawat Darurat (IGD) kelas A, sirene ambulans meraung bersamaan dengan monitor saturasi oksigen yang berkedip merah di ruang resusitasi. Sebagai dokter jaga, Anda dihadapkan pada pasien tidak sadar dengan riwayat medis yang nihil. Dalam konteks ${topicTitle.toLowerCase()}, waktu adalah jaringan organ yang terancam mati (time is tissue). Insting klinis Anda harus langsung menyaring ratusan diagnosis banding menjadi protokol tindakan segera.`;
    sections = [
      {
        title: "Fisiologi Krisis dan Kerangka Berpikir Diagnosis Banding",
        content: `Menghadapi ${topicTitle}, dokter bekerja menggunakan penalaran probabilistik di bawah keterbatasan informasi. Prinsip 'Ockham's Razor' menuntut dokter mencari satu penyakit tunggal yang paling hemat menjelaskan seluruh gejala, namun 'Hickam's Dictum' mengingatkan bahwa pasien bisa mengidap beberapa penyakit sekaligus. Dari anamnesis terarah, palpasi fisik, hingga pembacaan tanda vital, dokter mengkategorikan pasien dalam skala triase sebelum kerusakan organ ireversibel terjadi.`
      },
      {
        title: "Algoritma Tindakan Gawat Darurat dan Interpretasi Cepat Data Biomedis",
        content: `Langkah eksekusi klinis mengikuti algoritma baku ABCDE (Airway, Breathing, Circulation, Disability, Exposure). Dalam hitungan detik, dokter menganalisis gas darah arteri (AGD), EKG 12 sandapan untuk tanda infark miokard, dan hitung darah lengkap. Mengintegrasikan data biomedis ini dengan respons fisiologis pasien secara langsung adalah seni klinis yang membedakan dokter berpengalaman dari sekadar hafalan buku teks.`
      },
      {
        title: "Titik Kritis Kegagalan: Malpraktik, Kelelahan Sirkadian, dan Komunikasi SPIKES",
        content: `Di bawah ritme jaga 24 jam tanpa tidur, kapasitas kognitif dokter mengalami degradasi tajam. Di sinilah protokol checklist keselamatan pasien (Surgical Safety Checklist) menjadi benteng pencegah malpraktik. Selain itu, saat menghadapi prognosis fatal, dokter wajib menerapkan protokol SPIKES untuk menyampaikan kabar buruk kepada keluarga tanpa merusak harapan kemanusiaan mereka di tengah kepedihan mendalam.`
      },
      {
        title: "Pelajaran Diagnosis Sistem bagi Rekayasawan Hardware ITB",
        content: `Bagi mahasiswa teknik fisika dan pengembang perangkat keras, metode diagnosis klinis kedokteran adalah padanan sempurna dari 'hardware troubleshooting'. Jangan pernah memperbaiki sub-komponen sebelum memastikan catu daya utama (airway & breathing sistem) stabil. Diagnosis banding adalah pemetaan ruang variabel kegagalan yang wajib dilakukan secara sistematis tanpa tergesa-gesa menyimpulkan akar masalah.`
      }
    ];
    takeaways = [
      "Stabilkan Tanda Vital Sistem Terlebih Dahulu: Jangan sibuk menganalisis fitur sekunder saat fondasi operasional atau arus kas bisnis Anda sedang kritis.",
      "Algoritma Mengalahkan Kepanikan: Gunakan checklist baku saat krisis operasional meledak agar terhindar dari human error akibat kelelahan mental.",
      "Protokol Komunikasi Krisis Empatis: Sampaikan kabar buruk secara transparan dan terstruktur kepada mitra bisnis dengan tetap memegang kendali situasi.",
      "Waspadai Hickam's Dictum Teknis: Satu kegagalan prototipe bisa jadi bukan disebabkan oleh satu bug tunggal, melainkan interaksi beberapa anomali sekaligus."
    ];
    reflectiveQuestion = `Jika proyek perangkat keras atau bisnis Anda tiba-tiba mengalami 'henti jantung' operasional hari ini, checklist darurat apa yang langsung Anda jalankan di 60 menit pertama?`;
  } else if (professionId === 4) {
    // KRIMINAL INVESTIGATOR (Topics 31 to 40)
    headline = `Forensik dan Rekonstruksi Kriminal: Menembus Misteri ${topicTitle}`;
    lead = `Garis polisi kuning membentang di bawah rintik hujan dini hari di sebuah gudang kawasan industri. Bau mesiu samar dan pecahan kaca berserakan di lantai beton. Sebagai penyidik kriminal, Anda melangkah ke tempat kejadian perkara (TKP) bukan untuk berspekulasi, melainkan untuk mengamankan 'silent witnesses'—bukti-bukti bisu yang tidak pernah berbohong. Terkait ${topicTitle.toLowerCase()}, setiap sentimeter debu dan setiap byte data digital adalah mata rantai yang menghubungkan korban dengan pelaku.`;
    sections = [
      {
        title: "Golden Hour Olah TKP dan Preservasi Bukti Fisik",
        content: `Dua jam pertama setelah tindak pidana terjadi dikenal sebagai 'golden hour'. Inilah jendela waktu paling krusial sebelum jejak sidik jari laten terhapus, DNA terdegradasi oleh cuaca, atau memori saksi terkontaminasi oleh desas-desus media sosial. Menggunakan metode pencarian grid atau spiral, penyelidik mendokumentasikan setiap detail melalui fotogrametri resolusi tinggi dan mencatat koordinat spasial tanpa menyentuh objek sebelum diberi label nomor bukti.`
      },
      {
        title: "Chain of Custody dan Analisis Forensik Multidisiplin",
        content: `Sebuah bukti paling memberatkan sekalipun akan digugurkan oleh hakim di pengadilan jika 'chain of custody' (rantai penjagaan bukti) cacat. Setiap perpindahan kantong bukti dari TKP ke laboratorium forensik (Labfor) wajib tercatat dengan tanda tangan, cap waktu, dan nomor segel kedap udara. Bersamaan dengan itu, forensik digital mengekstraksi dump memori smartphone dan log BTS seluler menggunakan piranti write-blocker agar hash integritas data tidak bermutasi satu bit pun.`
      },
      {
        title: "Metodologi Wawancara Investigatif PEACE vs Distorsi Tunnel Vision",
        content: `Penyidik modern menolak teknik interogasi paksa yang melahirkan pengakuan palsu. Mereka menggunakan model PEACE (Planning, Engage, Account, Clarify, Evaluation). Jebakan terbesar bagi detektif adalah 'tunnel vision'—terlalu cepat mencurigai satu target lalu mengabaikan bukti yang meringankannya. Menyelidiki alibi secara independen dan menguji teori alternatif adalah disiplin ilmiah yang melindungi integritas hukum peradilan.`
      },
      {
        title: "Aplikasi Forensik Investigasi dalam Audit Keamanan Produk dan Hardware",
        content: `Bagi praktisi teknik dan wirausahawan, pola pikir investigator kriminal sangat vital dalam menyelidiki kegagalan produk, kebocoran rahasia dagang, atau sabotase rantai pasok. Menyimpan log firmware dengan cryptographic hashing dan menjaga jejak audit dokumen teknis memastikan integritas hak kekayaan intelektual perusahaan Anda terlindungi secara hukum saat terjadi pencurian teknologi.`
      }
    ];
    takeaways = [
      "Integritas Chain of Custody Data: Simpan bukti transaksi dan dokumentasi kode dengan cap waktu kriptografis agar sah diakui di ranah hukum audit.",
      "Golden Hour Manajemen Insiden: Tangani kebocoran data atau kegagalan sistem operasional seketika sebelum bukti log terhapus siklus rotasi server.",
      "Hindari Tunnel Vision Investigasi: Selalu uji hipotesis alternatif saat menelusuri akar masalah kegagalan teknis sebelum menyalahkan satu modul semata.",
      "Koleksi Bukti Bisu Objektif: Jangan pernah mengandalkan pengakuan lisan semata jika tidak didukung oleh rekam jejak telemetri yang valid."
    ];
    reflectiveQuestion = `Seberapa aman rantai audit (audit trail) dokumen teknis dan data sensitif perusahaan Anda saat ini jika sewaktu-waktu terjadi sengketa hukum atau sabotase internal?`;
  } else {
    // BIOLOGIS (Topics 41 to 50)
    headline = `Metode Peneliti Biologi: Menjawab Kompleksitas Alam dalam ${topicTitle}`;
    lead = `Fajar baru merebak di stasiun riset biologis hutan tropis Kalimantan. Udara basah pekat oleh kelembaban 95% sementara sensor fotometri dan mikropipet telah siap di meja laboratorium lapangan. Sebagai peneliti biologi, Anda berhadapan dengan ekosistem hidup yang luar biasa rumit dan dinamis. Terkait ${topicTitle.toLowerCase()}, sains biologi modern tidak lagi sekadar katalogisasi spesies, melainkan rekayasa genetika molekuler, pemodelan dinamika populasi, dan analisis data metabolomik beresolusi tinggi.`;
    sections = [
      {
        title: "Desain Eksperimen Biologis: Kontrol, Variabel Bebas, dan Replikasi",
        content: `Berbeda dengan fisika partikel murni di mana variabel dapat diisolasi dalam ruang hampa, sistem biologis memiliki variabilitas inheren yang sangat tinggi. Merancang eksperimen biologi menuntut desain kontrol positif dan negatif yang sangat ketat, teknik pengacakan blok (randomized block design), serta replikasi biologis independen untuk membedakan antara sinyal fenotipik nyata dan 'noise' stokastik seluler.`
      },
      {
        title: "Teknologi Lapangan dan Bioteknologi Terapan: Dari PCR ke CRISPR",
        content: `Dari ekstraksi eDNA (environmental DNA) di aliran sungai hingga penataan urutan genom generasi baru (NGS), instrumen biologis masa kini bekerja di skala nanometer. Dalam rekayasa bioteknologi industri, teknologi penyuntingan gen CRISPR-Cas9 dan kultur bioreaktor terotomatisasi memungkinkan biosintesis enzim industri dengan rendemen tinggi, menjembatani riset laboratorium dengan produksi massal farmasi dan pangan berkelanjutan.`
      },
      {
        title: "Krisis Reproduksibilitas dan Dilema Etika Riset di Lapangan Nyata",
        content: `Tantangan terbesar komunitas biologi global adalah 'reproducibility crisis'—banyak publikasi ilmiah gagal direplikasi oleh laboratorium lain akibat bias publikasi dan kontaminasi kultur sel yang tidak tercatat. Ditambah lagi, etika bio-safety dan konservasi mengharuskan peneliti menyeimbangkan eksploitasi hayati untuk keuntungan komersial dengan preservasi keanekaragaman genetik plasma nutfah lokal.`
      },
      {
        title: "Bio-Inspirasi dan Komputasi Alami bagi Rekayasawan Hardware",
        content: `Bagi mahasiswa teknik fisika ITB dan pengembang instrumen, biologi adalah perpustakaan solusi teknik yang telah diuji seleksi alam selama 3.8 miliar tahun. Mempelajari sistem kendali homeostasis seluler atau transduksi sinyal fotoreseptor mata serangga membuka cakrawala desain sensor neuromorfik dan arsitektur mikrobaterai ramah lingkungan yang jauh melampaui efisiensi silikon konvensional.`
      }
    ];
    takeaways = [
      "Kekuatan Replikasi Independen: Jangan pernah menyimpulkan validitas produk dari satu prototipe tunggal sebelum melalui uji toleransi multi-lingkungan.",
      "Kendalikan Variabel Lingkungan: Sadari bahwa sistem kompleks bereaksi secara non-linear terhadap perubahan parameter kecil di lapangan riil.",
      "Dokumentasi Metadata Rinci: Catat setiap kondisi operasional pengujian sistem agar data Anda dapat diuji ulang dan dipercaya investor.",
      "Adopsi Arsitektur Biomimetik: Manfaatkan efisiensi desain biologi untuk mengatasi bottleneck termal dan konsumsi daya pada perangkat keras modern."
    ];
    reflectiveQuestion = `Prinsip efisiensi atau ketahanan biologis apa yang dapat Anda adopsi hari ini untuk membuat arsitektur perangkat keras atau model bisnis Anda lebih adaptif terhadap disrupsi pasar?`;
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
