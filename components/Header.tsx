import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header>
        <Image
            src="./trello-logo.svg"
            alt="Trello logo"
            width={300}
            height={100}
            className='w-44 pb-10 object-contain md:w-56 md:pb-0'
        />

        <div>
            <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
                <Search className='h-6 w-6 text-gray-600'/>
                <input type="text" placeholder='Search' className='flex-1'/>
                <button type='submit'>
                    Search
                </button>
            </form>
        </div>
    </header>
  )
}

export default Header