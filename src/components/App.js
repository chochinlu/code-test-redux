import React, { useState, useEffect } from 'react';
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

const initValue = ['/', 'flight'].includes(window.location.pathname) ? 0 : 1;

const App = props => {
  const [value, setValue] = useState(initValue);

  const handleChange = (event, value) => {
    setValue(value);
  };

  useEffect(() => {
    props.handleGetCheap();
    props.handleGetBusiness();
  }, []);

  const { classes, cheap, business } = props;
  const { handleAddCheapFlight, handleAddBusinessFlight } = props;

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
            value={value}
            onChange={(event, value) => handleChange(event, value)}
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
};

export default withStyles(styles)(App);
