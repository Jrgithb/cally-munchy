import logo from './logo.svg';
import './App.css';
import Reservation from './Views/Reservation/Reservation';
import Events from './Views/Reservation/Events/Events';
import Calender from './Views/Reservation/Calender/Calender';
import Drinks from './Views/Reservation/Drinks/Drinks';


function App() {
  return (
    <div className="App">
      <Reservation/>
      <Events/>
      <Calender/>
      <Drinks/>
    </div>
  );
}

export default App;
