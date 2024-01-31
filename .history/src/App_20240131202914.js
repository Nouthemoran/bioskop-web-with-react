import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import "./style/landingPage.css";

function App() {
  return (
    
    <div className="myBG">
      <NavigationBar/>
      <Intro/>
    </div>

    <div className="trending">
      <Trending/>
    </div>

  );
}

export default App;
