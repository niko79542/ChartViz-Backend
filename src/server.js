const express = require('express');
const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./controllers/graphql/resolvers');
const typeDefs = require('./controllers/graphql/types');

const db = require('./models');
const config = require('./config/config');


db.sequelize.sync({force: true}).then(() => {
  });

const server = new ApolloServer({ typeDefs,
     resolvers,
     context: { db }
  });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen(config.server.port).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});