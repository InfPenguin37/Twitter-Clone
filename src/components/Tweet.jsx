import React from 'react';
import Avatar from 'react-avatar';
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { CiHeart, CiBookmark } from "react-icons/ci";

export default function Tweet() {
    return (
        <div>
            <div className="border-b border-gray-200">
                <div className="flex p-4">
                    <Avatar src="https://avatars.githubusercontent.com/u/93284362?v=4" size="40" round={true} />
                    <div className="ml-2 w-full">
                        <div className="flex items-center">
                            <h1 className='font-bold'>Anushka</h1>
                            <p className='text-gray-500 text-sm ml-1'>@anushka2905 . 1m</p>
                        </div>
                        <div className="">
                            <p>Hello World.</p>
                        </div>
                        <div className="flex items-center justify-between my-3">
                            <div className="flex items-center">
                                <div className="p-2 hover:bg-blue-100 rounded-full cursor-pointer">
                                <HiOutlineChatBubbleOvalLeft size="24px"/>
                                </div>
                                <p className=''>0</p>
                            </div>
                            <div className="flex items-center">
                                <div className="p-2 hover:bg-red-200 rounded-full cursor-pointer">
                                <CiHeart size="24px"/>
                                </div>
                                <p className=''>0</p>
                            </div>
                            <div className="flex items-center">
                                <div className="p-2 hover:bg-green-100 rounded-full cursor-pointer">
                                <CiBookmark size="24px"/>
                                </div>
                                <p className=''>0</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
