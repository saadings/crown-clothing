import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./NavigationBarStyles";
import { Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../context/user/user";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { CartContext } from "../../context/cart/Cart";

const NavigationBar = () => {
  const { currentUser }: any = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const handleSignOut = async () => {
    await signOutUser();
    // setCurrentUser(null);
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={handleSignOut}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}

          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
    </>
  );
};

export default NavigationBar;
