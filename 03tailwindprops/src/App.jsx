import { useState } from 'react'
import Card from './components/card.jsx'

function App() {
  
  return (
    <>
     <h1 className='text-center  text-4xl font-bold bg-green-400'>Hello World</h1>
     <Card username="Umar" btnText="Buy Now"/>
     <Card username="Sweston" btnText="Buy Now"/>
     
    </>
  )
}

export default App
