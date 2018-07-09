import {generateUser} from './../utils/dataGenerator'

const initialState = generateUser()

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
