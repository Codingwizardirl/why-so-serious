import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchEmotions } from './actions'

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
        <label>
          Picture link:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          { this.props.emotions ?
          this.props.emotions.map((person, id) => (
            <div>
            <p> Person {id} is 
             {Object.keys(person.scores).reduce((a, b) => { return person.scores[a] > person.scores[b] ? a : b })}
            </p>
            </div>
          )) : null 
          }
        </label>
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