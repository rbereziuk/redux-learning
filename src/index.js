import store from './store';
import { taskAdded, taskCompleted, taskDeleted } from './store/tasks';

const unsubscribe = store.subscribe(() => {
  console.log('Store changed 🗂', store.getState());
});

store.dispatch(taskAdded({ description: 'Clean the room' }));
store.dispatch(taskAdded({ description: 'Read a book' }));

store.dispatch(taskCompleted({ id: 1 }));

store.dispatch(taskDeleted({ id: 2 }));

unsubscribe();
