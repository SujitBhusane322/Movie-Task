import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='flex justify-around bg-gray-700 p-3 font-roboto '>
        <div className='text-3xl text-white'>MovieDb</div>
        <div className='flex gap-5'>
            <div className=''>
                <ul className='flex gap-4 list-none text-2xl '>
                {/* <li className=' text-gray-950 hover:text-white cursor-pointer'>Popular</li> */}
                <Link to="/">Popular</Link>
                <Link to="/top-rated">Top Rated</Link>
                <Link to="/upcoming-movies">Upcoming</Link>
                {/* <li className=' text-gray-950 hover:text-white cursor-pointer'>Upcoming</li> */}
                </ul>
            </div>
            <div>
                <input type="text" name="" placeholder='Movie Name' className='h-10 pl-2' />
                <button className='bg-gray-900 p-3 ml-3 text-white hover:text-blue-600'>Search</button>

            </div>
        </div>
    </div>
    </>
  )
}

export default Header