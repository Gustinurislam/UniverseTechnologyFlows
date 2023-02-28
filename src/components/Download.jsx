import React from 'react'

const Download = () => {
    return (
        <div className='ml-16 flex items-center justify-center space-x-5'>
            <div className='border inline-flex border-[#53BEBE] px-6 py-3 text-[#53BEBE] rounded-full cursor-pointer'>
                <img src="/assets/link.svg" alt="" className='w-5 mr-2' />
                <p>Visit Link</p>
            </div>

            <div className='border inline-flex border-white px-6 py-3 text-white rounded-full cursor-pointer'>
                <img src="/assets/download.svg" alt="" className='w-5 mr-2' />
                <p>Download</p>
            </div>
        </div>
    )
}

export default Download
