import axios from "axios";
import {put, takeEvery} from "redux-saga/effects";

function* fetchSummoner(action) {
  console.log("summoner search");
  try {
    let summonerSearch = action.payload;
    let response = yield axios.get(`/api/riot/${summonerSearch}`);
    console.log("saga riot summoner response", response.data);
    yield put({
        type: "SET_SUMMONER",
        payload: response.data
    });
  } catch (error) {
      console.log("error in client side summoner get", error);
  }
}


function* watchMe() {
    yield takeEvery("FETCH_SUMMONER", fetchSummoner);
}

export default watchMe;