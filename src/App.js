import React, {useRef} from 'react';
import BootstrapNav from './Components/BootstrapNav';
import { Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Recipes from './Components/Recipes';
import WhyVegan from './Components/WhyVegan';
import VeganNews from './Components/VeganNews';
import GetInTouch from './Components/GetInTouch';
import FindRestaurants from './Components/FindRestaurants';
// import './App.css';

function App() {
  const inputSearch = useRef();


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
          <Recipes inputSearch={inputSearch}/>
        </Route>
        <Route exact path="/whyvegan">
          <WhyVegan />
        </Route>
        <Route exact path="/vegannews">
          <VeganNews />
        </Route>
        <Route exact path="/getintouch">
          <GetInTouch />
        </Route>
        <Route exact path='/findrestaurants'>
          <FindRestaurants />
        </Route>
      </main>

      <footer>
        
      </footer>
    </div>
  );
}

export default App;
