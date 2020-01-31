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
import ChooseAreaCode from './ChooseAreaCode';
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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: '0.5rem',
    fontSize: '1rem',
  },
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
          <Typography color="textPrimary">Phone Numbers</Typography>
        </Breadcrumbs>

        <Typography component="h1" variant="h3" className={classes.title}>
          Phone Numbers
        </Typography>

        <AddButton />

        <Paper elevation={3} className={classes.paper}>
          <Typography component="h1" variant="h6" className={classes.h6}>
            Select an Area Code
          </Typography>
          <Box>
            <ChooseAreaCode />
          </Box>
        </Paper>

        <Table />

      </Container>
    </Drawer>
  );
}
