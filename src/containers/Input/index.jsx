import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Input.css';
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

   render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.url} onChange={this.handleChange} placeholder={"Please paste your URL here..."} />
          { this.props.emotions ?
          this.props.emotions.map((person, id) => (
            <Result
              key={id}
              id={id}
              emotionScores={person.scores}
            />
          )) : null 
          }
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
    emotions: state.input.emotions,
});

const mapDispatchToProps = (dispatch) => ({
    onFetchEmotions: (url) => { dispatch(fetchEmotions(url)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);