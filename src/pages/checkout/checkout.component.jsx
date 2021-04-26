import "./checkout.styles.scss";
import { connect } from "react-redux";
import {
  selectorCartItems,
  selectorCartTotal,
} from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component"; 

const CheckoutPage = ({ items, total }) => (
  <div className="checkout-page">
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
    {items.map((item) => (
      <CheckoutItem
        key={item.id}
        name={item.name}
        imageUrl={item.imageUrl}
        price={item.price}
        quantity={item.quantity}
        id={item.id}
      />
    ))}
    <div className="total">TOTAL ${total}</div>
    <StripeCheckoutButton price={total}/>
  </div>
);

const mapStateToProps = createStructuredSelector({
  items: selectorCartItems,
  total: selectorCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
