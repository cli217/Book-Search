import React from 'react'
import { connect } from 'react-redux'
import { addBookDetails } from '../store/search'


const BookList = (props) => {

  const handleClick = details => {
    props.addBookDetails(details)
    routeChange('./details')
  }

  const routeChange = (path) => {
    props.history.push(path)
  }

  const booklist = props.sortedList
  const numBooks = booklist.num_found
  return (
    <div className='bookList'>
      <h3 className='resultsTitle'>Search Results:</h3>
      <p className='booksFound'>Number of Books Found: {numBooks}</p>
      {numBooks &&
        <div className='bookGrid'>
          {booklist.docs.map((book) => {
            const coverArt = book.cover_i
            const title = book.title
            return (
              <div className='bookItem' key={book.title + book.cover_i}>
              { coverArt ? <img className='listCover' src={`http://covers.openlibrary.org/b/id/${coverArt}-S.jpg`} /> :

              <img className='listCover' src={`placeholder`} />
              }
                <div className='listdetails'>
                  <p className='booktitle'>{title}</p>
                  <p className='authorlist'>By: {book.author_name ? book.author_name.join(', ') : 'Unkown'}</p>
                </div>
                <button onClick={() => { handleClick(book) }} className='detailsButton'>Details</button>
              </div>
            )
          })}
        </div>
      }
    </div>
  )
}

const mapState = state => {
  return { sortedList: state.search.sortedList }
}

const mapDispatch = dispatch => {
  return {
    addBookDetails: (details) => dispatch(addBookDetails(details))
  }
}


export default connect(mapState, mapDispatch)(BookList)
