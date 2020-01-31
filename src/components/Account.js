import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DrawerResponsive from './DrawerResponsive';

const useStyles = makeStyles(theme => ({
  breadcrumbs: {
    marginTop: theme.spacing(4),
  },
  title: {
    marginTop: theme.spacing(2),
  },
  paper: {
    marginTop: theme.spacing(4),
    padding: '2rem 1.5rem',
    borderRadius: '0.5rem',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
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
    <DrawerResponsive>
      <Container component="main">

        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          className={classes.breadcrumbs}
        >
          <Link component={NavLink} to='/'>
            Material-UI
          </Link>
          <Link component={NavLink} to='/'>
            Core
          </Link>
          <Typography color="textPrimary">Breadcrumb</Typography>
        </Breadcrumbs>

        <Typography component="h1" variant="h3" className={classes.title}>
          Account
        </Typography>

        <Paper elevation={3} className={classes.paper}>
          Hello
        </Paper>
      </Container>
    </DrawerResponsive>
  );
}
