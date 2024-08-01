import { useState } from "react";
import Sayac from "./Sayac";
import './App.css'
const App = () => {
    const [inputValue,setinputValue] = useState(0);
    const InputChange = (e) =>{
      setinputValue(Number(e.target.value));
    }
    return (
      <div className="App">
      <div className="content">
      <Sayac number ={inputValue}/>  
      <input type="number" onChange={InputChange}></input>  
      </div>
      </div>
    );
}
export default App;
