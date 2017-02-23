const initialState = [
  'My home playlist',
  'My work playlist'
];

export default function playlist(state = initialState, action) {
  // функция которая будет изменять нам стор
  if (action.type === 'ADD_PLAYLIST') {
    return state;
  } else if (action.type === 'DELETE_PLAYLIST') {
    return state;
  }
  return state;
}