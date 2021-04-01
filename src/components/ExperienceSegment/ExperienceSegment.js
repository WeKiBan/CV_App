import React, { useState } from 'react';
import './ExperienceSegment.scss';

function ExperienceSegment({
  experience,
  setExperience,
  experienceItem,
  index,
}) {
  const [info, setInfo] = useState(experienceItem);

  const handleSetInfo = (e) => {
    const val = e.target.value;
    const key = e.target.name;
    setInfo({
      ...info,
      [key]: val,
    });

    let dupExperience = [...experience];
    dupExperience[index] = info;
  };

  const handleRemoveSegment = () => {
    let dupExperience = [...experience];
    dupExperience.splice(index, 1);
    setExperience(dupExperience);
  };
  return (
    <div>
      <div className="grid">
        <input
          name="company"
          onChange={handleSetInfo}
          value={info.company}
          type="text"
          placeholder="Company Name"
        />
        <input
          name="location"
          onChange={handleSetInfo}
          value={info.location}
          type="text"
          placeholder="Location"
        />
        <input
          name="from"
          onChange={handleSetInfo}
          value={info.from}
          type="text"
          placeholder="From"
        />
        <input
          name="to"
          onChange={handleSetInfo}
          value={info.to}
          type="text"
          placeholder="To"
        />
      </div>
      <input
        name="role"
        onChange={handleSetInfo}
        value={info.role}
        className="input-full-width"
        type="text"
        placeholder="Role"
      />
      <textarea
        name="description"
        onChange={handleSetInfo}
        value={info.description}
        data-autogrow
        className="text-area"
        placeholder="List Job description, responsibilities, achievements here....."
      ></textarea>
      <button className="remove-button" onClick={handleRemoveSegment}>
        Delete <i className="fas fa-trash-alt"></i>
      </button>
      <hr className="line" />
    </div>
  );
}

export default ExperienceSegment;
