import { combineReducers } from 'redux';
import cheap from './cheapReducer';
import business from './businessReducer';

const appReducer = combineReducers({
  cheap,
  business
});

export default appReducer;
