import React, { Component } from 'react';
import AddButton from './add-button/add-button-component';
import Task from './task/task-component';
import styles from './todo.module.scss';
import AddTable from './add-table/add-table-component';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormActive: false,
      todos: [{
        date: 'Tomorrow, Jun 24, 16:00',
        task: 'Install a shower',
      }, {
        date: 'Monday, Jun 26, 14:00',
        task: 'I need a plumber to unblock a toilet',
      }],
    };
    this.activateForm = this.activateForm.bind(this);
    this.handleCloseTable = this.handleCloseTable.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleCloseTable);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleCloseTable);
  }

  activateForm() {
    const newFormState = !this.state.isFormActive;
    this.setState({
      isFormActive: newFormState,
    });
  }

  deleteTask(date, task) {
    const deletedTodo = this.state.todos.filter((todo) => {
      return todo.dete === date && todo.task === task;
    });
    const newTodos = this.state.todos;
    newTodos.splice(this.state.todos.indexOf(deletedTodo), 1);
    this.setState({
      todos: newTodos,
    });
  }

  handleCloseTable(event) {
    if (event.keyCode === 27) {
      this.setState({
        isFormActive: false,
      });
    }
  }

  render() {
    return (
      <div className={styles.todo}>
        <div className={styles.todo__container}>
          <div className={styles.todo__tasks}>
            <AddButton handleClick={this.activateForm} />
            {
              this.state.todos.map((todo) => {
                return <Task
                  date={todo.date}
                  deleteTask={this.deleteTask}
                  key={todo.date}
                  task={todo.task}
                />;
              })
            }
          </div>
          <div className={styles.todo__form}>
            <AddTable isActive={this.state.isFormActive} />
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
