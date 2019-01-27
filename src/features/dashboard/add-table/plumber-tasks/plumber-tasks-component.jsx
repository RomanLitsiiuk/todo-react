import React from 'react';
import './plumber-tasks.scss';

const PlumberTask = ({ plumberTasks, currentPlumberTask, handlePlumberTaskChange }) => (
  <div className="plumber-tasks">
    <h3 className="plumber-tasks__heading">Plumber tasks</h3>
    <div className="plumber-tasks__wrap">
      {
        plumberTasks.map((task, i) => (
          <label className="plumber-tasks__function" key={i}>
            <input
              className="plumber-tasks__radio"
              name="plumberTask"
              type="radio"
              checked={task === currentPlumberTask}
              onChange={() => handlePlumberTaskChange(task)}
            />
            <p className="plumber-tasks__text">{task}</p>
          </label>
        ))
      }
    </div>
  </div>
);

export default PlumberTask;
