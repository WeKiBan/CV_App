import React from 'react';
import './ExperienceSegment.scss';

function ExperienceSegment() {
  return (
    <div>
      <div className="grid">
        <input type="text" placeholder="Company Name" />
        <input type="text" placeholder="Location" />
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
      </div>
      <input className="input-full-width" type="text" placeholder="Role" />
      <textarea
        data-autogrow
        name="summary"
        className="text-area"
        placeholder="List Job description, responsibilities, achievements here....."
      ></textarea>
      <hr className="line" />
    </div>
  );
}

export default ExperienceSegment;
