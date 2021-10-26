// --- Action types ---
const ADD_TASK = 'ADD_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';
const DELETE_TASK = 'DELETE_TASK';

// --- Actions ---
export const addTask = description => ({
  type: ADD_TASK,
  payload: {
    description,
  },
});

export const completeTask = id => ({
  type: COMPLETE_TASK,
  payload: {
    id,
  },
});

export const deleteTask = id => ({
  type: DELETE_TASK,
  payload: {
    id,
  },
});

// --- Reducer ---
const initialState = [];
let lastId = 0;

// Reducer - pure function
// When the app starts running, redux calls reducer for setup the store
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          isComplete: false,
        },
      ];
    case COMPLETE_TASK:
      return state.map(task =>
        task.id === action.payload.id ? { ...task, isComplete: true } : task
      );

    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload.id);
    default:
      return state;
  }
}
