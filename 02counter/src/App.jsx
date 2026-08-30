import { useState } from 'react'


function App() {
 let [counterValue, setCounterVallue] = useState(15)

  function addvalue(){
  setCounterVallue(counterValue + 1);

}

 function RemoveValue(){
  setCounterVallue(counterValue - 1)

  
 }


    
  return (
    <>

    <h1>Hello World</h1>

    <h2>counter value {counterValue}</h2> 
    <button onClick={addvalue} >Add Value {counterValue}</button>
    <button onClick={RemoveValue} >Remove value {counterValue}</button>
    </>
    
  )
}

export default App
