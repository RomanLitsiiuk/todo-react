import React from 'react';

import './service-type.scss';

const ServiceType = ({ serviceTypes, currentServiceType, handleServiceTypeChange }) => (
  <div className="service-type">
    <h3 className="service-type__heading">Service type</h3>
    <div className="service-type__icons-wrap">
      {
        serviceTypes.map(serviceType => (
          <label className="service-type__icon" key={serviceType.id}>
            <input
              type="radio"
              name="serviceType"
              className="service-type__radio"
              checked={currentServiceType === serviceType.title}
              onChange={() => handleServiceTypeChange(serviceType.title)}
            />
            <div className="service-type__image-wrap">
              <img className="service-type__image" src={serviceType.logo} alt="icon" />
            </div>
            <p className="service-type__description">{serviceType.title}</p>
          </label>
        ))
      }
    </div>
  </div>
);

export default ServiceType;
