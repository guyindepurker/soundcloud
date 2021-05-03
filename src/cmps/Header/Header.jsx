
import React from 'react'
import logo from 'assets/logo.svg'
import './Header.scss'
const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo flex">
                    <img className="logo-img" src={logo} alt="logo" />
                    <span>SoundCloud</span>
                    </div>
            </div>
        </header>
    )


}

export default Header
