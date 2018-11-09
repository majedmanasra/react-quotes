import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {FETCH_RANDOM_TEXT_SUCCESS, RANDOM_TEXT_FETCH_REQUESTED} from "../Constants/randomTextConstants";
import axios from 'axios';

function* fetchRandomTexts() {
    const randomTexts = yield call(getRandomTexts);
    yield put({type: FETCH_RANDOM_TEXT_SUCCESS, data: randomTexts});
}
const getRandomTexts = () => axios.get('https://jsonplaceholder.typicode.com/comments').then(response => response.data);

// const getRecipes = () => axios.post('https://app.fakejson.com/q', {
//     token: "TVXhhzBt1F2WI6DtqhMI2g",
//     data: {
//         "name": "stringWords",
//         "_repeat": 10
//     }
// }).then(response => response.data)
// .catch(err => {
//     throw err;
// });



export default function* mySaga() {
    yield takeLatest(RANDOM_TEXT_FETCH_REQUESTED, fetchRandomTexts);
}