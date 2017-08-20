import React from 'react';
import PropTypes from 'prop-types';
import SpotifyPlayer from '../SpotifyPlayer';

import './Result.css';


const Result = props => (
  <div className="result">
      Main emotion in person {props.id} is {props.emotion}
    <SpotifyPlayer source={props.playlist.uri} />
  </div>
  );


Result.propTypes = {
  id: PropTypes.number.isRequired,
  emotion: PropTypes.string.isRequired,
};

export default Result;
