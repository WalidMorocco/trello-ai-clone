'use client'

import { Search, UserCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Avatar from 'react-avatar'

function Header() {
  return (
    <header>
        <div className='flex flex-col md:flex-row items-center p-5 rounded-b-2xl'>

            <div 
                className='absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to to-blue-trello rounded-md filter blur-3xl opacity-50 -z-50'
            />

            <Image
                src="./trello-logo.svg"
                alt="Trello logo"
                
                width={300}
                height={100}
                className='w-44 pb-10 object-contain md:w-56 md:pb-0'
            />
            
            <div className='flex items-center space-x-5 flex-1 justify-end w-full'>
                {/* Search Box */}
                <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
                    <Search className='h-6 w-6 text-gray-600'/>
                    <input type="text" placeholder='Search' className='flex-1'/>
                    <button type='submit' hidden>
                        Search
                    </button>
                </form>

                {/* Avatar */}
                <Avatar name='Walid Amar' round size='50' color='#0055D1' />
            </div>
        </div>
        
        <div className='flex items-center justify-center px-5 md:py-5'>
            <p className='flex items-center p-5 text-md font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-blue-trello'>
                <UserCircle className='inline-block h-10 w-10 text-blue-trello mr-2' />
                GPT is summarising your tasks for the day ...
            </p>
        </div>
    </header>
  )
}

export default Header