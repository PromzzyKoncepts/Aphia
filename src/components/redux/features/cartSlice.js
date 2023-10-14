import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      add(state, action) {
         state.push(action.payload); //payload is the item you clicked on (no return statement is needed)
      },
      remove(state, action) {
        return state.filter((item) => item.id !== action.payload); //item.id - id of all the items, action.payload- id of the one clicked on
      },
   },
});

export const { add, remove } = cartSlice.actions; //named export
export default cartSlice.reducer;
// use export default for your reducer and named export for your actions
