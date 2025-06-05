import Bitcoin from "../../assets/img/bitcoin.png";
import Ethereum from "../../assets/img/eth.png";
import Solana from "../../assets/img/solana.png";
import React, { useState, useEffect } from "react";
import NewDashboard from "./NewDashboard";

const initialPopularList = [
  {
    id: 1,
    symbol: "BTC",
    name: "Bitcoin",
    icon: Bitcoin,
    price: 93700,
    change: 1.2,
  },
  {
    id: 2,
    symbol: "ETH",
    name: "Ethereum",
    icon: Ethereum,
    price: 1200,
    change: 0.5,
  },
  {
    id: 3,
    symbol: "SOL",
    name: "Solana",
    icon: Solana,
    price: 600,
    change: 0.2,
  },
];

const initialNewListing = [
  {
    id: 4,
    symbol: "ARB",
    name: "Arbitrum",
    icon: Solana,
    price: 100,
    change: 0.3,
  },
  {
    id: 5,
    symbol: "OP",
    name: "Optimism",
    icon: Ethereum,
    price: 50,
    change: 0.1,
  },
  { id: 6, symbol: "SUI", name: "Sui", icon: Bitcoin, price: 0.6, change: 0.1 },
];

function updatePrices(list) {
  return list.map((item) => {
    const direction = Math.random() > 0.5 ? 1 : -1;
    const percentChange = direction * (Math.random() * 0.001); // до ±0.2%
    const newPrice = item.price * (1 + percentChange);

    return {
      ...item,
      price: parseFloat(newPrice.toFixed(2)),
      change: parseFloat((percentChange * 100).toFixed(2)),
      color: percentChange >= 0 ? "text-green-500" : "text-red-500",
    };
  });
}

export default function CryptoSection() {
  const [activeTab, setActiveTab] = useState("popular");
  const [popularList, setPopularList] = useState(initialPopularList);
  const [newListing, setNewListing] = useState(initialNewListing);

  useEffect(() => {
    const interval = setInterval(() => {
      setPopularList((prev) => updatePrices(prev));
      setNewListing((prev) => updatePrices(prev));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const data = activeTab === "popular" ? popularList : newListing;

  return (
    <div class="lg:w-2/5 flex flex-col gap-2">
      <div className="rounded-2xl bg-[#1E2329] text-white px-6 py-3">
        {/* Tabs */}
        <div className="flex gap-4 items-center">
          <button
            className={`relative text-base font-bold  ${
              activeTab === "popular"
                ? "text-white  after:content-[''] after:w-[16px] after:bottom-[-8px] after:absolute after:left-1/2 after:translate-x-[-50%]  after:h-[3px] after:bg-yellow-400"
                : "text-[#848e9c]"
            }`}
            onClick={() => setActiveTab("popular")}
          >
            Popular
          </button>
          <button
            className={`relative text-base font-bold  ${
              activeTab === "new"
                ? "text-white after:content-[''] after:w-[16px] after:bottom-[-8px] after:absolute after:left-1/2 after:translate-x-[-50%]  after:h-[3px] after:bg-yellow-400"
                : "text-[#848e9c] "
            }`}
            onClick={() => setActiveTab("new")}
          >
            New Listing
          </button>
          <a
            href="#"
            className="hover:text-gray-300 flex flex-1 justify-end items-center text-sm text-gray-400"
          >
            View All 350+ Coins{" "}
            <svg
              className="mt-2 h-[16px] w-[16px]"
              size="16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>

        {/* Content */}
        <div className="mt-6 space-y-4">
          {data.map((item) => (
            <a
              key={item.id}
              href="#"
              className="flex justify-between items-center w-full"
            >
              <div className="w-[49%] flex items-center gap-2">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-[28px] h-[28px]"
                />
                <div className="font-semibold">{item.symbol}</div>
                <div className="text-sm text-[#848e9c]">{item.name}</div>
              </div>
              <div className="flex flex-1 justify-end">${item.price}</div>
              <div className={`flex flex-1 justify-end ${item.color}`}>
                {item.change}%
              </div>
            </a>
          ))}
        </div>
      </div>
      <NewDashboard />
    </div>
  );
}
