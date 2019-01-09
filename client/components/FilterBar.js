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

    // componentDidMount() {
    //     this.setState({
    //         FilteredBookList: this.props.booklist
    //     })
    // }

    handleChange = (key) => event => {
        this.setState({
            [key + 'Filter']: event.target.value
        })
        console.log(this.state)
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
        console.log(this.state)
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    {filterList.map(key => {
                        return (
                            <div>
                                <p>{key}</p>
                                <input type='checkbox' onChange={this.handleChecked(key)}>
                                </input>
                                {
                                    this.state[key + 'Check'] &&
                                    <input
                                        value={this.state[key + 'Filter']}
                                        onChange={this.handleChange(key)}
                                    />
                                }
                            </div>)
                    })}
                    <button className='SubmitButton' type='submit'>Filter</button>
                </form>
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
