import React, { useState, useEffect } from "react";
import "../header/header.css"
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';




const getStorageTheme = () => {
    let theme = 'light-theme'
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
}
function Header() {



    const [Toggle, showMenu] = useState(false)
    const [theme, setTheme] = useState(getStorageTheme());
    const [activeLink, setActiveLink] = useState('home');


    useEffect(() => {
        document.body.classList.toggle('no-scroll', Toggle);
    }, [Toggle])

    function handleMenu() {
        return (
            showMenu(!Toggle)
        )
    }

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme')
        } else {
            setTheme('light-theme')
        }
    }

    const handleNavClick = (link) => {
        setActiveLink(link);
        handleMenu();
    };


    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme])

    return (
        <header className="header">
            <nav className="nav ">
                <a href="/" className="nav_logo" style={{ fontSize: "1.75rem" }} ><span style={{ color: '#00abf0', fontSize: '2rem', marginTop: '0px' }}>A</span>vishek</a>
                <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>

                    <ul className="nav_list">
                        <li className="nav_item">
                            <a href="#home" onClick={() => handleNavClick('home')} className={`nav_link ${activeLink === 'home' ? 'active-link' : ''}`}>
                                Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" onClick={() => handleNavClick('about')} className={`nav_link ${activeLink === 'about' ? 'active-link' : ''}`}>
                                About
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" onClick={() => handleNavClick('skills')} className={`nav_link ${activeLink === 'skills' ? 'active-link' : ''}`}>
                                Skills
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#contact" onClick={() => handleNavClick('contact')} className={`nav_link ${activeLink === 'contact' ? 'active-link' : ''}`}>
                                Contact
                            </a>
                        </li>

                    </ul>

                </div>


                <div className="nav__btns">
                    <div className="theme-toggle" onClick={toggleTheme}>

                        {theme === 'light-theme' ? < NightsStayOutlinedIcon /> : <LightModeOutlinedIcon />}
                        {/* <DarkModeIcon className="theme-style"
                           /> */}
                    </div>
                    <div className={Toggle ? "nav__toggle animate-toggle" : "nav__toggle"} onClick={handleMenu}>

                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header