const TopDataLeak = () => {
    return (
        <div className='max-w-md ml-8 space-y-5 bg-black/10 rounded-3xl p-4'>
            <div className='flex items-center justify-between mb-3'>
                <h2 className='text-white text-lg'>Weekly Top Data Leak</h2>
                <img src="assets/topdataleak.svg" alt="hot-topic" className="w-6" />
            </div>

            <div className='flex justify-between space-x-2'>
                <div>
                    <p className='text-[#80FF00] text-sm'>[DomainDataLeak]</p>
                    <p className='text-white text-[11px]'>Russia & Ukraine, Getcontact, vk.com, 59 M</p>
                    <p className='text-white text-[11px] max-w-xs'>Data Leaks  <span className="text-[#53BEBE]">Fname, Mobil, DOB, Address</span> </p>
                </div>

                <div>
                    <p className='text-[#53BEBE] text-2xl font-medium'>759</p>
                    <p className='text-white text-sm'>Comments</p>
                    <p className="text-[10px] text-gray-500">Dec 14, 2020 03:36 AM</p>
                </div>
            </div>
            {/* space  */}
            <div className='flex justify-between'>
                <div>
                    <p className='text-[#FF5151] text-sm'>[DomainDataLeak]</p>
                    <p className='text-white text-[11px]'>Russia & Ukraine, Getcontact, vk.com, 59 M</p>
                    <p className='text-white text-[11px]'>Data Leaks  <span className="text-[#53BEBE]">Fname, Mobil, DOB, Address</span> </p>
                </div>

                <div className=''>
                    <p className='text-[#53BEBE] text-2xl font-medium'>547</p>
                    <p className='text-white text-sm'>Comments</p>
                    <p className="text-[10px] text-gray-500">Dec 14, 2020 03:36 AM</p>
                </div>
            </div>
            {/* space  */}
            <div className='flex justify-between'>
                <div>
                    <p className='text-[#FFAA47] text-sm'>[DomainDataLeak]</p>
                    <p className='text-white text-[11px]'>Russia & Ukraine, Getcontact, vk.com, 59 M</p>
                    <p className='text-white text-[11px]'>Data Leaks  <span className="text-[#53BEBE]">Fname, Mobil, DOB, Address</span> </p>
                </div>

                <div className=''>
                    <p className='text-[#53BEBE] text-2xl font-medium'>352</p>
                    <p className='text-white text-sm'>Comments</p>
                    <p className="text-[10px] text-gray-500">Dec 14, 2020 03:36 AM</p>
                </div>
            </div>
        </div>
    )
}

export default TopDataLeak
