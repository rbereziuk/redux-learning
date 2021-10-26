import store from './store';
import { addTask, completeTask, deleteTask } from './store/tasks';

const unsubscribe = store.subscribe(() => {
  console.log('Store changed 🗂', store.getState());
});

store.dispatch(addTask('Clean the room'));
store.dispatch(addTask('Read a book'));

store.dispatch(completeTask(1));

store.dispatch(deleteTask(1));

unsubscribe();
