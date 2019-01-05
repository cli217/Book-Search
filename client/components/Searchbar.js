import React from 'react'
import {addSearch, removeSearch, apiSearch} from '../store/search'

class SearchBar extends React.Component {
  constructor(props){
    super(props),
    this.state = {
      searchTerm = ''
    }
  }

  handlechange() {

  }

  handlesubmit() {

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handlesubmit}>
          <input type='text' onChange={() => this.handlechange}/>
          <button className='SubmitButton' type='submit'>Submit</button>
        </form>
      </div>

    )
  }
}

const mapState = state => {
  return {
    searchTerm: state.search.searchTerm,
    searchHistory: state.search.searchHistory
  }
}

const mapDispatch = dispatch => ({
    apiSearch: (field, term) => {dispatch(apiSearch(field, term))},
    addSearch: (term) => {dispatch(addSearch(term))},
    removeSearch: (rmTerm) => {dispatch(removeSearch(rmTerm))}
})

export default connect(mapState, mapDispatch)(SearchBar)
