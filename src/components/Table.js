import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.background.default,
    color: '#565656',
    padding: '1.5rem',
  },
  body: {
    fontSize: 14,
    padding: '1.5rem',
  },
}))(TableCell);

const phoneNumbers = [
  { number: '(999) 888-7777', state: 'Alabama' },
  { number: '(555) 444-3333', state: 'Alaska' },
  { number: '(222) 111-2222', state: 'Arizona' },
];

const useStyles = makeStyles({
  table: {
  },
  paper: {
    borderRadius: '0.5rem',
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} elevation={3} className={classes.paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Phone Numbers</StyledTableCell>
            <StyledTableCell>State</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {phoneNumbers.map(number => (
            <TableRow key={number.number}>
              <StyledTableCell component="th" scope="row">
                {number.number}
              </StyledTableCell>
              <StyledTableCell>{number.state}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}