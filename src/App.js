import React from 'react';
import BootstrapNav from './Components/BootstrapNav';
import { Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Recipes from './Components/Recipes';
import WhyVegan from './Components/WhyVegan';
import VeganNews from './Components/VeganNews';
// import './App.css';

function App() {

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <BootstrapNav />
        {/* <Nav /> */}
      {/* </header> */}

      <main>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/recipes">
          <Recipes />
        </Route>
        <Route exact path="/whyvegan">
          <WhyVegan />
        </Route>
        <Route exact path="/vegannews">
          <VeganNews />
        </Route>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
