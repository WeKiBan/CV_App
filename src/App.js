import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Summary from './components/Summary/Summary';
import Experience from './components/Experience/Experience';
import GeneralInfo from './components/GeneralInfo/GeneralInfo';
import Education from './components/Education/Education';
import CvPreview from './components/CvPreview/CvPreview';
import blankProfileImg from './blank_profile.png';

function App() {
  // switch between edit mode and preview
  const [editModeActive, setEditModeActive] = useState(false);

  const handleSetEditMode = () => {
    setEditModeActive(!editModeActive);
  };

  // general info section
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    photo: '',
  });

  // summary section
  const [summary, setSummary] = useState('');

  // Education section
  const [education, setEducation] = useState([
    {
      school: '',
      location: '',
      from: '',
      to: '',
      qualification: '',
      achievements: '',
    },
  ]);

  const addEducationSegment = () => {
    //duplicate array
    const duplicateArray = [...education];
    // create new segment
    const newSegment = {
      school: '',
      location: '',
      from: '',
      to: '',
      qualification: '',
      achievements: '',
    };
    // push new segment to duplicate array
    duplicateArray.push(newSegment);
    //set duplicate array as new array
    setEducation(duplicateArray);
  };

  // Experience section
  const [experience, setExperience] = useState([
    {
      company: '',
      location: '',
      from: '',
      to: '',
      role: '',
      description: '',
    },
  ]);

  const addExperienceSegment = () => {
    //duplicate array
    const duplicateArray = [...experience];
    // create new segment
    const newSegment = {
      company: '',
      location: '',
      from: '',
      to: '',
      role: '',
      description: '',
    };
    // push new segment to duplicate array
    duplicateArray.push(newSegment);
    //set duplicate array as new array
    setExperience(duplicateArray);
  };

  // function to print page when button is pressed
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="no-print">
        <Header
          handlePrint={handlePrint}
          editModeActive={editModeActive}
          handleSetEditMode={handleSetEditMode}
        />
      </div>
      {editModeActive ? (
        <>
          <GeneralInfo
            blankProfileImg={blankProfileImg}
            setGeneralInfo={setGeneralInfo}
            generalInfo={generalInfo}
          />
          <Summary summary={summary} setSummary={setSummary} />
          <Education
            addEducationSegment={addEducationSegment}
            education={education}
            setEducation={setEducation}
          />
          <Experience
            addExperienceSegment={addExperienceSegment}
            experience={experience}
            setExperience={setExperience}
          />
        </>
      ) : (
        <CvPreview
          blankProfileImg={blankProfileImg}
          generalInfo={generalInfo}
          summary={summary}
          education={education}
          experience={experience}
          handlePrint={handlePrint}
        />
      )}
    </>
  );
}

export default App;
