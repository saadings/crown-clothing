import { useContext } from "react";
import { CategoriesContext } from "../../context/categories/Categories";
import CategoryPreview from "../category-preview/CategoryPreview";

const CategoriesPreview = () => {
  const { categoriesMap }: any = useContext(CategoriesContext);

  return (
    <>
      <>
        {Object.keys(categoriesMap).map((title: any) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })}
      </>
    </>
  );
};

export default CategoriesPreview;
