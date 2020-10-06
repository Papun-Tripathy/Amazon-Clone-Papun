import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handelAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to='/'>
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handelAuthentication} className="header__option">
            <span className="header__optionlineOne">Hello, { !user ? 'Guest' : user.email }</span>
            <span className="header__optionlineTwo">{user ? 'Sign out' : 'Sign in'}</span>
          </div>
        </Link>
        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionlineOne">Returns</span>
            <span className="header__optionlineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionlineOne">Your</span>
          <span className="header__optionlineTwo">Prime</span>
        </div>
        <Link to='/checkout'>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
