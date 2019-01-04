
import React from 'react'

class SearchBar extends React.Component {

  handlechange() {

  }

  handlesubmit() {

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handlesubmit}>
          <input type='text' onChange={}/>
          <button className='SubmitButton' type='submit'>Submit</button>
        </form>
      </div>

    )
  }
}

const mapState = state => {
  return {

  }
}

const mapDispatch = dispatch => {
  return {

  }
}

export default connect(mapState, mapDispatch)(SearchBar)
