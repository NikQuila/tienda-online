import React from "react";
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import {selectCartHidden} from "../../redux/cart/cart.selectors"
import {selectCurrentUser} from "../../redux/user/user.selectors"
import "./header.styles.scss";

const Header = ({ currentUser,hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon></CartIcon>
    </div>
    {
      hidden ? null:
    <CartDropdown></CartDropdown>
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);