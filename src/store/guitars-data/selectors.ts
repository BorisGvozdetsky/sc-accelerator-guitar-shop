import { Guitar } from '../../types/guitar';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getGuitars = (state: State): Guitar[] => state[NameSpace.Guitars].guitars;
const getGuitar = (state: State): Guitar | null => state[NameSpace.Guitars].guitar;
const getIsDataLoaded = (state: State): boolean => state[NameSpace.Guitars].isDataLoaded;
const getIsGuitarLoading = (state: State): boolean => state[NameSpace.Guitars].isGuitarLoading;
const getIsGuitarError = (state: State): boolean => state[NameSpace.Guitars].isGuitarError;

export {getGuitars, getIsDataLoaded, getGuitar, getIsGuitarLoading, getIsGuitarError};
