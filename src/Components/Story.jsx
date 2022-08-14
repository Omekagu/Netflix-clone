import React from 'react';

const Story = () => {
  return (
    <section className="story">
      <div className="story__left--card">
        <h1 className="story__title">Enjoy on your TV.</h1>
        <h3 className="story__paragraph">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </h3>
      </div>

      <div className="story__right--card">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          alt=""
          className="story__tv"
        />
        <video className="story__video" autoPlay muted loop>
          <source src="./assets/video-tv.m4v" />
        </video>
      </div>
    </section>
  );
};

export default Story;
