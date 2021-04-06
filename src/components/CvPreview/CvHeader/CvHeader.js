import React from 'react';
import './CvHeader.scss';
import { v4 } from 'uuid';

function CvHeader({ photo, name, email, address, phone, blankProfileImg }) {
  return (
    <div className="cv-header">
      <div className="img-name-container">
        <img
          className="header-profile-photo"
          src={photo ? photo : blankProfileImg}
          alt="empty profile"
        />
        <h1>
          <ul>
            {name.split(' ').map((word) => {
              return (
                <li key={v4()} className="name">
                  {word}
                </li>
              );
            })}
          </ul>
        </h1>
      </div>

      <div className="general-info-container">
        <ul>
          <li>
            <span>
              <i className="info-icon fas fa-map-marker-alt"></i>
              {address}
            </span>
          </li>
          <li>
            <span>
              <i className="info-icon fas fa-phone-alt"></i>
              {phone}
            </span>
          </li>
          <li>
            <span>
              <p>
                <i className="info-icon fas fa-envelope-open"></i>
                {email}
              </p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CvHeader;
