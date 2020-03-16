import React from 'react';
import moment from 'moment-timezone';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import GetAppIcon from '@material-ui/icons/GetApp';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  root: {
    width: '100%',
    maxWidth: '60%',
    margin: '0 2em',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const handleClose = () => {
    props.setClose();
  };

  // Custom color for MUI bar.
  const GreyAppBar = withStyles(theme => ({
    root: {
      color: '#747474',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '20px',
      backgroundColor: '#F5F5F5',
    },
  }))(AppBar);

  const renderListItems = data => {
    return data.map(data => {
      return (
        <div>
          <Paper className={classes.root}>
            <Typography variant="subtitle2" gutterBottom>
              {moment(data.date).format('YYYY/MM/DD HH:MM:ss')}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {data.from}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {data.to
                .map(to => {
                  return to.value;
                })
                .join(', ')}
            </Typography>
            <Typography variant="body2 subtitle2" gutterBottom>
              {data.subject}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {data.body}
            </Typography>
            {data.attached.length ? (
              <Button
                size="small"
                variant="outlined"
                className="mb-1"
                endIcon={<GetAppIcon />}
              >
                {data.attached[0].filename}
              </Button>
            ) : null}
          </Paper>
          <Divider />
        </div>
      );
    });
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={props.open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <GreyAppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Details
            </Typography>
          </Toolbar>
        </GreyAppBar>
        <List>{renderListItems(props.selectedEmails)}</List>
      </Dialog>
    </div>
  );
}
