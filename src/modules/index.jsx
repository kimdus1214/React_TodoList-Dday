import { combineReducers } from 'redux';
import DdayCounter from './DdayCounter';
import TodoList from "./TodoList";

const RootReducer = combineReducers({
    DdayCounter,
    TodoList
});

export default RootReducer;