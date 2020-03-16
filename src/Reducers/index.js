import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import EmailReducer from './EmailReducer';

export default combineReducers({
  email: EmailReducer,
  form: reduxForm,
});
