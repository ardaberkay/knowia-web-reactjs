import React from "react";

const guides = [
  { title: "Knowia ile desteler ve kartlar nasıl oluşturulur?", icon: "📚" },
  { title: "Aralıklı tekrar sistemi nasıl çalışır?", icon: "🧠" },
  { title: "Deste içerisinde bölümlerle konular nasıl parçalara ayrılır?", icon: "🗂️" },
  { title: "Desteleri toplulukla paylaşma ve keşfetme", icon: "🌍" },
];

export default function GuideScreen() {
  return (
    <div className=" flex items-center justify-center px-6 py-20">
      {/* Hafif bir arka plan parlaması - CSS ile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Knowia Rehberi
          </h1>
          <div className="h-0.5 w-20 bg-[#F98A21] mx-auto rounded-full mb-6" />
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            Knowia’yı daha verimli kullanmanız için hazırlanan rehber içerikler üzerinde çalışıyoruz.
          </p>
        </div>

        {/* List */}
        <div className="grid gap-3 max-w-2xl mx-auto">
          {guides.map((item, index) => (
            <div
              key={index}
              className="
                group flex items-center justify-between
                bg-white/[0.03] border border-white/10 hover:border-white/20
                rounded-2xl px-5 py-4
                transition-all duration-300 ease-out hover:bg-white/[0.06] hover:-translate-y-0.5
              "
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">
                  {item.icon}
                </span>
                <span className="text-white/80 font-medium group-hover:text-white transition-colors">
                  {item.title}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40 bg-white/5 border border-white/5 px-3 py-1 rounded-full group-hover:text-white/60 transition-colors">
                  Yakında
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-white/30 italic">
            "Öğrenme yolculuğunuzu hızlandırmak için buradayız."
          </p>
          <p className="mt-4 text-xs text-white/50">
            Mobil uygulama üzerinden tam sürümü deneyimlemeye devam
            edebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
