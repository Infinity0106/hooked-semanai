import { combineReducers } from "redux";

import login from "./login";
import header from "./header";
import account from "./account";
import shopping_bag from "./shopping_bag";
import wishlist from "./wishlist";
import products from "./products";

export default combineReducers({
  login,
  header,
  account,
  shopping_bag,
  wishlist,
  products
});
