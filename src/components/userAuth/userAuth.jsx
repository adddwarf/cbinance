import React from "react";

export default function userAuth() {
  return (
    <div className="flex gap-2 text-base">
      <a className="text-white hidden sm:block ">
        <button class="py-1 px-3  rounded-lg border border-transparent  text-white hover:text-gray-400 bg-[#272C34] hover:bg-gray-700 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
          Log In
        </button>
      </a>
      <a className="flex items-center text-white hidden sm:block">
        <button class=" py-1 px-3 rounded-lg border border-transparent text-gray-800 hover:bg-[#CEAF30] bg-[#fcd535] focus:outline-none focus:bg-[]disabled:opacity-50 disabled:pointer-events-none">
          Sign Up
        </button>
      </a>
    </div>
  );
}
