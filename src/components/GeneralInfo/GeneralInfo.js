import './GeneralInfo.scss';

import React from 'react';

function GeneralInfo({ generalInfo, setGeneralInfo, blankProfileImg }) {
  const handleFileSelectChange = (e) => {
    e.preventDefault();
    setGeneralInfo({
      ...generalInfo,
      photo: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleChange = (e) => {
    setGeneralInfo({ ...generalInfo, [e.target.id]: e.target.value });
  };

  return (
    <>
      <section className="section general-info">
        <form>
          <h2 className="title">General Info</h2>
          <div className="grid">
            <input
              placeholder="First & Last Name"
              type="text"
              id="name"
              name=" name"
              onChange={(e) => handleChange(e)}
              value={generalInfo.name}
            />
            <input
              placeholder="Phone"
              type="tel"
              id="phone"
              name="phone number"
              onChange={(e) => handleChange(e)}
              value={generalInfo.phone}
            />
            <input
              placeholder="Email"
              id="email"
              type="email"
              name="email"
              onChange={(e) => handleChange(e)}
              value={generalInfo.email}
            />
            <input
              placeholder="Address"
              type="text"
              id="address"
              name="Address"
              onChange={(e) => handleChange(e)}
              value={generalInfo.address}
            />
          </div>

          <label className="input-button">
            <i className="fa fa-image"></i>
            {generalInfo.photo ? ' Change Photo' : ' Upload A Photo'}
            <input
              onChange={handleFileSelectChange}
              className="display-none"
              type="file"
              name="image"
              accept="image/x-png,image/gif,image/jpeg"
            />
          </label>
        </form>
        <img
          className="profile-photo"
          src={generalInfo.photo ? generalInfo.photo : blankProfileImg}
          alt=""
        />
      </section>
    </>
  );
}

export default GeneralInfo;
