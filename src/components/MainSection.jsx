import React from "react";
import CryptoSection from "./CryptoSection/CryptoSection";
import DownloadSection from "./DownloadSection/DownloadSection";
import FAQ from "./FAQ/FAQ";
import GoogleIcon from "../assets/img/google-icon.png";
import AppleIcon from "../assets/img/apple-icon.png";

export default function MainSection() {
  return (
    <div className="max-w-screen-xl mx-auto py-8">
      <div className="flex flex-col  lg:flex-row gap-8 lg:gap-20 px-6 sm:px-12 lg:px-4">
        <div className="flex flex-col lg:w-1/2 items-center sm:items-start gap-2">
          <h1 className=" sm:text-left text-center text-4xl sm:text-6xl lg:text-8xl">
            Покупайте крипту с низкими комиссиями на
          </h1>
          <div class="text-[#CEAF30] text-4xl sm:text-6xl lg:text-8xl semibold ">
            <strong>Binance</strong>
          </div>
          <div className="flex justify-start gap-x-2 mt-4">
            <div className="flex w-[300px] hidden sm:block">
              <input
                type="text"
                className=" w-full py-3 px-4 bg-[#181A20] rounded-[10px] border border-gray-600 hover:border-[#fcd535] outline-none text-sm"
                placeholder="Email / Phone number"
              />
            </div>
            <a
              href="#"
              className="inline-block py-2 px-4 lg:px-10 bg-[#fcd535] hover:bg-[#CEAF30] text-black text-base rounded-lg"
            >
              Sign Up
            </a>
          </div>
          <div className="hidden sm:flex  gap-6 mt-4 lg:mt-32 text-sm text-[#848e9c]">
            <div className="flex flex-col">
              <p>Or Continue With</p>
              <div className="flex flex-row gap-2">
                <a
                  href="#"
                  className="rounded-[10px] border border-gray-600 py-[11px] px-[11px] mt-4 hover:bg-[#272C34]"
                >
                  <img src={GoogleIcon} alt="" className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="rounded-[10px] border border-gray-600 py-[11px] px-[11px] mt-4 hover:bg-[#272C34]"
                >
                  <img src={AppleIcon} alt="" className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="flex flex-col">
              <p>Download App</p>
              <div className="flex flex-row gap-2">
                <a
                  href="#"
                  className="rounded-[10px] border border-gray-600 py-[11px] px-[11px] mt-4 hover:bg-[#272C34]"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm11 0h-2v4h4v-2h3v-2h-4v2h-1v-2zm5 3h-2v2h-2v2h4v-4zm-5 2h-2v2h2v-2zM13 4h7v7h-7V4zM8.5 6.5h-2v2h2v-2zm-2 9h2v2h-2v-2zm11-9h-2v2h2v-2z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <CryptoSection />
      </div>
      <DownloadSection />
      <FAQ />
    </div>
  );
}
