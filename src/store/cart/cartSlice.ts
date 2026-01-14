import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export  interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}


export interface CartItem {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string;
  updatedAt: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}

export type Product=Omit<CartItem, "quantity">;
const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product | CartItem>) => {
      const item = action.payload;
      // if item exists in the cart
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );

      const incomingQuantity =
        "quantity" in item && item.quantity ? item.quantity : 1;

      if (existingItem) {
        existingItem.quantity += incomingQuantity;
      } else {
        state.cart.push({
          ...item,
          quantity: incomingQuantity,
        } as CartItem);
      }
    },

    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      const isItem = state.cart.find((item) => item.id === action.payload.id);

      if (isItem) {
        if (isItem.quantity && isItem.quantity > 1) {
          isItem.quantity -= 1;
        } else {
          state.cart = state.cart.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(
        (item, index) => item.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, deleteFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
