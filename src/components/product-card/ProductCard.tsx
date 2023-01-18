import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart-actions";
import { selectCartItems } from "../../store/cart/cart-selectors";
import Button, { BUTTON_TYPES_CLASSES } from "../button/Button";
import "./ProductCard.scss";

const ProductCard = ({ product }: any) => {
  const { name, imageUrl, price } = product;
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <>
      <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">${price}</span>
        </div>
        <Button
          buttonType={BUTTON_TYPES_CLASSES.inverted}
          onClick={addProductToCart}
        >
          Add to Cart
        </Button>
      </div>
    </>
  );
};
export default ProductCard;
