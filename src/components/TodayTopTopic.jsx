import React from 'react'

const TodayTopTopic = () => {
    return (
        <div className='max-w-md bg-black/10 rounded-3xl p-1'>
            <div className='flex items-center justify-between mb-2'>
                <h2 className='text-white text-lg'>Today Top Topic</h2>
                <img src="assets/hot-topic.svg" alt="hot-topic" className="w-5" />
            </div>

            <div className='flex justify-between'>
                <div>
                    <p className='text-white'>Title Post Lorem Ipsum</p>
                    <p className='text-gray-500 text-sm max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum est</p>
                </div>

                <div className='flex space-x-2 mr-5'>
                    <div>
                        <p className='text-[#53BEBE] text-2xl font-medium'>759</p>
                        <p className='text-white text-sm'>Comments</p>
                    </div>
                    <div>
                        <p className='text-[#53BEBE] text-2xl font-medium'>934</p>
                        <p className='text-white text-sm'>Views</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center whitespace-nowrap space-x-1 mt-2 mb-2">
                <p className="text-white text-sm">post by</p>
                <div className="bg-[#523407] text-white px-2 rounded-full text-sm">national297freedom</div>
                <div className="flex">
                    <img src="assets/figure1.png" alt="" className="w-5 " />
                    <img src="assets/figure2.png" alt="" className="w-5 " />
                    <img src="assets/figure3.png" alt="" className="w-5" />
                    <img src="assets/figure4.png" alt="" className="w-5" />
                </div>
                <p className="text-white text-[8px]">34 figure mention</p>
                <div className="text-[#53BEBE] flex border-b border-[#53BEBE]">
                    <p className="text-xs mr-1">Go Details</p>
                    <img src="/assets/next.svg" alt="next" className='w-2' />
                </div>
            </div>
            <hr className="border-b border-white" />

            <div className="mt-3">
                <div className='flex justify-between'>
                    <div>
                        <p className='text-white'>Title Post Lorem Ipsum</p>
                        <p className='text-gray-500 text-sm max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum est ad!</p>
                    </div>

                    <div className='flex space-x-2 mr-6'>
                        <div>
                            <p className='text-[#53BEBE] text-2xl font-medium'>636</p>
                            <p className='text-white text-sm'>Comments</p>
                        </div>
                        <div>
                            <p className='text-[#53BEBE] text-2xl font-medium'>436</p>
                            <p className='text-white text-sm'>Views</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center space-x-1 whitespace-nowrap mt-2 mb-2">
                    <p className="text-white text-sm">post by</p>
                    <div className="bg-[#892323] text-white px-2 rounded-full text-sm">national297freedom</div>
                    <div className="flex">
                        <img src="assets/figure1.png" alt="" className="w-5 relative" />
                        <img src="assets/figure2.png" alt="" className="w-5 " />
                        <img src="assets/figure3.png" alt="" className="w-5" />
                        <img src="assets/figure4.png" alt="" className="w-5" />
                    </div>
                    <p className="text-white text-[8px]">34 figure mention</p>
                    <div className="text-[#53BEBE] flex underline">
                        <p className="mr-1 text-xs">Go Details</p>
                        <img src="/assets/next.svg" alt="next" className='w-2' />
                    </div>
                </div>
                <hr className="border-b border-white" />
            </div>
        </div>

    )
}

export default TodayTopTopic
