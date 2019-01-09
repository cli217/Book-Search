import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import SearchResults from './components/SearchResults'
import SingleBook from './components/SingleBook'
import Searchbar from './components/Searchbar'

const Routes = () => {
  return (
    <Switch>
      <Route path='/details' component={SingleBook} />
      <Route path='/results' component={SearchResults} />
      <Route path='*' component={Searchbar} />
    </Switch>
  )
}

export default withRouter(Routes)
