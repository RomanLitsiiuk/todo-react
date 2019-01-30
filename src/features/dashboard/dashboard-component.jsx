import React, { Component } from 'react';
import AddButton from './add-button/add-button-component';
import Task from './todo/todo-component';
import AddTable from './add-table/add-table-component';

import styles from './dashboard.module.scss';

import {
  serviceTypes,
  electricianTasks,
  plumberTasks,
  gardenerTasks,
  housekeeperTasks,
  cookTasks,
} from '../../assets/constants';

class Dashboard extends Component {
  state = {
    isFormActive: false,
    todos: [{
      id: 1,
      date: 'Tomorrow, Jun 24, 16:00',
      task: 'Install a shower',
    }, {
      id: 2,
      date: 'Monday, Jun 26, 14:00',
      task: 'I need a plumber to unblock a toilet',
    }],
    newTodo: {
      description: '',
      serviceType: '',
      task: '',
    },
  };


  componentDidMount() {
    document.addEventListener('keydown', this.handleTableClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleTableClose);
  }

  setTodoId() {
    const currentTodos = [...this.state.todos];
    return currentTodos.reduce((prevId, todo) => (prevId <= todo.id ? todo.id + 1 : prevId), 1);
  }

  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter(todo => !(todo.id === id));
    this.setState({
      todos: newTodos,
    });
  };

  activateForm = () => {
    this.setState(prevState => ({
      isFormActive: !prevState.isFormActive,
    }));
  };

  addNewTodo = (fullTask, date) => {
    this.setState(prevState => ({
      todos: [
        ...prevState.todos,
        {
          id: this.setTodoId(),
          date,
          task: fullTask,
        },
      ],
    }));
  };

  handleTableClose = (event) => {
    if (event.keyCode === 27) {
      this.setState({
        isFormActive: false,
      });
    }
  };

  handleDescriptionChange = ({ target }) => {
    this.setState(prevState => ({
      newTodo: {
        ...prevState.newTodo,
        description: target.value,
      },
    }));
  };

  handleTaskChange = (data) => {
    this.setState(prevState => ({
      newTodo: {
        ...prevState.newTodo,
        task: data,
      },
    }));
  };

  handleServiceTypeChange = (data) => {
    this.setState(prevState => ({
      newTodo: {
        ...prevState.newTodo,
        serviceType: data,
      },
    }));
  };

  render() {
    const {
      isFormActive, newTodo, todos,
    } = this.state;

    return (
      <div className={styles.dashboard}>
        <div className={styles.dashboard__container}>
          <div className={styles.dashboard__tasks}>
            <AddButton handleClick={this.activateForm} />
            {
              todos.map(todo => (
                <Task
                  todo={todo}
                  key={todo.id}
                  deleteTodo={this.deleteTodo}
                />
              ))
            }
          </div>
          <div className={styles.dashboard__form}>
            <AddTable
              isActive={isFormActive}
              currentTaskDescription={newTodo.description}
              handleDescriptionChange={this.handleDescriptionChange}
              workerTasks={{
                electrician: electricianTasks,
                plumber: plumberTasks,
                gardener: gardenerTasks,
                housekeeper: housekeeperTasks,
                cook: cookTasks,
              }}
              currentTask={newTodo.task}
              handleTaskChange={this.handleTaskChange}
              serviceTypes={serviceTypes}
              currentServiceType={newTodo.serviceType}
              handleServiceTypeChange={this.handleServiceTypeChange}
              newTodo={newTodo}
              addNewTodo={this.addNewTodo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
