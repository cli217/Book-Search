import React from 'react'
import { connect } from 'react-redux'
import { addSortedList } from '../store/search';


class SortBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sortOrder: '',
        }
    }

    handleChange(evt) {
        this.setState({
            sortOrder: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        const sortedList = this.props.filteredList.sort((a, b) => {
            if( a[this.state.sortOrder] > b[this.state.sortOrder]) 1
            if( a[this.state.sortOrder] < b[this.state.sortOrder]) -1
            return 0
        })
        this.props.addSortedList(sortedList)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit()}>
                    <select onChange={this.handleChange()}>
                        <option value='title'>A-Z Title</option>
                        <option value='author_name'>A-Z Author</option>
                    </select>
                    <button className='submitButton' type='submit'>Sort</button>
                </form>
            </div>
        )
    }

}

const mapState = state => {
    return { filteredList: state.search.filteredList }
}

const mapDispatch = dispatch => {
    return {
        addSortedList: (list) => dispatch(addSortedList(list))
    }
}


export default connect(mapState, mapDispatch)(SortBar)