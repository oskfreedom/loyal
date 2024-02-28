import { all, fork } from "redux-saga/effects";
import cardSaga from "./card.saga";

export function* appSaga() {
  yield all([fork(cardSaga)]);
}
