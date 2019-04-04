import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Flight from './Flight';
import FlightForm from './FlightForm';
import NotMatch from './NotMatch';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">flights</Link>
            </li>
            <li>
              <Link to="/flight_form">Create Flights</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Flight} />
          <Route path="/flight" exact component={Flight} />
          <Route path="/flight_form" component={() => <FlightForm />} />
          <Route component={NotMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
