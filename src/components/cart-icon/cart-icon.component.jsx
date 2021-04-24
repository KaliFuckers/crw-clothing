import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toogleShowCart } from "../../redux/cart/cart.actions";

import "./cart-icon.styles.scss";

const CartIcon = ({ toogleShowCart }) => (
  <div className="cart-icon" onClick={toogleShowCart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toogleShowCart: () => dispatch(toogleShowCart()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
