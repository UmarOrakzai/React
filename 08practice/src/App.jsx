import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function addNumber(){
    setCount(count + 1)

  }
  function removeNumber(){
    setCount(count - 1)

  }


  return (
    <>

    <div className="min-h-screen flex justify-center items-center bg-gray-100">
       <div >
       <h1 className="text-center text-2xl font-bold mb-4">Hello World</h1>
       <h1 className="text-center text-2xl font-bold mb-4">Number Is {count} </h1>
       <div className="flex justify-center gap-3">
  <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addNumber}>Add Number</button>
  <button className="bg-gray-500 text-white px-4 py-2 rounded"onClick={removeNumber}>Remove Number</button>
</div>
    </div>
    </div>
   
    
    </>
  )
}

export default App
