import React from 'react'

export default function login() {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor="">username</label>
      <input className=' h-10 border-2 rounded-2xl' type="text" />
      <label htmlFor="">password</label>
      <input className=' h-10  border-2 rounded-2xl' type="text" />
    </div>
  )
}
