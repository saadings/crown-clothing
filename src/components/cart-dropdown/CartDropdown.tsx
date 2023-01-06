import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart/Cart";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import {
  CartDropdownContainer,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./CartDropdownStyles";

const CartDropdown = () => {
  const navigate = useNavigate();

  const { cartItems } = useContext(CartContext);

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <>
      <CartDropdownContainer>
        <CartItemsContainer>
          {cartItems.length ? (
            cartItems.map((cartItem: any) => {
              return <CartItem key={cartItem.id} cartItem={cartItem} />;
            })
          ) : (
            <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
          )}
        </CartItemsContainer>
        <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
      </CartDropdownContainer>
    </>
  );
};

export default CartDropdown;
