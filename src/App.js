import Homepage from "./pages/homepage/homepage.component";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import AuthPage from "./pages/auth/auth.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import FirebaseServices from "./services/firebase.services";
import React from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";

class App extends React.Component {
  firebaseAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.firebaseAuth = FirebaseServices.auth.onAuthStateChanged(
      async (user) => {
        const userRef = await FirebaseServices.createUserProfileDocument(user);
        if (userRef) {
          userRef.onSnapshot((snapshot) => {
            setCurrentUser({ id: snapshot.id, ...snapshot.data() });
          });
        } else {
          setCurrentUser(user);
        }
      }
    );
  }

  componentWillUnmount() {
    this.firebaseAuth.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* If you have nested Route, you can't have exact */}
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/auth"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <AuthPage />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// const mapStateToProps = ({ user }) => {
//   return {
//     currentUser: user.currentUser,
//   };
// };

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
