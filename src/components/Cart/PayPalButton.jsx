import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount, onSuccess, onError }) => {
  const clientID = import.meta.env.VITE_PAYPAL_CLIENT_ID || "YOUR_FALLBACK_CLIENT_ID";
  const formattedAmount = isNaN(amount) ? "0.00" : amount.toFixed(2);

  return (
    <PayPalScriptProvider options={{ "client-id": clientID }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [{ amount: { value: parseFloat(formattedAmount).toFixed(2) } }]
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(details => {
            console.log("Payment Approved: ", details);
            onSuccess(details);
          });
        }}
        onError={(err) => {
          console.error("Payment Error: ", err);
          onError(err);
        }}
        data-user-action="true"
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
