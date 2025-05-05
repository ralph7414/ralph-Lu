import { Outlet } from 'react-router-dom'
import Header from '../../components/RootLayout/Header'

const RootLayout = () => {
    return (
        <>
            <Header />
            <h1 className="flex justify-center items-center text-2xl text-red-500 m-5">
                Hello Sekai
            </h1>
            <Outlet />
        </>
    )
}

export default RootLayout
