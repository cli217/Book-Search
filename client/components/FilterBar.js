import React from 'react'
import { connect } from 'react-redux'
import { addFilterList } from '../store/search';

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

    componentDidMount() {
        this.setState({
            FilteredBookList: this.props.booklist
        })
    }

    handleChange = (key) => event => {
        this.setState({
            [key + 'Filter']: [event.target.value]
        })
        console.log(this.state)
    }

    handleChecked = (key) => event => {
        if (event.target.checked) {
            this.setState({
                [key + 'Check']: [event.target.checked]
            })
        }
        //clears field when unchecked
        else {
            this.setState({
                [key]: [event.target.checked],
                [key + 'Filter']: ''
            })
        }
        console.log(this.state)
    }

    handleSubmit = async event => {
        event.preventDefault()

        //Filter via isbn
        if (this.state.ISBNCheck) {
            const booklist = this.state.FilteredBookList
            const newbooklist = booklist.filter(book => {
                let matchingISBN = false
                book.isbn.map(isbn => {
                    if (isbn === this.state.ISBNFilter) {
                        matchingISBN = true
                    }
                })
                return matchingISBN
            })

            await this.setState({
                FilteredBookList: newbooklist
            })
        }

        //Filter via author
        if (this.state.AuthorCheck) {
            const booklist1 = this.state.FilteredBookList
            const newbooklist1 = booklist1.filter(book =>
                book.author_name.toLowerCase() == this.state.AuthorFilter.toLowerCase()
            )

            await this.setState({
                FilteredBookList: newbooklist1
            })
        }

        //Filter via title
        if (this.state.TitleCheck) {
            const booklist2 = this.state.FilteredBookList
            const newbooklist2 = booklist2.filter(book =>
                book.title.toLowerCase() == this.state.title.toLowerCase()
            )

            await this.setState({
                FilteredBookList: newbooklist2
            })
        }

        //Filter via subject/genre
        if (this.state.SubjectCheck) {
            const booklist3 = this.state.FilteredBookList
            const newbooklist3 = booklist3.filter(book => {
                let matchingSubject = false
                book.subject.map(subject => {
                    if (subject.toLowerCase() == this.state.SubjectFilter.toLowerCase()) {
                        matchingSubject = true
                    }
                })
                return matchingSubject
            })

            await this.setState({
                FilteredBookList: newbooklist3
            })
        }

        this.props.addFilterList(this.state.FilteredBookList)
    }

    render() {
        const filterList = ['ISBN', 'Author', 'Title', 'Subject']
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        {filterList.map(key => {
                            return (
                                <React.Fragment>
                                    <input type='checkbox' onChange={this.handleChecked(key)}>
                                        {key}</input>
                                    {
                                        this.state[key + 'Check'] &&
                                        <input
                                            value={this.state[key + 'Filter']}
                                            onChange={this.handleChange(key)}
                                        />
                                    }
                                </React.Fragment>)
                        })}
                        <button className='SubmitButton' type='submit'>Filter</button>
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
        addFilterList: list => dispatch(addFilterList(list))
    }
}

export default connect(mapState, mapDispatch)(FilterBar)
