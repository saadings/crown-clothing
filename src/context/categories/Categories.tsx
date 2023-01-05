import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";

// ! Upload Data to Firebase from frontend
// import SHOP_DATA from "../../shop-data";
// import { addCollectionAndDocuments } from "../../utils/firebase/firebase";

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => null,
});

export const CategoriesProvider = ({ children }: any) => {
  // ! Upload Data to Firebase from frontend

  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      // setProducts(categoryMap);
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value: any = { categoriesMap, setCategoriesMap };

  return (
    <>
      <CategoriesContext.Provider value={value}>
        {children}
      </CategoriesContext.Provider>
    </>
  );
};
