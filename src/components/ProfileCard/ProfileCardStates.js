export const Loading = () => {
  return (
    <div>
      <h5>Loading Data Please wait...</h5>
    </div>
  )
}

export const Failed = () => {
  return (
    <div>
      <h5>Failed to load the Data, Please try again later...</h5>
    </div>
  )
}

export const Default = ({ send }) => {
  return (
    <div>
      <img src="profile-picture.png" alt="profile" /><br />
      <button onClick={() => send('SEND_REQUEST')}>Send Request</button>
    </div>
  )
};

export const Requested = ({ send }) => {
  return (
    <div>
      <img src="profile-picture.png" alt="profile" /><br />
      <button onClick={() => send('ACCEPT_REQUEST')}>Accept</button>
      <button onClick={() => send('REJECT_REQUEST')}>Reject</button>
    </div>
  )
}

export const Accepted = ({ send }) => {
  return (
    <div>
      <img src="profile-picture.png" alt="profile" /><br />
      <button onClick={() => send('BLOCK_USER')}>Block</button>
    </div>
  )
}

export const Rejected = ({ send }) => {
  return (
    <div>
      <h5>User Rejected your Invitation</h5>
    </div>
  )
}

export const Blocked = ({ send }) => {
  return (
    <div>
      <h5>You have blocked this user</h5>
      <button onClick={() => send('UNBLOCK')}>Unblock</button>
    </div>
  )
}