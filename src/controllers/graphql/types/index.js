const { gql } = require('apollo-server');

module.exports = gql`
scalar Date

type Ticker {
    ticker: String!
    dailyquotes: [DailyQuote]
}

type DailyQuote {
    mmddyy: String!
    close: Float!
    open: Float!
    high: Float!
    low: Float!
    volume: Float!
    symbol: Ticker!

}

type Query {
    quotes: [DailyQuote]
}
`;