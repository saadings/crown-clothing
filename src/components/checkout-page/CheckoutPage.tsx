import { useContext } from "react";
import { CartContext } from "../../context/cart/Cart";
import "./CheckoutPage.scss";

const CheckoutPage = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <>
      <div>
        <h1>I am the checkout page!</h1>
        {cartItems.map((item: any) => {
          return (
            <div key={item.id}>
              {item.quantity} {item.name}
              <span
                onClick={() => {
                  addItemToCart(item);
                }}
              >
                +
              </span>{" "}
              <span
                onClick={() => {
                  removeItemFromCart(item);
                }}
              >
                -
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CheckoutPage;
