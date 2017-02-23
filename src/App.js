import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  addTrack(){
    console.log('addTrack', this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = ''
  }

  render() {
    console.log(this.props.tracks);
    return (
    <div>
      <input type="text" ref={(input) => {this.trackInput = input}} /> 
      <button onClick={this.addTrack.bind(this)}>Add track</button>
      <ul>
        {this.props.tracks.map((track, index) =>
          <li key={index}> {track} </li>
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
    tracks: state.tracks //состояние стора с ф-и playlist (store)
  }), // mapStateToProps она мапит стейт с стора(состояния) в пропс реакт компонента
  dispatch => ({
    onAddTrack: (trackName) => {
      dispatch({ type: 'ADD_TRACK', payload: trackName })
    }
  })
  // диспатчим ивент по клику
)(App);
