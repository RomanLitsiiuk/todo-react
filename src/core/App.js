import React, { Component } from 'react';
import './App.scss';
import Todo from '../features/todo/todo-component';
import Header from '../features/header/header-component';
import Footer from '../features/footer/footer-component';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App__content'>
          <Header logo='JobUp' />
          <Todo />
        </div>
        <Footer className='App__footer' />
      </div>
    );
  }
}

export default App;
