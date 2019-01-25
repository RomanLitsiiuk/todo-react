import React from 'react';
import './task-descriptor.scss';

const TaskDescriptor = (props) => {
  const descriptor = props.descriptor;

  return (
    <div className='task-descriptor'>
      <h3 className='task-descriptor__heading'>Task description</h3>
      <p className='task-descriptor__text'>{descriptor}</p>
    </div>
  );
};

export default TaskDescriptor;
