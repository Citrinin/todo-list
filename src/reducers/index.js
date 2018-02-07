import { combineReducers } from 'redux';
import tasks from './tasks';
import filter from './filter';

const reducers = combineReducers({
    tasks,
    filter
});

export default reducers;