import React from 'react';
import CvHeader from './CvHeader/CvHeader';
import './CvPreview.scss';
import CvSummary from './CvSummary/CvSummary';
import CvEducation from './CvEducation/CvEducation';
import CvExperience from './CvExperience/CvExperience';

function CvPreview({
  generalInfo,
  summary,
  blankProfileImg,
  education,
  experience,
  handlePrint,
}) {
  return (
    <div className="cv-preview-container">
      <CvHeader
        blankProfileImg={blankProfileImg}
        photo={generalInfo.photo}
        name={generalInfo.name}
        phone={generalInfo.phone}
        address={generalInfo.address}
        email={generalInfo.email}
      />
      <CvSummary summary={summary} />
      <CvEducation education={education} />
      <CvExperience experience={experience} />
    </div>
  );
}

export default CvPreview;
