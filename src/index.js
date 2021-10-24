import store from './store';

console.log(store.getState());

store.dispatch({
  type: 'ADD_TASK',
  payload: {
    description: 'Clean the room',
  },
});

store.dispatch({
  type: 'ADD_TASK',
  payload: {
    description: 'Read the book',
  },
});

store.dispatch({
  type: 'DELETE_TASK',
  payload: {
    id: 1,
  },
});

console.log(store.getState());
