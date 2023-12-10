import './App.css';
import './css/common.css'
import Navigation from './js/NavigationBar.js';
import HeroSection from './js/HeroSection.js';
import OurMission from './js/OurMission.js';
import GettingStarted from './js/GettingStarted.js'

function App() {
  return (
    <div className = "App">
      <header className="App-header">
      </header>
      <main className = "App-main">
        <Navigation />
        <HeroSection />
        <OurMission />
        <GettingStarted />
      </main>
    </div>

  );
}

export default App;
