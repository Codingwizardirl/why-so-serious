import React from 'react';

// Locks scroll when you scroll inside Spotify web player
const onMouseOver = () => {
  document.body.style.overflow = 'hidden';
};

const onMouseOut = () => {
  document.body.style.overflow = 'auto';
};
const SpotifyPlayer = props => (
  <div onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
    <iframe src={`https://embed.spotify.com/?url=${props.source}`} width="300" height="380" frameBorder="0" allowTransparency="true" />
  </div>
  );

export default SpotifyPlayer;
