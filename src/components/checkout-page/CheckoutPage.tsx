import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart-selectors";
import CheckoutPageItem from "../checkout-page-item/CheckoutPageItem";
import "./CheckoutPage.scss";
import PaymentForm from "../payment-form/PaymentForm";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <>
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>

        {cartItems.map((checkoutItem: any) => {
          return (
            <CheckoutPageItem
              key={checkoutItem.id}
              checkoutItem={checkoutItem}
            />
          );
        })}
        <span className="total">Total: ${cartTotal}</span>
        <PaymentForm />
      </div>
    </>
  );
};

export default CheckoutPage;
