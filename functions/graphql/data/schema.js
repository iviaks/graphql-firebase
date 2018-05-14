const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
const resolvers = require('./resolvers');

const schema = `
type User {
  id: Int!
  firstName: String
  lastName: String
}

# the schema allows the following query:
type Query {
  user(id: Int!): User
}
`;

module.exports = makeExecutableSchema({
  typeDefs: schema,
  resolvers
});
