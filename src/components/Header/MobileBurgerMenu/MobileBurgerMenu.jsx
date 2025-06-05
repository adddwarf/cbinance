import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const menuItems = [
  { type: "link", label: "Buy Crypto", href: "#" },
  { type: "link", label: "Markets", href: "#" },
  {
    type: "expandable",
    label: "Trade",
    subitems: [
      { label: "Spot", href: "#" },
      { label: "Margin", href: "#" },
    ],
  },
  {
    type: "expandable",
    label: "Futures",
    subitems: [
      { label: "USDT-M Futures", href: "#" },
      { label: "COIN-M Futures", href: "#" },
    ],
  },
  {
    type: "expandable",
    label: "Earn",
    subitems: [
      { label: "Simple Earn", href: "#" },
      { label: "Launchpad", href: "#" },
    ],
  },
  { type: "theme" },
  { type: "link", label: "24/7 Chat Support", href: "#" },
  { type: "link", label: "Download", href: "#" },
  { type: "link", label: "English", href: "#" },
];

export default function MobileBurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button onClick={() => setIsOpen(true)} className="p-2">
        <Bars3Icon className="h-6 w-6 text-white" />
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 bg-[#202630] text-white"
      >
        <div className="absolute top-0 right-0 p-4">
          <button onClick={() => setIsOpen(false)}>
            <XMarkIcon className="h-6 w-6 text-white" />
          </button>
        </div>

        <div className="flex flex-col px-4 pt-20 gap-4">
          {/* Кнопки входа и регистрации */}
          <div className="flex gap-2">
            <button className="flex-1 py-2 bg-[#2B3139] text-white rounded">
              Log In
            </button>
            <button className="flex-1 py-2 bg-[#fcd535] text-black rounded">
              Sign Up
            </button>
          </div>

          {/* Поиск */}
          <input
            className="w-full p-2 rounded bg-[#2B3139] text-sm placeholder-gray-400"
            placeholder="Coin, Function, Announcement"
          />
        </div>

        {/* Список меню */}
        <ul className="flex flex-col gap-2 mt-4">
          {menuItems.map((item, index) => {
            if (item.type === "link") {
              return (
                <li key={index}>
                  <MenuItemWrapper as="a" href={item.href}>
                    {item.label}
                  </MenuItemWrapper>
                </li>
              );
            }

            if (item.type === "expandable") {
              return (
                <li key={index}>
                  <Expandable label={item.label} subitems={item.subitems} />
                </li>
              );
            }

            if (item.type === "theme") {
              return (
                <li key={index}>
                  <MenuItemWrapper className="flex justify-between items-center">
                    <span>Theme</span>
                    <button className="p-1 bg-[#2B3139] rounded">🌙</button>
                  </MenuItemWrapper>
                </li>
              );
            }

            return null;
          })}
        </ul>
      </Dialog>
    </div>
  );
}

function Expandable({ label, subitems = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <MenuItemWrapper
        as="span"
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <span>{label}</span>
        <span className="text-2xl">
          {open ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
        </span>
      </MenuItemWrapper>

      {open && subitems.length > 0 && (
        <ul className="flex flex-col">
          {subitems.map((subitem, i) => (
            <li key={i}>
              <MenuItemWrapper
                as="a"
                href={subitem.href}
                className="pl-8 pr-4 text-sm text-gray-300"
              >
                {subitem.label}
              </MenuItemWrapper>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function MenuItemWrapper({ children, as = "div", className = "", ...props }) {
  const Component = as;

  return (
    <Component
      className={`block py-3 px-4 hover:bg-[#29313D] text-white ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
