import { createReducer } from '@reduxjs/toolkit';
import { GuitarsData } from '../../types/state';
import { loadGuitars, loadGuitar, loadGuitarComplete, loadGuitarError } from '../action';

const initialState: GuitarsData = {
  guitars: [],
  isDataLoaded: false,
  guitar: null,
  isGuitarLoading: false,
  isGuitarError: false,
};

const guitarsDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGuitars, (state, action) => {
      state.guitars = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadGuitar, (state) => {
      state.isGuitarLoading = true;
      state.isGuitarError = false;
    })
    .addCase(loadGuitarComplete, (state, action) => {
      state.guitar = action.payload;
      state.isGuitarLoading = false;
    })
    .addCase(loadGuitarError, (state) => {
      state.isGuitarLoading = false;
      state.isGuitarError = true;
    });
});

export {guitarsDataReducer};
