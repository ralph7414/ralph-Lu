import { Link } from 'react-router-dom'

const Game = () => {
    let css =
        'h-72 w-72 flex justify-center items-center border-2 rounded-4xl hover:bg-neutral-800 m-5 text-center'

    let css2 = 'flex justify-center items-center'
    return (
        <>
            <section className="my-16 mx-40 max-md:mx-10">
                <h1 className="mt-[6rem] mb-10 flex justify-center items-center text-6xl tracking-wide">
                    遊戲列表
                </h1>

                <ul className="grid grid-cols-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-4">
                    <Link className={css2}>
                        <div className={css}>1</div>
                    </Link>

                    <Link className={css2}>
                        <div className={css}>2</div>
                    </Link>

                    <Link className={css2}>
                        <div className={css}>3</div>
                    </Link>

                    <Link className={css2}>
                        <div className={css}>4</div>
                    </Link>

                    <Link className={css2}>
                        <div className={css}>5</div>
                    </Link>

                    <Link className={css2}>
                        <div className={css}>6</div>
                    </Link>
                </ul>
            </section>
        </>
    )
}

export default Game
