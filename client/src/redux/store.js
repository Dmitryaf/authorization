import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './userReducer';
import fileReducer from './fileReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  userReducer: userReducer,
  fileReducer: fileReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
