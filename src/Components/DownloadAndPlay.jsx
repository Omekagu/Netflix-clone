import React from 'react';

const DownloadAndPlay = () => {
  return (
    <section className="download">
      <div className="download__left--card">
        <img
          src="./assets/netflix phone img.jpg"
          alt="phone"
          className="download__phone"
        />
        <div className="download__animation">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
            alt="stranger things"
            className="download__picture"
          />
          <div className="download__text">
            <h1 className="text--0">stranger things</h1>
            <p className="text--1">downloading...</p>
          </div>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
            alt="loader"
            className="download__loader"
          />
        </div>
      </div>

      <div className="download__right--card">
        <h1 className="download__title">
          Download your shows to watch offline.
        </h1>
        <h3 className="download__paragraph">
          Save your favorites easily and always have something to watch.
        </h3>
      </div>
    </section>
  );
};

export default DownloadAndPlay;
