import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import React from 'react';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  children?: any;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        <div className={styles.flex}>
          <div className={styles.navigation}>{/* <Navigation /> */}</div>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
