import React,{useState} from "react";
import  data from './data';
import Tours from './components/Tours';

const App = () => {
  const [tours, setTours]=useState(data);

  function removeTour(id){
    const newTours=tours.filter(tours => tours.id !== id);
    setTours(newTours);
  }

  function addTours(){
    setTours(data);
  }

  if(tours.length === 0){
    return(<div>
      <h2>No Tours Left</h2>
      <button onClick={addTours}>
        Refresh
      </button>
    </div>);
  }
  return (
    <div>
    
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
