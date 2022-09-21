import Link from 'next/link'
import React from 'react'

import {RiHealthBookLine} from 'react-icons/ri'

function Navbar() {
  return (
    <div className='z-0'>
         <div> <nav className='h-16 px-16 sticky   flex  items-center justify-between '>
    <Link href={'/'}>
    <div className='font-bold cursor-pointer text-white text-2xl font-mono '>
        TokenCreator
    </div>
    </Link>
    <div className="flex text-white items-center ">
      

      <div className='flex mx-5 text-5xl relative'>
      <Link href={'/Token'}>
        <a >
        <RiHealthBookLine/>
        </a>
      
      </Link>
      </div>
      <div>
    <Link href="/TokenData">
      <a className='cursor-pointer'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-11 text-4xl w-11" data-v-81440b78=""><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
      </a>
      </Link>
      </div>

    </div>
  </nav></div>
    </div>
  )
}

export default Navbar