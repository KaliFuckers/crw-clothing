import Homepage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import AuthPage from "./pages/auth/auth.component";
import FirebaseServices from "./services/firebase.services";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  firebaseAuth = null;

  componentDidMount() {
    this.firebaseAuth = FirebaseServices.auth.onAuthStateChanged(
      async (user) => {
        const userRef = await FirebaseServices.createUserProfileDocument(user);
        if (userRef) {
          userRef.onSnapshot((snapshot) => {
            this.setState({
              currentUser: {
                id: userRef.id,
                ...snapshot.data(),
              },
            });
          });
        } else {
          this.setState({
            currentUser: user,
          });
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
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/auth" component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
