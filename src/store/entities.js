import { combineReducers } from '@reduxjs/toolkit';
import tasksReducer from './tasks';
import projectsReducer from './projects';

export default combineReducers({
  tasks: tasksReducer,
  projects: projectsReducer,
});
