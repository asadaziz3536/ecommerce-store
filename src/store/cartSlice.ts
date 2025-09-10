import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

interface cartItem {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: category;
  images: string[];
  creationAt: string;
  updatedAt: string;
  quantity?: number;
}

interface CartState {
  items: cartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice=createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cartItem>) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        existing.quantity! += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removefromCart: (state, action: PayloadAction<cartItem>) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        if (existing.quantity! > 1) {
          existing.quantity! -= 1;
        } else {
          state.items.filter((item) => item.id !== action.payload.id);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});


export const {addToCart, removefromCart, clearCart}=cartSlice.actions;


export default cartSlice.reducer;



