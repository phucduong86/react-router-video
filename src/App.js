import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import London from './London'
import Paris from './Paris'
import Tokyo from './Tokyo'
import Users from './Users'

export default React.createClass({
  render() {
    return (
      <Router>
        <div className="container">
          <header>
             <h1>City Gallery</h1>
          </header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/london">London</Link></li>
              <li><Link to="/paris">Paris</Link></li>
              <li><Link to="/tokyo">Tokyo</Link></li>
              <li><Link to="/users/1">Michael</Link></li>
              <li><Link to="/users/2">Sarah</Link></li>
              <li><Link to="/users/3">Daniel</Link></li>
              <li><Link to="/users/4">Liam</Link></li>
            </ul>
          </nav>
          <Route exact={true} path="/" component={Home} />
          <Route path="/london" component={London} />
          <Route path="/paris" component={Paris} />
          <Route path="/tokyo" component={Tokyo} />
          <Route path="/users/:userId" component={Users} />
          <footer>Copyright &copy; W3Schools.com</footer>
        </div>
      </Router>
    )
  }
})