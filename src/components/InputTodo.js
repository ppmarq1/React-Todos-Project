/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

class InputTodo extends Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      // eslint-disable-next-line no-alert
      alert('Please write item');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <button type="button" className="input-submit">
          <FaPlusCircle color="darkcyan" size="20px" className="submit-icon" />
        </button>
      </form>
    );
  }
}
export default InputTodo;
