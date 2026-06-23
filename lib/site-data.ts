export const company = {
  name: "Egemen Makine",
  legalName: "Egemen Makine Sanayi ve Mühendislik",
  tagline: "CNC Metal İşleme Ve Tersine Mühendislik",
  description:
    "Egemen Makine; geniş takım tezgahı parkuru ile ihtiyaca özel ve fason parça üretimi yapar, tersine mühendislik hizmeti sunar. PLC programlama, otomasyon ve üretim hattı çözümleri de geliştirir. Çizimi olan veya olmayan parçalar için ölçüm, CAD/CAM hazırlığı, hassas işleme ve kalite kontrollü teslimat sağlar.",
  phone: "0532 505 92 56",
  phoneHref: "tel:+905325059256",
  email: "egemenbasol@egemenmakine.com.tr",
  emailHref: "mailto:egemenbasol@egemenmakine.com.tr",
  address: "Veysel Karani, 1144. Sk. 58/A, 03000 Afyonkarahisar Merkez/Afyonkarahisar",
  whatsapp:
    "https://wa.me/905325059256?text=Merhaba%20Egemen%20Makine%2C%20CNC%20metal%20işleme%20veya%20tersine%20mühendislik%20hakkında%20bilgi%20almak%20istiyorum.",
  mapLink: "https://share.google/OXMt8SIRqn6ZnmcBJ",
  mapEmbed:
    "https://www.google.com/maps?q=Veysel+Karani%2C+1144.+Sk.+58%2FA%2C+03000+Afyonkarahisar+Merkez%2FAfyonkarahisar&output=embed",
};

export const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmetler", href: "/services" },
  { label: "Projeler", href: "/projects" },
  { label: "Hakkımızda", href: "/about" },
  { label: "İletişim", href: "/contact" },
];

export const services = [
  {
    title: "CNC fason ve özel parça üretimi",
    slug: "cnc-fason-uretim",
    summary:
      "Geniş takım tezgahı parkurumuzda tek parçadan seri üretime kadar ihtiyaca özel ve fason parça imalatı.",
    details:
      "Torna, freze ve işleme merkezlerimizde çelik, paslanmaz, alüminyum ve mühendislik plastiklerinde toleranslı üretim yapıyoruz. Prototip, yedek parça ve tekrarlayan fason işler için hızlı ve kontrollü teslimat sunuyoruz.",
    metrics: "Fason CNC işleme",
  },
  {
    title: "Tersine mühendislik",
    slug: "tersine-muhendislik",
    summary:
      "Çizimi olmayan, eski veya aşınmış parçaların ölçülerek yeniden üretilebilir hale getirilmesi.",
    details:
      "Parçayı ölçüyor, gerekirse 3D tarıyor ve üretime uygun CAD modeli oluşturuyoruz. Dokümantasyonu kaybolmuş kritik bileşenler için hızlı ve güvenilir çözüm sağlıyoruz.",
    metrics: "Ölçüm ve modelleme",
  },
  {
    title: "3D tarama",
    slug: "3d-tarama",
    summary:
      "Parça geometrisinin dijital ortama aktarılması, ölçüm ve tersine mühendislik için veri üretimi.",
    details:
      "Tarama verisini CAD ortamına taşıyarak ölçüm, karşılaştırma ve yeniden üretim sürecini hızlandırıyoruz. Karmaşık yüzeyli parçalarda manuel ölçüme göre daha hızlı sonuç alınır.",
    metrics: "Taramadan modele",
  },
  {
    title: "CAD/CAM mühendisliği",
    slug: "cad-cam-muhendisligi",
    summary: "İşleme programı, takım yolu ve üretim verisi hazırlığı.",
    details:
      "Teknik çizim veya tersine mühendislik çıktısından CNC programına kadar üretime hazır veri oluşturuyoruz. Tolerans, takım seçimi ve işleme stratejisi üretim kalitesini doğrudan etkiler.",
    metrics: "Üretime hazır program",
  },
  {
    title: "Özel makine tasarımı",
    slug: "ozel-makine-tasarimi",
    summary: "İhtiyaca özel mekanik çözümler ve makine konseptleri.",
    details:
      "Üretim süreçlerine uygun özel makine, fikstür ve mekanik çözümler tasarlıyoruz. İhtiyaca göre konseptten imalata kadar destek sağlıyoruz.",
    metrics: "Proje bazlı tasarım",
  },
  {
    title: "PLC programlama ve otomasyon",
    slug: "endustriyel-otomasyon",
    summary: "PLC programlama, otomasyon ve üretim hattı çözümleri.",
    details:
      "Üretim hatları için PLC programlama, sensör-aktüatör entegrasyonu, kontrol panosu ve otomasyon mantığı geliştiriyoruz. Hat verimliliğini artıran, güvenli ve sürdürülebilir otomasyon sistemlerinin kurulumu ve devreye alınmasında destek sağlıyoruz.",
    metrics: "Üretim hattı otomasyonu",
  },
];

export const processSteps = [
  {
    title: "Teknik inceleme ve ölçüm",
    detail:
      "Parça, çizim veya numune üzerinden tolerans, malzeme ve adet bilgisi netleştirilir.",
  },
  {
    title: "CAD/CAM veya tersine mühendislik",
    detail:
      "Çizim varsa işleme programı hazırlanır; yoksa ölçüm ve tarama ile model oluşturulur.",
  },
  {
    title: "CNC işleme",
    detail: "İhtiyaca özel ve fason parça üretimi geniş takım tezgahı parkurumuzda gerçekleştirilir.",
  },
  {
    title: "Kalite kontrol",
    detail: "Kritik ölçüler kontrol edilir, yüzey ve tolerans doğrulaması yapılır.",
  },
  {
    title: "Teslimat ve tekrar üretim",
    detail: "Onaylanan parçalar teslim edilir; seri fason işlerde süreklilik sağlanır.",
  },
];

export const stats = [
  { value: "CNC", label: "İhtiyaca özel ve fason üretim" },
  { value: "3D", label: "Tersine mühendislik desteği" },
  { value: "Hızlı", label: "Teklif ve üretim süreci" },
];

export const serviceDeliverables = [
  "Teknik değerlendirme",
  "İşleme / model verisi",
  "Kalite kontrol",
];

export const servicePrinciples = [
  "Geniş takım tezgahı parkuru ile ihtiyaca özel ve fason parça üretimi günlük işimizin merkezindedir.",
  "Çizimi olmayan parçalarda tersine mühendislik ile hızlı ve doğru çözüm sunarız.",
  "Tüm hizmetlerimiz; geniş takım parkurunda parça üretimi, tersine mühendislik ve üretim hattı otomasyonu dahil aynı kalite anlayışıyla yürütülür.",
];

export const projectMetrics = [
  { value: "Ölç", label: "Parça inceleme, ölçüm ve tarama" },
  { value: "Üret", label: "Geniş takım parkurunda özel ve fason parça imalatı" },
  { value: "Teslim", label: "Kalite kontrol ve zamanında teslimat" },
];

export const principles = [
  {
    title: "Üretim odaklı çalışma",
    text: "Geniş takım tezgahı parkuru ile ihtiyaca özel ve fason parça üretimi günlük işimizin merkezindedir.",
  },
  {
    title: "Tersine mühendislikte hız",
    text: "Çizimi kaybolmuş veya eskimiş parçaları ölçerek kısa sürede yeniden üretilebilir hale getiririz.",
  },
  {
    title: "Net süreç",
    text: "Teklif, üretim ve teslimat adımları şeffaf ilerler; müşteri her aşamada ne bekleyeceğini bilir.",
  },
];

export const contactTips = [
  "Varsa teknik çizim veya CAD dosyası",
  "Parça fotoğrafı, ölçü veya numune bilgisi",
  "Malzeme, tolerans, adet ve teslim süresi",
  "Çizimsiz parçalar için tersine mühendislik ihtiyacı",
];
