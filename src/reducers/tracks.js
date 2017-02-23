const initialState = [];

export default function playlist(state = initialState, action) {
  // функция которая будет изменять нам стор
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  } else if (action.type === 'DELETE_TRACK') {
    return state;
  }
  return state;
}