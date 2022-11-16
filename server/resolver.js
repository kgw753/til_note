import User from "./models/User.js";

const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find();
      return users;
    },
    userById: async (root, args) => {
      const user = await User.findById(args.id);
      return user;
    },
  },
  Mutation: {
    createUser: async (root, args) => {
      const newUser = new User({
        name: args.name,
        phone: args.phone,
      });
      await newUser.save();
      return newUser;
    },

    deleteUserById: async (root, args) => {
      return User.findByIdAndDelete(args.id);
    },

    updateUser: async (root, args) => {
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
