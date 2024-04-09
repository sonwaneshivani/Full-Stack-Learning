import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import GreetingsClass from './components/GreetingsClass';

function App() {
  return (
    <div className="App">
      <Greetings userName="KMIT props"/>
      <GreetingsClass/>
    </div>
  );
}

export default App;
