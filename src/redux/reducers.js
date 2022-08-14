import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  UPDATECONTACTS,
  DELETECONTACT,
  FILTERCONTACTS,
} from 'service/constants';
import { getData, setData } from 'service/contactsLocalStorage';

const initialContactsState = getData();

const contactItemsReducer = createReducer(initialContactsState, {
  [UPDATECONTACTS]: (state, { payload }) => {
    const nextState = [...state, payload];
    setData(nextState);
    return nextState;
  },
  [DELETECONTACT]: (state, { payload }) => {
    const nextState = state.filter(({ id }) => id !== payload);
    setData(nextState);
    return nextState;
  },
});

const filterValueReducer = createReducer('', {
  [FILTERCONTACTS]: (state, { payload }) => (state = payload),
});

export const rootReducer = combineReducers({
  items: contactItemsReducer,
  filter: filterValueReducer,
});
