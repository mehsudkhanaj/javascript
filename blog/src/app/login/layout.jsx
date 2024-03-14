'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function Layout ({ children }) {
  const pathname = usePathname()
  // console.log(pathname)
  return (
    <div className='heading'>
      <h1>Welcome to Portal</h1>

      {pathname !== '/login/teacherlogin' ? (
        <ul className='main'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/login/studentlogin'>Student Login</Link>
          </li>
          <li>
            <Link href='/login/teacherlogin'>Teacher Login</Link>
          </li>
        </ul>
      ) : <Link href='/login'>Back to Login</Link>}
      
      {children}
    </div>
  )
}
