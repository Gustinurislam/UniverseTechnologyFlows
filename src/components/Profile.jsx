import Search from "./Search"

const Profile = () => {
    return (
        <div className="flex justify-between">
            <div className="flex items-center">
                <div>
                    <img src="/assets/userprofile.png" alt="userprofile" />
                </div>

                <div className="ml-5 space-y-3">
                    <h2 className="text-white text-2xl">Pengguna0123</h2>
                    <p className="text-gray-500 text-xs">Latest login at 16 Oct 2022 10:24 PM</p>

                    <div className="flex space-x-2">
                        <button className="text-gray-500 border-gray-500 border rounded-full px-2 py-1 flex items-center text-[10px]">
                            <div className="bg-[#80FF00] w-2 h-2 mr-2 rounded-full" />
                            bot account-1
                        </button>

                        <button className="text-gray-500 border-gray-500 border rounded-full px-3 py-1 flex items-center text-[10px]">
                            <div className="bg-gray-500 w-2 h-2 mr-2 rounded-full" />
                            bot account-2
                        </button>

                        <button className="text-gray-500 border-gray-500 border rounded-full px-3 py-1 flex items-center text-[10px]">
                            <div className="bg-gray-500 w-2 h-2 mr-2 rounded-full" />
                            bot account-2
                        </button>
                    </div>

                    <button className="inline-flex items-center text-white border bg-[#53BEBE] rounded-full px-8 py-2 space-x-5 border-black">
                        <p>Edit User</p>
                        <img src="/assets/next.svg" alt="next" className="w-4" />
                    </button>
                </div>
            </div>
            
            <Search />
        </div>


    )
}

export default Profile
