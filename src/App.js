import React from 'react';
import SoundCloudApp from './pages/SoundCloudApp/SoundCloudApp';
import Header from './cmps/Header/Header';



function App() {
  return (
    <div className="App">
      <Header />
      <main className="flex column">
      <SoundCloudApp />
      </main>
    </div>
  );
}

export default App;
