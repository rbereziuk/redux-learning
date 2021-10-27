import { createAction, createReducer } from '@reduxjs/toolkit';

// --- Action creators ---
export const addTask = createAction('ADD_TASK');
export const completeTask = createAction('COMPLETE_TASK');
export const deleteTask = createAction('DELETE_TASK');

// --- Reducer ---
let lastId = 0;

// Reducer - pure function
// When the app starts running, redux calls reducer for setup the store
export default createReducer([], {
  // key: value
  // actions: functions (event => event handler)
  [addTask.type]: (tasks, action) => {
    tasks.push({
      id: ++lastId,
      description: action.payload.description,
      isComplete: false,
    });
  },
  [completeTask.type]: (tasks, action) => {
    const index = tasks.findIndex(task => task.id === action.payload.id);
    tasks[index].isComplete = true;
  },
  [deleteTask.type]: (tasks, action) => {
    return tasks.filter(task => task.id !== action.payload.id);
  },
});
