import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect"
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component"
import SignInAndSignUpPage from "./pages/sign-in-and-signup/sign-in-and-signup.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import contactPage from "./pages/contactPage/contactPage.component";
import {setCurrentUser} from "./redux/user/user.actions"

import {selectCurrentUser} from "./redux/user/user.selectors"

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact={true} path="/" component={HomePage}></Route>{" "}
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" render={()=> this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndSignUpPage></SignInAndSignUpPage>)}></Route>
          <Route path="/contact" component={contactPage}></Route>
          <Route path="/checkout" component={CheckoutPage}></Route>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps )(App);
