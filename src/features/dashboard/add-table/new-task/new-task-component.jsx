import React from 'react';

import Button from '../../../../components/button/button-component';

import './new-task.scss';

const NewTask = ({ newTodo, address }) => {
  const fullTask = `I need a ${newTodo.serviceType} to ${newTodo.task}, ${newTodo.description}`;

  return (
    <section className="new-task">
      <h3 className="new-task__heading">New task</h3>
      <p className="new-task__task">{fullTask}</p>
      <p className="new-task__address">{address}</p>
      <div className="new-task__button-wrap">
        <Button
          fontSize="16px"
          name="Create task"
          primary
        />
      </div>
    </section>
  );
};

export default NewTask;
