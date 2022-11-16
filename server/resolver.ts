import User from "./models/User";

const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find();
      return users;
    },
    userById: async (root: any, args: any) => {
      const user = await User.findById(args.id);
      return user;
    },
  },
  Mutation: {
    createUser: async (root: any, args: any) => {
      const newUser = new User({
        name: args.name,
        phone: args.phone,
      });
      await newUser.save();
      return newUser;
    },

    deleteUserById: async (root: any, args: any) => {
      return User.findByIdAndDelete(args.id);
    },

    updateUser: async (root: any, args: any) => {
      const { id, name, phone } = args;
      const updatedUser = { name, phone };
      if (name !== undefined) {
        updatedUser.name = name;
      }
      if (phone !== undefined) {
        updatedUser.phone = phone;
      }
      const user = await User.findByIdAndUpdate(id, updatedUser, { new: true });
      return user;
    },
  },
};

export default resolvers;
