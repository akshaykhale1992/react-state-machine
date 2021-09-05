import { ProfileCardMachine } from './ProfileCardStateMachine';
import { useMachine } from '@xstate/react';
import { Accepted, Blocked, Default, Rejected, Requested } from './ProfileCardStates';

const ProfileCard = () => {
    const [current, send] = useMachine(ProfileCardMachine);
    switch (current.value) {
        case 'default':
            return <Default send={send} />
        case 'requested':
            return <Requested send={send} />
        case 'accepted':
            return <Accepted send={send} />
        case 'rejected':
            return <Rejected send={send} />
        case 'blocked':
            return <Blocked send={send} />
        default:
            return <Default send={send} />
    }
};

export default ProfileCard;