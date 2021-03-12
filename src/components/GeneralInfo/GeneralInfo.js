import './GeneralInfo.scss';

import React from 'react';

function GeneralInfo() {
  return (
    <form>
      <div>
        <h2>General Info</h2>
      </div>
      <input placeholder="Add First & Last Name" type="text" name=" name" />
      <br />
      <input placeholder="Phone" type="tel" name="phone number" />
      <br />
      <input placeholder="Email" type="email" name="email" />
      <br />
      <input placeholder="Address" type="text" name="Address" />
    </form>
  );
}

export default GeneralInfo;
