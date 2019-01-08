import React from 'react'

const SignleBook = () => {

}

const mapState = state => {
  return { sortedList: state.search.sortedList }
}


export default connect(mapState)(BookList)

