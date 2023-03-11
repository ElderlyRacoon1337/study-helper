import styles from './Main.module.scss';
import React, { ChangeEvent } from 'react';
import clsx from 'clsx';

interface RightProps {
  handleChangeTimeInput: (e: ChangeEvent) => void;
}

const Right: React.FC<RightProps> = ({ handleChangeTimeInput }) => {
  return (
    <>
      <div className={styles.right}>
        <p>Custom time</p>
        <div className={styles.rigthActions}>
          <div className={styles.inputLabels}>
            <p>Hours</p>
            <p>Minutes</p>
            <p>Seconds</p>
          </div>
          <div className={styles.inputs}>
            <div className={styles.inputGroup}>
              <input
                onChange={handleChangeTimeInput}
                className="input"
                type="text"
              />
              <input
                onChange={handleChangeTimeInput}
                className="input"
                type="text"
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                onChange={handleChangeTimeInput}
                className="input"
                type="text"
              />
              <input
                onChange={handleChangeTimeInput}
                className="input"
                type="text"
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                onChange={handleChangeTimeInput}
                className="input"
                type="text"
              />
              <input
                onChange={handleChangeTimeInput}
                className="input"
                type="text"
              />
            </div>
          </div>
        </div>
        <button className={clsx('button', styles.play)}>
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
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
          Start
        </button>
      </div>
    </>
  );
};

export default Right;
