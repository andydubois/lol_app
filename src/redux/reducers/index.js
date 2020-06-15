import {combineReducers} from "redux";
import summoner from './summonerReducer';
import match from './matchReducer';
import champCount from './champCountReducer';

const rootReducer = combineReducers({
    summoner, //contains summoner details
    match, //contains match details
    champCount, //champ count details
});

export default rootReducer;