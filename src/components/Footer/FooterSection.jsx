import { useState } from "react";
import { Disclosure } from "@headlessui/react";

const footerSections = [
  {
    title: "About Us",
    links: [
      "About",
      "Careers",
      "Anouncements",
      "News",
      "Press",
      "Legal",
      "Terms",
      "Privacy",
      "Building Trust",
      "Blog",
      "Community",
      "Risk Warning",
      "Notices",
      "Downloads",
      "Desktop Application",
    ],
  },
  {
    title: "Products",
    links: [
      "Exchange",
      "Buy Crypto",
      "Pay",
      "Academy",
      "Live",
      "Tax",
      "Gift Card",
      "Launchpool",
      "Auto Invest",
      "ETH Staking",
      "NFT",
      "BABT",
      "Research",
      "Charity",
    ],
  },
  {
    title: "Business",
    links: [
      "P2P Merchant Application",
      "P2Pro Merchant Application",
      "Listing Application",
      "Institutional & VIP Services",
      "Labs",
      "Binance Connect",
    ],
  },
  {
    title: "Learn",
    // mt: 'mt-11',
    links: [
      "Learn & Earn",
      "Browse Crypto Prices",
      "Bitcoin Price",
      "Etherium Price",
      "Browse Crypto Price Predictions",
      "Bitcoin Price Prediction",
      "Ethereum Price Prediction",
      "Ethereum Upgrade (Pectra)",
      "Buy Bitcoin",
      "Buy BNB",
      "Buy XRP",
      "Buy Dogecoin",
      "Buy Ethereum",
      "Buy Tradable Altcoins",
    ],
  },
  {
    title: "Serivice",
    links: [
      "Affiliate",
      "Referral",
      "OTC Trading",
      "Historical Market Data",
      "Trading Insight",
      "Proof of Reserves",
    ],
  },
  {
    title: "Support",
    // mt: 'mt-10',
    links: [
      "24/7 Chat Support",
      "Support Center",
      "Product Feedback & Suggestions",
      "Fees",
      "APIs",
      "Binance Verify",
      "Trading Rules",
      "Binance Airdrop Portal",
      "Law Enforcement Requests",
    ],
  },
];

const columnGroups = [
  [footerSections[0]], // About Us
  [footerSections[1]], // Products
  [footerSections[2], footerSections[4]], // Business + Learn
  [footerSections[3], footerSections[5]], // Service + Support
];

const FooterSections = () => {
  return (
    <div className="order-1 lg:order-2 flex-1 w-full grid grid-cols-1 sm:grid-cols-4 gap-x-6">
      {columnGroups.map((group, groupIdx) => (
        <div key={groupIdx} className="flex flex-col gap-0">
          {group.map((section, idx) => (
            <div key={idx} className={idx !== 0 ? "mt-0 sm:mt-6" : ""}>
              <AccordionSection title={section.title} links={section.links} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

function AccordionSection({ title, links }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between items-center w-full text-lg font-semibold text-left cursor-default  py-2 sm:py-0">
            {title}
            <span className="text-2xl sm:hidden">{open ? "−" : "+"}</span>
          </Disclosure.Button>

          <Disclosure.Panel
            static
            className={`transition-all duration-300 overflow-hidden sm:block ${
              open ? "max-h-100" : "max-h-0 sm:max-h-none"
            }`}
          >
            <nav className="sm:mt-2 mt-1 px-2 sm:px-0">
              <ul className="flex flex-col gap-2">
                {links.map((text, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-sm font-normal hover:text-yellow-400"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
export default FooterSections;
