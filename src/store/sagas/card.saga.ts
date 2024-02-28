import { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";

import { AppActions } from "store";
import { Actions } from "store/slices";
import { ResponseGenerator } from "types";
import api from "utils/api";

export function* getTypesSaga() {
  try {
    yield put(AppActions.load.startLoad());
    const result: ResponseGenerator = yield call(
      async () => await api().get("/types")
    );
    if (result.data) {
      yield put(AppActions.card.getTypesSuccess([...result.data.types]));
    }
  } catch (err: any) {
    console.log(err);
    toast.error("Couldn't load types.");
  } finally {
    yield put(AppActions.load.endLoad());
  }
}

export function* getSupertypesSaga() {
  try {
    yield put(AppActions.load.startLoad());
    const result: ResponseGenerator = yield call(
      async () => await api().get("/supertypes")
    );
    if (result.data) {
      yield put(
        AppActions.card.getSupertypesSuccess([...result.data.supertypes])
      );
    }
  } catch (err: any) {
    console.log(err);
    toast.error("Couldn't load Supertypes.");
  } finally {
    yield put(AppActions.load.endLoad());
  }
}

export function* getSubtypesSaga() {
  try {
    yield put(AppActions.load.startLoad());
    const result: ResponseGenerator = yield call(
      async () => await api().get("/subtypes")
    );
    if (result.data) {
      yield put(AppActions.card.getSubtypesSuccess([...result.data.subtypes]));
    }
  } catch (err: any) {
    console.log(err);
    toast.error("Couldn't load Subtypes.");
  } finally {
    yield put(AppActions.load.endLoad());
  }
}

export function* getSetSaga() {
  try {
    yield put(AppActions.load.startLoad());
    const result: ResponseGenerator = yield call(
      async () => await api().get("/sets")
    );
    if (result.data) {
      yield put(AppActions.card.getSetSuccess([...result.data.sets]));
    }
  } catch (err: any) {
    console.log(err);
    toast.error("Couldn't load set.");
  } finally {
    yield put(AppActions.load.endLoad());
  }
}

export function* getCardSaga(action: PayloadAction<string>) {
  try {
    console.log(action.payload)
    yield put(AppActions.load.startLoad());
    const result: ResponseGenerator = yield call(
      async () => await api().get(`/cards?${action.payload}`)
    );
    if (result.data) {
      yield put(AppActions.card.getCardSuccess([...result.data.cards]));
    }
  } catch (err: any) {
    console.log(err);
  } finally {
    yield put(AppActions.load.endLoad());
  }
}

function* cardSaga() {
  yield takeLatest(Actions.card.getTypesRequest.type, getTypesSaga);
  yield takeLatest(Actions.card.getSupertypesRequest.type, getSupertypesSaga);
  yield takeLatest(Actions.card.getSubtypesRequest.type, getSubtypesSaga);
  yield takeLatest(Actions.card.getSetRequest.type, getSetSaga);
  yield takeLatest(Actions.card.getCardRequest.type, getCardSaga);
}

export default cardSaga;
