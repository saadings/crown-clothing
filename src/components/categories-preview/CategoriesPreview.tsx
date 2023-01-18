import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category-selector";
import CategoryPreview from "../category-preview/CategoryPreview";

const CategoriesPreview = () => {
  const categoriesMap: any = useSelector(selectCategoriesMap);

  // const { categoriesMap }: any = useContext(CategoriesContext);

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
