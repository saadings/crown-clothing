import { createContext, useState } from "react";
import PRODUCTS from "../../shop-data.json";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }: any) => {
  const [products, setProducts] = useState(PRODUCTS);

  const value: any = { products, setProducts };

  return (
    <>
      <ProductsContext.Provider value={value}>
        {children}
      </ProductsContext.Provider>
    </>
  );
};
