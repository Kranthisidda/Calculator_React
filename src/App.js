
import { useState } from 'react';
import './App.css';
import Keypad from './Keypad';
function App() {
  const [input,inputSet] = useState('');
  function handleInput(val){
    inputSet(input+val)
  }
  function output(){
    inputSet(eval(input));

  }
  function clear(){
    inputSet('');
  }
  function omitLast(){
    inputSet(input.slice(0,-1));
  }
  return (
    <div className = 'container'>
      <h1 >Calculator Using React</h1>
      <div className='calculator'>
      <input type = 'text' className='input' value= {input}/>
      <Keypad handleInput={handleInput} output={output} clear = {clear} omitLast={omitLast}></Keypad>
      </div>

    </div>
  )
}

export default App;
