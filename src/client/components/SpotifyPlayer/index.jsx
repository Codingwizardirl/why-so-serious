import React from 'react';

const SpotifyPlayer = props => (
  <div>
    <iframe src={`https://embed.spotify.com/?url=${props.source}`} width="300" height="380" frameBorder="0" allowTransparency="true" />
  </div>
  );

export default SpotifyPlayer;
