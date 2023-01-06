import {
  CartIconContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./CartIconStyles";

import { useContext } from "react";
import { CartContext } from "../../context/cart/Cart";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <CartIconContainer onClick={toggleCartOpen}>
        <ShoppingIcon />
        <ItemCountContainer>{cartCount}</ItemCountContainer>
      </CartIconContainer>
    </>
  );
};

export default CartIcon;
