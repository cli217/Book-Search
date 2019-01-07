import React from 'react'
import FilterBar from './FilterBar'
import SortBar from './SortBar'
import Booklist from './Booklist';

const SearchResults = () => {
    return(
        <div>
            <FilterBar/>
            <SortBar/>
            <Booklist/>
        </div>
    )
}