import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import FilterBar from './components/FilterBar'
import SingleBook from './components/SingleBook'


class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route path="/results" component={FilterBar}/>
        <Route path="/details" component={SingleBook}/>
      </Switch>
    )
  }
}

const mapState = state => {
    return {
        booklist: state.search.booklist
    }
}


export default withRouter(connect(mapState)(Routes))
