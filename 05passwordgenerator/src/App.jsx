import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
    const [lenght, setLenght] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charcAllowed, setCharcAllowed] = useState(false)
    const [password, setPassword] = useState('')
     const passwordref = useRef(null)

    

    const passwordGenerator = useCallback(() => {
      let pass = "";
      let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (numberAllowed) characters += "0123456789";
      if (charcAllowed) characters += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
      
      for (let i = 0; i < lenght; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        pass += characters.charAt(randomIndex) ;
      }
      setPassword(pass);
 
    },[lenght, numberAllowed, charcAllowed])
     
     const clipboardcopy = useCallback(() => { 
      passwordref.current.select();
      window.navigator.clipboard.writeText(password)

    }, [password])

    useEffect(() => {
      passwordGenerator();
    }, [lenght, numberAllowed, charcAllowed, passwordGenerator]);
   

   
    

  return (
    <> 

    <div className='w-full max-w-150 mx-auto shadow-md rounded-lg px-4 my-8 text-white bg-gray-700'>
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input ref={passwordref} type="text" value={password} className=' outline-none w-full py-1 px-3' placeholder="Password" readOnly />
        <button className='bg-blue-400' onClick={clipboardcopy}>Copy</button>
      </div>
      <input type='range' max={20} min={8} value={lenght} onChange={(e)=>setLenght(e.target.value)} />
      <label className='ml-2'>Lenght:{lenght}</label>
      <label className='ml-2'>AllowCharacters</label>
      <input type='checkbox' onChange = {() => {
        setCharcAllowed((prev) => !prev  )
      }} />
      <label className='ml-2'>Allow Numbers</label>
      <input type='checkbox'  onChange = {()=>{
        setNumberAllowed((prev) => !prev)
      }} />
      </div>  
      
     
    </>
  )
}

export default App
