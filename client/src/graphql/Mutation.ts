import { gql } from "@apollo/client";
export const CREATE_USER = gql`
  mutation createUser($name: String, $phone: String) {
    createUser(name: $name, phone: $phone) {
      id
      name
      phone
    }
  }
`;
export const DELETE_USER = gql`
  mutation deleteUserById($id: ID) {
    deleteUserById(id: $id)
  }
`;
export const UPDATE_USER = gql`
  mutation updateUser($id: ID, $name: String, $phone: String) {
    updateUser(id: $id, name: $name, phone: $phone) {
      id
      name
      phone
    }
  }
`;
