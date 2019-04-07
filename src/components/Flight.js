import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';
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
    cursor: 'pointer',
    fontSize: 12
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
    tag: {
      name: 'class'
    },
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

  const enhancedTableHead = (
    <TableHead>
      <TableRow>
        {Object.keys(field).map(r => (
          <TableCell
            key={field[r].name}
            className={classes.sortHeader}
            padding="default"
          >
            {field[r].name === field.tag.name ? (
              field.tag.name
            ) : (
              <TableSortLabel
                active
                direction={field[r].value ? 'desc' : 'asc'}
                onClick={() => sort(field[r])}
              >
                {field[r].name}
              </TableSortLabel>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );

  const tableFooter = (
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
          {enhancedTableHead}
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
          {tableFooter}
        </Table>
      )}
    </>
  );
};

export default withStyles(styles)(Flight);
