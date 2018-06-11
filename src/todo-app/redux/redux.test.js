import reducer from './index';
import {
    addTodo,
    removeTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions';
import {
    createStore
} from 'redux';

describe('redux', () => {
    let store;
    it('should create store with default state', () => {
        store = createStore(reducer, {});
        expect(store.getState().todos).toEqual([]);
        expect(store.getState().visibilityFilter).toEqual(VisibilityFilters.SHOW_ALL);
    });
    it('should dispatch addTodo action', () => {
        store.dispatch(addTodo('run a test'));
        expect(store.getState().todos).toEqual([{
            id: 0,
            text: 'run a test',
            completed: false
        }])
    });
    it('should dispatch toggleTodo action', () => {
        store.dispatch(toggleTodo(0));
        expect(store.getState().todos).toEqual([{
            id: 0,
            text: 'run a test',
            completed: true
        }])
    });
    it('should dispatch removeTodo action', () => {
        store.dispatch(removeTodo(0));
        expect(store.getState().todos).toEqual([]);
    });
    it('should dispatch setVisibility action', () => {
        store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
        expect(store.getState().visibilityFilter).toEqual(VisibilityFilters.SHOW_COMPLETED)
    });
})