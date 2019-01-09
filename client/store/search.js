import axios from 'axios'

//Init state
const defaultSearches = {
  booklist: [],
  filteredList: [],
  sortedList: [],
  searchTerm: '',
  bookDetails: {}
}

//Action types
const ADD_SEARCH = 'ADD_SEARCH'
const GET_RESULTS = 'GET_SEARCH'
const CLEAR_SEARCH = 'CLEAR_SEARCH'
const ADD_BOOKDETAILS = 'ADD_BOOKDETAILS'
const ADD_FILTERLIST = 'ADD_FILTERLIST'
const ADD_SORTEDLIST = 'ADD_SORTEDLIST'

//Action Creator
const addSearch = term => ({
  type: ADD_SEARCH,
  term
})

const getResults = results => ({
  type: GET_RESULTS,
  results
})

export const clearSearch = rmTerm => ({
  type: CLEAR_SEARCH,
  rmTerm
})

export const addBookDetails = details => ({
  type: ADD_BOOKDETAILS,
  details
})

export const addFilterList = list => ({
  type: ADD_FILTERLIST,
  list
})

export const addSortedList = list => ({
  type: ADD_SORTEDLIST,
  list
})

//Thunk
export const apiSearch = (field, term) =>
  async function (dispatch) {
    try {
      const res = await axios.get('http://openlibrary.org/search.json?' + field + '=' + term)
      const results = res.data
      dispatch(addSearch(term))
      dispatch(getResults(results))
      dispatch(addFilterList(results))
      dispatch(addSortedList(results))
    }
    catch (err) {
      console.log(err)
    }
  }

//Reducer
export default function (state = defaultSearches, action) {
  switch (action.type) {
    case ADD_SEARCH:
      return { ...state, searchTerm: action.term }

    case CLEAR_SEARCH:
      return { ...state, searchTerm: '' }

    case GET_RESULTS:
      return { ...state, booklist: action.results }

    case ADD_BOOKDETAILS:
      return { ...state, bookDetails: action.details }

    case ADD_FILTERLIST:
      return { ...state, filteredList: action.list }

    case ADD_SORTEDLIST:
      return { ...state, sortedList: action.list }

    default:
      return state
  }
}
