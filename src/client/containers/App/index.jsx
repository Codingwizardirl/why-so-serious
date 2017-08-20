import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import Authentication from '../Authentication';
import Loader from '../../components/Loader';
import { fetchEmotions, getPlaylists } from '../../actions/input';
import Result from '../../components/Result';
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
    this.props.onGetPlaylists(this.state.url);
  }

  renderLoader(loading) {
    if (loading) {
      return (
        <Loader loading={loading} />
      );
    }
  }

  renderResults(data) {
    if (!this.props.error && data) {
      return (
        <div className="results-container">
          {data.map((emotionObject, id) => (
            <Result
              key={id}
              id={id}
              emotion={emotionObject.emotion}
              playlist={emotionObject.playlist}
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
          { this.renderResults(this.props.playlists) }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  emotions: state.input.emotions,
  playlists: state.input.playlists,
  fetching: state.input.fetching,
  error: state.input.error,
  authenticated: state.authentication.authenticated,
});

const mapDispatchToProps = dispatch => ({
  onFetchEmotions: (url) => { dispatch(fetchEmotions(url)); },
  onGetPlaylists: (emotions) => { dispatch(getPlaylists(emotions)); },
});


App.propTypes = {
  fetching: PropTypes.bool.isRequired,
  emotions: PropTypes.object,
  onGetPlaylists: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
