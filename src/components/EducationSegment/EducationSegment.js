import './EducationSegment.scss';
import React, { useState } from 'react';
import Textarea from 'react-flexi-textarea';

function EducationSegment({ educationItem, index, education, setEducation }) {
  const [info, setInfo] = useState(educationItem);

  const handleSetInfo = (e) => {
    const val = e.target.value;
    const key = e.target.name;
    setInfo({
      ...info,
      [key]: val,
    });

    let dupEducation = [...education];
    dupEducation[index] = info;
  };

  const handleRemoveSegment = () => {
    let dupEducation = [...education];
    dupEducation.splice(index, 1);
    setEducation(dupEducation);
  };

  return (
    <div>
      <div className="grid">
        <input
          value={info.school}
          onChange={(e) => handleSetInfo(e)}
          name="school"
          type="text"
          placeholder="University/School Name"
        />
        <input
          value={info.location}
          onChange={handleSetInfo}
          name="location"
          type="text"
          placeholder="Location"
        />
        <input
          value={info.from}
          onChange={handleSetInfo}
          name="from"
          type="text"
          placeholder="From"
        />
        <input
          value={info.to}
          onChange={handleSetInfo}
          name="to"
          type="text"
          placeholder="To"
        />
      </div>
      <input
        value={info.qualification}
        onChange={handleSetInfo}
        name="qualification"
        className="input-full-width"
        type="text"
        placeholder="Degree/Qualification Type"
      />
      <Textarea
        data-autogrow
        value={info.achievements}
        onChange={handleSetInfo}
        name="achievements"
        className="text-area"
        placeholder="List achievements and further information here....."
      />
      <button
        className="input-button"
        onClick={handleRemoveSegment}
      >
        Delete <i className="fas fa-trash-alt"></i>
      </button>
      <hr className="line" />
    </div>
  );
}

export default EducationSegment;
