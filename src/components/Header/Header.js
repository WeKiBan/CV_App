import React from 'react';
import './Header.scss';
import ReactTooltip from 'react-tooltip';

export default function Header({
  handleSetEditMode,
  editModeActive,
  handlePrint,
}) {
  return (
    <>
      <header className="header">
        <div className="title-icon-container">
          <h1 className="heading-title">CV Builder</h1>
          <i className="cv-icon far fa-file-alt"></i>
        </div>

        <div className="header-buttons">
          <ReactTooltip />
          <div className="buttons">
            {editModeActive ? (
              <span
                onClick={() => handleSetEditMode()}
                data-effect="solid"
                data-place="left"
                data-tip="Preview Mode"
                data-background-color="#e29578"
                data-border="true"
                className="button"
              >
                <i className="fas fa-eye"></i>
              </span>
            ) : (
              <>
                <span
                  onClick={() => handlePrint()}
                  data-effect="solid"
                  data-place="left"
                  data-tip="Print"
                  data-background-color="#e29578"
                  data-border="true"
                  className="button"
                >
                  <i className="fas fa-print"></i>
                </span>
                <span
                  onClick={() => handleSetEditMode()}
                  data-effect="solid"
                  data-place="left"
                  data-tip="Edit"
                  data-background-color="#e29578"
                  data-border="true"
                  className="button"
                >
                  <i className="fas fa-pencil-alt"></i>
                </span>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
