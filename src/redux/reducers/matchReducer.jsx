const matchReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_MATCHES":
      return action.payload;
    default:
      return state;
  }
};

export default matchReducer;
