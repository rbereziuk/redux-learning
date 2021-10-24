import store from './store';
import * as actions from './actionTypes';

const unsubscribe = store.subscribe(() => {
  console.log('Store changed 🗂', store.getState());
});

store.dispatch({
  type: actions.ADD_TASK,
  payload: {
    description: 'Clean the room',
  },
});

store.dispatch({
  type: actions.ADD_TASK,
  payload: {
    description: 'Read the book',
  },
});

store.dispatch({
  type: actions.DELETE_TASK,
  payload: {
    id: 1,
  },
});

unsubscribe();
