import { Link } from 'react-router-dom'

const Game = () => {
    let css = 'h-72 w-72 border-2 rounded-4xl hover:bg-neutral-800 m-5'

    return (
        <>
            <section className="my-16">
                <h1 className="mt-[6rem] mb-10 flex justify-center items-center text-6xl tracking-wide">
                    遊戲列表
                </h1>

                <ul className="w-fit flex flex-wrap justify-center items-center mx-20 max-md:mx-5">
                    <Link className="">
                        <div className={css}></div>
                    </Link>

                    <Link className="">
                        <div className={css}></div>
                    </Link>

                    <Link className="">
                        <div className={css}></div>
                    </Link>

                    <Link className="">
                        <div className={css}></div>
                    </Link>

                    <Link className="">
                        <div className={css}></div>
                    </Link>

                    <Link className="">
                        <div className={css}></div>
                    </Link>
                </ul>
            </section>
        </>
    )
}

export default Game
