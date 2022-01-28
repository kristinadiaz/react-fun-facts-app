import React from 'react'

export default function Navbar({ darkMode, handleToggle }) {
    const appClass = darkMode ? "dark" : "";

    return(
            <nav className={appClass}>
                {/* <img className='nav-logo' src='https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg' /> */}
                <h3>ReactFacts</h3>
                {/* <h4>React Course - Project 1</h4> */}
                <div className='toggler'>
                    <p className='toggler-light'>Light</p>
                    <div className='toggler-slider' onClick={handleToggle}>
                        <div className='toggler-slider-circle'></div>
                    </div>
                    <p className='toggler-dark'>Dark</p>
                </div>
            </nav>
    )
}