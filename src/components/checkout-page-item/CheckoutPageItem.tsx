import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart-actions";
import { selectCartItems } from "../../store/cart/cart-selectors";
import "./CheckoutPageItem.scss";

const CheckoutPageItem = ({ checkoutItem }: any) => {
  const { name, imageUrl, price, quantity } = checkoutItem;

  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, checkoutItem));

  const addItemHandler = () => dispatch(addItemToCart(cartItems, checkoutItem));

  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, checkoutItem));

  return (
    <>
      <div className="checkout-item-container">
        <div className="image-container">
          <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
          <div className="arrow" onClick={removeItemHandler}>
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <div className="arrow" onClick={addItemHandler}>
            &#10095;
          </div>
        </span>
        <span className="price">${price}</span>

        <div className="remove-button" onClick={clearItemHandler}>
          &#10005;
        </div>
      </div>
    </>
  );
};

export default CheckoutPageItem;
