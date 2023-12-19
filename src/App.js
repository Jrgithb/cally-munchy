import logo from './logo.svg';
import './App.css';
import Reservation from './Views/Reservation/Reservation';
import Events from './Views/Reservation/Events/Events';
import Calender from './Views/Reservation/Calender/Calender';


function App() {
  return (
    <div className="App">
      <Reservation/>
      <Events/>
      <Calender/>
    </div>
  );
}

export default App;
