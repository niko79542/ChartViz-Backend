const { gql } = require('apollo-server');

module.exports = gql`
scalar Date

type Ticker {
    ticker: String
    dailyquotes: [DailyQuote]
}

type DailyQuote {
    date: Date
    close: Float
    open: Float
    high: Float 
    low: Float
    volume: Float
    ticker: Ticker!

}

type Query {
    quotes: [DailyQuote]
}
`;