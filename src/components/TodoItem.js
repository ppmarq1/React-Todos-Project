/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  render() {
    return (
      <li className={styles.item}>
        <input
      type="checkbox"
      className={styles.checkbox}
      checked={this.props.todo.completed}
      onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        <button type="button" onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
        {this.props.todo.title}
      </li>
    );
  }
}

export default TodoItem;
