import React from 'react'

const LatestDataLeak = () => {
    return (
        <div className='ml-8 mt-1 bg-black/10 rounded-3xl p-4'>
            <div className='flex items-center justify-between mb-3'>
                <h2 className='text-white text-lg'>Latest Data Leak</h2>
                <img src="assets/lastetsdataleak.svg" alt="lastetsdataleak" className="w-5" />
            </div>

            <div className='space-y-4 ml-2'>
                <div className="flex items-center justify-between space-x-2">
                    <div className='text-white text-sm'>
                        <p>Goverment</p>
                    </div>

                    <div className='text-gray-500 text-sm flex space-x-3'>
                        <span>|</span>
                        <p>http://www.disukcakpil.com/datasource..</p>
                    </div>
                </div>

                <div className="flex items-center justify-between space-x-2">
                    <div className='text-white text-sm'>
                        <p>Goverment</p>
                    </div>

                    <div className='text-gray-500 text-sm flex space-x-3'>
                        <span>|</span>
                        <p>http://www.dirjenpajak.com/datasource..</p>
                    </div>
                </div>
                <div className="flex items-center justify-between space-x-2">
                    <div className='text-white text-[10px]'>
                        <p className='whitespace-nowrap'>Fintect National</p>
                    </div>

                    <div className='text-gray-500 text-sm flex space-x-3'>
                        <span>|</span>
                        <p>http://www.bayaronline.com/datasource..</p>
                    </div>
                </div>
                <div className="flex items-center justify-between space-x-2">
                    <div className='text-white text-[13px]'>
                        <p>Marketplace</p>
                    </div>

                    <div className='text-gray-500 text-sm flex space-x-1'>
                        <span>|</span>
                        <p>http://www.marketplace1.com/datasource..</p>
                    </div>
                </div>
                <div className="flex items-center justify-between space-x-2">
                    <div className='text-white text-[13px]'>
                        <p>Marketplace</p>
                    </div>

                    <div className='text-gray-500 text-sm flex space-x-3'>
                        <span>|</span>
                        <p>http://www.Marketplace2.com/datasource..</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestDataLeak
