import { gql } from "@apollo/client";
export const GET_USERS = gql`
  {
    getUsers {
      id
      name
      phone
    }
  }
`;
export const GET_USER = gql`
  query getUserById($id: ID) {
    getUserById(id: $id) {
      id
      name
      phone
    }
  }
`;
