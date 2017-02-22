import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 

import App from './App';
import './index.css';

const initialState = [
  'Smells like spirit',
  'Enter Sandman'
];

function playlist(state = initialState, action) {
  // функция которая будет изменять нам стор
  // console.log(action);
  if (action.type === 'ADD_TRACK') {
    return [
    ...state, // спред ???
    // ... добавит значение в массив и вернет новый массив
    action.payload
    ]
  }
  return state;
}

const store = createStore(playlist);
// store - хранилище всех наших данных в приложении

ReactDOM.render(
  //этот стор будет доступен в каждой чайлдовой компоненте провайдера
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);

// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
// const list = document.querySelectorAll('.list')[0];

// store.subscribe(() => {
//   // console.log('subscribe',store.getState());
//   list.innerHTML = '';
//   trackInput.value = '';
//   store.getState().forEach(track => {
//     const li = document.createElement('li');
//     li.textContent = track;
//     list.appendChild(li);
//   });
// })
// // подписка когда у нас будет совершаться какоето собитие, изменения будут в консоли 

// addTrackBtn.addEventListener('click', () => {
//   const trackName = trackInput.value;
//   // console.log('trackName', trackName);// вешает лисенер на кнопку addTrack
//   store.dispatch({ type: 'ADD_TRACK', payload: trackName});
//     // вистреливает екшин, меняет store
//     // принимает на вход обьект поле type обезательное
// }); 
