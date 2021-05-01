// import "./header.styles.scss";
import {
  OptionsContainer,
  HeaderContainer,
  LogoContainer,
  OptionLink,
} from "./header.styles";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import FirebaseService from "../../services/firebase.services";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectorHideCartComponent } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        // Quiero usar un div pero con los estilos de OptionLink
        <OptionLink as="div" onClick={() => FirebaseService.auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/auth">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {!hidden ? <CartDropdown /> : null}
  </HeaderContainer>
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
  hidden: selectorHideCartComponent,
});

export default connect(mapStateToProps)(Header);
