import { useState } from 'react';
import Header from './components/Header/Header';
import Searchbar from './components/Searchbar/Searchbar';
import User from './components/User/User';

function App() {
  const [userProfile, setUserProfile] = useState(null);

  return (
    <div id="container">
      <Header></Header>
      <Searchbar setUserProfile={setUserProfile}></Searchbar>
      <User userProfile={userProfile}></User>
    </div>
  );
}

export default App;
