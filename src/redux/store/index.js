import { createStore, combineReducers } from 'redux'
import cartReducer from '../reducers/cartReducer'
import userReducer from '../reducers/userReducer'

export const initialState = {
  // let's create a carte "slice"
  cart: {
    products: [],
  },
  user: {
    name: '',
  },
}

const bigReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
})

export const configureStore = createStore(
  bigReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// 1) the main reducer function
// 2) the initial state for the redux store
// 3) any enhancer/middleware function
