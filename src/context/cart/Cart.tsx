import { createContext, useEffect, useState } from "react";

/**
 * * Helper Functions
 * @param cartItems
 * @param productToAdd
 * @returns
 */
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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: (state: any) => {},
  cartItems: [],
  addItemToCart: (product: any) => {},
  removeItemFromCart: (product: any) => {},
  clearItemFromCart: (product: any) => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }: any) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<any>([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total: any, cartItem: any) => total + cartItem.quantity,
      0
    );

    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total: any, cartItem: any) => total + cartItem.quantity * cartItem.price,
      0
    );

    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd: any) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove: any) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (productToClear: any) => {
    setCartItems(clearCartItem(cartItems, productToClear));
  };

  const value: any = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return (
    <>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </>
  );
};
