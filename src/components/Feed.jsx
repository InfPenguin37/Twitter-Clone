import React from 'react'
import CreatePost from './CreatePost'
import Tweet from './Tweet'

export default function Feed() {
  return (
    <div className='w-[50%] border border-gray-200'>
      <div>
        <CreatePost/>
        <Tweet/>
      </div>
    </div>
  )
}
