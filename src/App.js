import React from 'react';
import Nav from './Components/Nav';
// import BootstrapNavbar from './Components/BootStrapNav';
import LandingPage from './Components/LandingPage';
import Recipes from './Components/Recipes';
import WhyVegan from './Components/WhyVegan';
import VeganNews from './Components/VeganNews';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>

      <main>
        <LandingPage />
        <Recipes />
        <WhyVegan />
        <VeganNews />
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
