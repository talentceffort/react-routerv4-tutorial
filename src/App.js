import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './routes/Home'
import About from './routes/About'
import Posts from './routes/Posts'
import MyPage from './routes/MyPage'
import Login from './routes/Login'
import Search from './routes/Search'
import ErrorPage from './routes/Error'

import Header from './components/Header'

export const App = () => {
  return (
    <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about/:username" component={About} />
            <Route path="/posts" component={Posts} />
            <Route path="/login" component={Login} />
            <Route path="/me" component={MyPage} />
            <Route path="/search" component={Search} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
  )
}

export default App




