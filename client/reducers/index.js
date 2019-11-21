import { combineReducers } from 'redux';

const initialState = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
};
/**
- First Name
- Last Name
- Username
- Email
- Password
- Confirm Password
 */

const formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SUBMIT_FORM':
      return { ...state, ...payload };
    default:
      return state;
  }
};

const rootReducer = {
  form: formReducer
};

export default combineReducers(rootReducer);
