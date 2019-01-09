import React from 'react'
import { connect } from 'react-redux'
import { addSortedList } from '../store/search';


class SortBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sortOrder: 'title',
        }
    }

    handleChange = event => {
        this.setState({
            sortOrder: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const sortedList = this.props.filteredList.docs
        sortedList.sort((a, b) => {
            if (a[this.state.sortOrder] > b[this.state.sortOrder]) return 1
            if (a[this.state.sortOrder] < b[this.state.sortOrder]) return -1
            return 0
        })

        console.log(sortedList)

        const formatedList = {
            num_found: sortedList.length,
            docs: sortedList
        }

        this.props.addSortedList(formatedList)
    }

    render() {
        return (
            <React.Fragment>
                <h3 className='settings'>Sort Settings:</h3>
                <div className='sortbar'>
                    <form onSubmit={this.handleSubmit}>
                        <select onChange={this.handleChange}>
                            <option value='title'>A-Z Title</option>
                            <option value='author_name'>A-Z Author</option>
                        </select>
                        <button className='submitButton' type='submit'>Sort</button>
                    </form>
                </div>
            </React.Fragment>
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
