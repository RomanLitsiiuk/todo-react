import React, { Component } from 'react';
import AddButton from './add-button/add-button-component';
import Task from './todo/task-component';
import styles from './dashboard.module.scss';
import AddTable from './add-table/add-table-component';

import Icon1 from '../../assets/icons/noun_321339_cc.svg';
import Icon2 from '../../assets/icons/noun_321315_cc.svg';
import Icon3 from '../../assets/icons/noun_321363_cc.svg';
import Icon4 from '../../assets/icons/noun_321399_cc.svg';
import Icon5 from '../../assets/icons/noun_321395_cc.svg';

class Dashboard extends Component {
  state = {
    isFormActive: false,
    newTodo: {
      description: '',
      serviceType: '',
      task: '',
    },
    todos: [{
      id: 1,
      date: 'Tomorrow, Jun 24, 16:00',
      task: 'Install a shower',
    }, {
      id: 2,
      date: 'Monday, Jun 26, 14:00',
      task: 'I need a plumber to unblock a toilet',
    }],
    serviceTypes: [{
      id: 1,
      logo: Icon1,
      title: 'Electrician',
    }, {
      id: 2,
      logo: Icon2,
      title: 'Plumber',
    }, {
      id: 3,
      logo: Icon3,
      title: 'Gardener',
    }, {
      id: 4,
      logo: Icon4,
      title: 'Housekeeper',
    }, {
      id: 5,
      logo: Icon5,
      title: 'Cook',
    }],
    plumberTasks: [
      'Unblock a toilet',
      'Unblock a sink',
      'Fix a water leak',
      'Install a sink',
      'Install a shower',
      'Install a toilet',
    ],
  };


  componentDidMount() {
    document.addEventListener('keydown', this.handleTableClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleTableClose);
  }

  activateForm = () => {
    this.setState(prevState => ({
      isFormActive: !prevState.isFormActive,
    }));
  };

  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter(todo => !(todo.id === id));
    this.setState({
      todos: newTodos,
    });
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

  handlePlumberTaskChange = (data) => {
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
        setviceType: data,
      },
    }));
  };

  render() {
    const { isFormActive, newTodo, todos, serviceTypes, plumberTasks } = this.state;

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
              plumberTasks={plumberTasks}
              currentPlumberTask={newTodo.plumberTask}
              handlePlumberTaskChange={this.handlePlumberTaskChange}
              serviceTypes={serviceTypes}
              currentServiceType={newTodo.serviceType}
              handleServiceTypeChange={this.handleServiceTypeChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
