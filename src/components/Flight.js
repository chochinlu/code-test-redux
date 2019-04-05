import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit / 2
  },
  input: {
    margin: theme.spacing.unit * 2
  },
  table: {
    minWidth: 700
  },
  sortHeader: {
    cursor: 'pointer'
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
});

const Flight = ({ classes, cheap, business }) => {
  const initSource = [...cheap.flight, ...business.flight];

  const [tagFilter, setTagFilter] = useState('all');
  const [departureFilter, setDepartureFilter] = useState('');
  const [arrivalFilter, setArrivalFilter] = useState('');
  const [filterdSource, setFilterdSource] = useState(initSource);

  const clear = () => {
    setTagFilter('all');
    setDepartureFilter('');
    setArrivalFilter('');
    setFilterdSource(initSource);
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

    setFilterdSource(source);
  };

  const handleChangeTagFilter = value => {
    setTagFilter(value);
    filterAll('tag', value);
  };

  const handleChangeDepartureFilter = event => {
    const value = event.target.value;
    setDepartureFilter(value);
    filterAll('departure', value);
  };

  const handleChangeArrivalFilter = event => {
    const value = event.target.value;
    setArrivalFilter(value);
    filterAll('arrival', value);
  };

  const sort = value => {
    console.log(value);
  };

  return (
    <>
      <h1>Flight</h1>
      {cheap.loading && <div>Loading Cheap flight...</div>}
      {cheap.error && <div>{cheap.error}</div>}
      {business.loading && <div>Loading Business flight...</div>}
      {business.error && <div>{business.error}</div>}

      {/* filter */}
      {(cheap.flight.length > 0 || business.flight.length > 0) && (
        <div>
          <Button
            size="small"
            variant={tagFilter === 'all' ? 'contained' : 'outlined'}
            color="primary"
            className={classes.button}
            onClick={() => handleChangeTagFilter('all')}
          >
            All
          </Button>
          <Button
            size="small"
            variant={tagFilter === 'cheap' ? 'contained' : 'outlined'}
            color="primary"
            className={classes.button}
            onClick={() => handleChangeTagFilter('cheap')}
          >
            only Cheap
          </Button>
          <Button
            size="small"
            variant={tagFilter === 'business' ? 'contained' : 'outlined'}
            color="primary"
            className={classes.button}
            onClick={() => handleChangeTagFilter('business')}
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
            onChange={event => handleChangeDepartureFilter(event)}
          />
          <Input
            placeholder="Arrival"
            className={classes.input}
            inputProps={{
              'aria-label': 'Arrival'
            }}
            value={arrivalFilter}
            onChange={event => handleChangeArrivalFilter(event)}
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
      )}

      {filterdSource.length > 0 && (
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Class</TableCell>
              <TableCell
                className={classes.sortHeader}
                onClick={() => sort('departure')}
              >
                Departure
              </TableCell>
              <TableCell>Arrival</TableCell>
              <TableCell>Departure Time</TableCell>
              <TableCell>A rrival Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterdSource.map(f => (
              <TableRow key={f.id} className={classes.row} hover>
                <TableCell>{f.tag}</TableCell>
                <TableCell>{f.departure}</TableCell>
                <TableCell> {f.arrival}</TableCell>
                <TableCell>{f.departureTime}</TableCell>
                <TableCell>{f.arrivalTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default withStyles(styles)(Flight);
