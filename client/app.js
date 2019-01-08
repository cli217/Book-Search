import React from 'react'
import Searchbar from './components/Searchbar'
import Routes from './routes'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()


const App = () => {
  return (
    <div>
      <Searchbar history={history}/>
      <Routes />
    </div>
  )
}

export default App
