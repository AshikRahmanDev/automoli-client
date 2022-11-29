import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(`${process.env.REACT_APP_Stipe_pk}`);
console.log(stripePromise);

const Payment = () => {
  const booking = useLoaderData();

  return (
    <div>
      <div>
        {" "}
        <Elements stripe={stripePromise}>
          <PaymentForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
