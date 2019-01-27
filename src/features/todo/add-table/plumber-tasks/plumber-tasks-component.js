import React from 'react';
import './plumber-tasks.scss';

const PlumberTask = (props) => {
  const tasks = props.tasks;

  return (
    <div className='plumber-tasks'>
      <h3 className='plumber-tasks__heading'>Plumber tasks</h3>
      <div className='plumber-tasks__wrap'>
        {
          tasks.map((func, i) => {
            return (
              <label className='plumber-tasks__function'
                key={i}
              >
                <input className='plumber-tasks__radio'
                  name='plumberTask'
                  type='radio'
                />
                <p className='plumber-tasks__text'>{func}</p>
              </label>
            );
          })
        }
      </div>
    </div>
  );
};

export default PlumberTask;
