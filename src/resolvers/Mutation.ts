import { isNonNullType } from "graphql"
const { v4: uuid} = require('uuid');

export const Mutation = {
    addCategory: (parent, {input}, {db}) => {
        const {name} = input;
        const newCat = {
            id: uuid(),
            name: name
        }
        db.categories.push(newCat);
        return newCat;
    }
}