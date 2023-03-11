import clsx from 'clsx';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import Center from './Center';
import Engine from './Engine';
import styles from './Main.module.scss';
import Right from './Right';
import Stats from './Stats';

export enum TimerModes {
  POMODORRO = 'pomodorro',
  POMODORRO_ADVANCED = 'pomodorro advanced',
  ANIMEDORO = 'animedoro',
  NINETY = '90/30',
  CUSTOM = 'custom',
}

const Main = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [mode, setMode] = useState<TimerModes>(TimerModes.POMODORRO);
  const interval = useRef<any>(null);
  const handleChangeTimeInput = (e: ChangeEvent) => {};
  const [restTime, setRestTime] = useState(0);
  const isSuccess = useRef<boolean>(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const getInitialTime = () => {
    switch (mode) {
      case TimerModes.POMODORRO:
        setHours(0);
        setMinutes(25);
        setSeconds(0);
        setRestTime(5);
        break;
      case TimerModes.POMODORRO_ADVANCED:
        setHours(0);
        setMinutes(50);
        setSeconds(0);
        setRestTime(10);
        break;
      case TimerModes.NINETY:
        setHours(0);
        setHours(1);
        setMinutes(30);
        setSeconds(0);
        setRestTime(30);
        break;
      case TimerModes.ANIMEDORO:
        setHours(0);
        setMinutes(40);
        setSeconds(0);
        setRestTime(20);
        break;
    }
  };

  useEffect(() => {
    getInitialTime();
  }, [mode]);

  useEffect(() => {
    if (isConfirmed) {
      handleStop();
      setIsConfirmed(false);
    }
  }, [isConfirmed]);

  const getTime = (deadline: any) => {
    const time = deadline - Date.now();

    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
    if (
      Math.floor((time / (1000 * 60 * 60)) % 24) == 0 &&
      Math.floor((time / 1000 / 60) % 60) == 0 &&
      Math.floor((time / 1000) % 60) == 0
    ) {
      if (!isSuccess.current) {
        clearInterval(interval.current);
        interval.current = null;
        handleSuccess();
      } else {
        clearInterval(interval.current);
        interval.current = null;
        isSuccess.current = false;
      }
    }
  };

  const handleStart = () => {
    const dateToMS =
      mode == TimerModes.POMODORRO
        ? 1000 * 25 * 60
        : mode == TimerModes.POMODORRO_ADVANCED
        ? 1000 * 50 * 60
        : mode == TimerModes.NINETY
        ? 1000 * 90 * 60
        : mode == TimerModes.ANIMEDORO
        ? 1000 * 40 * 60
        : 0;
    const date = Date.now() + dateToMS;
    interval.current = setInterval(() => {
      getTime(date);
    }, 1000);
  };

  const handleSuccess = () => {
    isSuccess.current = true;
    const dateToMS =
      mode == TimerModes.POMODORRO
        ? 1000 * 60 * 5
        : mode == TimerModes.POMODORRO_ADVANCED
        ? 1000 * 60 * 10
        : mode == TimerModes.NINETY
        ? 1000 * 60 * 30
        : mode == TimerModes.ANIMEDORO
        ? 1000 * 60 * 20
        : 0;
    const date = Date.now() + dateToMS;

    interval.current = setInterval(() => {
      getTime(date);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(interval.current);
    interval.current = null;
    getInitialTime();
    isSuccess.current = false;
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.main}>
          <Engine
            isSuccess={isSuccess.current}
            restTime={restTime}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            mode={mode}
            handleStop={handleStop}
          />
          <Center
            handleStop={handleStop}
            interval={interval}
            handleStart={handleStart}
            mode={mode}
            setMode={setMode}
            setConfirmOpen={setConfirmOpen}
            isConfirmed={isConfirmed}
          />
          <Right handleChangeTimeInput={handleChangeTimeInput} />
          {confirmOpen && (
            <div onClick={() => setConfirmOpen(false)} className="popup">
              <div
                onClick={(e) => e.stopPropagation()}
                className={clsx('popupElement', styles.popupElement)}
              >
                <div className="">
                  <div className={styles.confirmHeader}>
                    <h2 className={styles.confirmTitle}>Warning:</h2>
                    <svg
                      onClick={() => setConfirmOpen(false)}
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <p>If you change the mode, the timer will be reset.</p>
                </div>
                <div className={styles.popupActions}>
                  <button
                    onClick={() => {
                      setIsConfirmed(true);
                      setConfirmOpen(false);
                    }}
                    className="button"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <Stats />
      </div>
    </div>
  );
};

export default Main;
