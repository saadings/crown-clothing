import { useState } from "react";
import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart-selectors";
import { selectCurrentUser } from "../../store/user/user-selector";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPES_CLASSES } from "../button/Button";
import { FormContainer, PaymentFormContainer } from "./PaymentFormStyled";
import axios from "axios";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] =
    useState<boolean>(false);

  const paymentHandler = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);
    const response = await axios
      .post("/.netlify/functions/create-payment-intent", {
        amount: amount * 100,
      })
      .then((res) => res.data);

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
        billing_details: {
          name: currentUser ? currentUser?.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };

  return (
    <>
      <PaymentFormContainer>
        <FormContainer onSubmit={paymentHandler}>
          <h2>Credit Card Payment</h2>
          <CardElement />
          <Button
            disabled={isProcessingPayment}
            buttonType={BUTTON_TYPES_CLASSES.inverted}
          >
            Pay Now
          </Button>
        </FormContainer>
      </PaymentFormContainer>
    </>
  );
};

export default PaymentForm;
