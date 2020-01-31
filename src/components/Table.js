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
    padding: '1.5rem',
  },
  body: {
    fontSize: 14,
    padding: '1.5rem',
  },
}))(TableCell);

const customers = [
  { id: 1, name: 'John', state: 'Alabama' },
  { id: 2, name: 'Jane', state: 'Alaska' },
  { id: 3, name: 'Jeff', state: 'Arizona' },
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
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>State</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map(customer => (
            <TableRow key={customer.id}>
              <StyledTableCell component="th" scope="row">
                {customer.name}
              </StyledTableCell>
              <StyledTableCell>{customer.state}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}