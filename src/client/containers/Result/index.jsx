import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SpotifyPlayer from '../../components/SpotifyPlayer';

import './Result.css';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainEmotion: null,
    };
  }


  componentWillMount() {
    const mainEmotion = this.getMainEmotion(this.props.emotionScores);
    this.setState({
      mainEmotion,
    });
  }

  componentWillReceiveProps(nextProps) {
    const emotion = this.getMainEmotion(nextProps.emotionScores);

    this.setState({
      ...this.state,
      mainEmotion: emotion,
    });
  }

  getMainEmotion(emotions) {
    return Object.keys(emotions).reduce((a, b) => emotions[a] > emotions[b] ? a : b);
  }

  render() {
    return (
      <div className="result">
        Main emotion in person {this.props.id} is {this.state.mainEmotion}
        <SpotifyPlayer source={this.props.playlist.uri} />
      </div>
    );
  }
}

Result.propTypes = {
  emotionScores: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  onGetPlaylist: PropTypes.func.isRequired,
};


export default Result;
