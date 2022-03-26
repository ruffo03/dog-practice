import './App.css';
import logo from "./logo.svg"
import dogService from "./dogService.js"
import { useState } from 'react';
function App() {
  const [dog, setDog] = useState()
  const clickAndDog1 = () => {
    dogService().then((photox) => {
      setDog(photox)
    })
  }
  const clickAndDog = async () => {
    setDog(await dogService())
  }
  return (
    <div className="App">
      <button onClick={clickAndDog}>
        presioname
      </button>
      <img src={dog}>

      </img>
    </div>
  );
}

export default App;
