// import React from "react";
import qrcode from "../../assets/qrcode.svg";
import macoslogo from "../../assets/macos-logo.svg";
import windowslogo from "../../assets/windows-logo.svg";
import linuxlogo from "../../assets/linux-logo.svg";
import DownloadDarkPro from "../../assets/download-pro-dark-en.svg";
import DownloadLiteDark from "../../assets/download-lite-dark.svg";
import DownloadDesktopDark from "../../assets/img/download-desktop-dark.png";

import { useEffect, useState } from "react";

const platforms = [
  { name: "MacOS", logo: macoslogo },
  { name: "Windows", logo: windowslogo },
  { name: "Linux", logo: linuxlogo },
];

function TabButtons({ activeTab, setActiveTab, isMobile }) {
  const allTabs = ["Desktop", "Lite", "Pro"];
  const tabs = isMobile ? allTabs.filter((t) => t !== "Desktop") : allTabs;

  return (
    <div
      className={`mt-6 w-full flex ${
        isMobile ? "justify-center" : "justify-center"
      }`}
    >
      <div className="flex gap-4 border-b border-[#2B3139]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="flex flex-col items-center"
          >
            <span
              className={`text-base font-semibold ${
                activeTab === tab ? "text-white" : "text-[#848E9C]"
              }`}
            >
              {tab}
            </span>
            {/* Всегда зарезервированное место под линию */}
            <div className="h-[2px] mt-6">
              <div
                className={`w-14 h-0.5 rounded-sm transition-all duration-300 ${
                  activeTab === tab ? "bg-[#fcd535]" : "bg-transparent"
                }`}
              ></div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function DownloadSection() {
  const [activeTab, setActiveTab] = useState("Lite");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile(); // при монтировании
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row px-10 sm:py-20 py-8 sm:px-0  lg:gap-[90px] relative">
      {/* Левая часть: Картинки + Табы (Desktop Only) */}
      <div className="hidden sm:flex flex-col h-auto items-center w-1/2">
        {/* Контейнер с фиксированной высотой */}
        <div className="flex items-center h-[538px]">
          {activeTab === "Desktop" && (
            <img src={DownloadDesktopDark} className="w-100% h-100%  " />
          )}
          {activeTab === "Lite" && (
            <img src={DownloadLiteDark} className="w-100%  h-100% " />
          )}
          {activeTab === "Pro" && (
            <img src={DownloadDarkPro} className="w-100%  h-100% " />
          )}
        </div>

        {/* Табы (как было) */}
        <TabButtons
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isMobile={false}
        />
      </div>
      {/* Правая часть */}
      <div className="flex w-full sm:w-1/2 flex-col relative ">
        {/* Заголовки */}
        <h2 className="text-white font-semibold text-2xl sm:hidden text-center z-10">
          Trade on the go. Anywhere, anytime.
        </h2>
        <h2 className="hidden sm:block text-white font-semibold text-4xl">
          Trade on the go. Anywhere, anytime.
        </h2>

        {/* ✅ Табы для мобилки */}
        <div className="flex sm:hidden ">
          <TabButtons
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isMobile={true}
          />
        </div>
        <div className="mt-4 sm:hidden flex justify-center h-[538px]">
          {activeTab === "Lite" && (
            <img src={DownloadLiteDark} className="w-100%  h-100% " />
          )}
          {activeTab === "Pro" && (
            <img src={DownloadDarkPro} className="w-100%  h-100% " />
          )}
        </div>

        {/* QR код — только на desktop */}
        <div className="mt-12 sm:flex hidden justify-start items-center gap-4">
          <div className="flex items-center rounded-[24px] py-4 px-4 border border-solid border-[#2B3139]">
            <div className="rounded-[8px] py-2 px-2 bg-white">
              <div className="flex items-center justify-center">
                <img
                  src={qrcode}
                  alt="qr"
                  className="w-[142px] h-[142px] sm:w-[152px] sm:h-[152px] "
                />
              </div>
            </div>
          </div>
          <div className="text-[#848E9C] text-md">
            Scan to Download App
            <h2 className="text-white mt-2 text-xl">iOS and Android</h2>
          </div>
        </div>

        {/* Кнопки платформ */}
        <div className="hidden sm:flex mt-12 text-white text-base font-semibold gap-12 justify-start">
          {platforms.map(({ name, logo }) => (
            <a
              key={name}
              href="#"
              className="rounded-[8px] hover:bg-[#272C34] w-[80px] py-2 px-4 flex flex-col items-center"
            >
              <img
                src={logo}
                alt={name}
                className="max-w-full h-auto object-contain"
              />
              <div className="mt-1 text-center">{name}</div>
            </a>
          ))}
        </div>

        {/* Ссылка на More download options */}
        <a
          href="#"
          className="hidden sm:flex mt-12 justify-start items-center gap-1 text-base font-semibold"
        >
          <svg className="w-5 h-5 mt-1 text-[#848e9c]" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.5 9V6H16v3h3V3H4.5v6h3zm-3 12H19v-6h-3v3H7.5v-3h-3v6zm6.009-13h3v4.002l2.508.006-4.008 4.008-4.01-4.008 2.51-.025V8z"
              fill="currentColor"
            ></path>
          </svg>
          <div className="text-white hover:text-[#848e9c]">
            More Download options
          </div>
        </a>
      </div>
    </div>
  );
}
