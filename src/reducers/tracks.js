const initialState = [
  {
    id: 123,
    name: 'My super track'
  }
];

export default function playlist(state = initialState, action) {
  // функция которая будет изменять нам стор
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  } else if (action.type === 'FETCH_TRACKS_SUCCESS') {
    return action.payload;
  }
  return state;
}