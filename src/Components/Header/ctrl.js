import * as Backend from "./../../backend";

export function logOut() {
  let self = this;
  this.props.dispatch(dispatch => {
    self.props.history.go(-this.props.history.length);
    self.props.history.replace("/");
    window.location.reload();
    dispatch({
      type: "SET_LOGIN_VALUE",
      key: "token",
      value: null
    });
  });
}

export function menuClick(e, { data_path, data_key }) {
  let self = this;
  this.props.dispatch(dispatch => {
    self.props.history.push(data_path);
    dispatch({
      type: "SET_HEADER_VALUE",
      key: "active",
      value: data_key
    });
  });
}

export function accountClick(e) {
  this.props.history.push("/account");
}

export function logIn() {
  window.location.reload();
  this.props.history.push("/login");
}

export function getInitialInfo() {
  this.props.dispatch(dispatch => {
    dispatch({
      type: "SET_EXCHANGE_RATE",
      payload: Backend.getExchangeRate()
    });
  });
}
