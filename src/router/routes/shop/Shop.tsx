import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../../../components/categories-preview/CategoriesPreview";
import Category from "../../../components/category/Category";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
