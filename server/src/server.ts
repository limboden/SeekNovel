import express from 'express';

const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema'); // Import your GraphQL schema
const resolvers = require('./resolvers'); // Import your resolvers

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
});

