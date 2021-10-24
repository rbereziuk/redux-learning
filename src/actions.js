import * as actions from './actionTypes';

export const addTask = description => ({
  type: actions.ADD_TASK,
  payload: {
    description,
  },
});

export const deleteTask = id => ({
  type: actions.DELETE_TASK,
  payload: {
    id,
  },
});
