import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  order: [],
  userData: [],
};

const hotelState = createSlice({
  name: "Hotel",
  initialState,
  reducers: {
    addData: (state, { payload }) => {
      state.userData.push({ ...payload });
    },

    addProduct: (state, { payload }) => {
      state.products = payload;
    },
    addQty: (state, { payload }) => {
      const check = state.order.findIndex((el) => el.id === payload.id);
      if (check >= 0) {
        state.order[check].days += 1;
      } else {
        const addValue = {
          ...payload,
          days: 1,
        };
        state.order.push(addValue);
      }
    },
    reduceQty: (state, { payload }) => {
      const check = state.order.findIndex((el) => el.id === payload.id);
      let checkValue = state.order[check].qty;

      if (state.order[check].qty > 1) {
        state.order[check].qty -= 1;
      } else if (checkValue === 1) {
        state.order = state.order.filter((fl) => fl.id !== payload.id);
      }
    },
    removeOrder: (state, { payload }) => {
      state.order = state.order.filter((fl) => fl.id !== payload.id);
    },

    totalOrder: (state, { payload }) => {
      const { totalCost, totalQty } = state.order.reduce(
        (mainCost, allCost) => {
          const { price, qty } = allCost;
          const totalPrice = price * qty;
          mainCost.totalCost += totalPrice;
          mainCost.totalQty += qty;

          return mainCost;
        },
        { totalCost: 0, totalQty: 0 }
      );
      state.totalMealCost = totalCost;
      state.totalMealQty = totalQty;
    },
  },
});

export const {
  addBooking,
  addQty,
  reduceQty,
  addProduct,
  removeOrder,
  totalOrder,
  addData,
} = hotelState.actions;
export default hotelState.reducer;