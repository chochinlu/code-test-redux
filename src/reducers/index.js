import { combineReducers } from 'redux';
import cheap from './cheapReducer';

const appReducer = combineReducers({
  cheap
});

export default appReducer;
