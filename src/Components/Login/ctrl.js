import * as Backend from "./../../backend";

export default {
  login: function() {
    let self = this;
    this.props.dispatch(dispatch => {
      if (this.props.data.email && this.props.data.password) {
        dispatch({
          type: "SET_BACKEND_LOGIN_VALUE",
          payload: Backend.login(this.props.data)
        })
          .then(() => {
            self.props.history.replace("/");
          })
          .catch(() => {
            setTimeout(() => {
              dispatch({
                type: "SET_LOGIN_VALUE",
                key: "error",
                value: false
              });
            }, 2000);
          });
      } else {
        dispatch({
          type: "SET_LOGIN_VALUE",
          key: "error_msg",
          value: "Email o contraseña vacia"
        });
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
  },
  signup: function() {
    let self = this;
    this.props.dispatch(dispatch => {
      if (
        this.props.data.email &&
        this.props.data.password &&
        this.props.data.nombre
      ) {
        dispatch({
          type: "SET_BACKEND_SIGNUP_VALUE",
          payload: Backend.signup(this.props.data)
        }).then(() => {
          self.props.history.replace("/");
        });
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
  changeView: function() {
    this.props.dispatch({
      type: "SET_LOGIN_VALUE",
      key: "signed",
      value: !this.props.data.signed
    });
  }
};
