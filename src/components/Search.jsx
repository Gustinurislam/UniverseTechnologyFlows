import React from 'react'

const Search = () => {
    return (
        <div>
            <div className='flex text-white bg-black/30 rounded-full'>
                <input type="text" placeholder='keyword search here' className=' py-2 px-5 bg-transparent focus:outline-none' />

                <div className='flex items-center px-8 py-2 border border-[#53BEBE] rounded-full  bg-black/30 cursor-pointer'>
                    <p className='pr-5'>Search</p>
                    <img src="/assets/search.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Search
