import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const PaymentForm = ({ booking }) => {
  console.log(booking);
  const [clientSecret, setClientSecret] = useState("");

  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { resalePrice } = booking.product;
  console.log(resalePrice);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(
      "https://automoli-server-mohammdashik.vercel.app/create-paymet-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("automoliToken"),
        },
        body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error);
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <button
          className="btn btn-sm btn-primary text-white"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError.message}</p>
    </>
  );
};

export default PaymentForm;
