import React, { useState } from 'react';
import { AutogrowTextarea } from 'autogrow-textarea';
import './App.css';
import Header from './components/Header/Header';
import Summary from './components/Summary/Summary';
import Experience from './components/Experience/Experience';
import GeneralInfo from './components/GeneralInfo/GeneralInfo';
import Education from './components/Education/Education';
import CvPreview from './components/CvPreview/CvPreview';
import blankProfileImg from './blank_profile.png';
import myPortrait from '/Users/wesbanyard/Workspace/cv_app/src/my_portrait.jpg';

function App() {
  // switch between edit mode and preview
  const [editModeActive, setEditModeActive] = useState(false);

  const handleSetEditMode = () => {
    setEditModeActive(!editModeActive);
  };

  // general info section
  const [generalInfo, setGeneralInfo] = useState({
    name: 'Wesley Banyard',
    phone: '077155117711',
    email: 'Wes.Banyard@gmail.com',
    address: '33 Snowshill Close, Redditch, B988RG',
    photo: myPortrait,
  });

  // summary section
  const [summary, setSummary] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt excepturi perferendis nesciunt quo amet dolor dolores hic, voluptatum consectetur veniam illum necessitatibus reprehenderit culpa atque ad voluptas modi officiis officia eos ipsam voluptatem fugiat voluptates suscipit. Ratione atque cum quos dolore sapiente velit fuga necessitatibus corrupti voluptatibus cumque, minima doloremque maxime eius quod omnis provident fugiat facilis nobis est reprehenderit.'
  );

  // Education section
  const [education, setEducation] = useState([
    {
      school: 'Saint Augustines',
      location: 'Redditch',
      from: '2004',
      to: '2008',
      qualification: "GCSE's",
      achievements: "2 A's 5 B's, 2 C's",
    },
    {
      school: 'New College',
      location: 'Bromsgrove',
      from: '2008',
      to: '2010',
      qualification: 'HND Media',
      achievements: 'Merit',
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
          editModeActive={editModeActive}
          handleSetEditMode={handleSetEditMode}
        />
      </div>
      {editModeActive ? (
        <div>
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
        </div>
      ) : (
        <CvPreview
          blankProfileImg={blankProfileImg}
          generalInfo={generalInfo}
          summary={summary}
          education={education}
          experience={experience}
        />
      )}

      <button onClick={() => handlePrint()}>Print this out!</button>
    </>
  );
}

export default App;
