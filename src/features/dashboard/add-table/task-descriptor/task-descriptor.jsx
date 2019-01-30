import React from 'react';
import './task-descriptor.scss';

const TaskDescriptor = ({ handleDescriptionChange, newTodo }) => (
  <div className="task-descriptor">
    <label className="task-descriptor__label" htmlFor="task-description">
      <h3 className="task-descriptor__heading">Task description</h3>
    </label>
    <input
      id="task-description"
      className="task-descriptor__input"
      value={newTodo.description}
      onChange={handleDescriptionChange}
      placeholder="Enter a new task description"
    />
  </div>
);

export default TaskDescriptor;
