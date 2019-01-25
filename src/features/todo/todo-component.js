import React, { Component } from 'react';
import AddButton from './add-button/add-button-component';
import Task from './task/task-component';
import styles from './todo.module.scss';
import AddTable from './add-table/add-table-component';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robot: 'Raketa',
    };
  }

  render() {
    return (
      <div className={styles.todo}>
        <div className={styles.todo__container}>
          <div className={styles.todo__tasks}>
            <AddButton />
            <Task
              date='Tomorrow, Jun 24, 16:00'
              task='Install a shower'
            />
            <Task
              date='Monday, Jun 26, 14:00'
              task='I need a plumber to unblock a toilet'
            />
          </div>
          <div className={styles.todo__form}>
            <AddTable />
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
