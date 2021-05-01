import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectorCartItems } from "../../redux/cart/cart.selector";
import { withRouter } from "react-router-dom";
import { toogleShowCart } from "../../redux/cart/cart.actions";

const CartDropdown = ({ items, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {items.length ? (
        items.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      otherProps={{
        onClick: () => {
          history.push("/checkout");
          dispatch(toogleShowCart());
        },
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => ({ items: selectorCartItems(state) });

export default withRouter(connect(mapStateToProps)(CartDropdown));
