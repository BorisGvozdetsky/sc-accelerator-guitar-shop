import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from '../types/state';
import { Action } from '@reduxjs/toolkit';

enum ActionType {
  LoadGuitars = 'data/loadGuitars',
  LoadGuitar = 'data/loadGuitar',
  LoadGuitarComplete = 'data/loadGuitarComplete',
  LoadGuitarError = 'data/loadGuitarError',
  SetSearchValue = 'data/setSearchValue'
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
export {ActionType};
