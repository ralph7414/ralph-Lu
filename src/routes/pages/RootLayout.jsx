import { Outlet } from 'react-router-dom'
import Nav from '../../components/RootLayout/Nav'
import End from '../../components/RootLayout/End'

const RootLayout = () => {
    return (
        <>
            <Nav />
            <main className="mt-[3rem] ">
                <Outlet />
            </main>
            <End />
        </>
    )
}

export default RootLayout
