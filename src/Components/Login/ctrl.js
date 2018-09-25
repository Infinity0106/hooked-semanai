export default {
  login: function() {
    let self = this;
    this.props.dispatch(dispatch => {
      if (this.props.data.email && this.props.data.password) {
        dispatch({
          type: ""
        });
        self.props.history.push("/");
      }
    });
  }
};
