import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Drawer from './Drawer';
import TextField from '@material-ui/core/TextField';
import ChooseState from './ChooseState';
import Table from './Table';
import AddButton from './AddButton';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      padding: '0.5rem',
    },
  },
  breadcrumbs: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginRight: '4rem',
      marginTop: 0,
    },
  },
  title: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginRight: '4rem',
    },
  },
  h6: {
    margin: '0 0 1rem',
  },
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: '2rem 1.5rem',
    borderRadius: '0.5rem',
  },
  box: {
    '& > *': {
      margin: '0 0.5rem 0.5rem 0'
    }
  }
}));

export default () => {
  const classes = useStyles();
  return(
    <Drawer>
      <Container component="main" className={classes.container}>

        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          className={classes.breadcrumbs}
        >
          <Link component={NavLink} to='/'>
            App
          </Link>
          <Link component={NavLink} to='/account'>
            Account
          </Link>
          <Typography color="textPrimary">Customers</Typography>
        </Breadcrumbs>

        <Typography component="h1" variant="h3" className={classes.title}>
          Customers
        </Typography>

        <AddButton />

        <Paper elevation={3} className={classes.paper}>
          <Typography component="h1" variant="h6" className={classes.h6}>
            Add a customer
          </Typography>


          <Box className={classes.box}>
            <TextField label="Name" variant="outlined" />
            <ChooseState />
          </Box>
        </Paper>

        <Table />

      </Container>
    </Drawer>
  );
}
