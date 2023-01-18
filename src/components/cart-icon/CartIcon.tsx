import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart-actions";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart-selectors";

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./CartIconStyles";

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();

  const toggleCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
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
