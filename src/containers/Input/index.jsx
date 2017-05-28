import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Input.css';
import Loader from '../../components/Loader'
import { fetchEmotions } from './actions';
import Result from '../Result';

class Input extends Component {
   constructor(props) {
    super(props);
    this.state = {
      url: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({url: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFetchEmotions(this.state.url);
  }

  renderLoader(loading) {
    if (loading) {
      return (
         <Loader loading={loading} />
      )
    }
    return null;
  }

  renderResults(emotionsArray) {
    if (emotionsArray) {
      return (
        <div className="results-container">
          {emotionsArray.map((person, id) => (
            <Result
                key={id}
                id={id}
                emotionScores={person.scores}
            />
          ))}
        </div>
      )
    }
  }

   render() {
    return (
      <div>
        <div className="input-wrapper">
          <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.url} onChange={this.handleChange} placeholder={"Please paste your URL here..."} />
              <input type="submit" value="Submit" />
          </form>
        </div>
      { this.renderLoader(this.props.fetching) }
      { this.renderResults(this.props.emotions) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    emotions: state.input.emotions,
    fetching: state.input.fetching,
});

const mapDispatchToProps = (dispatch) => ({
    onFetchEmotions: (url) => { dispatch(fetchEmotions(url)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);