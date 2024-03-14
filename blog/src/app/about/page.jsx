'use client'
import React from 'react'
import {useRouter} from 'next/navigation'
const about = () => {
  const router=useRouter();
  return (
    <div>
      <h1>About page</h1>
      <button onClick={()=>router.push('/')}>Go to Home</button >
    </div>
  )
}

export default about