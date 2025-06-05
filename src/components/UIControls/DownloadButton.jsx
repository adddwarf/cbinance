// import React from  'react'
import { Popover } from "@headlessui/react";
import { Download } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import qrcode from "../../assets/qrcode.svg";

export default function DownloadButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover className="relative max-xl:hidden">
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Popover.Button className="relative flex items-center">
          {" "}
          <span className="  overflow-hidden text-white w-6 h-6 hover:text-yellow-400 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.5 6V9H4.5V3H5H7.5H16H19V6V9H16V6H7.5ZM5 21H4.5V15H7.5V18H16V15H19V18V21H16H7.5H5ZM13.5088 12.0024L16.0176 12.0078L12.0088 16.0166L8 12.0078L10.5088 11.9832V8H13.5088V12.0024Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </Popover.Button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 overflow-hidden mt-4 z-80 w-[205px] bg-[#1E2329] rounded-md shadow-lg p-4 border border-[#2B3139]"
            >
              <div className="flex flex-col items-center text-center">
                {/* <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3f/QR_icon.png"
                  alt="QR"
                  className="w-40 h-40 object-contain bg-white p-2 rounded"
                /> */}
                <img className="w-40 h-40 object-contain  bg-white" alt="" />
                <p className="text-sm text-white mt-2">
                  Scan to Download App
                  <br />
                  iOS & Android
                </p>
                <button className="mt-3 px-2 py-2 text-xs font-semibold bg-yellow-400 text-black rounded hover:bg-yellow-500 transition">
                  More Download Options
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Popover>
  );
}
