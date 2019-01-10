import React from 'react'

import Searchbar from './components/Searchbar'
import Routes from './routes'


const App = () => {
  return (
    <div>
      <div className='titleContainer'>
        <nav id='title'>Book Find</nav>
      </div>
      <Routes />
    </div>
  )
}

export default App
