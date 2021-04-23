import Homepage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import AuthPage from "./pages/auth/auth.component";
import FirebaseServices from "./services/firebase.services";
import React from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

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
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/auth" component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
