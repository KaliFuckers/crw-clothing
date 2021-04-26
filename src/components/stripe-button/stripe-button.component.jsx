import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful");
  };

  //stripe only accept cents price
  const priceEnCents = price * 100;
  const publishableKey =
    "pk_test_51IkKqIK8sgxtBpzaUmDCTVT1OJuwQPXgJEy862TK4zTOsO0jsvdaIcCXRaVnZTJFOx6HuzfGbW51lRrEyAGoVmeO003jChJ6eN";
  return (
    <StripeCheckout
      stripeKey={publishableKey}
      amount={priceEnCents}
      label="Pay Now"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      panelLabel="Pay Now"
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
