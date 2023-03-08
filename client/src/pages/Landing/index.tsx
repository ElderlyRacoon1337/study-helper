import React from 'react';
import LandingContent from '../../components/LandingContent';
import Header from '../../components/LandingHeader';

import styles from './Landing.module.scss';

const Landing = () => {
  return (
    <div className={styles.root}>
      <Header />
      <LandingContent />
    </div>
  );
};

export default Landing;
