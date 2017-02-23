var mocApiData = [ // замокаем треки чтобы они рендерились
  {
    id: 1,
    name: 'Enter Sandman'
  },
  {
    id: 2,
    name: 'Welcome Home'
  },
  {
    id: 3,
    name: 'Master of Puppets'
  },
  {
    id: 4,
    name: 'Back in Black'
  },
  {
    id: 5,
    name: 'Curtain Call'
  },
];


export const getTracks = () => dispatch => { // 3. делаем любые ассинхронные операции
  setTimeout(() => {
    console.log('I got tracks');
    dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mocApiData }) // 3.1 вызываем диспатч при таймауте
  }, 2000)
}