import React from 'react';
import DownloadAndPlay from '../Components/DownloadAndPlay';
import Faq from '../Components/Faq';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import KidsProfile from '../Components/KidsProfile';
import Story from '../Components/Story';
import WatchOnDevice from '../Components/WatchOnDevice';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Story />
      <DownloadAndPlay />
      <WatchOnDevice />
      <KidsProfile />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomePage;
