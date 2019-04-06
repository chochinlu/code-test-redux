import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Typography from '@material-ui/core/Typography';
import TablePaginationActionsWrapped from './TablePaginationActionsWrapped';

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
  const [filterdSource, setFilteredSource] = useState(initSource);

  const [departureDesc, setDepartureDesc] = useState(false);
  const [arrivalDesc, setArrivalDesc] = useState(false);
  const [departureTimeDesc, setDepartureTimeDesc] = useState(false);
  const [arrivalTimeDesc, setArrivalTimeDesc] = useState(false);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSetPage = (event, page) => {
    setPage(parseInt(page, 10));
  };

  const handleChangeRowsPerPage = event => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value));
  };

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

  const field = {
    departure: {
      name: 'departure',
      value: departureDesc,
      setter: setDepartureDesc
    },
    arrival: {
      name: 'arrival',
      value: arrivalDesc,
      setter: setArrivalDesc
    },
    dTime: {
      name: 'departureTime',
      value: departureTimeDesc,
      setter: setDepartureTimeDesc
    },
    aTime: {
      name: 'arrivalTime',
      value: arrivalTimeDesc,
      setter: setArrivalTimeDesc
    }
  };

  const sort = field => {
    const { name, value, setter } = field;

    setter(!field.value);
    let source = filterdSource;
    source = value
      ? source.sort((a, b) => a[name].localeCompare(b[name]))
      : source.sort((a, b) => b[name].localeCompare(a[name]));

    setFilteredSource(source);
    setPage(0);
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
                onClick={() => sort(field.departure)}
              >
                Departure
                {upArrow(departureDesc)}
              </TableCell>
              <TableCell
                className={classes.sortHeader}
                onClick={() => sort(field.arrival)}
              >
                Arrival
                {upArrow(arrivalDesc)}
              </TableCell>
              <TableCell
                className={classes.sortHeader}
                onClick={() => sort(field.dTime)}
              >
                Departure Time
                {upArrow(departureTimeDesc)}
              </TableCell>
              <TableCell
                className={classes.sortHeader}
                onClick={() => sort(field.aTime)}
              >
                Arrival Time
                {upArrow(arrivalTimeDesc)}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterdSource
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(f => (
                <TableRow key={f.id} className={classes.row} hover>
                  <TableCell>{f.tag}</TableCell>
                  <TableCell>{f.departure}</TableCell>
                  <TableCell> {f.arrival}</TableCell>
                  <TableCell>{f.departureTime}</TableCell>
                  <TableCell>{f.arrivalTime}</TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                count={filterdSource.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  native: true
                }}
                onChangePage={(event, page) => handleSetPage(event, page)}
                onChangeRowsPerPage={event => handleChangeRowsPerPage(event)}
                ActionsComponent={TablePaginationActionsWrapped}
              />
            </TableRow>
          </TableFooter>
        </Table>
      )}
    </>
  );
};

export default withStyles(styles)(Flight);
