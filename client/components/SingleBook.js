import React from 'react'
import { connect } from 'react-redux'
import Searchbar from './Searchbar'

const SingleBook = (props) => {

    const onClick = () => {
        window.open(`https://openlibrary.org/books/${coverEdition}`)
    }

    const routeChange = (path) => {
        props.history.push(path)
    }

    const details = props.bookDetails
    const coverArt = details.cover_i
    const title = details.title
    const author = details.author_name
    const coverEdition = details.cover_edition_key
    const subject = details.subject.join(', ')
    const publishYr = details.first_publish_year
    return (
        <React.Fragment>
            <Searchbar {...props} />
            <div className='singleDetails'>
                <div className='detailCover'>
                    <img src={`http://covers.openlibrary.org/b/id/${coverArt}-M.jpg`} />
                </div>
                <div className='bookDetails'>
                    <h2>{title}</h2>
                    <p>By: {author}</p>
                    <p>Genre: {subject}</p>
                    <p>First Publish year: {publishYr}</p>
                </div>
                <button onClick={onClick}>To Open Library</button>
                <button onClick={() => routeChange('./results')}>Back</button>
            </div>
        </React.Fragment>
    )
}

const mapState = state => {
    return { bookDetails: state.search.bookDetails }
}


export default connect(mapState)(SingleBook)

