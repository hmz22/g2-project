import { gql } from "apollo-server-express";

const MailType = gql`
  type Mail {
    _id: ID
    mailAddress: String
    status: Int
    member: Member
  }
`;

export default MailType;
