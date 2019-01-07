import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {me} from './store'

class Routes extends Component {

  render() {
    return (
      <Switch>
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
