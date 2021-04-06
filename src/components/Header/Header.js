import React from 'react';
import './Header.scss';
import ReactTooltip from 'react-tooltip';

export default function Header({ handleSetEditMode, editModeActive }) {
  return (
    <header className="header">
      <ReactTooltip />
      <h1 className="heading-title">CV Builder</h1>
      <i className="cv-icon far fa-file-alt"></i>
      {editModeActive ? (
        <button
          onClick={() => handleSetEditMode()}
          data-effect="solid"
          data-place="left"
          data-tip="Preview Mode"
          data-background-color="#aed1ce"
          data-border="true"
          className="preview"
        >
          <span>
            <i className="fas fa-eye"></i>
          </span>
        </button>
      ) : (
        <button
          onClick={() => handleSetEditMode()}
          data-effect="solid"
          data-place="left"
          data-tip="Edit Mode"
          data-background-color="#aed1ce"
          data-border="true"
          className="preview"
        >
          <span>
            <i className="fas fa-edit"></i>
          </span>
        </button>
      )}
    </header>
  );
}
