import { useMachine } from '@xstate/react';
import { ProfileCardMachine } from './ProfileCardStateMachine';
import { Loading, Failed, Accepted, Blocked, Default, Rejected, Requested } from './ProfileCardStates';
import { logRequest, logBlock, logAccepted } from './ProfileCardEffects'
import { fetchProfileDetails } from './ProfileCardServices';

const ProfileCard = () => {
    const [current, send] = useMachine(ProfileCardMachine, {
        actions: {
            logRequest,
            logBlock,
            logAccepted
        },
        services: {
            fetchProfileDetails
        }
    });
    switch (current.value) {
        case 'loading':
            return <Loading send={send} />
        case 'failure':
            return <Failed send={send} />
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