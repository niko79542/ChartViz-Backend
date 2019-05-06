const alphaClient = require('./alphavantage'); 
// const TickerService = require('./tickerService');



const updateTickerHistory = () => {
    const test = alphaClient("MSFT");
    console.log(test);
    
};


module.exports = updateTickerHistory;