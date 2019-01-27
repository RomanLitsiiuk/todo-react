import React from 'react';
import './task.scss';
import Button from '../../../components/button/button-component';

const Task = (props) => {
  const { date, task, deleteTask } = props;

  return (
    <div className='task'>
      <p className='task__date'>{date}</p>
      <p className='task__text'>{task}</p>
      <div className='task__buttons-wrap'>
        <Button
          name='Edit'
          primary
        />
        <Button
          handleClick={deleteTask.bind(null, date, task)}
          name='Delete'
        />
      </div>
    </div>
  );
};

export default Task;
