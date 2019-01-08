import React from 'react'
import { connect } from 'react-redux'
import {addBookDetails} from '../store/search'


const BookList = (props) => {
  const handleClick = details => {
    props.addBookDetails(details)
    routeChange('./details')
  }

  const routeChange = (path) => {
    props.history.push(path)
  }

  const booklist = props.sortedList
  const numBooks = booklist.numFound
  return (
    <div>
      <div>
        <p>Results: {numBooks}</p>
      </div>
      <div className='bookGrid'>
        {booklist.docs.map((book) => {
          const coverArt = book.cover_i
          const title = book.title
          const author = book.author_name
          const coverEdition = cover_edition_key
          return (
            <div className='bookItem'>
              <img className='bookCover' src={`http://covers.openlibrary.org/b/id/${coverArt}-S.jpg`} />
              <div>
                <h2>{title}</h2>
                <p>By: {author}</p>
              </div>
              <button onClick={window.open(`https://openlibrary.org/books/${coverEdition}`)}>To Open Library</button>
              <button onClick={handleClick(book)}>Details</button>
            </div>
          )
        })}
      </div>
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
