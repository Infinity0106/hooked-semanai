import { combineReducers } from "redux";

import login from "./login";
import header from "./header";

export default combineReducers({
  login,
  header
});
