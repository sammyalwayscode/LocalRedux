import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
  details: null,
};

const Action = createSlice({
  name: "Action",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.products = payload;
    },

    addToCart: (state, { payload }) => {
      const cartValue = state.cart.findIndex((el) => el.id === payload.id);

      if (cartValue >= 0) {
        state.cart[cartValue].QTY += 1;
      } else {
        const addCart = { ...payload, QTY: 1 };
        state.cart.push(addCart);
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload.id);
    },

    viewDetail: (state, { payload }) => {
      state.details = payload;
    },

    handleQTY: (state, { payload }) => {
      const cartValue = state.cart.findIndex((el) => el.id === payload.id);
      if (state.cart[cartValue].QTY >= 1) {
        state.cart[cartValue].QTY -= 1;
      } else if (state.cart[cartValue].QTY === 1) {
        state.cart = state.cart.filter((item) => item.id !== payload.id);
      }
    },

    totalValue: (state, { payload }) => {
      let { totalCost, totalQTY } = state.cart.reduce(
        (displayItem, displayCart) => {
          const { price, QTY } = displayCart;
          const totalPrice = price * QTY;

          displayItem.totalQTY += QTY;
          displayItem.totalCost += totalPrice;

          return displayItem;
        },
        { totalCost: 0, totalQTY: 0 }
      );
      state.totalValuePrice = totalCost;
      state.totalValueQTY = totalQTY;
    },
  },
});

export const {
  addProduct,
  addToCart,
  removeFromCart,
  viewDetail,
  handleQTY,
  totalValue,
} = Action.actions;
export default Action.reducer;
