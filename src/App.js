import Homepage from "./pages/homepage/homepage.component";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import AuthPage from "./pages/auth/auth.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";
// import { selectorCollections } from "./redux/shop/shop.selectors";

class App extends React.Component {
  firebaseAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;

    checkUserSession();
    // const { setCurrentUser } = this.props;
    // this.firebaseAuth = FirebaseServices.auth.onAuthStateChanged(
    //   async (user) => {
    //     const userRef = await FirebaseServices.createUserProfileDocument(user);
    //     if (userRef) {
    //       userRef.onSnapshot((snapshot) => {
    //         setCurrentUser({ id: snapshot.id, ...snapshot.data() });
    //       });
    //     } else {
    //       setCurrentUser(user);
    //     }
    //   }
    // );
    //This code were used to upload the collections, reasons why we delete the collection array from props
    // FirebaseServices.addCollectionAndDocuments(
    //   "collections",
    //   collections.map(({ title, items }) => ({ title, items }))
    // );
  }

  componentWillUnmount() {
    this.firebaseAuth?.unsubscribeFromAuth();
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

// const mapStateToProps = ({ user }) => {
//   return {
//     currentUser: user.currentUser,
//   };
// };

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collections: selectorCollections,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
