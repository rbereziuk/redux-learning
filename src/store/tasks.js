import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

// --- Reducer ---
let lastId = 0;

// Reducer - pure function
// When the app starts running, redux calls reducer for setup the store
const slice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    // actions => action handlers
    taskAdded: (tasks, action) => {
      tasks.push({
        id: ++lastId,
        description: action.payload.description,
        isComplete: false,
      });
    },
    taskCompleted: (tasks, action) => {
      const index = tasks.findIndex(task => task.id === action.payload.id);
      tasks[index].isComplete = true;
    },
    taskDeleted: (tasks, action) => {
      return tasks.filter(task => task.id !== action.payload.id);
    },
  },
});

export const getUncompletedTasks = createSelector(
  state => state.entities.tasks,
  tasks => tasks.filter(task => task.isComplete !== true)
);

export const { taskAdded, taskCompleted, taskDeleted } = slice.actions;
export default slice.reducer;
