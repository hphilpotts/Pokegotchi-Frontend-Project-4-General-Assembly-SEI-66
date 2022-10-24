/* eslint-disable no-underscore-dangle */
import { configureStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = configureStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
  ),
);

export default configureStore({
  reducer: {},
})
