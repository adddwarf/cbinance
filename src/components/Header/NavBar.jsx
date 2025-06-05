// src/components/Navbar.jsx
import DropdownMenu from "./DropdownMenu";
import {
  HiTrendingUp,
  HiLightningBolt,
  HiCurrencyDollar,
  HiChartPie,
  HiCreditCard,
} from "react-icons/hi";
import BinanceLogo from "../../assets/img/binance-logo-white.png";

const tradeItems = [
  {
    icon: <HiTrendingUp />,
    name: "Spot",
    description: "Trade on the Spot market",
    href: "/spot",
  },
  {
    icon: <HiLightningBolt />,
    name: "Margin",
    description: "Trade with leverage",
    href: "/margin",
  },
  {
    icon: <HiCurrencyDollar />,
    name: "P2P",
    description: "Buy & sell with local currency",
    href: "/p2p",
  },
];

const marketsItems = [
  {
    icon: <HiChartPie />,
    name: "Overview",
    description: "Real-time market data",
    href: "/markets",
  },
  {
    icon: <HiCreditCard />,
    name: "Convert",
    description: "Quickly convert between assets",
    href: "/convert",
  },
];
const earnItems = [
  {
    icon: <HiChartPie />,
    name: "Overview",
    description: "Real-time market data",
    href: "/earn",
  },
  {
    icon: <HiCreditCard />,
    name: "Convert",
    description: "Quickly convert between assets",
    href: "/convert",
  },
];

export default function NavBar() {
  return (
    <nav className="flex items-center gap-4 text-sm shrink-0">
      <a href="#" class="text-white block">
        <img class="h-16" src={BinanceLogo} alt="Binance Logo"></img>
      </a>
      <div className="hidden lg:flex  gap-4">
        <DropdownMenu label="Buy Crypto" items={tradeItems} />
        <DropdownMenu label="Trade" items={tradeItems} />
        <DropdownMenu label="Futures" items={marketsItems} />
        <DropdownMenu label="Earn" items={marketsItems} />
        <DropdownMenu label="Square" items={marketsItems} />
        <DropdownMenu label="Markets" items={marketsItems} />
        <DropdownMenu label="More" items={marketsItems} />
      </div>

      {/* Можно добавить другие секции: Futures, Earn и т.д. */}
    </nav>
  );
}
