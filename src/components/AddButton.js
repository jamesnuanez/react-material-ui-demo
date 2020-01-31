import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[2],
    fontSize: '1rem',
    marginRight: '1rem',
    padding: '0.5rem 1rem',
  },
}))(Tooltip);

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: '1rem',
    right: '2rem',
    [theme.breakpoints.down('sm')]: {
      right: '0',
    },
  },
}));

export default function AddButton() {
  const classes = useStyles();

  return (
    <LightTooltip title="Add a customer" placement="left">
      <Fab color="primary" aria-label="add" className={classes.root}>
        <AddIcon />
      </Fab>
    </LightTooltip>
  );
}
