import SimpleStateToggle from './components/SimpleStateToggle';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div style={{ padding: '0 12px' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Here is a Simple Toggle State Machine</h1>
        <SimpleStateToggle />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h1>Here is Profile Card State Machine</h1>
        <ProfileCard />
      </div>
    </div>
  );
}

export default App;
