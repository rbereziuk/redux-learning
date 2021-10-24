const initialState = [];
let lastId = 0;

// Reducer - pure function
// When the app starts running, redux calls reducer for setup the store
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          isComplete: false,
        },
      ];
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload.id);
    default:
      return state;
  }
}
