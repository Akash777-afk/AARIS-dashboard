import { useState } from 'react';
import LoginPage from './LoginPage';
import LandingPage from './LandingPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return loggedIn ? (
    <LandingPage />
  ) : (
    <LoginPage onLogin={() => setLoggedIn(true)} />
  );
}

export default App;