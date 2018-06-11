import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
export * from './actions';

export default combineReducers({
  todos,
  visibilityFilter
});

