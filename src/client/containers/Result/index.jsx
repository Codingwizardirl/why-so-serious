import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Result.css';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainEmotion: this.getMainEmotion(this.props.emotionScores),
    };
  }

  componentWillReceiveProps(nextProps) {
    const emotion = this.getMainEmotion(nextProps.emotionScores);
    console.log(this.getMainEmotion(nextProps.emotionScores));
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
      </div>
    );
  }
}

Result.propTypes = {
  emotionScores: PropTypes.object.isRequired,
  id: PropTypes.number,
};

export default Result;
