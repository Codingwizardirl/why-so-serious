import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import Authentication from '../Authentication';
import Loader from '../../components/Loader';
import { fetchEmotions } from '../../actions/input';
import Result from '../Result';
import Input from '../../components/Input';
import Error from '../../components/Error';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ url: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFetchEmotions(this.state.url);
  }

  renderLoader(loading) {
    if (loading) {
      return (
        <Loader loading={loading} />
      );
    }
  }

  renderResults(emotionsArray) {
    if (!this.props.error && emotionsArray) {
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
      );
    } else if (this.props.error) {
      return (
        <div className="results-error">
          <Error />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header" />
        {!this.props.authenticated ? <Authentication /> : null}
        <div className="input-container">
          <Input
            value={this.state.url}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            placeholder={'Place URL here...'}
          />
          { this.renderLoader(this.props.fetching) }
          { this.renderResults(this.props.emotions) }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  emotions: state.input.emotions,
  fetching: state.input.fetching,
  error: state.input.error,
  authenticated: state.authentication.authenticated,
});

const mapDispatchToProps = dispatch => ({
  onFetchEmotions: (url) => { dispatch(fetchEmotions(url)); },
});


App.propTypes = {
  fetching: PropTypes.bool.isRequired,
  emotions: PropTypes.array,
  onFetchEmotions: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
