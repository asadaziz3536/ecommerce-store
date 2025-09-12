import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

interface CartItem {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string;
  updatedAt: string;
  quantity?: number;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart:[],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      // if item exists in the cart
      const isItem = state.cart.find((item) => item.id === action.payload.id);

      if (isItem) {
        if (isItem.quantity === undefined) {
          isItem.quantity = 1;
        } else {
          isItem.quantity += 1;
        }
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
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
    deleteFromCart:(state, action:PayloadAction<CartItem>)=>{

      state.cart=state.cart.filter((CartItem,index)=>(
        CartItem.id!==action.payload.id
      ))

    },

    clearCart: (state, action: PayloadAction<CartItem>) => {
      state.cart = [];
    },
  },
});


export const {addToCart, removeFromCart, deleteFromCart, clearCart}=cartSlice.actions;


export default cartSlice.reducer;



