export default (
  state = {
    page: 1,
    total_pages: 0,
    eventos: [],
    evento_detallado: undefined,
    detail_loading: true
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "GET_EVENT_INITIAL_FULFILLED":
      newState.eventos = action.payload;
      break;
    case "GET_EVENTS_PAGES_INITIAL_FULFILLED":
      newState.total_pages = action.payload;
      break;
    case "GET_EVENT_RECOMMENDED_FULFILLED":
      newState.total_pages = action.payload;
      break;
    case "GET_DETAILED_EVENT_FULFILLED":
      newState.evento_detallado = action.payload;
      newState.detail_loading = false;
      break;
    case "ADD_DETAILED_EVENT":
      newState.evento_detallado.productos.push(action.value.details.members[0]);
      break;
    case "SET_EVENTS_VALUE":
      newState[action.key] = action.value;
      break;
  }
  return newState;
};
