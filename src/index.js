import store from './store';
import { addTask, completeTask, deleteTask } from './store/tasks';

const unsubscribe = store.subscribe(() => {
  console.log('Store changed 🗂', store.getState());
});

store.dispatch(addTask({ description: 'Clean the room' }));
store.dispatch(addTask({ description: 'Read a book' }));

store.dispatch(completeTask({ id: 1 }));

store.dispatch(deleteTask({ id: 1 }));

unsubscribe();
