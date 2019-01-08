import React from 'react'
import {connect} from 'react-redux'

const SingleBook = (props) => {

    const routeChange = (path) => {
        props.history.push(path)
      }

    const details = props.bookDetails
    const coverArt = details.cover_i
    const title = details.title
    const author = details.author_name
    const coverEdition = details.cover_edition_key
    const subject = details.subject.join(', ')
    const publishYr = details.first_public_year
    return (
        <div>
            <img className='detailCover' src={`http://covers.openlibrary.org/b/id/${coverArt}-M.jpg`} />
            <div>
            <h2>{title}</h2>
                <p>By: {author}</p>
                <p>Genre: {subject}</p>
                <p>First Publishyear: {publishYr}</p>
            </div>
            <button onClick={window.open(`https://openlibrary.org/books/${coverEdition}`)}>To Open Library</button>
            <button onClick={routeChange('./results')}>Back</button>
        </div>
    )
}

const mapState = state => {
    return { bookDetails: state.search.bookDetails }
}


export default connect(mapState)(SingleBook)

