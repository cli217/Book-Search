import React from 'react'
import Searchbar from './components/Searchbar'
import Routes from './routes'
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <div>
        <Searchbar />
        {this.props.booklist.length !== 0 && (<Routes />)}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    booklist: state.search.booklist
  }
}

export default connect(mapState)(App)
