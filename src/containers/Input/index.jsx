import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchEmotions } from './actions'

class Input extends Component {
   constructor(props) {
    super(props);
    this.state = {
      link: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({link: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onHandleSubmit(this.state.value);
  }

   render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Picture link:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <div>
            {this.props.emotions}
          </div>
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
    onHandleSubmit: (url) => { dispatch(fetchEmotions(url)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);