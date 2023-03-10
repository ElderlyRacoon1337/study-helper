import React from 'react';
import styles from './Auth.module.scss';

const Auth = () => {
  return (
    <div className={styles.form}>
      <h2 className={styles.formTitle}>Join us</h2>
      <div className={styles.name}>
        <input type="text" placeholder="Name" className="input" />
        <input type="text" placeholder="Surname" className="input" />
      </div>
      <input type="text" placeholder="Email" className="input" />
      <input type="password" placeholder="Password" className="input" />
      <button className="button">Continue</button>
    </div>
  );
};

export default Auth;
