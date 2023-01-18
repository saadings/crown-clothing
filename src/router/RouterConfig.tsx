/**
 * ? BrowserRouter behaves like the natural browser
 * ? It is a component and it saves history
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";

import { useEffect } from "react";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import AuthenticationRoute from "./routes/authentication-route/AuthenticationRoute";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";
import { setCurrentUser } from "../store/user/user-action";

const RouterConfig = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: any) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    });

    // ? remove observer from the stream
    return unsubscribe;
  }, [dispatch]);

  return (
    <Router>
      {/* // ? anything inside provider, the context can be accessed */}
      {/* <UserProvider> */}
      {/* // ? based on the user, the products might change hence providing
            // ? the product provider inside the user
          */}
      {/* <CategoriesProvider> */}
      {/* <CartProvider> */}
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<AuthenticationRoute />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
      {/* </CartProvider> */}
      {/* </CategoriesProvider> */}
      {/* </UserProvider> */}
    </Router>
  );
};

export default RouterConfig;
