import React from "react";

export default function Footer() {
  return (
<footer className="w-full bg-transparent px-4 bottom-0 mt-auto">
  <div className="max-w-7xl mx-auto border-t border-gray-400 px-4 flex flex-col md:flex-row items-center py-4 justify-between gap-4 md:gap-0 text-center md:text-left">
    <div>
      <p className="text-sm">Powered by BB Software</p>
    </div>
    <div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Knowia Tüm hakları saklıdır</p>
    </div>
    <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
      <a href="/policy" className="text-sm hover:text-gray-200">
        Gizlilik Politikası
      </a>
      <a href="/terms" className="text-sm hover:text-gray-200">
        Kullanım Şartları
      </a>
    </div>
  </div>
</footer>
  );
}
