import React from 'react';
import { connect } from 'react-redux';

const Track = ({ track }) => <div> {track.name} </div>;

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    track: state.tracks.find(track => track.id === Number(ownProps.params.id))
    // берется из url поетому это строка
  };
};

export default connect(mapStateToProps)(Track);