import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Flight from './Flight';
import FlightForm from './FlightForm';
import NotMatch from './NotMatch';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class App extends Component {
  state = {
    value: 0
  };

  componentDidMount() {
    // this.props.handleGetCheap();
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    // console.log(this.props.cheap);

    const flightComponent = <Flight cheap={this.props.cheap} />;

    return (
      <Grid container>
        <AppBar position="static" color="default">
          <Tabs value={this.state.value} onChange={this.handleChange}>
            <Tab label="Flight List" component={Link} to="/flight" />
            <Tab label="Add Flight" component={Link} to="/flight_form" />
          </Tabs>
        </AppBar>

        <Switch>
          <Route path="/" exact component={() => flightComponent} />
          <Route path="/flight" exact component={() => flightComponent} />
          <Route path="/flight_form" component={() => <FlightForm />} />
          <Route component={NotMatch} />
        </Switch>
      </Grid>
    );
  }
}

export default App;
