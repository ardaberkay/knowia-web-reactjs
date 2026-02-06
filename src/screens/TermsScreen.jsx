import React from "react";
import { Mail } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-15">
        {/* Başlık Bölümü */}
        <header className="mb-12 border-b border-gray-800 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Kullanım Şartları
          </h1>
          <p className="text-[#FF6B35] font-medium">
            Son Güncelleme: 05.02.2026
          </p>
        </header>

        {/* Metin İçeriği */}
        <article className="prose max-w-none space-y-10 leading-relaxed">
          <p className="text-lg">
            Knowia uygulamasını kullanarak bu Kullanım Şartları’nı kabul etmiş
            olursunuz. Şartları kabul etmiyorsanız uygulamayı kullanmamalısınız.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>1.</span>Uygunluk
            </h2>
            <p>
              Knowia’yı kullanabilmek için en az 13 yaşında olmanız gerekir.
            </p>
            <p className="mt-2">
              13-18 yaş arasındaki kullanıcılar, bu şartları ebeveyn veya yasal
              vasilerinin onayıyla kabul etmiş sayılırlar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>2.</span>Hesaplar
            </h2>
            <ul className="flex flex-col gap-y-2 list-none p-0 ml-4">
              {[
                "Hesap bilgilerinizin gizliliğinden siz sorumlusunuz",
                "Doğru ve güncel bilgiler sağlamakla yükümlüsünüz",
                "Hesabınız üzerinden gerçekleştirilen tüm işlemlerden siz sorumlusunuz",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
            <span className="mt-4 block">
              Hesabınızın yetkisiz kullanımından şüpheleniyorsanız derhal{" "}
              <a className="text-[#FF6B35]" href="mailto:knowia.app@gmail.com">
                knowia.app@gmail.com
              </a>{" "}
              adresi üzerinden bize bildirimde bulunmalısınız.
            </span>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>3.</span>Kullanıcı Tarafından Oluşturulan İçerik
            </h2>
            <p className="mb-4">Kullanıcılar:</p>
            <ul className="flex flex-col gap-y-2 list-none p-0 ml-4">
              {[
                "Kartlar ve desteler oluşturabilir",
                "Metin ve görsel yükleyebilir",
                "İçeriklerini diğer kullanıcılarla paylaşabilir",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full" />{" "}
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Paylaşılan içeriklerin yasalara ve üçüncü taraf haklarına uygun
              olmasından kullanıcı sorumludur.
            </p>
            <p className="mt-2 italic">
              İçerik yükleyerek; Knowia'ya bu içeriği uygulama içinde saklamak,
              görüntülemek ve yaymak için dünya çapında, telifsiz bir kullanım
              lisansı vermiş olursunuz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>4.</span>İçerik Görünürlüğü
            </h2>
            <p>
              Paylaşılan içeriklerde kullanıcı adı ve profil fotoğrafı diğer
              kullanıcılar tarafından görülebilir.
            </p>
            <p className="mt-2 italic">
              Knowia, kullanıcıların paylaşılan içeriklerle olan
              etkileşimlerinden sorumlu değildir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>5.</span>Kabul Edilebilir Kullanım ve Sıfır Tolerans
            </h2>
            <p className="mb-4 text-gray-300">
              Knowia, topluluk güvenliğini ön planda tutar. Uygulama içerisinde;
              müstehcenlik, nefret söylemi, şiddet teşviki, zorbalık ve yasadışı
              içeriklerin paylaşılmasına kesinlikle izin verilmez.
            </p>
            <ul className="flex flex-col gap-y-2 list-none p-0 ml-4">
              {[
                "Sıfır Tolerans: Bu kuralları ihlal eden içerikler, bildirim üzerine 24 saat içinde incelenir ve uygunsuz görüldüğü takdirde derhal kaldırılır.",
                "Yaptırım: Kural ihlali yapan kullanıcıların hesabı askıya alınabilir veya kalıcı olarak silinebilir.",
                'Raporlama: Kullanıcılar, uygulama içerisindeki "Rapor Et" özelliğini kullanarak her türlü uygunsuz içeriği veya kullanıcıyı bize bildirebilirler.',
              ].map((item, index) => {
                const [title, description] = item.split(":");
                return (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-400"
                  >
                    <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0" />
                    <p>
                      <span className="font-bold text-white">{title}:</span>
                      {description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>6.</span>Premium Özellikler
            </h2>
            <p>
              Knowia, ileride ücretli özellikler veya abonelikler sunabilir.
            </p>
            <p className="mt-2 text-gray-400">
              Bu özelliklerin detayları uygulama içinde ayrıca belirtilecektir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>7.</span>Hesap Sonlandırma
            </h2>
            <p>
              Kullanıcılar, uygulama içerisindeki "Hesabı Sil" butonu ile veya
              destek e-posta adresi üzerinden hesap silme talebi oluşturabilir.
            </p>
            <p className="mt-2">
              Bu şartların ihlal edilmesi durumunda Knowia, kullanıcı hesabını
              askıya alabilir veya kalıcı olarak silebilir.
            </p>
            <p className="mt-2 text-gray-400">
              Hesap silme işlemi tamamlandığında, kullanıcıya ait kişisel veriler yasal zorunluluklar hariç sistemimizden temizlenir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>8.</span>Fikri Mülkiyet Hakları
            </h2>
            <p>Uygulamanın tasarımı, logoları, metinleri ve yazılım kodları Knowia'ya aittir. İzinsiz kopyalanamaz veya kullanılamaz.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>9.</span>Sorumluluk Reddi
            </h2>
            <p>Knowia “olduğu gibi” sunulmaktadır.</p>
            <p className="mt-2 text-gray-400">
              Uygulamanın kesintisiz veya hatasız çalışacağı garanti edilmez.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>10.</span>Şartlarda Değişiklik
            </h2>
            <p>Bu Kullanım Şartları zaman zaman güncellenebilir.</p>
            <p className="mt-2">
              Uygulamayı kullanmaya devam etmeniz, güncellenmiş şartları kabul
              ettiğiniz anlamına gelir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>11.</span>Mağaza Feragatnamesi
            </h2>
            <p>
              Bu sözleşme sadece kullanıcı ile Knowia arasındadır. Apple ve
              Google uygulamanın içeriğinden veya sunulan destekten sorumlu
              değildir.
            </p>
          </section>

          <section className="bg-gradient-to-br from-[#262626] to-[#1C1C1C] p-8 rounded-3xl border border-gray-800 text-center mt-20">
            <h2 className="text-2xl font-bold text-white mb-6">İletişim</h2>
            <p className="mb-6 text-gray-400">
              Sorularınız ve geri bildirimleriniz için:
            </p>
            <a
              href="mailto:knowia.app@gmail.com"
              className="inline-flex items-center gap-2 bg-[#FF6B35] text-white px-8 py-3 rounded-full font-bold hover:bg-[#e85a2a] transition-all shadow-lg shadow-[#FF6B35]/20"
            >
              <Mail size={18} /> knowia.app@gmail.com
            </a>
          </section>
        </article>
      </div>
    </div>
  );
};

export default TermsOfService;
