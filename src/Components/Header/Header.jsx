import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='flex justify-around bg-gray-700 p-3 font-roboto '>
        <div className='text-3xl text-white'>MovieDb</div>
        <div className='flex gap-5'>
            <div className=''>
                <div className='flex gap-4 list-none text-2xl'>
                <Link to="/" className=' hover:text-blue-600'>Popular</Link>
                <Link to="/top-rated" className=' hover:text-blue-600'>Top Rated</Link>
                <Link to="/upcoming-movies" className=' hover:text-blue-600'>Upcoming</Link>
                </div>
            </div>
            <div>
                <input type="text" name="" placeholder='Movie Name' className='h-10 pl-2' />
                <button className='bg-gray-900 p-3 ml-3 text-white hover:bg-blue-600 rounded-md'>Search</button>

            </div>
        </div>
    </div>
    </>
  )
}

export default Header