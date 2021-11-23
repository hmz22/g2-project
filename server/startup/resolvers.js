import glob from "glob";
import path from "path";
import _ from "lodash";

const res = [];

glob.sync("./services/**/*.resolver.js").forEach((file) => {
  return res.push(require(path.resolve(file)).default);
});

const resolvers = _.merge.apply(_, res);

export { resolvers };
