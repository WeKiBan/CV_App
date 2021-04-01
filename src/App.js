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

      <div>
        <GeneralInfo
          setGeneralInfo={setGeneralInfo}
          generalInfo={generalInfo}
        />
        <Summary summary={summary} setSummary={setSummary} />
        <Education education={education} setEducation={setEducation} />
        <Experience />
      </div>
      <button onClick={() => handlePrint()}>Print this out!</button>
    </>
  );
}

export default App;
