import React from 'react';
import styles from './AboutModes.module.scss';

const AboutModels = () => {
  return (
    <div className={styles.root}>
      <div className={styles.aboutHeader}>
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
            d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
          />
        </svg>
        <p>About techniques</p>
      </div>
      <div className={styles.aboutContent}>
        <div className={styles.item}>
          <div className={styles.itemHeader}>
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
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3>Pomodoro technique</h3>
          </div>
          <p>
            Set your timer for 25 minutes, and focus on a single task until the
            timer rings. When your session ends, mark off one pomodoro and
            record what you completed. Then enjoy a five-minute break. After
            four pomodoros, take a longer, more restorative 15-30 minute break.
          </p>
        </div>
        <div className={styles.item}>
          <div className={styles.itemHeader}>
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
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3>Pomodoro technique 50/10</h3>
          </div>
          <p>
            For every 50 minutes spent focusing on studying or working, allow
            yourself a 10-minute break. Building in a 10-minute break into every
            hour will help you avoid burning out, cut down on distractions, help
            you digest new information, and will typically help you be more
            productive during designated work time
          </p>
        </div>{' '}
        <div className={styles.item}>
          <div className={styles.itemHeader}>
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>

            <h3>Animedoro technique</h3>
          </div>
          <p>
            To summarise, Animedoro is a modified version of the traditional
            Animedoro technique. It involves 40–60 minutes long work/study
            sessions that are followed by a 20-minute long break. You watch an
            anime episode during this break.
          </p>
        </div>
        <div className={styles.item}>
          <div className={styles.itemHeader}>
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
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3>Pomodoro technique 50/10</h3>
          </div>
          <p>
            Every time I sit down to work I set a timer, remove distractions,
            and focus. For the 90 minute block I try to focus only on the task
            at hand, no checking email, twitter or grabbing a snack. Once the
            time is up I set a second timer for 30 minutes. These 30 minutes I'm
            completely free to do what I want.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutModels;
