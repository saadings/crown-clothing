import { Link } from "react-router-dom";
import ProductCard from "../product-card/ProductCard";
import "./CategoryPreview.scss";

const CategoryPreview = ({ title, products }: any) => {
  return (
    <>
      <div className="category-preview-container">
        <Link to={"/shop/" + title.toLowerCase()}>
          <div>
            <h2>
              <span className="title">{title.toUpperCase()}</span>
            </h2>
          </div>
        </Link>

        <div className="preview">
          {products
            .filter((_: any, index: number) => index < 4)
            .map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPreview;
