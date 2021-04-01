import React, { useState } from 'react';
import { AutogrowTextarea } from 'autogrow-textarea';
import './App.css';
import Header from './components/Header/Header';
import Summary from './components/Summary/Summary';
import Experience from './components/Experience/Experience';
import GeneralInfo from './components/GeneralInfo/GeneralInfo';
import Education from './components/Education/Education';

function App() {
  // switch between edit mode and preview
  const [editModeActive, setEditModeActive] = useState(true);

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
      school: 'Saint Augustines',
      location: 'Redditch',
      from: '10th may 1998',
      to: '4th July 2004',
      qualification: 'GCSE',
      achievements: "2 A's, 4 B's, 2 C's and a D",
    },
    {
      school: 'Saint Augustines',
      location: 'Redditch',
      from: '10th may 1998',
      to: '4th July 2004',
      qualification: 'GCSE',
      achievements: "2 A's, 4 B's, 2 C's and a D",
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
      company: 'BW Hotels',
      location: 'Milan',
      from: '10th July 2020',
      to: 'Present',
      role: 'Reservations Agent',
      description: 'Making bookings for hotels in the uk',
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
          editModeActive={editModeActive}
          handleSetEditMode={handleSetEditMode}
        />
      </div>
      {editModeActive ? (
        <div>
          <GeneralInfo
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
        </div>
      ) : (
        <p>hello</p>
      )}

      <button onClick={() => handlePrint()}>Print this out!</button>
    </>
  );
}

export default App;
