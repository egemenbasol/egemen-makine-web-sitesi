export const company = {
  name: "Egemen Makine",
  legalName: "Egemen Makine Sanayi ve Mühendislik",
  tagline: "CNC fason işleme ve tersine mühendislik",
  description:
    "Egemen Makine; CNC tezgahlarında fason ve özel parça üretimi ile tersine mühendislik hizmeti sunar. Çizimi olan veya olmayan parçalar için ölçüm, CAD/CAM hazırlığı, hassas işleme ve kalite kontrollü teslimat sağlar.",
  phone: "0532 505 92 56",
  phoneHref: "tel:+905325059256",
  email: "egemenbasol@egemenmakine.com.tr",
  emailHref: "mailto:egemenbasol@egemenmakine.com.tr",
  address: "Veysel Karani, 1144. Sk. 58/A, 03000 Afyonkarahisar Merkez/Afyonkarahisar",
  whatsapp:
    "https://wa.me/905325059256?text=Merhaba%20Egemen%20Makine%2C%20CNC%20fason%20veya%20tersine%20mühendislik%20hakkında%20bilgi%20almak%20istiyorum.",
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

export const primaryServices = [
  {
    title: "CNC fason ve özel parça üretimi",
    slug: "cnc-fason-uretim",
    summary:
      "CNC tezgahlarımızda tek parçadan seri üretime kadar fason işleme ve özel parça imalatı.",
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
    summary:
      "İşleme programı, takım yolu ve üretim verisi hazırlığı.",
    details:
      "Teknik çizim veya tersine mühendislik çıktısından CNC programına kadar üretime hazır veri oluşturuyoruz. Tolerans, takım seçimi ve işleme stratejisi üretim kalitesini doğrudan etkiler.",
    metrics: "Üretime hazır program",
  },
];

export const secondaryServices = [
  {
    title: "Özel makine tasarımı",
    slug: "ozel-makine-tasarimi",
    summary:
      "İhtiyaca özel mekanik çözümler ve makine konseptleri.",
    details:
      "Ana odağımız CNC fason üretim ve tersine mühendislik olsa da, uygun projelerde özel makine ve fikstür tasarımı da sunuyoruz.",
    metrics: "Proje bazlı tasarım",
  },
  {
    title: "Endüstriyel otomasyon",
    slug: "endustriyel-otomasyon",
    summary:
      "Seçili projelerde otomasyon ve entegrasyon desteği.",
    details:
      "Üretim hatlarına yönelik otomasyon ihtiyaçlarında, mevcut imalat kabiliyetimizle destek verebiliyoruz. Bu hizmet proje bazında değerlendirilir.",
    metrics: "Proje bazlı destek",
  },
];

export const services = [...primaryServices, ...secondaryServices];

export const projects = [
  {
    title: "Seri fason CNC parça üretimi",
    sector: "Makine imalat",
    summary:
      "Teknik çizimle gelen çelik ve alüminyum bileşenlerin CNC işleme merkezinde seri fason üretimi ve kalite kontrollü teslimatı.",
    tags: ["CNC fason", "Seri üretim", "Kalite kontrol"],
  },
  {
    title: "Eski şanzıman gövdesi tersine mühendislik",
    sector: "Ağır sanayi",
    summary:
      "Üretimi durmuş kritik bir şanzıman gövdesinin ölçülmesi, CAD modelinin oluşturulması ve CNC ile yeniden üretilmesi.",
    tags: ["Tersine mühendislik", "3D tarama", "CNC"],
  },
  {
    title: "Yüksek hassasiyetli işleme fikstürü",
    sector: "Havacılık tedarikçisi",
    summary:
      "Tekrarlayan CNC işlemlerinde kurulum süresini azaltan ve toleransı koruyan özel fikstürün tasarımı ve üretimi.",
    tags: ["CAD/CAM", "CNC imalat", "Fikstür"],
  },
  {
    title: "Çizimsiz yedek parça üretimi",
    sector: "Gıda makineleri",
    summary:
      "Orijinal çizimi bulunmayan aşınmış parçanın ölçülerek modelenmesi ve CNC ile yeniden imal edilmesi.",
    tags: ["Tersine mühendislik", "Yedek parça", "CNC"],
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
    detail:
      "Fason veya özel parça üretimi CNC tezgahlarda gerçekleştirilir.",
  },
  {
    title: "Kalite kontrol",
    detail:
      "Kritik ölçüler kontrol edilir, yüzey ve tolerans doğrulaması yapılır.",
  },
  {
    title: "Teslimat ve tekrar üretim",
    detail:
      "Onaylanan parçalar teslim edilir; seri fason işlerde süreklilik sağlanır.",
  },
];

export const stats = [
  { value: "CNC", label: "Fason ve özel parça üretimi" },
  { value: "3D", label: "Tersine mühendislik desteği" },
  { value: "Hızlı", label: "Teklif ve üretim süreci" },
];

export const serviceDeliverables = [
  "Teknik değerlendirme",
  "İşleme / model verisi",
  "Kalite kontrol",
];

export const servicePrinciples = [
  "Önceliğimiz CNC tezgahlarda güvenilir fason ve özel parça üretimidir.",
  "Çizimi olmayan parçalarda tersine mühendislik ile hızlı ve doğru çözüm sunarız.",
  "Makine tasarımı ve otomasyon hizmetleri proje bazında, üretim kabiliyetimizi destekleyecek şekilde değerlendirilir.",
];

export const projectMetrics = [
  { value: "Ölç", label: "Parça inceleme, ölçüm ve tarama" },
  { value: "Üret", label: "CNC fason işleme ve özel parça imalatı" },
  { value: "Teslim", label: "Kalite kontrol ve zamanında teslimat" },
];

export const principles = [
  {
    title: "Üretim odaklı çalışma",
    text: "CNC tezgahlarda fason ve özel parça üretimi günlük işimizin merkezindedir.",
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
