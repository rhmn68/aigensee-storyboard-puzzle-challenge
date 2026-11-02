import { Story } from '../types';

// === Level 1: Sura dan Baya (4 scenes) ===
import suraBaya1 from '../../assets/sura-baya/1.webp';
import suraBaya2 from '../../assets/sura-baya/2.webp';
import suraBaya3 from '../../assets/sura-baya/3.webp';
import suraBaya4 from '../../assets/sura-baya/4.webp';

// === Level 2: Roro Jonggrang (8 scenes) ===
import roroJonggrang1 from '../../assets/roro-jonggrang/1.webp';
import roroJonggrang2 from '../../assets/roro-jonggrang/2.webp';
import roroJonggrang3 from '../../assets/roro-jonggrang/3.webp';
import roroJonggrang4 from '../../assets/roro-jonggrang/4.webp';
import roroJonggrang5 from '../../assets/roro-jonggrang/5.webp';
import roroJonggrang6 from '../../assets/roro-jonggrang/6.webp';
import roroJonggrang7 from '../../assets/roro-jonggrang/7.webp';
import roroJonggrang8 from '../../assets/roro-jonggrang/8.webp';

// === Level 3: Kancil dan Buaya (12 scenes) ===
import kancil1 from '../../assets/kancil/1.webp';
import kancil2 from '../../assets/kancil/2.webp';
import kancil3 from '../../assets/kancil/3.webp';
import kancil4 from '../../assets/kancil/4.webp';
import kancil5 from '../../assets/kancil/5.webp';
import kancil6 from '../../assets/kancil/6.webp';
import kancil7 from '../../assets/kancil/7.webp';
import kancil8 from '../../assets/kancil/8.webp';
import kancil9 from '../../assets/kancil/9.webp';
import kancil10 from '../../assets/kancil/10.webp';
import kancil11 from '../../assets/kancil/11.webp';
import kancil12 from '../../assets/kancil/12.webp';

// === Level 4: Keong Emas (12 scenes) ===
import keongEmas1 from '../../assets/keong-emas/1.webp';
import keongEmas2 from '../../assets/keong-emas/2.webp';
import keongEmas3 from '../../assets/keong-emas/3.webp';
import keongEmas4 from '../../assets/keong-emas/4.webp';
import keongEmas5 from '../../assets/keong-emas/5.webp';
import keongEmas6 from '../../assets/keong-emas/6.webp';
import keongEmas7 from '../../assets/keong-emas/7.webp';
import keongEmas8 from '../../assets/keong-emas/8.webp';
import keongEmas9 from '../../assets/keong-emas/9.webp';
import keongEmas10 from '../../assets/keong-emas/10.webp';
import keongEmas11 from '../../assets/keong-emas/11.webp';
import keongEmas12 from '../../assets/keong-emas/12.webp';

// === Level 5: Gagak dan Kendi (16 scenes) ===
import gagakKendi1 from '../../assets/gagak-kendi/1.webp';
import gagakKendi2 from '../../assets/gagak-kendi/2.webp';
import gagakKendi3 from '../../assets/gagak-kendi/3.webp';
import gagakKendi4 from '../../assets/gagak-kendi/4.webp';
import gagakKendi5 from '../../assets/gagak-kendi/5.webp';
import gagakKendi6 from '../../assets/gagak-kendi/6.webp';
import gagakKendi7 from '../../assets/gagak-kendi/7.webp';
import gagakKendi8 from '../../assets/gagak-kendi/8.webp';
import gagakKendi9 from '../../assets/gagak-kendi/9.webp';
import gagakKendi10 from '../../assets/gagak-kendi/10.webp';
import gagakKendi11 from '../../assets/gagak-kendi/11.webp';
import gagakKendi12 from '../../assets/gagak-kendi/12.webp';
import gagakKendi13 from '../../assets/gagak-kendi/13.webp';
import gagakKendi14 from '../../assets/gagak-kendi/14.webp';
import gagakKendi15 from '../../assets/gagak-kendi/15.webp';
import gagakKendi16 from '../../assets/gagak-kendi/16.webp';

export const STORYBOARD_CAMPAIGN: Story[] = [
  {
    id: 1,
    title: "Level 1: Sura dan Baya",
    description: "Di muara sungai, dua penguasa saling berselisih demi wilayah kekuasaan. Susun 4 adegan cerita Sura dan Baya dengan urutan yang benar!",
    explanation: "Cerita Sura dan Baya mengikuti struktur naratif klasik: Pengenalan konflik dan perjanjian damai di muara (adegan 1), pelanggaran sumpah oleh Sura (adegan 2), pertempuran dahsyat (adegan 3), serta resolusi dan asal-usul nama Surabaya (adegan 4).",
    scenes: [
      {
        id: 0,
        title: "Perjanjian Damai di Muara",
        imageUrl: suraBaya1,
        narrative: "Di muara tempat bertemunya air asin dan air tawar, dua penguasa tak tertandingi selalu hidup dalam perselisihan. Sura, sang penguasa samudera, dan Baya, sang penjaga sungai. Bosan dengan pertumpahan darah yang tiada akhir, mereka akhirnya menarik garis gencatan senjata: laut menjadi wilayah Sura, dan sungai menjadi teritori Baya."
      },
      {
        id: 1,
        title: "Sura Melanggar Sumpah",
        imageUrl: suraBaya2,
        narrative: "Kedamaian itu goyah saat badai melanda lautan luas, membuat mangsa Sura pergi menjauh. Didorong oleh rasa lapar yang membakar naluri pertahanannya, Sura melanggar sumpah. Ia menyelinap diam-diam ke aliran sungai yang tenang, berburu di bawah bayang-bayang pepohonan, berharap kelancangannya tidak pernah terendus oleh Baya."
      },
      {
        id: 2,
        title: "Pertempuran Dahsyat",
        imageUrl: suraBaya3,
        narrative: "Namun, rahasia tidak pernah bertahan lama di wilayah Baya. Mengetahui teritorinya dijarah, kemarahan Baya meledak bagai air bah. Pertempuran paling mengerikan dalam sejarah muara pun pecah. Tanpa ampun, mereka saling mencabik, memutar balikkan air sungai menjadi merah pekat oleh darah dan amunisi kemurkaan."
      },
      {
        id: 3,
        title: "Lahirnya Nama Surabaya",
        imageUrl: suraBaya4,
        narrative: "Dengan ekor yang hampir putus akibat gigitan mematikan Baya, Sura akhirnya menyerah dan menyeret tubuhnya kembali ke kedalaman samudera yang sunyi. Baya berdiri tegak di atas karang, terluka namun menang. Sejak hari itu, batas samudera dan sungai tak pernah lagi dilanggar, meninggalkan nama 'Surabaya' sebagai saksi abadi atas pertarungan harga diri mereka."
      }
    ]
  },
  {
    id: 2,
    title: "Level 2: Roro Jonggrang",
    description: "Kisah cinta, tipu daya, dan kutukan di balik megahnya Candi Prambanan. Susun 8 adegan cerita Roro Jonggrang dengan urutan yang benar!",
    explanation: "Cerita Roro Jonggrang mengikuti alur naratif: Penaklukan kerajaan (adegan 1), lamaran Bandung Bondowoso (adegan 2), syarat mustahil 1000 candi (adegan 3), bantuan jin (adegan 4), kepanikan Roro Jonggrang (adegan 5), tipu daya fajar palsu (adegan 6), jin kabur dan kegagalan (adegan 7), serta kutukan menjadi arca (adegan 8).",
    scenes: [
      {
        id: 0,
        title: "Penaklukan Prambanan",
        imageUrl: roroJonggrang1,
        narrative: "Bandung Bondowoso, seorang kesatria sakti dengan kekuatan magis yang ditakuti, berhasil menaklukkan Kerajaan Prambanan yang megah."
      },
      {
        id: 1,
        title: "Lamaran Sang Penakluk",
        imageUrl: roroJonggrang2,
        narrative: "Terpikat oleh kecantikan putri Prambanan, Roro Jonggrang, Bandung Bondowoso berniat mempersuntingnya. \"Roro Jonggrang, kecantikanmu menawan hatiku. Menikahlah denganku, dan kau akan tetap menjadi ratu agung di istana ini.\" Namun, sang putri enggan menikah dengan pembunuh ayahnya."
      },
      {
        id: 2,
        title: "Syarat Mustahil",
        imageUrl: roroJonggrang3,
        narrative: "Roro Jonggrang mengajukan syarat mustahil demi menolak pinangan tersebut secara halus: membangun 1.000 candi dalam waktu satu malam sebelum fajar menyingsing."
      },
      {
        id: 3,
        title: "Pasukan Jin Beraksi",
        imageUrl: roroJonggrang4,
        narrative: "Begitu malam tiba, Bandung Bondowoso menggunakan kekuatan mistisnya. Ia memanggil ribuan jin dan makhluk halus dari kegelapan untuk membantunya mendirikan candi-candi batu."
      },
      {
        id: 4,
        title: "Kepanikan Sang Putri",
        imageUrl: roroJonggrang5,
        narrative: "Dari atas menara istana, Roro Jonggrang melihat proyek tersebut hampir selesai. Candi ke-999 sudah berdiri kokoh saat malam masih menyisakan beberapa jam lagi. Ia mulai panik."
      },
      {
        id: 5,
        title: "Tipu Daya Fajar Palsu",
        imageUrl: roroJonggrang6,
        narrative: "Tak mau menyerah, Roro Jonggrang mengumpulkan para dayang. Mereka diperintahkan menumbuk padi dan membakar jerami di arah timur, membuat langit memerah seolah fajar telah tiba."
      },
      {
        id: 6,
        title: "Jin Kabur, Candi Gagal",
        imageUrl: roroJonggrang7,
        narrative: "Mendengar suara lesung dan melihat langit memerah, ayam-ayam jantan mulai berkokok. Para jin ketakutan dan kabur kembali ke bumi, menyisakan candi ke-1.000 yang belum selesai. Bandung Bondowoso menyadari ia telah ditipu."
      },
      {
        id: 7,
        title: "Kutukan Menjadi Arca",
        imageUrl: roroJonggrang8,
        narrative: "\"Jika kau tidak ingin ada candi ke-seribu, maka dirimu sendirilah yang akan menggenapinya! Menjadilah arca, Roro Jonggrang!\" Dalam kemurkaannya yang luar biasa, Bandung mengutuk Roro Jonggrang. Sang putri seketika berubah menjadi batu, melengkapi candi terakhir yang belum selesai sebagai arca terindah."
      }
    ]
  },
  {
    id: 3,
    title: "Level 3: Kancil dan Buaya",
    description: "Kisah legendaris Kancil yang cerdik menyeberangi sungai penuh buaya dengan tipu muslihatnya. Susun 12 adegan petualangan Kancil dengan urutan yang benar!",
    explanation: "Alur fabel legendaris ini mengikuti struktur naratif lengkap 12 adegan: Pengenalan (1-2), Awal Konflik & Rintangan (3-5), Taktik & Klimaks (6-9) ketika Kancil hampir kehilangan keseimbangan di tengah sungai, serta Resolusi & Akhir Bahagia (10-12) di hutan kelimpahan.",
    scenes: [
      {
        id: 0,
        title: "Hutan yang Kering",
        imageUrl: kancil1,
        narrative: "Di sebuah sudut hutan rimba yang mulai mengering karena musim kemarau panjang, hiduplah seekor Kancil yang cerdik. Sumber makanan di wilayahnya semakin menipis."
      },
      {
        id: 1,
        title: "Harapan di Seberang",
        imageUrl: kancil2,
        narrative: "Dari kejauhan, mata Kancil tertuju pada seberang sungai. Di sana membentang hutan yang hijau royo-royo, dipenuhi pohon buah yang matang dan segar."
      },
      {
        id: 2,
        title: "Sungai yang Deras",
        imageUrl: kancil3,
        narrative: "Kancil mendekati tepi sungai. Namun, harapannya seketika pupus saat melihat arus air yang sangat deras dan dalam. Mustahil baginya untuk berenang menyeberang tanpa hanyut."
      },
      {
        id: 3,
        title: "Kawanan Buaya Lapar",
        imageUrl: kancil4,
        narrative: "Tiba-tiba, permukaan air terbelah. Sepasang mata besar berdarah dingin muncul ke permukaan, disusul oleh moncong-moncong tajam yang siap menerkam. Itu adalah kawanan buaya lapar."
      },
      {
        id: 4,
        title: "Ketenangan Kancil",
        imageUrl: kancil5,
        narrative: "Alih-alih lari ketakutan, otak cerdas Kancil langsung berputar cepat. Ia menarik napas dalam-dalam, lalu melangkah maju dengan senyuman tenang, seolah tidak ada bahaya yang mengancam."
      },
      {
        id: 5,
        title: "Titah Raja Hutan",
        imageUrl: kancil6,
        narrative: "\"Hai Buaya!\" seru Kancil. \"Aku membawa titah dari Raja Hutan. Beliau ingin mengadakan pesta besar dan memintaku menghitung jumlah kalian agar semua mendapat bagian daging segar!\""
      },
      {
        id: 6,
        title: "Jembatan Buaya",
        imageUrl: kancil7,
        narrative: "Tergiur oleh janji pesta daging, pemimpin buaya langsung memerintahkan kawanannya untuk berbaris rapi memotong sungai, membentuk jembatan alami hingga ke seberang."
      },
      {
        id: 7,
        title: "Mulai Menghitung",
        imageUrl: kancil8,
        narrative: "Dengan jantung yang berdebar kencang namun wajah tetap terlihat tenang, Kancil melompat ke atas punggung buaya pertama. \"Satu!\" teriaknya lantang memulai hitungan."
      },
      {
        id: 8,
        title: "Kehilangan Keseimbangan",
        imageUrl: kancil9,
        narrative: "Kancil terus melompat dari satu punggung ke punggung lainnya. \"Dua... tiga... empat!\" Di tengah jalan, seekor buaya tampak curiga dan mencoba bergerak, membuat Kancil hampir kehilangan keseimbangan."
      },
      {
        id: 9,
        title: "Tiba di Seberang",
        imageUrl: kancil10,
        narrative: "Dengan satu lompatan terakhir yang kuat, Kancil berhasil mencapai tepi sungai seberang yang subur. Ia mendarat dengan mulus di atas hamparan rumput hijau yang empuk."
      },
      {
        id: 10,
        title: "Terima Kasih Buaya",
        imageUrl: kancil11,
        narrative: "Sambil berbalik arah, Kancil membungkuk memberi hormat dan tertawa. \"Terima kasih, para buaya yang baik! Tidak ada pesta dari Raja. Aku hanya butuh bantuan kalian untuk menyeberang!\""
      },
      {
        id: 11,
        title: "Hutan Kelimpahan",
        imageUrl: kancil12,
        narrative: "Meninggalkan kemarahan para buaya di belakangnya, Kancil melangkah masuk ke dalam hutan baru yang penuh kelimpahan. Kecerdikan sekali lagi menyelamatkan dirinya dari ancaman kelaparan."
      }
    ]
  },
  {
    id: 4,
    title: "Level 4: Keong Emas",
    description: "Kisah putri yang dikutuk menjadi keong emas dan keajaiban ketulusan hati. Susun 12 adegan cerita Keong Emas dengan urutan yang benar!",
    explanation: "Cerita Keong Emas mengikuti struktur naratif lengkap: Pengenalan Putri Candra Kirana (adegan 1-2), kutukan penyihir (adegan 3), dibuang ke laut (adegan 4), ditemukan Mbok Dadapan (adegan 5-6), keajaiban transformasi (adegan 7-8), keheranan Mbok Dadapan (adegan 9), pengintaian (adegan 10), terungkapnya rahasia (adegan 11), dan resolusi bahagia (adegan 12).",
    scenes: [
      {
        id: 0,
        title: "Putri Candra Kirana",
        imageUrl: keongEmas1,
        narrative: "Di Kerajaan Daha yang makmur, hiduplah Putri Candra Kirana. Ia adalah seorang putri yang tidak hanya cantik, tetapi juga rendah hati dan dicintai oleh rakyatnya."
      },
      {
        id: 1,
        title: "Kutukan Galuh Ajeng",
        imageUrl: keongEmas2,
        narrative: "Keindahan dan kebaikan Candra Kirana memicu rasa iri yang mendalam di hati saudaranya, Galuh Ajeng. Bersama seorang penyihir hitam, mereka mengirimkan kutukan jahat yang mengubah sang putri menjadi seekor keong emas."
      },
      {
        id: 2,
        title: "Dibuang ke Samudera",
        imageUrl: keongEmas3,
        narrative: "\"Kau akan selamanya menjadi keong yang terbuang!\" kutuk sang penyihir. Dengan kejam, keong emas itu dilemparkan ke tengah samudera luas yang bergolak."
      },
      {
        id: 3,
        title: "Mbok Dadapan si Nelayan",
        imageUrl: keongEmas4,
        narrative: "Di sebuah desa nelayan yang sunyi, hiduplah Mbok Dadapan. Ia adalah seorang nenek sebatang kara yang setiap hari mengandalkan jaring tuanya untuk menyambung hidup."
      },
      {
        id: 4,
        title: "Keong Emas Terjaring",
        imageUrl: keongEmas5,
        narrative: "Hari itu, jaring Mbok Dadapan terasa berat. Saat ditarik, ia terkejut tidak menemukan ikan, melainkan seekor keong yang bersinar kuning keemasan di antara jaringnya yang basah."
      },
      {
        id: 5,
        title: "Keong di Tempayan",
        imageUrl: keongEmas6,
        narrative: "Merasa kasihan dan kagum dengan keindahannya, Mbok Dadapan membawa keong itu pulang dan meletakkannya di atas tempayan tanah liat di sudut pondok kayunya yang berdebu."
      },
      {
        id: 6,
        title: "Keajaiban Transformasi",
        imageUrl: keongEmas7,
        narrative: "Begitu Mbok Dadapan pergi, keajaiban pun terjadi. Cangkang keong itu memancarkan cahaya keemasan yang hangat, dan dari dalamnya keluarlah sosok Putri Candra Kirana."
      },
      {
        id: 7,
        title: "Membalas Kebaikan",
        imageUrl: keongEmas8,
        narrative: "Candra Kirana memutuskan untuk membalas kebaikan sang nenek. Ia membersihkan seluruh pondok dan memasak berbagai hidangan tradisional yang lezat dengan tangannya sendiri."
      },
      {
        id: 8,
        title: "Kejutan untuk Mbok Dadapan",
        imageUrl: keongEmas9,
        narrative: "Sore harinya, Mbok Dadapan pulang dengan tangan hampa dan perut lapar. Namun, ia terbelalak melihat pondoknya yang kini bersih rapi, lengkap dengan hidangan hangat yang menunggunya."
      },
      {
        id: 9,
        title: "Rencana Mengintip",
        imageUrl: keongEmas10,
        narrative: "Karena kejadian itu terus berulang, Mbok Dadapan menyusun rencana. Keesokan paginya, ia berpura-pura pergi bekerja, tetapi diam-diam berbalik arah dan mengintip lewat celah dinding kayu pondoknya."
      },
      {
        id: 10,
        title: "Kutukan Hancur",
        imageUrl: keongEmas11,
        narrative: "Mbok Dadapan terkesiap melihat keong emas berubah menjadi putri cantik. Ia segera masuk dan memeluk Candra Kirana. Kasih sayang yang tulus dari sang nenek seketika menghancurkan sisa-sisa energi kutukan penyihir."
      },
      {
        id: 11,
        title: "Keluarga Sejati",
        imageUrl: keongEmas12,
        narrative: "Meskipun kutukannya telah sirna, Candra Kirana memilih untuk tetap menemani Mbok Dadapan yang kini tidak lagi kesepian. Mereka hidup bahagia di pondok kecil itu, membuktikan bahwa kehangatan keluarga sejati lahir dari ketulusan hati."
      }
    ]
  },
  {
    id: 5,
    title: "Level 5: Gagak dan Kendi",
    description: "Ini adalah tantangan puncak! Susun 16 adegan kisah seekor gagak yang cerdik mencari air di tengah kemarau. Buktikan kemampuanmu menyusun cerita!",
    explanation: "Cerita Gagak dan Kendi mengikuti alur naratif lengkap 16 adegan: Pengenalan situasi kemarau (1-3), penemuan kendi (4-5), masalah air tak terjangkau (6-8), keputusasaan (9), ide cemerlang (10-11), proses menjatuhkan kerikil (12-14), keberhasilan minum (15), dan resolusi kemenangan akal (16).",
    scenes: [
      {
        id: 0,
        title: "Kemarau Panjang",
        imageUrl: gagakKendi1,
        narrative: "Kemarau panjang menyapu daratan, meninggalkan tanah yang gersang tanpa tanda-tanda kehidupan."
      },
      {
        id: 1,
        title: "Gagak yang Kehausan",
        imageUrl: gagakKendi2,
        narrative: "Napas sang Gagak semakin berat. Sayapnya yang hitam legam terasa kaku dan matanya mulai mengabur karena dehidrasi."
      },
      {
        id: 2,
        title: "Mencari dari Ketinggian",
        imageUrl: gagakKendi3,
        narrative: "Dari ketinggian awan, ia terus mencari tanda-tanda air yang tersisa di bumi."
      },
      {
        id: 3,
        title: "Pantulan Cahaya Misterius",
        imageUrl: gagakKendi4,
        narrative: "Di balik reruntuhan dinding batu tua, matanya menangkap sebuah pantulan cahaya misterius."
      },
      {
        id: 4,
        title: "Mendarat di Dekat Kendi",
        imageUrl: gagakKendi5,
        narrative: "Dengan sisa kekuatannya, Gagak mendarat di dekat kendi tersebut. Debu-debu kering beterbangan saat kakinya menyentuh tanah."
      },
      {
        id: 5,
        title: "Air di Dasar Kendi",
        imageUrl: gagakKendi6,
        narrative: "Gagak menjenguk ke dalam kendi. Memang ada air di sana, namun letaknya sangat jauh di dasar kendi yang bermulut sempit."
      },
      {
        id: 6,
        title: "Paruh Tak Menjangkau",
        imageUrl: gagakKendi7,
        narrative: "Ia mencoba memasukkan paruhnya, namun leher kendi itu terlalu sempit dan dalam untuk dijangkau."
      },
      {
        id: 7,
        title: "Kendi Terlalu Berat",
        imageUrl: gagakKendi8,
        narrative: "Dalam keputusasaannya, ia mencoba mendorong kendi itu agar tumpah. Namun, kendi batu itu terlalu berat untuk tubuhnya yang mungil."
      },
      {
        id: 8,
        title: "Hampir Menyerah",
        imageUrl: gagakKendi9,
        narrative: "Gagak terduduk lemas di tepi kendi. Energi dan waktunya hampir habis, namun menyerah bukanlah pilihan."
      },
      {
        id: 9,
        title: "Kerikil Berserakan",
        imageUrl: gagakKendi10,
        narrative: "Saat menundukkan kepala, matanya tertuju pada kerikil-kerikil kecil yang berserakan di sekitar dasar kendi."
      },
      {
        id: 10,
        title: "Ide Cemerlang",
        imageUrl: gagakKendi11,
        narrative: "Sebuah ide cemerlang melintas. Gagak memungut sebutir kerikil pertamanya dengan paruh yang mantap."
      },
      {
        id: 11,
        title: "Kerikil Pertama",
        imageUrl: gagakKendi12,
        narrative: "Ia menjatuhkan kerikil itu ke dalam kendi. Plup! Air di dasar kendi beriak kecil."
      },
      {
        id: 12,
        title: "Tanpa Lelah",
        imageUrl: gagakKendi13,
        narrative: "Satu demi satu, puluhan kerikil ia angkut tanpa lelah. Setiap kerikil yang jatuh membawa air naik sedikit demi sedikit."
      },
      {
        id: 13,
        title: "Air Mulai Naik",
        imageUrl: gagakKendi14,
        narrative: "Perlahan tapi pasti, ruang di dasar kendi terisi oleh batu. Air yang terjebak di bawah kini terdorong naik mendekati permukaan."
      },
      {
        id: 14,
        title: "Tegukan Kemenangan",
        imageUrl: gagakKendi15,
        narrative: "Akhirnya, air mencapai batas leher kendi. Gagak menundukkan kepalanya dan meminum air yang sejuk itu dengan penuh kepuasan."
      },
      {
        id: 15,
        title: "Menaklukkan Langit Kembali",
        imageUrl: gagakKendi16,
        narrative: "Dengan tubuh yang kembali bertenaga dan pikiran yang terbukti tajam, Gagak mengepakkan sayapnya tinggi-tinggi, siap menaklukkan langit kembali."
      }
    ]
  }
];
