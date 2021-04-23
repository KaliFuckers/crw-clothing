import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import FirebaseService from "../../services/firebase.services";
import { connect } from "react-redux";

const Header = ( {currentUser} ) => (
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
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps)(Header);
