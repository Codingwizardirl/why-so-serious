import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import config from '../../config';
import AuthenticationModal from '../../components/AuthenticationModal';

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.handleLogIn = this.handleLogIn.bind(this);
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

export default withRouter(Authentication);
