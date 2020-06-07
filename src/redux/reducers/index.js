import {combineReducers} from "redux";
import summoner from './summonerReducer';

const rootReducer = combineReducers({
    summoner, //contains summoner details
});

export default rootReducer;