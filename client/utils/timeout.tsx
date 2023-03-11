import { TimerModes } from '@/components/Main';

export const timeout = (mode: TimerModes) => {
  let timer = 0;
  let minutes = 60;
  switch (mode) {
    case TimerModes.POMODORRO:
      timer = 25;
      break;
    case TimerModes.POMODORRO_ADVANCED:
      timer = 50;
      break;
    case TimerModes.NINETY:
      timer = 90;
      break;
    case TimerModes.ANIMEDORO:
      timer = 40;
      break;
  }
  return timer;
};
