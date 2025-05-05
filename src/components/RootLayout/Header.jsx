import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    let nav_link =
        'text-lg ml-8 duration-400 text-white text-xl no-underline hover:underline hover:underline-offset-8 '

    // let nav_active = 'text-lg mx-4 text-yy underline underline-offset-8 '

    return (
        <>
            <nav className="h-[3rem] bg-red-500">
                <ul className="flex justify-around content-center my-[1rem] px-8">
                    <li>
                        <Link
                            className="w-24 me-7 relative top-px cursor-pointer"
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
