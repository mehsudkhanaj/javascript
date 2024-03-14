'use client'
import {useRouter} from 'next/navigation'
const services = () => {
  const router=useRouter();
  return (
    <div>
      <h1>Welcome To Services Page</h1>
      <button onClick={()=>router.push('/')}>Click Me</button>
    </div>
  )
}

export default services