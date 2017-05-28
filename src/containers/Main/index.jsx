import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Main.css';
import Loader from '../../components/Loader'
import { fetchEmotions } from './actions';
import Result from '../Result';
import Input from '../../components/Input';

class Main extends Component {
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
        <Input
          value={this.state.url}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          placeholder={"Place URL here..."}
        />
      { this.renderLoader(this.props.fetching) }
      { this.renderResults(this.props.emotions) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    emotions: state.input.emotions,
    fetching: state.input.fetching,
    error: state.input.error,
});

const mapDispatchToProps = (dispatch) => ({
    onFetchEmotions: (url) => { dispatch(fetchEmotions(url)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);