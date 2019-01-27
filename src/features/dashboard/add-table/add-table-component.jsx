import React from 'react';
import './add-table.scss';
import NewTask from './new-task/new-task-component';
import Location from './location/location-component';
import ServiceType from './service-type/service-type-component';
import PlumberTask from './plumber-tasks/plumber-tasks-component';
import TaskDescriptor from './task-descriptor/task-descriptor';

const AddTable = ({
  isActive,
  handleDescriptionChange,
  currentTaskDescription,
  plumberTasks,
  currentPlumberTask,
  handlePlumberTaskChange,
  serviceTypes,
  currentServiceType,
  handleServiceTypeChange,
  newTodo,
}) => (
  <form className={`add-table ${isActive ? 'add-table--active' : ''}`}>
    <NewTask
      address="My address is 141 Ogunlana Dr, Logos 10128"
      newTodo={newTodo}
    />
    <Location location="141 Ogunlana Dr, Lagos 10128" />
    <ServiceType
      serviceTypes={serviceTypes}
      currentServiceType={currentServiceType}
      handleServiceTypeChange={handleServiceTypeChange}
    />
    <PlumberTask
      plumberTasks={plumberTasks}
      currentPlumberTask={currentPlumberTask}
      handlePlumberTaskChange={handlePlumberTaskChange}
    />
    <TaskDescriptor
      handleDescriptionChange={handleDescriptionChange}
      currentTaskDescription={currentTaskDescription}
    />
  </form>
);

export default AddTable;
