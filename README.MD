#  Chartviz

Backend for ChartViz, Daily Stockcharts for top 500 traded companies.

# Configuration and Setup...

This app is supported by an AWS RDS postgres instance.  Credentials should be placed in src/config/rds.js and named like this:

module.exports.APP_ENV = APP_ENV;
module.exports.RDS_HOSTNAME = RDS_HOSTNAME;
module.exports.RDS_USERNAME = RDS_USERNAME;
module.exports.RDS_PASSWORD = RDS_PASSWORD;
module.exports.RDS_PORT = RDS_PORT;
module.exports.RDS_DB_NAME = RDS_DB_NAME;

Our 3rd party data is supported by a free API key from Alpha Vantage.  Sign up for an API key [here](https://www.alphavantage.co/documentation/). 
Credentials should be placed in src/config/alpha.js and named like this:

module.exports.ALPHA_API_KEY = ALPHA_API_KEY;

# Techs 

Node - Express
GraphQL
AWS RDS Postgresql
Typescript?
Jest

# 3rd Party Data

Daily quotes are available for free with the [Alpha Vantage API](https://www.alphavantage.co/)

# Limitations of 3rd Party Data

Alphavantage will limit us to 500 requests per day at a rate of 5 requests per minute.  We can pull daily quotes for 500 stocks every day.  We can also sign up for a second API key, and get minute by minute data for a single stock.  (e.g. [NASDAQ: LYFT](https://www.google.com/search?q=lyft+google+finance&oq=lyft+google+finance&aqs=chrome.0.0l3.2991j0j4&client=ubuntu&sourceid=chrome&ie=UTF-8))

# Teammates

Project by Niko Skoularikis