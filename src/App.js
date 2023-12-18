import logo from './logo.svg';
import './App.css';
import Reservation from './Views/Reservation/Reservation';
import Events from './Views/Reservation/Events/Events';

function App() {
  return (
    <div className="App">
      <Reservation/>
      <Events/>
    </div>
  );
}

export default App;
