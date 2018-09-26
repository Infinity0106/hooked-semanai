import { combineReducers } from "redux";

import login from "./login";
import header from "./header";
import account from "./account";

export default combineReducers({
  login,
  header,
  account
});
