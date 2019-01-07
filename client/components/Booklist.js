import React from 'react'
import { connect } from 'react-redux'


const BookList = (props) => {
    const onClick = () => {

    }

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
          const coverEdition = cover_edition_key
          return (
            <div className='bookItem'>
              <img className='bookCover' src={`http://covers.openlibrary.org/b/id/${coverArt}-S.jpg`} />
              <div>
                <h2>{title}</h2>
                <p>By: {author}</p>
              </div>
              <button onClick={window.open(`https://openlibrary.org/books/${coverEdition}`)}>To Open Library</button>
              <button onClick={}>Details</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}