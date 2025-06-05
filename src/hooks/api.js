let prices = [
  {
    label: "BTC/USDT",
    logo: "/img/bitcoin.png",
    currentPrice: 30000,
    previousPrice: 30000,
  },
  {
    label: "ETH/USDT",
    logo: "/img/eth.png",
    currentPrice: 2000,
    previousPrice: 2000,
  },
];

export const fetchHotItems = () => {
  prices = prices.map((item) => {
    const fluctuation = Math.random() * 0.04 - 0.02; // от -2% до +2%
    const newPrice = +(item.currentPrice * (1 + fluctuation)).toFixed(2);
    const changePercent = +(
      ((newPrice - item.currentPrice) / item.currentPrice) *
      100
    ).toFixed(2);
    return {
      ...item,
      previousPrice: item.currentPrice,
      currentPrice: newPrice,
      price: newPrice,
      change: changePercent,
    };
  });

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(prices);
    }, 500);
  });
};

// ✅ Добавь этот пустой экспорт, если earn пока не нужен
export const fetchEarnItems = () => {
  return Promise.resolve([
    { asset: "USDT", apr: "3.5%", logo: "/img/bitcoin.png" },
    { asset: "BUSD", apr: "2.8%", logo: "/img/bitcoin.png" },
    { asset: "BUSD", apr: "2.8%", logo: "/img/bitcoin.png" },
    { asset: "BUSD", apr: "2.8%", logo: "/img/bitcoin.png" },
    { asset: "BUSD", apr: "2.8%", logo: "/img/bitcoin.png" },
    { asset: "BUSD", apr: "2.8%", logo: "/img/bitcoin.png" },
  ]);
};
