import React, { Component } from 'react'
import NavBar from './components/navbar.component'
import Home from './components/home.component'
import People from './components/people.component'
import PeopleInfo from './components/people-info.component'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <NavBar />
          </Switch>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/people' exact component={People} />
            <Route path='/people/:personId' exact component={PeopleInfo} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
