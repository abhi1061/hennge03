import _ from 'lodash';

import emailData from './emails.json';
import {
  GET_EMAILS,
  SET_SELECTED_EMAIL,
  SET_DIALOG_CLOSE,
} from '../Actions/types';

const INITIAL_STATE = {
  emails: emailData,
  data: [],
  selected: [],
  openBodyDialog: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EMAILS:
      return {
        ...state,
        data: filterDataByDateRange(state.emails, action.payload),
        selected: [],
      };
    case SET_SELECTED_EMAIL:
      return {
        ...state,
        selected: [
          ...state.selected,
          findtDataById(state.emails, action.payload),
        ],
        openBodyDialog: true,
      };
    case SET_DIALOG_CLOSE:
      return {
        ...state,
        selected: [],
        openBodyDialog: false,
      };
    default:
      return state;
  }
};

const findtDataById = (data, id) => {
  return _.find(data, ['id', id]);
};

const filterDataByDateRange = (data, dates) => {
  const { startDate, endDate } = dates;
  return _.filter(data, function(p) {
    return (
      p.internalDate >=
        startDate.format('YYYY-MM-DD[T]HH:mm:ss[Z]').toString() &&
      p.internalDate <= endDate.format('YYYY-MM-DD[T]HH:mm:ss[Z]').toString()
    );
  });
};
