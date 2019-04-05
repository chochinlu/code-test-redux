import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { mockCheap } from '../utils/mockData';

const styles = theme => ({
  table: {
    minWidth: 700
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
});

const Flight = ({ cheap, ...props }) => {
  // console.log(JSON.stringify(cheap.flight));

  const { classes } = props;

  return (
    <>
      <h1>Flight</h1>
      {cheap.loading && <div>Loading Cheap flight...</div>}
      {cheap.error && <div>{cheap.error}</div>}

      {/* {cheap.flight.length > 0 && (
        <div>
          {cheap.flight.map(f => (
            <div key={f.id}>
              [cheap] {f.id}, {f.departure}, {f.arrival}, {f.departureTime},{' '}
              {f.arrivalTime}
            </div>
          ))}
        </div>
      )} */}

      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Class</TableCell>
            <TableCell>Departure</TableCell>
            <TableCell>Arrival</TableCell>
            <TableCell>Departure Time</TableCell>
            <TableCell>A rrival Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockCheap.map(f => (
            <TableRow key={f.id} className={classes.row} hover>
              <TableCell>cheap</TableCell>
              <TableCell>{f.departure}</TableCell>
              <TableCell> {f.arrival}</TableCell>
              <TableCell>{f.departureTime}</TableCell>
              <TableCell>{f.arrivalTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default withStyles(styles)(Flight);
