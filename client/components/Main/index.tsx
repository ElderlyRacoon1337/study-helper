import clsx from 'clsx';
import React from 'react';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.engine}>
            <p className={styles.title}>Mode: pomodorro</p>
            <h1 className={styles.timer}>25:00</h1>
            <div className={styles.actions}>
              <button className="iconButton">
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
                    d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                  />
                </svg>
              </button>
              <button className="iconButton">
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
                    d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.center}>
            <p>Choose mode</p>
            <div className={styles.modes}>
              <button className={clsx(styles.mode, 'buttonOutlined')}>
                Pomodorro
              </button>
              <button className={clsx(styles.mode, 'buttonText')}>
                Pomodorro advanced
              </button>
              <button className={clsx(styles.mode, 'buttonText')}>
                Animedoro
              </button>
              <button className={clsx(styles.mode, 'buttonText')}>90/30</button>
              <button className={'button'} style={{ marginTop: '20px' }}>
                Start
              </button>
            </div>
          </div>
          <div className={styles.right}>
            <p>Custom time</p>
            <div className={styles.rigthActions}>
              <input placeholder="Hours" className="input" maxLength={2} />
              <input placeholder="Minutes" className="input" maxLength={2} />
              <input placeholder="Seconds" className="input" maxLength={2} />
            </div>
            <button className="button">Start</button>
          </div>
        </div>
        <div className={styles.stats}>
          <p className={styles.title}>
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
            <p>Your today's statystics</p>
          </p>
          <div className={styles.statsList}>
            <p className={styles.statItem}>
              Total study time: <span>4h 31m</span>
            </p>
            <p className={styles.statItem}>
              Until your goal: <span>1h 21m</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
