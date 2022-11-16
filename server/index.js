import { gql } from "apollo-server-express";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolver.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
const apolloServer = new ApolloServer({ typeDefs, resolvers });
await apolloServer.start();
apolloServer.applyMiddleware({ app });

app.listen(PORT, () =>
  console.log(`Express server is running on port ${PORT}`)
);

try {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log(`Connected to MongoDB`);
} catch (error) {
  console.log(error);
}
