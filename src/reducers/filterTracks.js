const initialState = '';

export default function filterTracks(state = initialState, action) {
  // функция которая будет изменять нам стор
  if (action.type === 'FIND_TRACK') {
    return action.payload;
  }
  return state;
}