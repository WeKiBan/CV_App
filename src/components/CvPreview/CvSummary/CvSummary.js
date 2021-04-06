import React from 'react';
import './CvSummary.scss';

function CvSummary({ summary }) {
  return (
    <div className="summary cv-segment">
      <h2>
        <span>
          <i className="far fa-user-circle"></i>
        </span>
        About Me:
      </h2>
      <hr />
      <p>{summary}</p>
    </div>
  );
}

export default CvSummary;
