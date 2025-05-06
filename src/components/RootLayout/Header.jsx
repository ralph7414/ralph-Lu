import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    let nav_link =
        'text-xl mx-2  duration-400 text-red-800 no-underline hover:underline hover:underline-offset-8 '

    // let nav_active = 'text-lg mx-4 text-yy underline underline-offset-8 '

    return (
        <>
            <nav className=" fixed h-[3rem] bg-red-500 p-2 items-center w-full">
                <ul className="flex justify-between content-center px-32">
                    <li>
                        <Link
                            className="w-24 m-8 relative top-px cursor-pointer"
                            to="/"
                        >
                            R
                        </Link>
                    </li>
                    <li>
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
            </nav>
        </>
    )
}

export default Header
