import React from 'react';
import './Input.css';

const Input = (props) => {
  return (
    <div className="input-wrapper">
          <form onSubmit={props.handleSubmit}>
              <input type="text" value={props.value} onChange={props.handleChange} placeholder={props.placeholder} />
              <input type="submit" value="Submit" />
          </form>
    </div>
  );
};

export default Input;