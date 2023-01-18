import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import {
  CartDropdownContainer,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./CartDropdownStyles";
import { selectCartItems } from "../../store/cart/cart-selectors";

const CartDropdown = () => {
  const navigate = useNavigate();

  const cartItems = useSelector(selectCartItems);

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
