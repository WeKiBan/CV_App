import React from 'react';
import './Summary.scss';

function Summary({ summary, setSummary }) {
  const handleSetSummary = (e) => {
    const val = e.target.value;
    setSummary(val);
  };
  return (
    <section className="section">
      <h2 className="title">Summary</h2>
      <div role="textbox">
        <textarea
          value={summary}
          onChange={handleSetSummary}
          data-autogrow
          name="summary"
          className="text-area"
          placeholder="Write your summary here....."
        ></textarea>
      </div>
    </section>
  );
}

export default Summary;
