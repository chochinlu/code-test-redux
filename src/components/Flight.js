import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  heading: {
    paddingTop: theme.spacing.unit
  },
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
  icon: {
    fontSize: 12
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

  const [departureDesc, setDepartureDesc] = useState(false);
  const [arrivalDesc, setArrivalDesc] = useState(false);
  const [departureTimeDesc, setDepartureTimeDesc] = useState(false);
  const [arrivalTimeDesc, setArrivalTimeDesc] = useState(false);

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

  const sortDeparture = () => {
    setDepartureDesc(!departureDesc);

    let source = filterdSource;
    source = departureDesc
      ? source.sort((a, b) => a.departure.localeCompare(b.departure))
      : source.sort((a, b) => b.departure.localeCompare(a.departure));

    setFilterdSource(source);
  };

  const sortArrival = () => {
    setArrivalDesc(!arrivalDesc);
    let source = filterdSource;
    source = arrivalDesc
      ? source.sort((a, b) => a.arrival.localeCompare(b.arrival))
      : source.sort((a, b) => b.arrival.localeCompare(a.arrival));
    setFilterdSource(source);
  };

  const sortDepartureTime = () => {
    setDepartureTimeDesc(!departureTimeDesc);
    let source = filterdSource;
    source = departureTimeDesc
      ? source.sort((a, b) => a.departureTime.localeCompare(b.departureTime))
      : source.sort((a, b) => b.departureTime.localeCompare(a.departureTime));
    setFilterdSource(source);
  };

  const sortArrivalTime = () => {
    setArrivalTimeDesc(!arrivalTimeDesc);
    let source = filterdSource;
    source = arrivalTimeDesc
      ? source.sort((a, b) => a.arrivalTime.localeCompare(b.arrivalTime))
      : source.sort((a, b) => b.arrivalTime.localeCompare(a.arrivalTime));
    setFilterdSource(source);
  };

  const upArrow = up =>
    up ? (
      <ArrowUpwardIcon className={classes.icon} />
    ) : (
      <ArrowDownwardIcon className={classes.icon} />
    );

  return (
    <>
      <Typography variant="h4" gutterBottom className={classes.heading}>
        Flight
      </Typography>
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
                onClick={() => sortDeparture()}
              >
                Departure
                {upArrow(departureDesc)}
              </TableCell>
              <TableCell
                className={classes.sortHeader}
                onClick={() => sortArrival()}
              >
                Arrival
                {upArrow(arrivalDesc)}
              </TableCell>
              <TableCell
                className={classes.sortHeader}
                onClick={() => sortDepartureTime()}
              >
                Departure Time
                {upArrow(departureTimeDesc)}
              </TableCell>
              <TableCell
                className={classes.sortHeader}
                onClick={() => sortArrivalTime()}
              >
                A rrival Time
                {upArrow(arrivalTimeDesc)}
              </TableCell>
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
