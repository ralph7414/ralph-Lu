// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//     <StrictMode>
//         <App />
//     </StrictMode>
// )

import React from 'react'
import ReactDom from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import RootLayout from './routes/pages/RootLayout'
import App from './routes/pages/App'
import Error from './routes/pages/Error'
import Portfolio from './routes/pages/Portfolio'
import Game from './routes/pages/Game'
import Note from './routes/pages/Note'
import Practice from './routes/pages/Practice'
import About from './routes/pages/About'

import Website from './components/Protfolio/Website'
import Work from './components/Protfolio/Work'
import Video from './components/Protfolio/Video'
import Snack from './components/Game/GameList/Snack'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <App />,
            },
            {
                path: 'ralph',
                element: <App />,
            },
            {
                path: '/portfolio',
                element: <Portfolio />,
                children: [
                    { index: true, element: <Work /> },
                    { path: 'website', element: <Website /> },
                    { path: 'video', element: <Video /> },
                ],
            },
            {
                path: '/game',
                element: <Game />,
                children: [{ path: 'snack', element: <Snack /> }],
            },
            {
                path: '/note',
                element: <Note />,
            },
            {
                path: '/practice',
                element: <Practice />,
            },
            {
                path: 'about',
                element: <About />,
            },
        ],
    },
])

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
