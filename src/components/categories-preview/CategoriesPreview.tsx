import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/category-selector";
import CategoryPreview from "../category-preview/CategoryPreview";
import Spinner from "../spinner/Spinner";

const CategoriesPreview = () => {
  const categoriesMap: any = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  // const { categoriesMap }: any = useContext(CategoriesContext);

  return (
    <>
      <>
        {isLoading ? (
          <Spinner />
        ) : (
          Object.keys(categoriesMap).map((title: any) => {
            const products = categoriesMap[title];
            return (
              <CategoryPreview key={title} title={title} products={products} />
            );
          })
        )}
      </>
    </>
  );
};

export default CategoriesPreview;
