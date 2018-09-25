export default {
  login: function() {
    let self = this;
    this.props.dispatch(dispatch => {
      if (this.props.data.email && this.props.data.password) {
        dispatch({
          type: "SET_LOGIN_VALUE",
          key: "token",
          value: "1234567890"
        });
        self.props.history.push("/");
      } else {
        dispatch({
          type: "SET_LOGIN_VALUE",
          key: "error",
          value: true
        });
        setTimeout(() => {
          dispatch({
            type: "SET_LOGIN_VALUE",
            key: "error",
            value: false
          });
        }, 2000);
      }
    });
  },
  setValue: function(event, key) {
    this.props.dispatch({
      type: "SET_LOGIN_VALUE",
      key: key,
      value: event.target.value
    });
  }
};
