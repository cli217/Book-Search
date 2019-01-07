import React from 'react'
// import { addSearch, removeSearch, apiSearch } from '../store/search'
import { connect } from 'react-redux'


const SearchResults = (props) => {
    // const onClick = () => {

    // }

  const booklist = props.booklist
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
          // const amazonLink = book.id_amazon
          const coverEdition = cover_edition_key
          return (
            <React.Fragment>
              <img className='bookCover' src={`http://covers.openlibrary.org/b/id/${coverArt}-S.jpg`} />
              <div>
                <h2>{title}</h2>
                <p>By: {author}</p>
              </div>
              <button onClick={window.open(`https://openlibrary.org/books/${coverEdition}`)}>Open Library</button>
              <button onClick={}>Details</button>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}