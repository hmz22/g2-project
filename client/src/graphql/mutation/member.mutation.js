import { gql } from "@apollo/client";

export const ADD_MEMBER = gql`
  mutation AddMember($myInput: MemberInput!) {
    addMember(input: $myInput) {
      _id
      firstname
      lastname
      birthdate
    }
  }
`;

export const UPDATE_MEMBER = gql`
  mutation UPDATE_MEMBER($id: ID!, $input: MemberInput!) {
    updateMember(id: $id, input: $input) {
      _id
      firstname
      lastname
      birthdate
    }
  }
`;

export const DELETE_MEMBER = gql`
  mutation DeleteMember($id: ID!) {
    deleteMember(id: $id)
  }
`;
