import React from 'react'

const TopAvatarMention = () => {
    return (
        <div className=' mt-6 ml-10 text-white bg-black/20 rounded-3xl p-4'>
            <div className='flex items-center justify-between mb-3'>
                <h2 className='text-white text-lg'>Top Avatar Mention</h2>
                <img src="assets/avatarmention.svg" alt="avatarmention" className="w-6" />
            </div>

            <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                    <div className='bg-[#892323] px-3 rounded-full'>ZackXiX65</div>
                    <p>366+ mention</p>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='bg-[#074452] px-3 rounded-full'>ecoMock</div>
                    <p>205+ mention</p>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='bg-[#523407] px-3 rounded-full'>national297freedom</div>
                    <p>194+ mention</p>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='bg-[#072152] px-3 rounded-full'>Bicarakebuka11</div>
                    <p>76+ mention</p>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='bg-[#310752] px-3 rounded-full'>Trackersedap</div>
                    <p>22+ mention</p>
                </div>
            </div>
        </div>
    )
}

export default TopAvatarMention
