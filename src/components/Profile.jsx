import React from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
export default function Profile() {
    return (
        <div className='w-[50%] border-l border-r border-gray-200'>
            <div className="">
                <div className="flex items-center py-2">
                    <Link to="/" className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <IoArrowBackOutline size="24px"/>
                    </Link>
                    <div className='ml-2'>
                        <h1 className="font-bold text-lg">Anish Giri</h1>
                        <p className='text-gray-500 text-sm'>11.6k posts</p>
                    </div>
                </div>
                <img src="https://pbs.twimg.com/profile_banners/256669567/1644785674/600x200" alt="banner" />
                <div className="absolute top-48 ml-2 border-4 border-white rounded-full">
                    <Avatar src="https://pbs.twimg.com/profile_images/1621162596152872961/aq23Sune_400x400.jpg" size="120" round={true} />
                </div>
                <div className="text-right m-4">
                    <button className='px-4 py-1 rounded-full border border-gray-400 hover:bg-gray-400'>Edit Profile</button>
                </div>
                <div className="m-4">
                    <h1 className='font-bold text-xl'>Anish Giri</h1>
                    <p>@anishgiri</p>
                </div>
                <div className="m-4 text-sm">
                    <p>Chess Grandmaster Dutch #1 World Top</p>
                </div>
            </div>
        </div>
    )
}
