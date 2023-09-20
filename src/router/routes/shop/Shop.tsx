import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../../../components/categories-preview/CategoriesPreview";
import Category from "../../../components/category/Category";
import { fetchCategoriesStart } from "../../../store/categories/category-action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
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
