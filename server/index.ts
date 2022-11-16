import { gql } from "apollo-server-express";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import typeDefs from "./typeDefs";
import resolvers from "./resolver";

const main = async () => {
  dotenv.config();
  const PORT = process.env.PORT;
  const mongoDbUrl = process.env.MONGODB_URL ?? "";

  const app = express();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () =>
    console.log(`Express server is running on port ${PORT}`)
  );

  await mongoose.connect(mongoDbUrl);
  console.log(`Connected to MongoDB`);
};

main();
