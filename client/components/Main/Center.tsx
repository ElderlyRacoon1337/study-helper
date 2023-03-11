import clsx from 'clsx';
import React from 'react';
import { TimerModes } from '.';
import styles from './Main.module.scss';

interface CenterProps {
  mode: TimerModes;
  setMode: (mode: TimerModes) => void;
  handleStart: () => void;
  interval: any;
  handleStop: () => void;
  setConfirmOpen: (arg0: boolean) => void;
  isConfirmed: boolean;
}

const Center: React.FC<CenterProps> = ({
  mode,
  setMode,
  handleStart,
  interval,
  handleStop,
  setConfirmOpen,
  isConfirmed,
}) => {
  return (
    <>
      <div className={styles.center}>
        <p>Choose mode</p>
        <div className={styles.modes}>
          <button
            onClick={() => {
              if (interval.current !== null) {
                setConfirmOpen(true);
                if (isConfirmed) {
                  setMode(TimerModes.POMODORRO);
                } else return;
              }
              setMode(TimerModes.POMODORRO);
            }}
            className={clsx(
              styles.mode,
              mode == TimerModes.POMODORRO ? 'buttonOutlined' : 'buttonText'
            )}
          >
            Pomodorro
          </button>
          <button
            onClick={() => {
              if (interval.current !== null) {
                setConfirmOpen(true);
                if (isConfirmed) {
                  setMode(TimerModes.POMODORRO_ADVANCED);
                } else return;
              }
              setMode(TimerModes.POMODORRO_ADVANCED);
            }}
            className={clsx(
              styles.mode,
              mode == TimerModes.POMODORRO_ADVANCED
                ? 'buttonOutlined'
                : 'buttonText'
            )}
          >
            Pomodorro 50/10
          </button>
          <button
            onClick={() => {
              if (interval.current !== null) {
                setConfirmOpen(true);
                if (isConfirmed) {
                  setMode(TimerModes.ANIMEDORO);
                } else return;
              }
              setMode(TimerModes.ANIMEDORO);
            }}
            className={clsx(
              styles.mode,
              mode == TimerModes.ANIMEDORO ? 'buttonOutlined' : 'buttonText'
            )}
          >
            Animedoro
          </button>
          <button
            onClick={() => {
              if (interval.current !== null) {
                setConfirmOpen(true);
                if (isConfirmed) {
                  setMode(TimerModes.NINETY);
                } else return;
              }
              setMode(TimerModes.NINETY);
            }}
            className={clsx(
              styles.mode,
              mode == TimerModes.NINETY ? 'buttonOutlined' : 'buttonText'
            )}
          >
            90/30
          </button>
          {!interval.current ? (
            <button
              onClick={handleStart}
              className={clsx('button', styles.play)}
            >
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
          ) : (
            <button
              onClick={handleStop}
              className={clsx('button', styles.play)}
            >
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
              Stop
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Center;
