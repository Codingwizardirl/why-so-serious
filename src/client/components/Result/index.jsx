import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import SpotifyPlayer from '../SpotifyPlayer';

import './Result.css';


const Result = props => (
  <div className="result">
    <Card >
      <CardMedia
        className="result-image"
        image={props.playlist.images[0].url}
        title="Playlist cover"
      />
      <CardContent>
        <Typography type="headline" component="h2">
          {props.playlist.name}
        </Typography>
        <Typography component="p">
        Main emotion in person {props.id} is {props.emotion}
        </Typography>
      </CardContent>
      <CardActions />
    </Card>
    <div className="result-text" />
    <SpotifyPlayer source={props.playlist.uri} />
  </div>
  );


Result.propTypes = {
  id: PropTypes.number.isRequired,
  emotion: PropTypes.string.isRequired,
};

export default Result;
