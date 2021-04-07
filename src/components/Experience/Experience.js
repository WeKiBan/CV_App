import './Experience.scss';
import ReactTooltip from 'react-tooltip';
import ExperienceSegment from '../ExperienceSegment/ExperienceSegment';

import React from 'react';

function Experience({ experience, setExperience, addExperienceSegment }) {
  const handleAddSegment = (e) => {
    e.preventDefault();
    addExperienceSegment();
  };
  return (
    <section className="section">
      <ReactTooltip />
      <form className="form">
        <h2 className="title">Work Experience</h2>
        <button
          onClick={(e) => handleAddSegment(e)}
          data-effect="solid"
          data-place="left"
          data-tip="Add Experience"
          data-background-color="#aed1ce"
          data-border="true"
          className="add-button"
        >
          <span>
            <i className="fas fa-plus"></i>
          </span>
        </button>
        <div className="education_input-container">
          {experience.length === 0 ? (
            <p className="empty-message">click plus to add a segment</p>
          ) : (
            experience.map((experienceItem, index) => {
              return (
                <ExperienceSegment
                  key={index}
                  experience={experience}
                  setExperience={setExperience}
                  experienceItem={experienceItem}
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

export default Experience;
