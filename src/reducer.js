import { combineReducers } from 'redux';
import comments from './comments.js';
import users from './users.js';

export const reducer = combineReducers({
  comments,
  users
});

const initialState = {
  comments: [],
  users: []
};

export default reducer;