import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: (state: any) => {},
});

export const CartProvider = ({ children }: any) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const value: any = { isCartOpen, setIsCartOpen };

  return (
    <>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </>
  );
};
