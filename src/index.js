import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
  type Query {
    greeting(name: String): String!
    me: User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }
`;

const resolvers = {
  Query: {
    greeting(parent, args, ctx, info) {
      return `Hello ${args.name}`;
    },
    me() {
      return {
        id: "123",
        name: "Simon",
        email: "231@wea",
      };
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("server up!");
});
