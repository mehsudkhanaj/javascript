'use client'
import {useRouter} from 'next/navigation'
const about = () => {
    const router=useRouter();
  return (
    <>
    <h1>About Page</h1>
    <button onClick={()=>router.push('/')}>Click me</button>
    </>
  )
}

export default about