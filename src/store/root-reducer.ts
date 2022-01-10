import { combineReducers } from 'redux';
import { guitarsDataReducer } from './guitars-data/guitars-data';

enum NameSpace {
  Guitars = 'GUITARS',
}

const rootReducer = combineReducers({
  [NameSpace.Guitars]: guitarsDataReducer,
});

export {NameSpace, rootReducer};
export type RootState = ReturnType<typeof rootReducer>;
