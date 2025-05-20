import { Link, Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Game = () => {
    let css =
        'h-72 w-72 flex justify-center items-center border-2 rounded-4xl hover:bg-neutral-800 m-5 text-center overflow-hidden'

    let css2 = 'flex justify-center items-center hover:scale-150 w-full h-full'

    const [gameState, setGameState] = useState(true)

    const location = useLocation()
    console.log(location.pathname) // "/game/snack"

    useEffect(() => {
        if (location.pathname.startsWith('/game/')) {
            setGameState(false)
        } else {
            setGameState(true)
        }
    }, [location.pathname]) // 當路徑改變時執行

    return (
        <>
            <section className="my-16 mx-40 max-md:mx-10">
                {gameState && (
                    <>
                        <h1 className="mt-[6rem] mb-10 flex justify-center items-center text-6xl tracking-wide ">
                            遊戲列表
                        </h1>
                        <ul className="grid grid-cols-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-4 ">
                            <Link className={css} to={'snack'}>
                                <div className={css2}>123</div>
                            </Link>

                            <Link className={css}>
                                <div className={css2}>2</div>
                            </Link>

                            <Link className={css}>
                                <div className={css2}>3</div>
                            </Link>

                            <Link className={css}>
                                <div className={css2}>4</div>
                            </Link>

                            <Link className={css}>
                                <div className={css2}>5</div>
                            </Link>

                            <Link className={css}>
                                <div className={css2}>6</div>
                            </Link>
                        </ul>
                    </>
                )}
            </section>
            {!gameState && (
                <nav>
                    <h1 className="mt-[6rem] mb-10 flex justify-center items-center text-6xl tracking-wide text-white">
                        {location.pathname.replace('/game/', '')}
                    </h1>
                </nav>
            )}
            <section className="h-[80vh]">
                <Outlet />
            </section>
        </>
    )
}

export default Game
