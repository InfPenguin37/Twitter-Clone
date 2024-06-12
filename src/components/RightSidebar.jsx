import React from 'react';
import { LuSearch } from "react-icons/lu";
import Avatar from 'react-avatar';

export default function RightSidebar() {
  return (
    <div className='w-[25%]'>
      <div className="flex items-center p-2 bg-gray-100 rounded-full outline-none my-2">
        <LuSearch size="20px" />
        <input type="text" className='bg-transparent outline-none px-2 w-full' placeholder='Search' />
      </div>
      <div className="p-4 bg-gray-100 rounded-md my-4">
        <h1 className='font-bold text-lg'>Who to follow</h1>
        <div className="flex items-center justify-between my-3" >
          <div className="flex">
            <div className="">
              <Avatar src="https://avatars.githubusercontent.com/u/93284362?v=4" size="40" round={true} />
            </div>
            <div className="ml-2">
              <h1 className='font-bold'>Joy</h1>
              <p className='text-sm'>@sinha_joy25</p>
            </div>
          </div>
          <div className="">
              <button className='px-4 py-1 bg-black text-white rounded-full'>Follow</button>
            </div>
        </div>
      </div>
    </div>
  )
}
