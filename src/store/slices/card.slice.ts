import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ICard } from "types";

interface ICardState {
  types: string[];
  subtypes: string[];
  supertypes: string[];
  cards: ICard[];
  myCard: ICard[];
  avgCMC: number;
}

const initialState: ICardState = {
  types: [],
  subtypes: [],
  supertypes: [],
  cards: [],
  myCard: [],
  avgCMC: 0,
};

const cardSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addCard(state: ICardState, action: PayloadAction<string>) {
      if (state.myCard.length === 30) toast.error("Deck is filled");
      else {
        const card = state.cards.find((card) => card.name === action.payload);
        if (card) {
          state.cards = state.cards.filter(
            (card) => card.name !== action.payload
          );
          state.myCard = [...state.myCard, card];
          updateAvgCMC(state);
        }
      }
    },
    removeCard(state: ICardState, action: PayloadAction<string>) {
      const card = state.myCard.find((card) => card.name === action.payload);
      if (card) {
        state.myCard = state.myCard.filter(
          (card) => card.name !== action.payload
        );
        updateAvgCMC(state);
      }
    },
    clearCard(state: ICardState) {
      state.cards = [];
    },
    getTypesRequest() {},
    getTypesSuccess(state: ICardState, action: PayloadAction<string[]>) {
      state.types = [...action.payload];
    },
    getSupertypesRequest() {},
    getSupertypesSuccess(state: ICardState, action: PayloadAction<string[]>) {
      state.supertypes = [...action.payload];
    },
    getSubtypesRequest() {},
    getSubtypesSuccess(state: ICardState, action: PayloadAction<string[]>) {
      state.subtypes = [...action.payload];
    },
    getCardRequest(_state: ICardState, _action: PayloadAction<string>) {},
    getCardSuccess(state: ICardState, action: PayloadAction<ICard[]>) {
      const map = new Map<string | number, ICard>();
      action.payload.forEach((card) => {
        const key = card.name;
        if (!map.has(key)) {
          map.set(key, card);
        }
      });
      state.cards = Array.from(map.values()).filter(
        (cardA) => !state.myCard.some((cardB) => cardB.name === cardA.name)
      );
    },
  },
});

function updateAvgCMC(state: ICardState) {
  const len = state.myCard.reduce(
    (acc: number, obj: ICard) => (obj.cmc > 0 ? acc + 1 : acc),
    0
  );
  const total = state.myCard.reduce(
    (acc: number, obj: ICard) => acc + obj.cmc,
    0
  );
  state.avgCMC = len === 0 ? 0 : total / len;
}

export const cardActions = cardSlice.actions;

export const cardReducers = cardSlice.reducer;
