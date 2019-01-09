import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import SearchResults from './components/SearchResults'
import SingleBook from './components/SingleBook'

class Routes extends Component {

  render() {
    console.log('rendering')
    return (
      <Switch>
        <Route path='*' component={SearchResults}/>
        <Route path='/details' component={SingleBook}/>
      </Switch>
    )
  }
}


export default withRouter(Routes)
