import { combineReducers } from "@reduxjs/toolkit";
import { cardReducers, cardActions } from "./card.slice";
import { loadReducers, loadActions } from "./load.slice";
import { queryReducers, queryActions } from "./query.slice";

export const Slices = combineReducers({
  card: cardReducers,
  load: loadReducers,
  query: queryReducers,
});

export const Actions = {
  card: cardActions,
  load: loadActions,
  query: queryActions,
};
