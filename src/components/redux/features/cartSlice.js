import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items: [],
   totalprice: 0
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      add(state, action) {
         const item = state.items.find((item) => item.id === action.payload.id);
         if (item) {
            item.quantity += 1;
         } else {
            state.items.push({ ...action.payload, quantity: 1 });
         }
      },
      remove(state, action) {
         state.items = state.items.filter((item) => item.id !== action.payload.id);
      },
      updateQuantity(state, action) {
         const { id, quantity } = action.payload;
         const item = state.items.find((item) => item.id === id);
         if (item) {
            item.quantity = quantity;
         }
      },
   },
});

export const { add, remove, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
