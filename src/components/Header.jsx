const Header = () => {
    return (
        <div className="text-white flex items-center justify-center pt-5 max-w-[920px] mx-auto">
            <ul className="flex items-center space-x-5 text-[12px]">
                <li className='cursor-pointer'>HOME</li>
                <li className="text-gray-500 cursor-pointer">PROFILE MANAGEMENT</li>
                <li className="text-gray-500 cursor-pointer">DATA SEARCH</li>
                <li className="text-gray-500 cursor-pointer">ATTACK MONITORING</li>
                <li className="text-gray-500 cursor-pointer">AVATAR MANAGEMENT</li>
                <li className="text-gray-500 cursor-pointer">REPORT</li>
                <li className="text-gray-500 cursor-pointer">AUDIT TRAILS</li>
            </ul>

            <div className="flex items-center space-x-5 ml-12">
                <div className="flex relative">
                    <img src='assets/notification.svg' alt="notification" className="w-5 cursor-pointer" />
                    <div className="absolute left-2 -top-2 border border-black bg-[#FF5151] rounded-full w-4 h-4 flex items-center justify-center">
                        <span className="text-[10px]">3</span>
                    </div>
                </div>

                <img src="assets/settings.svg" alt="" className="w-5 cursor-pointer" />

                <div className="relative">
                    <img src="assets/userprofile.png" alt="" className="w-10" />
                    <div className="bg-[#80FF00] w-3 h-3 rounded-full absolute bottom-0 right-0" />
                </div>
            </div>
        </div>
    )
}

export default Header
