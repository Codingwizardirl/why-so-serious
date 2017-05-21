import React, { Component } from 'react';


class Input extends Component {
   constructor(props) {
    super(props);
    this.state = {
      link: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({link: event.target.value});
  }

  handleSubmit(event) {
    alert('A link was submitted: ' + this.state.link);
    event.preventDefault();
  }

   render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Picture link:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Input;