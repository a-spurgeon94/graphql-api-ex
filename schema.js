const { gql } = require('apollo-server');

const typeDefs = gql`
    # Schema | ! = required 
    type Highlight {
        id: ID!
        content: String!
        title: String
        author: String
    }
    type Query {
        highlights: [Highlight]!
        highlight(id: ID!): Highlight
    }
`;

module.exports = typeDefs;