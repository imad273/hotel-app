import React from 'react'
import Home from 'pages/home'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './Sidebar'
import { Bell, UserRound } from 'lucide-react'

const Layout = () => {

  const routes = [
    {
      path: "/",
      element: <Home />
    }
  ]

  return (
    <main className='flex text-white font-mine'>
      <div className='fixed min-h-screen bg-dark_bg w-72'>
        <Sidebar />
      </div>

      <div className="w-full min-h-screen content bg-dark_content_bg ml-72">
        <div className='w-full px-4 py-2 border-l header bg-dark_bg border-stone-800'>
          <div className='flex items-center justify-end gap-2'>
            <div className='p-2 border-2 border-gray-400 cursor-pointer rounded-xl'>
              <Bell size={22} className='text-gray-300' />
            </div>
            <div className='p-2 border-2 border-gray-400 cursor-pointer rounded-xl'>
              <UserRound size={22} className='text-gray-300' />
            </div>
          </div>
        </div>

        <div className='py-3 px-7'>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </div>
      </div>
    </main>
  )
}

export default Layout