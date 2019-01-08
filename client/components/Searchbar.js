import React from 'react'
import { removeSearch, apiSearch } from '../store/search'
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
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.apiSearch(this.state.searchCate, this.state.searchTerm)
    this.routeChange('/results')
  }

  routeChange = (path) => {
    this.props.history.push(path)
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
  removeSearch: (rmTerm) => { dispatch(removeSearch(rmTerm)) }
})

export default connect(mapState, mapDispatch)(SearchBar)
