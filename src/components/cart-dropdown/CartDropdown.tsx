import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart/Cart";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import "./CartDropdown.scss";

const CartDropdown = () => {
  const navigate = useNavigate();

  const { cartItems } = useContext(CartContext);

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <>
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((cartItem: any) => {
            return <CartItem key={cartItem.id} cartItem={cartItem} />;
          })}
        </div>
        <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
      </div>
    </>
  );
};

export default CartDropdown;
