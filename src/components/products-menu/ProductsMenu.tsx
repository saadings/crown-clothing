import "./ProductsMenu.scss";
import { useContext } from "react";
import { ProductsContext } from "../../context/products/product";
import ProductCard from "../product-card/ProductCard";

const ProductsMenu = () => {
  const { products }: any = useContext(ProductsContext);

  return (
    <>
      <div className="products-container">
        {products?.map((product: any) => {
          return (
            <>
              <ProductCard key={product.id} product={product} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductsMenu;
