import { PhoneModel } from "../Phone/phone.model";

const phoneResolver = {
  Query: {
    phones: async (_, args) => {
      return await PhoneModel.find({ memberId: args.memebrId });
    },
  },
};

export default phoneResolver;
