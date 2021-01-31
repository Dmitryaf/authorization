import { combineReducers, createStore } from 'redux';
import { filesPageReducer } from './filesPage-reducer';

const rootReducer = combineReducers({
  FilesPage: filesPageReducer,
});

export const store = createStore(rootReducer);
