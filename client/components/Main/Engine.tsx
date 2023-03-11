import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { TimerModes } from '.';
import styles from './Main.module.scss';

interface EngineProps {
  mode: TimerModes;
  hours: number;
  minutes: number;
  seconds: number;
  handleStop: () => void;
  restTime: number;
  isSuccess: boolean;
}

const Engine: React.FC<EngineProps> = ({
  mode,
  hours,
  minutes,
  seconds,
  restTime,
  isSuccess,
}) => {
  return (
    <div className={styles.engine}>
      <p className={styles.title}>
        Mode: <span>{mode}</span>
      </p>
      <div className={styles.center}>
        {isSuccess && (
          <>
            <p>Congratulations! 🎉</p>
            <p>Time to rest</p>
          </>
        )}
        <h1
          className={clsx(styles.timer, isSuccess ? styles.restTimer : '')}
        >{`${hours !== 0 ? hours + ':' : ''}${
          minutes < 10 ? '0' + minutes : minutes
        }:${seconds < 10 ? '0' + seconds : seconds}`}</h1>
      </div>
      <h3 style={{ fontSize: '1rem', textAlign: 'center' }}>
        <span style={{ fontSize: '0.8125rem' }}>Rest time: </span>
        {restTime} minutes
      </h3>
    </div>
  );
};

export default Engine;
