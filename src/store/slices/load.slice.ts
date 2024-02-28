import { createSlice } from "@reduxjs/toolkit";

interface ILoadState {
  loading: boolean;
}

const initialState: ILoadState = {
  loading: false,
};

const loadSlice = createSlice({
  name: "load",
  initialState,
  reducers: {
    startLoad(state: ILoadState) {
      state.loading = true;
    },
    endLoad(state: ILoadState) {
      state.loading = false;
    },
  },
});

export const loadActions = loadSlice.actions;

export const loadReducers = loadSlice.reducer;
