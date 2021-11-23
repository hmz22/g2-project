import { gql } from "apollo-server-express";
import glob from "glob";
import path from "path";

export const Query = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

const typeDefs = [Query];

glob.sync("./services/**/*.type.js").forEach((file) => {
  typeDefs.push(require(path.resolve(file)).default);
});

export { typeDefs };
