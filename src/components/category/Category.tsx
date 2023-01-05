import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/categories/Categories";
import ProductCard from "../product-card/ProductCard";
import "./Category.scss";

const Category = () => {
  const { category }: any = useParams();
  const { categoriesMap }: any = useContext(CategoriesContext);
  // * We can use the bellow syntax but will happen every time component re-renders
  // const product = categoriesMap[category];

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <div className="category-container">
        {products &&
          products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
