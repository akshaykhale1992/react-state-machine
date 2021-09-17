import { createMachine } from 'xstate';

export const ProfileCardMachine = createMachine({
  initial: 'loading',
  states: {
    loading: {
      invoke: {
        src: 'registerRequest',
        onDone: {
          target: 'default',
        },
        onError: {
          target: 'failure',
        }
      }
    },
    default: {
      on: {
        SEND_REQUEST: 'requested',
      },
    },
    requested: {
      on: {
        ACCEPT_REQUEST: 'accepted',
        REJECT_REQUEST: 'rejected'
      },
      entry: 'logRequest',
    },
    accepted: {
      entry: 'logAccepted',
      on: {
        BLOCK_USER: 'blocked',
      }
    },
    rejected: {},
    failure: {},
    blocked: {
      on: {
        UNBLOCK: 'accepted'
      },
      entry: 'logBlock'
    },
  }
});