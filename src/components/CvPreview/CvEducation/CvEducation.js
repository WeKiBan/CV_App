import React from 'react';
import './CvEducation.scss';

function CvEducation({ education }) {
  console.log(education);
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
        ? 'No Education History'
        : education.map((item) => {
            return (
              <div className="education-segment">
                <div>
                  <h3>{item.qualification}</h3>
                  <p className="school">{item.school}</p>
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
