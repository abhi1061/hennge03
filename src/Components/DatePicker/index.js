import React from 'react';
import moment from 'moment-timezone';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CalenderIcon from '../Images/icon_calender.svg';

import Calender from './Calender';
import './index.css';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '1em 0',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '20em',
    border: '1px solid #ddd',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  typography: {
    padding: theme.spacing(2),
    flex: 1,
  },
}));

export default function CustomizedInputBase(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { startDate, endDate, setDates, search } = props;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Paper className={classes.root}>
      <IconButton
        className={classes.iconButton}
        aria-label="calender"
        aria-describedby={id}
        onClick={handleClick}
      >
        <img alt="calender" src={CalenderIcon} className="calender-icon" />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Calender setDates={setDates} startDate={startDate} endDate={endDate} />
      </Popover>
      <InputBase
        disabled
        className={classes.input}
        placeholder={`${moment(startDate)
          .format('YYYY/MM/DD')
          .toString()} - ${moment(endDate)
          .format('YYYY/MM/DD')
          .toString()}`}
        value={`${moment(startDate)
          .format('YYYY/MM/DD')
          .toString()} - ${moment(endDate)
          .format('YYYY/MM/DD')
          .toString()}`}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        onClick={search}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.9803 18"
          height="20"
          width="20"
          fill="#666"
        >
          <path
            class="a"
            d="M17.81684,17.04048,12.86753,12.064a7.33089,7.33089,0,1,0-.79573.79645L17.018,17.83373a.5629.5629,0,1,0,.79885-.79325ZM7.32474,13.47375a6.16023,6.16023,0,0,1-6.16583-6.1546V7.31352a6.16022,6.16022,0,1,1,6.16583,6.16023Z"
          />
        </svg>
      </IconButton>
    </Paper>
  );
}
