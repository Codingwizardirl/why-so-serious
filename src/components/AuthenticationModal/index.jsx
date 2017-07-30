import React from 'react';
import PropTypes from 'prop-types';
import './AuthenticationModal.css';
import config from '../../config';

const AuthenticationModal = props => (
  <div className="authentication-modal">
    <div className="authentication-modal__text">This app requires Spotify Authentication. Please log in to continue.</div>
    <button className="authentication-modal__button" onClick={props.onLogin} />
  </div>
  );

AuthenticationModal.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default AuthenticationModal;
