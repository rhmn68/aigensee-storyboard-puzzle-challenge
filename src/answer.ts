/**
 * Storyboard Puzzle Challenge - Kunci Jawaban Urutan Kronologis Adegan (Level 1 - 5)
 * 
 * 🌐 Live URL Demo: https://glenrioariesto.github.io/storyboard-puzzle-challenge/
 * 📂 Repository: https://github.com/glenrioariesto/storyboard-puzzle-challenge
 */

export interface StoryboardSceneAnswer {
  order: number;
  sceneId: number;
  title: string;
  narrativeSummary: string;
}

export interface StoryboardAnswer {
  levelId: number;
  title: string;
  totalScenes: number;
  liveUrl: string;
  description: string;
  explanation: string;
  correctSequence: StoryboardSceneAnswer[];
}

export const storyboardAnswers: StoryboardAnswer[] = [
  {
    levelId: 1,
    title: 'Level 1: Sura dan Baya',
    totalScenes: 4,
    liveUrl: 'https://glenrioariesto.github.io/storyboard-puzzle-challenge/',
    description: 'Di muara sungai, dua penguasa saling berselisih demi wilayah kekuasaan. Susun 4 adegan cerita Sura dan Baya dengan urutan yang benar!',
    explanation: 'Cerita Sura dan Baya mengikuti struktur naratif klasik: Pengenalan konflik dan perjanjian damai di muara (adegan 1), pelanggaran sumpah oleh Sura (adegan 2), pertempuran dahsyat (adegan 3), serta resolusi dan asal-usul nama Surabaya (adegan 4).',
    correctSequence: [
      {
        order: 1,
        sceneId: 0,
        title: 'Perjanjian Damai di Muara',
        narrativeSummary: 'Sura penguasa samudera dan Baya penjaga sungai sepakat membagi wilayah kekuasaan untuk mengakhiri perselisihan.'
      },
      {
        order: 2,
        sceneId: 1,
        title: 'Sura Melanggar Sumpah',
        narrativeSummary: 'Badai di laut membuat mangsa langka, sehingga Sura melanggar sumpah dan diam-diam berburu di sungai.'
      },
      {
        order: 3,
        sceneId: 2,
        title: 'Pertempuran Dahsyat',
        narrativeSummary: 'Mengetahui wilayahnya dijarah, Baya murka dan pertarungan dahsyat berdarah terjadi di muara sungai.'
      },
      {
        order: 4,
        sceneId: 3,
        title: 'Lahirnya Nama Surabaya',
        narrativeSummary: 'Sura menyerah dengan ekor terluka dan kembali ke laut. Peristiwa pertarungan ini melahirkan nama Kota Surabaya.'
      }
    ]
  },
  {
    levelId: 2,
    title: 'Level 2: Roro Jonggrang',
    totalScenes: 8,
    liveUrl: 'https://glenrioariesto.github.io/storyboard-puzzle-challenge/',
    description: 'Kisah cinta, tipu daya, dan kutukan di balik megahnya Candi Prambanan. Susun 8 adegan cerita Roro Jonggrang dengan urutan yang benar!',
    explanation: 'Cerita Roro Jonggrang mengikuti alur naratif: Penaklukan kerajaan (adegan 1), lamaran Bandung Bondowoso (adegan 2), syarat mustahil 1000 candi (adegan 3), bantuan jin (adegan 4), kepanikan Roro Jonggrang (adegan 5), tipu daya fajar palsu (adegan 6), jin kabur dan kegagalan (adegan 7), serta kutukan menjadi arca (adegan 8).',
    correctSequence: [
      {
        order: 1,
        sceneId: 0,
        title: 'Penaklukan Prambanan',
        narrativeSummary: 'Bandung Bondowoso yang sakti berhasil menaklukkan Kerajaan Prambanan.'
      },
      {
        order: 2,
        sceneId: 1,
        title: 'Lamaran Sang Penakluk',
        narrativeSummary: 'Bandung Bondowoso terpikat kecantikan Roro Jonggrang dan melamarnya, namun sang putri menolak menikah dengan pembunuh ayahnya.'
      },
      {
        order: 3,
        sceneId: 2,
        title: 'Syarat Mustahil',
        narrativeSummary: 'Roro Jonggrang mengajukan syarat mustahil: membangun 1.000 candi dalam satu malam sebelum fajar.'
      },
      {
        order: 4,
        sceneId: 3,
        title: 'Pasukan Jin Beraksi',
        narrativeSummary: 'Bandung Bondowoso memanggil pasukan ribuan jin untuk membangun candi-candi batu dengan cepat.'
      },
      {
        order: 5,
        sceneId: 4,
        title: 'Kepanikan Sang Putri',
        narrativeSummary: 'Melihat candi ke-999 hampir selesai sebelum tengah malam usai, Roro Jonggrang mulai panik.'
      },
      {
        order: 6,
        sceneId: 5,
        title: 'Tipu Daya Fajar Palsu',
        narrativeSummary: 'Roro Jonggrang memerintahkan dayang menumbuk padi dan membakar jerami di timur untuk meniru fajar palsu.'
      },
      {
        order: 7,
        sceneId: 6,
        title: 'Jin Kabur, Candi Gagal',
        narrativeSummary: 'Ayam berkokok dan pasukan jin kabur ketakutan, menyisakan candi ke-1.000 belum selesai.'
      },
      {
        order: 8,
        sceneId: 7,
        title: 'Kutukan Menjadi Arca',
        narrativeSummary: 'Murka karena dicurangi, Bandung mengutuk Roro Jonggrang menjadi arca batu tercantik untuk menggenapkan candi ke-1.000.'
      }
    ]
  },
  {
    levelId: 3,
    title: 'Level 3: Kancil dan Buaya',
    totalScenes: 12,
    liveUrl: 'https://glenrioariesto.github.io/storyboard-puzzle-challenge/',
    description: 'Kisah legendaris Kancil yang cerdik menyeberangi sungai penuh buaya dengan tipu muslihatnya. Susun 12 adegan petualangan Kancil dengan urutan yang benar!',
    explanation: 'Alur fabel legendaris ini mengikuti struktur naratif lengkap 12 adegan: Pengenalan (1-2), Awal Konflik & Rintangan (3-5), Taktik & Klimaks (6-9) ketika Kancil hampir kehilangan keseimbangan di tengah sungai, serta Resolusi & Akhir Bahagia (10-12) di hutan kelimpahan.',
    correctSequence: [
      { order: 1, sceneId: 0, title: 'Hutan yang Kering', narrativeSummary: 'Kemarau panjang melanda hutan tempat tinggal Kancil sehingga makanan menipis.' },
      { order: 2, sceneId: 1, title: 'Harapan di Seberang', narrativeSummary: 'Kancil melihat hutan subur dan berbuah lebat di seberang sungai.' },
      { order: 3, sceneId: 2, title: 'Sungai yang Deras', narrativeSummary: 'Arus sungai terlalu deras dan dalam untuk diseberangi dengan berenang.' },
      { order: 4, sceneId: 3, title: 'Kawanan Buaya Lapar', narrativeSummary: 'Kawanan buaya lapar bermoncong tajam muncul di permukaan air.' },
      { order: 5, sceneId: 4, title: 'Ketenangan Kancil', narrativeSummary: 'Kancil tetap tenang dan menyusun siasat cerdik.' },
      { order: 6, sceneId: 5, title: 'Titah Raja Hutan', narrativeSummary: 'Kancil berpura-pura membawa pesan raja hutan untuk menghitung jumlah buaya demi pesta daging.' },
      { order: 7, sceneId: 6, title: 'Jembatan Buaya', narrativeSummary: 'Buaya-buaya tergiur lalu berbaris rapi membentang memotong sungai.' },
      { order: 8, sceneId: 7, title: 'Mulai Menghitung', narrativeSummary: 'Kancil melompat ke punggung buaya pertama sambil mulai menghitung "Satu!".' },
      { order: 9, sceneId: 8, title: 'Kehilangan Keseimbangan', narrativeSummary: 'Di tengah sungai buaya bergerak dan Kancil hampir terpeleset namun berhasil menyeimbangkan diri.' },
      { order: 10, sceneId: 9, title: 'Tiba di Seberang', narrativeSummary: 'Dengan lompatan terakhir, Kancil mendarat mulus di rerumputan seberang.' },
      { order: 11, sceneId: 10, title: 'Terima Kasih Buaya', narrativeSummary: 'Kancil berbalik, tertawa berterima kasih, dan mengungkap bahwa pesta raja hanyalah tipu muslihat.' },
      { order: 12, sceneId: 11, title: 'Hutan Kelimpahan', narrativeSummary: 'Kancil menikmati buah-buahan segar di hutan impian dengan rasa syukur.' }
    ]
  },
  {
    levelId: 4,
    title: 'Level 4: Keong Emas',
    totalScenes: 12,
    liveUrl: 'https://glenrioariesto.github.io/storyboard-puzzle-challenge/',
    description: 'Kisah putri yang dikutuk menjadi keong emas dan keajaiban ketulusan hati. Susun 12 adegan cerita Keong Emas dengan urutan yang benar!',
    explanation: 'Cerita Keong Emas mengikuti struktur naratif lengkap: Pengenalan Putri Candra Kirana (adegan 1-2), kutukan penyihir (adegan 3), dibuang ke laut (adegan 4), ditemukan Mbok Dadapan (adegan 5-6), keajaiban transformasi (adegan 7-8), keheranan Mbok Dadapan (adegan 9), pengintaian (adegan 10), terungkapnya rahasia (adegan 11), dan resolusi bahagia (adegan 12).',
    correctSequence: [
      { order: 1, sceneId: 0, title: 'Putri Candra Kirana', narrativeSummary: 'Putri Candra Kirana hidup di Kerajaan Daha, cantik, anggun, dan rendah hati.' },
      { order: 2, sceneId: 1, title: 'Kutukan Galuh Ajeng', narrativeSummary: 'Saudarinya yang iri, Galuh Ajeng, bekerja sama dengan penyihir hitam mengutuk putri menjadi keong emas.' },
      { order: 3, sceneId: 2, title: 'Dibuang ke Samudera', narrativeSummary: 'Keong emas itu dilemparkan ke tengah samudera yang luas dan ganas.' },
      { order: 4, sceneId: 3, title: 'Mbok Dadapan si Nelayan', narrativeSummary: 'Mbok Dadapan, seorang nenek sebatang kara yang hidup sederhana di desa nelayan.' },
      { order: 5, sceneId: 4, title: 'Keong Emas Terjaring', narrativeSummary: 'Jaring Mbok Dadapan menjaring keong berkilau keemasan yang indah.' },
      { order: 6, sceneId: 5, title: 'Keong di Tempayan', narrativeSummary: 'Mbok Dadapan membawa keong itu pulang dan menyimpannya di tempayan tanah liat.' },
      { order: 7, sceneId: 6, title: 'Keajaiban Transformasi', narrativeSummary: 'Saat rumah kosong, keong memancarkan cahaya dan berubah kembali menjadi Putri Candra Kirana.' },
      { order: 8, sceneId: 7, title: 'Membalas Kebaikan', narrativeSummary: 'Sang putri membersihkan rumah dan memasak aneka makanan lezat untuk sang nenek.' },
      { order: 9, sceneId: 8, title: 'Kejutan untuk Mbok Dadapan', narrativeSummary: 'Mbok Dadapan terbelalak bahagia mendapati rumah rapi dan hidangan lezat tersaji.' },
      { order: 10, sceneId: 9, title: 'Rencana Mengintip', narrativeSummary: 'Penasaran, Mbok Dadapan pura-pura pergi lalu mengintip dari celah dinding.' },
      { order: 11, sceneId: 10, title: 'Kutukan Hancur', narrativeSummary: 'Melihat transformasi putri, Mbok Dadapan memeluknya dengan kasih sayang tulus hingga kutukan lenyap.' },
      { order: 12, sceneId: 11, title: 'Keluarga Sejati', narrativeSummary: 'Keduanya hidup bahagia bersama dalam kehangatan keluarga yang hakiki.' }
    ]
  },
  {
    levelId: 5,
    title: 'Level 5: Gagak dan Kendi',
    totalScenes: 16,
    liveUrl: 'https://glenrioariesto.github.io/storyboard-puzzle-challenge/',
    description: 'Ini adalah tantangan puncak! Susun 16 adegan kisah seekor gagak yang cerdik mencari air di tengah kemarau. Buktikan kemampuanmu menyusun cerita!',
    explanation: 'Cerita Gagak dan Kendi mengikuti alur naratif lengkap 16 adegan: Pengenalan situasi kemarau (1-3), penemuan kendi (4-5), masalah air tak terjangkau (6-8), keputusasaan (9), ide cemerlang (10-11), proses menjatuhkan kerikil (12-14), keberhasilan minum (15), dan resolusi kemenangan akal (16).',
    correctSequence: [
      { order: 1, sceneId: 0, title: 'Kemarau Panjang', narrativeSummary: 'Tanah gersang dan tandus akibat musim kemarau panjang.' },
      { order: 2, sceneId: 1, title: 'Gagak yang Kehausan', narrativeSummary: 'Gagak kelelahan dan sangat kehausan mencari air.' },
      { order: 3, sceneId: 2, title: 'Mencari dari Ketinggian', narrativeSummary: 'Gagak terbang tinggi mengamati daratan untuk mencari sumber air.' },
      { order: 4, sceneId: 3, title: 'Pantulan Cahaya Misterius', narrativeSummary: 'Di balik reruntuhan batu, matanya melihat pantulan kendi tanah liat.' },
      { order: 5, sceneId: 4, title: 'Mendarat di Dekat Kendi', narrativeSummary: 'Gagak mendarat mendekati kendi tersebut dengan sisa tenaganya.' },
      { order: 6, sceneId: 5, title: 'Air di Dasar Kendi', narrativeSummary: 'Ada air di dalam kendi, namun berada jauh di dasar kendi yang dalam.' },
      { order: 7, sceneId: 6, title: 'Paruh Tak Menjangkau', narrativeSummary: 'Paruh gagak tidak cukup panjang untuk mencapai permukaan air.' },
      { order: 8, sceneId: 7, title: 'Kendi Terlalu Berat', narrativeSummary: 'Gagak mencoba menggulingkan kendi namun bobotnya terlalu berat.' },
      { order: 9, sceneId: 8, title: 'Hampir Menyerah', narrativeSummary: 'Gagak sempat duduk lemas dan hampir menyerah pada keputusasaan.' },
      { order: 10, sceneId: 9, title: 'Kerikil Berserakan', narrativeSummary: 'Pandangannya tertuju pada kerikil-kerikil kecil di sekitar dasar kendi.' },
      { order: 11, sceneId: 10, title: 'Ide Cemerlang', narrativeSummary: 'Gagak mendapat ide brilian dan memungut kerikil pertama.' },
      { order: 12, sceneId: 11, title: 'Kerikil Pertama', narrativeSummary: 'Kerikil dijatuhkan ke dalam kendi, menghasilkan riak air kecil.' },
      { order: 13, sceneId: 12, title: 'Tanpa Lelah', narrativeSummary: 'Gagak mengangkut kerikil demi kerikil tanpa menyerah.' },
      { order: 14, sceneId: 13, title: 'Air Mulai Naik', narrativeSummary: 'Volume batu mendesak air naik mendekati bibir leher kendi.' },
      { order: 15, sceneId: 14, title: 'Tegukan Kemenangan', narrativeSummary: 'Air mencapai atas dan Gagak meminumnya dengan sangat puas.' },
      { order: 16, sceneId: 15, title: 'Menaklukkan Langit Kembali', narrativeSummary: 'Tubuh segar kembali dan akal cerdik membuktikan kekuatannya.' }
    ]
  }
];

export const projectMeta = {
  title: 'Storyboard Puzzle Challenge',
  url: 'https://glenrioariesto.github.io/storyboard-puzzle-challenge/',
  github: 'https://github.com/glenrioariesto/storyboard-puzzle-challenge'
};
