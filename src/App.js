import logo from './logo.svg';
import './App.css';
import Events from './Views/Reservation/Events/Events';
import Calender from './Views/Reservation/Calender/Calender';
import Shop from './Views/Reservation/Shop/Shop';



function App() {
  return (
    <div className="App">
      <Events/>
      <Calender/>
      <Shop/> 
    </div>
  );
}

export default App;
