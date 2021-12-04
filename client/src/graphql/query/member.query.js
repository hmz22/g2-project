import { gql } from "@apollo/client";

export const GET_MEMBERS = gql`
  query GET_MEMBERS {
    members {
      _id
      firstname
      lastname
      birthdate
    }
  }
`;

export const GET_MEMBER = gql`
  query GET_MEMBER($id: ID!) {
    member(memberId: $id) {
      _id
      firstname
      lastname
      birthdate
    }
  }
`;
