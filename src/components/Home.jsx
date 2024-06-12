import React from 'react'
import LeftSidebar from './LeftSidebar'
import Feed from './Feed'
import RightSidebar from './RightSidebar'

export default function Home() {
  return (
    <div className='flex justify-between w-[65%] mx-auto'>
      <LeftSidebar/>
      <Feed/>
      <RightSidebar/>
    </div>
  )
}
