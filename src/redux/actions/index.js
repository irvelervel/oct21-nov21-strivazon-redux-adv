// let's write an action creator for ADD_TO_CART
// so you can write it only once and potentially use it from multiple components

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SET_USER_NAME = 'SET_USER_NAME'

export const addToCartAction = (bookToAdd) => ({
  type: ADD_TO_CART,
  // we also need in this case to pass the right book to add!
  // the information of adding a book to the cart is not sufficient to provide correct behavior
  payload: bookToAdd,
})

export const removeFromCartAction = (indexToRemove) => ({
  type: REMOVE_FROM_CART,
  payload: indexToRemove,
})

export const setUsernameAction = (name) => ({
  type: SET_USER_NAME,
  payload: name,
})

// redux-thunk allows your action creators to return FUNCTIONS intead of JS OBJECTS (actions)
// in these functions you can perform any sort of logic, even async one, and use the arguments of the function
// for getting access to the dispatch function
export const addToCartActionWithThunk = (bookToAdd) => {
  return async (dispatch) => {
    console.log('hello! from thunk')
    if (3 > 5) {
      dispatch({
        type: 'ERROR',
      })
    } else {
      dispatch({
        type: ADD_TO_CART,
        // we also need in this case to pass the right book to add!
        // the information of adding a book to the cart is not sufficient to provide correct behavior
        payload: bookToAdd,
      })
    }
  }
}

// advanced syntax
// export const getBooksAction = () => async(dispatch) => {
// put await & stuff into here!
// }

export const getBooksAction = () => {
  console.log('in getBooksAction')
  return async (dispatch) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/food-books'
      )
      if (response.ok) {
        let data = await response.json()
        console.log('BOOKS IN ACTION CREATOR', data)
        // here we're going to dispatch the action with data as the payload
      } else {
        console.log('error happened fetching the books')
        // maybe here we can dispatch another action!
        // an ERROR action :)
      }
    } catch (error) {
      console.log(error)
      // maybe here we can dispatch another action!
      // an ERROR action :)
    }
  }
}
