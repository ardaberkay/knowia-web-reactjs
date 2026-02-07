import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Mail, ChevronRight, Instagram, Linkedin } from "lucide-react";

const ContactScreen = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_r5yglcw",
        "template_t209c3v",
        form.current,
        "b8DHK8kitBz_qTqix",
      )
      .then(
        (response) => {
          console.log("Başarılı:", response.status, response.text);
          alert("Mesajın başarıyla Knowia ekibine ulaştı! ✅");
          e.target.reset();
        },
        (error) => {
          alert("Bir hata oluştu, lütfen mail@knowia.app üzerinden ulaşın. ❌");
          console.log(error.text);
        },
      )
      .finally(() => setIsSending(false));
  };
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-gray-200 font-sans selection:bg-[#F98A21]/30 tracking-tight">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Sol Taraf: Metin, İletişim ve Sosyal Medya */}
        <div className="space-y-12">
          <div>
            <h1 className="text-6xl font-light text-white mb-6 tracking-tighter">
              Bize Yazın<span className="text-[#F98A21]">.</span>
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-md">
              Knowia'yı kullanıcılarımızın fikirleriyle inşa ediyoruz. Sürece
              dahil olmak için bize ulaşın.
            </p>
          </div>

          <div className="space-y-6">
            {/* E-posta Kartı */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit transition-all hover:bg-white/[0.08]">
              <div className="w-10 h-10 rounded-full bg-[#F98A21]/10 flex items-center justify-center text-[#F98A21]">
                <Mail size={20} />
              </div>
              <a
                href="mailto:knowia.app@gmail.com"
                className="text-gray-300 font-light tracking-wide"
              >
                knowia.app@gmail.com
              </a>
            </div>
            <div className="mt-12 space-y-4">
              {/* Üst Başlık: İnce, zarif ve geniş aralıklı */}
              <div className="flex items-center gap-3 ml-1">
                <span className="text-[16px] font-semibold text-gray-500 uppercase tracking-[0.3em]">
                  Topluluğa Katıl
                </span>
                <div className="h-[1px] w-8 bg-[#F98A21]/30"></div>
              </div>

              <div className="flex flex-row items-center ml-30 gap-6">
                {/* Instagram Butonu */}
                <div className="relative group">
                  {/* Arka plan Glow (Parlama) Efekti */}
                  <div className="absolute -inset-2 bg-[#F98A21] rounded-full blur-xl opacity-0 group-hover:opacity-20 transition duration-500"></div>

                  <a
                    href="https://instagram.com/knowia"
                    target="_blank"
                    rel="noreferrer"
                    className="relative w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#F98A21] hover:border-[#F98A21]/50 transition-all duration-300"
                  >
                    <Instagram size={24} />
                  </a>
                </div>

                {/* LinkedIn Butonu */}
                <div className="relative group">
                  {/* Arka plan Glow (Parlama) Efekti */}
                  <div className="absolute -inset-2 bg-[#F98A21] rounded-full blur-xl opacity-0 group-hover:opacity-20 transition duration-500"></div>

                  <a
                    href="https://linkedin.com/company/knowia"
                    target="_blank"
                    rel="noreferrer"
                    className="relative w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#F98A21] hover:border-[#F98A21]/50 transition-all duration-300"
                  >
                    <Linkedin size={24} />
                  </a>  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sağ Taraf: Form Kısmı (Aynı kalıyor) */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F98A21] to-[#ffaf66] rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>

          <div className="relative bg-[#252525] p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-xl">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-widest ml-1">
                    İsim
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    className="w-full bg-[#1C1C1C] border border-white/5 focus:border-[#F98A21]/50 rounded-2xl px-5 py-4 outline-none transition-all text-gray-200 placeholder:text-gray-600 focus:ring-1 focus:ring-[#F98A21]/20"
                    placeholder="Adınız"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-widest ml-1">
                    E-Posta
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    className="w-full bg-[#1C1C1C] border border-white/5 focus:border-[#F98A21]/50 rounded-2xl px-5 py-4 outline-none transition-all text-gray-200 placeholder:text-gray-600 focus:ring-1 focus:ring-[#F98A21]/20"
                    placeholder="mail@adresiniz.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-gray-500 uppercase tracking-widest ml-1">
                  Konu
                </label>
                <div className="relative">
                  <select
                    name="subject"
                    className="w-full bg-[#1C1C1C] border border-white/5 focus:border-[#F98A21]/50 rounded-2xl px-5 py-4 outline-none transition-all text-gray-300 appearance-none cursor-pointer"
                  >
                    <option>Öneri ve Fikir</option>
                    <option>Hata Bildirimi</option>
                    <option>Hesap Sorunları</option>
                    <option>Diğer</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <ChevronRight size={18} className="rotate-90" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-gray-500 uppercase tracking-widest ml-1">
                  Mesajınız
                </label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  className="w-full bg-[#1C1C1C] border border-white/5 focus:border-[#F98A21]/50 rounded-2xl px-5 py-4 outline-none transition-all text-gray-200 placeholder:text-gray-600 resize-none focus:ring-1 focus:ring-[#F98A21]/20"
                  placeholder="Bize her şeyi anlatabilirsiniz..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-white text-black font-semibold py-5 rounded-2xl hover:bg-[#F98A21] hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group/btn shadow-xl shadow-[#F98A21]/5 cursor-pointer"
              >
                <span>{isSending ? "Gönderiliyor..." : "Gönder"}</span>
                <Send
                  size={18}
                  className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
