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

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <Error />,
        // children: [
        //     {
        //         index: true,
        //         element: <App />,
        //     },
        //     {
        //         path: 'ralph',
        //         element: <App />,
        //     },
        // ],
    },
])

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
