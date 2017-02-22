// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

import { createStore } from 'redux';

function playlist(state = [], action) {
  // console.log(action);
  if (action.type === 'ADD_TRACK') {
    return [
    ...state,
    // ... добавит значение в массив и вернет новый массив
    action.payload
    ]
  }
  return state;
}

const store = createStore(playlist);
// store - хранилище всех наших данных в приложении

console.log(store.getState());

store.subscribe(() => {
  console.log('subscribe',store.getState());
})
// подписка когда у нас будет совершаться какоето собитие, изменения будут в консоли 

store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like spirit'})
// вистреливает екшин, меняет store
// принимает на вход обьект поле type обезательное
store.dispatch({ type: 'ADD_TRACK', payload: 'Enter Sandman'})