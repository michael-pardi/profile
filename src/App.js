import { useState } from 'react';
import './App.css';
import MainAppBar from './components/MainAppBar';
import Content from './components/Content';

function App() {
  const [profilePage, setProfilePage] = useState(true);

  return (
    <div className="App">
      <MainAppBar pageSetter={setProfilePage} />
      <Content profilePage={profilePage} />
    </div>
  );
}

export default App;
