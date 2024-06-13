import React from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div className='flex justify-between w-[65%] mx-auto'>
      <LeftSidebar/>
      <Outlet/>
      <RightSidebar/>
    </div>
  )
}
