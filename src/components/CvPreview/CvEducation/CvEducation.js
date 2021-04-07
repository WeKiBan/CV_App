import React from 'react';
import { v4 } from 'uuid';
import './CvEducation.scss';

function CvEducation({ education }) {
  return (
    <div className="cv-segment education">
      <h2>
        <span>
          <i className="fas fa-graduation-cap"></i>
        </span>
        Education
      </h2>
      <hr />
      {education.length === 0
        ? 'No Education History Added'
        : education.map((item) => {
            return (
              <div key={v4()} className="education-segment">
                <div>
                  <h3>{item.qualification}</h3>
                  <p className="green">{item.school}</p>
                </div>
                <p className="center">{item.achievements}</p>
                <p className="right">{item.from + ' - ' + item.to}</p>
              </div>
            );
          })}
    </div>
  );
}

export default CvEducation;
