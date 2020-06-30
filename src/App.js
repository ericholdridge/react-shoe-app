import React, {useState} from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import ShoeWrapper from './components/ShoeWrapper/ShoeWrapper';
import ShoeData from "./components/ShoeWrapper/ShoeData";

const App = () => {
  const [shoeData, setShoeData] = useState(ShoeData);
  return (
    <div className="App">
      <Navigation />
      <ShoeWrapper shoeData={shoeData}/>
      {
        console.log(shoeData)
      }
    </div>
  );
}

export default App;
