import { Outlet } from 'react-router-dom'
import Header from '../../components/RootLayout/Header'
import End from '../../components/RootLayout/End'

const RootLayout = () => {
    return (
        <>
            <Header />
            <main className="mt-[3rem]">
                <Outlet />
            </main>
            <End />
        </>
    )
}

export default RootLayout
