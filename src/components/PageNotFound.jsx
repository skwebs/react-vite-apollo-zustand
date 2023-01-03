import React from 'react'
import { NavLink } from 'react-router-dom'
const PageNotFound = () => {
    return (
        <>
            <div className='bg-white mt-16 w-full flex flex-col pt-32 justify-center items-center'>
                <div className='flex justify-center items-center'>

                    <div className='text-6xl font-semibold text-indigo-600 px-6 border-r-2'>
                        404
                    </div>
                    <div className='font-semibold px-6'>
                        <div className='text-2xl md:text-4xl text-gray-800'>
                            Page Not Found
                        </div>
                        <p className='text-xs md:text-base text-gray-400'>Please check the URL in address bar and try again.</p>
                    </div>
                </div>
                <div className='mt-10'>
                    <NavLink className="mx-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 hover:text-white text-white font-semibold" to={`/`} >Go to Home</NavLink>
                    <NavLink className="px-4 py-2 mt-10 rounded-lg bg-indigo-100 text-indigo-600 mx-2 font-semibold" to={`/contact`} >Contact Us</NavLink>
                </div>


            </div>
        </>
    )
}

export default PageNotFound
