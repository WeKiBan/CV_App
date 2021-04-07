import React from 'react';
import { v4 } from 'uuid';
import './CvExperience.scss';

function CvExperience({ experience }) {
  return (
    <div className="cv-segment education">
      <h2>
        <span>
          <i className="fas fa-briefcase"></i>
        </span>
        Experience
      </h2>
      <hr />
      {experience.length === 0
        ? 'No Education History Added'
        : experience.map((item) => {
            return (
              <div key={v4()} className="experience-segment no-break">
                <div>
                  <h3>{item.company}</h3>
                  <p className="green">{item.role}</p>
                  <p>{item.location}</p>
                </div>
                <p className="description">{item.description} </p>
                <p className="right">{item.from + ' - ' + item.to}</p>
              </div>
            );
          })}
    </div>
  );
}

export default CvExperience;
