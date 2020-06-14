import {combineReducers} from "redux";
import summoner from './summonerReducer';
import match from './matchReducer';

const rootReducer = combineReducers({
    summoner, //contains summoner details
    match, //contains match details
});

export default rootReducer;