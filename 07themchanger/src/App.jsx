import { useEffect, useState } from 'react'
import './App.css'
import ThemCard from './Component/ThemCard.jsx'
import ThemBtn from './Component/Thembtn.jsx'
import { ThemeProvider } from './Context/theme'

function App() {
  const [ThemeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
    setThemeMode("dark")
  }

  const lightTheme = () => {
    setThemeMode("light")
  }

  useEffect(function (){
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(ThemeMode)
    

  }, [ThemeMode])

  return (
    <>

   <ThemeProvider value = {{ThemeMode, lightTheme, darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
        <ThemBtn/>
                        
       </div>
        <div className="w-full max-w-sm mx-auto">
            <ThemCard />
        
        
                     
                       
        </div>
        </div>
        </div>

     </ThemeProvider>
    </>
  )
}

export default App
