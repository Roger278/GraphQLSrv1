import {ApolloServer, gql} from "apollo-server";
import { typeDefs } from "./schema";
import {Query} from "./resolvers/Query";
import {Category} from './resolvers/Category';
import {Product} from './resolvers/Product';
import {Mutation} from './resolvers/Mutation';
import {db} from './db';

const server = new ApolloServer ({
    typeDefs,
    resolvers: {
        Query,
        Category,
        Product,
        Mutation
    },
    context: {
        db
    }
});

server.listen().then(({url}) => {
    console.log(`Server ready on ${url}`);
});
