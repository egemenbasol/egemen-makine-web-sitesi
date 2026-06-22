export const company = {
  name: "Egemen Makine",
  legalName: "Egemen Makine Sanayi ve Mühendislik",
  tagline: "Hassas makine, tersine mühendislik ve endüstriyel otomasyon çözümleri",
  description:
    "Egemen Makine; özel makine tasarımı, tersine mühendislik, 3D tarama, CAD/CAM, CNC imalat ve endüstriyel otomasyon alanlarında üretime hız, kalite ve güvenilirlik kazandıran mühendislik ortağınızdır.",
  phone: "+90 555 000 00 00",
  phoneHref: "tel:+905550000000",
  email: "info@egemenmakine.com",
  emailHref: "mailto:info@egemenmakine.com",
  address: "Organize Sanayi Bölgesi, İstanbul, Türkiye",
  whatsapp:
    "https://wa.me/905550000000?text=Merhaba%20Egemen%20Makine%2C%20projem%20hakkında%20bilgi%20almak%20istiyorum.",
  mapEmbed:
    "https://www.google.com/maps?q=Istanbul%20Organize%20Sanayi%20Bolgesi&output=embed",
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
    title: "Özel makine tasarımı",
    slug: "ozel-makine-tasarimi",
    summary:
      "Üretim hedefleri, güvenlik gereksinimleri ve bakım kolaylığına göre tasarlanan özel makineler.",
    details:
      "Konsept eskizlerinden devreye almaya hazır mekanik montajlara kadar, sürecinizi makineye uydurmak yerine sürecinize uygun sağlam sistemler tasarlıyoruz.",
    metrics: "Konseptten detay tasarıma",
  },
  {
    title: "Tersine mühendislik",
    slug: "tersine-muhendislik",
    summary:
      "Eski parçaların, fikstürlerin ve makine montajlarının doğru şekilde yeniden üretilmesi ve iyileştirilmesi.",
    details:
      "Geometriyi ölçüyor, aşınma noktalarını değerlendiriyor ve dokümantasyonu eksik veya güncel olmayan parçalar için üretilebilir CAD verisi oluşturuyoruz.",
    metrics: "Eski parça kurtarma",
  },
  {
    title: "3D tarama",
    slug: "3d-tarama",
    summary:
      "Muayene, yeniden tasarım, kalite kontrolü ve dokümantasyon için yüksek çözünürlüklü dijital ölçüm.",
    details:
      "Taramadan CAD'e iş akışımız, gerçek parçaları nominal tasarımlarla karşılaştırmanıza ve mühendislik kararlarını hızlandırmanıza yardımcı olur.",
    metrics: "Taramadan CAD'e",
  },
  {
    title: "CAD/CAM mühendisliği",
    slug: "cad-cam-muhendisligi",
    summary:
      "Üretime hazır modelleme, montajlar, teknik çizimler, takım yolları ve işleme hazırlığı.",
    details:
      "Mühendislik niyetini toleranslar, malzeme davranışı ve çevrim verimliliği dikkate alınarak net üretim paketlerine dönüştürüyoruz.",
    metrics: "Üretime hazır veri",
  },
  {
    title: "CNC imalat",
    slug: "cnc-imalat",
    summary:
      "Prototipler, fikstürler, yedek parçalar ve tekrarlanabilir üretim bileşenleri için hassas işleme.",
    details:
      "CNC imalat yaklaşımımız istikrarlı süreçler, izlenebilir kalite kontrolleri ve tutarlı teslimat üzerine kuruludur.",
    metrics: "Hassas işleme",
  },
  {
    title: "Endüstriyel otomasyon",
    slug: "endustriyel-otomasyon",
    summary:
      "Daha güvenli ve hızlı üretim hatları için otomasyon hücreleri, kontrol mantığı ve entegrasyon desteği.",
    details:
      "Mekanik tasarım, sensörler, kontrol panelleri ve üretim iş akışlarını pratik otomasyon sistemlerinde bir araya getiriyoruz.",
    metrics: "Entegre kontrol sistemleri",
  },
];

export const projects = [
  {
    title: "Robotik transfer ve fikstür hücresi",
    sector: "Otomotiv tedarikçisi",
    summary:
      "Özel fikstürler, pnömatik taşıma ve operatör güvenliği için erişim bölgeleri içeren kompakt bir otomasyon hücresi.",
    tags: ["Otomasyon", "Fikstür tasarımı", "Güvenlik"],
  },
  {
    title: "Eski şanzıman tersine mühendisliği",
    sector: "Ağır sanayi",
    summary:
      "Üretimi durdurulmuş kritik bir şanzıman gövdesi için 3D tarama, ölçüm doğrulaması ve üretilebilir CAD yeniden oluşturma.",
    tags: ["Tersine mühendislik", "3D tarama", "CNC"],
  },
  {
    title: "Yüksek hassasiyetli CNC üretim fikstürü",
    sector: "Havacılık işleme",
    summary:
      "Kurulum farklılıklarını azaltan ve üretim partileri arasında tekrarlanabilirliği artıran modüler fikstür mimarisi.",
    tags: ["CAD/CAM", "CNC imalat", "Kalite"],
  },
  {
    title: "Ambalaj hattı modernizasyonu",
    sector: "Gıda üretimi",
    summary:
      "Hijyen ve bakım erişimini koruyarak verimi artırmak için mekanik yeniden tasarım ve sensör entegrasyonu.",
    tags: ["Makine tasarımı", "Otomasyon", "Devreye alma"],
  },
];

export const processSteps = [
  {
    title: "Keşif ve teknik değerlendirme",
    detail:
      "Kilometre taşları dokümante edilir; mekanik, imalat ve otomasyon kararları hedef sonuçla uyumlu kalır.",
  },
  {
    title: "Konsept mühendisliği ve risk analizi",
    detail:
      "Teknik riskler erken aşamada belirlenir ve proje kapsamı netleştirilir.",
  },
  {
    title: "CAD/CAM geliştirme ve prototipleme",
    detail:
      "Dijital modeller ve prototiplerle tasarım doğrulanır, üretim öncesi revizyonlar tamamlanır.",
  },
  {
    title: "İmalat, montaj ve doğrulama",
    detail:
      "Parçalar üretilir, montaj yapılır ve kalite kontrolleriyle performans doğrulanır.",
  },
  {
    title: "Devreye alma desteği ve sürekli iyileştirme",
    detail:
      "Sahada devreye alma sonrası destek ve üretim verimliliğini artıran iyileştirmeler sağlanır.",
  },
];

export const stats = [
  { value: "6", label: "Temel mühendislik hizmeti" },
  { value: "360°", label: "Uçtan uca proje bakışı" },
  { value: "7/24", label: "Üretim odaklı destek" },
];

export const serviceDeliverables = [
  "Mühendislik incelemesi",
  "Üretim verisi",
  "Kalite doğrulaması",
];

export const servicePrinciples = [
  "Mekanik tasarım kararları üretilebilirlik ve servis edilebilirlik açısından değerlendirilir.",
  "Dijital mühendislik verisi gerçek üretim ortamları için hazırlanır, yalnızca sunum için değil.",
  "Otomasyon konseptleri operatör güvenliği, çalışma süresi ve uzun vadeli bakım kolaylığını önceler.",
];

export const projectMetrics = [
  { value: "Tasarım", label: "Mekanik konseptler, modeller ve üretim paketleri" },
  { value: "İmalat", label: "CNC işleme, montaj, muayene ve iterasyon" },
  { value: "Entegrasyon", label: "Otomasyon, kontrol ve devreye alma desteği" },
];

export const principles = [
  {
    title: "Üretim öncelikli yaklaşım",
    text: "Mühendislik kararları gerçek üretim kısıtları, bakım erişimi ve operatör iş akışına göre test edilir.",
  },
  {
    title: "Dijital doğruluk",
    text: "CAD/CAM ve 3D tarama iş akışları yeniden tasarım, muayene ve imalat için güvenilir teknik temel sağlar.",
  },
  {
    title: "Kalıcı uygulama",
    text: "Tasarım, işleme ve otomasyon çalışmaları uzun hizmet ömrü ve tekrarlanabilir endüstriyel performans için planlanır.",
  },
];

export const contactTips = [
  "Varsa teknik çizimler veya CAD dosyaları",
  "Parça fotoğrafları, ölçüler veya 3D tarama gereksinimleri",
  "Malzeme, tolerans, adet ve üretim hedefleri",
  "Otomasyon çevrim süresi, güvenlik ve entegrasyon ihtiyaçları",
];
