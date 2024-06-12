import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { RiNotification4Fill } from "react-icons/ri";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

export default function LeftSidebar() {
  return (
    <div className='w-[20%]'>
      <div>
        <div>
            <img width= {"40px"} src="https://static.vecteezy.com/system/resources/previews/031/737/227/non_2x/twitter-new-logo-twitter-icons-new-twitter-logo-x-2023-x-social-media-icon-free-png.png" alt='X-logo'/>
        </div>
        <div className="my-4">
          <div className='flex items-center my-2 px-2 py-4 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
              <div>
                <MdHomeFilled size="24px" />
              </div>
              <h1 className='text-xl ml-3 hover:font-bold'>Home</h1>
          </div>
          <div className='flex items-center my-2 px-2 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
              <div>
                <LuSearch size="24px" />
              </div>
              <h1 className='text-xl ml-3 hover:font-bold'>Explore</h1>
          </div>
          <div className='flex items-center my-2 px-2 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
              <div>
                <RiNotification4Fill size="24px" />
              </div>
              <h1 className='text-xl ml-3 hover:font-bold'>Notifications</h1>
          </div>
          <div className='flex items-center my-2 px-2 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
              <div>
                <PiBookmarkSimpleFill size="24px" />
              </div>
              <h1 className='text-xl ml-3 hover:font-bold'>Bookmarks</h1>
          </div>
          <div className='flex items-center my-2 px-2 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
              <div>
                <FaUser size="24px" />
              </div>
              <h1 className='text-xl ml-3 hover:font-bold'>Profile</h1>
          </div>
          <div className='flex items-center my-2 px-2 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
              <div>
                <MdLogout size="24px" />
              </div>
              <h1 className='text-xl ml-3 hover:font-bold'>Logout</h1>
          </div>
          <button className='px-4 py-2 border-none text-md bg-[#1D9BFB] w-full rounded-full text-white font-bold'>Post</button>
        </div>
      </div>
    </div>
  )
}
