import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import SortFilterBar from './components/SortFilterBar'


class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route path="/" component={SortFilterBar}/>
      </Switch>
    )
  }
}

const mapState = state => {
    return {
        booklist: state.search.booklist
    }
}


export default withRouter(connect(mapState, mapDispatch)(Routes))
