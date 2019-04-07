import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Typography from '@material-ui/core/Typography';
import TablePaginationActionsWrapped from './TablePaginationActionsWrapped';

import FlightFilter from './FlightFilter';

const styles = theme => ({
  heading: {
    paddingTop: theme.spacing.unit
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
        <FlightFilter
          cheap={cheap}
          business={business}
          setFilteredSource={setFilteredSource}
          setPage={setPage}
        />
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
