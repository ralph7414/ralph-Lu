import { Link, Outlet } from 'react-router-dom'

const Portfolio = () => {
    return (
        <>
            <h1 className="pt-[2rem] pb-5 flex justify-center items-center text-6xl tracking-wide bg-blue-900 text-blue-100">
                作品
            </h1>
            <header className="text-center text-3xl mx-auto sticky top-[4rem]">
                <ul className="flex justify-center bg-blue-900 text-blue-100 py-2">
                    <Link to="" className="px-2 mx-2">
                        平面
                    </Link>
                    <Link to="website" className="px-2 mx-2">
                        網站
                    </Link>
                    <Link to="video" className="px-2 mx-2">
                        影片
                    </Link>
                </ul>
            </header>
            <div className="h-lvh bg-blue-900">
                <Outlet />
            </div>
        </>
    )
}

export default Portfolio
