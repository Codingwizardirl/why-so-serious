// Loader by Mr. Alien
import React from 'react';
import './Loader.css';

const Loader = props => props.loading ? (
  <div className="loader">
    <div className="body">
      <span>
        <span />
        <span />
        <span />
        <span />
      </span>
      <div className="base">
        <span />
        <div className="face" />
      </div>
    </div>
    <div className="longfazers">
      <span />
      <span />
      <span />
      <span />
    </div>
    <h1>Fetching emotions...</h1>
  </div>
  ) : null;

export default Loader;
