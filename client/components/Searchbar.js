import React from 'react'
import { addSearch, removeSearch, apiSearch } from '../store/search'
import { connect } from 'react-redux'

class SearchBar extends React.Component {
  constructor(props) {
    super(props),
      this.state = {
        searchCate: 'isbn',
        searchTerm: ''
      }
  }

  handleChange = key => event => {
    this.setState({
      [key]: event.target.value
    })
    console.log(this.state)
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addSearch(this.state.searchTerm)
    this.props.apiSearch(this.state.searchCate, this.state.searchTerm)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange('searchCate')}>
            <option value='isbn'>ISBN</option>
            <option value='title'>Title</option>
            <option value='author'>Author</option>
          </select>
          <input
            value={this.state.searchTerm}
            onChange={this.handleChange('searchTerm')}
          />
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
  apiSearch: (field, term) => { dispatch(apiSearch(field, term)) },
  addSearch: (term) => { dispatch(addSearch(term)) },
  removeSearch: (rmTerm) => { dispatch(removeSearch(rmTerm)) }
})

export default connect(mapState, mapDispatch)(SearchBar)
