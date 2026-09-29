import { TopicInfo } from "../../src/types.ts";
import { ArticleData, calculateReadingTime, buildRawMarkdown } from "../articleBuilderBase.ts";

export function generateCluster4Article(topic: TopicInfo): ArticleData {
  const { id, professionId, professionName, professionCategory, dayInProfession, topicTitle } = topic;
  const label = `${professionName} · Hari ${dayInProfession} dari 10`;

  let headline = "";
  let lead = "";
  let sections: Array<{ title: string; content: string }> = [];
  let takeaways: string[] = [];
  let reflectiveQuestion = "";

  if (professionId === 16) {
    // DIPLOMAT / NEGOSIATOR (Topics 151-160)
    headline = `Seni Diplomasi dan Negosiasi Tingkat Tinggi: Menavigasi ${topicTitle}`;
    lead = `Pukul sebelas malam di ruang perundingan tertutup markas perwakilan diplomatik Jenewa. Di atas meja marmer tersaji draf traktat perdagangan bilateral dengan 14 klausul yang masih ditandai tanda kurung merah pertanda sengketa kebuntuan (deadlock). Sebagai diplomat dan ketua delegasi perunding, Anda menyadari bahwa sebuah kata tunggal—seperti perbedaan antara 'shall' (kewajiban mengikat) dan 'should' (anjuran moral)—dapat menentukan nasib tarif ekspor industri nasional selama puluhan tahun. Terkait ${topicTitle.toLowerCase()}, diplomasi adalah seni mengelola kekuatan tanpa menembakkan peluru.`;
    sections = [
      {
        title: "Konsep BATNA dan Pemetaan Zona Kesepakatan (ZOPA)",
        content: `Dalam membedah ${topicTitle}, hukum besi negosiasi adalah bahwa leverage Anda tidak ditentukan oleh seberapa keras Anda berteriak, melainkan oleh kekuatan BATNA Anda (Best Alternative to a Negotiated Agreement). Jika Anda tidak memiliki alternatif keluar yang layak jika perundingan gagal, Anda berada dalam posisi tersandera. Negosiator ulung memetakan ZOPA (Zone of Possible Agreement)—rentang kompromi di mana titik temu antara batas bawah pihak kita dan batas atas pihak lawan masih memungkinkan transaksi terjadi secara rasional.`
      },
      {
        title: "Diplomasi Jalur Belakang (Track II) dan Membaca Sinyal Budaya Non-Verbal",
        content: `Kesepakatan besar jarang sekali lahir di ruang sidang pleno yang disorot kamera media; perundingan sesungguhnya terjadi di koridor informal, ruang santap malam pribadi, atau jalur diplomasi 'Track II'. Negosiator berpengalaman membaca protokol budaya lintas bangsa: di mana jeda keheningan orang Jepang bukan berarti penolakan melainkan penghormatan kontemplatif, sementara diplomasi Barat menuntut kejelasan verbal eksplisit. Membedakan antara tuntutan posisi keras (positions) dan kepentingan mendasar (underlying interests) adalah kunci memecah kebuntuan.`
      },
      {
        title: "Taktik Mengatasi Deadlock: Logrolling dan Konstruksi Bahasa Kompromi",
        content: `Ketika dua belah pihak terjebak dalam tuntutan harga mati pada satu isu tunggal, negosiator ulung memperluas meja perundingan melalui teknik 'logrolling'—menukar konsesi pada isu berprioritas rendah bagi kita namun bernilai tinggi bagi lawan, ditukar dengan kemenangan kita pada isu paling kritis. Di samping itu, perancangan teks kompromi dengan 'constructive ambiguity' memungkinkan kedua belah pihak mengklaim kemenangan politis di hadapan konstituen domestik masing-masing.`
      },
      {
        title: "Pelajaran Negosiasi Kontrak Strategis bagi Pendiri Startup Hardware ITB",
        content: `Bagi praktisi teknologi dan mahasiswa rekayasa, diplomasi mengajarkan bahwa negosiasi pendanaan investor atau kontrak pasokan OEM bukanlah perang zero-sum yang saling mematikan. Mengembangkan hubungan kemitraan jangka panjang menuntut kemampuan membangun nilai bersama (integrative bargaining). Memiliki beberapa calon investor alternatif sebelum duduk di meja perundingan (BATNA kuat) adalah satu-satunya cara mencegah valuasi perusahaan Anda dihargai murah.`
      }
    ];
    takeaways = [
      "Perkuat BATNA Sebelum Berunding: Jangan pernah duduk di meja negosiasi penting tanpa memiliki opsi cadangan independen jika kesepakatan batal.",
      "Pisahkan Posisi Permukaan dari Kepentingan Nyata: Cari tahu mengapa lawan menuntut klausul tertentu daripada sekadar menolak permintaannya secara frontal.",
      "Gunakan Teknik Logrolling Multilateral: Tukar konsesi pada hal yang murah bagi Anda namun sangat bernilai bagi mitra untuk mendapatkan poin paling strategis.",
      "Jaga Hubungan Personal Melebihi Isu Transaksi: Jangan permalukan lawan runding Anda di depan publik; berikan mereka jalan keluar terhormat agar implementasi berjalan lancar."
    ];
    reflectiveQuestion = `Apa alternatif terbaik Anda (BATNA) saat ini jika mitra pabrikasi atau calon investor terbesar Anda memutuskan membatalkan kerja sama secara sepihak?`;
  } else if (professionId === 17) {
    // CHEF PROFESIONAL (Topics 161-170)
    headline = `Presisi Dapur Profesional dan Manajemen Restoran: Menaklukkan ${topicTitle}`;
    lead = `Pukul 18.30 tepat saat tiket pesanan makan malam mulai mencetak tanpa henti di stasiun pass dapur berbintang. Suhu kompor gas mencapai 280°C, suara benturan wajan tembaga berpadu dengan teriakan komando 'Oui, Chef!'. Sebagai Executive Chef, Anda memimpin brigade 18 juru masak di bawah tekanan ritme servis ekstrem. Terkait ${topicTitle.toLowerCase()}, kuliner komersial berkelas dunia bukan sekadar bakat seni rasa, melainkan manajemen rantai operasi manufaktur cepat saji mikro berpresisi tinggi dengan toleransi kesalahan nol detik.`;
    sections = [
      {
        title: "Filosofi Mise en Place: Arsitektur Persiapan yang Menentukan Keberhasilan Servis",
        content: `Dalam membedah ${topicTitle}, doktrin suci dapur profesional adalah 'Mise en place'—segalanya berada di tempatnya dan dalam kesiapan sempurna sebelum api kompor dinyalakan. Setiap gram bawang cincang berukuran brunoise 2 mm, kaldu demi-glace tereduksi sempurna, dan pisau tertata presisi di papan potong. Kegagalan servis restoran saat jam sibuk (rush hour) 99% bukan disebabkan oleh kelambatan memasak, melainkan oleh persiapan bahan awal yang ceroboh dan tidak terstandarisasi.`
      },
      {
        title: "Sistem Brigade Escoffier dan Komando Alur Kerja di Bawah Tekanan Ekstrem",
        content: `Dapur komersial mengadopsi hierarki militer Auguste Escoffier: Chef de Partie memegang stasiun khusus (saucier, poissonier, entremetier), Sous Chef memverifikasi konsistensi eksekusi, dan Executive Chef bertindak sebagai konduktor orkestra di stasiun pass. Setiap hidangan yang keluar ke meja tamu wajib melewati pemeriksaan akhir suhu penyajian, kebersihan tepi piring, dan profil rasa. Komunikasi di dapur menggunakan bahasa sandi ringkas dan terkonfirmasi guna mencegah kesalahan order di tengah deru exhaust hood.`
      },
      {
        title: "Food Costing Forensik dan Standar Keamanan Pangan HACCP",
        content: `Banyak chef berbakat bangkrut saat membuka restoran sendiri karena gagal menguasai 'food costing'. Setiap gram minyak truffle, persentase susut daging saat trimming (yield percentage), dan biaya tenaga kerja per porsi dihitung hingga satuan rupiah terkecil untuk mengunci margin ideal 28-32%. Di sisi operasional, kepatuhan terhadap sistem HACCP (Hazard Analysis Critical Control Point) dan kontrol suhu zona bahaya (danger zone 5°C - 60°C) adalah benteng pertahanan mutlak pencegah keracunan makanan massal.`
      },
      {
        title: "Pelajaran Manajemen Operasi Manufaktur Cepat bagi Rekayasawan",
        content: `Bagi mahasiswa teknik fisika dan pengembang perangkat keras, sebuah dapur restoran fine dining adalah analogi sempurna dari lini perakitan pabrik lean manufacturing (Kanban & Just-in-Time). Mengamati alur ergonomi stasiun kerja chef, minimalisasi gerakan mubazir (motion waste), dan standarisasi resep gramasi mengajarkan disiplin efisiensi proses yang dapat diterapkan pada lini perakitan elektronik mana pun.`
      }
    ];
    takeaways = [
      "Disiplin Mise en Place dalam Proyek: Siapkan seluruh komponen, alat ukur, dan lingkungan kerja dalam kondisi siap pakai sebelum memulai eksekusi proyek rekayasa.",
      "Kendalikan Food Costing dan Yield: Hitung secara presisi persentase susut bahan dan scrap rate material produksi agar margin bisnis Anda tidak bocor halus.",
      "Standarisasi Resep demi Skalabilitas: Ciptakan prosedur operasi standar (SOP) yang begitu rinci sehingga kualitas produk tetap konsisten siapa pun yang mengerjakannya.",
      "Manajemen Stasiun Ergonomis: Rancang tata letak meja kerja dan perkakas Anda untuk meminimalkan waktu tempuh dan gerakan fisik yang tidak perlu."
    ];
    reflectiveQuestion = `Seberapa matang 'mise en place' lingkungan kerja dan perkakas tim Anda hari ini sebelum Anda menekan tombol eksekusi peluncuran produk atau pengujian prototipe?`;
  } else if (professionId === 18) {
    // PILOT (Topics 171-180)
    headline = `Keselamatan Penerbangan Komersial: Presisi dan Disiplin dalam ${topicTitle}`;
    lead = `Pukul 04.30 subuh di kokpit pesawat jet komersial berbadan lebar Boeing 777 di landasan bandara internasional. Kabin masih gelap kecuali pendar hijau dan kuning dari layar Flight Management System (FMS) dan primary flight display (PFD). Sebagai kapten pilot, Anda memegang tanggung jawab atas 320 nyawa penumpang di ketinggian 38.000 kaki. Terkait ${topicTitle.toLowerCase()}, penerbangan modern adalah industri paling selamat di muka bumi bukan karena tidak ada bahaya, melainkan karena setiap tetes darah dari kecelakaan masa lalu telah dikonversi menjadi prosedur checklist kedap gagal.`;
    sections = [
      {
        title: "Disiplin Pre-Flight Checklist dan Briefing Cuaca Instrument Flight Rules (IFR)",
        content: `Dalam membedah ${topicTitle}, penerbangan dimulai berjam-jam sebelum roda pesawat lepas landas. Kapten dan kopilot meneliti dokumen NOTAM (Notice to Airmen), peta cuaca turbulensi CAT (Clear Air Turbulence), perhitungan bobot dan keseimbangan (weight and balance), serta status Minimum Equipment List (MEL). Melakukan pre-flight checklist eksternal dengan senter untuk memeriksa bilah turbin mesin jet dan tabung pitot adalah ritual keselamatan yang tidak boleh dilewati bahkan di bawah keterlambatan jadwal terbang terburuk sekalipun.`
      },
      {
        title: "Cockpit Resource Management (CRM): Menghancurkan Otoritarianisme Kokpit",
        content: `Penyelidikan black box era 1970-an mengungkap bahwa sebagian besar kecelakaan fatal terjadi bukan karena kerusakan mesin, melainkan karena kopilot segan menegur kapten senior yang melakukan kesalahan navigasi. Konsep Cockpit Resource Management (CRM) merevolusi kultur penerbangan: komunikasi kokpit wajib non-hierarkis dalam hal keselamatan. Kopilot berwenang penuh mengambil alih kendali jika kapten tidak merespons peringatan ketinggian. Protokol closed-loop readback dengan pengatur lalu lintas udara (ATC) menjamin tidak ada instruksi frekuensi atau ketinggian yang salah tafsir.`
      },
      {
        title: "Mitigasi Keadaan Darurat: Menghadapi Kejutan (Startle Effect) dan Otomasi",
        content: `Ketika peringatan kegagalan mesin tunggal (engine failure) berbunyi kencang di tengah cuaca buruk, reaksi manusiawi pertama adalah kepanikan (startle effect). Prosedur pilot mengajarkan: Aviate, Navigate, Communicate. Pertama, pertahankan sikap terbang pesawat secara manual; kedua, arahkan pesawat menjauhi rintangan pegunungan; ketiga, baru laporkan keadaan darurat Mayday ke ATC. Menghindari ketergantungan berlebihan pada autopilot (automation complacency) dan melatih 'stick and rudder skills' secara berkala di simulator penerbangan adalah benteng pertahanan terakhir pilot.`
      },
      {
        title: "Desain Sistem Kritis Bertoleransi Kesalahan bagi Rekayasawan Hardware ITB",
        content: `Bagi mahasiswa teknik fisika dan perancang instrumen instrumentasi cerdas, industri kedirgantaraan adalah puncak dari rekayasa keandalan sistem (fault-tolerant systems). Pesawat komersial memiliki sistem hidrolik tripel redundan, catu daya baterai darurat RAM Air Turbine (RAT), dan arsitektur voting logika sensor fly-by-wire. Mempelajari filosofi keselamatan penerbangan melatih rekayasawan mendesain perangkat keras yang tidak pernah gagal secara katastrofik (fail-safe).`
      }
    ];
    takeaways = [
      "Terapkan Prinsip Aviate, Navigate, Communicate: Saat krisis operasional melanda bisnis Anda, kendalikan sistem utama terlebih dahulu sebelum sibuk membuat siaran pers.",
      "Budaya Cockpit Resource Management (CRM): Berdayakan staf paling junior di tim Anda untuk berani menghentikan lini produksi jika mereka menemukan cacat mutu kritis.",
      "Checklist Baku Mengalahkan Memori Otak: Jangan mengandalkan ingatan pribadi untuk prosedur operasional krusial; gunakan checklist tertulis yang diverifikasi dua orang.",
      "Arsitektur Redundansi Fail-Safe: Rancang sistem perangkat keras Anda agar saat subsistem utama mati, sistem cadangan otomatis mengambil alih tanpa jeda."
    ];
    reflectiveQuestion = `Apakah budaya tim Anda mengizinkan anggota paling junior untuk secara terbuka menantang keputusan teknis Anda jika mereka melihat potensi bahaya yang luput dari pandangan Anda?`;
  } else {
    // CONTENT CREATOR (Topics 181-190)
    headline = `Industri Kreatif dan Ekonomi Perhatian: Membedah Dinamika ${topicTitle}`;
    lead = `Pukul delapan pagi di studio produksi konten dengan tiga monitor beresolusi 4K menampilkan timeline video rendering, analitik retensi detik-per-detik, dan draf storyboard kampanye merek komersial. Di era di mana perhatian manusia adalah komoditas paling langka dan mahal di dunia, seorang konten kreator profesional bukan sekadar hobi memegang kamera. Terkait ${topicTitle.toLowerCase()}, industri kreatif modern adalah sintesis antara psikologi kognitif visual, pemahaman algoritma rekomendasi platform, dan rekayasa narasi yang memikat audiens dalam 3 detik pertama.`;
    sections = [
      {
        title: "Anatomi Retensi Visual: Struktur Hook Tiga Detik dan Storytelling",
        content: `Dalam membedah ${topicTitle}, pertarungan merebut atensi penonton ditentukan pada tiga detik pembuka (the golden hook). Konten kreator ulung menolak kalimat pembuka klise; mereka langsung menyajikan pertanyaan provokatif, visual paradoks, atau momen klimaks narasi di frame pertama. Menggunakan kurva retensi pemirsa, video dipecah menjadi modul-modul dinamis dengan 'open loops' naratif yang menjaga rasa penasaran penonton agar tidak menggeser layar (swipe away) sebelum video tuntas.`
      },
      {
        title: "Membedah Algoritma Platform: Optimasi Tanpa Menjadi Budak Metrik",
        content: `Algoritma platform distribusi video tidak memiliki kesadaran moral; tujuannya hanya satu: memaksimalkan Session Time dan Click-Through Rate (CTR). Memahami mekanika sistem rekomendasi—mulai dari rasio watch time, velocity interaksi komentar di 10 menit pertama, hingga pengujian A/B thumbnail judul—adalah keahlian teknis yang wajib dikuasai. Namun, kreator visioner tidak mengorbankan integritas nilai demi 'clickbait' murahan yang mengikis kepercayaan jangka panjang penonton.`
      },
      {
        title: "Monetisasi Berkelanjutan dan Perang Melawan Burnout Kreatif",
        content: `Ketergantungan semata pada pendapatan iklan adsense platform membuat kreator rentan terhadap pemotongan tarif sepihak. Kreator profesional membangun model bisnis terdistribusi: langganan komunitas berbayar, lisensi produk digital, dan lini merchandise fisik berkarakter. Di samping itu, ritme produksi konten yang tanpa henti kerap memicu 'creative burnout' parah. Membangun alur kerja terstruktur dengan 'batch production' mingguan memisahkan antara fase kreasi ide dan fase eksekusi teknis.`
      },
      {
        title: "Pelajaran Komunikasi Publik bagi Insinyur dan Pendiri Startup Teknologi",
        content: `Bagi mahasiswa teknik fisika dan pembuat perangkat keras elektronika, keahlian konten kreator adalah senjata disrupsi pemasaran paling mematikan. Produk teknologi secanggih apa pun tidak akan dikenal dunia jika penemunya tidak mampu menceritakan proses risetnya secara memikat melalui video pendek dokumenter (build in public). Menjelaskan sains kompleks dengan analogi visual sederhana adalah jembatan yang menarik jutaan pendukung dan investor global.`
      }
    ];
    takeaways = [
      "Kuasai Hook Tiga Detik Pertama: Rebut perhatian audiens di kalimat pertama presentasi atau demo prototipe Anda sebelum atensi mereka terdistraksi gawai.",
      "Dokumentasikan Proses Pembuatan (Build in Public): Bagikan kegagalan dan keberhasilan riset teknis Anda secara transparan untuk membangun komunitas pendukung setia.",
      "Diversifikasi Aliran Pendapatan: Jangan menggantungkan kelangsungan bisnis Anda pada satu algoritma platform distribusi pihak ketiga yang dapat berubah sewaktu-waktu.",
      "Batching Alur Kerja Kreatif: Pisahkan hari untuk merancang konsep strategis dari hari untuk eksekusi produksi teknis agar fokus kognitif Anda tidak terpecah."
    ];
    reflectiveQuestion = `Seberapa menarik dan sederhanakah cara Anda menjelaskan cara kerja teknologi rumit Anda kepada orang awam dalam waktu kurang dari 60 detik tanpa kehilangan esensi ilmiahnya?`;
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
