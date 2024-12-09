import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from '@components/Root'
import Profil from '@components/profil/Profil'
import Home from '@components/home/Home'
import NotFound from '@components/notFound/NotFound'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/profil/:id',
        element:<Profil />
      },
      {
        path:'*',
        element:<NotFound />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
