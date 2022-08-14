import React from 'react';

const KidsProfile = () => {
  return (
    <section className="download">
      <div className="download__left--card">
        <img
          src="https://occ-0-3740-299.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
          alt="kids profile"
          className="download__phone"
        />
      </div>

      <div className="download__right--card">
        <h1 className="download__title">Create profiles for kids.</h1>
        <h3 className="download__paragraph">
          Send kids on adventures with their favorite characters in a space made
          just for them—free with your membership.
        </h3>
      </div>
    </section>
  );
};

export default KidsProfile;
