const summonerReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_SUMMONER":
            return action.payload;
        default:
            return state;
    }
};

export default summonerReducer;