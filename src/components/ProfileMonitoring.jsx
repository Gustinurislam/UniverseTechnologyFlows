import React from 'react'

const ProfileMonitoring = () => {
    return (
        <div className='max-w-md mt-1 space-y-5 bg-black/10 rounded-3xl p-4'>
            <div className='flex items-center justify-between mb-2'>
                <h2 className='text-white text-lg'>Profile Monitoring</h2>
                <img src="assets/profilemonitoring.svg" alt="profilemonitoring" className="w-5" />
            </div>

            <div className="flex items-center justify-between">
                <div>
                    <button className='border border-gray-500 text-white rounded-full px-10 py-2 mb-2'>ZackXiX65</button>
                    <p className='text-gray-500 text-[15px]'>During online on http://www.forum...</p>
                </div>


                <div className="text-[#53BEBE] flex border-b border-[#53BEBE] mr-5">
                    <p className="mr-1 text-sm">Go Details</p>
                    <img src="/assets/next.svg" alt="next" className='w-2' />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div>
                    <button className='flex items-center border border-gray-500 text-white rounded-full px-6 py-2 mb-2'>
                        <div className="bg-gray-500 w-3 h-3 mr-2 rounded-full" />
                        <p>Bicarakebuka11</p>
                    </button>
                    <p className='text-gray-500'>Latest online 10 oct 2022 10:11 PM</p>
                </div>


                <div className="text-[#53BEBE] flex border-b border-[#53BEBE] mr-5">
                    <p className="mr-1 text-sm">Go Details</p>
                    <img src="/assets/next.svg" alt="next" className='w-2' />
                </div>
            </div>
        </div>
    )
}

export default ProfileMonitoring
