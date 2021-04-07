import './Education.scss';
import ReactTooltip from 'react-tooltip';
import EducationSegment from '../EducationSegment/EducationSegment';
import React from 'react';

function Education({ education, setEducation, addEducationSegment }) {
  const handleAddSegment = (e) => {
    e.preventDefault();
    addEducationSegment();
  };
  return (
    <section className="section">
      <ReactTooltip />
      <form className="form">
        <h2 className="title">Education</h2>
        <button
          onClick={handleAddSegment}
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
                  key={index}
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
