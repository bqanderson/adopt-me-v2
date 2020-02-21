import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import { Provider } from 'react-redux'
import Details from './Details'
import SearchParams from './SearchParams'
import NavBar from './NavBar'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <Router>
          <SearchParams path='/' />
          <Details path='/details/:id' />
        </Router>
      </div>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
