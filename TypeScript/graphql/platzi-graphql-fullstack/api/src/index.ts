import {ApolloServer} from 'apollo-server'

//1 type def
const typeDefs = `
type Query {
  info : String!


}

`
// resolvers
const resolvers = {
  Query:{
    info:()=> 'hello from graph'
  }
}
//server
const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url})=>console.log(`running graph api on ${url}`));
