import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    let nav_link =
        'text-xl mx-4 duration-400 text-blue-200 no-underline hover:underline hover:underline-offset-8 '

    // let nav_active = 'text-lg mx-4 text-yy underline underline-offset-8 '

    return (
        <>
            <nav className="fixed h-[4rem] bg-blue-900 p-2 items-center w-full z-10">
                <ul className="max-md:hidden flex justify-between content-center px-32 pt-3">
                    <li>
                        <Link
                            className="w-24 m-8 relative top-px cursor-pointer"
                            to="/"
                        >
                            R
                        </Link>
                    </li>
                    <li className="max-md:hidden">
                        <NavLink to="/portfolio" className={nav_link}>
                            作品
                        </NavLink>
                        <NavLink to="/game" className={nav_link}>
                            遊戲
                        </NavLink>

                        <NavLink to="/note" className={nav_link}>
                            筆記
                        </NavLink>
                        <NavLink to="/practice" className={nav_link}>
                            練習
                        </NavLink>
                        <NavLink to="/about" className={nav_link}>
                            關於我
                        </NavLink>
                    </li>
                </ul>

                <ul className="hidden text-4xl max-md:flex max-md:justify-between">
                    <li>
                        <Link
                            className="mr-auto w-24 m-8 relative top-px cursor-pointer self-center"
                            to="/"
                        >
                            R
                        </Link>
                    </li>
                    <FontAwesomeIcon icon={faBars} className="ml-auto" />
                </ul>
            </nav>
        </>
    )
}

export default Header
