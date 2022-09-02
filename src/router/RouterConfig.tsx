/**
 * ? BrowserRouter behaves like the natural browser
 * ? It is a component and it saves history
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import AuthenticationRoute from "./routes/authentication-route/AuthenticationRoute";
import Shop from "./routes/shop/Shop";
import { UserProvider } from "../context/user/user";
import { ProductsProvider } from "../context/products/product";
import { CartProvider } from "../context/cart/Cart";
import Checkout from "./routes/checkout/Checkout";

const RouterConfig = () => {
  return (
    <Router>
      {/* // ? anything inside provider, the context can be accessed */}
      <UserProvider>
        {/* // ? based on the user, the products might change hence providing
            // ? the product provider inside the user
        */}
        <ProductsProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="auth" element={<AuthenticationRoute />} />
                <Route path="checkout" element={<Checkout />} />
              </Route>
            </Routes>
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </Router>
  );
};

export default RouterConfig;
