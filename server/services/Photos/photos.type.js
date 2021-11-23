import { gql } from "apollo-server-express";

const PhotoType = gql `
  type Photo {
    _id: ID
    member:Member
    photoname: String
    status:Int
  }
`;

export default PhotoType;