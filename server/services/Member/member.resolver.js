import { PhoneModel } from "../Phone/phone.model";
import { MemberModel } from "./member.model";

const memberResolver = {
  Query: {
    members: async (_, args) => {
      const cond = {};

      if (args.name) {
        cond.lastname = args.name;
      }

      cond.status = { $in: [0, 1] };
      return await MemberModel.find(cond);
    },
    member: async (_, args) => {
      return await MemberModel.findById(args.memberId);
    },
  },
  Mutation: {
    addMember: async (_, args) => {
      return await MemberModel.create({ ...args.input, status: 1 });
    },
    updateMember: async (_, args) => {
      return await MemberModel.findByIdAndUpdate(
        args.id,
        { ...args.input, status: 1 },
        {
          new: true,
        }
      );
    },
    deleteMember: async (_, args) => {
      try {
        await MemberModel.findByIdAndUpdate(
          args.id,
          { status: -1 },
          {
            new: true,
          }
        );

        return true;
      } catch (error) {
        throw new Error("خطا");
      }
    },
  },
  Member: {
    phones: async (parent) => {
      return await PhoneModel.find({ memberId: parent._id });
    },
  },
};

export default memberResolver;
