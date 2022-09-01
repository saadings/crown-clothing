import Button from "../button/Button";
import "./ProductCard.scss";

const ProductCard = (props: any) => {
  const { name, imageUrl, price } = props.product;

  return (
    <>
      <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <Button buttonType="inverted">Add to Cart</Button>
      </div>
    </>
  );
};
export default ProductCard;
