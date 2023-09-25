/**
 * ? BrowserRouter behaves like the natural browser
 * ? It is a component and it saves history
 */
import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase";
import { setCurrentUser } from "../store/user/user-action";

// import Navigation from "./routes/navigation/Navigation";
// import AuthenticationRoute from "./routes/authentication-route/AuthenticationRoute";
// import Shop from "./routes/shop/Shop";
// import Checkout from "./routes/checkout/Checkout";
import Spinner from "../components/spinner/Spinner";

const Navigation = lazy(() => import("./routes/navigation/Navigation"));
const Home = lazy(() => import("./routes/home/Home"));
const Shop = lazy(() => import("./routes/shop/Shop"));
const Checkout = lazy(() => import("./routes/checkout/Checkout"));
const AuthenticationRoute = lazy(
  () => import("./routes/authentication-route/AuthenticationRoute")
);

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
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
  );
};

export default RouterConfig;
