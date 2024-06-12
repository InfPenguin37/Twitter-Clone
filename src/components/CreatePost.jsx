import React from 'react';
import Avatar from 'react-avatar';
import { CiImageOn } from "react-icons/ci";

export default function CreatePost() {
    return (
        <div className='w-[100%]'>
            <div className="">
                <div className="flex items-center justify-evenly border-b border-gray-200">
                    <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3">
                        <h1 className='font-semibold text-gray-600 text-lg'>For You</h1>
                    </div>
                    <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3">
                        <h1 className='font-semibold text-gray-600 text-lg'>Following</h1>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex items-center">
                        <div className="">
                            <Avatar src="https://avatars.githubusercontent.com/u/93284362?v=4" size="40" round={true} />
                        </div>
                        <input className="w-full outline-none border-none text-xl m-2" type="text" placeholder='What is happening?!' />
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-200 p-4">
                        <div className="">
                            <CiImageOn />
                        </div>
                        <button className="px-4 py-2 border-none text-md bg-[#1D9BFB] rounded-full text-white font-bold">Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
