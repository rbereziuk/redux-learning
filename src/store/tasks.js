import { createAction } from '@reduxjs/toolkit';

// Action creators
export const addTask = createAction('ADD_TASK');
export const completeTask = createAction('COMPLETE_TASK');
export const deleteTask = createAction('DELETE_TASK');

// --- Reducer ---
const initialState = [];
let lastId = 0;

// Reducer - pure function
// When the app starts running, redux calls reducer for setup the store
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case addTask.type:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          isComplete: false,
        },
      ];
    case completeTask.type:
      return state.map(task =>
        task.id === action.payload.id ? { ...task, isComplete: true } : task
      );

    case deleteTask.type:
      return state.filter(task => task.id !== action.payload.id);
    default:
      return state;
  }
}
