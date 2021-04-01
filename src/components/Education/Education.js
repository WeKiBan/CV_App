import './Education.scss';
import ReactTooltip from 'react-tooltip';
import EducationSegment from '../EducationSegment/EducationSegment';
import { v4 } from 'uuid';
import React from 'react';

function Education({ education, setEducation }) {
  return (
    <section className="section">
      <ReactTooltip />
      <form className="form">
        <h2 className="title">Education</h2>
        <button
          data-effect="solid"
          data-place="left"
          data-tip="Add Education"
          data-background-color="#aed1ce"
          data-border="true"
          className="add-button"
        >
          <span>
            <i className="fas fa-plus"></i>
          </span>
        </button>
        <div className="education_input-container">
          {education.length === 0 ? (
            <p className="empty-message">click plus to add a segment</p>
          ) : (
            education.map((educationItem, index) => {
              return (
                <EducationSegment
                  key={v4()}
                  education={education}
                  setEducation={setEducation}
                  educationItem={educationItem}
                  index={index}
                />
              );
            })
          )}
        </div>
      </form>
    </section>
  );
}

export default Education;
