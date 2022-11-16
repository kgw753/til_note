import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID
    name: String
    phone: String
  }
  type Query {
    users: [User]
    userById(id: ID): User
  }
  type Mutation {
    createUser(name: String, phone: String): User
    deleteUserById(id: ID): User
    updateUser(id: ID, name: String, phone: String): User
  }
`;
export default typeDefs;
