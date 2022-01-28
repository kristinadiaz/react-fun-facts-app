import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'

export default function App() {
    const [darkMode, setDarkMode] = useState(true)

    function handleToggle() {
        setDarkMode(darkMode => !darkMode)
    }

    return(
    <div className='container'>
        <Navbar darkMode={darkMode} handleToggle={handleToggle}/>
        <Main darkMode={darkMode}/>
    </div>
    )
}