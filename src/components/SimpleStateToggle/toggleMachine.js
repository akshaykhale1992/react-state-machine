import { createMachine } from 'xstate';

export const toggleButton = createMachine({
  initial: 'toggledOff',
  states: {
    toggledOff: {
      on: {
        TOGGLE: 'toggledOn'
      }
    },
    toggledOn: {
      on: {
        TOGGLE: 'toggledOff'
      }
    }
  }
});