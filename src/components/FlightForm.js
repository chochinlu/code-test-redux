import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { formatedDate } from '../utils/reformat';
import uuid from 'uuid/v4';

const styles = theme => ({
  heading: {
    paddingTop: theme.spacing.unit
  },
  form: {
    maxWidth: '80vw'
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dateTimeField: {
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  buttonGroup: {
    marginTop: theme.spacing.unit * 2
  },
  button: {
    padding: theme.spacing.unit
  }
});

const initData = {
  tag: 'cheap',
  departure: '',
  arrival: '',
  departureTime: '',
  arrivalTime: ''
};

const FlightForm = props => {
  const [data, setData] = useState(initData);

  const clear = () => {
    setData(initData);
  };

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value
    });
  };

  const notFillAll = () => {
    const { departure, arrival, departureTime, arrivalTime } = data;
    if (departure === '') return true;
    if (arrival === '') return true;
    if (departureTime === '') return true;
    if (arrivalTime === '') return true;
    return false;
  };

  const handleSubmit = event => {
    event.preventDefault();
    //TODO: check if data valid

    const { tag, departure, arrival, departureTime, arrivalTime } = data;
    // console.log(data);

    const newData = {
      id: uuid(),
      tag,
      departure,
      arrival,
      departureTime: formatedDate(departureTime),
      arrivalTime: formatedDate(arrivalTime)
    };

    tag === 'cheap'
      ? props.handleAddCheapFlight(newData)
      : props.handleAddBusinessFlight(newData);

    clear();
  };

  // console.log(data);
  const { classes } = props;
  return (
    <>
      <Typography variant="h4" gutterBottom className={classes.heading}>
        Add Flight
      </Typography>

      <Grid container justify="center">
        <form
          noValidate
          autoComplete="off"
          onSubmit={event => handleSubmit(event)}
        >
          <Grid container spacing={24} className={classes.form}>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                id="tag"
                name="tag"
                onChange={event => handleChange(event)}
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
                <option key="cheap" value="cheap" defaultValue>
                  Cheap
                </option>
                <option key="business" value="business">
                  Business
                </option>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="departure"
                name="departure"
                label="Departure"
                margin="normal"
                value={data.departure}
                onChange={event => handleChange(event)}
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="departureTime"
                name="departureTime"
                label="Departure Time"
                type="datetime-local"
                value={data.departureTime} // defaultValue="2017-05-24T10:30"
                onChange={event => handleChange(event)}
                className={classes.dateTimeField}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="arrival"
                name="arrival"
                label="Arrival"
                margin="normal"
                value={data.arrival}
                onChange={event => handleChange(event)}
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="arrivalTime"
                name="arrivalTime"
                label="arrival Time"
                type="datetime-local"
                // defaultValue="2017-05-24T10:30"
                value={data.arrivalTime}
                onChange={event => handleChange(event)}
                className={classes.dateTimeField}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                type="button"
                variant="outlined"
                className={classes.button}
                onClick={() => clear()}
              >
                Clear
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                type="submit"
                variant="outlined"
                className={classes.button}
                disabled={notFillAll()}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </>
  );
};

export default withStyles(styles)(FlightForm);
