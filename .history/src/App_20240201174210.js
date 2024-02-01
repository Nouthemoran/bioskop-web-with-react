import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import "./style/landingPage.css";
import Trending from './components/Trending';
import SuperHero from './components/Superhero';

function App() {
  return (
    <div>
    <div className="myBG">
      <NavigationBar/>
      <Intro/>
    </div>
    
    <div className="trending">
      <Trending/>
    </div>

    <div className="superhero">
      
    </div>
    
    </div>

  );
}

export default App;
