import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router'

import App from './App';
import './index.css';

import reducer from './reducers';
import About from './About';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
// store - хранилище всех наших данных в приложении

ReactDOM.render(
  //этот стор будет доступен в каждой чайлдовой компоненте провайдера
  <Provider store={store}> 
    <Router history={hashHistory}> 
      <Route path="/" component={App}/>
      <Route path="/about" component={About}/>
    </Router>
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
