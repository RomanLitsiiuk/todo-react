import React from 'react';

import NewTask from './new-task/new-task-component';
import Location from './location/location-component';
import ServiceType from './service-type/service-type-component';
import PlumberTask from './plumber-tasks/plumber-tasks-component';
import TaskDescriptor from './task-descriptor/task-descriptor';

import './add-table.scss';

const AddTable = ({
  isActive,
  handleDescriptionChange,
  workerTasks,
  handleTaskChange,
  serviceTypes,
  handleServiceTypeChange,
  newTodo,
  addNewTodo,
}) => {
  const tasks = workerTasks[newTodo.serviceType.toLowerCase()] || ['Check a service type'];

  return (
    <form className={`add-table ${isActive ? 'add-table--active' : ''}`}>
      <NewTask
        address="My address is 141 Ogunlana Dr, Logos 10128"
        newTodo={newTodo}
        addNewTodo={addNewTodo}
      />
      <Location location="141 Ogunlana Dr, Lagos 10128" />
      <ServiceType
        serviceTypes={serviceTypes}
        newTodo={newTodo}
        handleServiceTypeChange={handleServiceTypeChange}
      />
      <PlumberTask
        tasks={tasks}
        newTodo={newTodo}
        handleTaskChange={handleTaskChange}
      />
      <TaskDescriptor
        newTodo={newTodo}
        handleDescriptionChange={handleDescriptionChange}
      />
    </form>
  );
};

export default AddTable;
