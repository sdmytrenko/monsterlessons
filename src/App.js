import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log(this.props.testStore);
    return (
    <div>
      <input type="text"/>
      <button>Add track</button>
      <ul>
        {this.props.testStore.map((track, index) =>
          <li key={index}> {track} </li>
        )}
      </ul>
    </div>
    );
  }
}

export default connect(  // декоратор с редакс
  state => ({
    testStore: state //состояние стора с ф-и playlist (store)
  }), // mapStateToProps она мапит стейт с стора(состояния) в пропс реакт компонента
  dispatch => ({})
)(App);
