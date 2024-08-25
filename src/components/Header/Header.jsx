import React, {useEffect, useRef} from "react";
import './Header.css';

const nav__links =[
    {
        path: '#home',
        display: 'Home'
    },
    {
        path: '#about',
        display: 'Sobre'
    },
    {
        path: '#services',
        display: 'vestibulares'
    },
    {
        path: '#contato',
        display: 'Contato'
    }
]

const Header = ({ theme, toggleTheme}) => {

    const headerRef = useRef(null)

    const menuRef = useRef(null)

    const headerFunc = () => {
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
        {
            headerRef.current.classList.add('header__shrink')
        } else {
            headerRef.current.classList.remove('header__shrink')
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", headerFunc);
        return () => window.removeEventListener("scroll", headerFunc);
    }, []);

    const handlerClick = e => {
        e.preventDefault()

        const targetAttr = e.target.getAttribute('href')

        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 80,
        });
    };

    const toggleMenu = ()=> menuRef.current.classList.toggle('menu__active')

    return (
        <header className="header" ref={headerRef}>
            <div className="container">
                <div className="nav__wrapper">
                    <div className="logo">
                        <h2>SaberVest</h2>
                        {/*<p>Grow</p>*/}
                    </div>

                    {/* navigation */}
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className="menu">
                            {
                                nav__links.map((item,index)=> (
                                    <li className="menu__item" key={index}>
                                        <a href={item.path} onClick={handlerClick} className="menu__link">
                                            {item.display}
                                        </a>
                                    </li>
                                ))}
                        </ul>
                    </div>



                    {/* light mode */}
                    <div className="light__mode">
                        {/*<span onClick={toggleTheme}>*/}
                        {/*    {theme === "light-theme" ? (*/}
                        {/*        <span>*/}
                        {/*        <i className="ri-moon-line"></i> Escuro*/}
                        {/*    </span>*/}
                        {/*    ) : (*/}
                        {/*        <span>*/}
                        {/*        <i className="ri-sun-line"></i> Claro*/}
                        {/*    </span>*/}
                        {/*    )}*/}
                        {/*</span>*/}

                        {/*<div className="light__mode">*/}
                        {/*    <label className="switch">*/}
                        {/*        <input type="checkbox" onClick={toggleTheme}/>*/}
                        {/*        <span className="slider round"></span>*/}
                        {/*    </label>*/}
                        {/*</div>*/}

                        <input type="checkbox"
                               id="switch"
                               className="checkbox"
                               onClick={toggleTheme}
                        />

                        <label htmlFor="switch"
                               className="toggle">
                            <i className="ri-sun-line"></i>
                            <i className="ri-moon-line"></i>

                        </label>

                        {/*<React.Fragment>*/}
                        {/*    <ToggleSwitch label="Notifications" />*/}
                        {/*    <ToggleSwitch label="Subscribe" />*/}
                        {/*</React.Fragment>*/}

                    </div>

                    <span className="mobile__menu" onClick={toggleMenu}>
                        <i className="ri-menu-line"></i>
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;