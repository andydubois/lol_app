const champCountReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_COUNTS":
      return action.payload;
    default:
      return state;
  }
};

export default champCountReducer;
