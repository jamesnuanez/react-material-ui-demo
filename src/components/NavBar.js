import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  toolbar: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '1.5rem',
    textTransform: 'none',
  },
  button: {
    textTransform: 'none',
    fontWeight: 600,
    padding: '0.5rem 2rem',
    '&:last-child': {
      flexGrow: 1,
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0.25rem',
    },
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <div>
          <Button className={classes.title} component={NavLink} to='/'>APP</Button>
          <Button className={classes.button} component={NavLink} to='/account'>Account</Button>
        </div>
        <div>
          <Button className={classes.button} component={NavLink} to='/'>Login</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
