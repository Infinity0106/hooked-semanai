export function logOut() {
  let self = this;
  this.props.dispatch(dispatch => {
    self.props.history.go(-(this.props.history.length - 1));
    dispatch({
      type: "SET_LOGIN_VALUE",
      key: "token",
      value: null
    });
  });
}

export function menuClick(e, { data_path, data_key }) {
  console.log("🛠🛠🛠🛠🛠");
  console.log(e, data_path, data_key);
  console.log("🛠🛠🛠🛠🛠");
}
