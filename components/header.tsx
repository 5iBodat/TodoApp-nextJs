import Link from 'next/link'
import { useState, useEffect } from 'react';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);


    const handleToggle = () => {
        setIsOpen(!isOpen)

    }

    return (
        <nav className="w-full flex item-center justify-center bg-blue-800 p-3 flex-wrap">
            <div className="container flex flex-wrap">
                <Link href="/">
                    <a className="p-2 mr-4 inline-flex item-center">
                        <span className="text-white text-xl font-bold tracking-wide">Sahat App</span>
                    </a>
                </Link>
                <button className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto nav-toggler" data-target="#navigation" onClick={handleToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>
                <div className={isOpen ? "top-nav transition ease-in-out delay-150 duration-300 w-full lg:inline-flex lg:flex-grow lg:w-auto" : "hidden top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto"} id="navigation">
                    <div className="lg:inline-flex lg:flex-row flex flex-col">
                        <Link href="/">
                            <a className="text-white lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-900">Home</a>
                        </Link>
                        <Link href="/todo">
                            <a className="text-white lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-900">Todo</a>
                        </Link>
                        <Link href="/galery">
                            <a className="text-white lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-900">Galery</a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Header;