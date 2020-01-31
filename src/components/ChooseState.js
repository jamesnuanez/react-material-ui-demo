import React from 'react';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    display: 'inline-block',
    borderRadius: '0.2rem',
  },
  outlined: {
  },
  label: {
    display: 'block',
  },
  input: {
    display: 'inline-block',
    outline: 'none',
    border: 0,
    borderRadius: '0.2rem',
    fontSize: '1rem',
    boxShadown: 'none',
  },
  listbox: {
    margin: 0,
    padding: 0,
    zIndex: 1,
    border: '2px solid ' + theme.palette.primary.main,
    borderBottomLeftRadius: '0.2rem',
    borderBottomRightRadius: '0.2rem',
    borderTop: 0,
    left: '0',
    right: '0',
    top: '90%',
    position: 'absolute',
    listStyle: 'none',
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    maxHeight: 200,
    '& li': {
      padding: '0.5rem 1rem',
    },
    '& li[data-focus="true"]': {
      backgroundColor: '#eee',
      cursor: 'pointer',
    },
    '& li:active': {
      backgroundColor: '#2977f5',
      color: 'white',
    },
  },
}));

export default function ChooseState() {
  const classes = useStyles();
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: states,
    getOptionLabel: option => option.state,
  });

  return (
    <div
      {...getRootProps()}
      className={
        groupedOptions.length > 0
          ? classes.container + ' ' + classes.outlined
          : classes.container
      }
    >
      <TextField
        className={classes.input}
        {...getInputProps()}
        label="State"
        variant="outlined"
      />
      {
        groupedOptions.length > 0 &&
        <ul className={classes.listbox} {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>{option.state}</li>
          ))}
        </ul>
      }
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const states = [
  { state: 'Alabama' },
  { state: 'Alaska' },
  { state: 'Arizona' },
  { state: 'Arkansas' },
  { state: 'California' },
  { state: 'Colorado' },
  { state: 'Connecticut' },
  { state: 'Delaware' },
  { state: 'Florida' },
  { state: 'Georgia' },
  { state: 'Hawaii' },
  { state: 'Idaho' },
  { state: 'Illinois' },
  { state: 'Indiana' },
  { state: 'Iowa' },
  { state: 'Kansas' },
  { state: 'Kentucky' },
  { state: 'Louisiana' },
  { state: 'Maine' },
  { state: 'Maryland' },
  { state: 'Massachusetts' },
  { state: 'Michigan' },
  { state: 'Minnesota' },
  { state: 'Mississippi' },
  { state: 'Missouri' },
  { state: 'Montana' },
  { state: 'Nebraska' },
  { state: 'Nevada' },
  { state: 'New Hampshire' },
  { state: 'New Jersey' },
  { state: 'New Mexico' },
  { state: 'New York' },
  { state: 'North Carolina' },
  { state: 'North Dakota' },
  { state: 'Ohio' },
  { state: 'Oklahoma' },
  { state: 'Oregon' },
  { state: 'Pennsylvania' },
  { state: 'Rhode Island' },
  { state: 'South Carolina' },
  { state: 'South Dakota' },
  { state: 'Tennessee' },
  { state: 'Texas' },
  { state: 'Utah' },
  { state: 'Vermont' },
  { state: 'Virginia' },
  { state: 'Washington' },
  { state: 'West Virginia' },
  { state: 'Wisconsin' },
  { state: 'Wyoming' },
];
