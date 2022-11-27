import {db} from '../db';

export const Product = {
    reviews: ({id: productId}, args, {db}) => {
        return db.reviews.filter(prd => prd.productId === productId);
    }
}