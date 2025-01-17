import {
  GET_EMAILS,
  SET_SELECTED_EMAIL,
  SET_DIALOG_CLOSE,
  SET_DIALOG_OPEN,
} from './types';

export const getEmailsByDateRange = (startDate, endDate) => dispatch => {
  dispatch({
    type: GET_EMAILS,
    payload: { startDate: startDate, endDate: endDate },
  });
};

export const setSelectedEmail = id => dispatch => {
  dispatch({ type: SET_SELECTED_EMAIL, payload: id });
};

export const setDialogClose = () => dispatch => {
  dispatch({ type: SET_DIALOG_CLOSE, payload: null });
};

export const setDialogOpen = () => dispatch => {
  dispatch({ type: SET_DIALOG_OPEN, payload: null });
};
