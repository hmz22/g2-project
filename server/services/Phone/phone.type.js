import { gql } from "apollo-server-express";

const PhoneType = gql`
  type Phone {
    _id: ID
    phoneType: Int
    phone: String
    member: Member
    status: Int
  }

  extend type Query {
    phones(memberId: ID!): [Phone]
  }
`;

export default PhoneType;
