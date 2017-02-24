import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getTracks } from './actions/tracks';
import Menu from './Menu';

const App = ({ tracks, onAddTrack, onFindTrack, onGetTracks, ownProps }) => { // переделываем клас на функцию
  console.log('ownProps', ownProps);
  // нужно вместо this. задать начальное значение для локальных переменных
  // но с помощью let, т.к. мы будем их переприсваивать
  let trackInput = '';
  let searchInput = '';

  const addTrack = () => {
    console.log('addTrack', trackInput.value); // метод попадает с props прокидываем его на вход
    onAddTrack(trackInput.value);
    trackInput.value = ''
  }

  const findTrack = () => {
    console.log('findTrack', searchInput.value);
    onFindTrack(searchInput.value);
  }

  return (
  <div>
    <Menu/>
    <div>
      <input type="text" ref={(input) => {trackInput = input}} /> 
      <button onClick={addTrack}>Add track</button>
    </div>
    <div>
      <input type="text" ref={(input) => {searchInput = input}} /> 
      <button onClick={findTrack}>Find track</button>
    </div>
    <div>
      <button onClick={onGetTracks} >Get tracks</button>
    </div>
    <ul>
      {tracks.map((track, index) =>
        <li key={index}> 
          <Link to={`/tracks/${track.id}`}>{track.name}</Link>
        </li>
      )}
    </ul>
  </div>
  );
}

// ref={(input) => {this.trackInput = input} - используем ref, чтобы не слушать локальный state
// когда проходит рендер в this.trackInput присв ссылка на DOM елемент imput

export default connect(  // декоратор с редакс
  (state, ownProps) => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
    ownProps
  }), // mapStateToProps она мапит стейт с стора(состояния) в пропс реакт компонента
  dispatch => ({
    onAddTrack: (name) => { // меняем екшин, чтобы он нам добавлял обьекты а не строки
      const payload = {
        id: Date.now().toString(),
        name
      }
      dispatch({ type: 'ADD_TRACK', payload })
    },
    onFindTrack: (name) => { // новый метод который будет диспатчить новый инвент с типом FIND_TRACK
      console.log('name', name);
      dispatch({ type: 'FIND_TRACK', payload: name});
    },
    onGetTracks: () => { // 2. в функции мы возвр. другую функцию у которой есть аргумент диспатч
      dispatch(getTracks()); //1. вызываем диспатч но не с обьектом а с функцией
    }
  })
  // диспатчим ивент по клику
)(App); // передается на вход в connect как чистая функция
