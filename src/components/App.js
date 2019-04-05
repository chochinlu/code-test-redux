import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Flight from './Flight';
import FlightForm from './FlightForm';
import NotMatch from './NotMatch';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import { withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[300] },
    secondary: { main: '#11cb5f' } // This is just green.A700 as hex.
  },
  typography: {
    fontFamily: ['Lato', 'sans-serif'],
    useNextVariants: true
  }
});

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    marginTop: theme.spacing.unit * 2,
    minHeight: '80vh'
  }
});

class App extends Component {
  state = {
    value: 0
  };

  componentDidMount() {
    // this.props.handleGetCheap();
    // this.props.handleGetBusiness();
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    // console.log(this.props.cheap);
    const { classes, cheap, business } = this.props;
    const { handleAddCheapFlight, handleAddBusinessFlight } = this.props;

    const flightComponent = <Flight cheap={cheap} business={business} />;
    const formComponent = (
      <FlightForm
        handleAddCheapFlight={handleAddCheapFlight}
        handleAddBusinessFlight={handleAddBusinessFlight}
      />
    );

    return (
      <MuiThemeProvider theme={theme}>
        <Grid container>
          <AppBar position="sticky" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              variant="fullWidth"
            >
              <Tab label="Flight List" component={Link} to="/" />
              <Tab label="Add Flight" component={Link} to="/flight_form" />
            </Tabs>
          </AppBar>

          <Grid item xs={12}>
            <Paper className={classes.root}>
              <Switch>
                <Route path="/" exact component={() => flightComponent} />
                <Route path="/flight" exact component={() => flightComponent} />
                <Route path="/flight_form" component={() => formComponent} />
                <Route component={NotMatch} />
              </Switch>
            </Paper>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
