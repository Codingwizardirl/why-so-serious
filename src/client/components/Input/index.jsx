import React from 'react';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import './Input.css';

const Input = props => (
  <div className="input-wrapper">
    <form onSubmit={props.handleSubmit}>
      <TextField
        id="url"
        type="text"
        label="Image URL"
        InputClassName="search-bar"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
      />
      <IconButton type="submit" color="primary" aria-label="Search">
        <Icon>search</Icon>
      </IconButton>
    </form>
  </div>
  );

export default Input;
