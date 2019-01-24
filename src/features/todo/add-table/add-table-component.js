import React from 'react';
import './add-table.scss';
import NewTask from './new-task/new-task-component';
import Location from './location/location-component';
import ServiceType from './service-type/service-type-component';

const AddTable = (props) => {
  return (
    <div className='add-table'>
      <NewTask
        address='My address is 141 Ogunlana Dr, Logos 10128'
        task="I need a plumber to unblock a toilet, my dauther's teddy bear sank in the toilet."
      />
      <Location location='141 Ogunlana Dr, Lagos 10128' />
      <ServiceType />
    </div>
  );
};

export default AddTable;
