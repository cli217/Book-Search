import React from 'react'
import FilterBar from './FilterBar'
import SortBar from './SortBar'
import Booklist from './Booklist';
import Searchbar from './Searchbar'

class SearchResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showSettings: true
        }
    }

    onClick = () => {
        if(this.state.showSettings)
        {
            document.getElementsByClassName('settingsContainer')[0].style.display ='none'
        }
        else{
            document.getElementsByClassName('settingsContainer')[0].style.display ='flex'
        }

        this.setState({ showSettings: !this.state.showSettings })
    }

    render() {
        return (
            <div className='container'>
                <Searchbar {...this.props} />
                <div>
                    {/* {this.state.showSettings && */}
                        <div className='settingsContainer'>
                            <FilterBar />
                            <SortBar />
                        </div>
                    <div className='showSettings'>
                        {
                            this.state.showSettings ?
                                <span onClick={this.onClick} className='spanSetting'>Hide Filter Options</span> :
                                <span onClick={this.onClick} className='spanSetting'>Show Filter Options</span>
                        }
                    </div>
                </div>
                <Booklist {...this.props} />
            </div>
        )
    }
}

export default SearchResults
