import { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What is a cryptocurrency exchange?",
    answer:
      "Cryptocurrency exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and Tether. The Binance exchange is the largest crypto exchange by trade volume.",
  },
  {
    id: 2,
    question: "How do I create an account?",
    answer:
      "To create an account, go to the sign-up page, fill in your email and password, then verify your identity through email or SMS.",
  },
  {
    id: 3,
    question: "Is my crypto safe?",
    answer:
      "Most exchanges offer two-factor authentication and store funds in secure cold wallets. However, users should also take their own security measures.",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="py-20 flex flex-col  px-4">
      <h2 className="text-center text-white text-4xl font-semibold">
        Frequently Asked Questions
      </h2>

      <div className="text-white mt-12 space-y-8">
        {faqData.map((item) => {
          const isOpen = openItems.includes(item.id);

          return (
            <div key={item.id}>
              <button
                onClick={() => toggleItem(item.id)}
                className="flex justify-between items-center w-full text-left cursor-pointer"
              >
                <div className="flex gap-4 items-center text-xl font-medium">
                  <span className="rounded-lg border border-[#2B3139] py-[2px] px-3 text-white text-base">
                    {item.id}
                  </span>
                  <span className="text-white">{item.question}</span>
                </div>

                {/* Иконка: стили можно кастомизировать по isOpen */}
                <span
                  className={`w-8 h-8 flex items-center justify-center  font-bold text-2xl ${
                    isOpen
                      ? "bg-[#fcd535] text-black rounded-2xl"
                      : "hover:text-gray-600 text-white"
                  }`}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="mt-2 px-14 text-base text-[#B7BDC6]">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
