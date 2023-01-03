import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
const Layout = (children) => {
    return (
        <>
            <Navbar />
            <div className='mt-20'>
                <Outlet>
                    {children}
                </Outlet>
            </div>
        </>
    )
}

export default Layout
