import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250
  },
  dateTimeField: {
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250
  },
  buttonGroup: {
    marginTop: theme.spacing.unit * 2
  },
  button: {
    margin: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    width: 250
  }
});

const FlightForm = props => {
  const { classes } = props;
  return (
    <>
      <h1>Add One</h1>
      <form noValidate autoComplete="off">
        <div>
          <TextField
            id="standard-select-currency-native"
            select
            className={classes.textField}
            label="Flight Class"
            margin="normal"
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu
              }
            }}
          >
            <option key="cheap" value="cheap">
              Cheap
            </option>
            <option key="business" value="business">
              Business
            </option>
          </TextField>
        </div>

        <div>
          <TextField
            id="departure"
            label="Departure"
            margin="normal"
            className={classes.textField}
          />
          <TextField
            id="departureTime"
            label="Departure Time"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.dateTimeField}
            InputLabelProps={{
              shrink: true
            }}
          />
        </div>

        <div>
          <TextField
            id="arrival"
            label="Arrival"
            margin="normal"
            className={classes.textField}
          />

          <TextField
            id="arrivalTime"
            label="arrival Time"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.dateTimeField}
            InputLabelProps={{
              shrink: true
            }}
          />
        </div>

        <div className={classes.buttonGroup}>
          <Button type="button" variant="outlined" className={classes.button}>
            Clear
          </Button>
          <Button
            type="submit"
            variant="outlined"
            className={classes.button}
            disabled
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default withStyles(styles)(FlightForm);
