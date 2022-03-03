import { SET_USER_NAME } from '../actions'
import { initialState } from '../store'

// let's write our reducer! :)
const bookReducer = (state = initialState.book, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default bookReducer
