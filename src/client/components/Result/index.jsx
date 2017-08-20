import React from 'react';
import PropTypes from 'prop-types';
import SpotifyPlayer from '../SpotifyPlayer';

import './Result.css';


const Result = props => (
  <div className="result">
    <div className="result-text">Main emotion in person {props.id} is {props.emotion}</div>
    <SpotifyPlayer source={props.playlist.uri} />
  </div>
  );


Result.propTypes = {
  id: PropTypes.number.isRequired,
  emotion: PropTypes.string.isRequired,
};

export default Result;
