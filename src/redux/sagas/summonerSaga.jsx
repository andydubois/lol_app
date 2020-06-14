import axios from "axios";
import {put, takeEvery} from "redux-saga/effects";
// let LeagueAPI = require('leagueapiwrapper');
// LeagueAPI = new LeagueAPI(leagueAPIKey, Region.NA);

function* fetchSummoner(action) {
  console.log("summoner search");
  try {
    // let summonerSearch = action.payload;
    console.log("action.payload is ", action.payload)
    let response = yield axios.get(`/api/summoner/${action.payload}`);
    console.log("summonerSaga summoner response", response.data);
    yield put ({
        type: "SET_SUMMONER",
        payload: response.data
    })
    let matchResponse = yield axios.get(`/api/matches/${response.data.accountId}`);
    console.log("summonerSaga match response", matchResponse.data);
    yield put ({
        type: "SET_MATCHES",
        payload: matchResponse.data
    })

    ;
  } catch (error) {
      console.log("error in client side summoner get", error);
  }
}


function* watchMe() {
    yield takeEvery("FETCH_SUMMONER", fetchSummoner);
}

export default watchMe;