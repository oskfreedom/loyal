import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IQueryState {
  types: string[];
  subtypes: string[];
  supertypes: string[];
  set: string;
  name: string;
}

const initialState: IQueryState = {
  types: [],
  subtypes: [],
  supertypes: [],
  set: "",
  name: "",
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    addTypes(state: IQueryState, action: PayloadAction<string>) {
      state.types = [...state.types, action.payload];
    },
    removeTypes(state: IQueryState, action: PayloadAction<string>) {
      state.types.filter((value) => value !== action.payload);
    },
    addSuperTypes(state: IQueryState, action: PayloadAction<string>) {
      state.supertypes = [...state.supertypes, action.payload];
    },
    removeSuperTypes(state: IQueryState, action: PayloadAction<string>) {
      state.supertypes.filter((value) => value !== action.payload);
    },
    addSubTypes(state: IQueryState, action: PayloadAction<string>) {
      state.subtypes = [...state.subtypes, action.payload];
    },
    removeSubTypes(state: IQueryState, action: PayloadAction<string>) {
      state.subtypes.filter((value) => value !== action.payload);
    },
  },
});

export const queryActions = querySlice.actions;

export const queryReducers = querySlice.reducer;
