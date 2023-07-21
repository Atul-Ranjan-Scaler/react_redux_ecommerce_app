import { legacy_createStore as createStore, combineReducers} from 'redux';

import cartReducer from './cart';

const reducers = combineReducers({
  cart: cartReducer
})

export const store = createStore(reducers);
