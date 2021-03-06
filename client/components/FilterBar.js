import React from 'react'
import { connect } from 'react-redux'
import { addFilterList, addSortedList } from '../store/search';

class FilterBar extends React.Component {
    constructor(props) {
        super(props),
            this.state = {
                ISBNCheck: false,
                AuthorCheck: false,
                TitleCheck: false,
                SubjectCheck: false,
                ISBNFilter: '',
                AuthorFilter: '',
                TitleFilter: '',
                SubjectFilter: '',
                FilteredBookList: []
            }
    }

    handleChange = (key) => event => {
        this.setState({
            [key + 'Filter']: event.target.value
        })
    }

    handleChecked = (key) => event => {
        const keyName = this.state[key + 'Check']
        if (!keyName) {
            this.setState(
                { [key + 'Check']: !keyName }
            )
        }
        //clears field when unchecked
        else {
            this.setState({
                [key + 'Check']: !keyName,
                [key + 'Filter']: ''
            })
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        let filterlist = this.props.booklist

        //Filter via isbn
        if (this.state.ISBNCheck) {
            filterlist = filterlist.filter(book => {
                let matchingISBN = false
                book.isbn.map(isbn => {
                    if (isbn === this.state.ISBNFilter) {
                        matchingISBN = true
                    }
                })
                return matchingISBN
            })
        }

        //Filter via author
        if (this.state.AuthorCheck) {
            console.log(filterlist)
            filterlist = filterlist.filter(book => {
                if (book.author_name) {
                    return book.author_name[0].toLowerCase() == this.state.AuthorFilter.toLowerCase()
                }
                else return false
            })
            console.log(filterlist)
        }

        //Filter via title
        if (this.state.TitleCheck) {
            filterlist = filterlist.filter(book =>
                book.title.toLowerCase() == this.state.TitleFilter.toLowerCase()
            )
        }

        //Filter via subject/genre
        if (this.state.SubjectCheck) {
            filterlist = filterlist.filter(book => {
                let matchingSubject = false
                if (book.subject) {
                    book.subject.map(subject => {
                        if (subject.toLowerCase() == this.state.SubjectFilter.toLowerCase()) {
                            matchingSubject = true
                        }
                    })
                }
                return matchingSubject
            })
        }

        await this.setState({
            FilteredBookList: filterlist
        })

        const formatedList = {
            num_found: this.state.FilteredBookList.length,
            docs: this.state.FilteredBookList
        }

        this.props.addFilterList(formatedList)
        this.props.addSortedList(formatedList)
    }

    render() {
        const filterList = ['ISBN', 'Author', 'Title', 'Subject']
        return (
            <div className='settings'>
                <h3 className='settingsTitle'>Filter By:</h3>
                <div className='filterbar'>
                    <form onSubmit={this.handleSubmit} className='filterform'>
                        {filterList.map(key => {
                            return (
                                <div className='filterinput' key={key + 'input'}>
                                    <input type='checkbox' onChange={this.handleChecked(key)} />
                                    <p>{key}</p>
                                    {
                                        this.state[key + 'Check'] &&
                                        <React.Fragment>
                                            <p>: </p>
                                            <input
                                                value={this.state[key + 'Filter']}
                                                onChange={this.handleChange(key)}
                                            />
                                        </React.Fragment>
                                    }
                                </div>)
                        })}
                        <button className='filterSubmitButton' type='submit'>Filter</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapState = state => {
    return {
        booklist: state.search.booklist.docs,
    }
}

const mapDispatch = dispatch => {
    return {
        addFilterList: list => dispatch(addFilterList(list)),
        addSortedList: list => dispatch(addSortedList(list))
    }
}

export default connect(mapState, mapDispatch)(FilterBar)
