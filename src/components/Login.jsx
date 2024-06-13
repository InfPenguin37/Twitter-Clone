import React, { useState } from 'react'

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);

    const loginSignupHandler =() => {
        setIsLogin(!isLogin);
    }
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className="flex items-center justify-evenly w-[80%]">
                <div className="">
                    <img width={"400px"} src="https://static.vecteezy.com/system/resources/previews/031/737/227/non_2x/twitter-new-logo-twitter-icons-new-twitter-logo-x-2023-x-social-media-icon-free-png.png" alt='X-logo' />
                </div>
                <div className="">
                    <div className="my-5">
                        <h1 className='font-bold text-6xl'>Happening now</h1>
                    </div>
                    <h1 className='mt-4 mb-2 font-semibold text-2xl font-bold'> {!isLogin ? "Signup" : "Login"}</h1>
                    <form action="" className='flex flex-col w-[50%]'>
                        {
                            !isLogin && (<>
                                <input type="text" placeholder='Name' className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' />
                                <input type="text" placeholder='Username' className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' />
                            </>)
                        }
                        <input type="email" placeholder='Email' className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' />
                        <input type="password" placeholder='Password' className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' />
                        <button className='bg-[#1D9BF0] border-none py-2 my-4 rounded-full text-white text-lg'>{isLogin ? "Login" : "Create Account"}</button>
                        <h1>{isLogin ? "Do not have an account?" : "Already have an account?"}</h1><span className="font-semibold text-blue-600 cursor-pointer " onClick={loginSignupHandler}>{isLogin ? "Create account" : "Login"}</span>
                    </form>
                </div>
            </div>
        </div>
    )
}
