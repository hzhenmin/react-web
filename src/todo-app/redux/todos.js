import {
  handleActions
} from 'redux-actions';
import { addTodo, toggleTodo, removeTodo } from './actions';

const defaultTodos = [];


const reducer = handleActions({
    [addTodo]: (todos, action) => {
      return [...todos, action.payload];
    },
    [toggleTodo]: (todos, action) => {
      return todos.map(todo => (todo.id === action.payload) ? { ...todo,
        completed: !todo.completed
      } : todo)
    },
    [removeTodo]: (todos, action) => {
      return todos.filter(todo => todo.id !== action.payload);
    }
  },
  defaultTodos
);

export default reducer;