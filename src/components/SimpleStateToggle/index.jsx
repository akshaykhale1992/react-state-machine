import { toggleButton } from './toggleMachine';
import { useMachine } from '@xstate/react';

const SimpleStateToggle = () => {
  const [current, send] = useMachine(toggleButton);
  return (
    <>
      <img src={`${current.value}.png`} alt={current.value} /><br />
      <button onClick={() => send('TOGGLE')}>{current.value}</button>
    </>
  );
};

export default SimpleStateToggle;