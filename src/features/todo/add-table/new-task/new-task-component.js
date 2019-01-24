import React from 'react';
import './new-task.scss';
import Button from '../../../../shared/button/button-component';

const NewTask = (props) => {
  const { task, address } = props;

  return (
    <section className='new-task'>
      <h3 className='new-task__heading'>New task</h3>
      <p className='new-task__task'>{task}</p>
      <p className='new-task__address'>{address}</p>
      <div className='new-task__button-wrap'>
        <Button
          fontSize='16px'
          name='Create task'
          primary
        />
      </div>
    </section>
  );
};

export default NewTask;
