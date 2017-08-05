import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { receiveToken } from '../../actions/authentication';
import config from '../../config';
import AuthenticationModal from '../../components/AuthenticationModal';

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  componentDidMount() {
    const hash = this.getHashObject(this.props.location.hash);
    if (hash) {
      this.props.onReceiveToken(hash.access_token, hash.expires_in * 1000);
      this.props.history.replace('/');
    }
  }

  getHashObject(hash) {
    const hashString = hash.substring(hash.indexOf('#') + 1);
    if (!hashString) {
      return null;
    }

    const hashObj = hashString.substring()
              .split('&')
              .map(el => el.split('='))
              .reduce((pre, cur) => { pre[cur[0]] = cur[1]; return pre; }, {});
    return hashObj;
  }

  handleLogIn() {
    const query = {
      client_id: config.SPOTIFY_CLIENT_ID,
      redirect_uri: config.SPOTIFY_REDIRECT_URL,
      response_type: 'token',
    };
    const url = new URL(config.SPOTIFY_AUTHORIZE_URL);
    Object.keys(query).forEach(key => url.searchParams.append(key, query[key]));
    window.location.assign(url.href);
  }

  render() {
    return (
      <AuthenticationModal onLogin={this.handleLogIn} />
    );
  }
}

Authentication.propTypes = {

};

const mapDispatchToProps = dispatch => ({
  onReceiveToken: (token) => { dispatch(receiveToken(token)); },
});

Authentication.propTypes = {
  onReceiveToken: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(connect(null, mapDispatchToProps)(Authentication));
