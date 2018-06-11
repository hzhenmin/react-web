import {
    handleAction
} from 'redux-actions';
import { setVisibilityFilter, VisibilityFilters } from './actions';
export const defaultFilter = VisibilityFilters.SHOW_ALL;

const reducer = handleAction(
    setVisibilityFilter,
    (filter, action) => (action.payload),
    defaultFilter
);

export default reducer;