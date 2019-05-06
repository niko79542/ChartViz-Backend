const https = require('https'); 
const { ALPHA_API_KEY } = require('../config/alpha');
const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=' + ALPHA_API_KEY;

const alphaClient = async function(ticker, processData) {
    const data = await https.get(url, res => {
        res.setEncoding('utf8');
        let body = '';
        res.on('data', data => {
            body += data;
        });
        res.on('end', () => {
            body = JSON.parse(body); 
            processData(body);
        })
    });
};


module.exports = alphaClient;