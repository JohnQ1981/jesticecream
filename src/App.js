import { useState } from 'react';
import './App.css';

function App() {
  const [disabled, setDisabled] = useState('');
  const [buttonColor, setButtonColor] = useState('Red');
  const newButtonColor = buttonColor ==='Red'?'Blue':'Red';
  return (
    <div className="App">
      Learning Jest
     <hr></hr>
     
      <div> <button style={{backgroundColor: disabled ? 'gray' : buttonColor}} 
      onClick={()=> setButtonColor(newButtonColor)}
      disabled={disabled}
      >
      Change to {(newButtonColor)} 
      
      </button></div>
      <input type = "checkbox" 
          id="disable-button-checkbox"
          defaultChecked={disabled}
          aria-checked ={disabled}
          onChange ={(e)=> 
          setDisabled(e.target.checked)}          
           />
           <label htmlFor='disable-button-checkbox'>Disable button</label> 
    </div>
  );
}

export default App;
