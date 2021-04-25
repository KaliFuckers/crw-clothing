import "./checkout-item.styles.scss";
import {
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CheckoutItem = ({
  name,
  quantity,
  price,
  imageUrl,
  deleteItem,
  id,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseQuantity(id)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => increaseQuantity(id)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => deleteItem(id)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(deleteItem(id)),
  increaseQuantity: (id) => dispatch(increaseQuantity(id)),
  decreaseQuantity: (id) => dispatch(decreaseQuantity(id)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
