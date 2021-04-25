import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import FirebaseService from "../../services/firebase.services";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectorHideCartComponent } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <div className="logo-container">
      <Link to="/">
        <Logo className="logo" />
      </Link>
    </div>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/shop" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => FirebaseService.auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/auth" className="option">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {!hidden ? <CartDropdown /> : null}
  </div>
);

//This can be applied to
// const mapStateToProps = (state) => {
//   return {
//     currentUser: selectCurrentUser(state),
//     hidden: selectorHideCartComponent(state),
//   };
// };

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectorHideCartComponent
});

export default connect(mapStateToProps)(Header);
