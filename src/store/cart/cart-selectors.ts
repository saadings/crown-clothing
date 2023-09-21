import { CartState } from "./cart-reducer";
import { createSelector } from "reselect";

const selectCartReducer = (state: any): CartState => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total: any, cartItem: any) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total: any, cartItem: any) => total + cartItem.quantity * cartItem.price,
    0
  )
);
