import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  addTrack(){
    console.log('addTrack', this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = ''
  }

  findTrack() {
    console.log('findTrack', this.searchInput.value);
    this.props.onFindTrack(this.searchInput.value);
  }

  render() {
    console.log(this.props.tracks);
    return (
    <div>
      <div>
        <input type="text" ref={(input) => {this.trackInput = input}} /> 
        <button onClick={this.addTrack.bind(this)}>Add track</button>
      </div>
      <div>
        <input type="text" ref={(input) => {this.searchInput = input}} /> 
        <button onClick={this.findTrack.bind(this)}>Find track</button>
      </div>
      <ul>
        {this.props.tracks.map((track, index) =>
          <li key={index}> {track.name} </li>
        )}
      </ul>
    </div>
    );
  }
}

// ref={(input) => {this.trackInput = input} - используем ref, чтобы не слушать локальный state
// когда проходит рендер в this.trackInput присв ссылка на DOM елемент imput

export default connect(  // декоратор с редакс
  state => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
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
    }
  })
  // диспатчим ивент по клику
)(App);
