'use client'

import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Avatar from 'react-avatar'

function Header() {
  return (
    <header>
        <div className='flex flex-col md:flex-row items-center p-5 bg-gray-500 rounded-b-2xl'>
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
                <Avatar name='Walid Amar' round size='50' color='#0079bf'/>
            </div>
        </div>
    </header>
  )
}

export default Header