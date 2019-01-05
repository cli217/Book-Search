import axios from 'axios'

//Init state
const defaultSearches = {
  booklist: [],
  searchHistory: [],
  searchTerm: '',
}

//Action types
const ADD_SEARCH = 'ADD_SEARCH'
// const CLEAR_SEARCH = 'CLEAR_SEARCH'
const GET_RESULTS = 'GET_SEARCH'
const REMOVE_SEARCH = 'REMOVE_SEARCH'

//Action Creator


export const addSearch = (term) => ({
  type: ADD_SEARCH,
  term
})

const getResults = (results) => ({
  type: GET_RESULTS,
  results
})

export const removeSearch = (rmTerm) => ({
  type: REMOVE_SEARCH,
  rmTerm
})

//Thunk
export const apiSearch = (field, term) =>
  async function (dispatch){
  try {
    const res = await axios.get('http://openlibrary.org/search.json?' + field + '=' + term)
    const results = res.data
    dispatch(addSearch(term))
    dispatch(getResults(results))
   }
  catch (err) {
    console.log(err)
  }
}

//Reducer
export default function (state = defaultSearches, action) {
  switch (action.type) {
    case ADD_SEARCH:
      return {...state, searchTerm: action.term, searchHistory: [...state.searchHistory, action.term] }

    case REMOVE_SEARCH:
      return {...state}

    case GET_RESULTS:
      return {...state, booklist: action.results}

    default:
      return state
  }
}
