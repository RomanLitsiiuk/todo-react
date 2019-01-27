import React from 'react';
import './add-table.scss';
import NewTask from './new-task/new-task-component';
import Location from './location/location-component';
import ServiceType from './service-type/service-type-component';
import PlumberTask from './plumber-tasks/plumber-tasks-component';
import TaskDescriptor from './task-descriptor/task-descriptor';

const AddTable = (props) => {
  const { isActive } = props;

  return (
    <form className={`add-table ${isActive ? 'add-table--active' : ''}`}>
      <NewTask
        address='My address is 141 Ogunlana Dr, Logos 10128'
        task="I need a plumber to unblock a toilet, my dauther's teddy bear sank in the toilet."
      />
      <Location location='141 Ogunlana Dr, Lagos 10128' />
      <ServiceType />
      <PlumberTask tasks={[
        'Unblock a toilet',
        'Unblock a sink',
        'Fix a water leak',
        'Install a sink',
        'Install a shower',
        'Install a toilet']}
      />
      <TaskDescriptor descriptor="My dauther's teddy bear sank in the toilet" />
    </form>
  );
};

export default AddTable;
