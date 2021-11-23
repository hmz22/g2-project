import { gql } from "apollo-server-express";

const AddressType = gql`
  type Address {
    _id: ID
     address: String
     member: Member
     status: Int
  }
`;

export default AddressType;
