import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setcounter] = useState(0)

  let addValue = () => {
    counter == 20 ? setcounter(counter = 20) : setcounter(++counter);
  }

  let removeValue = () => {
    if(counter <= 0){
      setcounter(counter = 0);
    }else{
      setcounter(--counter);
    }
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>remove Value</button>
    </>
  )
}

export default App
