import { useState } from 'react';
import './App.css';
import info from './models/data';
import Homepage from './components/Homepage';
import Employeepage from './components/Employeepage';


function App() {
  const [data, setData]= useState(info)
  return (
    <div className="App">
    <Homepage></Homepage>
    <Employeepage></Employeepage>
    </div>
  );
}

export default App;
