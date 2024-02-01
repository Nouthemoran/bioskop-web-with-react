import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import "./style/landingPage.css";
import Trending from './components/Trending';


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
    
    </div>

  );
}

export default App;
