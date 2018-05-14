const https = require('firebase-functions').https;
const setupGraphQLServer = require('./graphql/server');
const admin = require('firebase-admin');
admin.initializeApp();

/* CF for Firebase with graphql-server-express */
const graphQLServer = setupGraphQLServer();

exports.api = https.onRequest(graphQLServer);
