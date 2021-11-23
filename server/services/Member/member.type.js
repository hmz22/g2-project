import { gql } from "apollo-server-express";

const MemberType = gql`
  type Member {
    _id: ID
    firstname: String
    lastname: String
    birthdate: String
    phones: [Phone]
  }

  input MemberInput {
    firstname: String
    lastname: String
    birthdate: String
  }

  extend type Query {
    members(name: String): [Member]
    member(memberId: ID!): Member
  }

  extend type Mutation {
    addMember(input: MemberInput!): Member
    updateMember(id: ID!, input: MemberInput!): Member
    deleteMember(id: ID!): Boolean
  }
`;

export default MemberType;
