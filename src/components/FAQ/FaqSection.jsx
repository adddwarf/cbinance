import FAQ from "./FAQ";

export default function FAQSection() {
  return (
    <div className="py-20 px-4">
      <h2 className="text-center text-white text-4xl font-semibold">
        Frequently Asked Questions
      </h2>

      <div className="mt-8 space-y-4">
        <FAQ
          number="1"
          question="What is a cryptocurrency exchange?"
          answer={
            <>
              <span className="text-[#fcd535] font-medium">Cryptocurrency</span>{" "}
              exchanges are digital marketplaces that enable users to buy and
              sell cryptocurrencies like{" "}
              <span className="text-[#fcd535] font-medium">Bitcoin</span>,{" "}
              <span className="text-[#fcd535] font-medium">Ethereum</span>, and{" "}
              <span className="text-[#fcd535] font-medium">Tether</span>. The
              Binance exchange is the largest crypto exchange by trade volume.
            </>
          }
        />
        {/* Добавь другие вопросы по аналогии */}
        <span className="text-[#fcd535] font-medium">Bitcoin</span>,{" "}
        <p>dkjfdldlfkj</p>
      </div>
    </div>
  );
}
