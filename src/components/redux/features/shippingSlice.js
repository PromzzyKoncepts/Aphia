import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: '',
  country: '',
  saveAddress: false,
};

const shippingSlice = createSlice({
  name: 'addressForm',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { updateField } = shippingSlice.actions;
export default shippingSlice.reducer;
