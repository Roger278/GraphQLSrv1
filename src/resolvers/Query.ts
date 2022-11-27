import {ApolloServer} from "apollo-server";
export const Query = {
    hello: (parent, args, context) => "World!",
    categories: (parent, args, {db}) => db.categories,
    products: (parent, args, {db}) => db.products,
    category: (parent, {id}, {db}) => {
        var cat = db.categories.find(category => category.id === id);
        if (!cat) return null;
        return cat;
    },
    product: (parent, {id}, {db}) => db.products.find(prd => prd.id === id)
}

