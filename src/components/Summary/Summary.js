import React from 'react';
import './Summary.scss';
import Textarea from 'react-flexi-textarea';

function Summary({ summary, setSummary }) {
  const handleSetSummary = (e) => {
    const val = e.target.value;
    setSummary(val);
  };
  return (
    <section className="section">
      <h2 className="title">Summary</h2>
      <div role="textbox">
        <Textarea
          data-autogrow
          value={summary}
          onChange={handleSetSummary}
          name="summary"
          className="text-area"
          placeholder="Write your summary here....."
        ></Textarea>
      </div>
    </section>
  );
}

export default Summary;
