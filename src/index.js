import store from './store';
import { addTask, deleteTask } from './actions';

const unsubscribe = store.subscribe(() => {
  console.log('Store changed 🗂', store.getState());
});

store.dispatch(addTask('Clean the room'));

store.dispatch(addTask('Read a book'));

store.dispatch(deleteTask(1));

unsubscribe();
