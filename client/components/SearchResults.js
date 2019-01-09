import React from 'react'
import FilterBar from './FilterBar'
import SortBar from './SortBar'
import Booklist from './Booklist';
import Searchbar from './Searchbar'

 const SearchResults = props => {
    return(
        <div>
            <Searchbar {...props}/>
            <FilterBar/>
            <SortBar/>
            <Booklist {...props}/>
        </div>
    )
}

export default SearchResults
