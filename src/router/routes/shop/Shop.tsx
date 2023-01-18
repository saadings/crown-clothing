import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../../../components/categories-preview/CategoriesPreview";
import Category from "../../../components/category/Category";

import { setCategories } from "../../../store/categories/category-action";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      // setProducts(categoryMap);
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    // <CategoriesProvider>
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
    // </CategoriesProvider>
  );
};

export default Shop;
