const dailyQuotes = [
    {
      ticker: {ticker: 'AAPL'},
      date: new Date(),
      close: 11.14,
      open: 10.50,
      low: 10.15,
      high: 11.15,
      volume: 15000,
    },
    {
      ticker: {ticker: 'AAPL'},
      date: new Date(),
      close: 11.14,
      open: 10.50,
      low: 10.15,
      high: 11.15,
      volume: 15000,
    },
  ];
  

module.exports = {
    Query: {
      quotes: () => dailyQuotes,
    },
};
  