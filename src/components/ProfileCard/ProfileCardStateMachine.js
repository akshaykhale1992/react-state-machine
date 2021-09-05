import { createMachine } from 'xstate';

export const ProfileCardMachine = createMachine({
  initial: 'default',
  states: {
    default: {
      on: {
        SEND_REQUEST: 'requested',
      }
    },
    requested: {
      on: {
        ACCEPT_REQUEST: 'accepted',
        REJECT_REQUEST: 'rejected'
      }
    },
    accepted: {
      on: {
        BLOCK_USER: 'blocked',
      }
    },
    rejected: {},
    blocked: {
      on: {
        UNBLOCK: 'accepted'
      }
    },
  }
});