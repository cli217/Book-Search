import axios from 'axios'
import history from '../history'

//Init state
const defaultSearches = []

//Action types
const ADD_SEARCH = 'ADD_SEARCH'

//Action Creator
const addSearch = (term) => ({
  type: ADD_SEARCH,
  term
})

//Thunk
const apiSearch = (term) => async function (dispatch, term){
  try {
    const res = await axios.get()
    const data = res.data
   }
  catch (err) {
    console.log(err)
  }
}


//Reducer
export default function (state = defaultSearches, action) {
  switch (action.type) {
    default:
      return state
  }
}
