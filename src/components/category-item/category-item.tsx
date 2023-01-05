import { Link } from "react-router-dom";
import "./category-item.scss";

const CategoryItem = ({ category }: any) => {
  const { imageUrl, title } = category;
  return (
    <div className="directory-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directory-body-container">
        <Link to={"/shop/" + title.toLowerCase()}>
          <h2>{title.toUpperCase()}</h2>
        </Link>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
