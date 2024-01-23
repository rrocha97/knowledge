import { ApolloServer } from "apollo-server-express";
import { readFileSync } from "fs";
import path from "path";
import resolvers from "./resolvers";
import { buildContext } from "graphql-passport";
import { typeDefs as typeDefsSacalars ,resolvers as resolversScalars } from "graphql-scalars";
//typeDefs
const typeDefs = readFileSync(path.join(__dirname, "schema.graphql"), "utf8");

//Resolver

//server
const useGraphql = async (app:any)=>{
  const alltypeDefs = [typeDefs,...typeDefsSacalars]
  const allresolvers = {...resolvers,...resolversScalars}
  const server = new ApolloServer({
    typeDefs: alltypeDefs,
    resolvers: allresolvers,
    context: async ({ req, res }) => buildContext({ req, res }),
  });

  await server.start();
  server.applyMiddleware({app})
}

export default  useGraphql;
