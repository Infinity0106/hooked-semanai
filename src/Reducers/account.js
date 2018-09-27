export default (
  state = {
    active: "basic",
    personas: []
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "GET_ACCOUNT_PERSONS_FULFILLED":
      newState.personas = action.payload.map((ele, index) => {
        return { key: index, value: ele.nombre, text: ele.nombre };
      });
      break;
    case "SET_ACCOUNT_VALUE":
      newState[action.key] = action.value;
      break;
  }
  return newState;
};
