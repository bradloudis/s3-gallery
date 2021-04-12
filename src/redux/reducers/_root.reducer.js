import { combineReducers } from 'redux';
import gallery from './gallery.reducer';

const rootReducer = combineReducers({
  gallery,
  // comment for white space peace of mind :-)
});

export default rootReducer;
