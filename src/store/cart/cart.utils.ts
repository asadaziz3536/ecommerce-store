import {CartItem, Product} from "./cartSlice"

export const apiProductToCartItem =(product:any):CartItem=>({
    ...product, 
    slug:product.slug??"",
     creationAt: product.creationAt??"",
  updatedAt: product.updatedAt??"",
    category:{
        ...product.category,
        slug:product.category.slug??"",
         creationAt: product.category.creationAt??"",
  updatedAt: product.category.updatedAt??""
    },
    quantity:1
})