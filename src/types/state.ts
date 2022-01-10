import { RootState } from '../store/root-reducer';
import { Guitar } from './guitar';

type GuitarsData = {
  guitars: Guitar[];
  isDataLoaded: boolean;
  guitar: Guitar | null;
  isGuitarLoading: boolean;
  isGuitarError: boolean;
}

export type {GuitarsData};
export type State = RootState;
