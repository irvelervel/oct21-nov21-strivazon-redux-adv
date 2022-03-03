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
