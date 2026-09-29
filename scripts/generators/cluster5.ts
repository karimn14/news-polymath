import { TopicInfo } from "../../src/types.ts";
import { ArticleData, calculateReadingTime, buildRawMarkdown } from "../articleBuilderBase.ts";

export function generateCluster5Article(topic: TopicInfo): ArticleData {
  const { id, professionId, professionName, professionCategory, dayInProfession, topicTitle } = topic;
  const label = `${professionName} · Hari ${dayInProfession} dari 10`;

  let headline = "";
  let lead = "";
  let sections: Array<{ title: string; content: string }> = [];
  let takeaways: string[] = [];
  let reflectiveQuestion = "";

  if (professionId === 20) {
    // POLITIKUS (Topics 191-200)
    headline = `Kebijakan Publik dan Realitas Kekuasaan: Menavigasi ${topicTitle}`;
    lead = `Pukul delapan malam di ruang rapat komisi parlemen yang dipenuhi cangkir kopi dingin dan tumpukan draf undang-undang alokasi anggaran infrastruktur. Sebagai politisi pembuat kebijakan, Anda duduk di persimpangan antara janji kampanye idealis, tekanan fraksi partai politik, lobi asosiasi pengusaha industri, dan tuntutan keras jutaan warga pemilih. Terkait ${topicTitle.toLowerCase()}, politik bukan sekadar arena adu pencitraan retorika di panggung media sosial, melainkan seni mengelola kompromi, mengalokasikan sumber daya negara yang terbatas, dan membangun koalisi stabil di tengah benturan kepentingan yang tajam.`;
    sections = [
      {
        title: "Anatomi Kebijakan Publik: Dari Idealisme Menuju Realitas Implementasi Anggaran",
        content: `Dalam membedah ${topicTitle}, kesalahan mendasar analis awam adalah mengira bahwa kebijakan publik dirumuskan di ruang steril akademis. Sebuah regulasi adalah hasil tawar-menawar politik antara kementerian teknis, kementerian keuangan, dan fraksi-fraksi legislatif. Setiap pasal mencerminkan distribusi insentif ekonomi: siapa yang diuntungkan, siapa yang menanggung biaya kepatuhan, dan lembaga mana yang berwenang melakukan pengawasan. Politisi matang selalu menguji apakah birokrasi lapangan memiliki kapasitas administratif untuk mengeksekusi undang-undang tersebut tanpa memicu korupsi baru.`
      },
      {
        title: "Retorika Politik dan Seni Membangun Koalisi Multi-Pihak",
        content: `Kekuasaan politik di negara demokrasi tidak bersifat monolitik; tidak ada satu pihak pun yang mampu meloloskan anggaran tanpa dukungan koalisi. Mengelola koalisi menuntut pemahaman mendalam atas 'political currency' masing-masing ketua partai: apakah mereka menginginkan kursi jabatan pimpinan komisi, alokasi proyek daerah pemilihan, atau proteksi elektoral menjelang pemilu. Retorika politik yang berwibawa bukan sekadar berorasi membakar emosi, melainkan kemampuan merangkai narasi yang menyatukan faksi-faksi yang saling berseberangan di bawah payung kepentingan nasional bersama.`
      },
      {
        title: "Manajemen Persepsi Publik, Media Framing, dan Dilema Etika Pragmatisme",
        content: `Di era disinformasi digital yang serba cepat, kebijakan yang secara substansi sangat baik dapat hancur dalam 24 jam jika dikemas dalam 'framing' negatif oleh oposisi di media sosial. Politisi profesional menyiapkan tim komunikasi krisis yang merespons serangan persepsi secara terukur. Di sisi moral, benturan antara etika idealis (ethics of conviction) dan etika tanggung jawab pragmatis (ethics of responsibility Max Weber) selalu menjadi ujian batin terdalam: terkadang seorang pemimpin harus menyetujui kompromi pahit demi mencegah kebuntuan politik nasional yang jauh lebih merusak.`
      },
      {
        title: "Pelajaran Manajemen Pemangku Kepentingan bagi Inovator Rekayasa dan Bisnis",
        content: `Bagi mahasiswa teknik fisika dan inovator perangkat keras ITB, memahami cara berpikir politikus adalah syarat mutlak keberhasilan komersialisasi teknologi strategis. Proyek teknologi berbiaya raksasa—seperti kendaraan listrik, energi terbarukan, atau jaringan semikonduktor nasional—tidak akan pernah terwujud tanpa dukungan insentif regulasi pemerintah dan lobi legislatif. Mempelajari dinamika kebijakan publik melatih rekayasawan membaca peta regulasi dan memposisikan inovasinya sejalan dengan agenda prioritas pembangunan negara.`
      }
    ];
    takeaways = [
      "Pahami Struktur Insentif Pemangku Kepentingan: Sebelum meluncurkan inisiatif baru dalam organisasi, petakan siapa yang diuntungkan dan siapa yang terancam oleh perubahan tersebut.",
      "Seni Kompromi Pragmatis: Belajarlah menerima konsesi 80% dari target Anda hari ini daripada bersikeras menuntut 100% namun berujung pada kebuntuan total proyek.",
      "Kendalikan Framing Narasi di Awal: Jangan biarkan pihak luar mendefinisikan narasi produk Anda; komunikasikan nilai dan transparansi dampak sosialnya secara proaktif.",
      "Harmonisasi Inovasi dengan Kebijakan Publik: Sejajarkan visi teknologi Anda dengan arah kebijakan nasional untuk mendapatkan dukungan pendanaan dan regulasi strategis."
    ];
    reflectiveQuestion = `Siapa pemangku kepentingan kunci dalam ekosistem bisnis atau riset Anda yang saat ini merasa terancam oleh inovasi Anda, dan bagaimana strategi kompromi Anda untuk merangkul mereka?`;
  } else if (professionId === 21) {
    // ANTROPOLOG (Topics 201-210)
    headline = `Etnografi dan Kedalaman Budaya: Menyingkap Makna di Balik ${topicTitle}`;
    lead = `Pukul enam pagi di sebuah perkampungan adat pesisir timur Indonesia saat asap tungku dapur mulai mengepul di antara rumah-rumah panggung kayu. Sebagai antropolog lapangan, Anda telah tinggal bersama komunitas nelayan tradisional ini selama enam bulan terakhir. Anda tidak datang dengan kuesioner formal atau kacamata superioritas kota, melainkan dengan kerendahan hati untuk melakukan observasi partisipan yang mendalam. Terkait ${topicTitle.toLowerCase()}, antropologi adalah cermin kemanusiaan yang menantang asumsi universalitas kita dan membongkar kode-kode budaya tak terucap yang mengendalikan peradaban.`;
    sections = [
      {
        title: "Metodologi Etnografi: Observasi Partisipan dan Penghancuran Etnosentrisme",
        content: `Dalam membedah ${topicTitle}, fondasi utama riset antropologi adalah 'fieldwork immersion'—tinggal, makan, bekerja, dan bercakap-cakap dalam bahasa lokal komunitas yang diteliti selama kurun waktu panjang. Antropolog profesional memerangi bias 'etnosentrisme'—kecenderungan menilai praktik budaya lain menggunakan standar nilai budaya kita sendiri. Mengadopsi perspektif emik (sudut pandang pelaku asli dalam masyarakat) memungkinkan peneliti melihat bagaimana perilaku yang tampak irasional bagi orang luar sebenarnya menyimpan logika adaptasi ekologis dan sosial yang sangat masuk akal.`
      },
      {
        title: "Kekerabatan, Struktur Sosial, dan Pembacaan Simbolik Ritual Masyarakat",
        content: `Masyarakat tradisional dan modern sama-sama terikat oleh jaring laba-laba makna simbolik. Melalui antropologi interpretatif Clifford Geertz, upacara ritual, pertukaran mas kawin, atau pesta panen bukan sekadar seremoni folklor, melainkan mekanisme redistribusi kekayaan, penegasan kembali ikatan persaudaraan kosmis, dan resolusi konflik laten tanpa kekerasan fisik. Membaca simbol-simbol budaya menyingkap bagaimana status, kehormatan, dan hierarki kekuasaan didistribusikan dalam kelompok.`
      },
      {
        title: "Antropologi Terapan: Digunakan dalam Desain Produk, Korporasi, dan Kebijakan Publik",
        content: `Di era modern, korporasi teknologi global seperti Intel, Microsoft, dan otomotif dunia mempekerjakan antropolog dalam tim perancang produk. Antropologi korporat membedah interaksi nyata manusia dengan gawai di ruang domestik keluarga, membongkar disparitas tajam antara apa yang dikatakan pengguna dalam survei pasar (what people say) dan apa yang sesungguhnya mereka lakukan di kehidupan nyata (what people do). Memahami 'unspoken needs' ini adalah rahasia penciptaan produk yang dicintai pengguna.`
      },
      {
        title: "Pelajaran Empati Budaya bagi Rekayasawan Hardware dan Pendiri Startup ITB",
        content: `Bagi mahasiswa teknik fisika dan wirausahawan rekayasa, pendekatan etnografi antropologi adalah obat penawar paling mujarab bagi arogansi teknologis (technological hubris). Membuat alat teknologi tepat guna untuk pedesaan—seperti pompa air tenaga surya atau sensor pertanian IoT—akan gagal total jika alat tersebut melanggar sistem nilai lokal atau mematikan peran sosial penjaga sumber mata air adat. Empati budaya adalah prasyarat keberlanjutan rekayasa sosial-teknis.`
      }
    ];
    takeaways = [
      "Observasi Perilaku Nyata Melebihi Survei Tertulis: Amati bagaimana pengguna berinteraksi dengan produk di habitat alami mereka, jangan hanya percaya pada jawaban kuesioner formal.",
      "Tanggalkan Kacamata Etnosentrisme: Jangan pernah mengasumsikan bahwa logika dan kenyamanan Anda sebagai insinyur kota otomatis berlaku bagi masyarakat pengguna di pelosok.",
      "Pahami Makna Simbolik dan Nilai Sosial: Rancang produk teknologi yang menghormati tradisi dan struktur sosial setempat agar tidak memicu penolakan sosial massal.",
      "Bangun Rapport Melalui Kehadiran Otentik: Kepercayaan komunitas tidak dapat dibeli dengan uang; kepercayaan lahir dari kesediaan Anda hadir dan mendengarkan keluh kesah mereka."
    ];
    reflectiveQuestion = `Asumsi budaya kota atau kacamata akademis apa yang tanpa Anda sadari Anda paksakan ke dalam desain produk teknologi yang Anda rancang untuk masyarakat awam?`;
  } else if (professionId === 22) {
    // SOSIOLOG (Topics 211-220)
    headline = `Struktur Sosial dan Dinamika Kolektif: Membedah Kekuatan ${topicTitle}`;
    lead = `Di hadapan layar komputer stasiun riset sosial yang menampilkan data sensus mikro nasional, peta stratifikasi ekonomi rumah tangga, dan pemodelan grafik interaksi jaringan sosial digital puluhan juta pengguna. Sebagai sosiolog, Anda dilatih melihat pola makro tak kasat mata yang membentuk perilaku manusia. Ketika orang awam memandang kemiskinan atau kesuksesan sebagai pilihan pribadi murni, sosiolog membedah struktur sosial, distribusi modal sosial, dan reproduksi ketimpangan kelembagaan. Terkait ${topicTitle.toLowerCase()}, sosiologi adalah ilmu yang membongkar arsitektur masyarakat.`;
    sections = [
      {
        title: "Tiga Lensa Teori Utama: Fungsionalisme Struktural, Teori Konflik, dan Interaksionisme",
        content: `Dalam membedah ${topicTitle}, sosiolog menggunakan tiga kacamata teoritis klasik. Fungsionalisme Emile Durkheim memandang institusi masyarakat—seperti keluarga, pendidikan, dan hukum—bekerja selaras menjaga stabilitas integrasi sosial layaknya organ tubuh biologis. Sebaliknya, Teori Konflik Karl Marx dan Max Weber melihat tatanan sosial sebagai gelanggang perebutan sumber daya langka antar kelas sosial yang melahirkan dominasi struktural. Sementara Interaksionisme Simbolik George Herbert Mead meneliti bagaimana makna sosial dibangun menit demi menit melalui interaksi mikro sehari-hari.`
      },
      {
        title: "Stratifikasi Sosial, Mobilitas Vertikal, dan Reproduksi Modal Budaya Bourdieu",
        content: `Mengapa mobilitas sosial vertikal di negara berkembang begitu sulit ditembus oleh kelas bawah? Konsep Pierre Bourdieu mengenai 'tiga bentuk modal'—modal ekonomi (uang), modal sosial (jejaring koneksi), dan modal budaya (gaya bicara, etiket, selera, dan ijazah bergengsi)—menjelaskan bagaimana privilese kelas elite direproduksi secara halus melalui sistem pendidikan tanpa disadari oleh masyarakat luas. Meneliti disparitas akses ini krusial dalam merancang kebijakan publik yang berkeadilan sosial.`
      },
      {
        title: "Sosiologi Digital dan Dinamika Perilaku Kerumunan di Era Algoritma Jaringan",
        content: `Kemunculan media sosial telah mengubah sifat interaksi sosial masyarakat modern secara radikal. Fenomena ruang gema (echo chamber), polarisasi politik berbasis identitas, dan histeria massa digital (digital mobbing) terjadi akibat algoritma platform yang mengoptimalkan emosi kemarahan moral demi mendongkrak durasi perhatian pengguna. Sosiolog modern membedah bagaimana struktur jaringan digital mempercepat difusi informasi bohong dan melemahkan kohesi sosial peradaban kota.`
      },
      {
        title: "Pemahaman Ekosistem Sosial bagi Rekayasawan Hardware dan Inovator ITB",
        content: `Bagi mahasiswa teknik fisika dan wirausahawan perangkat keras, produk teknologi tidak pernah hadir dalam ruang hampa sosial; ia selalu berinteraksi dengan struktur kelas, serikat pekerja, dan regulasi ketenagakerjaan. Inovasi otomasi pabrik cerdas yang mengabaikan nasib ratusan buruh yang ter-disrupsi akan memicu resistensi sosial tajam dan demonstrasi buruh. Memahami sosiologi mengajarkan inovator merancang transisi teknologi yang inklusif dan bertanggung jawab secara sosial.`
      }
    ];
    takeaways = [
      "Petakan Struktur Modal Sosial Ekosistem: Kenali jejaring kekuasaan tak terlihat dan dinamika kelas yang memengaruhi siapa yang mengadopsi teknologi Anda.",
      "Waspadai Dampak Ketimpangan Struktural: Jangan ciptakan inovasi teknologi yang memperlebar jurang digital dan meminggirkan kelompok rentan tanpa solusi transisi.",
      "Pahami Mekanika Perilaku Kolektif Massa: Sadari bagaimana dinamika kelompok dan algoritma jaringan dapat memicu histeria atau antusiasme viral dalam sekejap.",
      "Uji Resonansi Sosial Teknologi: Libatkan asosiasi pekerja dan perwakilan masyarakat dalam uji coba implementasi teknologi sebelum menggelarnya secara luas."
    ];
    reflectiveQuestion = `Dampak struktural apa yang akan ditimbulkan oleh adopsi massal teknologi Anda terhadap tatanan mata pencaharian dan hubungan sosial masyarakat lokal dalam 10 tahun ke depan?`;
  } else {
    // AHLI SEJARAH (Topics 221-230)
    headline = `Historiografi dan Kritik Sumber: Menafsirkan Jejak Peristiwa dalam ${topicTitle}`;
    lead = `Pukul sembilan pagi di ruang arsip nasional yang sunyi dan berpendingin udara khusus. Di hadapan Anda terbentang dokumen naskah kuno bertinta kecokelatan bertarikh 1825 yang ditulis dalam aksara Jawa pegon dan laporan intelijen kolonial Belanda dengan cap segel lilin merah. Bau kertas tua yang khas menyelimuti meja kerja Anda. Sebagai ahli sejarah, Anda menyadari bahwa masa lalu bukanlah fosil mati yang statis, melainkan arena rekonstruksi kritis di mana setiap generasi menulis ulang sejarahnya sendiri. Terkait ${topicTitle.toLowerCase()}, historiografi adalah kompas penuntun peradaban yang mengajarkan kita mengapa dunia hari ini tercipta seperti adanya.`;
    sections = [
      {
        title: "Metode Sejarah Ilmiah: Heuristik, Kritik Eksternal, dan Kritik Internal Sumber",
        content: `Dalam membedah ${topicTitle}, sejarawan profesional bekerja melalui empat tahap metodologis yang ketat: heuristik (pelacakan sumber arsip primer), kritik sumber (verifikasi keaslian), interpretasi (sintesis fakta), dan historiografi (penulisan narasi sejarah). Kritik eksternal menguji material fisik dokumen: jenis kertas, konsistensi tinta era tersebut, dan segel resmi guna mendeteksi pemalsuan dokumen sejarah. Sementara kritik internal membedah integritas isi: apakah penulis saksi mata peristiwa tersebut memiliki motivasi politik tersembunyi, bias prasangka rasial, atau kepentingan memutarbalikkan fakta.`
      },
      {
        title: "Historiografi Komparatif: Mengapa Satu Peristiwa Ditulis Berbeda di Tiap Zaman",
        content: `Sejarah bukanlah daftar kronologis tanggal mati; sejarah adalah dialog tanpa henti antara masa kini dan masa lalu (E.H. Carr). Peristiwa yang sama—seperti Perang Diponegoro atau Revolusi Industri—ditafsirkan secara bertolak belakang oleh sejarawan era kolonial (yang memandangnya sebagai pemberontakan fanatik keagamaan), sejarawan era Orde Baru (sebagai perang pembebasan nasional sentralistik), dan sejarawan kontemporer (sebagai krisis ekologis-fiskal sistem tanam paksa). Memahami historiografi membebaskan pikiran dari dogma tunggal propaganda penguasa.`
      },
      {
        title: "Analisis Multi-Kausalitas dan Penulisan Sejarah Publik Tanpa Mitos",
        content: `Kecenderungan manusia awam adalah mencari kambing hitam tunggal (single scapegoat) atas peristiwa keruntuhan imperium atau revolusi besar. Sejarawan ulung menganalisis multi-kausalitas: interaksi antara pergeseran iklim jangka panjang (longue durée Fernand Braudel), dinamika demografi populasi, inovasi teknologi militer, dan kelemahan karakter kepemimpinan individu. Menuliskan sejarah untuk konsumsi publik menuntut keseimbangan antara keakuratan bukti akademis primer dan gaya penceritaan naratif yang hidup.`
      },
      {
        title: "Pelajaran Siklus Panjang (Longue Durée) bagi Arsitek Teknologi dan Bisnis ITB",
        content: `Bagi mahasiswa teknik fisika dan inovator hardware masa depan, sejarah peradaban adalah laboratorium mahabesar tentang bagaimana masyarakat manusia mengadopsi atau menolak lompatan teknologi baru. Dari perlawanan buruh penenun Luddite di Inggris terhadap mesin uap hingga transisi telegraf ke internet, sejarah membuktikan bahwa teknologi superior secara ilmiah selalu membutuhkan waktu penyesuaian institusi sosial dan budaya selama beberapa dekade. Mempelajari sejarah memberikan daya tahan mental dan perspektif jangka panjang bagi pendiri peradaban baru.`
      }
    ];
    takeaways = [
      "Kritik Sumber Primer Independen: Jangan pernah menerima klaim sejarah industri atau mitos pendiri bisnis tanpa memverifikasi dokumen catatan internal tertulis di masanya.",
      "Pahami Perspektif Longue Durée: Pandanglah perkembangan industri teknologi dalam kurun waktu siklus puluhan tahun, bukan sekadar tren kuartalan yang cepat berlalu.",
      "Kewaspadaan Terhadap Narasi Pemenang: Sadari bahwa narasi dominan sering kali ditulis oleh pihak yang memenangkan pertempuran pasar dan menutupi kegagalan berharga pihak lain.",
      "Sejarah Sebagai Panduan Navigasi Krisis: Pola gejolak geopolitik, krisis moneter, dan disrupsi teknologi saat ini hampir selalu memiliki preseden sejarah yang dapat dipelajari jalan keluarnya."
    ];
    reflectiveQuestion = `Pelajaran sejarah dari krisis industri atau disrupsi teknologi masa lalu apakah yang saat ini sedang diabaikan oleh para inovator di bidang perangkat keras Anda?`;
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
