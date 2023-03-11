import styles from './Main.module.scss';
import React from 'react';

const Stats = () => {
  return (
    <div className={styles.stats}>
      <div className={styles.title}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
          />
        </svg>
        <p>Today&apos;s statystics</p>
      </div>
      <div className={styles.statsList}>
        <p className={styles.statItem}>
          Total study time: <span>4h 31m</span>
        </p>
        <p className={styles.statItem}>
          Left to the goal goal: <span>1h 21m</span>
        </p>
      </div>
    </div>
  );
};

export default Stats;
