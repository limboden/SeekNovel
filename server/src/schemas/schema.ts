const { gql } = 'require('apollo-server - express')';

const typeDefs = gql`
    type Book {
        bookId: String!
        title: String!
        authors: [String]
        description: String
        image: String
        link: String
    }

    type User {
        id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }

    type Query {
        books: [Book]
        book(id: ID!): Book
    }

    type Mutation {
        addBook(title: String!, author: String!): Book
        updateBook(id: ID!, title: String, author: String): Book
        deleteBook(id: ID!): Book
    }
`;

module.exports = typeDefs;