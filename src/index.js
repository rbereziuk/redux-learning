import store from './store';
import {
  taskAdded,
  taskCompleted,
  taskDeleted,
  getUncompletedTasks,
} from './store/tasks';
import { projectAdded } from './store/projects';

const unsubscribe = store.subscribe(() => {
  console.log('Store changed 🗂', store.getState());
});

store.dispatch(projectAdded({ name: 'Nutrition' }));

store.dispatch(taskAdded({ description: 'Clean the room' }));
store.dispatch(taskAdded({ description: 'Read a book' }));
store.dispatch(taskAdded({ description: 'Learn Redux' }));

store.dispatch(taskCompleted({ id: 1 }));

store.dispatch(taskDeleted({ id: 2 }));

const uncompletedTasks1 = getUncompletedTasks(store.getState());
const uncompletedTasks2 = getUncompletedTasks(store.getState());
console.log(
  'Does the selector return the same data:',
  uncompletedTasks1 === uncompletedTasks2
);

unsubscribe();
