import React, { useState } from 'react';
import logo from '../assets/img/swift.png';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="mt-5 mb-5">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-16" alt="Swift Logo"/>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white"></span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
                        onClick={toggleMenu} aria-controls="navbar-default" aria-expanded={isMenuOpen}>
                    <span className="sr-only">Ouvrir le menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className={classNames("w-full md:w-auto md:flex md:items-center md:space-x-8 rtl:space-x-reverse", {'justify-center': isMenuOpen, 'hidden': !isMenuOpen})} id="navbar-default">
                    <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <Link as={Link} to="/connexion">
                                <button type="button"
                                        className="w-32 text-black bg-white border-2 border-blue-500 hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none font-medium rounded-2xl text-sm px-4 py-2 mb-4 md:mb-0">
                                    Connexion
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link as={Link} to="/inscription">
                                <button type="button" className="w-32 text-white bg-blue-500 border-2 border-blue-500 hover:bg-blue-600 hover:border-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none font-medium rounded-2xl text-sm px-4 py-2">
                                    Inscription
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;