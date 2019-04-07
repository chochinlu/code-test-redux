import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit / 2
  },
  input: {
    margin: theme.spacing.unit * 2
  }
});

const FlightFilter = props => {
  const [tagFilter, setTagFilter] = useState('all');
  const [departureFilter, setDepartureFilter] = useState('');
  const [arrivalFilter, setArrivalFilter] = useState('');

  const { classes, cheap, business, setFilteredSource, setPage } = props;
  const initSource = [...cheap.flight, ...business.flight];

  const clear = () => {
    setTagFilter('all');
    setDepartureFilter('');
    setArrivalFilter('');
    setFilteredSource(initSource);
  };

  const tagFiltedSource = (value = tagFilter) => {
    let source;
    if (value === 'all') {
      source = initSource;
    }
    if (value === 'cheap') {
      source = [...cheap.flight];
    }
    if (value === 'business') {
      source = [...business.flight];
    }
    return source;
  };

  const departureFilteredSource = (source, value = departureFilter) =>
    value !== ''
      ? source.filter(s => {
          const re = new RegExp(value);
          return re.test(s.departure.toLowerCase());
        })
      : source;

  const arrivalFilteredSource = (source, value = arrivalFilter) =>
    value !== ''
      ? source.filter(s => {
          const re = new RegExp(value);
          return re.test(s.arrival.toLowerCase());
        })
      : source;

  const filterAll = (name, value) => {
    value = value.toLowerCase();
    let source;
    source = name === 'tag' ? tagFiltedSource(value) : tagFiltedSource();
    source =
      name === 'departure'
        ? departureFilteredSource(source, value)
        : departureFilteredSource(source);
    source =
      name === 'arrival'
        ? arrivalFilteredSource(source, value)
        : arrivalFilteredSource(source);

    setFilteredSource(source);
    setPage(0);
  };

  const filterField = {
    tag: {
      name: 'tag',
      preValue: tagFilter,
      setter: setTagFilter
    },
    departure: {
      name: 'departure',
      preValue: departureFilter,
      setter: setDepartureFilter
    },
    arrival: {
      name: 'arrival',
      preValue: arrivalFilter,
      setter: setArrivalFilter
    }
  };

  const handleChangeFilter = (field, value) => {
    field.setter(value);
    filterAll(field.name, value);
  };

  return (
    <div>
      <Button
        size="small"
        variant={tagFilter === 'all' ? 'contained' : 'outlined'}
        color="primary"
        className={classes.button}
        onClick={() => handleChangeFilter(filterField.tag, 'all')}
      >
        All
      </Button>
      <Button
        size="small"
        variant={tagFilter === 'cheap' ? 'contained' : 'outlined'}
        color="primary"
        className={classes.button}
        onClick={() => handleChangeFilter(filterField.tag, 'cheap')}
      >
        only Cheap
      </Button>
      <Button
        size="small"
        variant={tagFilter === 'business' ? 'contained' : 'outlined'}
        color="primary"
        className={classes.button}
        onClick={() => handleChangeFilter(filterField.tag, 'business')}
      >
        only Business
      </Button>
      <Input
        placeholder="Departure"
        className={classes.input}
        inputProps={{
          'aria-label': 'Departure'
        }}
        value={departureFilter}
        onChange={event =>
          handleChangeFilter(filterField.departure, event.target.value)
        }
      />
      <Input
        placeholder="Arrival"
        className={classes.input}
        inputProps={{
          'aria-label': 'Arrival'
        }}
        value={arrivalFilter}
        onChange={event =>
          handleChangeFilter(filterField.arrival, event.target.value)
        }
      />
      <Button
        size="small"
        variant="outlined"
        className={classes.button}
        onClick={() => clear()}
      >
        CLEAR FILTER
      </Button>
    </div>
  );
};

export default withStyles(styles)(FlightFilter);
