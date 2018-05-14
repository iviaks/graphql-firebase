const bodyParser = require('body-parser');
const express = require('express');
const graphqlExpress = require('graphql-server-express').graphqlExpress;
const graphiqlExpress = require('graphql-server-express').graphiqlExpress;
const printSchema = require('graphql/utilities/schemaPrinter').printSchema;

const schema = require('./data/schema');

const setupGraphQLServer = () => {
  // setup server
  const graphQLServer = express();

  // /api/graphql
  graphQLServer.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({ schema, context: {} })
  );

  // /api/graphiql
  graphQLServer.use(
    '/graphiql',
    graphiqlExpress({ endpointURL: '/api/graphql' })
  );

  // /api/schema
  graphQLServer.use('/schema', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send(printSchema(schema));
  });

  return graphQLServer;
};

module.exports = setupGraphQLServer;
