import { createAction } from "./../../utils/reducer/reducer";
import { CART_ACTION_TYPES } from "./cart-types";

const addCartItem = (cartItems: any, productToAdd: any) => {
  const existingCartItem = cartItems.find((cartItem: any) => {
    return cartItem.id === productToAdd.id;
  });

  if (existingCartItem) {
    return cartItems.map((cartItem: any) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: any, productToRemove: any) => {
  const existingCartItem = cartItems.find(
    (cartItem: any) => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item: any) => existingCartItem.id !== item.id);
  }

  if (existingCartItem) {
    return cartItems.map((cartItem: any) =>
      existingCartItem.id === cartItem.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const clearCartItem = (cartItems: any, productToClear: any) => {
  const existingCartItem = cartItems.find(
    (cartItem: any) => cartItem.id === productToClear.id
  );

  if (existingCartItem) {
    return cartItems.filter(
      (cartItem: any) => cartItem.id !== existingCartItem.id
    );
  }
};

export const setIsCartOpen = (flag: boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, flag);

export const addItemToCart = (cartItems: any, productToAdd: any) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems: any, cartItemToRemove: any) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems: any, cartItemToClear: any) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
