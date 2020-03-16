import moment from 'moment-timezone';
import * as actions from '../../Actions/EmailActions';
import * as types from '../../Actions/types';

describe('emailActions', () => {
  it('creates GET_EMAILS when fetching emails by date', () => {
    const startDate = moment().startOf('day');
    const endDate = moment().endOf('day');
    let emailFuction = actions.getEmailsByDateRange(startDate, endDate);
    emailFuction(receivedAction => {
      expect(receivedAction).toEqual({
        type: types.GET_EMAILS,
        payload: { startDate: startDate, endDate: endDate },
      });
    });
  });
  it('creates SET_SELECTED_EMAIL when selecting emails', () => {
    let selectedFuntion = actions.setSelectedEmail(1234);
    selectedFuntion(receivedAction => {
      expect(receivedAction).toEqual({
        type: types.SET_SELECTED_EMAIL,
        payload: 1234,
      });
    });
  });
});
