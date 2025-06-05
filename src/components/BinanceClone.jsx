import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import Header from "./Header/Header";
import MainSection from "./MainSection";
import SignUpSection from "./SignUpSection";
import Footer from "./Footer/Footer";
import Copyright from "./Copyright";
import { motion } from "framer-motion";

const cryptocurrencies = [
  { name: "Bitcoin", symbol: "BTC", price: "$65,432" },
  { name: "Ethereum", symbol: "ETH", price: "$3,214" },
  { name: "BNB", symbol: "BNB", price: "$412" },
];

export default function BinanceClone() {
  return (
    <div className="min-h-screen sm:bg-[#181A20] bg-[#181E25] text-white">
      {/* Header */}
      <Header />
      <MainSection />
      <SignUpSection />
      <Footer />
      <Copyright />

      {/* Crypto Cards */}
    </div>
  );
}
