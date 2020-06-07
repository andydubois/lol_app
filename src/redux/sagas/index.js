import {all} from 'redux-saga/effects';
import summonerSaga from './summonerSaga'

export default function* rootSaga() {
    yield all([
        summonerSaga(),
    ])
}