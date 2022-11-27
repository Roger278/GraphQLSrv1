import {db} from '../db';

export const Category = {
    products: ({id: categoryId}, args, {db}) => {
        return db.products.filter(prd => prd.categoryId === categoryId);
    }
}